import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import SectionHeading from "../components/SectionHeading";

const CITIES = ["Atlanta", "Alpharetta", "Marietta", "McDonough", "Lawrenceville", "Fairburn", "Conyers", "Douglasville"];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Wire to CRM/email endpoint before launch — see Section 17 open questions.
    setSubmitted(true);
  };

  return (
    <>
      <section className="bg-jc-black py-16 text-center border-b border-white/10">
        <div className="mx-auto max-w-3xl px-4">
          <p className="text-jc-orange-primary text-xs font-bold uppercase tracking-widest mb-2">Get In Touch</p>
          <h1 className="text-3xl md:text-5xl font-black text-jc-white">Request Service</h1>
          <p className="mt-4 text-jc-gray-steel">Tell us what's going on — we'll get back to you fast, or call us directly.</p>
        </div>
      </section>

      <section className="bg-jc-black py-16">
        <div className="mx-auto max-w-6xl px-4 lg:px-8 grid gap-10 lg:grid-cols-5">
          {/* Form */}
          <div className="lg:col-span-3 rounded-lg border border-white/10 bg-jc-black-soft p-6 md:p-8">
            {submitted ? (
              <div className="text-center py-10">
                <p className="text-jc-orange-primary font-black text-xl mb-2">Request Received.</p>
                <p className="text-jc-gray-steel">We'll be in touch shortly. For anything urgent, call 770-906-4781.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wide text-jc-gray-steel mb-2">Name</label>
                    <input required type="text" className="w-full rounded-md border border-white/15 bg-jc-black px-4 py-3 text-jc-white outline-none focus:border-jc-orange-primary" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wide text-jc-gray-steel mb-2">Phone</label>
                    <input required type="tel" className="w-full rounded-md border border-white/15 bg-jc-black px-4 py-3 text-jc-white outline-none focus:border-jc-orange-primary" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wide text-jc-gray-steel mb-2">Email</label>
                  <input required type="email" className="w-full rounded-md border border-white/15 bg-jc-black px-4 py-3 text-jc-white outline-none focus:border-jc-orange-primary" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wide text-jc-gray-steel mb-2">Service Needed</label>
                  <select required className="w-full rounded-md border border-white/15 bg-jc-black px-4 py-3 text-jc-white outline-none focus:border-jc-orange-primary">
                    <option value="">Select a service</option>
                    <option>Trailer & Chassis Repairs</option>
                    <option>Brake & Suspension</option>
                    <option>Fleet Maintenance</option>
                    <option>Electrical Services</option>
                    <option>Cleaning & Appearance</option>
                    <option>Mobile Service</option>
                    <option>Fleet / Commercial Account</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wide text-jc-gray-steel mb-2">Message</label>
                  <textarea rows={4} className="w-full rounded-md border border-white/15 bg-jc-black px-4 py-3 text-jc-white outline-none focus:border-jc-orange-primary" placeholder="Tell us what's going on with your trailer or chassis..." />
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
                <a href="tel:7709064781" className="flex items-center gap-3 text-jc-white hover:text-jc-orange-primary">
                  <Phone size={18} className="text-jc-orange-primary shrink-0" />
                  <span>770-906-4781 <span className="block text-xs text-jc-gray-steel">24/7 Dispatch</span></span>
                </a>
                <a href="mailto:info@jctrailmaster.com" className="flex items-center gap-3 text-jc-white hover:text-jc-orange-primary">
                  <Mail size={18} className="text-jc-orange-primary shrink-0" />
                  info@jctrailmaster.com
                </a>
                <div className="flex items-start gap-3 text-jc-white">
                  <MapPin size={18} className="text-jc-orange-primary shrink-0 mt-0.5" />
                  1230 Industrial Blvd, Conyers, GA 30012
                </div>
                <div className="flex items-start gap-3 text-jc-white">
                  <Clock size={18} className="text-jc-orange-primary shrink-0 mt-0.5" />
                  <span>
                    Mon–Fri: 7:00 AM – 6:00 PM<br />
                    Saturday: 7:00 AM – 2:00 PM<br />
                    Sunday: By Appointment<br />
                    <span className="text-jc-orange-primary font-semibold">24/7 Emergency Dispatch</span>
                  </span>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-white/10 p-6">
              <p className="text-xs font-bold uppercase tracking-wide text-jc-gray-steel mb-3">Service Area</p>
              <div className="flex flex-wrap gap-2">
                {CITIES.map((c) => (
                  <span key={c} className="rounded-full border border-white/15 px-3 py-1 text-xs text-jc-gray-steel">{c}</span>
                ))}
              </div>
            </div>

            <div className="aspect-video rounded-lg border border-white/10 bg-jc-black-soft flex items-center justify-center text-jc-gray-steel text-sm">
              Map embed — Metro Atlanta service area
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
