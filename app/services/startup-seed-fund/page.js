import Navbar from "../../components/layout/Navbar";
import Hero from "../../components/services/startup-seed-fund/StartupSeedFundHero";
import StartupSeedFund from "../../components/services/startup-seed-fund/StartupSeedFund";
import CTASection from "../../components/layout/CTA";
import Footer from "../../components/layout/Footer";

export const metadata = {
  title: "Startup Seed Fund Support Services – AarambhGrow",
  description:
    "Get structured support for startup seed funding with AarambhGrow. Understand eligibility, funding requirements, documentation, startup readiness, and application preparation.",
};

export default function StartupSeedFundPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Startup Seed Fund Support Services",
    serviceType: "Startup Seed Funding",
    description:
      "Structured support for startup seed funding applications, including eligibility assessment, funding requirements, documentation, startup readiness, and application preparation.",
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
        <StartupSeedFund />
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
