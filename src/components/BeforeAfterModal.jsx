import { useEffect } from "react";
import { X } from "lucide-react";
import BeforeAfterSlider from "./BeforeAfterSlider";

export default function BeforeAfterModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-jc-black/90 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} — before and after`}
    >
      <button onClick={onClose} className="absolute top-6 right-6 text-jc-white hover:text-jc-orange-primary" aria-label="Close">
        <X size={28} />
      </button>

      <div className="max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
        <BeforeAfterSlider before={project.before} after={project.after} label={project.title} />

        <div className="mt-4 text-center">
          <span className="inline-block mb-2 rounded bg-jc-orange-primary/15 px-2 py-0.5 text-[10px] font-bold uppercase text-jc-orange-primary">
            {project.categoryLabel}
          </span>
          <h3 className="text-xl font-black text-jc-white">{project.title}</h3>
          <p className="mt-2 text-sm text-jc-gray-steel max-w-lg mx-auto">{project.description}</p>
        </div>
      </div>
    </div>
  );
}
