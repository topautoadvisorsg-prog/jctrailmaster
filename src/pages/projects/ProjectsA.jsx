import { useState, useMemo } from "react";
import VariantSwitcher from "../../components/VariantSwitcher";
import CategoryFilter from "../../components/CategoryFilter";
import Lightbox from "../../components/Lightbox";
import CtaBand from "../../components/CtaBand";
import { projects } from "../../data/projects";

const VARIANTS = [
  { path: "a", label: "A · Grid + Lightbox" },
  { path: "b", label: "B · Before/After" },
  { path: "c", label: "C · Carousel" },
];

export default function ProjectsA() {
  const [category, setCategory] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filtered = useMemo(
    () => (category === "all" ? projects : projects.filter((p) => p.category === category)),
    [category]
  );

  const openLightbox = (id) => setLightboxIndex(filtered.findIndex((p) => p.id === id));
  const close = () => setLightboxIndex(null);
  const prev = () => setLightboxIndex((i) => (i - 1 + filtered.length) % filtered.length);
  const next = () => setLightboxIndex((i) => (i + 1) % filtered.length);

  return (
    <>
      <VariantSwitcher base="/projects" variants={VARIANTS} />

      <section className="bg-jc-black py-16 text-center border-b border-white/10">
        <div className="mx-auto max-w-3xl px-4">
          <p className="text-jc-orange-primary text-xs font-bold uppercase tracking-widest mb-2">Our Work</p>
          <h1 className="text-3xl md:text-5xl font-black text-jc-white">Real Repairs. Real Results.</h1>
          <p className="mt-4 text-jc-gray-steel">Browse completed jobs by service category.</p>
        </div>
      </section>

      <section className="bg-jc-black py-14">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <CategoryFilter active={category} onChange={setCategory} />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p) => (
              <button
                key={p.id}
                onClick={() => openLightbox(p.id)}
                className="group text-left rounded-lg overflow-hidden border border-white/10 hover:border-jc-orange-primary/60 transition-colors"
              >
                <div className="aspect-[4/3] bg-cover bg-center relative" style={{ backgroundImage: `url(${p.image})` }}>
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
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-jc-gray-steel py-10">No projects in this category yet.</p>
          )}
        </div>
      </section>

      <Lightbox project={filtered[lightboxIndex]} onClose={close} onPrev={prev} onNext={next} />

      <CtaBand />
    </>
  );
}
