import { BUSINESS, SERVICE_AREA_CITIES } from "./business";

// Service categories — CONFIRMED structure per spec Section 5 / 6A / 14
export const serviceCategories = [
  {
    slug: "trailer-chassis-repairs",
    title: "Trailer & Chassis Repairs",
    tagline: "Structural repairs that keep your equipment DOT-legal and road-ready.",
    image: "/images/service-trailer-chassis.jpg",
    featured: false,
    services: [
      { name: "Chassis Repair", description: "Full chassis diagnostics and structural repair for damaged or worn frames." },
      { name: "Frame Repair", description: "Straightening, reinforcement, and welding for bent or cracked frame rails." },
      { name: "Collision Repair", description: "Body and structural repair after accidents, yard damage, or road incidents." },
      { name: "Floor Repair", description: "Replacement and reinforcement of damaged trailer flooring and crossmembers." },
    ],
  },
  {
    slug: "brake-suspension",
    title: "Brake & Suspension",
    tagline: "Safety-critical systems inspected and repaired to spec.",
    image: "/images/service-brake-suspension.jpg",
    featured: false,
    services: [
      { name: "Brake Service", description: "Brake inspection, adjustment, drum/shoe and air system service." },
      { name: "Axle Repair", description: "Axle alignment, bearing replacement, and load-bearing repair." },
      { name: "Suspension Repair", description: "Air ride and spring suspension diagnostics and component replacement." },
      { name: "Bearing Service", description: "Wheel bearing inspection, repack, and replacement." },
    ],
  },
  {
    slug: "fleet-maintenance",
    title: "Fleet Maintenance",
    tagline: "Scheduled inspections that keep your fleet compliant and moving.",
    image: "/images/service-fleet-maintenance.jpg",
    featured: false,
    services: [
      { name: "DOT Inspections", description: "Annual DOT inspections to keep every unit road-legal." },
      { name: "FHWA Inspections", description: "Federal highway compliance inspections for interstate operators." },
      { name: "Tire Changes", description: "Tire mounting, balancing, and replacement for trailers and chassis." },
    ],
  },
  {
    slug: "electrical-services",
    title: "Electrical Services",
    tagline: "Lighting and wiring diagnostics done right the first time.",
    image: "/images/service-electrical.jpg",
    featured: false,
    services: [
      { name: "Trailer Wiring", description: "Full wiring harness repair and replacement." },
      { name: "Lighting", description: "Marker, brake, and tail light repair and replacement." },
      { name: "Electrical Diagnostics", description: "Full electrical system troubleshooting and fault-finding." },
      { name: "Electrical Repairs", description: "Repairs for ABS, junction boxes, and electrical components." },
    ],
  },
  {
    slug: "cleaning-appearance",
    title: "Cleaning & Appearance",
    tagline: "Presentation matters — keep your fleet looking as good as it runs.",
    image: "/images/service-cleaning.jpg",
    featured: false,
    services: [
      { name: "Pressure Washing", description: "Exterior and undercarriage pressure washing." },
      { name: "Decal Installation", description: "Fleet branding, DOT numbers, and decal application." },
      { name: "Decal Removal", description: "Clean removal of old decals and adhesive residue." },
    ],
  },
  {
    slug: "mobile-service",
    title: "Mobile Service",
    tagline: "Can't come to us? Our fully equipped mobile repair trucks come to your location.",
    image: "/images/service-mobile.jpg",
    featured: true,
    services: [
      { name: "On-Site Repair", description: "Trailer and chassis repair performed at your yard or breakdown location." },
      { name: "Roadside Response", description: "Mobile dispatch for breakdowns on the road." },
      { name: "Yard Calls", description: "Scheduled or emergency service calls to fleet yards." },
    ],
  },
];

// Homepage "Brands & Equipment Serviced" strip. Each entry renders its logo
// image (components/BrandLogo.jsx), rendered on a white chip so full-color
// marks stay legible on the site's dark background. Each file is that brand's
// real official logo pulled from their own site/press kit — not recreated.
export const brandsServiced = [
  { name: "Wabash", logo: "/images/brands/wabash.png" },
  { name: "Utility", logo: "/images/brands/utility.png" },
  { name: "Great Dane", logo: "/images/brands/great-dane.png" },
  { name: "Hyundai Translead", logo: "/images/brands/hyundai-translead.png" },
  { name: "Thermo King", logo: "/images/brands/thermo-king.svg" },
  { name: "Carrier Transicold", logo: "/images/brands/carrier-transicold.png" },
  { name: "Stoughton", logo: "/images/brands/stoughton.png" },
];

// "metro Atlanta" already covers Atlanta itself, so drop it from the "including" list.
const otherServiceAreaCities = SERVICE_AREA_CITIES.filter((c) => c !== "Atlanta");
const serviceAreaCityList = `${otherServiceAreaCities.slice(0, -1).join(", ")}, and ${otherServiceAreaCities.at(-1)}`;

export const faqs = [
  { question: "Do you offer mobile repair?", answer: "Yes. Our fully equipped mobile repair trucks come to your yard, dock, or breakdown location — no need to bring the trailer to us." },
  { question: "What areas do you service?", answer: `We proudly serve metro Atlanta and the surrounding areas, including ${serviceAreaCityList}.` },
  { question: "Do you work with fleets and repeat accounts?", answer: "Yes. We partner with fleet managers and owner-operators on priority scheduling and billing accounts." },
  { question: "How fast can you respond to a breakdown?", answer: "Call us during business hours and we'll get a mobile repair truck moving to your location as fast as possible." },
  { question: "What types of trailers/chassis do you repair?", answer: "Dry vans, reefers, flatbeds, and intermodal chassis across all major manufacturers." },
  { question: "What are your business hours?", answer: `${BUSINESS.hours.map((h) => `${h.days} ${h.time}`).join(". ")}.` },
];

// STATUS: MOCKUP per spec Section 5 — placeholder values, swap before launch.
export const stats = [
  { label: "Years of Experience", value: "25+" },
  { label: "Satisfied Customers", value: "1000+" },
  { label: "Trailers Repaired", value: "5000+" },
];
