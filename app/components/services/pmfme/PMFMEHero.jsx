"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle, ShieldCheck } from "lucide-react";

export default function PMFMEP() {
  const trustPoints = [
    "Investor Readiness",
    "Seed Capital Strategy",
    "Pitch Preparation",
  ];

  return (
    <section className="relative min-h-[500px] w-full overflow-hidden bg-[#F8FAFC] font-sans sm:min-h-[520px] lg:min-h-[460px]">
      {/* Seed Funding Access Background */}
      <Image
        src="/images/PMFME.jpg"
        alt="PMFMEP Funding Opportunities for Startups"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Very Light Readability Layer */}
      <div className="absolute inset-0 bg-white/5" />

      {/* Main Container */}
      <div className="relative z-10 mx-auto flex min-h-[500px] w-full max-w-[1340px] items-center px-5 py-10 sm:px-8 sm:py-12 lg:min-h-[460px] lg:px-12 xl:px-16">
        <div className="w-full max-w-[760px]">
          {/* Badge */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#03254C]/10 bg-white/90 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#03254C] shadow-sm backdrop-blur-sm sm:text-[11px]">
            <span className="h-2 w-2 rounded-full bg-[#157327]" />
            INVESTMENT SUPPORT
          </div>

          {/* Main Heading */}
          <h1 className="max-w-[680px] text-[30px] font-extrabold leading-[1.1] tracking-[-0.025em] text-[#03254C] sm:text-[36px] lg:text-[38px]">
            Get Your Startup Ready for{" "}
            <span className="text-[#157327]">Seed Investors</span>
          </h1>

          {/* Accent Line */}
          <div className="mt-3 h-[3px] w-12 rounded-full bg-gradient-to-r from-[#F26522] to-[#157327]" />

          {/* Highlight */}
          <h2 className="mt-3 text-base font-bold leading-tight text-[#F26522] sm:text-lg">
            Build Investor Confidence{" "}
            <span className="text-[#03254C]">
              Before You Raise Capital
            </span>
          </h2>

          {/* Description */}
          <p className="mt-3 max-w-[620px] text-[12px] leading-[1.6] text-[#475569] sm:text-[13px] lg:text-[14px]">
            Prepare your startup for seed-stage fundraising with structured
            support for investment readiness, funding requirements, business
            documentation, pitch preparation, and investor opportunity
            research.
          </p>

          {/* Trust Points */}
          <div className="mt-4 flex flex-wrap gap-2">
            {trustPoints.map((item) => (
              <div
                key={item}
                className="inline-flex items-center gap-1.5 rounded-full border border-[#E2E8F0] bg-white/90 px-3 py-1.5 text-[10px] font-semibold text-[#03254C] shadow-sm backdrop-blur-sm sm:text-[11px]"
              >
                <ShieldCheck className="h-3.5 w-3.5 text-[#157327]" />
                {item}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-5 flex flex-wrap items-center gap-3">
            {/* Primary CTA */}
            <Link
              href="#seed-funding-access-content"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-[#F26522] px-5 py-2.5 text-xs font-bold text-white shadow-md transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-[#df5516] hover:shadow-[0_8px_20px_rgba(242,101,34,0.28)] active:translate-y-0 sm:px-6 sm:py-3 sm:text-sm"
            >
              {/* Moving Shine */}
              <span className="absolute inset-y-0 -left-[80%] w-[45%] rotate-[20deg] bg-white/25 blur-sm transition-all duration-700 ease-out group-hover:left-[130%]" />

              <span className="relative z-10">
                Prepare for Fundraising
              </span>

              <ArrowRight className="relative z-10 h-3.5 w-3.5 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:scale-110" />
            </Link>

            {/* Secondary CTA */}
            <Link
              href="/contact-us"
              className="group inline-flex items-center gap-2 rounded-full border border-[#03254C]/60 bg-white/90 px-5 py-2.5 text-xs font-bold text-[#03254C] shadow-sm backdrop-blur-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#03254C] hover:bg-white hover:shadow-[0_8px_18px_rgba(3,37,76,0.12)] active:translate-y-0 sm:px-6 sm:py-3 sm:text-sm"
            >
              <span>Discuss Funding Needs</span>

              <MessageCircle className="h-3.5 w-3.5 transition-all duration-300 ease-out group-hover:translate-x-0.5 group-hover:scale-110" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}