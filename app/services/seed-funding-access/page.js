import Navbar from "../../components/layout/Navbar";
import Hero from "../../components/services/seed-funding-access/SeedFundingAccessHero";
import SeedFundingAccess from "../../components/services/seed-funding-access/SeedFundingAccess";
import CTASection from "../../components/layout/CTA";
import Footer from "../../components/layout/Footer";

export const metadata = {
  title: "Seed Funding Access Support Services – AarambhGrow",
  description:
    "Get structured support for accessing seed funding with AarambhGrow. Understand eligibility, funding requirements, documentation, startup readiness, and application preparation.",
};

export default function SeedFundingAccessPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Seed Funding Access Support Services",
    serviceType: "Seed Funding",
    description:
      "Structured support for accessing suitable seed funding opportunities, including eligibility assessment, funding requirements, documentation, startup readiness, and application preparation.",
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
        <SeedFundingAccess />
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
