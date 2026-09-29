import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FUNDING_SERVICES } from "../../lib/seo";

export default function RelatedServices({ currentSlug }) {
  const related = FUNDING_SERVICES.filter((s) => s.slug !== currentSlug);

  return (
    <section aria-labelledby="related-funding" className="bg-[#fafafa]">
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-10 lg:py-12">
        <h2 id="related-funding" className="text-xl font-bold text-[#03254C] sm:text-2xl">
          Related Funding Services
        </h2>

        <ul className="mt-5 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((service) => (
            <li key={service.slug}>
              <Link
                href={`/services/${service.slug}`}
                className="group flex items-center justify-between gap-3 rounded-lg border border-slate-200 bg-white px-4 py-3 text-[13px] font-semibold text-[#03254C] transition-colors hover:border-[#F26522]/40 hover:text-[#F26522]"
              >
                {service.linkLabel}
                <ArrowRight className="h-4 w-4 shrink-0 text-[#F26522] transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </li>
          ))}
        </ul>

        <Link href="/services" className="mt-5 inline-block text-[13px] font-semibold text-[#157327] hover:underline">
          View all funding services
        </Link>
      </div>
    </section>
  );
}
