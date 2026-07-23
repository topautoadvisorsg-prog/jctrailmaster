import Button from "./Button";
import { bgImage } from "../lib/media";

export default function ServiceDetailBlock({ category, reverse = false }) {
  return (
    <div id={category.slug} className={`grid gap-8 md:grid-cols-2 items-center scroll-mt-36 ${reverse ? "md:[&>*:first-child]:order-2" : ""}`}>
      <div
        className={`aspect-[4/3] rounded-lg bg-cover bg-center bg-jc-black-soft border ${
          category.featured ? "border-jc-orange-primary/50" : "border-white/10"
        }`}
        style={bgImage(category.image)}
      />
      <div>
        {category.featured && (
          <p className="text-jc-orange-primary text-xs font-bold uppercase tracking-widest mb-2">Featured Service</p>
        )}
        <h3 className="text-2xl font-black text-jc-white mb-3">{category.title}</h3>
        <p className="text-jc-gray-steel mb-5">{category.tagline}</p>
        <p className="text-xs font-bold uppercase tracking-widest text-jc-orange-primary mb-3">What's Included</p>
        <ul className="space-y-2 mb-6">
          {category.services.map((s) => (
            <li key={s.name} className="text-sm">
              <span className="font-bold text-jc-white">{s.name}</span>
              <span className="text-jc-gray-steel"> — {s.description}</span>
            </li>
          ))}
        </ul>
        {/* "View Related Projects" link removed while Projects is hidden (2026-07-22) —
            add back once real project photos are in: <a href="/projects" ...>. */}
        <div className="flex flex-wrap gap-3">
          <Button variant="outline" href="/contact" className="ml-auto">Request a Quote</Button>
        </div>
      </div>
    </div>
  );
}
