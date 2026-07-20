import { ShieldCheck, Award, Wrench } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import CtaBand from "../components/CtaBand";
import Reveal from "../components/Reveal";
import PageHero from "../components/PageHero";
import usePageMeta from "../hooks/usePageMeta";
import { bgImage } from "../lib/media";

const DIFFERENTIATORS = [
  { title: "Mobile & In-Shop", body: "We come to you or you come to us — whichever gets you back on the road faster." },
  { title: "Fleet-Ready", body: "We understand commercial fleet deadlines and billing, not just single-trailer repairs." },
  { title: "Licensed & Insured", body: "Fully licensed and insured, so every job is protected." },
  { title: "Quality First", body: "We do it right the first time — every repair, every time." },
];

export default function About() {
  usePageMeta(
    "About Us",
    "20+ years of hands-on trailer and chassis repair experience. Licensed, insured, and trusted by fleet managers and owner-operators across metro Atlanta."
  );

  return (
    <>
      <PageHero eyebrow="About Us" title="We Keep You Rolling." />

      {/* Company Story */}
      <section className="bg-jc-black jc-texture py-20">
        <div className="mx-auto max-w-6xl px-4 lg:px-8 grid gap-10 md:grid-cols-2 items-center">
          <Reveal>
            <div>
              <SectionHeading center={false} eyebrow="Our Story" title="20 years. One standard. No excuses." />
              <p className="text-jc-gray-steel mb-4 leading-relaxed">
                JC Trailmaster repairs trailers, containers, and chassis, in our shop or yours. That's the whole business,
                built on twenty years of hands on experience before we ever opened our own doors. We learned this industry
                the hard way, working on every kind of trailer, every kind of breakdown, until we knew exactly what it took
                to do it right the first time.
              </p>
              <p className="text-jc-gray-steel mb-4 leading-relaxed">
                Today that means a fully equipped shop for structural repairs, brake and suspension work, electrical
                diagnostics, and everything in between. It also means a mobile fleet ready to roll to your yard, your dock,
                or the side of the road when the trailer can't come to us. DOT inspections. FHWA inspections. Preventive
                maintenance that keeps you from needing us in an emergency in the first place.
              </p>
              <p className="text-jc-gray-steel leading-relaxed">
                Single trailer or full fleet, shop repair or roadside call, every job gets the same standard. No shortcuts,
                no half fixes, no guessing. That's the promise behind "We Keep You Rolling," and it's the only way we know
                how to run a shop.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="aspect-[4/3] rounded-lg bg-cover bg-center border border-white/10" style={bgImage("/images/about-shop.jpg")} />
          </Reveal>
        </div>
      </section>

      {/* Experience */}
      <section className="bg-jc-black-soft py-16 border-y border-white/10">
        <div className="mx-auto max-w-6xl px-4 lg:px-8 grid grid-cols-3 gap-6 text-center">
          <div><p className="text-3xl font-black text-jc-orange-primary">20+</p><p className="text-xs uppercase tracking-wide text-jc-gray-steel">Years of Experience</p></div>
          <div><p className="text-3xl font-black text-jc-orange-primary">5000+</p><p className="text-xs uppercase tracking-wide text-jc-gray-steel">Trailers Repaired</p></div>
          <div><p className="text-3xl font-black text-jc-orange-primary">1000+</p><p className="text-xs uppercase tracking-wide text-jc-gray-steel">Fleet Clients Served</p></div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-jc-black jc-texture py-16 text-center">
        <div className="mx-auto max-w-2xl px-4">
          <SectionHeading eyebrow="Our Mission" title={<>"We do what it takes to get the job done, rain or shine."</>} />
          <p className="text-jc-gray-steel">
            We deliver outstanding, high-quality work at a fair price — whether that's in our shop or on site.
            Let our work speak for itself.
          </p>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-jc-black-soft py-16 border-y border-white/10">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <SectionHeading eyebrow="Credentials" title="Licensed, Insured, and Certified" />
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-lg border border-white/10 p-6 text-center hover:border-jc-orange-primary/40 transition-colors">
              <ShieldCheck className="mx-auto mb-3 text-jc-orange-primary" size={28} strokeWidth={1.5} />
              <p className="font-bold text-jc-white">Fully Licensed</p>
            </div>
            <div className="rounded-lg border border-white/10 p-6 text-center hover:border-jc-orange-primary/40 transition-colors">
              <Award className="mx-auto mb-3 text-jc-orange-primary" size={28} strokeWidth={1.5} />
              <p className="font-bold text-jc-white">Fully Insured</p>
            </div>
            <div className="rounded-lg border border-white/10 p-6 text-center hover:border-jc-orange-primary/40 transition-colors">
              <Wrench className="mx-auto mb-3 text-jc-orange-primary" size={28} strokeWidth={1.5} />
              <p className="font-bold text-jc-white">Certified Technicians</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why customers choose us */}
      <section className="bg-jc-black jc-texture py-20">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <SectionHeading eyebrow="Why Us" title="Why Customers Choose JC Trailmaster" />
          <div className="grid gap-6 sm:grid-cols-2">
            {DIFFERENTIATORS.map((d) => (
              <div key={d.title} className="rounded-lg border border-white/10 p-6 hover:border-jc-orange-primary/30 transition-colors">
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
