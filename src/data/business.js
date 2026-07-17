// Single source of truth for business info. Verified against jctrailmaster.com
// and client confirmation (2026-07). Update here — every component that
// displays phone/email/address/hours/service-area pulls from this file.
export const BUSINESS = {
  name: "JC Trailmaster",
  tagline: "Trailer · Container · Chassis Repair",
  phone: {
    display: "770-906-4781",
    href: "tel:7709064781",
  },
  email: {
    service: "info@jctrailmaster.com",
  },
  address: {
    street: "5225 John G Glover Ind Ct",
    city: "Ellenwood",
    state: "GA",
    zip: "30294",
    full: "5225 John G Glover Ind Ct, Ellenwood, GA 30294",
  },
  hours: [
    { days: "Mon–Fri", time: "9:00 AM – 6:00 PM" },
    { days: "Saturday", time: "By Appointment Only" },
  ],
};

// Ellenwood first (where the shop actually is), rest are the surrounding
// service area. Used for the Service Area lists and the FAQ answer.
export const SERVICE_AREA_CITIES = [
  "Ellenwood",
  "Atlanta",
  "Alpharetta",
  "Marietta",
  "McDonough",
  "Lawrenceville",
  "Fairburn",
  "Conyers",
  "Douglasville",
  "Snellville",
];
