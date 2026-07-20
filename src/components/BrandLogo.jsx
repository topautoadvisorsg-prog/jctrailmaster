import { useState } from "react";

// Shows the brand's logo image, falling back to the text name if the file
// isn't present yet (or fails to load). Lets the brands strip work today with
// names and upgrade to real logos the moment the image files are added.
export default function BrandLogo({ name, logo }) {
  const [failed, setFailed] = useState(!logo);

  if (failed) {
    return <span className="text-jc-gray-steel font-bold text-lg tracking-wide">{name}</span>;
  }

  return (
    <div className="flex h-14 md:h-16 items-center rounded-md bg-jc-white px-4 py-2 shadow-sm">
      <img
        src={logo}
        alt={`${name} — serviced by JC Trailmaster`}
        className="h-8 md:h-10 w-auto object-contain"
        onError={() => setFailed(true)}
      />
    </div>
  );
}
