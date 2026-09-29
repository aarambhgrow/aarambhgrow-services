/* =========================================================
   SEO CONFIG

   Single source for canonical URLs, Open Graph defaults and
   per-service metadata, FAQs and JSON-LD.
========================================================= */

export const SITE_URL = "https://aarambhgrow.co.in";
export const SITE_NAME = "AarambhGrow";
export const ORGANIZATION_ID = `${SITE_URL}/#organization`;

// Swap for dedicated 1200x630 images once they are added to /public/images
export const DEFAULT_OG_IMAGE = `${SITE_URL}/images/og-image.jpg`;
export const FUNDING_OG_IMAGE = `${SITE_URL}/images/og-image.jpg`;

export const BUSINESS_ADDRESS = {
  "@type": "PostalAddress",
  streetAddress: "813, Silver Radiance 4, Ovnaj, Bhavik Publication, SG Highway",
  addressLocality: "Ahmedabad",
  addressRegion: "Gujarat",
  postalCode: "380060",
  addressCountry: "IN",
};

const APPROVAL_FAQ = {
  question: "Does AarambhGrow guarantee funding approval?",
  answer:
    "No. AarambhGrow provides assessment, documentation and application-readiness support. Final sanction, selection, approval or disbursement is determined by the relevant authority, institution, lender, incubator or scheme administrator.",
};

