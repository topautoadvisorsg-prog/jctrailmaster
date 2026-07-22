import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import usePageMeta from "../hooks/usePageMeta";
import MapEmbed from "../components/MapEmbed";
import PageHero from "../components/PageHero";
import { BUSINESS, SERVICE_AREA_CITIES } from "../data/business";
import { serviceCategories } from "../data/services";

export default function Contact() {
  usePageMeta(
    "Contact Us — Request Service",
    `Request trailer, reefer, dry van, box truck, or chassis repair service from JC Trailmaster. Call ${BUSINESS.phone.display} or send us your details and we'll get back to you fast.`
  );

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Wire to CRM/email endpoint before launch — see Section 17 open questions.
    setSubmitted(true);
  };

  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title="Request Service"
        subtitle="Tell us what's going on — we'll get back to you fast, or call us directly."
      />

      <section className="bg-jc-black jc-texture py-16">
        <div className="mx-auto max-w-6xl px-4 lg:px-8 grid gap-10 lg:grid-cols-5">
          {/* Form */}
          <div className="lg:col-span-3 rounded-lg border border-white/10 bg-jc-black-soft p-6 md:p-8">
            {submitted ? (
              <div className="text-center py-10" role="status" aria-live="polite">
                <p className="text-jc-orange-primary font-black text-xl mb-2">Request Received.</p>
                <p className="text-jc-gray-steel">We'll be in touch shortly. For anything urgent, call {BUSINESS.phone.display}.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wide text-jc-gray-steel mb-2">Name</label>
                    <input id="name" name="name" required type="text" autoComplete="name" className="w-full rounded-md border border-white/15 bg-jc-black px-4 py-3 text-jc-white outline-none focus:border-jc-orange-primary" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wide text-jc-gray-steel mb-2">Phone</label>
                    <input id="phone" name="phone" required type="tel" autoComplete="tel" className="w-full rounded-md border border-white/15 bg-jc-black px-4 py-3 text-jc-white outline-none focus:border-jc-orange-primary" />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wide text-jc-gray-steel mb-2">Email</label>
                  <input id="email" name="email" required type="email" autoComplete="email" className="w-full rounded-md border border-white/15 bg-jc-black px-4 py-3 text-jc-white outline-none focus:border-jc-orange-primary" />
                </div>
                <div>
                  <label htmlFor="service" className="block text-xs font-bold uppercase tracking-wide text-jc-gray-steel mb-2">Service Needed</label>
                  <select id="service" name="service" required defaultValue="" className="w-full rounded-md border border-white/15 bg-jc-black px-4 py-3 text-jc-white outline-none focus:border-jc-orange-primary">
                    <option value="" disabled>Select a service</option>
                    {serviceCategories.map((c) => <option key={c.slug}>{c.title}</option>)}
                    <option>Fleet / Commercial Account</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wide text-jc-gray-steel mb-2">Message</label>
                  <textarea id="message" name="message" rows={4} className="w-full rounded-md border border-white/15 bg-jc-black px-4 py-3 text-jc-white outline-none focus:border-jc-orange-primary" placeholder="Tell us what's going on with your trailer or chassis..." />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-md bg-jc-orange-primary px-6 py-3 font-bold uppercase text-jc-black hover:bg-jc-orange-deep transition-colors"
                >
                  <Send size={16} /> Send Request
                </button>
              </form>
            )}
          </div>

          {/* Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-lg border border-white/10 p-6">
              <div className="space-y-4 text-sm">
                <a href={BUSINESS.phone.href} className="flex items-center gap-3 whitespace-nowrap text-jc-white hover:text-jc-orange-primary">
                  <Phone size={18} className="text-jc-orange-primary shrink-0" />
                  {BUSINESS.phone.display}
                </a>
                <a href={`mailto:${BUSINESS.email.service}`} className="flex items-center gap-3 text-jc-white hover:text-jc-orange-primary">
                  <Mail size={18} className="text-jc-orange-primary shrink-0" />
                  {BUSINESS.email.service} <span className="text-xs text-jc-gray-steel">(Service)</span>
                </a>
                <div className="flex items-start gap-3 text-jc-white">
                  <MapPin size={18} className="text-jc-orange-primary shrink-0 mt-0.5" />
                  {BUSINESS.address.full}
                </div>
                <div className="flex items-start gap-3 text-jc-white">
                  <Clock size={18} className="text-jc-orange-primary shrink-0 mt-0.5" />
                  <span>
                    {BUSINESS.hours.map((h, i) => (
                      <span key={h.days}>
                        {i > 0 && <br />}
                        {h.days}: {h.time}
                      </span>
                    ))}
                  </span>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-white/10 p-6">
              <p className="text-xs font-bold uppercase tracking-wide text-jc-gray-steel mb-3">Service Area</p>
              <div className="flex flex-wrap gap-2">
                {SERVICE_AREA_CITIES.map((c) => (
                  <span key={c} className="rounded-full border border-white/15 px-3 py-1 text-xs text-jc-gray-steel">{c}</span>
                ))}
              </div>
            </div>

            <div className="aspect-video rounded-lg border border-white/10 overflow-hidden">
              <MapEmbed className="h-full" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
