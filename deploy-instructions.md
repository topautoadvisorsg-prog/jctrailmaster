# Deploy — JC Trailmaster

Static Vite build, no backend/env vars required.

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

## Vercel (client review / staging)
1. Import the GitHub repo in Vercel.
2. Framework preset: **Vite**.
3. Build command: `npm run build` (default). Output directory: `dist` (default).
4. No environment variables required.
5. Deploy — Vercel gives you a live URL immediately, auto-redeploys on every push to `main`.

## Bluehost (production)

The production build is a plain static site — `index.html` + `assets/` (JS/CSS) + `images/`
+ `.htaccess`. No Node, no build step runs on the server; you're just uploading files.

**Ready-to-upload zip:** `jc-trailmaster-dist.zip` (in this project folder and copied to
Downloads). It's already zipped from *inside* `dist/`, so extracting it drops `index.html`
straight into whatever folder you extract to — it does not create an extra `dist/` folder
around everything. That's the one thing that breaks a static site on Bluehost/Hostinger-style
hosting: if `index.html` ends up one folder too deep (e.g. `public_html/dist/index.html`
instead of `public_html/index.html`), the domain loads a blank/404 page because the web
server looks for `index.html` directly in `public_html/`, not inside a subfolder.

Steps:
1. Log into Bluehost → **cPanel → File Manager**.
2. Open `public_html/` (this is your domain's web root). If there's anything already in
   there from an old site, back it up or clear it first.
3. Upload `jc-trailmaster-dist.zip` directly into `public_html/`.
4. Right-click the zip → **Extract**. Extract it *into* `public_html/`, not into a new
   subfolder.
5. **Verify the result**: `public_html/index.html` should exist directly — not
   `public_html/jc-trailmaster-dist/index.html` or `public_html/dist/index.html`. If File
   Manager created an extra wrapper folder, move everything up one level and delete the
   now-empty wrapper.
6. **Confirm `.htaccess` made it over.** It's a hidden file (starts with a dot) — some FTP
   clients and file managers hide dotfiles by default. In cPanel File Manager, check
   **Settings → Show Hidden Files (dotfiles)** if you don't see it. Without this file,
   every page except the homepage (e.g. `/services`, `/about`) will 404 on a direct visit
   or refresh, because Bluehost needs it to hand off routing to the React app.
7. Point the domain's DNS/nameservers at Bluehost if it isn't already, and confirm SSL
   (Let's Encrypt, free, one click in cPanel) is active — the site should load over
   `https://`, not `http://`.
8. Test after upload: load the homepage, then navigate to `/services`, `/about`,
   `/contact` — and reload the page while on one of those (not just click into it from the
   homepage). If a reload 404s, the `.htaccess` file is either missing or `mod_rewrite`
   isn't enabled on the hosting plan (contact Bluehost support if so, it's standard on
   virtually all shared plans).

**Rebuilding the zip after future changes:**
```bash
npm run build
```
Then zip the *contents* of `dist/` (not the `dist` folder itself — same rule as above)
and re-upload/re-extract into `public_html/`, overwriting the old files.

## Before going live
Work through the "Open items" list in `README.md` first — a few things (Satisfied
Customers stat, real logo file, which 4 services feature on the homepage) are still
pending client input, and Projects/Testimonials are intentionally hidden until real
photos and reviews are in.
