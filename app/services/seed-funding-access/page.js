import Navbar from "../../components/layout/Navbar";
import Hero from "../../components/services/seed-funding-access/SeedFundingAccessHero";
import SeedFundingAccess from "../../components/services/seed-funding-access/SeedFundingAccess";
import CTASection from "../../components/layout/CTA";
import Footer from "../../components/layout/Footer";
import JsonLd from "../../components/seo/JsonLd";
import ServiceFaq from "../../components/seo/ServiceFaq";
import RelatedServices from "../../components/seo/RelatedServices";
import { getFundingService, serviceJsonLd, serviceMetadata } from "../../lib/seo";

const SLUG = "seed-funding-access";

export const metadata = serviceMetadata(SLUG);

export default function SeedFundingAccessPage() {
  return (
    <>
      <JsonLd data={serviceJsonLd(SLUG)} />
      <Navbar />

      <main className="min-h-screen">
        <Hero />
        <SeedFundingAccess />
        <ServiceFaq slug={SLUG} faqs={getFundingService(SLUG).faqs} />
        <RelatedServices currentSlug={SLUG} />
        <CTASection />
      </main>

      <Footer />
    </>
  );
}
