import { useState } from "react";
import { bgImage } from "../lib/media";

export default function BeforeAfterSlider({ before, after, label }) {
  const [pos, setPos] = useState(50);

  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border border-white/10 select-none">
      <div className="absolute inset-0 bg-cover bg-center" style={bgImage(after)} />
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ ...bgImage(before), clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      />
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-jc-orange-primary pointer-events-none"
        style={{ left: `${pos}%` }}
      />
      <span className="absolute top-3 left-3 rounded bg-jc-black/70 px-2 py-0.5 text-[10px] font-bold uppercase text-jc-white">Before</span>
      <span className="absolute top-3 right-3 rounded bg-jc-orange-primary/90 px-2 py-0.5 text-[10px] font-bold uppercase text-jc-black">After</span>
      <input
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        onClick={(e) => e.stopPropagation()}
        className="absolute inset-x-0 bottom-2 mx-auto w-[90%] accent-jc-orange-primary"
        aria-label={`${label} before and after slider`}
      />
    </div>
  );
}
