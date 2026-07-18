import VariantSwitcher from "../../components/VariantSwitcher";
import ServiceDetailBlock from "../../components/ServiceDetailBlock";
import CtaBand from "../../components/CtaBand";
import Reveal from "../../components/Reveal";
import PageHero from "../../components/PageHero";
import usePageMeta from "../../hooks/usePageMeta";
import { serviceCategories } from "../../data/services";

const VARIANTS = [
  { path: "a", label: "A · Stacked" },
  { path: "b", label: "B · Tabbed" },
  { path: "c", label: "C · Grid" },
];

export default function ServicesA() {
  usePageMeta(
    "Services — Trailer, Chassis & Fleet Repair",
    "Trailer & chassis repair, brake & suspension, fleet maintenance, electrical, cleaning, and mobile service — full details on every repair we offer."
  );

  return (
    <>
      <VariantSwitcher base="/services" variants={VARIANTS} />

      <PageHero
        eyebrow="Our Services"
        title="Every Repair. One Call."
        subtitle="From structural chassis repair to fleet-wide DOT inspections — here's exactly what we do and how it works."
      />

      <nav className="bg-jc-black-soft border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 py-3 flex flex-wrap gap-2 overflow-x-auto">
          {serviceCategories.map((c) => (
            <a
              key={c.slug}
              href={`#${c.slug}`}
              className="whitespace-nowrap rounded-full border border-white/15 px-4 py-1.5 text-xs font-semibold text-jc-gray-steel hover:border-jc-orange-primary hover:text-jc-orange-primary transition-colors"
            >
              {c.title}
            </a>
          ))}
        </div>
      </nav>

      <section className="bg-jc-black jc-texture py-16">
        <div className="mx-auto max-w-6xl px-4 lg:px-8 space-y-20">
          {serviceCategories.map((cat, i) => (
            <Reveal key={cat.slug}>
              <ServiceDetailBlock category={cat} reverse={i % 2 === 1} />
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
