"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";
import { Rocket, Factory, ShoppingCart, HeartPulse, GraduationCap, Building2, Cpu, Briefcase, Sparkles, CheckCircle2 } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1];

const businessTypes = [
  {
    id: "01",
    label: "Startups & Early-Stage Businesses",
    icon: Rocket,
    color: "#F26522",
    tagline:
      "Funding guidance for startups seeking seed capital, government support, grants and business finance to build and scale with greater clarity.",
    points: ["Startup Seed Funding", "SISFS Guidance", "Government Grants", "Funding Readiness"],
  },
  {
    id: "02",
    label: "MSMEs & Manufacturing Businesses",
    icon: Factory,
    color: "#157327",
    tagline:
      "Funding and credit support for MSMEs and manufacturers looking to finance machinery, working capital, expansion and business growth.",
    points: ["MSME Funding", "CGTMSE Support", "Term Loans", "Working Capital Finance"],
  },
  {
    id: "03",
    label: "Retail, Trading & E-commerce",
    icon: ShoppingCart,
    color: "#2563EB",
    tagline:
      "Business finance solutions for retail, trading and e-commerce businesses requiring working capital, expansion funding and credit support.",
    points: ["Business Loans", "Working Capital", "CC / Term Loans", "Growth Funding"],
  },
  {
    id: "04",
    label: "Healthcare & Service Businesses",
    icon: HeartPulse,
    color: "#DC2626",
    tagline:
      "Funding guidance for healthcare and service-oriented businesses seeking suitable loans, government schemes and financial support for expansion.",
    points: ["Business Loan Assessment", "Government Schemes", "Expansion Funding", "Credit Support"],
  },
  {
    id: "05",
    label: "Education & Training Businesses",
    icon: GraduationCap,
    color: "#059669",
    tagline:
      "Funding support for education, training and learning businesses looking to establish, expand operations or access suitable business finance.",
    points: ["Business Funding", "Loan Assistance", "Government Schemes", "Project Documentation"],
  },
  {
    id: "06",
    label: "Construction & Infrastructure Businesses",
    icon: Building2,
    color: "#7C3AED",
    tagline:
      "Structured funding guidance for construction and infrastructure businesses requiring project finance, working capital and business expansion support.",
    points: ["Project Funding", "Term Loans", "Working Capital", "Credit Assessment"],
  },
  {
    id: "07",
    label: "IT, Technology & SaaS Businesses",
    icon: Cpu,
    color: "#0284C7",
    tagline:
      "Funding strategy for technology and SaaS businesses seeking startup capital, business loans, grants and growth-oriented financial support.",
    points: ["Startup Funding", "Government Grants", "Business Loans", "Growth Finance"],
  },
  {
    id: "08",
    label: "Professional & Other Service Businesses",
    icon: Briefcase,
    color: "#D97706",
    tagline:
      "Funding assistance for professional and service businesses seeking suitable finance options for working capital, expansion and long-term growth.",
    points: ["Business Loan Support", "Working Capital", "Government Schemes", "Funding Strategy"],
  },
];

