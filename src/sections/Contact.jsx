import {
  AlertCircle,
  ArrowUpRight,
  CheckCircle2,
  Copy,
  Loader2,
  Mail,
  MapPin,
  Send,
} from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { track } from "../utils/analytics";
import { Reveal } from "../components/Reveal";
import { Button } from "../components/Button";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "fardinkamran915@gmail.com",
    href: "mailto:fardinkamran915@gmail.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Dhaka, Bangladesh",
    href: null,
  },
];

const initialForm = {
  name: "",
  email: "",
  message: "",
  website: "",
};

export const Contact = () => {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [toast, setToast] = useState(null);
  const mountedAt = useRef(null);

  useEffect(() => {
    mountedAt.current = Date.now();
  }, []);

  const emailAddress = "fardinkamran915@gmail.com";

  const messageLength = formData.message.trim().length;
  const canSubmit = useMemo(
    () => status !== "sending" && formData.name.trim() && formData.email.trim() && messageLength >= 10,
    [formData.email, formData.name, messageLength, status]
  );

  const updateField = (field) => (event) => {
    const value = event.target.value;
    setFormData((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const validate = () => {
    const next = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (formData.name.trim().length < 2) next.name = "Please enter your name.";
    if (!emailPattern.test(formData.email.trim())) next.email = "Enter a valid email address.";
    if (messageLength < 10) next.message = "Please add a little more detail.";

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const openMailFallback = () => {
    const subject = encodeURIComponent(`Portfolio inquiry from ${formData.name.trim()}`);
    const body = encodeURIComponent(
      `Name: ${formData.name.trim()}\nEmail: ${formData.email.trim()}\n\n${formData.message.trim()}`
    );
    window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validate()) {
      setToast({ type: "error", message: "Please check the highlighted fields." });
      return;
    }

    if (formData.website) return;

    // Simple bot friction: real visitors need a moment to fill the form.
    if (mountedAt.current !== null && Date.now() - mountedAt.current < 1500) {
      setToast({ type: "error", message: "Please wait a moment and try again." });
      return;
    }

    setStatus("sending");
    setToast(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
          website: formData.website,
        }),
      });

      const payload = await response.json().catch(() => null);

      if (!response.ok || !payload?.ok) {
        const shouldFallback =
          response.status === 404 ||
          response.status === 503 ||
          payload?.code === "EMAIL_NOT_CONFIGURED" ||
          payload === null;

        if (shouldFallback) {
          openMailFallback();
          setStatus("fallback");
          setToast({
            type: "info",
            message: "Your email app was opened with the message pre-filled.",
          });
          track("contact_mailto_fallback");
          return;
        }

        throw new Error(payload?.message || "Unable to send message.");
      }

      setStatus("success");
      setFormData(initialForm);
      mountedAt.current = Date.now();
      setToast({ type: "success", message: "Message sent successfully. I’ll get back to you soon." });
      track("contact_message_sent");
    } catch (error) {
      console.error(error);
      setStatus("error");
      setToast({
        type: "error",
        message: "Direct sending is unavailable right now. Use the email option below instead.",
      });
      track("contact_message_error");
    }
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setToast({ type: "success", message: "Email address copied." });
      track("contact_email_copied");
    } catch {
      setToast({ type: "info", message: emailAddress });
    }
  };

  return (
    <section id="contact" className="section-shell cv-auto pb-16">
      <div className="site-container">
        <div className="contact-shell relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[#0a101d] p-6 sm:p-9 lg:p-12">
          <div className="contact-orb" aria-hidden="true" />

          <div className="relative grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:gap-16">
            <Reveal>
              <span className="section-kicker">Get in touch</span>
              <h2 className="section-title mt-4">
                Let&apos;s build something
                <span className="block font-serif font-normal italic text-slate-300">
                  useful, ambitious and memorable.
                </span>
              </h2>
              <p className="section-copy mt-5 max-w-lg">
                Have a project, collaboration or opportunity in mind? Send a message and I&apos;ll be happy to discuss it.
              </p>

              <div className="mt-9 space-y-3">
                {contactInfo.map(({ icon: Icon, label, value, href }) => {
                  const content = (
                    <div className="contact-info-row">
                      <span className="feature-icon !mb-0 !h-10 !w-10 !rounded-xl"><Icon size={18} /></span>
                      <span>
                        <span className="block text-xs uppercase tracking-[.16em] text-slate-600">{label}</span>
                        <span className="mt-1 block text-sm text-slate-200">{value}</span>
                      </span>
                      {href && <ArrowUpRight className="ml-auto text-slate-600" size={17} />}
                    </div>
                  );

                  return href ? (
                    <a key={label} href={href} className="block">{content}</a>
                  ) : (
                    <div key={label}>{content}</div>
                  );
                })}
              </div>

              <button type="button" className="copy-email-button" onClick={copyEmail}>
                <Copy size={15} /> Copy email address
              </button>
            </Reveal>

            <Reveal delay={120}>
              <form onSubmit={handleSubmit} className="contact-form-card space-y-5" noValidate>
                <input
                  type="text"
                  name="website"
                  value={formData.website}
                  onChange={updateField("website")}
                  className="contact-honeypot"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                />

                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="field-label">
                    Name
                    <input
                      type="text"
                      value={formData.name}
                      onChange={updateField("name")}
                      placeholder="Your name"
                      className={`field-input ${errors.name ? "field-input--error" : ""}`}
                      aria-invalid={Boolean(errors.name)}
                    />
                    {errors.name && <span className="field-error">{errors.name}</span>}
                  </label>

                  <label className="field-label">
                    Email
                    <input
                      type="email"
                      value={formData.email}
                      onChange={updateField("email")}
                      placeholder="you@example.com"
                      className={`field-input ${errors.email ? "field-input--error" : ""}`}
                      aria-invalid={Boolean(errors.email)}
                    />
                    {errors.email && <span className="field-error">{errors.email}</span>}
                  </label>
                </div>

                <label className="field-label">
                  Message
                  <textarea
                    rows={7}
                    maxLength={1200}
                    value={formData.message}
                    onChange={updateField("message")}
                    placeholder="Tell me a little about what you have in mind..."
                    className={`field-input resize-none ${errors.message ? "field-input--error" : ""}`}
                    aria-invalid={Boolean(errors.message)}
                  />
                  <span className="field-meta-row">
                    <span>{errors.message || "A short project or opportunity summary is enough."}</span>
                    <span>{messageLength}/1200</span>
                  </span>
                </label>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-xs leading-5 text-slate-600">
                    Messages are sent securely through this site. If delivery is temporarily unavailable, you can still contact me by email.
                  </p>

                  <Button type="submit" size="lg" className="shrink-0" disabled={!canSubmit}>
                    {status === "sending" ? (
                      <><Loader2 size={17} className="contact-spinner" /> Sending…</>
                    ) : (
                      <>Send message <Send size={17} /></>
                    )}
                  </Button>
                </div>
              </form>
            </Reveal>
          </div>
        </div>

        <footer className="flex flex-col gap-3 py-8 text-xs text-slate-600 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Fardin Kamran.</span>
          <a href="#top" className="transition-colors hover:text-slate-300">Back to top ↑</a>
        </footer>
      </div>

      {toast && (
        <div className={`contact-toast contact-toast--${toast.type}`} role="status">
          {toast.type === "success" && <CheckCircle2 size={17} />}
          {toast.type === "error" && <AlertCircle size={17} />}
          {toast.type === "info" && <Mail size={17} />}
          <span>{toast.message}</span>
          <button type="button" onClick={() => setToast(null)} aria-label="Dismiss notification">×</button>
        </div>
      )}
    </section>
  );
};
