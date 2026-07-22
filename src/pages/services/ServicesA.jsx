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
];

export default function ServicesA() {
  usePageMeta(
    "Services — Trailer, Chassis & Fleet Repair",
    "Trailer, reefer, dry van, box truck & chassis repair, brake & suspension, fleet maintenance, electrical, cleaning, and mobile service — full details on every repair we offer."
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
        <div className="mx-auto max-w-7xl px-4 lg:px-8 py-5 flex flex-wrap justify-center gap-3 overflow-x-auto">
          {serviceCategories.map((c) => (
            <a
              key={c.slug}
              href={`#${c.slug}`}
              className="whitespace-nowrap rounded-full border-2 border-jc-orange-primary px-6 py-3 text-sm md:text-base font-bold uppercase tracking-wide text-jc-white transition-colors hover:bg-jc-orange-primary hover:text-jc-black"
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
