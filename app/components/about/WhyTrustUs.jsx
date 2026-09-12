"use client";

import React from "react";
import { motion } from "framer-motion";
import { Compass, Briefcase, Eye } from "lucide-react";

export default function WhyTrustUs() {
  const trustReasons = [
    {
      icon: Compass,
      title: "Strategic Business Guidance",
      desc: "Practical business consulting focused on planning, funding, compliance, and sustainable business growth.",
      color: "#157327",
    },
    {
      icon: Briefcase,
      title: "Integrated Business Expertise",
      desc: "Experience across business consulting, financial advisory, government funding, compliance, and operations.",
      color: "#F26522",
    },
    {
      icon: Eye,
      title: "Clear & Transparent Support",
      desc: "Clear communication, structured guidance, and practical support throughout your business journey.",
      color: "#157327",
    },
  ];

  return (
    <section className="w-full border-t border-slate-100 bg-white py-10 font-sans text-[#03254C] sm:py-14 lg:py-20">
      {/* Outer Container with exact 1280px (max-w-7xl) width and responsive px-4 sm:px-6 lg:px-8 padding */}
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-8 sm:space-y-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mx-auto max-w-xl space-y-2 text-center"
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.5,
                delay: 0.05,
                ease: "easeOut",
              }}
              className="inline-flex rounded-full bg-[#157327]/10 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.18em] text-[#157327] sm:text-[10px]"
            >
              Trust & Credibility
            </motion.span>
            <h2 className="text-xl font-black leading-tight text-[#03254C] sm:text-2xl lg:text-[26px]">Why Businesses Trust AarambhGrow</h2>
          </motion.div>

          {/* Trust Cards */}
          <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-3">
            {trustReasons.map((item, idx) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{
                    opacity: 0,
                    x: idx === 0 ? -28 : idx === 2 ? 28 : 0,
                    y: idx === 1 ? 22 : 12,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.65,
                    delay: idx * 0.12,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{
                    y: -4,
                    transition: {
                      duration: 0.25,
                      ease: "easeOut",
                    },
                  }}
                  className="group rounded-md border border-slate-200/80 bg-[#f8fafc] p-5 transition-shadow duration-300 hover:shadow-md sm:p-6"
                >
                  {/* Icon */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                      duration: 0.45,
                      delay: idx * 0.12 + 0.12,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="w-fit rounded-md p-2.5 text-white"
                    style={{ backgroundColor: item.color }}
                  >
                    <Icon className="h-5 w-5" />
                  </motion.div>

                  {/* Content */}
                  <div className="mt-3 space-y-2">
                    <h3 className="text-sm font-bold leading-5 text-[#03254C] sm:text-[15px]">{item.title}</h3>
                    <p className="text-xs font-normal leading-6 text-slate-500 sm:text-[13px]">{item.desc}</p>
                  </div>

                  {/* Small Animated Accent */}
                  <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    whileInView={{ width: 28, opacity: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                      duration: 0.5,
                      delay: idx * 0.12 + 0.25,
                      ease: "easeOut",
                    }}
                    className="mt-4 h-[2px] rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
