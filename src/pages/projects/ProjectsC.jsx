import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import VariantSwitcher from "../../components/VariantSwitcher";
import CtaBand from "../../components/CtaBand";
import Button from "../../components/Button";
import PageHero from "../../components/PageHero";
import usePageMeta from "../../hooks/usePageMeta";
import { bgImage } from "../../lib/media";
import { serviceCategories } from "../../data/services";
import { projects } from "../../data/projects";

const VARIANTS = [
  { path: "a", label: "A · Grid + Lightbox" },
  { path: "b", label: "B · Before/After" },
  { path: "c", label: "C · Carousel" },
];

function CategoryCarousel({ category }) {
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
          <button onClick={() => scroll(-1)} className="rounded-full border border-white/15 p-2 text-jc-white hover:border-jc-orange-primary transition-colors" aria-label={`Scroll ${category.title} left`}>
            <ChevronLeft size={18} />
          </button>
          <button onClick={() => scroll(1)} className="rounded-full border border-white/15 p-2 text-jc-white hover:border-jc-orange-primary transition-colors" aria-label={`Scroll ${category.title} right`}>
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
      <div ref={scrollRef} className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-2">
        {items.map((p) => (
          <div key={p.id} className="snap-start shrink-0 w-72 rounded-lg overflow-hidden border border-white/10">
            <div className="aspect-[4/3] bg-cover bg-center" style={bgImage(p.image)} />
            <div className="p-4">
              <p className="font-bold text-jc-white">{p.title}</p>
              <p className="text-xs text-jc-gray-steel mb-2">{p.location}</p>
              <p className="text-xs text-jc-gray-steel">{p.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ProjectsC() {
  usePageMeta(
    "Completed Projects — Browse By Category",
    "Swipe through real completed trailer, chassis, and fleet repair jobs organized by service category."
  );

  return (
    <>
      <VariantSwitcher base="/projects" variants={VARIANTS} />

      <PageHero
        eyebrow="Our Work"
        title="Browse By Category."
        subtitle="Swipe through completed jobs, organized by service type."
      />

      <section className="bg-jc-black jc-texture py-14">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          {serviceCategories.map((cat) => <CategoryCarousel key={cat.slug} category={cat} />)}
          <div className="text-center mt-4">
            <Button variant="outline" href="/contact">Request a Quote</Button>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
