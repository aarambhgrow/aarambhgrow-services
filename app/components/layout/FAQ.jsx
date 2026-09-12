"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqData = [
  {
    question: "What funding and financial support does AarambhGrow provide?",
    answer:
      "AarambhGrow provides guidance across Startup Seed Fund, SISFS, Seed Funding Access, Government Grants, CGTMSE, Mudra Loan, PMEGP Loan, CC / Term Loans, NAIFF, SSS, Textile Fund, and PMFME, based on the business profile, funding requirement, eligibility, and applicable program guidelines.",
  },
  {
    question: "Can AarambhGrow help startups and MSMEs access suitable funding?",
    answer:
      "Yes. AarambhGrow supports startups, entrepreneurs, and MSMEs in understanding suitable funding opportunities, planning their funding requirements, preparing business and financial documentation, and navigating the applicable process for government schemes, grants, and business finance.",
  },
  {
    question: "Which government schemes and business loan options can AarambhGrow support?",
    answer:
      "AarambhGrow provides guidance for applicable government grants and funding programs such as Startup Seed Fund, SISFS, PMEGP, PMFME, Textile Fund, NAIFF, and SSS, along with business finance options such as CGTMSE, Mudra Loan, and CC / Term Loans, subject to eligibility and lender or scheme requirements.",
  },
  {
    question: "What documentation and financial support does AarambhGrow provide?",
    answer:
      "AarambhGrow provides practical support for business information, financial documentation, funding applications, compliance requirements, registrations, certifications, and other documents that may be required for applicable funding or business finance processes.",
  },
  {
    question: "How does AarambhGrow support businesses throughout the funding process?",
    answer:
      "AarambhGrow follows a structured approach to understand business requirements, identify relevant funding options, plan documentation, support the application process, and provide ongoing guidance across finance, compliance, and business growth, subject to applicable scheme and lender requirements.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <MotionConfig reducedMotion="user">
      <section
        id="faq"
        aria-labelledby="faq-heading"
        className="relative w-full overflow-hidden bg-[#f8fafc] py-12 font-sans text-[#0f172a] sm:py-14 lg:py-16"
      >
        {/* Soft Background */}
        <div aria-hidden="true" className="pointer-events-none absolute -left-32 top-10 h-64 w-64 rounded-full bg-[#f26522]/5 blur-3xl" />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 bottom-10 h-64 w-64 rounded-full bg-[#157327]/5 blur-3xl"
        />

        <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mx-auto mb-8 max-w-2xl text-center sm:mb-10 lg:mb-12"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.08,
              }}
              className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-[#157327]/10 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.18em] text-[#157327] sm:text-[10px]"
            >
              <HelpCircle className="h-3.5 w-3.5" />
              FAQs
            </motion.div>

            <h2 id="faq-heading" className="text-2xl font-black leading-tight tracking-tight text-[#03254C] sm:text-3xl lg:text-4xl">
              Frequently Asked Questions
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-xs leading-6 text-slate-600 sm:text-sm">
              Clear answers about funding, business finance, government schemes, documentation, and business growth support.
            </p>
          </motion.div>

          {/* FAQ Accordion */}
          <div className="mx-auto max-w-5xl space-y-3 sm:space-y-4">
            {faqData.map((faq, index) => {
              const isOpen = activeIndex === index;

              return (
                <motion.div
                  key={faq.question}
                  initial={{
                    opacity: 0,
                    y: 24,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="overflow-hidden rounded-md border border-slate-200/80 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md"
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left outline-none transition-colors duration-300 hover:bg-slate-50 focus-visible:ring-2 focus-visible:ring-[#157327]/30 sm:px-6 sm:py-5"
                  >
                    <span className="pr-2 text-xs font-extrabold leading-5 text-[#03254C] sm:text-sm">{faq.question}</span>

                    <motion.div
                      animate={{
                        rotate: isOpen ? 180 : 0,
                        scale: isOpen ? 1 : 0.96,
                      }}
                      transition={{
                        duration: 0.3,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-colors duration-300 sm:h-8 sm:w-8 ${
                        isOpen ? "bg-[#F26522] text-white" : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-answer-${index}`}
                        initial={{
                          height: 0,
                          opacity: 0,
                        }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        transition={{
                          height: {
                            duration: 0.4,
                            ease: [0.22, 1, 0.36, 1],
                          },
                          opacity: {
                            duration: 0.3,
                            ease: "easeOut",
                          },
                        }}
                      >
                        <div className="border-t border-slate-100 px-4 pb-5 pt-3 text-xs font-normal leading-6 text-slate-600 sm:px-6 sm:pb-6 sm:pt-4 sm:text-sm sm:leading-7">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </MotionConfig>
  );
}
