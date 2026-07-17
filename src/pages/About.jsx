import { ShieldCheck, Award, Users, Wrench } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import CtaBand from "../components/CtaBand";

const DIFFERENTIATORS = [
  { title: "Mobile & In-Shop", body: "We come to you or you come to us — whichever gets you back on the road faster." },
  { title: "Fleet-Ready", body: "We understand commercial fleet deadlines and billing, not just single-trailer repairs." },
  { title: "Licensed & Insured", body: "Fully licensed and insured, so every job is protected." },
  { title: "Quality First", body: "We do it right the first time — every repair, every time." },
];

export default function About() {
  return (
    <>
      <section className="bg-jc-black py-20 text-center border-b border-white/10">
        <div className="mx-auto max-w-3xl px-4">
          <p className="text-jc-orange-primary text-xs font-bold uppercase tracking-widest mb-2">About Us</p>
          <h1 className="text-3xl md:text-5xl font-black text-jc-white">We Keep You Rolling.</h1>
        </div>
      </section>

      {/* Company Story */}
      <section className="bg-jc-black py-20">
        <div className="mx-auto max-w-6xl px-4 lg:px-8 grid gap-10 md:grid-cols-2 items-center">
          <div>
            <SectionHeading center={false} eyebrow="Our Story" title="Built by people who work on trucks, for people who run them." />
            <p className="text-jc-gray-steel mb-4 leading-relaxed">
              JC Trailmaster was founded on a simple idea: trailer and chassis repair should be fast, honest, and done right the
              first time. What started as a small shop has grown into a trusted partner for fleet managers and owner-operators
              across metro Atlanta — without losing the hands-on, no-nonsense approach we started with.
            </p>
            <p className="text-jc-gray-steel leading-relaxed">
              Every job — whether it's a single trailer in our shop or a mobile call to a fleet yard at 2 AM — gets the same
              standard of work. That's the promise behind "We Keep You Rolling."
            </p>
          </div>
          <div className="aspect-[4/3] rounded-lg bg-cover bg-center border border-white/10 jc-gradient-sunset" style={{ backgroundImage: "url(/images/about-shop.jpg)" }} />
        </div>
      </section>

      {/* Experience */}
      <section className="bg-jc-black-soft py-16 border-y border-white/10">
        <div className="mx-auto max-w-6xl px-4 lg:px-8 grid grid-cols-2 gap-6 md:grid-cols-4 text-center">
          <div><p className="text-3xl font-black text-jc-orange-primary">25+</p><p className="text-xs uppercase tracking-wide text-jc-gray-steel">Years in Business</p></div>
          <div><p className="text-3xl font-black text-jc-orange-primary">5000+</p><p className="text-xs uppercase tracking-wide text-jc-gray-steel">Trailers Repaired</p></div>
          <div><p className="text-3xl font-black text-jc-orange-primary">1000+</p><p className="text-xs uppercase tracking-wide text-jc-gray-steel">Fleet Clients Served</p></div>
          <div><p className="text-3xl font-black text-jc-orange-primary">24/7</p><p className="text-xs uppercase tracking-wide text-jc-gray-steel">Dispatch & Support</p></div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-jc-black py-16 text-center">
        <div className="mx-auto max-w-2xl px-4">
          <SectionHeading eyebrow="Our Mission" title="Every trailer back on the road, done right, the first time." />
          <p className="text-jc-gray-steel">
            We promise honest diagnostics, quality repairs, and a team that shows up when we say we will — whether that's in
            our shop or at your yard. That's what "We Keep You Rolling" means to us.
          </p>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-jc-black-soft py-16 border-y border-white/10">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <SectionHeading eyebrow="Credentials" title="Licensed, Insured, and Certified" />
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-lg border border-white/10 p-6 text-center">
              <ShieldCheck className="mx-auto mb-3 text-jc-orange-primary" size={28} strokeWidth={1.5} />
              <p className="font-bold text-jc-white">Fully Licensed</p>
            </div>
            <div className="rounded-lg border border-white/10 p-6 text-center">
              <Award className="mx-auto mb-3 text-jc-orange-primary" size={28} strokeWidth={1.5} />
              <p className="font-bold text-jc-white">Fully Insured</p>
            </div>
            <div className="rounded-lg border border-white/10 p-6 text-center">
              <Wrench className="mx-auto mb-3 text-jc-orange-primary" size={28} strokeWidth={1.5} />
              <p className="font-bold text-jc-white">Certified Technicians</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why customers choose us */}
      <section className="bg-jc-black py-20">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <SectionHeading eyebrow="Why Us" title="Why Customers Choose JC Trailmaster" />
          <div className="grid gap-6 sm:grid-cols-2">
            {DIFFERENTIATORS.map((d) => (
              <div key={d.title} className="rounded-lg border border-white/10 p-6">
                <p className="font-bold text-jc-white mb-1">{d.title}</p>
                <p className="text-sm text-jc-gray-steel">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
