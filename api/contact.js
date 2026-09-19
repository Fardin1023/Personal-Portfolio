const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_NAME_LENGTH = 120;
const MAX_EMAIL_LENGTH = 180;
const MAX_MESSAGE_LENGTH = 1200;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;

const rateLimitStore = globalThis.__portfolioContactRateLimitStore || new Map();
globalThis.__portfolioContactRateLimitStore = rateLimitStore;

const escapeHtml = (value = "") =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

const getHeader = (request, name) => {
  const lowerName = name.toLowerCase();
  if (typeof request.headers?.get === "function") return request.headers.get(name);
  return request.headers?.[lowerName] || request.headers?.[name] || "";
};

const getClientIp = (request) => {
  const forwarded = getHeader(request, "x-forwarded-for");
  return String(forwarded || request.socket?.remoteAddress || "unknown")
    .split(",")[0]
    .trim();
};

const isRateLimited = (ip) => {
  const now = Date.now();
  const current = rateLimitStore.get(ip);

  if (!current || now - current.startedAt > RATE_LIMIT_WINDOW_MS) {
    rateLimitStore.set(ip, { startedAt: now, count: 1 });
    return false;
  }

  current.count += 1;
  rateLimitStore.set(ip, current);
  return current.count > RATE_LIMIT_MAX_REQUESTS;
};

const isAllowedOrigin = (request) => {
  const origin = getHeader(request, "origin");
  if (!origin) return true;

  try {
    const originUrl = new URL(origin);
    const host = getHeader(request, "x-forwarded-host") || getHeader(request, "host");
    if (host && originUrl.host === host) return true;

    const configuredOrigins = String(process.env.CONTACT_ALLOWED_ORIGINS || "")
      .split(",")
      .map((value) => value.trim())
      .filter(Boolean);

    return configuredOrigins.includes(originUrl.origin);
  } catch {
    return false;
  }
};

const sendJson = (response, status, payload) => {
  response.setHeader("Cache-Control", "no-store");
  return response.status(status).json(payload);
};

export default async function handler(request, response) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return sendJson(response, 405, { ok: false, message: "Method not allowed." });
  }

  if (!isAllowedOrigin(request)) {
    return sendJson(response, 403, { ok: false, message: "Request origin is not allowed." });
  }

  const clientIp = getClientIp(request);
  if (isRateLimited(clientIp)) {
    response.setHeader("Retry-After", String(Math.ceil(RATE_LIMIT_WINDOW_MS / 1000)));
    return sendJson(response, 429, {
      ok: false,
      message: "Too many messages were sent recently. Please try again later.",
    });
  }

  const body = request.body && typeof request.body === "object" ? request.body : {};
  const { name = "", email = "", message = "", website = "" } = body;

  // Honeypot field: bots often fill hidden inputs. Return success without sending.
  if (String(website).trim()) return sendJson(response, 200, { ok: true });

  const cleanName = String(name).trim().slice(0, MAX_NAME_LENGTH);
  const cleanEmail = String(email).trim().slice(0, MAX_EMAIL_LENGTH);
  const cleanMessage = String(message).trim().slice(0, MAX_MESSAGE_LENGTH);

  if (cleanName.length < 2 || !emailPattern.test(cleanEmail) || cleanMessage.length < 10) {
    return sendJson(response, 400, { ok: false, message: "Invalid form data." });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.RESEND_FROM_EMAIL || "Portfolio <onboarding@resend.dev>";

  if (!apiKey || !to) {
    return sendJson(response, 503, {
      ok: false,
      code: "EMAIL_NOT_CONFIGURED",
      message: "Email delivery is not configured.",
    });
  }

  try {
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: cleanEmail,
        subject: `Portfolio inquiry from ${cleanName}`,
        text: `Name: ${cleanName}\nEmail: ${cleanEmail}\n\n${cleanMessage}`,
        html: `
          <div style="font-family:Arial,sans-serif;line-height:1.6;color:#111827">
            <h2>New portfolio message</h2>
            <p><strong>Name:</strong> ${escapeHtml(cleanName)}</p>
            <p><strong>Email:</strong> ${escapeHtml(cleanEmail)}</p>
            <p><strong>Message:</strong></p>
            <p>${escapeHtml(cleanMessage).replaceAll("\n", "<br />")}</p>
          </div>
        `,
      }),
    });

    const payload = await resendResponse.json().catch(() => ({}));

    if (!resendResponse.ok) {
      console.error("Resend rejected the contact request", {
        status: resendResponse.status,
        name: payload?.name,
        message: payload?.message,
      });
      return sendJson(response, 502, {
        ok: false,
        message: "Email service rejected the request.",
      });
    }

    return sendJson(response, 200, { ok: true });
  } catch (error) {
    console.error("Contact API error", error instanceof Error ? error.message : error);
    return sendJson(response, 500, { ok: false, message: "Unable to send message." });
  }
}
