# JC TRAILMASTER
# DIGITAL EXPERIENCE SPECIFICATION (spec.md)

Version: 2.3
Status: Developer Build
Prepared By: SmartK Digital
Changelog from v1.0: Brand palette locked to reference flyer (hex values added), logo/imagery rules added, homepage sections added (Stats Bar, Emergency/24-7 Service, Fleet Accounts, Brands Serviced, FAQ), sticky mobile call bar added, CMS fields expanded.
Changelog from v2.0: Added standalone Services page to sitemap (was missing — homepage cards were pointing straight to Projects with no page to actually sell each service). Flow is now Home → Services (detail per service) → Projects (filtered portfolio proof) via CTA. Credibility Bar flagged explicitly as placeholder/mockup content pending real client numbers.
Changelog from v2.1: CONFIRMED final service category structure (replaces earlier placeholder categories) — Trailer & Chassis Repairs, Brake & Suspension, Fleet Maintenance, Electrical Services, Cleaning & Appearance, and Mobile Service (featured/larger treatment), each with individual services listed. Homepage Service Categories section headline set to "Complete Repair and Maintenance Solutions." Services page (6A) and CMS (Section 14) synced to match.
Changelog from v2.2: Polish pass — fixed stale section cross-reference in 6B. Added Section 18 documenting client-presentation plan: Hero and homepage locked/settled, Services page and Projects page each get 3 real clickable layout variants for client review, everything else held constant across variants.

---

# 1. PROJECT OVERVIEW

## Objective
Redesign the JC Trailmaster website into a modern, premium, conversion-focused website that generates qualified commercial trailer, container, and chassis repair leads while preserving the company's existing brand identity.

## Primary Goals
- Increase qualified service requests
- Increase phone calls
- Increase quote requests
- Improve local SEO
- Showcase completed work
- Improve user experience

---

# 2. BRAND GUIDELINES

## Preserve
- Existing logo (circular badge lockup)
- Existing color palette (see 2.1 below — locked to client reference flyer)
- Industrial/rugged identity
- Existing hero style: cinematic truck-and-trailer imagery, sunset/dusk lighting
- Tagline: "Trailer · Container · Chassis Repair"
- Slogan usage: "One Call. Every Repair. We Get It Done."

## Improve
- Typography
- Layout hierarchy
- White space
- Mobile responsiveness
- Calls-to-action
- Project presentation

Layout is NOT locked — the reference flyer is a color/identity reference only, not a page structure to replicate. Rebuild the layout for a modern site; keep the palette, tone, and brand marks consistent with it.

## 2.1 Locked Color Palette
Source: client-provided reference flyer. Use these as the site's design tokens — do not substitute generic "orange" or "brand orange" without checking against these.

| Token | Hex (approx.) | Usage |
|---|---|---|
| `--jc-black` | #0A0A0A | Primary background, footer, dark sections |
| `--jc-orange-primary` | #F5820F | Primary CTA color, headline accents, icon strokes |
| `--jc-orange-deep` | #D9480F | Gradient depth, hover states, secondary accents |
| `--jc-amber` | #FFB347 | Gradient highlight (sunset glow), light accents |
| `--jc-white` | #FFFFFF | Primary body text on dark backgrounds, headline text |
| `--jc-gray-steel` | #B0B0B0 | Secondary/muted text, dividers on dark backgrounds |

Notes:
- The circular logo badge uses a warm sunset gradient (deep orange → amber) behind black wordmark text — preserve this gradient treatment in the header logo and favicon.
- Orange dividers (thin vertical/horizontal rules) are used to separate contact info blocks (phone / email / website) — carry this device into the footer and contact page.
- The final CTA band in the reference uses solid orange background with black text — reuse this treatment for the homepage's closing CTA band.

## 2.2 Logo & Imagery Rules
- Logo: circular badge, sunset gradient background, black wordmark "JC TRAILMASTER," black subtext "TRAILER · CONTAINER · CHASSIS REPAIR." Must appear in header (left-aligned) and footer.
- Hero and section imagery: real trucks/trailers/chassis, dusk or high-contrast dramatic lighting to match brand mood — avoid flat stock photography that breaks the industrial tone.
- Icon style: thin-line orange outline icons on dark backgrounds (shield-check, clock, badge-check, wrench, etc.) — consistent stroke weight across all trust/service icons.

---

# 3. WEBSITE PHILOSOPHY

The website is a sales tool.

Every page must answer:
1. What do you do?
2. Why should I trust you?
3. Can you solve my problem?
4. How do I contact you?

---

# 4. SITEMAP

- Home
- Services (NEW — see Section 6A. Sells each service in detail; distinct from Projects, which is the portfolio.)
- Projects
- About
- Contact

