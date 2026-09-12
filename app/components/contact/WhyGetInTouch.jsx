"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";
import { Award, Compass, Zap, Sparkles, ArrowRight, ShieldCheck } from "lucide-react";

export default function WhyGetInTouchSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const features = [
    {
      id: "expert",
      icon: Award,
      title: "Expert Guidance",
      description: "Practical guidance for business planning, funding, compliance, and growth.",
      accent: "#157327",
      badge: "Business Advisory",
    },
    {
      id: "tailored",
      icon: Compass,
      title: "Tailored Solutions",
      description: "Solutions aligned with your business stage, industry, and specific requirements.",
      accent: "#F26522",
      badge: "Custom Support",
    },
    {
      id: "support",
      icon: Zap,
      title: "Structured Support",
      description: "Clear guidance for documentation, registrations, funding, and business requirements.",
      accent: "#157327",
      badge: "Business Support",
    },
  ];

  const activeFeature = features[activeIndex];
  const ActiveIcon = activeFeature.icon;

  return (
    <MotionConfig reducedMotion="user">
      <section
        id="why-get-in-touch"
        aria-labelledby="why-get-in-touch-title"
        className="w-full overflow-hidden bg-[#F8FAFC] px-4 py-7 font-sans text-[#03254C] sm:px-6 sm:py-9 lg:px-8 lg:py-10"
      >
        {/* =====================================================
            INNER CONTAINER — 1240px
        ====================================================== */}

        <div className="mx-auto w-full max-w-[1215px]">
          {/* =====================================================
              HEADER
          ====================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 18,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mb-5 border-b border-slate-200/80 pb-4 sm:mb-6 sm:pb-5"
          >
            <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
              {/* Heading */}

              <div>
                <motion.div
                  initial={{
                    opacity: 0,
                    x: -15,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: 0.08,
                  }}
                  className="mb-1.5 inline-flex items-center gap-1.5 rounded-full bg-[#157327]/10 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.14em] text-[#157327]"
                >
                  <Sparkles className="h-3 w-3" />
                  <span>Business Support</span>
                </motion.div>

                <h2 id="why-get-in-touch-title" className="text-2xl font-black tracking-tight text-[#03254C] sm:text-3xl">
                  Why Choose <span className="text-[#F26522]">AarambhGrow?</span>
                </h2>
              </div>

              {/* Short SEO Copy */}

              <motion.p
                initial={{
                  opacity: 0,
                  x: 15,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.55,
                  delay: 0.15,
                }}
                className="max-w-md text-xs leading-5 text-slate-500 lg:text-right"
              >
                Business consulting, financial advisory, compliance, funding, and growth support for startups and MSMEs.
              </motion.p>
            </div>
          </motion.div>

          {/* =====================================================
              MAIN CONTENT
          ====================================================== */}

          <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-12 lg:gap-5">
            {/* =================================================
                LEFT — FEATURES
            ================================================= */}

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.12,
              }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
              className="flex w-full flex-col gap-2.5 lg:col-span-7"
            >
              {features.map((item, index) => {
                const Icon = item.icon;
                const isActive = activeIndex === index;

                return (
                  <motion.button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    variants={{
                      hidden: {
                        opacity: 0,
                        x: -25,
                      },
                      visible: {
                        opacity: 1,
                        x: 0,
                        transition: {
                          duration: 0.55,
                          ease: [0.22, 1, 0.36, 1],
                        },
                      },
                    }}
                    whileTap={{
                      scale: 0.99,
                    }}
                    className={`relative w-full overflow-hidden rounded-md border p-3.5 text-left outline-none transition-colors duration-300 sm:p-4 ${
                      isActive ? "border-slate-300 bg-white shadow-sm ring-1 ring-slate-200" : "border-slate-200/80 bg-white/70"
                    } focus-visible:ring-2 focus-visible:ring-[#F26522]/20`}
                  >
                    {/* Active Accent */}

                    <motion.span
                      initial={false}
                      animate={{
                        opacity: isActive ? 1 : 0,
                        scaleY: isActive ? 1 : 0,
                      }}
                      transition={{
                        duration: 0.35,
                      }}
                      className="absolute bottom-2.5 left-0 top-2.5 w-1 origin-center rounded-r-full"
                      style={{
                        backgroundColor: item.accent,
                      }}
                    />

                    <div className="flex items-center gap-3">
                      {/* Icon */}

                      <motion.div
                        initial={false}
                        animate={{
                          opacity: isActive ? 1 : 0.7,
                          scale: isActive ? 1 : 0.96,
                        }}
                        transition={{
                          duration: 0.3,
                        }}
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-md ${
                          isActive ? "text-white" : "bg-slate-100 text-slate-500"
                        }`}
                        style={{
                          backgroundColor: isActive ? item.accent : undefined,
                        }}
                      >
                        <Icon className="h-4 w-4" strokeWidth={1.8} />
                      </motion.div>

                      {/* Content */}

                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                          <h3 className="text-sm font-bold text-[#03254C]">{item.title}</h3>

                          <span className="hidden rounded bg-slate-100 px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-wide text-slate-500 sm:inline-block">
                            {item.badge}
                          </span>
                        </div>

                        <p className="mt-0.5 text-[11px] leading-4 text-slate-500 sm:text-xs">{item.description}</p>
                      </div>

                      {/* Arrow */}

                      <motion.div
                        initial={false}
                        animate={{
                          opacity: isActive ? 1 : 0.25,
                          x: isActive ? 0 : -3,
                        }}
                        transition={{
                          duration: 0.3,
                        }}
                        className="hidden shrink-0 sm:block"
                      >
                        <ArrowRight
                          className="h-4 w-4"
                          style={{
                            color: item.accent,
                          }}
                        />
                      </motion.div>
                    </div>
                  </motion.button>
                );
              })}
            </motion.div>

            {/* =================================================
                RIGHT — SHOWCASE
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                x: 25,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.12,
              }}
              transition={{
                duration: 0.7,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative flex min-h-[220px] w-full flex-col justify-between overflow-hidden rounded-md border border-slate-200 bg-white p-4 shadow-sm sm:min-h-[230px] sm:p-5 lg:col-span-5"
            >
              {/* Subtle Glow */}

              <AnimatePresence>
                <motion.div
                  key={activeFeature.id}
                  initial={{
                    opacity: 0,
                    scale: 0.7,
                  }}
                  animate={{
                    opacity: 0.1,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                  }}
                  transition={{
                    duration: 0.6,
                  }}
                  className="pointer-events-none absolute -right-14 -top-14 h-36 w-36 rounded-full blur-3xl"
                  style={{
                    backgroundColor: activeFeature.accent,
                  }}
                />
              </AnimatePresence>

              {/* Dynamic Content */}

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFeature.id}
                  initial={{
                    opacity: 0,
                    y: 14,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -10,
                  }}
                  transition={{
                    duration: 0.4,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative z-10"
                >
                  {/* Top */}

                  <div className="flex items-center justify-between">
                    <span
                      className="rounded bg-slate-100 px-2 py-1 text-[8px] font-black uppercase tracking-[0.12em]"
                      style={{
                        color: activeFeature.accent,
                      }}
                    >
                      {activeFeature.badge}
                    </span>

                    <span className="text-[9px] font-black tracking-widest text-slate-300">0{activeIndex + 1} / 03</span>
                  </div>

                  {/* Main */}

                  <div className="mt-5 flex items-start gap-3">
                    <motion.div
                      initial={{
                        opacity: 0,
                        scale: 0.8,
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                      }}
                      transition={{
                        duration: 0.4,
                      }}
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md"
                      style={{
                        backgroundColor: `${activeFeature.accent}12`,
                        color: activeFeature.accent,
                      }}
                    >
                      <ActiveIcon className="h-[18px] w-[18px]" strokeWidth={1.8} />
                    </motion.div>

                    <div>
                      <h3 className="text-base font-extrabold leading-tight text-[#03254C]">{activeFeature.title}</h3>

                      <p className="mt-1.5 text-[11px] leading-5 text-slate-500 sm:text-xs">{activeFeature.description}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Assurance */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.3,
                }}
                className="relative z-10 mt-4 flex items-center gap-2 border-t border-slate-100 pt-3"
              >
                <ShieldCheck className="h-3.5 w-3.5 shrink-0 text-[#157327]" strokeWidth={1.8} />

                <span className="text-[10px] leading-4 text-slate-400">Clear, practical, and structured business support.</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </MotionConfig>
  );
}
