import { motion } from "framer-motion";
import {
  ShieldCheck, Clock, BadgeCheck, Wrench, Phone, Star, MapPin, ChevronDown,
  Truck, Container, CircleDollarSign,
} from "lucide-react";
import { useState } from "react";
import Button from "../components/Button";
import SectionHeading from "../components/SectionHeading";
import CtaBand from "../components/CtaBand";
import Reveal from "../components/Reveal";
import MapEmbed from "../components/MapEmbed";
import BrandsMarquee from "../components/BrandsMarquee";
import usePageMeta from "../hooks/usePageMeta";
import { bgImage } from "../lib/media";
import { serviceCategories, brandsServiced, faqs, stats } from "../data/services";
import { projects, testimonials } from "../data/projects";
import { BUSINESS, SERVICE_AREA_CITIES } from "../data/business";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const TRUST_BADGES = [
  { icon: ShieldCheck, label: "Expert Technicians", sub: "Skilled. Certified. Trusted." },
  { icon: Clock, label: "Fast Response", sub: "Minimizing downtime. Maximizing uptime." },
  { icon: BadgeCheck, label: "Quality Guaranteed", sub: "We do it right the first time." },
  { icon: Wrench, label: "In Shop & Mobile Service", sub: "We come to you or you come to us." },
];

// Distinct from the hero trust badges above (Expert Technicians / Fast Response /
// Quality Guaranteed / In-Shop & Mobile) — these expand the pitch rather than repeat it.
const WHY_CHOOSE = [
  { icon: Truck, label: "Fleet Specialists", sub: "Priority scheduling and billing built around your fleet." },
  { icon: ShieldCheck, label: "Licensed & Insured", sub: "Fully licensed and insured, so every job is protected." },
  { icon: BadgeCheck, label: "All Major Brands", sub: "Wabash, Great Dane, Utility, Thermo King, Carrier, and more." },
  { icon: Container, label: "Every Trailer & Truck Type", sub: "Dry vans, reefers, flatbeds, box trucks, and intermodal chassis." },
  { icon: CircleDollarSign, label: "Fair, Honest Pricing", sub: "High-quality work at a fair price — no surprises." },
  { icon: Wrench, label: "One Call, Every Repair", sub: "Trailers, containers, chassis, and box trucks — all under one roof." },
];