(Optional, recommended — see Section 5A for rationale)
- FAQ (can be a section on Home or Contact instead of a standalone page if budget-constrained)

---

# 5. HOMEPAGE

## Header
- Sticky navigation
- Logo (left)
- Navigation (center)
- Phone number (click-to-call on all breakpoints)
- Request Service button

## Hero
- Full-width trailer repair image/video (dusk lighting, matches brand mood)
- Strong headline (e.g., "Experienced. Reliable." / "We Keep You Rolling." treatment — white primary line, orange emphasis line)
- Supporting paragraph
- Call Now button (primary)
- Request Service button (secondary)
- Trust badges row (4 icons: Expert Technicians, Fast Response, Quality Guaranteed, In-Shop & Mobile Service)

## Stats / Credibility Bar (NEW)
Thin horizontal band directly under hero, black background, orange numerals. Reinforces trust before the visitor scrolls further.

**STATUS: MOCKUP.** Ship with placeholder values shown below so the client can see the section fully built and decide if they want it. Swap in real figures before launch — do not launch with placeholder numbers live.
- Years in business (e.g., "25+ Years")
- Repairs completed / trailers serviced (approx. count)
- Average response time
- Service area coverage (e.g., "Metro Atlanta & Beyond")

## Service Categories

Section headline: **"Complete Repair and Maintenance Solutions"**

Organize services into 6 umbrella categories (CONFIRMED — final, replaces earlier placeholder category names). Each category card lists its individual services underneath the category title so visitors can scan specifics without clicking through.

1. **Trailer & Chassis Repairs**
   - Chassis Repair
   - Frame Repair
   - Collision Repair
   - Floor Repair
2. **Brake & Suspension**
   - Brake Service
   - Axle Repair
   - Suspension Repair
   - Bearing Service
3. **Fleet Maintenance**
   - DOT Inspections
   - FHWA Inspections
   - Tire Changes
4. **Electrical Services**
   - Trailer Wiring
   - Lighting
   - Electrical Diagnostics
   - Electrical Repairs
5. **Cleaning & Appearance**
   - Pressure Washing
   - Decal Installation
   - Decal Removal
6. **Mobile Service** — treat as a larger/featured section, not a same-size card like the other five. Headline: "Can't come to us? Our fully equipped mobile repair trucks come to your location." Give this one visual weight (wider card, or its own band) since it's a key differentiator, not just another category.

Each of the first 5 category cards contains:
- Image
- Category title
- List of individual services (short, scannable — not full descriptions, those live on the Services page)
- "Learn More" CTA

Clicking a category opens the Services page, scrolled to that service's detailed section (see Section 6A). The Services page — not the homepage card — is where the "View Related Projects" CTA lives, linking through to the Projects page filtered to that category.

## 24/7 Emergency & Mobile Service Callout (NEW)
Standalone band, high-contrast (orange background or bordered black card), placed after Service Categories. This is standard for roadside/fleet repair sites and was missing from v1 — breakdowns are often time-critical, and this section exists to capture that urgency directly.
- Headline: emergency/mobile service availability
- Short line: what's covered (on-site chassis/trailer breakdowns, yard calls, etc.)
- Prominent Call Now button
- Optional: hours of emergency coverage if different from standard business hours

## Why Choose Us
Six trust cards:
- Mobile Service
- Fast Response
- Experienced Technicians
- Fleet Specialists
- Licensed & Insured
- Quality Repairs

## Fleet & Commercial Accounts (NEW)
Fleet operators are a distinct buyer persona from single-trailer owners and convert on different terms (billing/account setup, not just price/speed). Missing from v1 — added as its own section rather than folding into "Why Choose Us."
- Short copy targeting fleet managers/owner-operators with multiple units
- Mentions if available: volume pricing, priority scheduling, net-terms/billing accounts, single point of contact
- CTA: "Set Up a Fleet Account" or "Talk to Us About Fleet Service"

## Brands & Equipment Serviced (NEW, optional but recommended)
Logo strip or simple list of trailer/chassis manufacturers and reefer unit brands serviced (e.g., Great Dane, Wabash, Utility, Thermo King, Carrier — confirm actual brands with client). Builds immediate credibility with fleet buyers scanning for compatibility.

## Featured Projects
- Responsive project grid
- Category badge
- Short title
- View Project

## Testimonials
- Google Reviews carousel

## Service Area
- Metro Atlanta map
- Cities served

## FAQ (NEW)
Short accordion, 4–6 questions addressing common pre-call objections. Reduces unnecessary phone screening and supports SEO (FAQ schema). Suggested starter questions — confirm/replace with client's actual most-asked questions:
- Do you offer mobile/on-site repair?
- What areas do you service?
- Do you work with fleets and repeat accounts?
- How fast can you respond to a breakdown?
- What types of trailers/chassis do you repair?

