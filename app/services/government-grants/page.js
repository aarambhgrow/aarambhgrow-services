import Navbar from "../../components/layout/Navbar";
import Hero from "../../components/services/government-grants/GovernmentGrantsHero";
import GovernmentGrants from "../../components/services/government-grants/GovernmentGrants";
import CTASection from "../../components/layout/CTA";
import Footer from "../../components/layout/Footer";

export const metadata = {
  title: "Government Grants Support Services – AarambhGrow",
  description:
    "Get structured support for government grants with AarambhGrow. Understand suitable schemes, eligibility, documentation, funding requirements, and application readiness for your business.",
};

export default function GovernmentGrantsPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Government Grants Support Services",
    serviceType: "Government Grants",
    description:
      "Structured support for identifying suitable government grants, understanding eligibility, preparing documentation, and improving application readiness for businesses.",
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
        <GovernmentGrants />
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
