"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function PMFMEP() {
  const trustPoints = ["Investor Readiness", "Seed Capital Strategy", "Pitch Preparation"];

  return (
    <section className="relative w-full overflow-hidden bg-[#EFFFFD] font-sans py-8 sm:py-12">
      {/* Container Grid */}
      <div className="mx-auto grid max-w-[1340px] grid-cols-1 items-center gap-8 px-5 sm:px-8 lg:grid-cols-12 lg:px-12 xl:px-16">
        {/* Left Column (Content) */}
        <motion.div
          className="lg:col-span-7 xl:col-span-7"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#03254C]/10 bg-white/95 px-3.5 py-1.5 text-[9px] font-bold uppercase tracking-[0.12em] text-[#03254C] shadow-sm backdrop-blur-sm sm:mb-4 sm:text-[11px]">
            <span className="h-2 w-2 shrink-0 rounded-full bg-[#157327]" />
            INVESTMENT SUPPORT
          </div>

          {/* Heading */}
          <h1 className="text-[24px] font-extrabold leading-[1.15] tracking-[-0.025em] text-[#03254C] sm:text-[34px] lg:text-[36px]">
            Get Your Startup Ready for <span className="text-[#157327]">Seed Investors</span>
          </h1>

          {/* Accent Line */}
          <div className="mt-2 h-[3px] w-12 rounded-full bg-gradient-to-r from-[#F26522] to-[#157327] sm:mt-3" />

          {/* Subtitle */}
          <h2 className="mt-2.5 text-[13px] font-bold leading-tight text-[#F26522] sm:mt-3 sm:text-lg">
            Build Investor Confidence <span className="text-[#03254C]">Before You Raise Capital</span>
          </h2>

          {/* Description */}
          <p className="mt-2 max-w-[620px] text-[11px] leading-[1.45] text-[#475569] sm:mt-3 sm:text-[13px] sm:leading-[1.6] lg:text-[14px]">
            Prepare your startup for seed-stage fundraising with structured support for investment readiness, funding requirements, business
            documentation, pitch preparation, and investor opportunity research.
          </p>

          {/* Trust Points */}
          <div className="mt-4 flex flex-wrap gap-2 sm:mt-5">
            {trustPoints.map((item) => (
              <div
                key={item}
                className="inline-flex items-center gap-1.5 rounded-full border border-[#E2E8F0] bg-white/95 px-3 py-1.5 text-[10px] font-semibold text-[#03254C] shadow-sm backdrop-blur-sm sm:text-[11px]"
              >
                <ShieldCheck className="h-3.5 w-3.5 text-[#157327]" />
                {item}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="#seed-funding-access-content"
              className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-[#F26522] px-6 py-3 text-[12px] font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#df5516] sm:w-auto sm:text-sm"
            >
              <span className="relative z-10">Prepare for Fundraising</span>
              <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              href="/contact-us"
              className="hidden group inline-flex items-center gap-2 rounded-full border border-[#03254C]/60 bg-white/90 px-6 py-3 text-sm font-bold text-[#03254C] shadow-sm backdrop-blur-sm transition-all duration-300 hover:bg-white sm:inline-flex"
            >
              <span>Discuss Funding Needs</span>
              <MessageCircle className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
            </Link>
          </div>
        </motion.div>

        {/* Right Column (Side Graphic Image - Absolute Right Side Alignment) */}
        <div className="absolute right-4 lg:right-8 top-[55%] hidden -translate-y-1/2 items-center justify-end sm:flex sm:w-[48%] lg:w-[42%] xl:w-[38%] h-[85%] pt-4">
          <Image
            src="/images/PMFME.jpg"
            alt="PMFMEP Funding Opportunities for Startups"
            fill
            priority
            sizes="(max-width: 1024px) 48vw, (max-width: 1280px) 42vw, 38vw"
            className="object-contain object-center"
          />
        </div>

        {/* Mobile View Image Block */}
        <div className="flex w-full justify-center sm:hidden">
          <div className="relative aspect-[4/3] h-[280px] w-full">
            <Image
              src="/images/PMFME.jpg"
              alt="PMFMEP Funding Opportunities for Startups"
              fill
              priority
              sizes="100vw"
              className="object-contain object-center scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
