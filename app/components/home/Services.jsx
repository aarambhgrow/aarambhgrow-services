  "use client";

  import { motion } from "framer-motion";
  import Link from "next/link";
  import {
    ArrowUpRight,
    Rocket,
    Landmark,
    HandCoins,
    FileCheck2,
    ShieldCheck,
    WalletCards,
    Factory,
    CreditCard,
    Wheat,
    BriefcaseBusiness,
    Shirt,
    Utensils,
    Headphones,
  } from "lucide-react";

  const SERVICES = [
    {
      number: "01",
      label: "Startup Seed Fund",
      category: "Startup Funding",
      href: "/services/startup-seed-fund",
      icon: Rocket,
      description:
        "Startup seed funding support for eligible businesses seeking early-stage capital to develop products, validate ideas and accelerate business growth.",
    },
    {
      number: "02",
      label: "SISFS",
      category: "Government Funding",
      href: "/services/sisfs",
      icon: Landmark,
      description:
        "Support for eligible startups exploring the Startup India Seed Fund Scheme, including funding guidance, eligibility assessment and application preparation.",
    },
    {
      number: "03",
      label: "Seed Funding Access",
      category: "Investment Support",
      href: "/services/seed-funding-access",
      icon: HandCoins,
      description:
        "Seed funding assistance to help startups identify suitable investors, incubators and early-stage funding opportunities based on their business requirements.",
    },
    {
      number: "04",
      label: "Government Grants",
      category: "Grants & Subsidies",
      href: "/services/government-grants",
      icon: FileCheck2,
      description:
        "Government grant and subsidy assistance covering scheme identification, eligibility evaluation, documentation and application support for eligible businesses.",
    },
    {
      number: "05",
      label: "CGTMSE",
      category: "MSME Finance",
      href: "/services/cgtmse",
      icon: ShieldCheck,
      description:
        "CGTMSE loan assistance for eligible micro, small and medium enterprises seeking credit facilities supported by applicable credit guarantee mechanisms.",
    },
    {
      number: "06",
      label: "Mudra Loan",
      category: "Business Loans",
      href: "/services/mudra-loan",
      icon: WalletCards,
      description:
        "MUDRA loan assistance for micro and small businesses looking for suitable business finance under applicable Shishu, Kishor and Tarun categories.",
    },
    {
      number: "07",
      label: "PMEGP Loan",
      category: "Enterprise Finance",
      href: "/services/pmegp-loan",
      icon: Factory,
      description:
        "PMEGP loan and project preparation assistance for eligible entrepreneurs planning to establish new micro enterprises and business ventures.",
    },
    {
      number: "08",
      label: "CC / Term Loans",
      category: "Business Finance",
      href: "/services/cc-term-loans",
      icon: CreditCard,
      description:
        "Cash credit, working capital and term loan assistance for businesses seeking finance to manage operations, expansion, equipment and long-term requirements.",
    },
    {
      number: "09",
      label: "NAIFF",
      category: "Agri Finance",
      href: "/services/naiff",
      icon: Wheat,
      description:
        "Agriculture and allied business finance assistance for eligible projects seeking suitable funding, documentation and application support.",
    },
    {
      number: "10",
      label: "SSS",
      category: "Scheme Support",
      href: "/services/sss",
      icon: BriefcaseBusiness,
      description:
        "Business scheme assistance with eligibility assessment, documentation and application guidance for suitable financial support programs.",
    },
    {
      number: "11",
      label: "Textile Fund",
      category: "Textile Finance",
      href: "/services/textile-fund",
      icon: Shirt,
      description:
        "Textile funding and finance assistance for eligible manufacturers, processing units and textile businesses seeking suitable growth and investment support.",
    },
    {
      number: "12",
      label: "PMFME",
      category: "Food Processing",
      href: "/services/pmfme",
      icon: Utensils,
      description:
        "PMFME assistance for eligible micro food processing enterprises covering project preparation, documentation and application support.",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.08,
      },
    },
  };

  const fadeUpVariants = {
    hidden: {
      opacity: 0,
      y: 28,
      filter: "blur(7px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 24,
      filter: "blur(6px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  function ServicesStructuredData() {
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Business Funding and Financial Services",
      description:
        "Startup funding, government grants, government schemes, MSME finance and business loan assistance for eligible businesses in India.",
      itemListElement: SERVICES.map((service, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Service",
          name: service.label,
          description: service.description,
          url: `https://www.aarambhgrow.com${service.href}`,
          serviceType: service.category,
          areaServed: {
            "@type": "Country",
            name: "India",
          },
          provider: {
            "@type": "Organization",
            name: "AarambhGrow",
            url: "https://www.aarambhgrow.com",
          },
        },
      })),
    };

    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
    );
  }

  function AnimatedHeading() {
    const lines = [
      {
        text: "Funding solutions",
        accent: false,
      },
      {
        text: "built around your business.",
        accent: true,
      },
    ];

    return (
      <motion.h2
        id="services-heading"
        variants={containerVariants}
        className="text-3xl font-black leading-[1.05] tracking-[-0.045em] text-[#0f2a4a] sm:text-4xl md:text-5xl"
      >
        {lines.map((line) => (
          <motion.span key={line.text} variants={fadeUpVariants} className={`block ${line.accent ? "text-[#f26522]" : ""}`}>
            {line.text}
          </motion.span>
        ))}
      </motion.h2>
    );
  }

  function ServiceCard({ service }) {
    const Icon = service.icon;

    return (
      <motion.li variants={cardVariants} className="group list-none">
        <Link
          href={service.href}
          aria-label={`Learn more about ${service.label}`}
          className="relative flex min-h-[190px] flex-col overflow-hidden rounded-md border border-slate-200 bg-white p-5 transition-colors duration-300 ease-out hover:border-[#f26522]/30 sm:min-h-[195px]"
        >
          <div className="relative z-10 flex h-full flex-col">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] font-bold tracking-[0.18em] text-[#f26522]">{service.number}</span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-[#0f2a4a] transition-all duration-300 group-hover:rotate-45 group-hover:border-[#f26522]/30 group-hover:bg-[#fff5f0]">
                <ArrowUpRight size={15} />
              </span>
            </div>

            {/* Icon */}
            <div className="mt-4 flex h-9 w-9 items-center justify-center rounded-md border border-[#f26522]/15 bg-[#fff7f3] text-[#f26522] transition-transform duration-300 group-hover:scale-105">
              <Icon size={18} strokeWidth={1.8} />
            </div>

            {/* Content */}
            <div className="mt-3">
              <p className="mb-1.5 text-[9px] font-bold uppercase tracking-[0.15em] text-[#157327]">{service.category}</p>
              <h3 className="text-[16px] font-black leading-tight tracking-[-0.02em] text-[#0f2a4a]">{service.label}</h3>
            </div>

            {/* Bottom */}
            <div className="mt-auto pt-4">
              <div className="relative h-px w-full overflow-hidden bg-slate-100">
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-0 h-full w-[22%] bg-[#f26522] transition-[width] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-full"
                />
              </div>

              <div className="mt-2 flex items-center justify-between">
                <span className="text-[10px] font-semibold text-slate-500 transition-colors duration-300 group-hover:text-[#0f2a4a]">
                  Explore service
                </span>
              </div>
            </div>
          </div>
        </Link>
      </motion.li>
    );
  }

  function ConsultationCTA() {
    return (
      <motion.div
        variants={fadeUpVariants}
        className="mt-8 overflow-hidden rounded-md border border-[#f26522]/15 bg-gradient-to-r from-[#fff2eb] via-[#fff8f5] to-white"
      >
        <div className="flex flex-col gap-5 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <div className="flex items-center gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-[#f26522]/20 bg-white text-[#f26522] sm:h-12 sm:w-12">
              <Headphones size={21} strokeWidth={1.8} />
            </div>

            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#f26522]">Funding Guidance</p>

              <h3 className="mt-1 text-base font-black tracking-[-0.02em] text-[#0f2a4a] sm:text-lg">
                Need help choosing the right funding option?
              </h3>

              <p className="mt-1 max-w-xl text-xs leading-5 text-slate-500">
                Discuss your business funding requirements and explore suitable financing, grants and government scheme opportunities.
              </p>
            </div>
          </div>

          <Link
            href="/contact"
            className="group inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-md border border-[#f26522] bg-[#f26522] px-5 py-3 text-xs font-bold text-white transition-all duration-300 sm:w-auto"
          >
            Get Free Consultation
            <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </motion.div>
    );
  }

  export default function ServicesSection() {
    return (
      <>
        <ServicesStructuredData />

        <section
          aria-labelledby="services-heading"
          className="relative w-full overflow-hidden bg-[#fafafa] py-12 font-sans text-[#0f172a] sm:py-16 lg:py-20"
        >
          <div aria-hidden="true" className="pointer-events-none absolute right-4 top-10 hidden opacity-30 sm:block">
            <div className="grid grid-cols-6 gap-2">
              {Array.from({ length: 24 }).map((_, index) => (
                <span key={index} className="h-1.5 w-1.5 rounded-full bg-[#f26522]" />
              ))}
            </div>
          </div>
          <div aria-hidden="true" className="pointer-events-none absolute left-4 top-10 hidden opacity-30 sm:block">
            <div className="grid grid-cols-6 gap-2">
              {Array.from({ length: 24 }).map((_, index) => (
                <span key={index} className="h-1.5 w-1.5 rounded-full bg-[#f26522]" />
              ))}
            </div>
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.12,
              }}
              variants={containerVariants}
            >
              <div className="mx-auto mb-8 max-w-4xl text-center sm:mb-10 lg:mb-12">
                <motion.div variants={fadeUpVariants}>
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#f26522]/20 bg-[#fff5f0] px-4 py-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#f26522]" />
                    <span className="text-[10px] font-black uppercase tracking-[0.18em] text-[#f26522]">Business Funding Services</span>
                    <span className="h-1.5 w-1.5 rounded-full bg-[#157327]" />
                  </div>
                </motion.div>

                <AnimatedHeading />

                <motion.p variants={fadeUpVariants} className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-500 sm:text-[15px]">
                  Explore startup funding, government grants, MSME finance, business loans and industry-specific funding solutions for
                  eligible businesses across India. Get structured guidance for funding eligibility, documentation, project preparation and
                  application support.
                </motion.p>
              </div>

              <motion.div
                variants={fadeUpVariants}
                className="mb-7 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 border-y border-slate-200 py-3 sm:mb-8"
              >
                <span className="mr-1 text-[9px] font-bold uppercase tracking-[0.17em] text-slate-400">Funding solutions</span>

                {["Startup Funding", "Government Grants", "MSME Loans", "Business Finance", "Working Capital", "Industry Funding"].map(
                  (item, index) => (
                    <span key={item} className="flex items-center gap-2 text-[10px] font-semibold text-[#0f2a4a]">
                      {index !== 0 && <span className="text-slate-300">•</span>}
                      {item}
                    </span>
                  ),
                )}
              </motion.div>

              <motion.ul
                variants={containerVariants}
                className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4"
                role="list"
                aria-label="Business funding and financial services"
              >
                {SERVICES.map((service) => (
                  <ServiceCard key={service.href} service={service} />
                ))}
              </motion.ul>
              <ConsultationCTA />
            </motion.div>
          </div>
        </section>
      </>
    );
  }
