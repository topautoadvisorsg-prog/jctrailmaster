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
from `components/`. Site-wide facts (phone, address, hours, cities, social links) live in
exactly one place, `data/business.js` — nothing else hardcodes them. That's the whole mental
model.

```
src/
├── App.jsx                 Route table — every URL in the site is defined here, nowhere else
├── main.jsx                React entry point (rarely touched)
├── index.css                Brand colors/fonts (Tailwind v4 @theme tokens) — change the palette here
│
├── data/                    ALL editable content lives here. No copy should be hardcoded in a page/component.
│   ├── business.js           ⭐ Phone, email, address, hours, service-area cities, social links. Single source of truth.
│   ├── services.js           The 6 service categories (titles, descriptions, images), FAQ, brands-serviced list, stats bar
│   ├── projects.js           The 7 portfolio projects (title/image/before/after/description), testimonials
│   └── legal.js              Privacy Policy / Terms of Service copy
│
├── pages/                   One file per route. This is where sections get assembled top-to-bottom.
│   ├── Home.jsx               / — hero, stats, service grid, mobile callout, why-us, fleet, brands, service area, FAQ
│   ├── Services.jsx            /services — tabs (desktop) / accordion (mobile), one category open at a time
│   ├── Projects.jsx            /projects — before/after grid, click a photo for the full album (currently unrouted — see "Hidden pending real content" below)
│   ├── About.jsx               /about
│   ├── Contact.jsx             /contact — form (wired to Formspree) + info card + map
│   └── LegalPage.jsx           /privacy-policy, /terms-of-service — shared template, content from data/legal.js
│
├── components/               Reusable building blocks, used by 2+ pages. Edit here to change something everywhere at once.
│   ├── Header.jsx / Footer.jsx / MobileCallBar.jsx    Site chrome, on every page
│   ├── Button.jsx / CtaBand.jsx / SectionHeading.jsx / Reveal.jsx    Small generic pieces (Reveal = scroll-in animation)
│   ├── PageHero.jsx            Interior-facility hero for every internal page (Services/Projects/About/Contact)
│   ├── ServiceDetailBlock.jsx   The "one category, full detail" card, used by Services.jsx
│   ├── CategoryFilter.jsx / Lightbox.jsx / BeforeAfterSlider.jsx / BeforeAfterModal.jsx    Projects-page building blocks
│   ├── BrandsMarquee.jsx / BrandLogo.jsx    Auto-scrolling brands-serviced strip
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
| Phone, email, address, business hours, or social links | `data/business.js` |
| A service category's name, description, or photo | `data/services.js` → `serviceCategories` |
| The FAQ | `data/services.js` → `faqs` |
| The brands/equipment logo strip | `data/services.js` → `brandsServiced` (logo files in `public/images/brands/`) |
| The homepage stats bar numbers | `data/services.js` → `stats` |
| A completed-job project (photos, description) | `data/projects.js` → `projects` |
| Customer reviews | `data/projects.js` → `testimonials` |
| Privacy Policy / Terms of Service copy | `data/legal.js` |
| Header nav links / logo | `components/Header.jsx` |
| Footer content | `components/Footer.jsx` |
| Brand colors | `src/index.css` (`@theme` block at the top) |
| Anything on the homepage's layout/order | `pages/Home.jsx` |

**Safe to edit without breaking anything:** any file under `data/`, plus wording/text inside
`pages/`. Editing a `components/` file changes it everywhere that component is used — that's
usually what you want, just know it's not page-local.

## Layout decisions — locked
Services and Projects each originally shipped with 3 layout variants for client review.
Both are decided now:
- **Services** → tabbed layout (`pages/Services.jsx`)
- **Projects** → before/after grid with click-to-open photo album (`pages/Projects.jsx`)

The other variants were deleted. Old bookmarked URLs (`/services/a`, `/projects/b`, etc.)
redirect to the clean route instead of 404ing — see the redirect routes in `App.jsx`.

## Hidden pending real content
Two sections are built and working but hidden from visitors until real content replaces
the placeholders — flip them back on with a one-line change each:
- **Featured Projects + full Projects page** — still stock photos, not real completed jobs.
  `pages/Home.jsx` → `SHOW_FEATURED_PROJECTS = false`. The `/projects` route redirects to
  home; restore it in `App.jsx` (swap `<Navigate to="/" replace />` back to `<Projects />`,
  re-add the import) once real photos are in.
- **Testimonials** — still placeholder reviews, not real Google reviews.
  `pages/Home.jsx` → `SHOW_TESTIMONIALS = false`.

Also re-add the "Projects" nav link in `components/Header.jsx` and `components/Footer.jsx`
(commented out, not deleted) and the "View Related Projects" link in
`components/ServiceDetailBlock.jsx` when Projects comes back.

## Run locally
```bash
npm install
npm run dev       # http://localhost:5173 (or configured port)
npm run build     # production build to /dist
```

## Resolved (was open, now confirmed)
- **Address**: `5225 John G Glover Ind Ct, Ellenwood, GA 30294`, wired into `MapEmbed.jsx`, `Footer.jsx`, `Contact.jsx`
- **Hours**: Mon–Fri 9:00 AM–6:00 PM, Saturday by appointment only. No Sunday hours.
- **No 24/7/emergency dispatch** — confirmed not a real offering, all "24/7" wording removed site-wide.
- **Google Maps** — real embed live on Home and Contact, pinned to the address above.
- **Marketing photos** — hero, all 6 service category cards, Fleet & Commercial Accounts, and About page shop photo are all real client-provided photos (not stock).
- **Years of experience**: 25+ (confirmed by client — corrected from an earlier 20+ figure that was 5 years stale).
- **Repairs Completed**: 10,000+ (client-confirmed figure), relabeled from "Trailers Repaired" since the work covers box trucks, chassis, and reefers too, not just trailers.
- **Contact info centralized** — lives once in `src/data/business.js`. See Architecture section above.
- **Vehicle-type wording pass** — every place the site lists what gets worked on (FAQ, About, Contact, Home badges, meta descriptions) now consistently names trailers, reefers, dry vans, and box trucks, not just "trailer."
- **Service category line items** — Fleet Maintenance (DOT/FHWA combined, Unit Preventative Maintenance, Reefer Unit Preventative Maintenance added), Brake & Suspension (ABS Diagnostics added), Electrical (Trailer Wiring & Lighting combined), Cleaning & Appearance (Decal Installation & Removal combined, Interior Cabin Cleaning added — a real local differentiator).
- **Brands & Equipment Serviced** — 10 real brands confirmed and live, each logo sourced from the brand's own official site: Wabash, Utility, Great Dane, Hyundai Translead, Thermo King, Carrier Transicold, Stoughton, Vanguard, Strick, Fruehauf.
- **Layout variant decision** — Services = tabbed, Projects = before/after grid + album. See "Layout decisions" above.
- **Contact form** — wired to Formspree, verified with a real test submission before shipping.
- **Facebook link** — live in the footer, pointed at the client's real page. No Instagram icon (not a real account).
- **Privacy Policy / Terms of Service** — real pages at `/privacy-policy` and `/terms-of-service`, replacing dead footer links. General boilerplate covering the actual site (contact form, quotes, mobile service); flagged on-page as a template pending owner/legal review before being treated as final.

## Open items (still needs client input)
- **Real logo file** — header still uses a generated "JC" text badge, not the client's actual logo file/image.
- **Satisfied Customers stat** — still a placeholder (`1000+`) in `data/services.js` → `stats`.
- **Real Google reviews** — see "Hidden pending real content" above.
- **Real completed-job photos** — see "Hidden pending real content" above.
- **Brand hex values** — current palette taken from spec Section 2.1, never cross-checked against the client's actual logo files.
- **Hero image realism** — client asked for a more natural/less AI-obvious sunset; a new hero has since been swapped in, but this hasn't been explicitly re-confirmed with the client as resolving that specific note.
- **Which 4 service categories to feature on the homepage** — currently all 6 show in the "Complete Repair and Maintenance Solutions" grid. Client said she and her husband would decide which 4 get top billing (rest stay one click away under "Learn More"); no answer yet.

## Image slots
Two different kinds of images in this build — don't confuse them:
- **Project/portfolio photos** (`src/data/projects.js`) — real completed jobs. Currently
  temporary stock photos and the whole section is hidden from visitors (see above);
  will be replaced with the client's own files, never generated.
- **Marketing photos** (hero, category cards, Fleet Accounts banner, About shop shot) — all
  real client-provided photos. See `IMAGE_PROMPTS.md` for the prompt/sourcing history per slot.

## Deploy
Pushed to GitHub: https://github.com/topautoadvisorsg-prog/jctrailmaster (main branch).
Currently staged on Vercel for client review — see `deploy-instructions.md` for those steps.
Production target is Bluehost; that section will be added to `deploy-instructions.md` when
the distribution build happens (client-side routing needs an `.htaccess` rewrite rule on
Apache/Bluehost that Vercel currently handles automatically via `vercel.json`).
