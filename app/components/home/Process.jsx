"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";
import { Star, Search, Compass, FileCheck, ShieldCheck, CheckCircle2, Sparkles, TrendingUp } from "lucide-react";

const steps = [
  {
    id: "01",
    badge: "PHASE 01",
    title: "Business & Funding Assessment",
    subtitle: "Eligibility & Funding Requirement",
    icon: Search,
    accent: "#f26522",
    description:
      "We understand your business model, funding requirement, growth stage and financial objectives to identify suitable startup funding, MSME funding and business finance opportunities.",
    deliverables: ["Business & Funding Requirement Assessment", "Startup & MSME Eligibility Review", "Funding Need & Objective Mapping"],
    metric: "Clear Funding Direction",
  },
  {
    id: "02",
    badge: "PHASE 02",
    title: "Funding Strategy",
    subtitle: "Government Schemes & Finance",
    icon: Compass,
    accent: "#157327",
    description:
      "Based on your business profile and eligibility, we evaluate relevant government schemes, grants, startup funding programs, business loans and credit support options.",
    deliverables: ["Government Scheme Identification", "Grant & Startup Funding Review", "Business Loan & Credit Assessment"],
    metric: "Right Funding Strategy",
  },
  {
    id: "03",
    badge: "PHASE 03",
    title: "Documentation & Application",
    subtitle: "Project Report & Application Support",
    icon: FileCheck,
    accent: "#f26522",
    description:
      "We support project reports, business documents, financial information and application preparation to help you present a structured and complete funding application.",
    deliverables: ["Project Report & Documentation", "Financial Information Preparation", "Funding Application & Filing Support"],
    metric: "Complete Application",
  },
  {
    id: "04",
    badge: "PHASE 04",
    title: "Approval & Ongoing Support",
    subtitle: "Follow-Up & Business Guidance",
    icon: ShieldCheck,
    accent: "#157327",
    description:
      "We provide structured guidance throughout the funding journey, including application follow-up, approval support and ongoing funding assistance as your business grows.",
    deliverables: ["Application Status & Follow-Up Guidance", "Funding Approval Process Support", "Ongoing Business & Funding Guidance"],
    metric: "Long-Term Business Support",
  },
];

