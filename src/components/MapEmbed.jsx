import { BUSINESS } from "../data/business";

const MAP_SRC = `https://www.google.com/maps?q=${encodeURIComponent(BUSINESS.address.full)}&output=embed`;

export default function MapEmbed({ className = "" }) {
  return (
    <iframe
      title={`JC Trailmaster location — ${BUSINESS.address.full}`}
      src={MAP_SRC}
      className={`w-full border-0 grayscale-[40%] invert-[92%] contrast-[90%] ${className}`}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
}
