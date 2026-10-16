import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import LegalPage from "../components/legal/LegalPage";
import { termsOfService } from "../data/legal";
import { pageMetadata, STANDARD_ROBOTS } from "../lib/seo";

export const metadata = pageMetadata({
  title: "Terms & Conditions | AarambhGrow",
  description:
    "Read the AarambhGrow Terms & Conditions covering our services, refunds and cancellations, liability, dispute resolution and governing law.",
  path: "/terms-of-service",
  robots: STANDARD_ROBOTS,
});

export default function TermsOfServicePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <LegalPage {...termsOfService} />
      </main>
      <Footer />
    </>
  );
}
