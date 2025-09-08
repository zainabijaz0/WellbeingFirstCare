# Wellbeing First Care – Web App

Production‑ready React + Express (Vite) application for a disability support provider, with modern UI, routing, server email endpoints, and deploy presets for Netlify/Vercel.

## Tech Stack

- Frontend: React 18, TypeScript, Vite, React Router 6, TailwindCSS 3, Radix UI, Lucide Icons
- Backend: Express (integrated with Vite dev), Multer (file uploads), Nodemailer (SMTP email)
- Tooling: PNPM, SWC, Prettier, Vitest

## Project Structure

```
client/                   # React SPA
  App.tsx                # Routes
  global.css             # Theme tokens + utilities
  pages/                 # Route components
    Index.tsx (Home)
    About.tsx
    Services.tsx
    Reviews.tsx
    Contact.tsx
    Career.tsx
    services/            # Service detail pages
      PersonalCare.tsx
      DailyLiving.tsx
      RespiteCare.tsx
      SupportedLiving.tsx
      SDA.tsx
      AssistTransport.tsx
      Autism.tsx
  components/            # Reusable + UI library
server/                   # Express API
  index.ts               # API registration
  routes/
    contact.ts           # POST /api/contact → send email
    career.ts            # POST /api/career  → send email (+resume upload)
shared/                   # Shared types
public/                   # Static assets
```

## Available Routes (SPA)

- / Home
- /about About
- /services Services overview
  - /services/personal-care
  - /services/daily-living
  - /services/respite-care
  - /services/supported-living
  - /services/disability-accommodation
  - /services/transport
  - /services/autism
- /contact Contact form (sends email)
- /career Career form (sends email, optional resume)
- /reviews Testimonials

## Scripts (PNPM)

- pnpm dev – Start Vite + API in dev
- pnpm build – Build client and server
- pnpm preview – Preview production build
- pnpm test – Run Vitest

## Environment Configuration

Copy .env.example to .env and fill in values (never commit secrets):

```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-smtp-username@example.com
SMTP_PASS=        # Gmail App Password (not your login password)
MAIL_TO=info@wellbeingcare.com
MAIL_FROM=        # Optional. Defaults to no-reply@<host>
```

Notes:

- Gmail requires creating an App Password under 2‑Step Verification; use that value in SMTP_PASS.
- MAIL_TO defaults to info@wellbeingcare.com in code if not provided.

## Forms & API Endpoints

- POST /api/contact
  - Body (JSON): { name, email, number?, message }
  - Sends an HTML email to MAIL_TO; reply‑to set to sender’s email.
- POST /api/career (multipart/form‑data)
  - Fields: firstName, lastName, email, phone?, message?
  - File: resume (optional, .pdf/.doc/.docx up to 10MB)
  - Sends an HTML email; attaches resume when provided.

Both routes use Nodemailer with your SMTP\_\* env vars. Errors respond with JSON { error } and 4xx/5xx status.

## Development

1. Install Node 18+ and PNPM.
2. pnpm install
3. Set env vars (.env) for SMTP if you want to test forms locally.
4. pnpm dev

## Styling & UI

- Tailwind with design tokens defined in client/global.css (HSL vars).
- Pre‑built UI components in client/components/ui following shadcn/radix patterns.
- Utility cn() available for class composition.

## Code Conventions

- TypeScript throughout; keep components small and composable.
- Follow existing folder structure and UI patterns.
- No secrets committed; use .env (see .env.example).

## Testing

- Place tests alongside code (e.g., utils.spec.ts). Run: pnpm test

## Deployment

This repo includes ready‑to‑use configs for common hosts:

- Netlify: netlify.toml + netlify/functions/ if needed
- Vercel: vercel.json

General steps:

- Set the same SMTP*\*/MAIL*\* env vars in your host dashboard.
- Build on CI (Netlify/Vercel do this automatically) or run pnpm build.
- Ensure serverless/adapter settings align with your host; API routes are under /api/\*.

Using Builder.io with MCP (optional):

- Connect Netlify or Vercel via MCP to deploy from the Builder UI.

## Accessibility & Responsiveness

- Mobile‑first components; top bar numbers and email accessible and on one line on small screens.
- Uses semantic HTML and ARIA where appropriate.

## Contact

- Phone: +61 451 034 940, +61 451 185 550
- Email: info@wellbeingcare.com (public contact). Your SMTP_USER should be set via env only.

---

All rights reserved © 2025 Wellbeing First Care.