## Final CTA
Large CTA band with:
- Headline
- Phone number
- Request Service button
- Solid orange background, black text (per reference flyer treatment)

## Footer
- Logo
- Navigation
- Contact info
- Hours (including emergency/after-hours line if applicable)
- Service area / cities served
- Copyright
- Privacy Policy

## Sticky Mobile Call Bar (NEW)
Persistent bottom bar on mobile breakpoints only: tap-to-call button + "Request Service" button. Given the primary conversion action for this trade is a phone call, this should never be more than a thumb-tap away on mobile.

---

# 5A. FAQ PAGE (optional — see Sitemap note)
If FAQ grows beyond 6 items or needs SEO depth (FAQ schema, longer answers, category grouping), promote to a standalone page rather than a homepage accordion. Decide based on volume of real customer questions the client can provide.

---

# 6A. SERVICES PAGE (NEW)

Purpose:
Sell each service in depth. This page answers "what exactly is this service and why do I need it" — a job the homepage cards and the Projects gallery don't do. Projects proves the work; this page explains the work.

Entry points:
- Homepage service category cards link here (to the matching section anchor)
- Main nav item

Structure:
- Short intro band at top (page headline, one-line value prop)
- One full section per service category, in this order, matching the homepage categories (see Section 5 "Service Categories" for full confirmed list):
  1. Trailer & Chassis Repairs
  2. Brake & Suspension
  3. Fleet Maintenance
  4. Electrical Services
  5. Cleaning & Appearance
  6. Mobile Service (larger/featured section — see note below)

Each of the first 5 service sections contains:
- Section title + image
- Full description (2–4 sentences — more detail than the homepage card, not a wall of text)
- "What's Included" list — the individual services under that category (e.g., Trailer & Chassis Repairs lists Chassis Repair, Frame Repair, Collision Repair, Floor Repair), each with a short one-line description
- Process/how it works (optional — brief, 3–4 steps, if it helps set expectations e.g. inspection → quote → repair → walkthrough)
- "View Related Projects" CTA → links to Projects page filtered to that category
- "Request a Quote" or "Call Now" CTA

Mobile Service section (6th):
- Give this more visual real estate than the other 5 — featured band, not a same-size block
- Headline: "Can't come to us? Our fully equipped mobile repair trucks come to your location."
- Supporting copy on what mobile covers, service radius, response expectations
- Call Now + Request Service CTAs

Page-level:
- Sticky in-page nav or jump links at top so visitors can skip to the service they need
- Closing CTA band at bottom of page (same treatment as homepage Final CTA)

---

# 6B. ABOUT PAGE — CONTENT DETAIL
(Expands on Section 8 requirements list below with what each block actually needs to say.)

- **Company story**: how JC Trailmaster started, who runs it, what the shop actually does day to day — keep it personal, not corporate boilerplate
- **Experience**: years in business, scale (approx. jobs completed, fleet clients served, techs on staff)
- **Mission**: one short paragraph — what the company promises customers, ties back to "We Keep You Rolling"
- **Team** (optional): photos/names of key techs or leadership if client wants a face-to-name connection; skip if client prefers not to feature staff
- **Certifications / licensing / insurance**: actual badges/credentials, not just a text claim (matches the "Licensed & Insured" trust card from the homepage — this is where it gets proven, not just stated)
- **Why customers choose JC Trailmaster**: 3–4 short differentiators, can reuse "Why Choose Us" trust card copy but expanded
- **CTA**: Call Now + Request Service, same as every other page

---

# 7. PROJECTS PAGE

Purpose:
Show real completed work.

Requirements:
- Category filters
- Image gallery
- Before/after support (slider or side-by-side, not just two static images)
- Lightbox
- Related services
- CTA after every project section

---

# 8. ABOUT PAGE

See Section 6B for full content detail on what each block below needs to say.

Include:
- Company story
- Experience (years, scale)
- Mission
- Team (optional)
- Certifications / licensing / insurance proof
- Why customers choose JC Trailmaster
- CTA

---

# 9. CONTACT PAGE

Include:
- Contact form
- Phone (click-to-call)
- Email
- Business hours (+ emergency hours if applicable)
- Google Map
- Service area
- CTA

---

# 10. DESIGN SYSTEM

Typography:
- Modern sans-serif, bold weight for headlines to match the flyer's industrial confidence

Colors:
- Per Section 2.1 locked palette — no substitutions

Buttons:
- Primary: `--jc-orange-primary` background, black or white text (test contrast)
- Rounded corners
- Hover animation (shift to `--jc-orange-deep`)

Cards:
- Consistent spacing
- Subtle shadow
- Large photography

