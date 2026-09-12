import Navbar from "../../components/layout/Navbar";
import Hero from "../../components/layout/ServicesHero";
import SSS from "../../components/services/SSS";
import CTASection from "../../components/layout/CTA";
import Footer from "../../components/layout/Footer";

export const metadata = {
  title: "SSS Funding Support Services – AarambhGrow",
  description:
    "Get structured support for SSS funding with AarambhGrow. Understand eligibility, funding requirements, documentation, project readiness, and application preparation for your business.",
};

export default function SSSPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "SSS Funding Support Services",
    serviceType: "SSS Funding",
    description:
      "Structured support for SSS funding applications, including eligibility assessment, documentation, project requirements, funding readiness, and application preparation.",
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
        <SSS />
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