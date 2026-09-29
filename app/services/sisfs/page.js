import Navbar from "../../components/layout/Navbar";
import Hero from "../../components/services/sisfs/SISFSHero";
import SISFS from "../../components/services/sisfs/SISFS";
import CTASection from "../../components/layout/CTA";
import Footer from "../../components/layout/Footer";
import JsonLd from "../../components/seo/JsonLd";
import ServiceFaq from "../../components/seo/ServiceFaq";
import RelatedServices from "../../components/seo/RelatedServices";
import { getFundingService, serviceJsonLd, serviceMetadata } from "../../lib/seo";

const SLUG = "sisfs";

export const metadata = serviceMetadata(SLUG);

export default function SISFSPage() {
  return (
    <>
      <JsonLd data={serviceJsonLd(SLUG)} />
      <Navbar />

      <main className="min-h-screen">
        <Hero />
        <SISFS />
        <ServiceFaq slug={SLUG} faqs={getFundingService(SLUG).faqs} />
        <RelatedServices currentSlug={SLUG} />
        <CTASection />
      </main>

      <Footer />
    </>
  );
}