export const FUNDING_SERVICES = [
  {
    slug: "startup-seed-fund",
    name: "Startup Seed Fund",
    linkLabel: "Startup Seed Fund Support",
    group: "startup",
    title: "Startup Seed Fund Support for Early-Stage Startups | AarambhGrow",
    description:
      "Startup seed funding support for early-stage businesses in India, including funding assessment, business planning, documentation, pitch readiness and application preparation.",
    faqs: [
      {
        question: "What is startup seed funding?",
        answer:
          "Startup seed funding is early-stage capital used to help a startup validate an idea, develop a product or prototype, test the market and prepare for growth. The exact funding structure depends on the investor, incubator, program or scheme.",
      },
      {
        question: "Who should consider seed funding support?",
        answer:
          "Seed funding support may suit early-stage startups that have a defined problem, solution, founding team and credible plan for product development, validation, customer acquisition or market entry.",
      },
    ],
  },
  {
    slug: "sisfs",
    name: "Startup India Seed Fund Scheme (SISFS)",
    linkLabel: "Startup India Seed Fund Scheme (SISFS)",
    group: "startup",
    title: "Startup India Seed Fund Scheme (SISFS) Support | AarambhGrow",
    description:
      "SISFS application-readiness support for eligible startups, including eligibility review, proof-of-concept information, prototype planning, market validation and funding documentation.",
    faqs: [
      {
        question: "What is SISFS?",
        answer:
          "The Startup India Seed Fund Scheme is designed to support eligible early-stage startups for activities such as proof of concept, prototype development, product trials, market entry and commercialization, subject to current official scheme rules.",
      },
      {
        question: "Does AarambhGrow guarantee SISFS selection?",
        answer:
          "No. AarambhGrow can assist with readiness, documentation and application preparation. Selection and funding decisions are made by the relevant incubator, committee or scheme authority.",
      },
    ],
  },
  {
    slug: "seed-funding-access",
    name: "Seed Funding Access",
    linkLabel: "Seed Funding Access",
    group: "startup",
    title: "Seed Funding Access & Investor Readiness Support | AarambhGrow",
    description:
      "Seed funding access and investor-readiness support for startups, including funding strategy, pitch preparation, business documentation and opportunity research.",
    faqs: [
      {
        question: "What does investor-readiness support include?",
        answer:
          "It can include funding requirement assessment, business-model presentation, financial information, pitch-deck inputs, due-diligence preparation and identification of relevant seed-stage opportunities.",
      },
      {
        question: "Is investor funding guaranteed?",
        answer:
          "No. Investment decisions depend on the startup, team, market, traction, terms and investor assessment. Advisory and documentation support cannot guarantee investment.",
      },
    ],
  },
  {
    slug: "government-grants",
    name: "Government Grants",
    linkLabel: "Government Grants & Subsidies",
    group: "grants",
    title: "Government Grants & Subsidy Support for Businesses | AarambhGrow",
    description:
      "Government grant and subsidy support for startups and MSMEs, including scheme identification, eligibility review, project documentation and application preparation.",
    faqs: [
      {
        question: "How do you identify a relevant government grant?",
        answer:
          "A suitable scheme should be matched against the applicant's entity type, business activity, location, project, investment, eligibility conditions and current official guidelines.",
      },
      {
        question: "Does eligibility guarantee a grant?",
        answer:
          "No. Eligibility does not guarantee sanction or disbursement. Approval depends on the applicable scheme rules, authority review, documentation, budget availability and other conditions.",
      },
    ],
  },
  {
    slug: "cgtmse",
    name: "CGTMSE Loan Support",
    linkLabel: "CGTMSE Loan Support",
    group: "finance",
    title: "CGTMSE Loan & Credit Guarantee Support for MSMEs | AarambhGrow",
    description:
      "CGTMSE-linked MSME finance preparation with funding assessment, project reports, financial documentation, business information and loan application readiness.",
    faqs: [
      {
        question: "What is CGTMSE?",
        answer:
          "CGTMSE provides credit guarantee support to eligible lending institutions for qualifying credit facilities extended to eligible micro and small enterprises. Coverage depends on current scheme rules and lender assessment.",
      },
      {
        question: "Does CGTMSE guarantee that my loan will be approved?",
        answer:
          "No. The lender evaluates the borrower, business, financial position, credit requirement and applicable scheme conditions. CGTMSE-related eligibility does not itself guarantee loan sanction.",
      },
    ],
  },
  {
    slug: "mudra-loan",
    name: "Mudra Loan",
    linkLabel: "Mudra Loan Support",
    group: "finance",
    title: "Mudra Loan Support for Small Businesses | AarambhGrow",
    description:
      "Mudra loan preparation support for eligible micro businesses and entrepreneurs, including funding assessment, project planning, documentation and application readiness.",
    faqs: [
      {
        question: "What is a Mudra loan?",
        answer:
          "Mudra-linked finance supports eligible micro and small business activities under the applicable lending framework. Product category, amount, eligibility and terms depend on current rules and lender assessment.",
      },
      {
        question: "What can AarambhGrow help prepare?",
        answer:
          "Support can include funding requirement assessment, project and business information, document organization and application readiness. Final sanction and terms are decided by the lender.",
      },
    ],
  },
  {
    slug: "pmegp-loan",
    name: "PMEGP Loan",
    linkLabel: "PMEGP Loan Support",
    group: "finance",
    title: "PMEGP Loan & Project Funding Support | AarambhGrow",
    description:
      "PMEGP loan and project funding support for eligible entrepreneurs with eligibility assessment, project report preparation, documentation and application readiness.",
    faqs: [
      {
        question: "What is PMEGP?",
        answer:
          "PMEGP is a government-linked credit support program for eligible new micro-enterprise projects, subject to current program guidelines, applicant conditions, project criteria and institutional approval.",
      },
      {
        question: "Is PMEGP subsidy guaranteed?",
        answer:
          "No. Eligibility, bank appraisal, authority review and current program requirements can affect approval and subsidy treatment. Application support cannot guarantee sanction.",
      },
    ],
  },
  {
    slug: "cc-term-loans",
    name: "CC / Term Loans",
    linkLabel: "CC & Term Loan Support",
    group: "finance",
    title: "Cash Credit & Term Loan Support for Businesses | AarambhGrow",
    description:
      "Business finance preparation for cash credit, working capital and term loans, including funding assessment, projections, financial documentation and application readiness.",
    faqs: [
      {
        question: "What is the difference between cash credit and a term loan?",
        answer:
          "Cash credit is generally used for eligible working-capital requirements within a sanctioned limit, while a term loan is generally structured for a defined financing purpose and repayment period. Exact terms vary by lender.",
      },
      {
        question: "What does finance-readiness support include?",
        answer:
          "It can include funding assessment, project information, financial projections, business documents and application preparation. Credit approval, pricing, security and terms are decided by the lender.",
      },
    ],
  },
  {
    slug: "naiff",
    name: "NAIFF Funding",
    linkLabel: "NAIFF Funding Support",
    group: "grants",
    title: "NAIFF Funding Support for Agriculture Infrastructure | AarambhGrow",
    description:
      "NAIFF-related funding support for eligible agriculture infrastructure projects with eligibility review, project planning, financial documentation and application preparation.",
    faqs: [
      {
        question: "Who may consider NAIFF-related funding?",
        answer:
          "Eligible agriculture and infrastructure businesses or projects may review the applicable financing framework. Exact eligible activities and benefits should be checked against current official guidelines.",
      },
      {
        question: "What preparation may be required?",
        answer:
          "Depending on the program and lender, preparation can include project details, cost estimates, business information, financial projections, approvals and supporting documents.",
      },
    ],
  },
  {
    slug: "sss",
    name: "SSS Funding",
    linkLabel: "SSS Funding Support",
    group: "grants",
    title: "SSS Funding & Scheme Support Services | AarambhGrow",
    description:
      "SSS funding and scheme-readiness support for eligible businesses, including eligibility review, project information, financial documentation and application preparation.",
    faqs: [
      {
        question: "How is SSS eligibility checked?",
        answer:
          "Eligibility should be checked against the exact current scheme or funding program, including applicant type, business activity, project, financial conditions and required documentation.",
      },
      {
        question: "Can AarambhGrow guarantee sanction?",
        answer:
          "No. AarambhGrow can assist with assessment and application readiness, but sanction, benefits and disbursement are controlled by the relevant authority, institution or lender.",
      },
    ],
  },
  {
    slug: "textile-fund",
    name: "Textile Fund",
    linkLabel: "Textile Fund Support",
    group: "grants",
    title: "Textile Funding & Finance Support Services | AarambhGrow",
    description:
      "Funding guidance for eligible textile businesses and projects, including finance assessment, project reports, documentation and scheme or loan application readiness.",
    faqs: [
      {
        question: "What textile funding requirements can be assessed?",
        answer:
          "Funding needs can include eligible machinery, expansion, working capital, modernization or other business requirements. The suitable facility depends on the project and current lender or government program rules.",
      },
      {
        question: "What documents may be required?",
        answer:
          "Requirements can include business KYC, entity records, project details, quotations, financial statements, projections, bank information and program-specific documents.",
      },
    ],
  },
  {
    slug: "pmfme",
    name: "PMFME",
    linkLabel: "PMFME Food Processing Support",
    group: "grants",
    title: "PMFME Loan & Food Processing Support Services | AarambhGrow",
    description:
      "PMFME support for eligible micro food-processing enterprises with scheme readiness, project report preparation, financial documentation and application support.",
    faqs: [
      {
        question: "What is PMFME?",
        answer:
          "PMFME is a government program relating to formalization and support of eligible micro food-processing enterprises. Current eligibility, assistance and application requirements should be checked against official program guidelines.",
      },
      {
        question: "Does application guarantee PMFME approval?",
        answer:
          "No. Eligibility, documentation, project appraisal, bank or authority review and current program conditions can affect the outcome.",
      },
    ],
  },
].map((service) => ({ ...service, faqs: [...service.faqs, APPROVAL_FAQ] }));

