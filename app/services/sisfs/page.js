import Navbar from "../../components/layout/Navbar";
import Hero from "../../components/layout/ServicesHero";
import SISFS from "../../components/services/SISFS";
import CTASection from "../../components/layout/CTA";
import Footer from "../../components/layout/Footer";

export const metadata = {
  title: "Startup India Seed Fund Scheme (SISFS) Support – AarambhGrow",
  description:
    "Get structured support for the Startup India Seed Fund Scheme (SISFS) with AarambhGrow. Understand eligibility, funding requirements, documentation, startup readiness, and application preparation.",
};

export default function SISFSPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Startup India Seed Fund Scheme (SISFS) Support Services",
    serviceType: "SISFS Funding",
    description:
      "Structured support for eligible startups seeking assistance under the Startup India Seed Fund Scheme, including eligibility assessment, funding requirements, documentation, startup readiness, and application preparation.",
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
        <SISFS />
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