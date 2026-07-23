import { useState, useMemo } from "react";
import CategoryFilter from "../components/CategoryFilter";
import BeforeAfterSlider from "../components/BeforeAfterSlider";
import Lightbox from "../components/Lightbox";
import CtaBand from "../components/CtaBand";
import Button from "../components/Button";
import Reveal from "../components/Reveal";
import PageHero from "../components/PageHero";
import usePageMeta from "../hooks/usePageMeta";
import { projects } from "../data/projects";

export default function Projects() {
  usePageMeta(
    "Completed Projects — Before & After",
    "See real trailer, reefer, dry van, box truck, and chassis repairs before and after — drag the slider to compare each completed job."
  );

  const [category, setCategory] = useState("all");
  const [lightboxProject, setLightboxProject] = useState(null);

  const filtered = useMemo(
    () => (category === "all" ? projects : projects.filter((p) => p.category === category)),
    [category]
  );

  return (
    <>
      <PageHero
        eyebrow="Our Work"
        title="See The Difference."
        subtitle="Drag the slider to see each repair, before and after."
      />

      <section className="bg-jc-black jc-texture py-14">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <CategoryFilter active={category} onChange={setCategory} />

          <div className="space-y-16">
            {filtered.map((p) => (
              <Reveal key={p.id}>
                <div className="grid gap-6 md:grid-cols-2 items-center border-b border-white/10 pb-16 last:border-b-0 last:pb-0">
                  <div
                    role="button"
                    tabIndex={0}
                    onClick={() => setLightboxProject(p)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setLightboxProject(p);
                      }
                    }}
                    aria-label={`View full photo album for ${p.title}`}
                    className="cursor-pointer rounded-lg outline-none transition-shadow focus-visible:ring-2 focus-visible:ring-jc-orange-primary"
                  >
                    <BeforeAfterSlider before={p.before} after={p.after} label={p.title} />
                  </div>
                  <div>
                    <span className="inline-block mb-2 rounded bg-jc-orange-primary/15 px-2 py-0.5 text-[10px] font-bold uppercase text-jc-orange-primary">
                      {p.categoryLabel}
                    </span>
                    <h3 className="text-xl font-black text-jc-white mb-3">{p.title}</h3>
                    <p className="text-jc-gray-steel mb-5">{p.description}</p>
                    <div className="flex gap-3">
                      <Button variant="outline" href={`/services#${p.category}`}>Related Service</Button>
                      <Button variant="primary" href="/contact">Request a Quote</Button>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-jc-gray-steel py-10">No projects in this category yet.</p>
          )}
        </div>
      </section>

      <Lightbox project={lightboxProject} onClose={() => setLightboxProject(null)} />

      <CtaBand />
    </>
  );
}
