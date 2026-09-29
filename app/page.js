import Preloader from "./components/layout/Preloader";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/home/Hero";
import AboutSection from "./components/home/About";
import HowWeHelp from "./components/home/HowWeHelp";
import Services from "./components/home/Services";
import WhyChooseUs from "./components/home/WhyChooseUs";
import ProcessSection from "./components/home/Process";
import BusinessCategories from "./components/home/BusinessCategories";
import CTASection from "./components/layout/CTA";
import Footer from "./components/layout/Footer";
import JsonLd from "./components/seo/JsonLd";
import { BUSINESS_ADDRESS, FULL_ROBOTS, ORGANIZATION_ID, SITE_URL, pageMetadata } from "./lib/seo";

export const metadata = pageMetadata({
  title: "Business Registration, Compliance & Funding Consultants India | AarambhGrow",
  description:
    "AarambhGrow supports startups and MSMEs across India with business registration, compliance, government schemes, funding guidance, certifications and growth advisory.",
  path: "/",
  robots: FULL_ROBOTS,
  ogDescription: "Integrated support for business setup, compliance, government schemes, funding, certifications and growth.",
  twitterTitle: "Business Registration, Compliance & Funding | AarambhGrow",
  twitterDescription: "Business setup, compliance, funding, government scheme and growth advisory support for startups and MSMEs.",
});

const homeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": ORGANIZATION_ID,
      name: "AarambhGrow Services Private Limited",
      alternateName: "AarambhGrow",
      url: `${SITE_URL}/`,
      logo: `${SITE_URL}/images/white-logo.png`,
      email: "info@aarambhgrow.co.in",
      telephone: "+91-9998715799",
      description:
        "Business consultancy supporting startups and MSMEs with registration, compliance, funding guidance, government schemes, certifications and business growth services.",
      address: BUSINESS_ADDRESS,
      areaServed: { "@type": "Country", name: "India" },
      sameAs: [
        "https://www.facebook.com/aarambhgrow",
        "https://www.instagram.com/aarambhgrow",
        "https://www.linkedin.com/company/aarambhgrow-group-of-companies",
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#business`,
      name: "AarambhGrow",
      url: `${SITE_URL}/`,
      image: `${SITE_URL}/images/white-logo.png`,
      telephone: "+91-9998715799",
      email: "info@aarambhgrow.co.in",
      address: BUSINESS_ADDRESS,
      geo: {
        "@type": "GeoCoordinates",
        latitude: 23.0929,
        longitude: 72.5247,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "09:00",
          closes: "19:00",
        },
      ],
      areaServed: { "@type": "Country", name: "India" },
      parentOrganization: { "@id": ORGANIZATION_ID },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: "AarambhGrow",
      publisher: { "@id": ORGANIZATION_ID },
      inLanguage: "en-IN",
    },
  ],
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans antialiased">
      <JsonLd data={homeSchema} />

      <Preloader />
      <Navbar />
      <Hero />
      <AboutSection />
      <HowWeHelp />
      <Services />
      <WhyChooseUs />
      <ProcessSection />
      <BusinessCategories />
      <CTASection />
      <Footer />
    </main>
  );
}
