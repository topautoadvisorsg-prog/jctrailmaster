# Marketing Image Prompts

**Status (2026-07-16):** All 9 slots delivered and wired in. Nothing outstanding here — the
only remaining image work is real project/portfolio photos and brand-equipment logos (see
"Not in this list" below), which aren't part of this doc.

These are the **marketing/brand photography** slots in the site — not project photos.
Project/portfolio images (`src/data/projects.js`) are real completed jobs and come from
the client directly; they are not listed here.

Every prompt below is written to match the locked brand direction (SPEC.md Section 2.1/2.2):
warm sunset/dusk lighting, industrial and rugged mood, real trucks/trailers/chassis, high
contrast, no flat stock-photo look, no text or logos baked into the image (text is handled
by the site itself). Drop the generated file at the exact path listed and it slots straight in
— every image container in the code already has a graceful placeholder pattern, so nothing
breaks until you're ready to swap it in.

---

## 1. Hero — full-bleed homepage background ✅ DONE
**File:** `public/images/trailer-chassis-repair-atlanta-jc-trailmaster-hero.jpg`
**Used in:** `src/pages/Home.jsx` (top of page)

Delivered and wired in (2026-07-16) — compressed from a 2MB PNG to a 273KB JPEG at 1718×915
for page-speed. The hero section was restructured to match this asset: the wordmark is baked
into the photo, so the section now shows the image at its native ratio (no cropping) with the
"Experienced. Reliable. We Keep You Rolling." headline sitting below it on solid black — same
composition as the reference mockup — instead of overlaid on top of the photo.

---

## 2. Service category — Trailer & Chassis Repairs ✅ DONE
**File:** `public/images/service-trailer-chassis.jpg`
**Used in:** category card (Home + Services page), aspect ~4:3 / 16:9

> Photorealistic close-up of a technician welding or repairing the steel frame of a semi-trailer
> chassis inside an industrial repair shop. Sparks flying, warm dusk-toned light mixed with shop
> work lights, orange safety-vest accent for a pop of brand color. Gritty, hands-on industrial
> detail. High contrast, shallow depth of field. No text, no logos.

## 3. Service category — Brake & Suspension ✅ DONE
**File:** `public/images/service-brake-suspension.jpg`

> Photorealistic shot of a mechanic's hands inspecting or repairing a heavy-duty trailer brake
> drum and air-ride suspension system underneath a trailer. Warm amber-toned shop lighting,
> tools visible in frame, dramatic shadows. Photorealistic, high contrast. No text, no logos.

## 4. Service category — Fleet Maintenance ✅ DONE
**File:** `public/images/service-fleet-maintenance.jpg`

> Wide photorealistic shot of a row of commercial trailers lined up in a service yard at dusk
> for inspection, a technician with a clipboard walking the line. Warm sunset lighting, orange
> sky, sense of scale and organization. Photorealistic, high contrast. No text, no logos.

## 5. Service category — Electrical Services ✅ DONE
**File:** `public/images/service-electrical.jpg`

> Photorealistic close-up of a technician repairing trailer tail-light wiring or an electrical
> harness at the rear of a trailer. Dusk ambient light mixed with glowing LED lights, warm
> orange undertone. Photorealistic, high contrast, shallow depth of field. No text, no logos.

## 6. Service category — Cleaning & Appearance ✅ DONE
**File:** `public/images/service-cleaning.jpg`

> Photorealistic shot of a pressure washer blasting grime off the side of a semi-trailer in a
> wash bay, water spray catching golden dusk light, dramatic backlit mist. Photorealistic, high
> contrast. No text, no logos.

## 7. Service category — Mobile Service (featured, wider treatment) ✅ DONE
**File:** `public/images/service-mobile.jpg`
**Used in:** featured/larger card — give it a 16:9 crop, this one carries more visual weight than the other five

> Cinematic wide shot of a mobile repair service truck parked beside a broken-down semi-trailer
> at the roadside or in a fleet yard at dusk, technician working under truck-mounted work
> lights. Dramatic orange sunset sky, sense of urgency and readiness. Photorealistic, high
> contrast, 16:9 landscape. No text, no logos.

---

## 8. Fleet & Commercial Accounts banner ✅ DONE
**File:** `public/images/fleet-accounts.jpg`
**Used in:** `src/pages/Home.jsx`, Fleet & Commercial Accounts section, aspect 16:9

> Photorealistic wide shot of a fleet manager and driver reviewing a clipboard or tablet in
> front of a lineup of commercial trailers in a yard at dusk. Warm orange sunset lighting,
> professional and trustworthy mood, handshake or collaborative pose. Photorealistic, high
> contrast, 16:9 landscape. No text, no logos.

## 9. About — shop photo ✅ DONE
**File:** `public/images/about-shop.jpg`
**Used in:** `src/pages/About.jsx`, Company Story section, aspect 4:3

> Photorealistic wide interior shot of a well-equipped trailer repair shop, technicians working
> on a trailer in the background, warm shop lighting mixed with dusk light spilling through open
> bay doors. Organized tools and equipment, authentic hands-on feel — not a sterile showroom.
> Photorealistic, high contrast, 4:3. No text, no logos.

---

## Not in this list — handle separately
- **Brands & Equipment Serviced logos** (`src/data/services.js` → `brandsServiced`) — these are
  other companies' trademarks (Wabash, Utility, Great Dane, etc.). Don't generate these — pull
  official logo assets from each brand's press/media page, or keep the current text-only
  treatment, which the spec allows ("logo strip **or simple list**").
- **Project/portfolio photos** (`src/data/projects.js`) — real completed jobs, supplied by the
  client, not generated.
