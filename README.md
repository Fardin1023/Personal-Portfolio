# Fardin Kamran — Portfolio

A responsive personal portfolio built with React, Vite, and Tailwind CSS. The site presents education, research, projects, experience, certificates, and contact information, with a serverless contact endpoint for production email delivery.

## Features

- Responsive single-page portfolio layout
- Hero, About, Education, Research, Projects, Experience, Certificates, and Contact sections
- Keyboard command palette (`Ctrl/Cmd + K`)
- CV preview and download experience
- Project detail modals and certificate previews
- Scroll/reveal interactions and progress indicator
- Vercel Analytics-compatible client event tracking
- Serverless contact form using the Resend API
- Honeypot, validation, same-origin checks, and lightweight rate limiting for contact submissions
- Mail-app fallback when direct delivery is unavailable

## Tech stack

- React 19
- Vite 8
- Tailwind CSS 4
- Lucide React / React Icons
- Vercel Functions
- Resend email API

## Local setup

Requirements: Node.js 20+ and npm.

```bash
npm install
cp .env.example .env.local
npm run dev
```

Vite will print the local development URL in the terminal.

> The React site can be developed locally without configuring Resend. The `/api/contact` serverless endpoint is intended for Vercel. Without email configuration, the contact form falls back to the visitor's email application.

## Environment variables

Copy `.env.example` and configure these values in Vercel Project Settings → Environment Variables for Preview and Production as appropriate.

| Variable | Required | Purpose |
| --- | --- | --- |
| `RESEND_API_KEY` | Yes | Authenticates requests to Resend. Keep this secret and server-side only. |
| `CONTACT_TO_EMAIL` | Yes | Destination inbox for contact-form messages. |
| `RESEND_FROM_EMAIL` | Recommended | Sender identity. Use a sender on a verified Resend domain for production. |
| `CONTACT_ALLOWED_ORIGINS` | No | Comma-separated extra origins that may call `/api/contact`; same-origin requests are already allowed. |

Never prefix the Resend API key with `VITE_`. Variables with a `VITE_` prefix can be exposed to browser code.

## Contact backend

The production endpoint is `POST /api/contact` and is implemented in `api/contact.js`.

Expected JSON body:

```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "message": "Hello, I would like to discuss a project.",
  "website": ""
}
```

The `website` property is a hidden honeypot field. Valid submissions are forwarded through Resend. The endpoint also performs server-side length/email validation, blocks unexpected cross-origin requests, disables response caching, and applies lightweight per-instance rate limiting.

For higher-traffic deployments, add durable platform-level abuse protection or a shared rate-limit store because serverless in-memory limits are intentionally best-effort.

## Scripts

```bash
npm run dev       # Start the Vite development server
npm run lint      # Run ESLint
npm run build     # Create the production build in dist/
npm run preview   # Preview the production build locally
npm run check     # Run lint, then build
```

## Project structure

```text
api/
  contact.js             Vercel serverless contact endpoint
public/
  certificates/          Certificate PDFs and preview images
  optimized/             Optimized portfolio images
  cv.pdf                 CV used by the preview/download UI
src/
  components/            Reusable UI and interaction components
  layout/                Navigation layout
  sections/              Portfolio page sections
  utils/                 Analytics helper
  App.jsx                Page composition
  index.css              Global design system and responsive styles
  main.jsx               React entry point
index.html               Metadata and application shell
vercel.json              Vercel function/runtime and response headers
```

## Production deployment on Vercel

1. Push the project to a Git repository or import the project directly into Vercel.
2. Select the Vite framework preset if Vercel does not detect it automatically.
3. Use `npm run build` as the build command and `dist` as the output directory.
4. Add the required environment variables listed above.
5. In Resend, verify the domain used in `RESEND_FROM_EMAIL` before using it as a production sender.
6. Deploy.
7. Submit a real contact-form message and verify delivery plus the Vercel Function logs.

No `.env`, `.env.local`, `node_modules`, or `dist` content should be committed. Those paths are excluded by `.gitignore`.

## Pre-deployment checklist

- `npm run check` succeeds
- Mobile, tablet, and desktop layouts have no horizontal overflow
- Navigation and mobile menu work
- `Ctrl/Cmd + K` command palette opens and closes correctly
- CV preview/open/download works
- Project and certificate modals open and close correctly
- External links point to the intended destinations
- Contact form validates bad input and sends a real production message
- Resend sender domain is verified
- Vercel environment variables are configured for Production

## License

This repository contains personal portfolio content and assets. Reuse of the code should not imply permission to reuse personal information, CV content, certificates, research materials, or branding assets.
