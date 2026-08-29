import { BUSINESS } from "../data/business";

// Search by business name + address (not just the bare address) so Google
// resolves to the actual JC Trailmaster Business Profile pin — that's what
// makes the name label show by default instead of only appearing once a
// visitor zooms in on a generic address dot.
const MAP_SRC = `https://www.google.com/maps?q=${encodeURIComponent(`${BUSINESS.name}, ${BUSINESS.address.full}`)}&output=embed`;

export default function MapEmbed({ className = "" }) {
  return (
    <iframe
      title={`JC Trailmaster location — ${BUSINESS.address.full}`}
      src={MAP_SRC}
      className={`w-full border-0 ${className}`}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
}
