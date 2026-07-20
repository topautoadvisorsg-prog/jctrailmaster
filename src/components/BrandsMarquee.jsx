import BrandLogo from "./BrandLogo";

// Two back-to-back copies of the list so the -50% loop is seamless. The
// second copy is aria-hidden — screen readers only need to hear it once.
export default function BrandsMarquee({ brands }) {
  return (
    <div className="jc-marquee overflow-hidden">
      <div className="jc-marquee-track flex w-max items-center gap-6">
        {brands.map((brand) => (
          <BrandLogo key={brand.name} name={brand.name} logo={brand.logo} />
        ))}
        {brands.map((brand) => (
          <BrandLogo key={`${brand.name}-dup`} name={brand.name} logo={brand.logo} hidden />
        ))}
      </div>
    </div>
  );
}
