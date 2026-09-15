import Navbar from "../../components/layout/Navbar";
import Hero from "../../components/services/mudra-loan/MudraLoanHero";
import MudraLoan from "../../components/services/mudra-loan/MudraLoan";
import CTASection from "../../components/layout/CTA";
import Footer from "../../components/layout/Footer";

export const metadata = {
  title: "Mudra Loan Support Services – AarambhGrow",
  description:
    "Get structured support for Mudra Loans with AarambhGrow. Understand eligibility, loan requirements, documentation, funding needs, and application readiness for your business.",
};

export default function MudraLoanPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Mudra Loan Support Services",
    serviceType: "Mudra Loan",
    description:
      "Structured support for Mudra Loan applications, including eligibility assessment, documentation, funding requirements, and loan application readiness for businesses.",
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
        <MudraLoan />
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
