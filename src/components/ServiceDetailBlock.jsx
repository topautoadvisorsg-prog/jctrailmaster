import { Phone, Wrench, ArrowRight } from "lucide-react";
import Button from "./Button";

export default function ServiceDetailBlock({ category, reverse = false }) {
  if (category.featured) {
    return (
      <div id={category.slug} className="rounded-lg border border-jc-orange-primary/40 bg-gradient-to-br from-jc-black-soft to-jc-orange-primary/10 p-8 md:p-12 scroll-mt-32">
        <p className="text-jc-orange-primary text-xs font-bold uppercase tracking-widest mb-2">Featured Service</p>
        <h3 className="text-2xl md:text-3xl font-black text-jc-white mb-3">{category.title}</h3>
        <p className="text-jc-gray-steel max-w-2xl mb-6">{category.tagline}</p>
        <div className="grid gap-3 sm:grid-cols-3 mb-6">
          {category.services.map((s) => (
            <div key={s.name} className="rounded-md bg-jc-black/40 p-4">
              <p className="font-bold text-jc-white text-sm">{s.name}</p>
              <p className="text-xs text-jc-gray-steel mt-1">{s.description}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-3">
          <Button variant="primary" icon="phone">Call Now</Button>
          <Button variant="secondary" icon="wrench" href="/contact">Request Service</Button>
        </div>
      </div>
    );
  }

  return (
    <div id={category.slug} className={`grid gap-8 md:grid-cols-2 items-center scroll-mt-32 ${reverse ? "md:[&>*:first-child]:order-2" : ""}`}>
      <div
        className="aspect-[4/3] rounded-lg bg-cover bg-center bg-jc-black-soft border border-white/10"
        style={{ backgroundImage: `url(${category.image})` }}
      />
      <div>
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
        <div className="flex flex-wrap gap-3">
          <a href="/projects/a" className="inline-flex items-center gap-1 text-sm font-bold text-jc-orange-primary hover:text-jc-amber">
            View Related Projects <ArrowRight size={14} />
          </a>
          <Button variant="outline" href="/contact" className="ml-auto">Request a Quote</Button>
        </div>
      </div>
    </div>
  );
}
