import Navbar from "../../components/layout/Navbar";
import Hero from "../../components/services/pmfme/PMFMEHero";
import PMFME from "../../components/services/pmfme/PMFME";
import CTASection from "../../components/layout/CTA";
import Footer from "../../components/layout/Footer";

export const metadata = {
  title: "PMFME Loan & Food Processing Support Services – AarambhGrow",
  description:
    "Get structured support for PMFME funding with AarambhGrow. Understand eligibility, credit-linked subsidy, documentation, project requirements, and application readiness for food processing businesses.",
};

export default function PMFMEPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "PMFME Loan & Food Processing Support Services",
    serviceType: "PMFME Scheme",
    description:
      "Structured support for PMFME applications, including eligibility assessment, project planning, documentation, credit-linked subsidy requirements, and application readiness for food processing businesses.",
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
        <PMFME />
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
