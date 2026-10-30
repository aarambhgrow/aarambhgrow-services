import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import ClientLayout from "./ClientLayout";
import { DIWALI } from "./data/diwali";
import { diwaliHeadScript } from "./lib/diwali";

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
    siteName: "AarambhGrow",
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
    // suppressHydrationWarning: the Diwali head script adds attributes to <html> before React loads.
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      {DIWALI.enabled && (
        <head>
          <script dangerouslySetInnerHTML={{ __html: diwaliHeadScript() }} />
        </head>
      )}
      <body suppressHydrationWarning className="min-h-full flex flex-col">
        <ClientLayout>{children}</ClientLayout>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-EM96DTH4FJ" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-EM96DTH4FJ');
          `}
        </Script>
      </body>
    </html>
  );
}
