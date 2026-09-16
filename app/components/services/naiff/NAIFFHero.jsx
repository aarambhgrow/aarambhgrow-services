"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle, Tractor, Warehouse, Sprout } from "lucide-react";
import { motion } from "framer-motion";

const TRUST_POINTS = [
  {
    title: "Agri Infrastructure",
    description: "Post-harvest & community assets",
    icon: Tractor,
    color: "text-[#157327]",
    bg: "bg-[#157327]/10",
  },
  {
    title: "Storage & Processing",
    description: "Cold chains, warehouses & units",
    icon: Warehouse,
    color: "text-[#F26522]",
    bg: "bg-[#F26522]/10",
  },
  {
    title: "Project Planning",
    description: "DPR & interest subvention aid",
    icon: Sprout,
    color: "text-[#157327]",
    bg: "bg-[#157327]/10",
  },
];

export default function NAIFF() {
  return (
    <section className="relative min-h-0 w-full overflow-hidden bg-[#EFFFFD] font-sans sm:min-h-[520px] lg:min-h-[460px]">
      {/* Background Image Container (Desktop/Tablet) */}
      <div className="absolute right-0 top-0 hidden h-full w-[60%] sm:block lg:w-[50%] xl:w-[45%]">
        <Image
          src="/images/NAIFF.png"
          alt="Agriculture Infrastructure Fund support for agricultural infrastructure projects"
          fill
          priority
          sizes="(max-width: 1024px) 60vw, (max-width: 1280px) 50vw, 45vw"
          className="object-contain object-right scale-110 origin-right pr-6"
        />
      </div>

      {/* Light Readability Layer */}
      <div className="absolute inset-0 bg-white/5" />

      {/* Main Container */}
      <div className="relative z-10 mx-auto flex min-h-0 w-full max-w-[1340px] flex-col items-center px-5 pt-6 pb-0 sm:min-h-[500px] sm:flex-row sm:px-8 sm:py-12 lg:min-h-[460px] lg:px-12 xl:px-16">
        <motion.div
          className="w-full max-w-[760px] shrink-0"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#03254C]/10 bg-white/95 px-3.5 py-1.5 text-[9px] font-bold uppercase tracking-[0.12em] text-[#03254C] shadow-sm backdrop-blur-sm sm:mb-4 sm:px-3.5 sm:text-[11px]">
            <span className="h-2 w-2 shrink-0 rounded-full bg-[#157327]" />
            AGRI FINANCE
          </div>

          {/* Heading */}
          <h1 className="max-w-[680px] text-[24px] font-extrabold leading-[1.15] tracking-[-0.025em] text-[#03254C] sm:text-[36px] lg:text-[38px]">
            Build Better Agricultural Infrastructure With <span className="text-[#157327]">AIF Support</span>
          </h1>

          {/* Accent Line */}
          <div className="mt-2 h-[3px] w-12 rounded-full bg-gradient-to-r from-[#F26522] to-[#157327] sm:mt-3" />

          {/* Subtitle */}
          <h2 className="mt-2.5 text-[13px] font-bold leading-tight text-[#F26522] sm:mt-3 sm:text-lg">
            Agriculture Infrastructure Fund <span className="text-[#03254C]">(AIF)</span>
          </h2>

          {/* Description */}
          <p className="mt-2 max-w-[620px] text-[11px] leading-[1.45] text-[#475569] sm:mt-3 sm:text-[13px] sm:leading-[1.6] lg:text-[14px]">
            Structured support for eligible agricultural infrastructure and related projects, with assistance in project assessment, funding
            requirements, financial planning, documentation, and application preparation.
          </p>

          {/* Feature Cards Grid */}
          <div className="mt-4 grid w-full max-w-[600px] grid-cols-1 gap-2.5 sm:mt-5 sm:grid-cols-3 sm:gap-2.5">
            {TRUST_POINTS.map(({ title, description, icon: Icon, color, bg }) => (
              <div
                key={title}
                className="group flex items-center gap-3 rounded-xl border border-[#E2E8F0] bg-white/95 px-3.5 py-2.5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-[2px] hover:shadow-md sm:gap-2.5 sm:rounded-lg sm:px-3 sm:py-2.5"
              >
                <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg sm:h-8 sm:w-8 ${bg}`}>
                  <Icon className={`h-4 w-4 sm:h-3.5 sm:w-3.5 ${color}`} strokeWidth={2} />
                </div>
                <div className="min-w-0">
                  <h3 className="text-[12px] font-bold leading-tight text-[#03254C] sm:text-xs">{title}</h3>
                  <p className="mt-0.5 text-[9.5px] leading-tight text-[#64748B] sm:text-[10px]">{description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="mt-4 flex flex-col gap-3 sm:mt-5 sm:flex-row sm:flex-wrap sm:items-center">
            {/* Primary CTA */}
            <Link
              href="#naiff-content"
              className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-[#F26522] px-6 py-3 text-[12px] font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#df5516] hover:shadow-lg sm:w-auto sm:text-sm"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <span className="relative">Discuss Your Agri Project</span>
              <ArrowRight className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            {/* Secondary CTA (Desktop Only) */}
            <Link
              href="/contact-us"
              className="hidden group inline-flex items-center gap-2 rounded-full border border-[#03254C]/60 bg-white/90 px-6 py-3 text-sm font-bold text-[#03254C] shadow-sm backdrop-blur-sm transition-all duration-300 hover:bg-white sm:inline-flex"
            >
              <span>Plan Infrastructure Funding</span>
              <MessageCircle className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
            </Link>
          </div>
        </motion.div>

        {/* Mobile Graphic */}
        <div className="relative mt-6 flex w-full justify-center sm:hidden">
          <Image
            src="/images/NAIFF.png"
            alt="Agriculture Infrastructure Fund support for agricultural infrastructure projects"
            width={650}
            height={500}
            priority
            sizes="82vw"
            className="h-auto w-[82vw] max-w-[330px] object-contain"
          />
        </div>
      </div>
    </section>
  );
}
