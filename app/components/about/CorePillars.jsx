"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";
import { Rocket, Landmark, Banknote, ShieldCheck, Factory, FileCheck2, Sparkles, Check, ArrowUpRight } from "lucide-react";

export default function CorePillars() {
  const [activePillar, setActivePillar] = useState(0);

  const pillars = [
    {
      id: "01",
      title: "Startup Funding",
      subtitle: "Seed & Startup Capital",
      shortTitle: "Funding Support for Startups",
      icon: Rocket,
      accent: "#f26522",
      image: "/images/a1.png",
      description:
        "Explore startup funding solutions designed for entrepreneurs and early-stage businesses seeking seed capital, government-backed startup funding, and structured support to prepare for suitable funding opportunities.",
      services: [
        {
          name: "Startup Seed Fund",
          href: "/services/startup-seed-fund",
        },
        {
          name: "SISFS",
          href: "/services/sisfs",
        },
        {
          name: "Seed Funding Access",
          href: "/services/seed-funding-access",
        },
      ],
      support: [
        "Startup funding requirement assessment",
        "Seed funding and scheme guidance",
        "Business and financial documentation",
        "Funding application readiness",
      ],
      primaryCta: "Explore Startup Funding",
      seoText:
        "AarambhGrow provides structured guidance for startups exploring seed funding, Startup Seed Fund opportunities, SISFS, and other applicable startup funding programs.",
    },

    {
      id: "02",
      title: "Government Funding",
      subtitle: "Grants & Government Schemes",
      shortTitle: "Government Funding for Businesses",
      icon: Landmark,
      accent: "#157327",
      image: "/images/a2.png",
      description:
        "Understand suitable government grants, government funding schemes, and eligible business finance programs with structured guidance for documentation, eligibility assessment, and application preparation.",
      services: [
        {
          name: "Government Grants",
          href: "/services/government-grants",
        },
        {
          name: "PMEGP Loan",
          href: "/services/pmegp-loan",
        },
      ],
      support: [
        "Government funding opportunity assessment",
        "Eligibility and requirement guidance",
        "Grant and loan documentation support",
        "Application preparation assistance",
      ],
      primaryCta: "Explore Government Funding",
      seoText:
        "Businesses can explore applicable government grants and schemes such as PMEGP with support focused on eligibility understanding, documentation, and application preparation.",
    },

    {
      id: "03",
      title: "Business Loans",
      subtitle: "MSME & Business Finance",
      shortTitle: "Business Loans & Working Capital",
      icon: Banknote,
      accent: "#f26522",
      image: "/images/a3.png",
      description:
        "Business loan support for entrepreneurs and MSMEs seeking suitable finance for working capital, business expansion, equipment, operations, and other eligible business requirements.",
      services: [
        {
          name: "Mudra Loan",
          href: "/services/mudra-loan",
        },
        {
          name: "CC / Term Loans",
          href: "/services/cc-term-loans",
        },
      ],
      support: [
        "Business finance requirement assessment",
        "Working capital planning support",
        "Loan documentation preparation",
        "Credit application readiness",
      ],
      primaryCta: "Explore Business Loans",
      seoText:
        "AarambhGrow helps eligible entrepreneurs and MSMEs understand business finance requirements, including Mudra Loan and CC or Term Loan opportunities.",
    },

    {
      id: "04",
      title: "Credit Support",
      subtitle: "Credit & Financial Assistance",
      shortTitle: "Structured Credit Support",
      icon: ShieldCheck,
      accent: "#157327",
      image: "/images/a4.png",
      description:
        "Credit support services for businesses looking to understand applicable financing opportunities, organize financial information, and prepare stronger documentation for eligible credit and funding requirements.",
      services: [
        {
          name: "CGTMSE",
          href: "/services/cgtmse",
        },
        {
          name: "NAIFF",
          href: "/services/naiff",
        },
        {
          name: "SSS",
          href: "/services/sss",
        },
      ],
      support: [
        "Credit requirement assessment",
        "Financial documentation support",
        "Funding and credit readiness",
        "Application preparation guidance",
      ],
      primaryCta: "Explore Credit Support",
      seoText:
        "Explore structured credit support covering applicable programs such as CGTMSE, NAIFF, and SSS, subject to eligibility and relevant program requirements.",
    },

    {
      id: "05",
      title: "Sector Funding",
      subtitle: "Industry-Specific Funding",
      shortTitle: "Funding for Specific Industries",
      icon: Factory,
      accent: "#f26522",
      image: "/images/a5.png",
      description:
        "Industry-focused funding assistance for businesses operating in sectors such as textiles and food processing, helping eligible enterprises understand relevant funding requirements and prepare project documentation.",
      services: [
        {
          name: "Textile Fund",
          href: "/services/textile-fund",
        },
        {
          name: "PMFME",
          href: "/services/pmfme",
        },
      ],
      support: [
        "Sector-specific funding assessment",
        "Project and business documentation",
        "Financial requirement preparation",
        "Funding application readiness",
      ],
      primaryCta: "Explore Sector Funding",
      seoText:
        "Businesses in eligible sectors can explore industry-focused funding opportunities such as Textile Fund and PMFME with support for project and financial documentation.",
    },

    {
      id: "06",
      title: "Funding Documentation",
      subtitle: "Application Readiness",
      shortTitle: "Prepare Before You Apply",
      icon: FileCheck2,
      accent: "#157327",
      image: "/images/a6.png",
      description:
        "A structured funding preparation approach covering business information, financial documents, project details, eligibility requirements, and application readiness for suitable funding opportunities.",
      services: [
        {
          name: "Funding Assessment",
          href: "/contact",
        },
        {
          name: "Documentation Support",
          href: "/contact",
        },
        {
          name: "Application Readiness",
          href: "/contact",
        },
      ],
      support: [
        "Business funding requirement review",
        "Documentation checklist preparation",
        "Financial information organization",
        "Application readiness guidance",
      ],
      primaryCta: "Explore Funding Documentation",
      seoText:
        "Proper documentation can help businesses prepare more effectively before approaching suitable funding opportunities, lenders, or applicable government programs.",
    },
  ];

  const currentPillar = pillars[activePillar] || pillars[0];

  return (
    <MotionConfig reducedMotion="user">
      <section
        id="funding-solutions"
        aria-labelledby="funding-solutions-heading"
        className="relative w-full overflow-hidden bg-[#f8fafc] py-10 font-sans text-[#0f2a4a] sm:py-12 lg:py-14"
      >
        {/* Background Decoration */}
        <div aria-hidden="true" className="pointer-events-none absolute -left-32 top-10 h-64 w-64 rounded-full bg-[#f26522]/5 blur-3xl" />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-[#157327]/5 blur-3xl"
        />

        <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* SEO Section Header */}
          <motion.header
            initial={{
              opacity: 0,
              y: 16,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mx-auto mb-7 max-w-4xl text-center sm:mb-8"
          >
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#157327] shadow-sm">
              <Sparkles aria-hidden="true" className="h-3 w-3 text-[#f26522]" />

              <span>Funding Expertise</span>
            </div>

            <h2 id="funding-solutions-heading" className="text-2xl font-black tracking-tight text-[#0f2a4a] sm:text-3xl lg:text-4xl">
              Funding Solutions Built Around <span className="text-[#f26522]">Your Business Growth</span>
            </h2>

            <p className="mx-auto mt-3 max-w-3xl text-xs leading-5 text-slate-600 sm:text-sm sm:leading-6">
              From startup seed funding and government grants to MSME business loans, credit support, and sector-specific funding, explore
              solutions designed around your business requirements.
            </p>
          </motion.header>

          {/* Funding Categories */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.1,
            }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.07,
                },
              },
            }}
            className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6"
          >
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              const isActive = activePillar === idx;

              return (
                <motion.button
                  key={pillar.id}
                  type="button"
                  onClick={() => setActivePillar(idx)}
                  onMouseEnter={() => setActivePillar(idx)}
                  aria-pressed={isActive}
                  aria-label={`View ${pillar.title} funding solutions`}
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: 16,
                      filter: "blur(5px)",
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                      filter: "blur(0px)",
                      transition: {
                        duration: 0.5,
                        ease: [0.22, 1, 0.36, 1],
                      },
                    },
                  }}
                  className={`group relative flex cursor-pointer flex-col overflow-hidden rounded-md border text-left transition-all duration-300 ${
                    isActive
                      ? "-translate-y-1 border-[#0f2a4a] shadow-xl ring-1 ring-[#0f2a4a]/15"
                      : "border-slate-200 bg-white shadow-sm hover:-translate-y-1 hover:border-slate-300 hover:shadow-md"
                  }`}
                >
                  {/* Card Image */}
                  <div className="relative h-24 w-full overflow-hidden bg-slate-900">
                    <img
                      src={pillar.image}
                      alt={`${pillar.title} - ${pillar.subtitle} funding solutions`}
                      loading={idx === 0 ? "eager" : "lazy"}
                      decoding="async"
                      className={`h-full w-full object-cover transition-all duration-500 ${
                        isActive ? "scale-105 opacity-90" : "opacity-60 group-hover:scale-110 group-hover:opacity-80"
                      }`}
                    />

                    <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                    <span className="absolute left-2 top-2 rounded-md bg-black/55 px-1.5 py-0.5 font-mono text-[8px] font-bold tracking-widest text-white backdrop-blur-sm">
                      {pillar.id}
                    </span>

                    {isActive && (
                      <span
                        aria-hidden="true"
                        className="absolute right-2 top-2 h-2 w-2 animate-pulse rounded-full shadow-md"
                        style={{
                          backgroundColor: pillar.accent,
                        }}
                      />
                    )}

                    <div className="absolute bottom-2 left-2 flex min-w-0 items-center gap-1.5 text-white">
                      <Icon aria-hidden="true" className="h-3.5 w-3.5 shrink-0 drop-shadow" />

                      <span className="truncate text-[8px] font-bold uppercase tracking-wide text-slate-200">{pillar.subtitle}</span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div
                    className={`flex min-h-[78px] flex-1 flex-col justify-between p-3 transition-colors duration-300 ${
                      isActive ? "bg-[#0f2a4a] text-white" : "bg-white text-[#0f2a4a]"
                    }`}
                  >
                    <h3 className={`text-[11px] font-black leading-tight ${isActive ? "text-white" : "text-[#0f2a4a]"}`}>{pillar.title}</h3>

                    <p className={`mt-1 line-clamp-2 text-[9px] leading-tight ${isActive ? "text-slate-300" : "text-slate-500"}`}>
                      {pillar.shortTitle}
                    </p>
                  </div>
                </motion.button>
              );
            })}
          </motion.div>

          {/* Active Funding Solution */}
          <AnimatePresence mode="wait">
            <motion.article
              key={activePillar}
              initial={{
                opacity: 0,
                y: 12,
                filter: "blur(4px)",
              }}
              animate={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              exit={{
                opacity: 0,
                y: -10,
                filter: "blur(4px)",
              }}
              transition={{
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="overflow-hidden rounded-md border border-slate-200 bg-white p-5 shadow-sm sm:p-7 lg:p-8"
            >
              <div className="grid grid-cols-1 gap-7 lg:grid-cols-12 lg:gap-8">
                {/* Main Content */}
                <div className="lg:col-span-5">
                  <div className="mb-3 flex flex-wrap items-center gap-2">
                    <span
                      className="rounded-md px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-wider text-white"
                      style={{
                        backgroundColor: currentPillar.accent,
                      }}
                    >
                      {currentPillar.id} / Funding
                    </span>

                    <div className="flex items-center gap-1.5 text-[10px] font-bold text-[#157327]">
                      <ShieldCheck aria-hidden="true" className="h-3.5 w-3.5" />

                      <span>{currentPillar.subtitle}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-black tracking-tight text-[#0f2a4a] sm:text-2xl lg:text-3xl">{currentPillar.shortTitle}</h3>

                  <p className="mt-3 text-xs leading-5 text-slate-600 sm:text-sm sm:leading-6">{currentPillar.description}</p>

                  {/* Related Services */}
                  <div className="mt-5">
                    <span className="mb-2 block text-[9px] font-black uppercase tracking-[0.18em] text-slate-400">
                      Related Funding Services
                    </span>

                    <nav aria-label={`${currentPillar.title} related services`} className="flex flex-wrap gap-2">
                      {currentPillar.services.map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          className="group inline-flex items-center gap-1.5 rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-[10px] font-semibold text-[#0f2a4a] transition-all duration-200 hover:border-[#f26522]/30 hover:bg-[#f26522]/5 hover:text-[#f26522]"
                        >
                          <span>{service.name}</span>

                          <ArrowUpRight
                            aria-hidden="true"
                            className="h-3 w-3 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                          />
                        </Link>
                      ))}
                    </nav>
                  </div>
                </div>

                {/* Support Content */}
                <div className="lg:col-span-7 lg:border-l lg:border-slate-100 lg:pl-8">
                  <span className="mb-3 block text-[9px] font-black uppercase tracking-[0.18em] text-slate-400">What We Support</span>

                  <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                    {currentPillar.support.map((item, idx) => (
                      <motion.li
                        key={item}
                        initial={{
                          opacity: 0,
                          x: 10,
                        }}
                        animate={{
                          opacity: 1,
                          x: 0,
                        }}
                        transition={{
                          duration: 0.3,
                          delay: idx * 0.05,
                        }}
                        className="flex items-start gap-2.5 rounded-md border border-slate-100 bg-slate-50 p-3 transition-colors duration-200 hover:bg-slate-100"
                      >
                        <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#157327]/10">
                          <Check aria-hidden="true" className="h-2.5 w-2.5 text-[#157327]" />
                        </span>

                        <span className="text-[10px] font-semibold leading-4 text-[#0f2a4a] sm:text-[11px]">{item}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA Buttons */}
                  <div className="mt-5 flex flex-col gap-2.5 sm:flex-row">
                    <Link
                      href={currentPillar.services[0]?.href || "/services"}
                      className="group inline-flex items-center justify-center gap-2 rounded-md bg-[#f26522] px-4 py-2.5 text-[10px] font-bold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d95316] hover:shadow-md"
                    >
                      <span>{currentPillar.primaryCta}</span>

                      <ArrowUpRight
                        aria-hidden="true"
                        className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </Link>

                    <Link
                      href="/contact"
                      className="group inline-flex items-center justify-center gap-2 rounded-md border border-[#0f2a4a] bg-white px-4 py-2.5 text-[10px] font-bold text-[#0f2a4a] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0f2a4a] hover:text-white"
                    >
                      <span>Discuss Your Funding Needs</span>

                      <ArrowUpRight
                        aria-hidden="true"
                        className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Supporting SEO Copy */}
              <div className="mt-7 border-t border-slate-100 pt-5">
                <p className="text-[10px] leading-5 text-slate-500 sm:text-xs sm:leading-6">{currentPillar.seoText}</p>
              </div>
            </motion.article>
          </AnimatePresence>
        </div>
      </section>
    </MotionConfig>
  );
}
