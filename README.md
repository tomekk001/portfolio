<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Tomasz Czyż — Portfolio

A dark-themed, minimalist personal portfolio site with a sticky navbar, hero section, skills grid, projects showcase, and a working contact form. Built with React, TypeScript and Vite on the frontend, and a small Express/Nodemailer backend that delivers contact form messages by email. Supports English and Polish via a built-in language toggle.

## Tech Stack

- **Mainframe:** COBOL, HLASM, JCL, CICS, DB2, Xpediter

- **Frontend:** React 18, TypeScript, Vite, `lucide-react` icons
- **Backend:** Node.js, Express, Nodemailer (contact form email delivery)
- **i18n:** Custom `LanguageContext` with EN/PL translations ([translations.ts](translations.ts))

## Project Structure

```
├── components/       # Navbar, Hero, Skills, Projects, Contact
├── context/           # LanguageContext (EN/PL toggle)
├── server/            # Express backend (serves the SPA + /api/contact)
├── translations.ts    # EN/PL copy
├── App.tsx            # App shell / layout
└── index.tsx           # Entry point
```

## Run Locally

**Prerequisites:** Node.js

1. Install dependencies:
   ```bash
   npm install
   ```
2. Create a `.env.local` (or `.env`) file with the credentials the contact form needs to send email:
   ```
   EMAIL_USER=your-gmail-address@gmail.com
   EMAIL_PASS=your-gmail-app-password
   EMAIL_TO=where-messages-should-arrive@example.com
   ```
   `EMAIL_USER` is the Gmail account Nodemailer sends from (use an [App Password](https://myaccount.google.com/apppasswords), not your normal login password). `EMAIL_TO` defaults to `tomekczyz001@wp.pl` if unset.
3. Run the frontend only (Vite dev server):
   ```bash
   npm run dev
   ```
   Or run frontend + backend together:
   ```bash
   npm run dev:all
   ```

## Build & Production

```bash
npm run build   # type-check and build the SPA into dist/
npm run start   # start the Express server (serves dist/ and /api/contact)
```

See [deployment_instructions.md](deployment_instructions.md) for the GitHub Pages deployment setup.
