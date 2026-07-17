import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function Lightbox({ project, onClose, onPrev, onNext }) {
  if (!project) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-jc-black/90 p-4" onClick={onClose}>
      <button onClick={onClose} className="absolute top-6 right-6 text-jc-white hover:text-jc-orange-primary" aria-label="Close">
        <X size={28} />
      </button>
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-4 md:left-8 text-jc-white hover:text-jc-orange-primary"
        aria-label="Previous project"
      >
        <ChevronLeft size={32} />
      </button>
      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-4 md:right-8 text-jc-white hover:text-jc-orange-primary"
        aria-label="Next project"
      >
        <ChevronRight size={32} />
      </button>

      <div className="max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
        <div className="aspect-[4/3] w-full rounded-lg bg-cover bg-center border border-white/10" style={{ backgroundImage: `url(${project.image})` }} />
        <div className="mt-4 text-center">
          <span className="inline-block mb-2 rounded bg-jc-orange-primary/15 px-2 py-0.5 text-[10px] font-bold uppercase text-jc-orange-primary">
            {project.categoryLabel}
          </span>
          <h3 className="text-xl font-black text-jc-white">{project.title}</h3>
          <p className="text-sm text-jc-gray-steel">{project.location}</p>
          <p className="mt-2 text-sm text-jc-gray-steel max-w-lg mx-auto">{project.description}</p>
        </div>
      </div>
    </div>
  );
}
