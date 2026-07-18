# JC Trailmaster — Website Rebuild

Trailer, container, and chassis repair company site. Built per `SPEC.md` (v2.3).

## Stack
- React 19 + Vite (React Router for pages)
- Tailwind CSS v4 (brand tokens in `src/index.css` `@theme`)
- Framer Motion (hero entrance animation)
- lucide-react (icons)

## Architecture

**How a page comes together:** `App.jsx` maps each URL to a file in `pages/`. A page pulls
its content from `data/` (never hardcoded in the page itself) and assembles it using pieces
from `components/`. Site-wide facts (phone, address, hours, cities) live in exactly one place,
`data/business.js` — nothing else hardcodes them. That's the whole mental model.

```
src/
├── App.jsx                 Route table — every URL in the site is defined here, nowhere else
├── main.jsx                React entry point (rarely touched)
├── index.css                Brand colors/fonts (Tailwind v4 @theme tokens) — change the palette here
│
├── data/                    ALL editable content lives here. No copy should be hardcoded in a page/component.
│   ├── business.js           ⭐ Phone, email, address, hours, service-area cities. Single source of truth.
│   ├── services.js           The 6 service categories (titles, descriptions, images), FAQ, brands-serviced list, stats bar
│   └── projects.js           The 6 portfolio projects (title/image/before/after/description), testimonials
│
├── pages/                   One file per route. This is where sections get assembled top-to-bottom.
│   ├── Home.jsx               / — hero, stats, service grid, mobile callout, why-us, fleet, brands, projects, reviews, FAQ
│   ├── About.jsx               /about
│   ├── Contact.jsx             /contact — form + info card + map
│   ├── services/
│   │   ├── ServicesA.jsx       /services/a — stacked full-page sections
│   │   ├── ServicesB.jsx       /services/b — tabs (desktop) / accordion (mobile)
│   │   └── ServicesC.jsx       /services/c — category grid that expands into detail on click
│   └── projects/
│       ├── ProjectsA.jsx       /projects/a — grid + click-to-open lightbox
│       ├── ProjectsB.jsx       /projects/b — before/after drag slider
│       └── ProjectsC.jsx       /projects/c — horizontal-scroll carousel per category
│
├── components/               Reusable building blocks, used by 2+ pages. Edit here to change something everywhere at once.
│   ├── Header.jsx / Footer.jsx / MobileCallBar.jsx    Site chrome, on every page
│   ├── Button.jsx / CtaBand.jsx / SectionHeading.jsx / Reveal.jsx    Small generic pieces (Reveal = scroll-in animation)
│   ├── PageHero.jsx            Interior-facility hero for every internal page (Services/Projects/About/Contact)
│   ├── ServiceDetailBlock.jsx   The "one category, full detail" card — shared by all 3 Services variants
│   ├── CategoryFilter.jsx / Lightbox.jsx / BeforeAfterSlider.jsx    Projects-page building blocks
│   ├── VariantSwitcher.jsx      The "Layout Preview: A · B · C" pill bar (temporary, for client review)
│   └── MapEmbed.jsx             Google Maps iframe, reads the address from data/business.js
│
├── hooks/
│   └── usePageMeta.js        Sets the browser tab title + meta description per page
│
└── lib/
    └── media.js             bgImage() helper — makes any photo slot fall back to a branded pattern
                              instead of a blank box if the file is missing/not-yet-added
```

### Backgrounds & imagery
- **Homepage hero** — unique, `public/images/trailer-chassis-repair-atlanta-jc-trailmaster-hero.jpg` (baked-in wordmark), set directly in `Home.jsx`.
- **Internal-page heros** — all share `components/PageHero.jsx`, which uses `public/images/hero-interior.jpg` behind a flat dark overlay. Change the image or overlay once there, applies to Services/Projects/About/Contact.
- **Atmospheric texture** — the `.jc-texture` class (`src/index.css`) puts `hero-interior.jpg` behind a heavy ~92% overlay so it reads as faint depth. It's applied to every flat `bg-jc-black` content section; `bg-jc-black-soft` sections stay flat on purpose so the two alternate. To add/remove texture on a section, add/remove `jc-texture` next to `bg-jc-black`.

### Want to change something? Start here.
| I want to change... | Edit this file |
|---|---|
| Phone, email, address, or business hours | `data/business.js` |
| A service category's name, description, or photo | `data/services.js` → `serviceCategories` |
| The FAQ | `data/services.js` → `faqs` |
| The brands/equipment logo strip | `data/services.js` → `brandsServiced` |
| The homepage stats bar numbers | `data/services.js` → `stats` |
| A completed-job project (photos, description) | `data/projects.js` → `projects` |
| Customer reviews | `data/projects.js` → `testimonials` |
| Header nav links / logo | `components/Header.jsx` |
| Footer content | `components/Footer.jsx` |
| Brand colors | `src/index.css` (`@theme` block at the top) |
| Anything on the homepage's layout/order | `pages/Home.jsx` |
| Which Services/Projects layout variant is "the" one | Point `/services` and `/projects` in `App.jsx` at the winning variant, delete the other two files |

**Safe to edit without breaking anything:** any file under `data/`, plus wording/text inside
`pages/`. Editing a `components/` file changes it everywhere that component is used — that's
usually what you want, just know it's not page-local.

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
- **Years of experience**: 20+, not 25+ (verified against jctrailmaster.com/aboutus — corrected 2026-07-17, also rewrote the About page story/mission to match the real narrative)
- **Contact info centralized** (2026-07-17) — was hardcoded in 7+ files (that's why the address/hours fixes above each needed a multi-file hunt), now lives once in `src/data/business.js`. See Architecture section above.
- **Homepage service grid** — Mobile Service is now the 6th grid card instead of a separate band below (client feedback: the standalone band looked disconnected, and left an empty gap in the 5-card grid's last row)

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
