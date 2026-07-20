import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import VariantSwitcher from "../../components/VariantSwitcher";
import BeforeAfterModal from "../../components/BeforeAfterModal";
import CtaBand from "../../components/CtaBand";
import Reveal from "../../components/Reveal";
import PageHero from "../../components/PageHero";
import usePageMeta from "../../hooks/usePageMeta";
import { bgImage } from "../../lib/media";
import { projects } from "../../data/projects";
import { serviceCategories } from "../../data/services";

const VARIANTS = [
  { path: "a", label: "A · Grid + Lightbox" },
  { path: "b", label: "B · Carousel + Before/After" },
];

function CategoryCarousel({ category, onSelect }) {
  const scrollRef = useRef(null);
  const items = projects.filter((p) => p.category === category.slug);
  if (items.length === 0) return null;

  const scroll = (dir) => {
    scrollRef.current?.scrollBy({ left: dir * 320, behavior: "smooth" });
  };

  return (
    <div className="mb-16">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-black text-jc-white">{category.title}</h3>
        <div className="flex gap-2">
          <button
            onClick={() => scroll(-1)}
            aria-label={`Scroll ${category.title} left`}
            className="rounded-full border border-white/10 p-2 text-jc-white hover:border-jc-orange-primary hover:text-jc-orange-primary transition-colors"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => scroll(1)}
            aria-label={`Scroll ${category.title} right`}
            className="rounded-full border border-white/10 p-2 text-jc-white hover:border-jc-orange-primary hover:text-jc-orange-primary transition-colors"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
      <div ref={scrollRef} className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-2">
        {items.map((p) => (
          <button
            key={p.id}
            onClick={() => onSelect(p)}
            className="group snap-start shrink-0 w-72 text-left rounded-lg overflow-hidden border border-white/10 hover:border-jc-orange-primary/60 transition-colors"
          >
            <div className="aspect-[4/3] bg-cover bg-center relative" style={bgImage(p.image)}>
              <div className="absolute inset-0 bg-jc-black/0 group-hover:bg-jc-black/40 transition-colors flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 text-xs font-bold uppercase text-jc-white transition-opacity">
                  See Before / After
                </span>
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
    </div>
  );
}

export default function ProjectsB() {
  usePageMeta(
    "Completed Projects — Before & After",
    "Scroll through completed trailer, chassis, and fleet repair jobs across metro Atlanta with an interactive before/after view of every project."
  );

  const [active, setActive] = useState(null);

  return (
    <>
      <VariantSwitcher base="/projects" variants={VARIANTS} />

      <PageHero
        eyebrow="Our Work"
        title="Real Repairs. Real Results."
        subtitle="Scroll a category, then see every job's before and after."
      />

      <section className="bg-jc-black jc-texture py-14">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          {serviceCategories.map((cat) => (
            <Reveal key={cat.slug}>
              <CategoryCarousel category={cat} onSelect={setActive} />
            </Reveal>
          ))}
        </div>
      </section>

      <BeforeAfterModal project={active} onClose={() => setActive(null)} />

      <CtaBand />
    </>
  );
}
