import { Phone, Wrench } from "lucide-react";
import { BUSINESS } from "../data/business";

export default function CtaBand({
  headline = "Down Time Costs Money.",
  subheadline = "We Get You Back On The Road.",
}) {
  return (
    <section className="bg-jc-orange-primary">
      <div className="mx-auto max-w-7xl px-4 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <h3 className="text-jc-black text-2xl md:text-3xl font-black leading-tight">
            {headline} <span className="block md:inline">{subheadline}</span>
          </h3>
        </div>
        <div className="flex items-center gap-4">
          <a href={BUSINESS.phone.href} className="flex items-center gap-2 text-jc-black font-bold text-lg">
            <Phone size={20} /> {BUSINESS.phone.display}
          </a>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-md bg-jc-black px-6 py-3 text-sm font-bold uppercase text-jc-white hover:bg-jc-black-soft transition-colors"
          >
            <Wrench size={16} /> Request Service
          </a>
        </div>
      </div>
    </section>
  );
}
