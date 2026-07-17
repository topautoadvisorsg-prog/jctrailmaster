# JC Trailmaster — Website Rebuild

Trailer, container, and chassis repair company site. Built per `SPEC.md` (v2.3).

## Stack
- React 19 + Vite (React Router for pages)
- Tailwind CSS v4 (brand tokens in `src/index.css` `@theme`)
- Framer Motion (hero entrance animation)
- lucide-react (icons)

## Structure
```
src/
├── components/     Header, Footer, MobileCallBar, Button, CtaBand, ServiceDetailBlock,
│                   Lightbox, BeforeAfterSlider, CategoryFilter, VariantSwitcher, etc.
├── data/           services.js (categories/services/FAQ/brands/stats), projects.js (projects/testimonials)
├── pages/
│   ├── Home.jsx            Locked homepage layout (spec Section 5)
│   ├── About.jsx           Spec Section 6B/8
│   ├── Contact.jsx         Spec Section 9
│   ├── services/            ServicesA.jsx (stacked), ServicesB.jsx (tabbed/accordion), ServicesC.jsx (grid-to-detail)
│   └── projects/            ProjectsA.jsx (grid+lightbox), ProjectsB.jsx (before/after), ProjectsC.jsx (carousel)
```

## Client review — layout variants
Per spec Section 18: Services and Projects each have 3 real, clickable layout variants.
Visit `/services/a`, `/services/b`, `/services/c` and `/projects/a`, `/projects/b`, `/projects/c` —
each page has a "Layout Preview" pill switcher at the top for quick comparison.
Once the client picks a direction, drop the other two variant files and point `/services`
and `/projects` at the winner directly.

## Run locally
```bash
npm install
npm run dev       # http://localhost:5173 (or configured port)
npm run build     # production build to /dist
```

## Resolved (was open, now confirmed)
- **Address**: `5225 John G Glover Ind Ct, Ellenwood, GA 30294` (the mockup's address was wrong — corrected 2026-07-17, wired into `MapEmbed.jsx`, `Footer.jsx`, `Contact.jsx`)
- **Hours**: Mon–Fri 9:00 AM–6:00 PM, Saturday by appointment only. No Sunday hours.
- **No 24/7/emergency dispatch** — confirmed not a real offering. All "24/7" wording was removed site-wide (2026-07-17) — it was in the original mockup but isn't accurate to the real business.
- **Google Maps** — real embed live on Home and Contact, pinned to the address above.
- **Marketing photos** — all 9 slots from `IMAGE_PROMPTS.md` delivered and wired in.
- **Projects gallery** — temporarily filled with stock photos (Pexels, free license) so nothing looks missing; still flagged `TEMPORARY` in `src/data/projects.js`, swap for real completed-job photos when the client sends them.

## Open items before launch (spec Section 17 — still needs client answers)
- Real logo file (currently using a generated circular badge, not the client's actual logo file)
- Real Credibility Bar stats (currently mocked per spec instruction — `src/data/services.js` → `stats`)
- Real Google reviews (currently placeholder — `src/data/projects.js` → `testimonials`)
- Real completed-job photos + before/after pairs for Projects page (stock photos in place as a temporary stand-in)
- Confirm exact brand hex values against source logo files (current values taken from spec Section 2.1)
- Confirm Fleet & Commercial Accounts as a real offering (billing/volume pricing) or simplify to general inquiry
- Confirm actual brands/equipment serviced list
- Confirm FAQ homepage section vs. standalone page (Section 5A)
- Contact form currently only shows a success state client-side — needs a real submission endpoint (email/CRM) before launch
- **Layout variant decision** — client is choosing between the 3 Services and 3 Projects layout variants (see below), pending

## Image slots
Two different kinds of images in this build — don't confuse them:
- **Project/portfolio photos** (`src/data/projects.js`) — real completed jobs. Currently
  temporary stock photos; will be replaced with the client's own files, never generated.
- **Marketing photos** (hero, category cards, Fleet Accounts banner, About shop shot) — all
  delivered. See `IMAGE_PROMPTS.md` for the prompt/sourcing history per slot.

## Deploy
Pushed to GitHub: https://github.com/topautoadvisorsg-prog/jctrailmaster (main branch).
See `deploy-instructions.md` for the Vercel steps.
