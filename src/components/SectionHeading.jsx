export default function SectionHeading({ eyebrow, title, subtitle, center = true }) {
  return (
    <div className={`${center ? "text-center mx-auto" : ""} max-w-2xl mb-10`}>
      {eyebrow && (
        <p className="text-jc-orange-primary text-xs font-bold uppercase tracking-[0.2em] mb-2">{eyebrow}</p>
      )}
      <h2 className="text-3xl md:text-4xl font-black tracking-tight text-jc-white">
        {title}
      </h2>
      {subtitle && <p className="mt-3 text-jc-gray-steel text-base leading-relaxed">{subtitle}</p>}
    </div>
  );
}
