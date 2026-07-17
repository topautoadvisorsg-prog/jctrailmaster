# Deploy — JC Trailmaster

Static Vite build, no backend/env vars required yet.

## GitHub
1. Create a new repo (e.g. `jc-trailmaster`).
2. From this folder:
   ```bash
   git init
   git add .
   git commit -m "Initial build"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

## Vercel
1. Import the GitHub repo in Vercel.
2. Framework preset: **Vite**.
3. Build command: `npm run build` (default). Output directory: `dist` (default).
4. No environment variables required for the current build.
5. Deploy — Vercel gives you a live URL immediately, auto-redeploys on every push to `main`.

## Before going live
Work through the "Open items before launch" list in `README.md` first — several homepage
sections (stats, testimonials, images) are intentionally placeholders per the spec and
should not ship to production as-is.
