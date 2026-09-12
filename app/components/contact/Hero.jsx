"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Headphones, ShieldCheck, Lock } from "lucide-react";

export default function ContactHero() {
  const features = [
    {
      icon: Headphones,
      title: "Business Guidance",
      description: "Practical support for your business requirements.",
      iconColor: "text-[#157327]",
      bgColor: "bg-[#157327]/10",
    },
    {
      icon: ShieldCheck,
      title: "Expert Support",
      description: "Guidance across finance, compliance, and growth.",
      iconColor: "text-[#F26522]",
      bgColor: "bg-[#F26522]/10",
    },
    {
      icon: Lock,
      title: "Confidential Support",
      description: "Your business information is handled securely.",
      iconColor: "text-[#157327]",
      bgColor: "bg-[#157327]/10",
    },
  ];

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
  };

  const fadeInUp = {
    hidden: {
      opacity: 0,
      y: 15,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <section className="relative m-0 flex min-h-[420px] w-full items-center overflow-hidden bg-[#FCFCFE] p-0 font-sans text-[#03254C] lg:min-h-[430px]">
      {/* =========================================================
          BACKGROUND IMAGE
      ========================================================= */}
      <div className="pointer-events-none absolute inset-y-0 right-0 z-0 hidden w-[62%] items-center justify-end overflow-hidden lg:flex">
        <Image
          src="/images/contact-hero.png"
          alt="AarambhGrow business consultation and support"
          fill
          priority
          sizes="62vw"
          className="object-contain object-right"
          style={{
            transform: "scale(1.22)",
            transformOrigin: "right center",
          }}
        />
      </div>

      {/* =========================================================
          BACKGROUND OVERLAY
      ========================================================= */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-[#f8fafc] via-[#f8fafc]/95 to-transparent lg:w-[68%]"
      />

      {/* =========================================================
          MAIN CONTENT
      ========================================================= */}
      <div className="relative z-10 w-full">
        <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-11">
          <motion.div
            className="w-full max-w-[760px] space-y-5 text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* =====================================================
                STATUS BADGE
            ===================================================== */}
            <motion.div variants={fadeInUp} className="inline-block">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#03254C]/10 bg-[#03254C]/5 px-3.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#03254C] sm:text-xs">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#157327] opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#157327]" />
                </span>

                <span>Business Support & Consultation</span>
              </div>
            </motion.div>

            {/* =====================================================
                MAIN HEADLINE
            ===================================================== */}
            <motion.div variants={fadeInUp} className="space-y-2">
              <h1 className="text-2xl font-extrabold leading-[1.15] tracking-tight text-[#03254C] sm:text-3xl lg:text-[34px] xl:text-[38px]">
                Let&apos;s Build
                <br className="hidden sm:inline" />
                <span className="text-[#F26522]"> Your Business </span>
                <span className="text-[#157327]">Growth.</span>
              </h1>

              <div className="mx-auto mt-2.5 h-1 w-12 rounded-full bg-gradient-to-r from-[#F26522] to-[#157327] lg:mx-0" />
            </motion.div>

            {/* =====================================================
                DESCRIPTION
            ===================================================== */}
            <motion.p
              variants={fadeInUp}
              className="mx-auto max-w-[620px] text-xs font-normal leading-relaxed text-[#475569] sm:text-sm lg:mx-0"
            >
              Connect with AarambhGrow for practical support across business consulting, funding, financial advisory, compliance,
              registrations, certifications, branding, and business growth.
            </motion.p>

            {/* =====================================================
                FEATURE CARDS
            ===================================================== */}
            <motion.div variants={fadeInUp} className="mx-auto grid max-w-[700px] grid-cols-1 gap-3 pt-2.5 sm:grid-cols-3 lg:mx-0">
              {features.map((item) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    whileHover={{
                      y: -3,
                      transition: {
                        duration: 0.2,
                        ease: "easeOut",
                      },
                    }}
                    className="flex items-start gap-3 rounded-md border border-slate-200/80 bg-white p-3 text-left shadow-2xs transition-shadow duration-300 hover:shadow-md"
                  >
                    {/* Icon */}
                    <div className={`shrink-0 rounded-md p-2 ${item.bgColor} ${item.iconColor}`}>
                      <Icon className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
                    </div>

                    {/* Text */}
                    <div className="min-w-0">
                      <h2 className="text-xs font-bold text-[#03254C]">{item.title}</h2>

                      <p className="mt-0.5 text-[10px] font-normal leading-tight text-[#64748B] sm:text-[11px]">{item.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
