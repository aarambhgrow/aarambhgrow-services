import Navbar from "../../components/layout/Navbar";
import Hero from "../../components/layout/ServicesHero";
import PMEGPLoan from "../../components/services/PMEGPLoan";
import CTASection from "../../components/layout/CTA";
import Footer from "../../components/layout/Footer";

export const metadata = {
  title: "PMEGP Loan Support Services – AarambhGrow",
  description:
    "Get structured support for PMEGP loans with AarambhGrow. Understand eligibility, subsidy requirements, documentation, project planning, and application readiness for your business.",
};

export default function PMEGPLoanPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "PMEGP Loan Support Services",
    serviceType: "PMEGP Loan",
    description:
      "Structured support for PMEGP loan applications, including eligibility assessment, project planning, documentation, subsidy requirements, and application readiness.",
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
        <PMEGPLoan />
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
