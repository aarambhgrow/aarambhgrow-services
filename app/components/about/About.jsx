"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";
import { Star, Target, Award, ShieldCheck, Sparkles, CheckCircle2 } from "lucide-react";

export default function AboutSection() {
  const [activeHighlight, setActiveHighlight] = useState(0);

  const pillars = [
    {
      id: "purpose",
      phrase: "empowering businesses to succeed",
      title: "Our Purpose",
      badge: "PURPOSE",
      icon: Target,
      accent: "#f26522",
      softBg: "#fff5f0",
      description: "We simplify complex business processes, remove roadblocks, and help businesses create practical paths toward growth.",
      highlights: ["Simplify business processes", "Remove unnecessary roadblocks", "Build practical growth roadmaps"],
    },
    {
      id: "vision",
      phrase: "creating lasting value",
      title: "Our Vision",
      badge: "VISION",
      icon: Award,
      accent: "#157327",
      softBg: "#f0fdf4",
      description:
        "To become a trusted growth partner for entrepreneurs and businesses through reliable, innovative, and strategic solutions.",
      highlights: ["Trusted growth partner", "Reliable business solutions", "Create lasting value"],
    },
    {
      id: "mission",
      phrase: "delivering integrated solutions",
      title: "Our Mission",
      badge: "MISSION",
      icon: ShieldCheck,
      accent: "#f26522",
      softBg: "#fff5f0",
      description:
        "To simplify the business journey through integrated consulting, finance, compliance, branding, and operational support.",
      highlights: ["Integrated business support", "Build stronger foundations", "Support sustainable growth"],
    },
  ];

  const current = pillars[activeHighlight];
  const CurrentIcon = current.icon;

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.05,
      },
    },
  };

  const leftReveal = {
    hidden: {
      opacity: 0,
      x: -28,
      filter: "blur(4px)",
    },
    visible: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const rightReveal = {
    hidden: {
      opacity: 0,
      x: 28,
      filter: "blur(4px)",
    },
    visible: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <MotionConfig reducedMotion="user">
      <section
        id="about-aarambhgrow"
        aria-labelledby="about-aarambhgrow-heading"
        className="relative w-full overflow-hidden bg-[#f8fafc] py-10 font-sans text-[#0f172a] sm:py-14 lg:py-16"
      >
        {/* Subtle Background Decoration */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-20 h-64 w-64 rounded-full bg-[#f26522]/[0.035] blur-3xl"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-40 h-72 w-72 rounded-full bg-[#157327]/[0.035] blur-3xl"
        />

        {/* Decorative Dot Grid */}
        <div aria-hidden="true" className="pointer-events-none absolute left-5 top-8 hidden opacity-20 sm:block">
          <div className="grid grid-cols-6 gap-2">
            {Array.from({ length: 24 }).map((_, i) => (
              <div key={i} className="h-1.5 w-1.5 rounded-full bg-[#f26522]" />
            ))}
          </div>
        </div>

        <div aria-hidden="true" className="pointer-events-none absolute right-5 top-8 hidden opacity-20 sm:block">
          <div className="grid grid-cols-6 gap-2">
            {Array.from({ length: 24 }).map((_, i) => (
              <div key={i} className="h-1.5 w-1.5 rounded-full bg-[#157327]" />
            ))}
          </div>
        </div>

        {/* Main Container */}
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mb-6 flex justify-center"
          >
            <div className="inline-flex items-center gap-1.5 rounded-full border border-[#f26522]/20 bg-[#fff5f0] px-3.5 py-1">
              <Star className="h-3 w-3 fill-[#f26522] text-[#f26522]" aria-hidden="true" />

              <span className="text-[11px] font-bold uppercase tracking-wider text-[#f26522]">Who We Are</span>
            </div>
          </motion.div>

          {/* Main Editorial Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10"
          >
            {/* LEFT CONTENT */}
            <motion.div variants={leftReveal} className="space-y-4 lg:col-span-7">
              <div className="space-y-2.5">
                <h2
                  id="about-aarambhgrow-heading"
                  className="max-w-3xl text-2xl font-black leading-[1.2] tracking-tight text-[#0f2a4a] sm:text-3xl lg:text-[36px]"
                >
                  Empowering Businesses to <span className="text-[#f26522]">Build, Grow, and Succeed</span>
                </h2>

                <div className="h-1 w-12 rounded-full bg-gradient-to-r from-[#f26522] to-[#157327]" />
              </div>

              {/* Main Narrative */}
              <p className="max-w-3xl text-sm font-normal leading-7 text-slate-600 sm:text-[15px]">
                At <strong className="font-bold text-[#0f2a4a]">AarambhGrow</strong>, we bring business consulting, financial advisory,
                compliance, certifications, branding, and operational support together to help startups, entrepreneurs, and MSMEs{" "}
                <button
                  type="button"
                  onMouseEnter={() => setActiveHighlight(0)}
                  onFocus={() => setActiveHighlight(0)}
                  onClick={() => setActiveHighlight(0)}
                  className={`inline-block cursor-pointer rounded-md border-b-2 px-1.5 py-0.5 font-bold transition-all duration-200 ${
                    activeHighlight === 0
                      ? "border-[#f26522] bg-[#fff5f0] text-[#f26522]"
                      : "border-slate-300 text-[#0f2a4a] hover:border-[#f26522]"
                  }`}
                >
                  grow with confidence
                </button>
                . Our focus is on{" "}
                <button
                  type="button"
                  onMouseEnter={() => setActiveHighlight(1)}
                  onFocus={() => setActiveHighlight(1)}
                  onClick={() => setActiveHighlight(1)}
                  className={`inline-block cursor-pointer rounded-md border-b-2 px-1.5 py-0.5 font-bold transition-all duration-200 ${
                    activeHighlight === 1
                      ? "border-[#157327] bg-[#f0fdf4] text-[#157327]"
                      : "border-slate-300 text-[#0f2a4a] hover:border-[#157327]"
                  }`}
                >
                  creating lasting value
                </button>{" "}
                through practical solutions.
              </p>

              {/* Supporting Content */}
              <p className="max-w-3xl text-sm leading-7 text-slate-600 sm:text-[15px]">
                We simplify business requirements and provide practical support across key areas to help businesses build stronger
                foundations and pursue sustainable growth.
              </p>

              {/* Selector */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="mr-1 text-[10px] font-bold uppercase tracking-wider text-slate-400 sm:text-[11px]">Explore:</span>

                {pillars.map((item, idx) => (
                  <motion.button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveHighlight(idx)}
                    onMouseEnter={() => setActiveHighlight(idx)}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{
                      duration: 0.18,
                      ease: "easeOut",
                    }}
                    className={`rounded-full px-3 py-1 text-[11px] font-extrabold transition-all duration-200 ${
                      activeHighlight === idx
                        ? "bg-[#0f2a4a] text-white shadow-sm"
                        : "border border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-[#0f2a4a]"
                    }`}
                  >
                    {item.badge}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* RIGHT PANEL */}
            <motion.div variants={rightReveal} className="lg:col-span-5">
              <div className="relative">
                {/* Soft Accent Glow */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -inset-3 rounded-2xl opacity-40 blur-2xl"
                  style={{
                    background: `radial-gradient(circle at center, ${current.accent}18, transparent 68%)`,
                  }}
                />

                <div className="relative overflow-hidden rounded-md border border-slate-200/80 bg-white p-5 shadow-sm transition-all duration-300 sm:p-6">
                  {/* Top Accent Line */}
                  <motion.div
                    key={`line-${activeHighlight}`}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{
                      duration: 0.45,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="absolute left-0 top-0 h-[3px] w-full origin-left"
                    style={{
                      backgroundColor: current.accent,
                    }}
                  />

                  {/* Meta */}
                  <div className="mb-4 flex items-center justify-between border-b border-slate-100 pb-3">
                    <div className="flex items-center gap-2">
                      <motion.span
                        key={`dot-${activeHighlight}`}
                        initial={{
                          scale: 0.5,
                          opacity: 0,
                        }}
                        animate={{
                          scale: 1,
                          opacity: 1,
                        }}
                        className="h-2.5 w-2.5 rounded-full"
                        style={{
                          backgroundColor: current.accent,
                          boxShadow: `0 0 0 4px ${current.accent}12`,
                        }}
                      />

                      <span className="text-xs font-black uppercase tracking-wider text-[#0f2a4a]">{current.badge}</span>
                    </div>

                    <Sparkles className="h-4 w-4 text-slate-300" aria-hidden="true" />
                  </div>

                  {/* Dynamic Content */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={current.id}
                      initial={{
                        opacity: 0,
                        x: 12,
                        filter: "blur(3px)",
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                        filter: "blur(0px)",
                      }}
                      exit={{
                        opacity: 0,
                        x: -10,
                        filter: "blur(3px)",
                      }}
                      transition={{
                        duration: 0.35,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      {/* Title */}
                      <div className="mb-5">
                        <div className="mb-2 flex items-center gap-2">
                          <div
                            className="flex h-8 w-8 items-center justify-center rounded-md"
                            style={{
                              backgroundColor: `${current.accent}12`,
                              color: current.accent,
                            }}
                          >
                            <CurrentIcon className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
                          </div>

                          <h3 className="text-lg font-black text-[#0f2a4a]">{current.title}</h3>
                        </div>

                        <p className="text-xs leading-relaxed text-slate-500">{current.description}</p>
                      </div>

                      {/* Highlights */}
                      <div className="space-y-2">
                        {current.highlights.map((point, idx) => (
                          <motion.div
                            key={point}
                            initial={{
                              opacity: 0,
                              x: 8,
                            }}
                            animate={{
                              opacity: 1,
                              x: 0,
                            }}
                            transition={{
                              duration: 0.3,
                              delay: idx * 0.06,
                              ease: [0.22, 1, 0.36, 1],
                            }}
                            className="flex items-center gap-2.5 rounded-md border border-slate-100 bg-[#f8fafc] p-2.5 transition-colors duration-200 hover:bg-white"
                          >
                            <CheckCircle2
                              className="h-3.5 w-3.5 shrink-0"
                              style={{
                                color: current.accent,
                              }}
                              aria-hidden="true"
                            />

                            <span className="text-xs font-bold leading-tight text-[#0f2a4a]">{point}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* EXPERIENCE & JOURNEY */}
          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.65,
              delay: 0.05,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-10 sm:mt-12"
          >
            <div className="mx-auto max-w-4xl text-center">
              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#f26522] sm:text-[11px]">Our Journey</span>

              <h2 className="mt-2 text-2xl font-black leading-tight text-[#0f2a4a] sm:text-3xl">Our Experience & Journey</h2>

              <div className="mx-auto mt-2.5 h-1 w-10 rounded-full bg-gradient-to-r from-[#f26522] to-[#157327]" />

              <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-[15px]">
                AarambhGrow combines consulting, finance, compliance, branding, and operational support to help startups, MSMEs, and growing
                businesses build stronger foundations and achieve sustainable growth.
              </p>

              {/* Experience Cards */}
              <div className="mx-auto mt-6 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-2">
                <motion.div
                  whileHover={{
                    y: -3,
                    transition: {
                      duration: 0.2,
                    },
                  }}
                  className="rounded-md border border-slate-200 bg-white p-5 text-left shadow-sm transition-shadow duration-300 hover:shadow-md"
                >
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Experience</p>

                  <p className="mt-1 text-xl font-black text-[#0f2a4a]">20+ Years</p>

                  <p className="mt-1 text-xs leading-relaxed text-slate-500">Experience supporting business growth.</p>
                </motion.div>

                <motion.div
                  whileHover={{
                    y: -3,
                    transition: {
                      duration: 0.2,
                    },
                  }}
                  className="rounded-md border border-slate-200 bg-white p-5 text-left shadow-sm transition-shadow duration-300 hover:shadow-md"
                >
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Focus</p>

                  <p className="mt-1 text-xl font-black text-[#0f2a4a]">Business Growth</p>

                  <p className="mt-1 text-xs leading-relaxed text-slate-500">Integrated support for growing businesses.</p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Bottom SEO Content */}
          <motion.div
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
            className="mx-auto mt-8 max-w-5xl border-t border-slate-200 pt-5 text-center"
          >
            <p className="text-[10px] leading-5 text-slate-500 sm:text-xs sm:leading-6">
              AarambhGrow supports startups, entrepreneurs, MSMEs, and growing businesses with consulting, financial advisory, compliance,
              certifications, branding, operational support, and business growth solutions.
            </p>
          </motion.div>
        </div>
      </section>
    </MotionConfig>
  );
}
