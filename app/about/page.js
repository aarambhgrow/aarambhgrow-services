import Navbar from "../components/layout/Navbar";
import Hero from "../components/about/Hero";
import About from "../components/about/About";
import ValueOutcomes from "../components/about/ValueOutcomes";
import CorePillars from "../components/about/CorePillars";
import WhyTrustUs from "../components/about/WhyTrustUs";
import FAQ from "../components/layout/FAQ";
import CTASection from "../components/layout/CTA";
import Footer from "../components/layout/Footer";
import JsonLd from "../components/seo/JsonLd";
import { SITE_URL, breadcrumbList, pageMetadata, STANDARD_ROBOTS } from "../lib/seo";

export const metadata = pageMetadata({
  title: "About AarambhGrow | Business Consultants in Ahmedabad & India",
  description:
    "Learn about AarambhGrow Services Private Limited, an Ahmedabad-based business consultancy supporting startups and MSMEs with funding, compliance, registrations and growth advisory.",
  path: "/about",
  ogDescription: "Integrated business consulting, funding, compliance and growth support for startups and MSMEs.",
  robots: STANDARD_ROBOTS,
});

const breadcrumbSchema = {
  "@context": "https://schema.org",
  ...breadcrumbList([
    ["Home", `${SITE_URL}/`],
    ["About AarambhGrow", `${SITE_URL}/about`],
  ]),
};

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <Navbar />
      <main className="min-h-screen">
        <Hero />
        <About />
        <ValueOutcomes />
        <CorePillars />
        <WhyTrustUs />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