export function getFundingService(slug) {
  const service = FUNDING_SERVICES.find((s) => s.slug === slug);
  if (!service) throw new Error(`Unknown funding service: ${slug}`);
  return service;
}

export const serviceUrl = (slug) => `${SITE_URL}/services/${slug}`;

/* ---------- Metadata builders ---------- */

export function pageMetadata({ title, description, path, ogTitle, ogDescription, twitterTitle, twitterDescription, image = DEFAULT_OG_IMAGE, robots }) {
  const url = `${SITE_URL}${path}`;

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    ...(robots && { robots }),
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      locale: "en_IN",
      title: ogTitle || title,
      description: ogDescription || description,
      url,
      images: [{ url: image, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: twitterTitle || ogTitle || title,
      description: twitterDescription || ogDescription || description,
      images: [image],
    },
  };
}

export const FULL_ROBOTS = {
  index: true,
  follow: true,
  "max-snippet": -1,
  "max-image-preview": "large",
  "max-video-preview": -1,
};

export const STANDARD_ROBOTS = {
  index: true,
  follow: true,
  "max-image-preview": "large",
};

export function serviceMetadata(slug) {
  const { title, description } = getFundingService(slug);

  return pageMetadata({
    title,
    description,
    path: `/services/${slug}`,
    image: FUNDING_OG_IMAGE,
    robots: FULL_ROBOTS,
  });
}

/* ---------- JSON-LD builders ---------- */

export function breadcrumbList(items, id) {
  return {
    "@type": "BreadcrumbList",
    ...(id && { "@id": id }),
    itemListElement: items.map(([name, item], index) => ({
      "@type": "ListItem",
      position: index + 1,
      name,
      item,
    })),
  };
}

export function serviceJsonLd(slug) {
  const { name, description, faqs } = getFundingService(slug);
  const url = serviceUrl(slug);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name,
        description,
        url,
        provider: { "@id": ORGANIZATION_ID },
        areaServed: { "@type": "Country", name: "India" },
      },
      breadcrumbList(
        [
          ["Home", `${SITE_URL}/`],
          ["Funding Services", `${SITE_URL}/services`],
          [name, url],
        ],
        `${url}#breadcrumb`,
      ),
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: faqs.map(({ question, answer }) => ({
          "@type": "Question",
          name: question,
          acceptedAnswer: { "@type": "Answer", text: answer },
        })),
      },
    ],
  };
}
