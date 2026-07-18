// Standard interior hero for internal pages (Services, Projects, About, Contact).
// The facility-interior image shows through a flat dark overlay so white text and
// orange accents stay readable. Displayed with cover/center — framing is intentional,
// no manual cropping or repositioning.
const HERO_IMAGE = "/images/hero-interior.jpg";
const OVERLAY = "linear-gradient(rgba(10,10,10,0.66), rgba(10,10,10,0.66))";

export default function PageHero({ eyebrow, title, subtitle }) {
  return (
    <section
      className="relative bg-cover bg-center border-b border-white/10 py-20 md:py-28 text-center"
      style={{ backgroundImage: `${OVERLAY}, url(${HERO_IMAGE})` }}
    >
      <div className="mx-auto max-w-3xl px-4">
        {eyebrow && (
          <p className="text-jc-orange-primary text-xs font-bold uppercase tracking-widest mb-2">{eyebrow}</p>
        )}
        <h1 className="text-3xl md:text-5xl font-black text-jc-white drop-shadow-lg">{title}</h1>
        {subtitle && <p className="mt-4 text-jc-gray-steel max-w-2xl mx-auto">{subtitle}</p>}
      </div>
    </section>
  );
}
