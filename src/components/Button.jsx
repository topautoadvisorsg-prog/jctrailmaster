import { Phone, Wrench } from "lucide-react";
import { BUSINESS } from "../data/business";

const BASE =
  "inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 font-bold uppercase tracking-wide text-sm transition-colors duration-200";

const VARIANTS = {
  primary: "bg-jc-orange-primary text-jc-black hover:bg-jc-orange-deep",
  secondary: "border-2 border-jc-white text-jc-white hover:border-jc-orange-primary hover:text-jc-orange-primary",
  outline: "border-2 border-jc-orange-primary text-jc-orange-primary hover:bg-jc-orange-primary hover:text-jc-black",
  dark: "bg-jc-black text-jc-white hover:bg-jc-black-soft",
};

export default function Button({ children, variant = "primary", icon, href = BUSINESS.phone.href, className = "", ...props }) {
  const Icon = icon === "phone" ? Phone : icon === "wrench" ? Wrench : null;
  return (
    <a href={href} className={`${BASE} ${VARIANTS[variant]} ${className}`} {...props}>
      {Icon && <Icon size={16} strokeWidth={2.5} />}
      {children}
    </a>
  );
}
