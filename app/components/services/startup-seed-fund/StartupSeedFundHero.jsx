"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Users, Rocket, Clock } from "lucide-react";
import { motion } from "framer-motion";

const FEATURES = [
  {
    icon: Users,
    title: "Partner-Led",
    description: "Guidance from industry leaders",
    color: "text-[#157327]",
    bg: "bg-[#157327]/10",
  },
  {
    icon: Rocket,
    title: "End-to-End",
    description: "From registration to scaling",
    color: "text-[#F26522]",
    bg: "bg-[#F26522]/10",
  },
  {
    icon: Clock,
    title: "Rapid Support",
    description: "Dedicated help within 24h",
    color: "text-[#157327]",
    bg: "bg-[#157327]/10",
  },
];

export default function StartupSeedFund() {
  return (
    <section className="relative w-full overflow-hidden bg-[#E8F9FF] font-sans sm:min-h-[520px] lg:min-h-[460px]">
      {/* Background Image (Desktop/Tablet) — Untouched */}
      <Image
        src="/images/startup-seed-fund.png"
        alt="Startup Seed Fund support"
        fill
        priority
        sizes="100vw"
        className="hidden sm:block object-contain object-right scale-[0.75] origin-right"
      />

      {/* Readability layer */}
      <div className="absolute inset-0 bg-white/5" />

      {/* Main Container */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1340px] flex-col items-center px-5 pt-6 pb-0 sm:flex-row sm:px-8 sm:py-12 lg:px-12 xl:px-16">
        <motion.div
          className="w-full max-w-[760px] shrink-0"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#03254C]/10 bg-white px-3.5 py-1.5 text-[9px] font-bold uppercase tracking-[0.12em] text-[#03254C] shadow-sm backdrop-blur-sm sm:mb-4 sm:px-3.5 sm:text-[11px]">
            <span className="h-2 w-2 shrink-0 rounded-full bg-[#157327]" />
            STRATEGIC STARTUP FUNDING
          </div>

          {/* Headline */}
          <h1 className="max-w-[680px] text-[24px] font-extrabold leading-[1.15] tracking-[-0.025em] text-[#03254C] sm:text-[36px] lg:text-[38px]">
            Turn Your Startup Idea Into{" "}
            <span className="text-[#157327]">Fundable Business</span>
          </h1>

          <div className="mt-2 h-[3px] w-12 rounded-full bg-gradient-to-r from-[#F26522] to-[#157327] sm:mt-3" />

          <h2 className="mt-2.5 text-[13px] font-bold leading-tight text-[#F26522] sm:mt-3 sm:text-lg">
            Seed Funding for Early-Stage Startups
          </h2>

          <p className="mt-2 max-w-[620px] text-[11px] leading-[1.45] text-[#475569] sm:mt-3 sm:text-[13px] sm:leading-[1.6] lg:text-[14px]">
            Build a stronger funding foundation for your early-stage startup with structured support across funding assessment, business planning, documentation, and seed funding application preparation.
          </p>

          {/* Feature List — Full width card layout matching reference screenshot */}
          <div className="mt-4 flex flex-col gap-2.5 sm:mt-5 sm:flex-row sm:flex-wrap sm:gap-2.5">
            {FEATURES.map(({ icon: Icon, title, description, color, bg }) => (
              <div
                key={title}
                className="group flex w-full items-center gap-3 rounded-xl border border-[#E2E8F0] bg-white/95 px-3.5 py-2.5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-[2px] hover:shadow-md sm:w-auto sm:inline-flex sm:gap-2.5 sm:rounded-lg sm:px-3 sm:py-2.5"
              >
                <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg sm:h-8 sm:w-8 ${bg}`}>
                  <Icon className={`h-4 w-4 ${color}`} strokeWidth={2} />
                </div>
                <div className="min-w-0">
                  <h3 className="text-[12px] font-bold leading-tight text-[#03254C] sm:text-xs">
                    {title}
                  </h3>
                  <p className="mt-0.5 text-[9.5px] leading-tight text-[#64748B] sm:text-[10px]">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action Button */}
          <div className="mt-4 sm:mt-5">
            <Link
              href="#startup-seed-fund-content"
              className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-[#F26522] px-6 py-3 text-[12px] font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#df5516] hover:shadow-lg sm:w-auto sm:text-sm"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <span className="relative">Explore Seed Funding</span>
              <ArrowRight className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>

        {/* Mobile Graphic — Centered bottom layout */}
        <div className="relative mt-6 flex w-full justify-center sm:hidden">
          <Image
            src="/images/startup-seed-fund.png"
            alt="Startup Seed Fund support"
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