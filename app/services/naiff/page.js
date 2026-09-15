import Navbar from "../../components/layout/Navbar";
import Hero from "../../components/services/naiff/NAIFFHero";
import NAIFF from "../../components/services/naiff/NAIFF";
import CTASection from "../../components/layout/CTA";
import Footer from "../../components/layout/Footer";

export const metadata = {
  title: "NAIFF Funding Support Services – AarambhGrow",
  description:
    "Get structured support for NAIFF funding with AarambhGrow. Understand eligibility, funding requirements, documentation, project readiness, and application preparation for your business.",
};

export default function NAIFFPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "NAIFF Funding Support Services",
    serviceType: "NAIFF Funding",
    description:
      "Structured support for NAIFF funding applications, including eligibility assessment, documentation, project requirements, funding readiness, and application preparation.",
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
        <NAIFF />
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
