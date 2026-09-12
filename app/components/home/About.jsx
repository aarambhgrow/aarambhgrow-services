"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Star, ArrowRight } from "lucide-react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.1,
    },
  },
};

const fadeUpVariants = {
  hidden: {
    opacity: 0,
    y: 35,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function HomeAboutTeaser() {
  return (
    <section aria-labelledby="about-heading" className="w-full bg-[#fafafa] py-12 font-sans text-[#0f172a] sm:py-16">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.25,
        }}
        variants={containerVariants}
        className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8"
      >
        {/* Section Badge */}
        <motion.div variants={fadeUpVariants} className="mb-4 flex justify-center">
          <div className="group inline-flex cursor-default items-center gap-1.5 rounded-full border border-[#f26522]/20 bg-[#fff5f0] px-3.5 py-1 transition-all duration-300 hover:border-[#f26522]/40 hover:shadow-sm">
            <Star
              aria-hidden="true"
              className="h-3 w-3 fill-[#f26522] text-[#f26522] transition-transform duration-300 group-hover:rotate-45"
            />

            <span className="text-[11px] font-bold uppercase tracking-wider text-[#f26522]">Who We Are</span>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="mx-auto max-w-3xl text-center">
          {/* Heading */}
          <motion.h2
            id="about-heading"
            variants={fadeUpVariants}
            className="text-2xl font-black leading-tight tracking-tight text-[#0f2a4a] sm:text-3xl lg:text-4xl"
          >
            Empowering Businesses to Build, Grow & Scale
          </motion.h2>

          {/* Description */}
          <motion.div
            variants={fadeUpVariants}
            className="mx-auto mt-4 max-w-2xl space-y-3 text-xs leading-relaxed text-slate-600 sm:text-sm"
          >
            <p>
              We provide reliable business solutions that help entrepreneurs, startups, MSMEs, and established businesses move forward with
              confidence.
            </p>

            <p>
              From <strong className="font-semibold text-[#0f2a4a]">business registration and compliance</strong> to{" "}
              <strong className="font-semibold text-[#0f2a4a]">certifications, financial assistance, and growth solutions</strong>, we
              combine professional expertise with practical execution.
            </p>

            <p className="font-semibold text-[#157327]">Clear guidance. Practical solutions. Sustainable growth.</p>
          </motion.div>

          {/* CTA */}
          <motion.div variants={fadeUpVariants} className="mt-5">
            <Link
              href="/about"
              aria-label="Learn more about our business solutions"
              className="group inline-flex items-center gap-2 text-xs font-bold text-[#f26522] transition-colors duration-300 hover:text-[#0f2a4a]"
            >
              <span>Discover More</span>
              <ArrowRight aria-hidden="true" className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
