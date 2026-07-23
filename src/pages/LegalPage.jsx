import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import usePageMeta from "../hooks/usePageMeta";
import { legalPages } from "../data/legal";

export default function LegalPage({ type }) {
  const page = legalPages[type] || legalPages.privacy;

  usePageMeta(page.title, page.description);

  return (
    <>
      <PageHero
        eyebrow={page.eyebrow}
        title={page.title}
        subtitle={`Effective Date: ${page.effectiveDate}`}
      />

      <section className="bg-jc-black jc-texture py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <div className="mb-8 border-l-4 border-jc-orange-primary bg-jc-black-soft/85 p-5">
            <p className="text-jc-gray-steel leading-relaxed">{page.intro}</p>
            <p className="mt-3 text-sm text-jc-gray-steel">
              This page is a general template and should be reviewed by the business owner and legal counsel before it is
              treated as final legal advice.
            </p>
          </div>

          <div className="space-y-8">
            {page.sections.map((section) => (
              <section key={section.heading} className="border-b border-white/10 pb-8 last:border-b-0 last:pb-0">
                <h2 className="text-xl md:text-2xl font-black text-jc-white">{section.heading}</h2>
                <p className="mt-3 text-jc-gray-steel leading-relaxed">{section.body}</p>
                {section.items && (
                  <ul className="mt-4 space-y-2 text-jc-gray-steel">
                    {section.items.map((item) => (
                      <li key={item} className="flex gap-3 leading-relaxed">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-jc-orange-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4 border-t border-white/10 pt-6 text-sm">
            <Link to="/privacy-policy" className="text-jc-orange-primary hover:text-jc-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-jc-orange-primary hover:text-jc-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
