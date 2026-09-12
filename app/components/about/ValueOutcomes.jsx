"use client";

import React from "react";
import { motion, MotionConfig } from "framer-motion";
import { Map, ShieldCheck, BadgePercent, Award, CheckCircle2, TrendingUp, Headphones } from "lucide-react";

export default function ValueOutcomes() {
  const outcomes = [
    {
      num: "01",
      icon: Map,
      title: "Business Direction",
      description: "A clear direction for business setup and expansion.",
      accent: "#157327",
    },
    {
      num: "02",
      icon: ShieldCheck,
      title: "Simplified Compliance",
      description: "Simplified registrations and regulatory compliance.",
      accent: "#F26522",
    },
    {
      num: "03",
      icon: BadgePercent,
      title: "Financial Advisory",
      description: "Better financial planning and business advisory.",
      accent: "#157327",
    },
    {
      num: "04",
      icon: TrendingUp,
      title: "Brand Positioning",
      description: "Stronger brand positioning and digital presence.",
      accent: "#F26522",
    },
    {
      num: "05",
      icon: Award,
      title: "Tailored Guidance",
      description: "Expert guidance tailored to your business goals.",
      accent: "#157327",
    },
    {
      num: "06",
      icon: Headphones,
      title: "Reliable Support",
      description: "Reliable support whenever your business needs it.",
      accent: "#F26522",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.05,
      },
    },
  };

  const headerLeft = {
    hidden: {
      opacity: 0,
      x: -25,
      filter: "blur(4px)",
    },
    visible: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const headerRight = {
    hidden: {
      opacity: 0,
      x: 25,
      filter: "blur(4px)",
    },
    visible: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        delay: 0.08,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <MotionConfig reducedMotion="user">
      <section className="relative w-full overflow-hidden bg-[#f8fafc] py-10 font-sans text-[#03254C] sm:py-14 lg:py-16">
        {/* Background Glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#157327]/[0.035] blur-3xl"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-[#F26522]/[0.035] blur-3xl"
        />

        {/* Main Container */}
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* HEADER */}
          <div className="flex flex-col justify-between gap-6 border-b border-slate-200/80 pb-7 lg:flex-row lg:items-end lg:gap-10">
            {/* LEFT */}
            <motion.div
              variants={headerLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              className="max-w-2xl"
            >
              {/* Badge */}
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#157327]/10 bg-[#157327]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#157327] sm:text-[11px]">
                <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
                <span>More Than a Service Provider</span>
              </div>

              {/* Heading */}
              <h2 className="text-2xl font-extrabold leading-[1.2] tracking-tight text-[#03254C] sm:text-3xl lg:text-[36px]">
                What Changes When You Partner With <span className="text-[#F26522]">AarambhGrow?</span>
              </h2>

              {/* Accent */}
              <div className="mt-3 h-1 w-12 rounded-full bg-gradient-to-r from-[#F26522] to-[#157327]" />
            </motion.div>

            {/* RIGHT */}
            <motion.div
              variants={headerRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              className="max-w-md"
            >
              <p className="text-sm leading-6 text-slate-600 sm:text-[15px]">
                The right business partner doesn't just solve today's challenges, they help prepare your business for tomorrow's
                opportunities. When you choose AarambhGrow, you gain access to a team that works alongside you.
              </p>
            </motion.div>
          </div>

          {/* OUTCOME CARDS */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
            className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5"
          >
            {outcomes.map((item, idx) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.num}
                  initial={{
                    opacity: 0,
                    y: 24,
                    filter: "blur(3px)",
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                  }}
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: idx * 0.07,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{
                    y: -4,
                    transition: {
                      duration: 0.2,
                      ease: "easeOut",
                    },
                  }}
                  className="group relative overflow-hidden rounded-md border border-slate-200/80 bg-white p-5 shadow-sm transition-shadow duration-300 hover:shadow-md"
                >
                  {/* Top Accent */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: idx * 0.07 + 0.15,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="absolute left-0 top-0 h-[2px] w-full origin-left"
                    style={{ backgroundColor: item.accent }}
                  />

                  {/* Number */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-xl font-black tracking-tight" style={{ color: item.accent }}>
                        {item.num}
                      </span>

                      <span
                        className="h-1.5 w-1.5 rounded-full"
                        style={{
                          backgroundColor: item.accent,
                        }}
                      />
                    </div>

                    {/* Icon Box */}
                    <div
                      className="flex h-8 w-8 items-center justify-center rounded-md transition-transform duration-300 group-hover:scale-105"
                      style={{
                        backgroundColor: `${item.accent}10`,
                        color: item.accent,
                      }}
                    >
                      <Icon className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="mt-4 space-y-1.5">
                    <h3 className="text-[15px] font-bold leading-snug text-[#03254C]">{item.title}</h3>

                    <p className="text-xs font-normal leading-relaxed text-slate-600">{item.description}</p>
                  </div>

                  {/* Bottom Accent */}
                  <div className="mt-5 h-[2px] w-full overflow-hidden bg-slate-100">
                    <motion.div
                      className="h-full origin-left"
                      style={{
                        backgroundColor: item.accent,
                      }}
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.55,
                        delay: idx * 0.07 + 0.25,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    />
                  </div>

                  {/* Hover Glow */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-16 -right-16 h-32 w-32 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      backgroundColor: `${item.accent}18`,
                    }}
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </MotionConfig>
  );
}
