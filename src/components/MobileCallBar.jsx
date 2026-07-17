import { Phone, Wrench } from "lucide-react";

export default function MobileCallBar() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 grid grid-cols-2 border-t border-white/10 bg-jc-black">
      <a
        href="tel:7709064781"
        className="flex items-center justify-center gap-2 bg-jc-orange-primary py-4 font-bold uppercase text-jc-black text-sm"
      >
        <Phone size={16} /> Call Now
      </a>
      <a
        href="/contact"
        className="flex items-center justify-center gap-2 bg-jc-black-soft py-4 font-bold uppercase text-jc-white text-sm border-l border-white/10"
      >
        <Wrench size={16} /> Request Service
      </a>
    </div>
  );
}
