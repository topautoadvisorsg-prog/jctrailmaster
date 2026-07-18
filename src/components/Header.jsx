import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { BUSINESS } from "../data/business";
import { serviceCategories } from "../data/services";

const NAV = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services/a" },
  { label: "Projects", to: "/projects/a" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

// Dropdown links always point at the stacked layout (/services/a) since it's
// the one with real #slug anchors to jump straight to — that holds regardless
// of which Services layout (A or B) the client ultimately picks.
function ServicesDropdown() {
  return (
    <div className="group relative">
      <NavLink
        to="/services/a"
        className={({ isActive }) =>
          `flex items-center gap-1 text-sm font-semibold uppercase tracking-wide transition-colors ${
            isActive ? "text-jc-orange-primary" : "text-jc-white group-hover:text-jc-orange-primary"
          }`
        }
      >
        Services
        <ChevronDown size={14} className="transition-transform duration-150 group-hover:rotate-180" />
      </NavLink>

      <div className="invisible absolute left-1/2 top-full -translate-x-1/2 pt-3 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
        <div className="w-72 rounded-lg border border-white/10 bg-jc-black-soft p-2 shadow-2xl shadow-black/50">
          {serviceCategories.map((cat) => (
            <Link
              key={cat.slug}
              to={`/services/a#${cat.slug}`}
              className="block rounded-md px-3 py-2.5 text-sm font-semibold text-jc-white transition-colors hover:bg-jc-orange-primary/10 hover:text-jc-orange-primary"
            >
              {cat.title}
            </Link>
          ))}
          <div className="mt-1 border-t border-white/10 pt-1">
            <Link
              to="/services/a"
              className="block rounded-md px-3 py-2.5 text-xs font-bold uppercase tracking-wide text-jc-orange-primary transition-colors hover:bg-jc-orange-primary/10"
            >
              View All Services →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileServicesLinks({ onNavigate }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <div className="flex items-center justify-between">
        <NavLink
          to="/services/a"
          onClick={onNavigate}
          className="text-sm font-semibold uppercase tracking-wide text-jc-white hover:text-jc-orange-primary"
        >
          Services
        </NavLink>
        <button
          onClick={() => setExpanded((e) => !e)}
          aria-label="Toggle service categories"
          aria-expanded={expanded}
          className="p-1 text-jc-gray-steel hover:text-jc-orange-primary"
        >
          <ChevronDown size={16} className={`transition-transform ${expanded ? "rotate-180" : ""}`} />
        </button>
      </div>
      {expanded && (
        <div className="mt-2 flex flex-col gap-2 border-l border-white/10 pl-3">
          {serviceCategories.map((cat) => (
            <Link
              key={cat.slug}
              to={`/services/a#${cat.slug}`}
              onClick={onNavigate}
              className="text-sm text-jc-gray-steel hover:text-jc-orange-primary"
            >
              {cat.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-jc-black/95 backdrop-blur border-b border-white/10">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 lg:px-8">
        <NavLink to="/" className="flex items-center gap-2 shrink-0">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-jc-black">
            <span className="font-brand italic text-jc-orange-deep text-3xl leading-none">JC</span>
          </span>
          <span className="leading-tight text-left">
            <span className="block font-brand text-jc-orange-primary text-xl tracking-wide">
              TRAILMASTER
            </span>
          </span>
        </NavLink>

        <nav className="hidden lg:flex items-center gap-7">
          {NAV.map((item) =>
            item.label === "Services" ? (
              <ServicesDropdown key={item.to} />
            ) : (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `text-sm font-semibold uppercase tracking-wide transition-colors ${
                    isActive ? "text-jc-orange-primary" : "text-jc-white hover:text-jc-orange-primary"
                  }`
                }
              >
                {item.label}
              </NavLink>
            )
          )}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a href={BUSINESS.phone.href} className="flex items-center gap-2 whitespace-nowrap text-jc-orange-primary font-bold">
            <Phone size={18} className="shrink-0" />
            {BUSINESS.phone.display}
          </a>
          <a
            href="/contact"
            className="rounded-md bg-jc-orange-primary px-5 py-2.5 text-sm font-bold uppercase text-jc-black hover:bg-jc-orange-deep transition-colors"
          >
            Request Service
          </a>
        </div>

        <button
          className="lg:hidden text-jc-white"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-white/10 bg-jc-black px-4 py-4">
          <nav className="flex flex-col gap-4">
            {NAV.map((item) =>
              item.label === "Services" ? (
                <MobileServicesLinks key={item.to} onNavigate={() => setOpen(false)} />
              ) : (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="text-sm font-semibold uppercase tracking-wide text-jc-white hover:text-jc-orange-primary"
                >
                  {item.label}
                </NavLink>
              )
            )}
            <a href={BUSINESS.phone.href} className="flex items-center gap-2 whitespace-nowrap text-jc-orange-primary font-bold pt-2 border-t border-white/10">
              <Phone size={18} className="shrink-0" />
              {BUSINESS.phone.display}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