const ease = [0.22, 1, 0.36, 1];

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);
  const current = steps[activeStep] || steps[0];

  return (
    <MotionConfig reducedMotion="user">
      <section
        aria-labelledby="funding-process-title"
        className="relative w-full overflow-hidden bg-[#fafafa] py-12 font-sans text-[#0f172a] sm:py-16 lg:py-16"
      >
        {/* Decorative Orange Dots */}
        <div aria-hidden="true" className="pointer-events-none absolute left-6 top-6 hidden opacity-20 sm:block">
          <div className="grid grid-cols-6 gap-2">
            {Array.from({ length: 24 }).map((_, i) => (
              <div key={i} className="h-1.5 w-1.5 rounded-full bg-[#f26522]" />
            ))}
          </div>
        </div>

        {/* Decorative Green Dots */}
        <div aria-hidden="true" className="pointer-events-none absolute right-6 top-6 hidden opacity-20 sm:block">
          <div className="grid grid-cols-6 gap-2">
            {Array.from({ length: 24 }).map((_, i) => (
              <div key={i} className="h-1.5 w-1.5 rounded-full bg-[#157327]" />
            ))}
          </div>
        </div>

        {/* SAME WIDTH AS PREVIOUS SECTION */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* SECTION BADGE */}
          <motion.div
            initial={{ opacity: 0, y: -18, filter: "blur(5px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease }}
            className="mb-3 flex justify-center sm:mb-4"
          >
            <div className="inline-flex items-center gap-1.5 rounded-full border border-[#f26522]/20 bg-[#fff5f0] px-3 py-1 sm:px-3.5">
              <Star className="h-3 w-3 fill-[#f26522] text-[#f26522]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#f26522] sm:text-[11px]">OUR FUNDING PROCESS</span>
            </div>
          </motion.div>

          {/* SECTION HEADER */}
          <motion.header
            initial={{ opacity: 0, y: 25, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, delay: 0.05, ease }}
            className="mx-auto mb-8 max-w-3xl text-center sm:mb-10 lg:mb-12"
          >
            <h2
              id="funding-process-title"
              className="text-2xl font-black leading-[1.1] tracking-tight text-[#0f2a4a] sm:text-3xl lg:text-4xl"
            >
              A Simple Process for Better <span className="text-[#f26522]">Funding Decisions</span>
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-xs font-normal leading-[1.7] text-slate-600 sm:mt-4 sm:text-sm">
              From understanding your business and funding needs to identifying suitable government schemes, grants, loans and startup
              funding opportunities, we provide structured guidance through documentation, application and approval support.
            </p>
          </motion.header>

          {/* PROCESS STEPS */}
          <div className="relative mb-7 sm:mb-9">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.09,
                  },
                },
              }}
              className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4"
            >
              {steps.map((item, idx) => {
                const Icon = item.icon;
                const isActive = activeStep === idx;

                return (
                  <motion.button
                    key={item.id}
                    type="button"
                    aria-selected={isActive}
                    aria-label={`View ${item.title} process details`}
                    variants={{
                      hidden: {
                        opacity: 0,
                        y: 25,
                        filter: "blur(5px)",
                      },
                      visible: {
                        opacity: 1,
                        y: 0,
                        filter: "blur(0px)",
                        transition: {
                          duration: 0.6,
                          ease,
                        },
                      },
                    }}
                    whileHover={{ y: -4 }}
                    whileTap={{ scale: 0.985 }}
                    onClick={() => setActiveStep(idx)}
                    onMouseEnter={() => {
                      if (typeof window !== "undefined" && window.matchMedia("(hover: hover)").matches) {
                        setActiveStep(idx);
                      }
                    }}
                    className={`group relative overflow-hidden rounded-md p-4 text-left transition-all duration-300 sm:p-5 ${
                      isActive
                        ? "border border-[#0f2a4a]/10 bg-white ring-1 ring-slate-200"
                        : "border border-slate-200/80 bg-white/70 hover:border-slate-300 hover:bg-white"
                    }`}
                  >
                    {/* Left Active Line */}
                    <span
                      aria-hidden="true"
                      className={`absolute left-0 top-1/2 w-[3px] -translate-y-1/2 rounded-full bg-[#f26522] transition-all duration-500 ${
                        isActive ? "h-[65%] opacity-100" : "h-0 opacity-0"
                      }`}
                    />

                    <div className="mb-3 flex items-center justify-between">
                      <span
                        className={`rounded-md px-2.5 py-1 text-[11px] font-black transition-all duration-300 sm:text-xs ${
                          isActive ? "text-white" : "bg-slate-100 text-slate-600 group-hover:bg-slate-200"
                        }`}
                        style={{
                          backgroundColor: isActive ? item.accent : undefined,
                        }}
                      >
                        {item.id}
                      </span>

                      <Icon
                        className={`h-4 w-4 transition-all duration-300 ${
                          isActive ? "scale-110 text-[#0f2a4a]" : "text-slate-400 group-hover:scale-105 group-hover:text-slate-600"
                        }`}
                      />
                    </div>

                    <div className="space-y-1">
                      <span className="block text-[9px] font-extrabold uppercase tracking-[0.12em] text-slate-400 sm:text-[10px]">
                        {item.badge}
                      </span>

                      <h3 className="text-sm font-black leading-snug text-[#0f2a4a] sm:text-[15px]">{item.title}</h3>

                      <p className="pt-0.5 text-[10px] font-medium leading-relaxed text-slate-500 sm:text-[11px]">{item.subtitle}</p>
                    </div>
                  </motion.button>
                );
              })}
            </motion.div>
          </div>

          {/* MAIN FEATURE PANEL */}
          <motion.div
            initial={{ opacity: 0, y: 25, filter: "blur(5px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, delay: 0.15, ease }}
            className="relative overflow-hidden rounded-md border border-slate-200/80 bg-white p-5 sm:p-7 lg:p-9"
          >
            {/* Decorative Accent */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute left-0 top-0 h-full w-[2px] opacity-80"
              style={{ backgroundColor: current.accent }}
            />

            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={activeStep}
                initial={{
                  opacity: 0,
                  x: 25,
                  filter: "blur(5px)",
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  filter: "blur(0px)",
                }}
                exit={{
                  opacity: 0,
                  x: -20,
                  filter: "blur(4px)",
                }}
                transition={{
                  duration: 0.5,
                  ease,
                }}
                className="relative z-10 grid grid-cols-1 items-center gap-7 lg:grid-cols-12 lg:gap-10"
              >
                {/* LEFT CONTENT */}
                <div className="space-y-4 lg:col-span-7 sm:space-y-5">
                  <div className="flex items-center gap-2">
                    <span
                      aria-hidden="true"
                      className="h-2 w-2 animate-pulse rounded-full sm:h-2.5 sm:w-2.5"
                      style={{
                        backgroundColor: current.accent,
                      }}
                    />

                    <span className="text-[10px] font-black uppercase tracking-[0.1em] text-[#0f2a4a] sm:text-xs">
                      {current.badge} • {current.subtitle}
                    </span>
                  </div>

                  <h3 className="text-xl font-black leading-[1.15] text-[#0f2a4a] sm:text-2xl lg:text-3xl">{current.title}</h3>

                  <p className="max-w-2xl text-xs font-normal leading-[1.75] text-slate-600 sm:text-sm">{current.description}</p>

                  {/* STRATEGIC FOCUS */}
                  <div className="pt-1 sm:pt-2">
                    <div className="inline-flex max-w-full items-center gap-2 rounded-md border border-slate-200/80 bg-[#f8fafc] px-3 py-2 text-[10px] font-bold text-[#0f2a4a] sm:px-3.5 sm:text-xs">
                      <TrendingUp className="h-3.5 w-3.5 shrink-0 text-[#f26522] sm:h-4 sm:w-4" />

                      <span>
                        Strategic Focus: <span className="text-[#f26522]">{current.metric}</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* RIGHT DELIVERABLES */}
                <div className="lg:col-span-5">
                  <div className="rounded-md border border-slate-200/80 bg-[#f8fafc] p-4 sm:p-5 lg:p-6">
                    <div className="flex items-center justify-between border-b border-slate-200/70 pb-3">
                      <span className="text-[10px] font-black uppercase tracking-[0.12em] text-[#0f2a4a] sm:text-xs">
                        Phase Deliverables
                      </span>

                      <Sparkles className="h-4 w-4 text-slate-400" />
                    </div>

                    <div className="mt-3 space-y-2">
                      {current.deliverables.map((item, idx) => (
                        <motion.div
                          key={item}
                          initial={{
                            opacity: 0,
                            x: 15,
                          }}
                          animate={{
                            opacity: 1,
                            x: 0,
                          }}
                          transition={{
                            duration: 0.4,
                            delay: 0.08 + idx * 0.08,
                            ease,
                          }}
                          className="flex items-center gap-2.5 rounded-md border border-slate-200/60 bg-white p-2.5 sm:p-3"
                        >
                          <CheckCircle2
                            className="h-4 w-4 shrink-0"
                            style={{
                              color: current.accent,
                            }}
                          />

                          <span className="text-[10px] font-bold leading-relaxed text-[#0f2a4a] sm:text-xs">{item}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* STEP COUNTER */}
                    <div className="mt-3 flex items-center justify-between border-t border-slate-200/60 pt-3 text-[9px] font-bold text-slate-400 sm:text-[10px]">
                      <span>Funding Process</span>

                      <span className="font-black text-[#0f2a4a]">Step {current.id} of 04</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* FOOTER */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.6,
              delay: 0.2,
              ease,
            }}
            className="mt-7 flex justify-center sm:mt-9"
          >
            <div className="inline-flex items-center gap-2 rounded-md border border-slate-200/80 bg-white px-3.5 py-2 text-[9px] font-extrabold uppercase tracking-[0.1em] text-[#0f2a4a]/70 sm:px-4 sm:text-[10px]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#f26522]" />
              <span>Structured Funding Support</span>
            </div>
          </motion.div>
        </div>
      </section>
    </MotionConfig>
  );
}