export default function SupportedIndustriesList() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeBusiness = businessTypes[activeIndex] || businessTypes[0];

  return (
    <MotionConfig reducedMotion="user">
      <section
        aria-labelledby="business-support-title"
        className="relative w-full overflow-hidden bg-[#fafafa] py-12 font-sans text-[#0f172a] sm:py-16 lg:py-16"
      >
        {/* Decorative dots */}
        <div aria-hidden="true" className="pointer-events-none absolute left-6 top-6 hidden opacity-20 sm:block">
          <div className="grid grid-cols-6 gap-2">
            {Array.from({ length: 24 }).map((_, i) => (
              <div key={i} className="h-1.5 w-1.5 rounded-full bg-[#f26522]" />
            ))}
          </div>
        </div>

        <div aria-hidden="true" className="pointer-events-none absolute right-6 top-6 hidden opacity-20 sm:block">
          <div className="grid grid-cols-6 gap-2">
            {Array.from({ length: 24 }).map((_, i) => (
              <div key={i} className="h-1.5 w-1.5 rounded-full bg-[#157327]" />
            ))}
          </div>
        </div>

        {/* Same width as previous sections */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Badge */}
          <motion.div
            initial={{
              opacity: 0,
              y: -18,
              filter: "blur(5px)",
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.65,
              ease: EASE,
            }}
            className="mb-3 flex justify-center sm:mb-4"
          >
            <div className="inline-flex items-center gap-1.5 rounded-full border border-[#f26522]/20 bg-[#fff5f0] px-3 py-1 sm:px-3.5">
              <Sparkles className="h-3 w-3 text-[#f26522]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#f26522] sm:text-[11px]">BUSINESSES WE SUPPORT</span>
            </div>
          </motion.div>

          {/* Header */}
          <motion.header
            initial={{
              opacity: 0,
              y: 25,
              filter: "blur(6px)",
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.75,
              delay: 0.05,
              ease: EASE,
            }}
            className="mx-auto mb-8 max-w-3xl text-center sm:mb-10 lg:mb-12"
          >
            <h2
              id="business-support-title"
              className="text-2xl font-black leading-[1.1] tracking-tight text-[#0f2a4a] sm:text-3xl lg:text-4xl"
            >
              Funding Support for <span className="text-[#f26522]">Different Types of Businesses</span>
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-xs font-normal leading-[1.7] text-slate-600 sm:mt-4 sm:text-sm">
              From startups and MSMEs to manufacturing, retail, technology and service businesses, we help identify suitable startup
              funding, government schemes, grants, business loans and credit support based on your business requirements.
            </p>
          </motion.header>

          {/* Business Types */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.12,
            }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.07,
                },
              },
            }}
            className="divide-y divide-slate-200 border-y border-slate-200"
          >
            {businessTypes.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeIndex === index;

              return (
                <motion.div
                  key={item.id}
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: 20,
                      filter: "blur(5px)",
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                      filter: "blur(0px)",
                      transition: {
                        duration: 0.55,
                        ease: EASE,
                      },
                    },
                  }}
                  onMouseEnter={() => {
                    if (typeof window !== "undefined" && window.matchMedia("(hover: hover)").matches) {
                      setActiveIndex(index);
                    }
                  }}
                  onClick={() => setActiveIndex(index)}
                  className={`group relative cursor-pointer overflow-hidden transition-colors duration-300 ${
                    isActive ? "bg-white" : "bg-transparent hover:bg-white/70"
                  }`}
                >
                  {/* Active Orange Line */}
                  <motion.span
                    aria-hidden="true"
                    initial={false}
                    animate={{
                      height: isActive ? "65%" : "0%",
                      opacity: isActive ? 1 : 0,
                    }}
                    transition={{
                      duration: 0.45,
                      ease: EASE,
                    }}
                    className="absolute left-0 top-1/2 w-[3px] -translate-y-1/2 rounded-full bg-[#f26522]"
                  />

                  <div className="px-2 py-4 sm:px-4 sm:py-5">
                    {/* Main Row */}
                    <div className="flex items-center justify-between gap-3 sm:gap-4">
                      <div className="flex min-w-0 items-center gap-3 sm:gap-6">
                        {/* Number */}
                        <span
                          className={`shrink-0 text-[11px] font-extrabold transition-colors duration-300 sm:text-sm ${
                            isActive ? "text-[#f26522]" : "text-slate-400 group-hover:text-slate-600"
                          }`}
                        >
                          {item.id}
                        </span>

                        {/* Icon */}
                        <motion.div
                          animate={{
                            scale: isActive ? 1.05 : 1,
                          }}
                          transition={{
                            duration: 0.35,
                            ease: EASE,
                          }}
                          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 sm:h-10 sm:w-10 ${
                            isActive ? "bg-[#0f2a4a] text-white" : "bg-slate-100 text-slate-600 group-hover:bg-white"
                          }`}
                        >
                          <Icon
                            size={16}
                            strokeWidth={2}
                            style={{
                              color: isActive ? "#ffffff" : item.color,
                            }}
                          />
                        </motion.div>

                        {/* Title */}
                        <h3
                          className={`min-w-0 text-sm font-bold leading-snug transition-colors duration-300 sm:text-lg ${
                            isActive ? "text-[#0f2a4a]" : "text-slate-700 group-hover:text-[#0f2a4a]"
                          }`}
                        >
                          {item.label}
                        </h3>
                      </div>
                    </div>

                    {/* Expandable Details */}
                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          initial={{
                            opacity: 0,
                            height: 0,
                          }}
                          animate={{
                            opacity: 1,
                            height: "auto",
                          }}
                          exit={{
                            opacity: 0,
                            height: 0,
                          }}
                          transition={{
                            duration: 0.4,
                            ease: EASE,
                          }}
                          className="overflow-hidden"
                        >
                          <motion.div
                            initial={{
                              opacity: 0,
                              y: 10,
                              filter: "blur(4px)",
                            }}
                            animate={{
                              opacity: 1,
                              y: 0,
                              filter: "blur(0px)",
                            }}
                            transition={{
                              duration: 0.45,
                              delay: 0.05,
                              ease: EASE,
                            }}
                            className="pl-8 pr-2 pt-4 sm:pl-20 sm:pr-4 sm:pt-5"
                          >
                            {/* Description */}
                            <p className="mb-3 max-w-3xl text-xs font-medium leading-[1.7] text-slate-600 sm:text-sm">{item.tagline}</p>

                            {/* Funding Support Points */}
                            <div className="flex flex-wrap gap-1.5 pt-1 sm:gap-2">
                              {item.points.map((point, pointIndex) => (
                                <motion.span
                                  key={point}
                                  initial={{
                                    opacity: 0,
                                    x: -8,
                                  }}
                                  animate={{
                                    opacity: 1,
                                    x: 0,
                                  }}
                                  transition={{
                                    duration: 0.35,
                                    delay: 0.08 + pointIndex * 0.05,
                                    ease: EASE,
                                  }}
                                  className="inline-flex items-center gap-1 rounded-md border border-slate-200/80 bg-slate-100 px-2.5 py-1 text-[10px] font-semibold text-[#0f2a4a] sm:text-[11px]"
                                >
                                  <CheckCircle2 size={11} className="shrink-0 text-[#f26522]" />

                                  <span>{point}</span>
                                </motion.span>
                              ))}
                            </div>
                          </motion.div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </MotionConfig>
  );
}
