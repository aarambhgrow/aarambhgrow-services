"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function CCTermLoans() {
  const trustPoints = ["Working Capital", "Asset Finance", "Expansion Finance"];

  return (
    <section className="relative min-h-[500px] w-full overflow-hidden bg-[#F8FAFC] font-sans sm:min-h-[520px] lg:min-h-[460px]">
      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.025 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute inset-0"
      >
        <Image
          src="/images/cc-term-loans.png"
          alt="Cash Credit and Term Loan Finance for Business"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>

      {/* Light Readability Layer */}
      <div className="absolute inset-0 bg-white/5" />

      {/* Main Container */}
      <div className="relative z-10 mx-auto flex min-h-[500px] w-full max-w-[1340px] items-center px-5 py-10 sm:px-8 sm:py-12 lg:min-h-[460px] lg:px-12 xl:px-16">
        <div className="w-full max-w-[760px]">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#03254C]/10 bg-white/90 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#03254C] shadow-sm backdrop-blur-sm sm:text-[11px]"
          >
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                delay: 0.25,
                duration: 0.35,
              }}
              className="h-2 w-2 rounded-full bg-[#157327]"
            />
            Business Finance
          </motion.div>

          {/* Heading */}
          <div className="overflow-hidden">
            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.12,
                duration: 0.75,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="max-w-[680px] text-[30px] font-extrabold leading-[1.1] tracking-[-0.025em] text-[#03254C] sm:text-[36px] lg:text-[38px]"
            >
              Choose the Right Finance for{" "}
              <span className="relative text-[#157327]">
                Working Capital & Expansion
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{
                    delay: 0.8,
                    duration: 0.6,
                    ease: "easeOut",
                  }}
                  className="absolute -bottom-1 left-0 h-[2px] w-full origin-left rounded-full bg-gradient-to-r from-[#F26522] to-[#157327]"
                />
              </span>
            </motion.h1>
          </div>

          {/* Accent */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 48 }}
            transition={{
              delay: 0.75,
              duration: 0.5,
              ease: "easeOut",
            }}
            className="mt-3 h-[3px] rounded-full bg-gradient-to-r from-[#F26522] to-[#157327]"
          />

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.35,
              duration: 0.6,
            }}
            className="mt-4 max-w-[620px] text-[12px] leading-[1.6] text-[#475569] sm:text-[13px] lg:text-[14px]"
          >
            Structured support for businesses evaluating Cash Credit and Term Loan
            <br />
             requirements for inventory, receivables, operations, machinery, equipment,
            <br />
             infrastructure, and business expansion.
          </motion.p>

          {/* Trust Points */}
          <div className="mt-4 flex flex-wrap gap-2">
            {trustPoints.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.5 + index * 0.1,
                  duration: 0.45,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -2,
                  scale: 1.02,
                }}
                className="group inline-flex items-center gap-1.5 rounded-full border border-[#E2E8F0] bg-white/90 px-3 py-1.5 text-[10px] font-semibold text-[#03254C] shadow-sm backdrop-blur-sm transition-shadow duration-300 hover:shadow-md sm:text-[11px]"
              >
                <ShieldCheck className="h-3.5 w-3.5 text-[#157327] transition-transform duration-300 group-hover:scale-110" />

                {item}
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.72,
              duration: 0.6,
              ease: "easeOut",
            }}
            className="mt-5 flex flex-wrap items-center gap-3"
          >
            {/* Primary CTA */}
            <Link
              href="#cc-term-loans-content"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-[#F26522] px-5 py-2.5 text-xs font-bold text-white shadow-md transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-[#df5516] hover:shadow-[0_8px_20px_rgba(242,101,34,0.28)] active:translate-y-0 sm:px-6 sm:py-3 sm:text-sm"
            >
              {/* Shine */}
              <span className="absolute inset-y-0 -left-[80%] w-[45%] rotate-[20deg] bg-white/25 blur-sm transition-all duration-700 ease-out group-hover:left-[130%]" />

              <span className="relative z-10">Assess Your Finance Need</span>

              <ArrowRight className="relative z-10 h-3.5 w-3.5 transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110" />
            </Link>

            {/* Secondary CTA */}
            <Link
              href="/contact-us"
              className="group inline-flex items-center gap-2 rounded-full border border-[#03254C]/60 bg-white/90 px-5 py-2.5 text-xs font-bold text-[#03254C] shadow-sm backdrop-blur-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#03254C] hover:bg-white hover:shadow-[0_8px_18px_rgba(3,37,76,0.12)] active:translate-y-0 sm:px-6 sm:py-3 sm:text-sm"
            >
              <span>Discuss Your Finance Needs</span>

              <MessageCircle className="h-3.5 w-3.5 transition-all duration-300 group-hover:translate-x-0.5 group-hover:scale-110" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