Icons:
- Thin-line orange outline style, consistent stroke weight (per Section 2.2)

Spacing:
- Generous whitespace
- 12-column desktop grid

---

# 11. RESPONSIVE RULES

Desktop:
3-column layouts where appropriate.

Tablet:
2-column layouts.

Mobile:
Single-column, thumb-friendly buttons, sticky call bar (see Section 5).

---

# 12. SEO

Every page includes:
- Unique title
- Meta description
- H1
- Proper heading hierarchy
- Internal links
- Image alt text
- Local business schema
- FAQ schema (if FAQ section/page implemented)

---

# 13. PERFORMANCE

- Optimized images
- Lazy loading
- Fast Core Web Vitals
- Accessible forms

---

# 14. CMS

Service Categories (NEW):
- Category name
- Category image
- Sort order (controls homepage card + Services page section order)
- Description (used on Services page section)
- Related individual services (see Services below — one-to-many)
- Featured/large-format flag (for Mobile Service, which needs bigger treatment than the other 5)

Services (NEW — individual services within a category):
- Service name (e.g., "Chassis Repair")
- Parent category
- Short description
- Sort order within category

Projects:
- Title
- Category
- Images (before/after pairs supported)
- Description
- Featured flag

Testimonials:
- Customer
- Rating
- Review

FAQ (NEW):
- Question
- Answer
- Category (optional, for future FAQ page grouping)

Brands Serviced (NEW, optional):
- Brand name
- Logo image

---

# 15. QA CHECKLIST

- Mobile tested
- Tablet tested
- Desktop tested
- Forms working
- Links working
- Images optimized
- SEO verified
- Accessibility verified
- Brand colors verified against Section 2.1 tokens (no drift)
- Sticky mobile call bar verified on real devices

---

# 16. LAUNCH CHECKLIST

- Analytics installed
- Search Console connected
- Sitemap submitted
- Robots.txt verified
- Google Business Profile linked
- Final client approval

---

# 17. OPEN QUESTIONS FOR CLIENT (NEW)

- Confirm exact hex values from brand/logo source files if available (flyer-derived values above are close approximations, not guaranteed pixel-exact).
- Confirm real stats for the Credibility Bar (years in business, repairs completed, response time).
- Confirm whether Fleet/Commercial Accounts is a real offering (billing terms, volume pricing) or should be simplified to a general inquiry CTA.
- Confirm actual trailer/reefer brands serviced for the Brands Serviced section.
- Confirm emergency/after-hours coverage and hours, if offered.
- Confirm whether FAQ should launch as a homepage section or standalone page (see 5A).

---

# 18. CLIENT PRESENTATION — LAYOUT VARIANTS

Purpose: build a small number of layout options for pages where presentation style is a real open decision, so the client picks a direction instead of us guessing. Content, copy, categories, and brand palette stay identical across all variants — only layout/presentation differs.

## Locked across every variant (do not vary)
- Hero section — approved, do not touch
- Brand palette (Section 2.1)
- Copy/content for all sections (headlines, service names, category structure)
- Header/footer

## Homepage
- Effectively one build. Do not produce multiple homepage layout variants — the sections and order in Section 5 are settled.
- Minor refinement only (spacing, imagery swaps) as needed during polish — not a second structural version.

## Services Page — 3 layout variants
This is where presentation is genuinely open. Build 3 versions of how the 6 service categories are presented on the Services page (Section 6A content stays the same in all 3 — only layout changes):
1. **Variant A — Stacked full sections**: one full-width section per category, vertical scroll, jump-nav at top (as currently spec'd in 6A)
2. **Variant B — Tabbed/accordion**: categories as tabs or accordion so only one category's detail is visible at a time, less scrolling
3. **Variant C — Grid-to-detail**: category grid up top (like homepage cards) that expands or anchors into detail below on click, hybrid between homepage card style and full section style

## Projects Page — 3 presentation variants
Same approach — content/filtering logic from Section 7 stays the same, only how the gallery presents changes:
1. **Variant A — Standard grid + lightbox**: as currently spec'd, responsive grid, click to open lightbox
2. **Variant B — Before/after slider-forward**: gallery leads with interactive before/after sliders as the primary visual, static grid secondary
3. **Variant C — Carousel/slideshow**: horizontal sliding carousel per category instead of a static grid, closer to the "Recent Projects" carousel style already used on the homepage

## Deliverable
Each variant should be a real clickable build (per the standing instruction to deliver functional POCs, not flat mockups), so the client can click through all 3 for Services and all 3 for Projects with the same hero/header/footer around them, and pick a direction. Once a direction is picked, that becomes the locked layout going forward — the other variants get dropped, not maintained in parallel.
