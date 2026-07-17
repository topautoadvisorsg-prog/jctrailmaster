import { useState } from "react";
import { Plus } from "lucide-react";
import VariantSwitcher from "../../components/VariantSwitcher";
import ServiceDetailBlock from "../../components/ServiceDetailBlock";
import CtaBand from "../../components/CtaBand";
import usePageMeta from "../../hooks/usePageMeta";
import { serviceCategories } from "../../data/services";

const VARIANTS = [
  { path: "a", label: "A · Stacked" },
  { path: "b", label: "B · Tabbed" },
  { path: "c", label: "C · Grid" },
];

export default function ServicesB() {
  usePageMeta(
    "Services — Trailer, Chassis & Fleet Repair",
    "Trailer & chassis repair, brake & suspension, fleet maintenance, electrical, cleaning, and mobile service — full details on every repair we offer."
  );

  const [active, setActive] = useState(serviceCategories[0].slug);
  const activeCategory = serviceCategories.find((c) => c.slug === active);

  return (
    <>
      <VariantSwitcher base="/services" variants={VARIANTS} />

      <section className="bg-jc-black py-16 text-center border-b border-white/10">
        <div className="mx-auto max-w-3xl px-4">
          <p className="text-jc-orange-primary text-xs font-bold uppercase tracking-widest mb-2">Our Services</p>
          <h1 className="text-3xl md:text-5xl font-black text-jc-white">Every Repair. One Call.</h1>
          <p className="mt-4 text-jc-gray-steel">
            Pick a service category to see exactly what's included.
          </p>
        </div>
      </section>

      <section className="bg-jc-black py-14">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          {/* Desktop tabs */}
          <div role="tablist" className="hidden md:flex flex-wrap gap-2 mb-10 border-b border-white/10 pb-4">
            {serviceCategories.map((c) => (
              <button
                key={c.slug}
                role="tab"
                aria-selected={active === c.slug}
                onClick={() => setActive(c.slug)}
                className={`rounded-md px-5 py-2.5 text-sm font-bold uppercase tracking-wide transition-colors ${
                  active === c.slug
                    ? "bg-jc-orange-primary text-jc-black"
                    : "text-jc-gray-steel hover:text-jc-white"
                }`}
              >
                {c.title}
              </button>
            ))}
          </div>
          <div className="hidden md:block">
            {activeCategory && <ServiceDetailBlock category={activeCategory} />}
          </div>

          {/* Mobile accordion */}
          <div className="md:hidden space-y-3">
            {serviceCategories.map((c) => {
              const open = active === c.slug;
              return (
                <div key={c.slug} className="rounded-lg border border-white/10 overflow-hidden">
                  <button
                    onClick={() => setActive(open ? "" : c.slug)}
                    aria-expanded={open}
                    className="w-full flex items-center justify-between px-5 py-4 text-left"
                  >
                    <span className="font-bold text-jc-white">{c.title}</span>
                    <Plus size={18} className={`shrink-0 text-jc-orange-primary transition-transform ${open ? "rotate-45" : ""}`} />
                  </button>
                  {open && (
                    <div className="px-5 pb-6">
                      <ServiceDetailBlock category={c} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