function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/10">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between py-5 text-left"
        aria-expanded={open}
      >
        <span className="font-semibold text-jc-white pr-4">{q}</span>
        <ChevronDown
          size={18}
          className={`shrink-0 text-jc-orange-primary transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && <p className="pb-5 text-sm text-jc-gray-steel leading-relaxed">{a}</p>}
    </div>
  );
}

export default function Home() {
  usePageMeta(
    "Trailer, Container & Chassis Repair in Metro Atlanta",
    "Experienced, reliable trailer, reefer, dry van, box truck, and chassis repair — in shop or mobile service. 25+ years serving metro Atlanta fleets and owner-operators."
  );

  return (
    <>
      {/* HERO — image carries the JC Trailmaster wordmark baked in; headline sits below it.
          Height is capped (not aspect-ratio-locked) so it stays big/full without ballooning
          past ~820px on ultra-wide screens and dragging the headline behind dead black space. */}
      <section className="bg-jc-black">
        <div
          className="relative w-full h-[420px] sm:h-[520px] md:h-[680px] lg:h-[760px] xl:h-[820px] bg-cover bg-center"
          style={bgImage("/images/trailer-chassis-repair-atlanta-jc-trailmaster-hero.jpg")}
          role="img"
          aria-label="JC Trailmaster semi-truck and trailer at sunset"
        >
          <div className="absolute inset-x-0 bottom-0 h-16 md:h-24 bg-gradient-to-t from-jc-black to-transparent" />
        </div>

        <div className="mx-auto max-w-5xl px-4 pb-16 pt-6 md:pt-8 text-center">
          <motion.h1
            initial="hidden" animate="show" variants={fadeUp}
            className="text-4xl md:text-6xl font-black tracking-tight text-jc-white"
          >
            Experienced. Reliable.
            <span className="block text-jc-orange-primary">We Keep You Rolling.</span>
          </motion.h1>
          <motion.p
            initial="hidden" animate="show" variants={fadeUp} transition={{ delay: 0.1 }}
            className="mx-auto mt-5 max-w-2xl text-jc-gray-steel text-lg"
          >
            With over 25 years of hands-on experience, we deliver high-quality trailer and chassis repairs — In Shop or Mobile Service.
          </motion.p>
          <motion.div
            initial="hidden" animate="show" variants={fadeUp} transition={{ delay: 0.2 }}
            className="mt-8 flex flex-wrap justify-center gap-4"
          >
            <Button variant="primary" icon="wrench" href="/contact">Request Service</Button>
            <Button variant="secondary" icon="phone">Call Now</Button>
          </motion.div>
        </div>
      </section>

      {/* TRUST BADGES */}
      <section className="bg-jc-black jc-texture py-12 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 grid grid-cols-2 gap-6 md:grid-cols-4">
          {TRUST_BADGES.map((b) => (
            <div key={b.label} className="text-center">
              <b.icon className="mx-auto mb-2 text-jc-orange-primary" size={26} strokeWidth={1.5} />
              <p className="text-sm font-bold text-jc-white">{b.label}</p>
              <p className="text-xs text-jc-gray-steel">{b.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* STATS BAR — MOCKUP, swap real figures before launch */}
      <section className="bg-jc-black-soft border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-6 grid grid-cols-3 gap-6 lg:px-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-2xl md:text-3xl font-black text-jc-orange-primary">{s.value}</p>
              <p className="text-xs uppercase tracking-wide text-jc-gray-steel">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICE CATEGORIES */}
      <section className="bg-jc-black jc-texture py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <Reveal>
            <SectionHeading title={<>Complete <span className="text-jc-orange-primary">Repair and Maintenance</span> Solutions.</>} />
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {serviceCategories.map((cat, i) => (
              <Reveal key={cat.slug} delay={i * 0.06}>
                <div
                  className={`group h-full rounded-lg border bg-jc-black-soft overflow-hidden transition-colors ${
                    cat.featured
                      ? "border-jc-orange-primary/50 hover:border-jc-orange-primary"
                      : "border-white/10 hover:border-jc-orange-primary/60"
                  }`}
                >
                  <div
                    className="aspect-video bg-cover bg-center bg-jc-black-soft"
                    style={bgImage(cat.image)}
                  />
                  <div className="p-6">
                    {cat.featured && (
                      <p className="text-jc-orange-primary text-xs font-bold uppercase tracking-widest mb-2">Featured</p>
                    )}
                    <h3 className="font-bold text-jc-white mb-2">{cat.title}</h3>
                    <ul className="mb-4 space-y-1 text-sm text-jc-gray-steel">
                      {cat.services.map((s) => <li key={s.name}>{s.name}</li>)}
                    </ul>
                    <a href={`/services/a#${cat.slug}`} className="text-sm font-bold text-jc-orange-primary group-hover:text-jc-amber transition-colors">
                      Learn More →
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MOBILE SERVICE CALLOUT */}
      <section className="bg-jc-orange-primary">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-jc-black text-2xl md:text-3xl font-black">Breakdown? We Come To You.</h3>
            <p className="text-jc-black/80 font-semibold mt-1">Mobile repair trucks dispatched to your yard, dock, or roadside.</p>
            <p className="text-jc-black/70 text-sm mt-1">Call during business hours and we'll get a truck moving.</p>
          </div>
          <a href={BUSINESS.phone.href} className="inline-flex items-center gap-3 whitespace-nowrap rounded-md bg-jc-black px-8 py-4 text-jc-white hover:bg-jc-black-soft transition-colors">
            <Phone size={20} className="text-jc-orange-primary shrink-0" />
            <span>
              <span className="block text-xs uppercase tracking-wide text-jc-gray-steel">Call Now</span>
              <span className="block font-black text-lg">{BUSINESS.phone.display}</span>
            </span>
          </a>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-jc-black jc-texture py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <Reveal>
            <SectionHeading title={<>Why Choose <span className="text-jc-orange-primary">JC Trailmaster?</span></>} />
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_CHOOSE.map((item, i) => (
              <Reveal key={item.label} delay={i * 0.05}>
                <div className="h-full rounded-lg border border-white/10 p-6 text-center hover:border-jc-orange-primary/40 transition-colors">
                  <item.icon className="mx-auto mb-3 text-jc-orange-primary" size={28} strokeWidth={1.5} />
                  <p className="font-bold text-jc-white">{item.label}</p>
                  <p className="text-xs text-jc-gray-steel mt-1">{item.sub}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FLEET & COMMERCIAL ACCOUNTS */}
      <section className="bg-jc-black-soft py-16 border-y border-white/10">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 grid gap-8 md:grid-cols-2 items-center">
          <Reveal>
            <div>
              <p className="text-jc-orange-primary text-xs font-bold uppercase tracking-widest mb-2">Fleet & Commercial Accounts</p>
              <h3 className="text-2xl md:text-3xl font-black text-jc-white mb-4">
                We partner with fleet managers and owner-operators to keep your business moving.
              </h3>
              <p className="text-jc-gray-steel mb-6 max-w-xl">
                Ask about our priority scheduling and billing accounts — a single point of contact for every unit in your fleet.
              </p>
              <Button variant="outline" href="/contact">Learn More</Button>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="aspect-video rounded-lg bg-cover bg-center" style={bgImage("/images/fleet-accounts.jpg")} />
          </Reveal>
        </div>
      </section>

      {/* BRANDS SERVICED */}
      <section className="bg-jc-black jc-texture py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading eyebrow="Trusted By" title="Brands & Equipment We Service" />
        </div>
        <BrandsMarquee brands={brandsServiced} />
      </section>

      {/* FEATURED PROJECTS */}
      <section className="bg-jc-black-soft py-20 border-y border-white/10">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <Reveal>
            <SectionHeading eyebrow="Our Work" title={<>Featured <span className="text-jc-orange-primary">Projects</span></>} />
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {projects.filter((p) => p.featured).map((p, i) => (
              <Reveal key={p.id} delay={i * 0.05}>
                <a href="/projects/a" className="group block rounded-lg overflow-hidden border border-white/10 hover:border-jc-orange-primary/60 transition-colors">
                  <div className="aspect-[4/3] bg-cover bg-center bg-jc-black" style={bgImage(p.image)} />
                  <div className="p-3">
                    <span className="inline-block mb-1 rounded bg-jc-orange-primary/15 px-2 py-0.5 text-[10px] font-bold uppercase text-jc-orange-primary">
                      {p.categoryLabel}
                    </span>
                    <p className="text-sm font-bold text-jc-white leading-tight">{p.title}</p>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button variant="outline" href="/projects/a">View All Projects</Button>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-jc-black jc-texture py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <Reveal>
            <SectionHeading eyebrow="Reviews" title="What Our Customers Say" />
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.06}>
                <div className="h-full rounded-lg border border-white/10 p-6 hover:border-jc-orange-primary/30 transition-colors">
                  <div className="flex gap-1 mb-3 text-jc-orange-primary">
                    {Array.from({ length: t.rating }).map((_, j) => <Star key={j} size={16} fill="currentColor" />)}
                  </div>
                  <p className="text-jc-gray-steel text-sm italic mb-4">&ldquo;{t.quote}&rdquo;</p>
                  <p className="text-sm font-bold text-jc-white">{t.name}</p>
                  <p className="text-xs text-jc-gray-steel">{t.location}</p>
                  <p className="text-xs text-jc-orange-primary mt-1">Google · 5.0</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE AREA */}
      <section className="bg-jc-black-soft py-20 border-y border-white/10">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 grid gap-10 lg:grid-cols-3">
          <div>
            <SectionHeading center={false} eyebrow="Coverage" title="Service Area" subtitle="Proudly serving metro Atlanta and surrounding areas." />
            <ul className="grid grid-cols-2 gap-2 text-sm text-jc-gray-steel">
              {SERVICE_AREA_CITIES.map((c) => (
                <li key={c} className="flex items-center gap-2"><MapPin size={13} className="text-jc-orange-primary" /> {c}</li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-2 aspect-[16/7] rounded-lg border border-white/10 overflow-hidden">
            <MapEmbed className="h-full" />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-jc-black jc-texture py-20">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <SectionHeading eyebrow="Questions" title="Frequently Asked Questions" />
          <div>
            {faqs.map((f) => <FaqItem key={f.question} q={f.question} a={f.answer} />)}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
