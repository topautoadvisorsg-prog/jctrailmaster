import { serviceCategories } from "../data/services";

export default function CategoryFilter({ active, onChange }) {
  const options = [{ slug: "all", title: "All Projects" }, ...serviceCategories];
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-10">
      {options.map((c) => (
        <button
          key={c.slug}
          onClick={() => onChange(c.slug)}
          className={`whitespace-nowrap rounded-full border-2 border-jc-orange-primary px-6 py-3 text-sm md:text-base font-bold uppercase tracking-wide transition-colors ${
            active === c.slug
              ? "bg-jc-orange-primary text-jc-black"
              : "text-jc-white hover:bg-jc-orange-primary hover:text-jc-black"
          }`}
        >
          {c.title}
        </button>
      ))}
    </div>
  );
}
