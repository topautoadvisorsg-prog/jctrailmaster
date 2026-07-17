const ADDRESS = "1230 Industrial Blvd, Conyers, GA 30012";
const MAP_SRC = `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`;

export default function MapEmbed({ className = "" }) {
  return (
    <iframe
      title="JC Trailmaster location — 1230 Industrial Blvd, Conyers, GA 30012"
      src={MAP_SRC}
      className={`w-full border-0 grayscale-[40%] invert-[92%] contrast-[90%] ${className}`}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
}
