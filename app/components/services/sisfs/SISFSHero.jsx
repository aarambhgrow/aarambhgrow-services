"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle, Lightbulb, Settings, BarChart3, FileCheck2, ShieldCheck, Landmark, Rocket } from "lucide-react";
import { motion } from "framer-motion";

export default function SISFS() {
  const trustPoints = ["Scheme Readiness", "Prototype Support", "Application Preparation"];

  const journey = [
    {
      icon: Lightbulb,
      title: "Idea",
      subtitle: "Prototype",
      color: "#157327",
      bg: "bg-[#157327]/10",
    },
    {
      icon: Settings,
      title: "Prototype",
      subtitle: "Validation",
      color: "#2563EB",
      bg: "bg-blue-500/10",
    },
    {
      icon: BarChart3,
      title: "Validation",
      subtitle: "Market",
      color: "#F26522",
      bg: "bg-[#F26522]/10",
    },
  ];

  return (
    <section className="relative min-h-[500px] w-full overflow-hidden bg-[#F8FAFC] font-sans sm:min-h-[520px] lg:min-h-[460px]">
      {/* SISFS Background Image — KEEP THIS */}
      <Image
        src="/images/SISFS.png"
        alt="SISFS Funding Support for Innovation-Led Startups"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Very light readability layer — background remains visible */}
      <div className="absolute inset-0 bg-white/5" />

      {/* Main Container — SAME WIDTH & HEIGHT */}
      <div className="relative z-10 mx-auto flex min-h-[500px] w-full max-w-[1340px] items-center px-5 py-10 sm:px-8 sm:py-12 lg:min-h-[460px] lg:px-12 xl:px-16">
        <div className="w-full max-w-[760px]">
          {/* Badge */}
          <motion.div
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#03254C]/10 bg-white/90 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#03254C] shadow-sm backdrop-blur-sm sm:text-[11px]"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="h-2 w-2 rounded-full bg-[#157327]" />
            STARTUP INDIA
          </motion.div>

          {/* Heading */}
          <motion.h1
            className="max-w-[680px] text-[30px] font-extrabold leading-[1.1] tracking-[-0.025em] text-[#03254C] sm:text-[36px] lg:text-[38px]"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
          >
            SISFS Funding Support for <span className="text-[#157327]">Innovation-Led Startups</span>
          </motion.h1>

          {/* Accent */}
          <motion.div
            className="mt-3 h-[3px] w-12 rounded-full bg-gradient-to-r from-[#F26522] to-[#157327]"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{ transformOrigin: "left" }}
          />

          {/* Highlight */}
          <motion.h2
            className="mt-3 text-base font-bold leading-tight text-[#F26522] sm:text-lg"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            Startup India Seed Fund Scheme
          </motion.h2>

          {/* Description */}
          <motion.p
            className="mt-3 max-w-[620px] text-[12px] leading-[1.6] text-[#475569] sm:text-[13px] lg:text-[14px]"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.42 }}
          >
            Prepare your startup for the Startup India Seed Fund Scheme with structured support for eligibility review, proof of concept,
            prototype development, product trials, market validation, and funding documentation.
          </motion.p>

          {/* Trust Points */}
          <motion.div
            className="mt-4 flex flex-wrap gap-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.48 }}
          >
            {trustPoints.map((item) => (
              <div
                key={item}
                className="inline-flex items-center gap-1.5 rounded-full border border-[#E2E8F0] bg-white/90 px-3 py-1.5 text-[10px] font-semibold text-[#03254C] shadow-sm backdrop-blur-sm sm:text-[11px]"
              >
                <ShieldCheck className="h-3.5 w-3.5 text-[#157327]" />
                {item}
              </div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            className="mt-5 flex flex-wrap items-center gap-3"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.58 }}
          >
            <Link
              href="#sisfs-content"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-[#F26522] px-5 py-2.5 text-xs font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#df5516] hover:shadow-lg sm:px-6 sm:py-3 sm:text-sm"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

              <span className="relative">Check SISFS Readiness</span>

              <ArrowRight className="relative h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              href="/contact-us"
              className="group inline-flex items-center gap-2 rounded-full border border-[#03254C]/60 bg-white/90 px-5 py-2.5 text-xs font-bold text-[#03254C] shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-md sm:px-6 sm:py-3 sm:text-sm"
            >
              Discuss Your Startup
              <MessageCircle className="h-3.5 w-3.5 transition-transform duration-300 group-hover:scale-110" />
            </Link>
          </motion.div>
        </div>

        {/* Right-side content is intentionally NOT added here.
            Your SISFS.png already contains the complete visual. */}
      </div>
    </section>
  );
}
