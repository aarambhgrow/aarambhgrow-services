import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navbar from "../components/layout/Navbar";
import CTASection from "../components/layout/CTA";
import Footer from "../components/layout/Footer";
import JsonLd from "../components/seo/JsonLd";
import { FUNDING_OG_IMAGE, FUNDING_SERVICES, SITE_URL, breadcrumbList, pageMetadata, STANDARD_ROBOTS } from "../lib/seo";

export const metadata = pageMetadata({
  title: "Startup Funding, Government Grants & MSME Finance Services | AarambhGrow",
  description:
    "Explore AarambhGrow funding services for startup seed funding, SISFS, grants, CGTMSE, Mudra, PMEGP, working capital, agriculture, textile and food-processing businesses.",
  path: "/services",
  image: FUNDING_OG_IMAGE,
  robots: STANDARD_ROBOTS,
});

const breadcrumbSchema = {
  "@context": "https://schema.org",
  ...breadcrumbList([
    ["Home", `${SITE_URL}/`],
    ["Funding Services", `${SITE_URL}/services`],
  ]),
};

const GROUPS = [
  {
    key: "startup",
    title: "Startup & Seed Funding",
    text: "Support for early-stage startups preparing for seed capital, SISFS and investor-readiness opportunities.",
  },
  {
    key: "grants",
    title: "Government Grants & Schemes",
    text: "Eligibility and documentation support for relevant government-backed programs, grants and subsidies.",
  },
  {
    key: "finance",
    title: "MSME & Business Finance",
    text: "Funding-readiness support for CGTMSE-linked finance, Mudra, PMEGP, cash credit, term loans and other suitable business finance requirements.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <Navbar />

      <main className="min-h-screen bg-[#fafafa] font-sans text-slate-800">
        <header className="bg-[#E8F9FF]">
          <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-10 lg:py-14">
            <p className="inline-flex items-center gap-2 rounded-full border border-[#03254C]/10 bg-white px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-[#03254C] shadow-sm sm:text-[11px]">
              <span className="h-2 w-2 rounded-full bg-[#157327]" />
              Business Funding Services
            </p>

            <h1 className="mt-4 max-w-3xl text-[26px] font-extrabold leading-[1.15] tracking-[-0.025em] text-[#03254C] sm:text-[36px] lg:text-[40px]">
              Startup Funding, Government Grants & <span className="text-[#157327]">MSME Finance Support</span>
            </h1>

            <div className="mt-3 h-[3px] w-12 rounded-full bg-gradient-to-r from-[#F26522] to-[#157327]" />

            <p className="mt-4 max-w-2xl text-sm leading-7 text-[#475569]">
              Explore structured funding support for startups, MSMEs and growing businesses. AarambhGrow helps assess funding needs, identify
              relevant opportunities, organize project and financial information, and prepare applications for suitable schemes and finance
              options.
            </p>
          </div>
        </header>

        <div className="mx-auto max-w-7xl space-y-12 px-5 py-12 sm:px-8 lg:px-10 lg:py-16">
          {GROUPS.map((group) => (
            <section key={group.key} aria-labelledby={`${group.key}-heading`}>
              <h2 id={`${group.key}-heading`} className="text-xl font-bold text-[#03254C] sm:text-2xl">
                {group.title}
              </h2>

              <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">{group.text}</p>

              <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {FUNDING_SERVICES.filter((s) => s.group === group.key).map((service) => (
                  <li key={service.slug}>
                    <Link
                      href={`/services/${service.slug}`}
                      className="group flex h-full flex-col rounded-xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#F26522]/40 hover:shadow-md"
                    >
                      <h3 className="text-base font-bold text-[#03254C] group-hover:text-[#F26522]">{service.name}</h3>

                      <p className="mt-2 flex-1 text-[13px] leading-6 text-slate-600">{service.description}</p>

                      <span className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#F26522]">
                        Learn more
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <CTASection />
      </main>

      <Footer />
    </>
  );
}
