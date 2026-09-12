import Navbar from "../../components/layout/Navbar";
import Hero from "../../components/layout/ServicesHero";
import CCTermLoans from "../../components/services/CCTermLoans";
import CTASection from "../../components/layout/CTA";
import Footer from "../../components/layout/Footer";

export const metadata = {
  title: "CC & Term Loan Services – AarambhGrow",
  description:
    "Get structured support for Cash Credit (CC) and Term Loans with AarambhGrow. Understand eligibility, documentation, funding requirements, and application readiness for business finance.",
};

export default function CCTermLoansPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "CC & Term Loan Services",
    serviceType: "Business Loans & Working Capital Finance",
    description:
      "Structured support for Cash Credit (CC) and Term Loans, including eligibility assessment, documentation, funding requirements, and application readiness.",
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
        <CCTermLoans />
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
