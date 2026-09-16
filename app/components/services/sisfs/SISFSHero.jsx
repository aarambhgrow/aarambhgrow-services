"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const TRUST_POINTS = ["Scheme Readiness", "Prototype Support", "Application Preparation"];

export default function SISFS() {
  return (
    <section className="relative min-h-0 w-full overflow-hidden bg-[#E8F9FF] font-sans sm:min-h-[520px] lg:min-h-[460px]">
      {/* Background Image (Desktop/Tablet) — Untouched */}
      <Image
        src="/images/SISFS.png"
        alt="SISFS Funding Support for Innovation-Led Startups"
        fill
        priority
        sizes="(max-width: 1024px) 35vw, (max-width: 1280px) 30vw, 28vw"
        className="hidden object-contain object-right scale-[0.85] origin-right pr-6 sm:block"
      />

      {/* Readability layer */}
      <div className="absolute inset-0 bg-white/5" />

      {/* Main Container */}
      <div className="relative z-10 mx-auto flex min-h-0 w-full max-w-[1340px] flex-col items-start px-5 pt-8 pb-0 sm:flex-row sm:items-center sm:px-8 sm:py-12 lg:min-h-[460px] lg:px-12 xl:px-16">
        <motion.div
          className="w-full max-w-[760px] shrink-0"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#03254C]/10 bg-white px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-[#03254C] shadow-xs sm:mb-4 sm:px-3.5 sm:text-[11px]">
            <span className="h-2 w-2 shrink-0 rounded-full bg-[#157327]" />
            STARTUP INDIA
          </div>

          {/* Heading */}
          <h1 className="max-w-[680px] text-[26px] font-extrabold leading-[1.15] tracking-[-0.02em] text-[#03254C] sm:text-[36px] lg:text-[38px]">
            SISFS Funding Support for <br className="sm:hidden" />
            <span className="text-[#157327]">Innovation-Led Startups</span>
          </h1>

          {/* Gradient Divider */}
          <div className="mt-2.5 h-[3px] w-12 rounded-full bg-gradient-to-r from-[#F26522] to-[#157327] sm:mt-3" />

          {/* Subtitle */}
          <h2 className="mt-2.5 text-[14px] font-bold leading-tight text-[#F26522] sm:mt-3 sm:text-lg">Startup India Seed Fund Scheme</h2>

          {/* Description */}
          <p className="mt-2 text-[12px] leading-[1.5] text-[#64748B] sm:mt-3 sm:text-[13px] sm:leading-[1.6] lg:text-[14px]">
            Prepare your startup for the Startup India Seed Fund Scheme with structured support <br />
            for eligibility review, proof of concept, prototype development, product trials, market validation <br /> 
            and funding documentation.
          </p>

          {/* Trust Points (Mobile Stacked Cards / Desktop Inline Badges) */}
          <div className="mt-4 flex flex-col gap-2.5 sm:mt-5 sm:flex-row sm:flex-wrap sm:gap-2.5">
            {TRUST_POINTS.map((item) => (
              <div
                key={item}
                className="flex w-full items-center gap-3.5 rounded-xl bg-white p-2.5 shadow-xs border border-[#E2E8F0]/60 sm:w-auto sm:inline-flex sm:gap-2.5 sm:rounded-lg sm:bg-white/95 sm:px-3 sm:py-2.5 sm:text-xs sm:shadow-sm"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#E8F9FF] text-[#157327] sm:h-auto sm:w-auto sm:bg-transparent">
                  <ShieldCheck className="h-5 w-5 sm:h-4 sm:w-4" />
                </div>
                <div className="flex flex-col sm:block">
                  <span className="text-[13px] font-bold text-[#03254C] sm:text-xs">{item}</span>
                  <span className="text-[11px] text-[#64748B] sm:hidden">Guidance & Structured Support</span>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action Buttons */}
          <div className="mt-5 flex flex-col gap-3 sm:mt-5 sm:flex-row sm:flex-wrap sm:items-center">
            {/* Primary Button */}
            <Link
              href="#sisfs-content"
              className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-[#F26522] py-3.5 text-[13px] font-bold text-white shadow-md transition-all duration-300 hover:bg-[#df5516] sm:w-auto sm:inline-flex sm:px-6 sm:py-3 sm:text-sm"
            >
              <span className="relative">Check SISFS Readiness</span>
              <ArrowRight className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            {/* Desktop-only secondary button */}
            <Link
              href="/contact-us"
              className="hidden group inline-flex items-center gap-2 rounded-full border border-[#03254C]/60 bg-white/90 px-6 py-3 text-sm font-bold text-[#03254C] shadow-sm backdrop-blur-sm transition-all duration-300 hover:bg-white sm:inline-flex"
            >
              <span>Discuss Your Startup</span>
              <MessageCircle className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
            </Link>
          </div>
        </motion.div>

        {/* Mobile Graphic — Matches Screenshot Layout */}
        <div className="relative mt-6 flex w-full justify-center pt-2 sm:hidden">
          <Image
            src="/images/SISFS.png"
            alt="SISFS Funding Support for Innovation-Led Startups"
            width={650}
            height={500}
            priority
            sizes="100vw"
            className="h-auto w-full max-w-[340px] object-contain"
          />
        </div>
      </div>
    </section>
  );
}
