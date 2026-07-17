import { serviceCategories } from "../data/services";

export default function CategoryFilter({ active, onChange }) {
  const options = [{ slug: "all", title: "All Projects" }, ...serviceCategories];
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-10">
      {options.map((c) => (
        <button
          key={c.slug}
          onClick={() => onChange(c.slug)}
          className={`rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wide transition-colors ${
            active === c.slug
              ? "bg-jc-orange-primary text-jc-black"
              : "border border-white/15 text-jc-gray-steel hover:border-jc-orange-primary hover:text-jc-orange-primary"
          }`}
        >
          {c.title}
        </button>
      ))}
    </div>
  );
}
