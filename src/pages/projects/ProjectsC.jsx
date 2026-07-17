import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import VariantSwitcher from "../../components/VariantSwitcher";
import CtaBand from "../../components/CtaBand";
import Button from "../../components/Button";
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
          <button onClick={() => scroll(-1)} className="rounded-full border border-white/15 p-2 text-jc-white hover:border-jc-orange-primary" aria-label="Scroll left">
            <ChevronLeft size={18} />
          </button>
          <button onClick={() => scroll(1)} className="rounded-full border border-white/15 p-2 text-jc-white hover:border-jc-orange-primary" aria-label="Scroll right">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
      <div ref={scrollRef} className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-2 scrollbar-thin">
        {items.map((p) => (
          <div key={p.id} className="snap-start shrink-0 w-72 rounded-lg overflow-hidden border border-white/10">
            <div className="aspect-[4/3] bg-cover bg-center" style={{ backgroundImage: `url(${p.image})` }} />
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
  return (
    <>
      <VariantSwitcher base="/projects" variants={VARIANTS} />

      <section className="bg-jc-black py-16 text-center border-b border-white/10">
        <div className="mx-auto max-w-3xl px-4">
          <p className="text-jc-orange-primary text-xs font-bold uppercase tracking-widest mb-2">Our Work</p>
          <h1 className="text-3xl md:text-5xl font-black text-jc-white">Browse By Category.</h1>
          <p className="mt-4 text-jc-gray-steel">Swipe through completed jobs, organized by service type.</p>
        </div>
      </section>

      <section className="bg-jc-black py-14">
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
