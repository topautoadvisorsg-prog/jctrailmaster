import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Phone, Menu, X } from "lucide-react";
import { BUSINESS } from "../data/business";

const NAV = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services/a" },
  { label: "Projects", to: "/projects/a" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-jc-black/95 backdrop-blur border-b border-white/10">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 lg:px-8">
        <NavLink to="/" className="flex items-center gap-2 shrink-0">
          <span className="flex h-11 w-11 items-center justify-center rounded-full jc-gradient-sunset">
            <span className="text-jc-black font-black text-lg">JC</span>
          </span>
          <span className="leading-tight text-left">
            <span className="block font-black tracking-tight text-lg">
              JC<span className="text-jc-orange-primary">TRAILMASTER</span>
            </span>
            <span className="block text-[10px] tracking-widest text-jc-gray-steel">
              TRAILER · CONTAINER · CHASSIS REPAIR
            </span>
          </span>
        </NavLink>

        <nav className="hidden lg:flex items-center gap-7">
          {NAV.map((item) => (
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
          ))}
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
            {NAV.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="text-sm font-semibold uppercase tracking-wide text-jc-white hover:text-jc-orange-primary"
              >
                {item.label}
              </NavLink>
            ))}
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
