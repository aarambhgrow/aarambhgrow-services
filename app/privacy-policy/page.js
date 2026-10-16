import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import LegalPage from "../components/legal/LegalPage";
import { privacyPolicy } from "../data/legal";
import { pageMetadata, STANDARD_ROBOTS } from "../lib/seo";

export const metadata = pageMetadata({
  title: "Privacy Policy | AarambhGrow",
  description:
    "Read the AarambhGrow Privacy Policy to learn how we collect, use, store and safeguard the information you share through our website and services.",
  path: "/privacy-policy",
  robots: STANDARD_ROBOTS,
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <LegalPage {...privacyPolicy} />
      </main>
      <Footer />
    </>
  );
}
