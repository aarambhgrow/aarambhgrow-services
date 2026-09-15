"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Users, Rocket, Clock } from "lucide-react";
import { motion } from "framer-motion";

export default function StartupSeedFund() {
  const features = [
    {
      icon: Users,
      title: "Partner-Led",
      description: "Guidance from industry leaders",
      iconColor: "text-[#157327]",
      iconBg: "bg-[#157327]/10",
    },
    {
      icon: Rocket,
      title: "End-to-End",
      description: "From registration to scaling",
      iconColor: "text-[#F26522]",
      iconBg: "bg-[#F26522]/10",
    },
    {
      icon: Clock,
      title: "Rapid Support",
      description: "Dedicated help within 24h",
      iconColor: "text-[#157327]",
      iconBg: "bg-[#157327]/10",
    },
  ];

  return (
    <section className="relative min-h-[500px] w-full overflow-hidden bg-[#F8FAFC] font-sans sm:min-h-[520px] lg:min-h-[460px]">
      {/* Background */}
      <Image
        src="/images/startup-seed-fund.png"
        alt="Startup Seed Fund support for early-stage startups"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Main Container */}
      <div className="relative z-10 mx-auto flex min-h-[500px] w-full max-w-[1340px] items-center px-5 py-10 sm:px-8 sm:py-12 lg:min-h-[460px] lg:px-12 xl:px-16">
        <motion.div
          className="w-full max-w-[760px]"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {/* Badge */}
          <motion.div
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#03254C]/10 bg-white/90 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#03254C] shadow-sm backdrop-blur-sm sm:text-[11px]"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="h-2 w-2 rounded-full bg-[#157327]" />
            Strategic Startup Funding
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className="max-w-[680px] text-[30px] font-extrabold leading-[1.1] tracking-[-0.025em] text-[#03254C] sm:text-[36px] lg:text-[38px]"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
          >
            Turn Your Startup Idea Into a <span className="text-[#157327]">Fundable Business</span>
          </motion.h1>

          {/* Accent Line */}
          <motion.div
            className="mt-3 h-[3px] w-12 rounded-full bg-gradient-to-r from-[#F26522] to-[#157327]"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.3,
              ease: "easeOut",
            }}
            style={{ transformOrigin: "left" }}
          />

          {/* Highlight */}
          <motion.h2
            className="mt-3 text-base font-bold leading-tight text-[#F26522] sm:text-lg"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            Seed Funding for Early-Stage Startups
          </motion.h2>

          {/* Description */}
          <motion.p
            className="mt-3 max-w-[620px] text-[12px] leading-[1.6] text-[#475569] sm:text-[13px] lg:text-[14px]"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.42 }}
          >
            Build a stronger funding foundation for your early-stage startup with structured support across funding assessment, business
            planning, documentation, and seed funding application preparation.
          </motion.p>

          {/* Feature Cards */}
          <motion.div
            className="mt-5 grid w-full max-w-[600px] grid-cols-1 gap-2.5 sm:grid-cols-3"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.45,
                    delay: 0.55 + index * 0.1,
                  }}
                  className="group flex items-center gap-2.5 rounded-lg border border-[#E2E8F0] bg-white/95 px-3 py-2.5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-[2px] hover:shadow-md"
                >
                  <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-md ${feature.iconBg}`}>
                    <Icon className={`h-4 w-4 ${feature.iconColor}`} strokeWidth={2} />
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-[11px] font-bold leading-tight text-[#03254C] sm:text-xs">{feature.title}</h3>

                    <p className="mt-0.5 text-[9px] leading-tight text-[#64748B] sm:text-[10px]">{feature.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* CTA */}
          <motion.div
            className="mt-5"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.9 }}
          >
            <Link
              href="#startup-seed-fund-content"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-[#F26522] px-5 py-2.5 text-xs font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#df5516] hover:shadow-lg sm:px-6 sm:py-3 sm:text-sm"
            >
              {/* Subtle Shine */}
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

              <span className="relative">Explore Seed Funding</span>

              <ArrowRight className="relative h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
