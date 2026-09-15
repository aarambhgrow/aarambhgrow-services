"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NAIFF() {
  return (
    <section className="relative min-h-[500px] w-full overflow-hidden bg-[#F8FAFC] font-sans sm:min-h-[520px] lg:min-h-[460px]">
      {/* AIF Background */}
      <Image
        src="/images/NAIFF.png"
        alt="Agriculture Infrastructure Fund support for agricultural infrastructure projects"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Light Readability Layer */}
      <div className="absolute inset-0 bg-white/5" />

      {/* Main Container */}
      <div className="relative z-10 mx-auto flex min-h-[500px] w-full max-w-[1340px] items-center px-5 py-10 sm:px-8 sm:py-12 lg:min-h-[460px] lg:px-12 xl:px-16">
        <div className="w-full max-w-[760px]">

          {/* Badge */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#03254C]/10 bg-white/90 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#03254C] shadow-sm backdrop-blur-sm sm:text-[11px]">
            <span className="h-2 w-2 rounded-full bg-[#157327]" />
            AGRI FINANCE
          </div>

          {/* SEO Heading */}
          <h1 className="max-w-[680px] text-[30px] font-extrabold leading-[1.1] tracking-[-0.025em] text-[#03254C] sm:text-[36px] lg:text-[38px]">
            Build Better Agricultural Infrastructure With{" "}
            <span className="text-[#157327]">AIF Support</span>
          </h1>

          {/* Accent */}
          <div className="mt-3 h-[3px] w-12 rounded-full bg-gradient-to-r from-[#F26522] to-[#157327]" />

          {/* Highlight */}
          <h2 className="mt-3 text-base font-bold leading-tight text-[#F26522] sm:text-lg">
            Agriculture Infrastructure Fund
          </h2>

          {/* SEO Description */}
          <p className="mt-3 max-w-[620px] text-[12px] leading-[1.6] text-[#475569] sm:text-[13px] lg:text-[14px]">
            Structured support for eligible agricultural infrastructure and
            related projects, with assistance in project assessment, funding
            requirements, financial planning, documentation, and application
            preparation.
          </p>

          {/* Primary CTA */}
          <div className="mt-5">
            <Link
              href="#naiff-content"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-[#F26522] px-5 py-2.5 text-xs font-bold text-white shadow-md transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-[#df5516] hover:shadow-[0_8px_20px_rgba(242,101,34,0.28)] active:translate-y-0 sm:px-6 sm:py-3 sm:text-sm"
            >
              <span className="absolute inset-y-0 -left-[80%] w-[45%] rotate-[20deg] bg-white/25 blur-sm transition-all duration-700 ease-out group-hover:left-[130%]" />

              <span className="relative z-10">
                Discuss Your Agri Project
              </span>
              <ArrowRight className="relative z-10 h-3.5 w-3.5 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:scale-110" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}