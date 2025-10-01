# MG Cyberster — Showroom (Static Demo)

This is a **GitHub-ready** static showroom site for an MG Cyberster–style car.  
It is intentionally **limited** and runs fully in the browser, so you won't need any backend to deploy.

## What it contains
- `index.html` — main site (Home, Gallery, Register, Book Demo)
- `style.css` — styling + requested gradient colors
- `script.js` — client-side interactivity (gallery modal, localStorage for registrations & demos)
- `images/` — placeholder SVG images (6 images)
- `vercel.json` — Vercel configuration for immediate static deploy

## How to deploy (super simple)
1. Download the zip and unzip.
2. Create a **new GitHub repository** (you already have one).
3. Upload all files (drag & drop) to the repository root.
4. On Vercel, click **New Project** → import the GitHub repo → **Deploy**.
5. After a minute your live site will be available at `https://<your-project>.vercel.app`.

## Notes
- Registrations and demo bookings are stored in the browser's `localStorage` (private to your browser) — this mimics working forms without requiring a backend.
- If you want real backend storage, email confirmations, or admin uploads later, I can add Supabase and SendGrid integration.

---

Built for **Sonu Sharma**.
