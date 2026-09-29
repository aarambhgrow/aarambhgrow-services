import Navbar from "../../components/layout/Navbar";
import Hero from "../../components/services/pmfme/PMFMEHero";
import PMFME from "../../components/services/pmfme/PMFME";
import CTASection from "../../components/layout/CTA";
import Footer from "../../components/layout/Footer";
import JsonLd from "../../components/seo/JsonLd";
import ServiceFaq from "../../components/seo/ServiceFaq";
import RelatedServices from "../../components/seo/RelatedServices";
import { getFundingService, serviceJsonLd, serviceMetadata } from "../../lib/seo";

const SLUG = "pmfme";

export const metadata = serviceMetadata(SLUG);

export default function PMFMEPage() {
  return (
    <>
      <JsonLd data={serviceJsonLd(SLUG)} />
      <Navbar />

      <main className="min-h-screen">
        <Hero />
        <PMFME />
        <ServiceFaq slug={SLUG} faqs={getFundingService(SLUG).faqs} />
        <RelatedServices currentSlug={SLUG} />
        <CTASection />
      </main>

      <Footer />
    </>
  );
}
