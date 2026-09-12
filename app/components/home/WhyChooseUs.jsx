"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Users, Briefcase, Calendar, ShieldCheck, Check } from "lucide-react";

const features = [
  "Startup Funding & Government Scheme Guidance",
  "MSME Loans, Grants & Credit Support",
  "Eligibility Assessment & Funding Strategy",
  "Project Reports & Documentation Support",
  "Transparent Process with Clear Guidance",
  "Dedicated Support from Application to Approval",
];

const stats = [
  { icon: Users, value: "1000+", label: "Clients Assisted", iconBg: "bg-[#FFF5F0]", iconColor: "text-[#F26522]" },
  { icon: Briefcase, value: "500+", label: "Projects Supported", iconBg: "bg-[#F0FDF4]", iconColor: "text-[#157327]" },
  { icon: Calendar, value: "20+", label: "Years of Experience", iconBg: "bg-indigo-50", iconColor: "text-indigo-600" },
  { icon: ShieldCheck, value: "98%", label: "Client Satisfaction", iconBg: "bg-[#FFF5F0]", iconColor: "text-[#F26522]" },
];

const ease = [0.22, 1, 0.36, 1];

export default function WhyChooseUs() {
  return (
    <section className="relative w-full overflow-hidden bg-[#fafafa] lg:bg-white">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, ease }}
        className="relative w-full"
      >
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 hidden lg:block">
          <Image src="/images/why1.png" alt="" fill priority sizes="100vw" className="object-contain object-right scale-120 origin-right" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-0 lg:min-h-[680px] lg:flex lg:flex-col lg:justify-center">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, ease }}
            className="mb-5 flex justify-center lg:mb-6 lg:justify-start"
          >
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#f26522]/15 bg-[#fff5f0] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-[#f26522] sm:text-[11px]">
              <span className="h-1 w-1 rounded-full bg-[#f26522]" />
              Why Choose AarambhGrow
              <span className="h-1 w-1 rounded-full bg-[#157327]" />
            </span>
          </motion.div>

          <div className="grid w-full grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-6">
            <motion.div
              initial={{ opacity: 0, x: -35, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.75, delay: 0.05, ease }}
              className="col-span-1 lg:col-span-8"
            >
              <h2 className="font-heading text-[26px] font-extrabold leading-[1.08] tracking-[-0.03em] text-[#0f2a4a] sm:text-[32px] lg:text-[38px]">
                Funding guidance
                <br className="hidden sm:block" />
                <span className="text-[#f26522]"> built around your business.</span>
              </h2>

              <p className="mt-3 max-w-2xl text-[12px] font-normal leading-[1.6] text-[#64748b] sm:mt-4 sm:text-[13px] lg:text-[14px]">
                We help startups, MSMEs and growing businesses explore suitable funding opportunities, government schemes, grants and
                business finance with structured guidance from eligibility assessment through documentation and application support.
              </p>

              <div className="mt-4 space-y-2 sm:mt-5 sm:space-y-2.5">
                {features.map((item, idx) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.45, delay: 0.15 + idx * 0.06, ease }}
                    className="flex items-center gap-2.5"
                  >
                    <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#f26522]">
                      <Check className="h-2.5 w-2.5 stroke-[3] text-white" />
                    </span>
                    <span className="font-heading text-[11px] font-semibold leading-tight text-[#0f2a4a] sm:text-[12px] lg:text-[13px]">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* 4 CARDS — ALWAYS ONE ROW */}
              <div className="mt-5 grid grid-cols-4 gap-2 sm:mt-6 sm:gap-2.5 lg:max-w-[650px]">
                {stats.map((stat, i) => {
                  const Icon = stat.icon;

                  return (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.5, delay: 0.25 + i * 0.08, ease }}
                      whileHover={{ y: -3 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex min-h-[72px] flex-col items-center justify-center rounded-md border border-[#e2e8f0] bg-white/90 px-1 py-1.5 text-center backdrop-blur-[2px] transition-transform duration-300 sm:min-h-[82px] sm:px-2 sm:py-2"
                    >
                      <div className={`mb-1 flex h-6 w-6 items-center justify-center rounded-full ${stat.iconBg} sm:h-7 sm:w-7`}>
                        <Icon className={`h-2.5 w-2.5 sm:h-3 sm:w-3 ${stat.iconColor}`} />
                      </div>
                      <span className="mb-0.5 font-heading text-[14px] font-bold leading-none text-[#0f2a4a] sm:text-[16px]">
                        {stat.value}
                      </span>
                      <span className="text-[7px] font-normal leading-tight text-[#64748b] sm:text-[8.5px]">{stat.label}</span>
                    </motion.div>
                  );
                })}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: 0.55, ease }}
                className="mt-4 sm:mt-5"
              >
                <Link
                  href="/about"
                  className="group inline-flex items-center gap-2 font-heading text-[10px] font-bold text-[#f26522] transition-colors duration-300 hover:text-[#03254c] sm:text-[11px] lg:text-[12px]"
                >
                  Learn more about our funding and business support approach
                  <span className="text-sm transition-transform duration-300 group-hover:translate-x-1">→</span>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
