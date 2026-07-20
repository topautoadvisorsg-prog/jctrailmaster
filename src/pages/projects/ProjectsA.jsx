import { useState, useMemo } from "react";
import VariantSwitcher from "../../components/VariantSwitcher";
import CategoryFilter from "../../components/CategoryFilter";
import Lightbox from "../../components/Lightbox";
import CtaBand from "../../components/CtaBand";
import Reveal from "../../components/Reveal";
import PageHero from "../../components/PageHero";
import usePageMeta from "../../hooks/usePageMeta";
import { bgImage } from "../../lib/media";
import { projects } from "../../data/projects";

const VARIANTS = [
  { path: "a", label: "A · Grid + Lightbox" },
  { path: "b", label: "B · Carousel + Before/After" },
];

export default function ProjectsA() {
  usePageMeta(
    "Completed Projects — Trailer & Chassis Repairs",
    "Browse real completed trailer, chassis, and fleet repair jobs across metro Atlanta, filterable by service category."
  );

  const [category, setCategory] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filtered = useMemo(
    () => (category === "all" ? projects : projects.filter((p) => p.category === category)),
    [category]
  );

  const changeCategory = (c) => {
    setCategory(c);
    setLightboxIndex(null);
  };

  const openLightbox = (id) => setLightboxIndex(filtered.findIndex((p) => p.id === id));
  const close = () => setLightboxIndex(null);

  return (
    <>
      <VariantSwitcher base="/projects" variants={VARIANTS} />

      <PageHero
        eyebrow="Our Work"
        title="Real Repairs. Real Results."
        subtitle="Browse completed jobs by service category."
      />

      <section className="bg-jc-black jc-texture py-14">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <CategoryFilter active={category} onChange={changeCategory} />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p, i) => (
              <Reveal key={p.id} delay={Math.min(i, 6) * 0.04}>
                <button
                  onClick={() => openLightbox(p.id)}
                  className="group w-full text-left rounded-lg overflow-hidden border border-white/10 hover:border-jc-orange-primary/60 transition-colors"
                >
                  <div className="aspect-[4/3] bg-cover bg-center relative" style={bgImage(p.image)}>
                    <div className="absolute inset-0 bg-jc-black/0 group-hover:bg-jc-black/40 transition-colors flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 text-xs font-bold uppercase text-jc-white transition-opacity">View Project</span>
                    </div>
                  </div>
                  <div className="p-4">
                    <span className="inline-block mb-1 rounded bg-jc-orange-primary/15 px-2 py-0.5 text-[10px] font-bold uppercase text-jc-orange-primary">
                      {p.categoryLabel}
                    </span>
                    <p className="font-bold text-jc-white">{p.title}</p>
                    <p className="text-xs text-jc-gray-steel">{p.location}</p>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-jc-gray-steel py-10">No projects in this category yet.</p>
          )}
        </div>
      </section>

      <Lightbox project={filtered[lightboxIndex]} onClose={close} />

      <CtaBand />
    </>
  );
}
