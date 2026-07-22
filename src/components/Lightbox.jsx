import { useEffect, useMemo, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { bgImage } from "../lib/media";

export default function Lightbox({ project, onClose }) {
  const photos = useMemo(() => {
    if (!project) return [];
    const list = [];
    if (project.before) list.push({ src: project.before, label: "Before" });
    if (project.image) list.push({ src: project.image, label: "In Progress" });
    if (project.after) list.push({ src: project.after, label: "After" });
    return list;
  }, [project]);

  const [photoIndex, setPhotoIndex] = useState(0);

  useEffect(() => {
    setPhotoIndex(0);
  }, [project]);

  const prevPhoto = () => setPhotoIndex((i) => (i - 1 + photos.length) % photos.length);
  const nextPhoto = () => setPhotoIndex((i) => (i + 1) % photos.length);

  useEffect(() => {
    if (!project) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prevPhoto();
      if (e.key === "ArrowRight") nextPhoto();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [project, onClose, photos.length]);

  if (!project) return null;

  const current = photos[photoIndex];

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-jc-black/90 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} — project photos`}
    >
      <button onClick={onClose} className="absolute top-6 right-6 text-jc-white hover:text-jc-orange-primary" aria-label="Close">
        <X size={28} />
      </button>

      {photos.length > 1 && (
        <>
          <button
            onClick={(e) => { e.stopPropagation(); prevPhoto(); }}
            className="absolute left-4 md:left-8 text-jc-white hover:text-jc-orange-primary"
            aria-label="Previous photo"
          >
            <ChevronLeft size={32} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); nextPhoto(); }}
            className="absolute right-4 md:right-8 text-jc-white hover:text-jc-orange-primary"
            aria-label="Next photo"
          >
            <ChevronRight size={32} />
          </button>
        </>
      )}

      <div className="max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
        <div className="relative aspect-[4/3] w-full rounded-lg bg-cover bg-center border border-white/10" style={bgImage(current.src)}>
          <span className="absolute top-3 left-3 rounded bg-jc-black/70 px-2 py-0.5 text-[10px] font-bold uppercase text-jc-white">
            {current.label}
          </span>
        </div>

        {photos.length > 1 && (
          <div className="mt-4 flex justify-center gap-2">
            {photos.map((p, i) => (
              <button
                key={p.label}
                onClick={() => setPhotoIndex(i)}
                aria-label={`Show ${p.label} photo`}
                className={`h-2 w-2 rounded-full transition-colors ${
                  i === photoIndex ? "bg-jc-orange-primary" : "bg-jc-white/30"
                }`}
              />
            ))}
          </div>
        )}

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
