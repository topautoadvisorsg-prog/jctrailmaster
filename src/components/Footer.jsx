import { Phone, Mail, MapPin } from "lucide-react";
import { BUSINESS, SERVICE_AREA_CITIES } from "../data/business";
import { serviceCategories } from "../data/services";

function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width={18} height={18} fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
      <path d="M14 9h2V6h-2c-1.66 0-3 1.34-3 3v2H9v3h2v6h3v-6h2.2l.8-3H14V9c0-.28.22-.5.5-.5H14V9z" />
    </svg>
  );
}

function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width={18} height={18} fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-jc-black border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-8 grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-jc-black">
              <span className="font-brand text-jc-orange-deep text-sm leading-none">JC</span>
            </span>
            <span className="font-brand text-jc-orange-primary text-lg tracking-wide">
              TRAILMASTER
            </span>
          </div>
          <p className="text-sm text-jc-gray-steel leading-relaxed">
            Your trusted partner for trailer and chassis repairs. We keep you rolling.
          </p>
          <div className="flex gap-3 mt-4">
            <a href="#" aria-label="Facebook" className="text-jc-gray-steel hover:text-jc-orange-primary"><FacebookIcon /></a>
            <a href="#" aria-label="Instagram" className="text-jc-gray-steel hover:text-jc-orange-primary"><InstagramIcon /></a>
          </div>
        </div>

        <div>
          <h4 className="text-jc-orange-primary font-bold text-sm uppercase tracking-wide mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm text-jc-gray-steel">
            <li><a href="/" className="hover:text-jc-white">Home</a></li>
            <li><a href="/services/a" className="hover:text-jc-white">Services</a></li>
            <li><a href="/projects/a" className="hover:text-jc-white">Projects</a></li>
            <li><a href="/about" className="hover:text-jc-white">About</a></li>
            <li><a href="/contact" className="hover:text-jc-white">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-jc-orange-primary font-bold text-sm uppercase tracking-wide mb-3">Services</h4>
          <ul className="space-y-2 text-sm text-jc-gray-steel">
            {serviceCategories.map((c) => <li key={c.slug}>{c.title}</li>)}
          </ul>
        </div>

        <div>
          <h4 className="text-jc-orange-primary font-bold text-sm uppercase tracking-wide mb-3">Contact Us</h4>
          <ul className="space-y-3 text-sm text-jc-gray-steel">
            <li className="flex items-center gap-2 whitespace-nowrap"><Phone size={15} className="text-jc-orange-primary shrink-0" /> {BUSINESS.phone.display}</li>
            <li className="flex items-center gap-2"><Mail size={15} className="text-jc-orange-primary shrink-0" /> {BUSINESS.email.service}</li>
            <li className="flex items-start gap-2"><MapPin size={15} className="text-jc-orange-primary shrink-0 mt-0.5" /> {BUSINESS.address.full}</li>
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
            <a href="#" className="hover:text-jc-white">Privacy Policy</a>
            <a href="#" className="hover:text-jc-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
