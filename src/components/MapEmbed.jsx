const ADDRESS = "5225 John G Glover Ind Ct, Ellenwood, GA 30294";
const MAP_SRC = `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`;

export default function MapEmbed({ className = "" }) {
  return (
    <iframe
      title={`JC Trailmaster location — ${ADDRESS}`}
      src={MAP_SRC}
      className={`w-full border-0 grayscale-[40%] invert-[92%] contrast-[90%] ${className}`}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
}
