import Navbar from "../../components/layout/Navbar";
import Hero from "../../components/services/textile-fund/TextileFundHero";
import TextileFund from "../../components/services/textile-fund/TextileFund";
import CTASection from "../../components/layout/CTA";
import Footer from "../../components/layout/Footer";

export const metadata = {
  title: "Textile Fund Support Services – AarambhGrow",
  description:
    "Get structured support for textile funding with AarambhGrow. Understand eligibility, funding requirements, documentation, project readiness, and application preparation for textile businesses.",
};

export default function TextileFundPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Textile Fund Support Services",
    serviceType: "Textile Funding",
    description:
      "Structured support for textile funding applications, including eligibility assessment, documentation, project requirements, funding readiness, and application preparation.",
    provider: {
      "@type": "Organization",
      name: "AarambhGrow",
      url: "https://aarambhgrow.co.in",
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
  };

  return (
    <>
      <Navbar />

      <main className="min-h-screen">
        <Hero />
        <TextileFund />
        <CTASection />
      </main>

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
    </>
  );
}
