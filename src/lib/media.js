// Real photo, if present, paints on top; the pattern behind it only shows
// through when the URL 404s — so an unset image reads as an intentional
// "photo coming soon" panel instead of a broken/blank box.
const PLACEHOLDER_PATTERN =
  "repeating-linear-gradient(135deg, rgba(245,130,15,0.08) 0px, rgba(245,130,15,0.08) 2px, transparent 2px, transparent 18px)";

export function bgImage(src) {
  return {
    backgroundImage: `${src ? `url(${src}), ` : ""}${PLACEHOLDER_PATTERN}`,
  };
}
