import Navbar from "../../components/layout/Navbar";
import Hero from "../../components/layout/ServicesHero";
import CGTMSE from "../../components/services/CGTMSE";
import CTASection from "../../components/layout/CTA";
import Footer from "../../components/layout/Footer";

export const metadata = {
  title: "CGTMSE Loan & Credit Guarantee Support Services – AarambhGrow",
  description:
    "Get structured support for CGTMSE-backed business finance with AarambhGrow. Understand eligibility, documentation, credit guarantee requirements, and loan application readiness.",
};

export default function CGTMSEPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "CGTMSE Loan & Credit Guarantee Support Services",
    serviceType: "CGTMSE Loan Support",
    description:
      "Structured support for CGTMSE-backed business finance, including eligibility assessment, documentation, credit guarantee requirements, and loan application readiness.",
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
        <CGTMSE />
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
