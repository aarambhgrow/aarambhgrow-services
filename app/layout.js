import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientLayout from "./ClientLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata = {
  metadataBase: new URL("https://aarambhgrow.co.in"),

  title: {
    default: "AarambhGrow – Business Funding, Loans & MSME Consultants",
    template: "%s | AarambhGrow",
  },

  description:
    "AarambhGrow provides business funding, MSME loans, government schemes, startup funding, GST, company registration, compliance and business support services across India.",

  applicationName: "AarambhGrow",

  authors: [
    {
      name: "AarambhGrow Services Private Limited",
    },
  ],

  creator: "AarambhGrow Services Private Limited",
  publisher: "AarambhGrow Services Private Limited",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/images/favicon.ico",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "AarambhGrow Services Private Limited",
    title: "AarambhGrow – Business Funding, Loans & MSME Consultants",
    description:
      "End-to-end business support for startups and MSMEs — government funding, business loans, startup funding, GST, registration, compliance and more.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AarambhGrow – Business Funding and MSME Consultants",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "AarambhGrow – Business Funding, Loans & MSME Consultants",
    description: "Business funding, government schemes, loans, startup support and MSME services across India.",
    images: ["/images/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body suppressHydrationWarning className="min-h-full flex flex-col">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
