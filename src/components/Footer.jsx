import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { BUSINESS, SERVICE_AREA_CITIES } from "../data/business";
import { serviceCategories } from "../data/services";

function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width={18} height={18} fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
      <path d="M14 9h2V6h-2c-1.66 0-3 1.34-3 3v2H9v3h2v6h3v-6h2.2l.8-3H14V9c0-.28.22-.5.5-.5H14V9z" />
    </svg>
  );
}

// STATUS: Projects hidden pending real client photos (2026-07-22) — add
// { label: "Projects", to: "/projects" } back once real photos are in.
const QUICK_LINKS = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-jc-black border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-8 grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-jc-black">
              <span className="font-brand italic text-jc-orange-deep text-2xl leading-none">JC</span>
            </span>
            <span className="font-brand text-jc-orange-primary text-lg tracking-wide">
              TRAILMASTER
            </span>
          </div>
          <p className="text-sm text-jc-gray-steel leading-relaxed">
            Your trusted partner for trailer and chassis repairs. We keep you rolling.
          </p>
          <div className="flex gap-3 mt-4">
            <a
              href={BUSINESS.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-jc-gray-steel hover:text-jc-orange-primary"
            >
              <FacebookIcon />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-jc-orange-primary font-bold text-sm uppercase tracking-wide mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm text-jc-gray-steel">
            {QUICK_LINKS.map((link) => (
              <li key={link.to}><Link to={link.to} className="hover:text-jc-white transition-colors">{link.label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-jc-orange-primary font-bold text-sm uppercase tracking-wide mb-3">Services</h4>
          <ul className="space-y-2 text-sm text-jc-gray-steel">
            {serviceCategories.map((c) => (
              <li key={c.slug}>
                <Link to={`/services#${c.slug}`} className="hover:text-jc-white transition-colors">{c.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-jc-orange-primary font-bold text-sm uppercase tracking-wide mb-3">Contact Us</h4>
          <ul className="space-y-3 text-sm text-jc-gray-steel">
            <li>
              <a href={BUSINESS.phone.href} className="flex items-center gap-2 whitespace-nowrap hover:text-jc-white transition-colors">
                <Phone size={15} className="text-jc-orange-primary shrink-0" /> {BUSINESS.phone.display}
              </a>
            </li>
            <li>
              <a href={`mailto:${BUSINESS.email.service}`} className="flex items-center gap-2 hover:text-jc-white transition-colors break-all">
                <Mail size={15} className="text-jc-orange-primary shrink-0" /> {BUSINESS.email.service}
              </a>
            </li>
            <li>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BUSINESS.address.full)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 hover:text-jc-white transition-colors"
              >
                <MapPin size={15} className="text-jc-orange-primary shrink-0 mt-0.5" /> {BUSINESS.address.full}
              </a>
            </li>
          </ul>
          <h4 className="text-jc-orange-primary font-bold text-sm uppercase tracking-wide mt-5 mb-2">Hours</h4>
          <p className="text-sm text-jc-gray-steel">
            {BUSINESS.hours.map((h, i) => (
              <span key={h.days}>
                {i > 0 && <br />}
                {h.days}: {h.time}
              </span>
            ))}
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 py-4 flex flex-wrap items-center justify-between gap-2 text-xs text-jc-gray-steel">
          <p>&copy; {new Date().getFullYear()} JC Trailmaster. All rights reserved.</p>
          <p>Serving {SERVICE_AREA_CITIES.join(", ")} & surrounding areas</p>
          <div className="flex gap-4">
            <Link to="/privacy-policy" className="hover:text-jc-white">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-jc-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
