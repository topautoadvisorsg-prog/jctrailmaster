import { BUSINESS } from "../data/business";

// Solid mark + wordmark — used in both Header and Footer so the two match.
function FacebookMark(props) {
  return (
    <svg viewBox="0 0 24 24" width={20} height={20} {...props}>
      <circle cx="12" cy="12" r="12" fill="#1877F2" />
      <path
        fill="#fff"
        d="M15.4 12.5h-2.1v7h-2.9v-7H9V10h1.4V8.6c0-1.9 1-3 3.2-3h1.9v2.4h-1.2c-.6 0-.9.4-.9 1V10h2.1l-.1 2.5z"
      />
    </svg>
  );
}

export default function FacebookLink({ className = "" }) {
  return (
    <a
      href={BUSINESS.social.facebook}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center gap-2 whitespace-nowrap text-sm font-semibold text-jc-white hover:text-jc-orange-primary transition-colors ${className}`}
    >
      <FacebookMark className="shrink-0" />
      Facebook
    </a>
  );
}
