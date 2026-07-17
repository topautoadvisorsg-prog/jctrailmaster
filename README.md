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

## Open items before launch (spec Section 17 — needs client answers)
- Real logo file + brand photography (site currently uses placeholder image paths under `/public/images/`, referenced in `src/data/services.js` and `src/data/projects.js`)
- Real Credibility Bar stats (currently mocked per spec instruction — `src/data/services.js` → `stats`)
- Real Google reviews (currently placeholder — `src/data/projects.js` → `testimonials`)
- Real completed-job photos + before/after pairs for Projects page
- Confirm exact brand hex values against source logo files (current values taken from spec Section 2.1)
- Confirm Fleet & Commercial Accounts as a real offering (billing/volume pricing) or simplify to general inquiry
- Confirm actual brands/equipment serviced list
- Confirm emergency/after-hours coverage details
- Confirm FAQ homepage section vs. standalone page (Section 5A)
- Contact form currently only shows a success state client-side — needs a real submission endpoint (email/CRM) before launch
- Google Maps embed is a placeholder block — needs a real embed once address is confirmed final

## Deploy
See `deploy-instructions.md`.
