import Preloader from "./components/layout/Preloader";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/home/Hero";
import AboutSection from "./components/home/About";
import Services from "./components/home/Services";
import WhyChooseUs from "./components/home/WhyChooseUs";
import ProcessSection from "./components/home/Process";
import BusinessCategories from "./components/home/BusinessCategories";
import CTASection from "./components/layout/CTA";
import Footer from "./components/layout/Footer";
import JsonLd from "./components/seo/JsonLd";

export const metadata = {
  title: "AarambhGrow – Business Funding, Loans & MSME Consultants",
  description:
    "Business funding, government schemes, MSME loans, startup funding, GST, company registration, compliance and business support services for startups and MSMEs across India.",
  alternates: {
    canonical: "https://aarambhgrow.co.in/",
  },
  openGraph: {
    title: "AarambhGrow – Business Funding, Loans & MSME Consultants | India",
    description:
      "End-to-end business support for startups and MSMEs — government funding, business loans, startup funding, GST, registration and compliance.",
    url: "https://aarambhgrow.co.in/",
    type: "website",
    images: [
      {
        url: "https://aarambhgrow.co.in/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AarambhGrow – Business Funding and MSME Consultants",
      },
    ],
  },
};

export default function Home() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "AarambhGrow Group of Companies",
    alternateName: "AarambhGrow",
    url: "https://aarambhgrow.co.in",
    logo: "https://aarambhgrow.co.in/images/white-logo.png",
    description:
      "AarambhGrow provides business funding, government scheme support, MSME loans, startup funding, company registration, GST, compliance and business support services.",
    foundingDate: "2020",
    address: {
      "@type": "PostalAddress",
      streetAddress: "813, Silver Rediance-4, Gota, Jagatpur Road, Gota SG Highway",
      addressLocality: "Ahmedabad",
      addressRegion: "Gujarat",
      postalCode: "382470",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-9998715799",
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi", "Gujarati"],
    },
    sameAs: [
      "https://www.facebook.com/aarambhgrow",
      "https://www.instagram.com/aarambhgrow",
      "https://www.linkedin.com/company/aarambhgrow-group-of-companies",
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "AarambhGrow Group of Companies",
    image: "https://aarambhgrow.co.in/images/white-logo.png",
    url: "https://aarambhgrow.co.in",
    telephone: "+91-9998715799",
    email: "info@aarambhgrow.co.in",
    priceRange: "₹₹",
    description:
      "Business funding, government schemes, MSME loans, startup funding, company registration, GST, compliance and business support services for startups and MSMEs.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "813, Silver Rediance-4, Gota, Jagatpur Road, Gota SG Highway",
      addressLocality: "Ahmedabad",
      addressRegion: "Gujarat",
      postalCode: "382470",
      addressCountry: "IN",
    },
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
    areaServed: ["Ahmedabad", "Surat", "Vadodara"],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "AarambhGrow Group of Companies",
    url: "https://aarambhgrow.co.in",
    description: "Business funding, loans, government schemes and MSME support services in India.",
  };

  return (
    <main className="min-h-screen bg-white font-sans antialiased">
      <JsonLd data={organizationSchema} />
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={websiteSchema} />

      <Preloader />
      <Navbar />
      <Hero />
      <AboutSection />
      <Services />
      <WhyChooseUs />
      <ProcessSection />
      <BusinessCategories />
      <CTASection />
      <Footer />
    </main>
  );
}
