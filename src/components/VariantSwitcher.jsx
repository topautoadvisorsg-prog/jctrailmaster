import { NavLink } from "react-router-dom";

export default function VariantSwitcher({ base, variants }) {
  return (
    <div className="sticky top-[69px] z-40 bg-jc-black-soft border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 lg:px-8 py-3 flex flex-wrap items-center gap-3">
        <span className="text-xs font-bold uppercase tracking-widest text-jc-gray-steel">Layout Preview:</span>
        <div className="flex gap-2">
          {variants.map((v) => (
            <NavLink
              key={v.path}
              to={`${base}/${v.path}`}
              className={({ isActive }) =>
                `rounded-full px-4 py-1.5 text-xs font-bold uppercase transition-colors ${
                  isActive
                    ? "bg-jc-orange-primary text-jc-black"
                    : "border border-white/20 text-jc-gray-steel hover:border-jc-orange-primary hover:text-jc-orange-primary"
                }`
              }
            >
              {v.label}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}
