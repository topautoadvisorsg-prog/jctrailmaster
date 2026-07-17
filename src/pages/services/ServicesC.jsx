import { useState, useRef } from "react";
import VariantSwitcher from "../../components/VariantSwitcher";
import ServiceDetailBlock from "../../components/ServiceDetailBlock";
import CtaBand from "../../components/CtaBand";
import usePageMeta from "../../hooks/usePageMeta";
import { bgImage } from "../../lib/media";
import { serviceCategories } from "../../data/services";

const VARIANTS = [
  { path: "a", label: "A · Stacked" },
  { path: "b", label: "B · Tabbed" },
  { path: "c", label: "C · Grid" },
];

export default function ServicesC() {
  usePageMeta(
    "Services — Trailer, Chassis & Fleet Repair",
    "Trailer & chassis repair, brake & suspension, fleet maintenance, electrical, cleaning, and mobile service — full details on every repair we offer."
  );

  const [active, setActive] = useState(null);
  const detailRef = useRef(null);

  const handleSelect = (slug) => {
    setActive(slug);
    requestAnimationFrame(() => {
      detailRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  const activeCategory = serviceCategories.find((c) => c.slug === active);

  return (
    <>
      <VariantSwitcher base="/services" variants={VARIANTS} />

      <section className="bg-jc-black py-16 text-center border-b border-white/10">
        <div className="mx-auto max-w-3xl px-4">
          <p className="text-jc-orange-primary text-xs font-bold uppercase tracking-widest mb-2">Our Services</p>
          <h1 className="text-3xl md:text-5xl font-black text-jc-white">Every Repair. One Call.</h1>
          <p className="mt-4 text-jc-gray-steel">Tap a category to see full service details.</p>
        </div>
      </section>

      <section className="bg-jc-black py-14">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {serviceCategories.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => handleSelect(cat.slug)}
                aria-pressed={active === cat.slug}
                className={`text-left rounded-lg border overflow-hidden transition-colors ${
                  active === cat.slug
                    ? "border-jc-orange-primary bg-jc-orange-primary/10"
                    : "border-white/10 bg-jc-black-soft hover:border-jc-orange-primary/60"
                } ${cat.featured ? "md:col-span-2 lg:col-span-3" : ""}`}
              >
                <div className="aspect-video bg-cover bg-center" style={bgImage(cat.image)} />
                <div className="p-6">
                  <h3 className="font-bold text-jc-white mb-2">{cat.title}</h3>
                  <ul className="space-y-1 text-sm text-jc-gray-steel mb-3">
                    {cat.services.map((s) => <li key={s.name}>{s.name}</li>)}
                  </ul>
                  <span className="text-sm font-bold text-jc-orange-primary">
                    {active === cat.slug ? "Viewing details ↓" : "View Details →"}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {activeCategory && (
            <div ref={detailRef} className="mt-12 scroll-mt-36">
              <div className="border-t border-white/10 pt-12">
                <ServiceDetailBlock category={activeCategory} />
              </div>
            </div>
          )}

          {!activeCategory && (
            <div className="mt-12 rounded-lg border border-dashed border-white/15 p-10 text-center text-jc-gray-steel text-sm">
              Select a category above to view full service details.
            </div>
          )}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
