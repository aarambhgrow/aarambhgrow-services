"use client";

import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  ShieldCheck,
  Target,
  FileText,
  Award,
  ChevronDown,
  WalletCards,
  IndianRupee,
} from "lucide-react";
import { ccTermLoansData } from "../../data/cc-term-loans";

export default function CCTermLoans() {
  const services = Array.isArray(ccTermLoansData?.services) ? ccTermLoansData.services : [];
  const categories = Array.isArray(ccTermLoansData?.categories) ? ccTermLoansData.categories : [];

  const standaloneServiceIds = ["cc-term-loans"];
  const standaloneServiceNames = ["CC / Term Loans", "CC & Term Loans"];
  const allowedCategoryTitles = ["Business Finance", "Debt Funding", "Working Capital Finance"];

  const isStandaloneService = (service) => {
    if (!service) return false;

    const serviceId = String(service.id || "").toLowerCase().trim();
    const serviceName = String(service.name || service.title || service.shortTitle || "").toLowerCase().trim();

    return standaloneServiceIds.includes(serviceId) || standaloneServiceNames.some((name) => name.toLowerCase().trim() === serviceName);
  };

  const categoryNavigation = useMemo(() => {
    return categories
      .filter((category) => allowedCategoryTitles.some((title) => title.toLowerCase().trim() === category?.title?.toLowerCase().trim()))
      .map((category) => {
        const categoryServices = services.filter((service) => {
          if (!service || isStandaloneService(service)) return false;
          return service.category?.toLowerCase().trim() === category.title?.toLowerCase().trim();
        });

        return { ...category, services: categoryServices };
      })
      .filter((category) => category.services.length > 0);
  }, [categories, services]);

  const standaloneServices = useMemo(() => services.filter((service) => isStandaloneService(service)), [services]);

  const [activeTab, setActiveTab] = useState(0);
  const [openCategory, setOpenCategory] = useState(categoryNavigation?.[0]?.title || "");

  const currentService = services[activeTab] || services[0] || null;

  if (!ccTermLoansData || services.length === 0 || !currentService) {
    return (
      <section className="w-full bg-[#F8FAFC] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-md border border-red-200 bg-red-50 p-6">
            <h2 className="text-lg font-bold text-red-700">CC / Term Loans data not found</h2>
            <p className="mt-2 text-sm text-red-600">
              Please check your <strong>data/cc-term-loans.js</strong> file and make sure the services array contains your CC / Term Loans service.
            </p>
          </div>
        </div>
      </section>
    );
  }

  const handleServiceClick = (serviceIndex, categoryTitle = "") => {
    if (serviceIndex < 0) return;

    setActiveTab(serviceIndex);
    if (categoryTitle) setOpenCategory(categoryTitle);

    if (typeof window !== "undefined" && window.innerWidth < 1024) {
      setTimeout(() => {
        document.getElementById("cc-term-loans-content")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    }
  };

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.25, 0.1, 0.25, 1] } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] } },
  };

  return (
    <section id="cc-term-loans" className="relative w-full bg-[#F8FAFC] text-[#03254C] font-sans py-10 sm:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* INTRO */}
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} className="max-w-3xl mb-8 sm:mb-10">
          <motion.div variants={fadeUp} className="mb-3 sm:mb-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#157327]/10 border border-[#157327]/10 text-[#157327] text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.1em]">
              <WalletCards className="w-3.5 h-3.5" />
              {ccTermLoansData.category}
            </span>
          </motion.div>

          <motion.h1 variants={fadeUp} className="text-[22px] sm:text-[28px] lg:text-[34px] xl:text-[36px] font-extrabold tracking-[-0.02em] leading-[1.12] text-[#03254C]">
            {ccTermLoansData.hero?.title || "CC & Term Loans for Business Finance"}
          </motion.h1>

          <motion.div variants={fadeUp} className="w-10 h-0.5 sm:h-1 rounded-full bg-gradient-to-r from-[#157327] to-[#F26522] mt-3" />

          <motion.p variants={fadeUp} className="mt-3 sm:mt-4 text-[12px] sm:text-[13px] lg:text-[14px] font-normal leading-[1.65] text-[#475569] max-w-2xl">
            {ccTermLoansData.hero?.description}
          </motion.p>
        </motion.div>

        {/* SEO CONTENT */}
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} className="max-w-4xl mb-10 sm:mb-12 space-y-8">
          <motion.div variants={fadeUp}>
            <h2 className="text-[20px] sm:text-[24px] lg:text-[28px] font-extrabold tracking-[-0.02em] leading-[1.2] text-[#03254C] mb-3">
              CC & Term Loans for Business Finance
            </h2>
            <p className="text-[12px] sm:text-[13px] lg:text-[14px] leading-[1.75] text-[#475569]">
              Cash Credit (CC) and Term Loans are common business finance facilities used by eligible businesses for working capital, expansion, machinery, equipment, infrastructure, and other business requirements. AarambhGrow provides structured loan preparation support to help businesses assess their funding requirements, organize financial information, prepare project documentation, and improve overall loan application readiness.
            </p>
          </motion.div>

          <motion.div variants={fadeUp}>
            <h2 className="text-[20px] sm:text-[24px] lg:text-[28px] font-extrabold tracking-[-0.02em] leading-[1.2] text-[#03254C] mb-3">
              Working Capital & Cash Credit Finance
            </h2>
            <p className="text-[12px] sm:text-[13px] lg:text-[14px] leading-[1.75] text-[#475569]">
              Cash Credit facilities may help eligible businesses manage working capital requirements such as inventory, receivables, operating expenses, and day-to-day business cycles. Proper financial assessment and documentation can help present the business requirement clearly when approaching suitable lending institutions.
            </p>
          </motion.div>

          <motion.div variants={fadeUp}>
            <h2 className="text-[20px] sm:text-[24px] lg:text-[28px] font-extrabold tracking-[-0.02em] leading-[1.2] text-[#03254C] mb-3">
              Term Loans for Business Expansion
            </h2>
            <p className="text-[12px] sm:text-[13px] lg:text-[14px] leading-[1.75] text-[#475569]">
              Term Loans are generally structured for longer-term business requirements such as machinery purchases, equipment, infrastructure, expansion projects, business setup, and other eligible capital expenditure. AarambhGrow assists businesses in preparing relevant project information, financial details, cost estimates, and supporting documentation.
            </p>
          </motion.div>

          <motion.div variants={fadeUp}>
            <h2 className="text-[20px] sm:text-[24px] lg:text-[28px] font-extrabold tracking-[-0.02em] leading-[1.2] text-[#03254C] mb-3">
              Business Loan Documentation & Application Support
            </h2>
            <p className="text-[12px] sm:text-[13px] lg:text-[14px] leading-[1.75] text-[#475569]">
              Business loan applications may require financial statements, banking records, tax information, business details, project reports, cost estimates, projections, KYC documents, and other supporting information. Our structured approach helps businesses organize the relevant information before approaching a lender.
            </p>
          </motion.div>
        </motion.div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8 items-start">

          {/* SIDEBAR */}
          <aside className="lg:col-span-1 bg-white border border-[#E2E8F0] rounded-md p-3 sm:p-4 shadow-[0_2px_10px_rgba(15,23,42,0.03)] lg:sticky lg:top-6">
            <div className="flex items-start gap-3 p-3 rounded-md bg-[#F8FAFC] border border-[#E2E8F0] mb-3">
              <div className="w-8 h-8 rounded-md bg-[#157327]/10 flex items-center justify-center shrink-0">
                <WalletCards className="w-4 h-4 text-[#157327]" />
              </div>
              <div>
                <h3 className="text-[11px] sm:text-xs font-bold leading-[1.35] text-[#03254C]">
                  Business Finance Solutions
                </h3>
              </div>
            </div>

            {/* CATEGORY NAVIGATION */}
            <div className="space-y-1">
              {categoryNavigation.map((category) => {
                const isOpen = openCategory === category.title;

                return (
                  <div key={category.title} className="border-b border-[#E2E8F0] last:border-b-0 pb-1">
                    <button
                      type="button"
                      onClick={() => setOpenCategory(isOpen ? "" : category.title)}
                      className="w-full flex items-center justify-between px-2.5 py-2.5 rounded-md text-[11px] sm:text-xs font-semibold text-[#03254C] hover:bg-[#F8FAFC] transition-colors"
                    >
                      <span>{category.title}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden ml-2 pl-3 border-l-2 border-[#E2E8F0] space-y-1 mt-1 mb-2"
                        >
                          {category.services.map((service) => {
                            const serviceIndex = services.findIndex((item) => item.id === service.id);
                            const isActive = activeTab === serviceIndex;

                            return (
                              <button
                                type="button"
                                key={service.id}
                                onClick={() => handleServiceClick(serviceIndex, category.title)}
                                className={`w-full text-left px-3 py-2 rounded-md text-[10px] sm:text-[11px] font-medium transition-all duration-200 ${isActive ? "bg-[#157327]/5 text-[#03254C] font-bold border-l-2 border-[#157327]" : "text-[#64748B] hover:text-[#03254C] hover:bg-[#F8FAFC]"}`}
                              >
                                {service.shortTitle || service.title || service.name}
                              </button>
                            );
                          })}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* STANDALONE SERVICES */}
            {standaloneServices.length > 0 && (
              <div className="mt-3 pt-3 border-t border-[#E2E8F0] space-y-1">
                {standaloneServices.map((service) => {
                  const serviceIndex = services.findIndex((item) => item.id === service.id);
                  const isActive = activeTab === serviceIndex;

                  return (
                    <button
                      type="button"
                      key={service.id}
                      onClick={() => handleServiceClick(serviceIndex)}
                      className={`w-full text-left px-3 py-2.5 rounded-md text-[10px] sm:text-[11px] font-semibold transition-all duration-200 ${isActive ? "bg-[#03254C]/5 text-[#03254C] font-bold border-l-2 border-[#F26522]" : "text-[#64748B] hover:text-[#03254C] hover:bg-[#F8FAFC]"}`}
                    >
                      {service.shortTitle || service.title || service.name}
                    </button>
                  );
                })}
              </div>
            )}
          </aside>

          {/* RIGHT CONTENT */}
          <div id="cc-term-loans-content" className="lg:col-span-3 scroll-mt-24">
            <AnimatePresence mode="wait">
              <motion.article
                key={currentService.id || currentService.title}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                className="space-y-5 sm:space-y-6"
              >

                {/* SERVICE HEADER */}
                <div className="relative overflow-hidden rounded-md bg-white border border-[#E2E8F0] p-5 sm:p-7 lg:p-8 shadow-[0_2px_12px_rgba(15,23,42,0.03)]">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#157327]" />

                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3">
                    {currentService.number && (
                      <span className="inline-flex items-center justify-center min-w-8 h-6 px-2 rounded-md bg-[#03254C] text-white text-[10px] font-bold">
                        {currentService.number}
                      </span>
                    )}

                    {currentService.category && (
                      <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.08em] text-[#157327]">
                        {currentService.category}
                      </span>
                    )}

                    {currentService.tagline && (
                      <span className="text-[11px] sm:text-xs font-semibold text-[#F26522] leading-[1.4]">
                        {currentService.tagline}
                      </span>
                    )}
                  </div>

                  <h2 className="text-[20px] sm:text-[26px] lg:text-[30px] font-extrabold tracking-[-0.02em] leading-[1.15] text-[#03254C]">
                    {currentService.title}
                  </h2>

                  <p className="mt-3 text-[12px] sm:text-[13px] lg:text-[14px] font-normal leading-[1.65] text-[#475569] max-w-3xl">
                    {currentService.description}
                  </p>
                </div>

                {/* BENEFITS + BEST SUITED */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

                  {/* BENEFITS */}
                  <motion.div
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    className="bg-white border border-[#E2E8F0] rounded-md p-5 sm:p-6 shadow-[0_2px_10px_rgba(15,23,42,0.025)] hover:shadow-[0_5px_18px_rgba(15,23,42,0.06)] transition-shadow duration-200"
                  >
                    <div className="flex items-center gap-3 pb-3 mb-4 border-b border-[#E2E8F0]">
                      <div className="w-8 h-8 rounded-md bg-[#157327]/10 flex items-center justify-center shrink-0">
                        <ShieldCheck className="w-4 h-4 text-[#157327]" />
                      </div>
                      <h3 className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.1em] text-[#03254C]">
                        Key Benefits
                      </h3>
                    </div>

                    <div className="space-y-3.5">
                      {(currentService.benefits || []).map((benefit, index) => (
                        <div key={`${benefit.title}-${index}`} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-[#157327] shrink-0 mt-0.5" />
                          <div>
                            <h4 className="text-[11px] sm:text-xs font-bold leading-[1.3] text-[#03254C]">
                              {benefit.title}
                            </h4>
                            <p className="mt-1 text-[10px] sm:text-[11px] leading-[1.4] text-[#64748B]">
                              {benefit.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  {/* BEST SUITED */}
                  <motion.div
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    className="bg-white border border-[#E2E8F0] rounded-md p-5 sm:p-6 shadow-[0_2px_10px_rgba(15,23,42,0.025)] hover:shadow-[0_5px_18px_rgba(15,23,42,0.06)] transition-shadow duration-200"
                  >
                    <div className="flex items-center gap-3 pb-3 mb-4 border-b border-[#E2E8F0]">
                      <div className="w-8 h-8 rounded-md bg-[#03254C]/10 flex items-center justify-center">
                        <Target className="w-4 h-4 text-[#03254C]" />
                      </div>
                      <h3 className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.1em] text-[#03254C]">
                        Best Suitable For
                      </h3>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {(currentService.suitedFor || []).map((item, index) => (
                        <span key={`${item}-${index}`} className="px-2.5 py-1.5 rounded-md bg-[#157327]/5 border border-[#157327]/15 text-[10px] sm:text-[11px] font-semibold text-[#157327]">
                          {item}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* WHAT AARAMBGROW DOES */}
                <motion.div
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  className="bg-white border border-[#E2E8F0] rounded-md p-5 sm:p-6 shadow-[0_2px_10px_rgba(15,23,42,0.025)]"
                >
                  <div className="flex items-center gap-3 pb-3 mb-4 border-b border-[#E2E8F0]">
                    <div className="w-8 h-8 rounded-md bg-[#03254C]/10 flex items-center justify-center">
                      <FileText className="w-4 h-4 text-[#03254C]" />
                    </div>
                    <h3 className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.1em] text-[#03254C]">
                      What Aarambh Grow Does
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {(currentService.whatWeDo || []).map((item, index) => (
                      <motion.div
                        key={`${item.title}-${index}`}
                        whileHover={{ y: -2 }}
                        transition={{ duration: 0.2 }}
                        className="rounded-md bg-[#F8FAFC] border border-[#E2E8F0] p-3.5"
                      >
                        <h4 className="text-[11px] sm:text-xs font-bold leading-[1.3] text-[#03254C]">
                          {item.title}
                        </h4>
                        <p className="mt-1 text-[10px] sm:text-[11px] leading-[1.4] text-[#64748B]">
                          {item.desc}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* FINANCE AREAS */}
                {Array.isArray(currentService.financeAreas) && currentService.financeAreas.length > 0 && (
                  <motion.div
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    className="bg-white border border-[#E2E8F0] rounded-md p-5 sm:p-6 shadow-[0_2px_10px_rgba(15,23,42,0.025)]"
                  >
                    <div className="flex items-center gap-3 pb-3 mb-4 border-b border-[#E2E8F0]">
                      <div className="w-8 h-8 rounded-md bg-[#F26522]/10 flex items-center justify-center">
                        <IndianRupee className="w-4 h-4 text-[#F26522]" />
                      </div>
                      <h3 className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.1em] text-[#03254C]">
                        Business Finance Areas
                      </h3>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {currentService.financeAreas.map((item, index) => (
                        <span key={`${item}-${index}`} className="px-3 py-1.5 rounded-md bg-[#F8FAFC] border border-[#E2E8F0] text-[10px] sm:text-[11px] font-semibold text-[#475569]">
                          {item}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* LOAN TYPES */}
                {Array.isArray(currentService.loanTypes) && currentService.loanTypes.length > 0 && (
                  <motion.div
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    className="bg-white border border-[#E2E8F0] rounded-md p-5 sm:p-6 shadow-[0_2px_10px_rgba(15,23,42,0.025)]"
                  >
                    <div className="flex items-center gap-3 pb-3 mb-4 border-b border-[#E2E8F0]">
                      <div className="w-8 h-8 rounded-md bg-[#03254C]/10 flex items-center justify-center">
                        <WalletCards className="w-4 h-4 text-[#03254C]" />
                      </div>
                      <h3 className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.1em] text-[#03254C]">
                        Loan & Credit Facilities
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                      {currentService.loanTypes.map((item, index) => (
                        <div key={`${item}-${index}`} className="flex items-center gap-2 rounded-md bg-[#F8FAFC] border border-[#E2E8F0] p-3">
                          <CheckCircle2 className="w-4 h-4 text-[#157327] shrink-0" />
                          <span className="text-[10px] sm:text-[11px] font-semibold text-[#475569]">{item}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* WORKING CAPITAL NEEDS */}
                {Array.isArray(currentService.workingCapitalNeeds) && currentService.workingCapitalNeeds.length > 0 && (
                  <motion.div
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    className="bg-white border border-[#E2E8F0] rounded-md p-5 sm:p-6 shadow-[0_2px_10px_rgba(15,23,42,0.025)]"
                  >
                    <div className="flex items-center gap-3 pb-3 mb-4 border-b border-[#E2E8F0]">
                      <div className="w-8 h-8 rounded-md bg-[#157327]/10 flex items-center justify-center">
                        <Target className="w-4 h-4 text-[#157327]" />
                      </div>
                      <h3 className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.1em] text-[#03254C]">
                        Working Capital Requirements
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {currentService.workingCapitalNeeds.map((item, index) => (
                        <div key={`${item}-${index}`} className="flex items-start gap-2 rounded-md bg-[#F8FAFC] border border-[#E2E8F0] p-3">
                          <CheckCircle2 className="w-4 h-4 text-[#157327] shrink-0 mt-0.5" />
                          <span className="text-[10px] sm:text-[11px] font-medium leading-[1.4] text-[#475569]">{item}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* TERM LOAN NEEDS */}
                {Array.isArray(currentService.termLoanNeeds) && currentService.termLoanNeeds.length > 0 && (
                  <motion.div
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    className="bg-white border border-[#E2E8F0] rounded-md p-5 sm:p-6 shadow-[0_2px_10px_rgba(15,23,42,0.025)]"
                  >
                    <div className="flex items-center gap-3 pb-3 mb-4 border-b border-[#E2E8F0]">
                      <div className="w-8 h-8 rounded-md bg-[#F26522]/10 flex items-center justify-center">
                        <IndianRupee className="w-4 h-4 text-[#F26522]" />
                      </div>
                      <h3 className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.1em] text-[#03254C]">
                        Term Loan Requirements
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {currentService.termLoanNeeds.map((item, index) => (
                        <div key={`${item}-${index}`} className="flex items-start gap-2 rounded-md bg-[#F8FAFC] border border-[#E2E8F0] p-3">
                          <CheckCircle2 className="w-4 h-4 text-[#F26522] shrink-0 mt-0.5" />
                          <span className="text-[10px] sm:text-[11px] font-medium leading-[1.4] text-[#475569]">{item}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* DOCUMENTS */}
                {Array.isArray(currentService.documents) && currentService.documents.length > 0 && (
                  <motion.div
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    className="bg-white border border-[#E2E8F0] rounded-md p-5 sm:p-6 shadow-[0_2px_10px_rgba(15,23,42,0.025)]"
                  >
                    <div className="flex items-center gap-3 pb-3 mb-4 border-b border-[#E2E8F0]">
                      <div className="w-8 h-8 rounded-md bg-[#03254C]/10 flex items-center justify-center">
                        <FileText className="w-4 h-4 text-[#03254C]" />
                      </div>
                      <h3 className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.1em] text-[#03254C]">
                        Commonly Required Documents
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                      {currentService.documents.map((item, index) => (
                        <div key={`${item}-${index}`} className="flex items-start gap-2 rounded-md bg-[#F8FAFC] border border-[#E2E8F0] p-3">
                          <CheckCircle2 className="w-4 h-4 text-[#157327] shrink-0 mt-0.5" />
                          <span className="text-[10px] sm:text-[11px] font-medium leading-[1.4] text-[#475569]">{item}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* PROCESS */}
                {Array.isArray(currentService.process) && currentService.process.length > 0 && (
                  <motion.div
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    className="bg-white border border-[#E2E8F0] rounded-md p-5 sm:p-6 shadow-[0_2px_10px_rgba(15,23,42,0.025)]"
                  >
                    <div className="flex items-center gap-3 pb-3 mb-4 border-b border-[#E2E8F0]">
                      <div className="w-8 h-8 rounded-md bg-[#157327]/10 flex items-center justify-center">
                        <Target className="w-4 h-4 text-[#157327]" />
                      </div>
                      <h3 className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.1em] text-[#03254C]">
                        Our Finance Preparation Process
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {currentService.process.map((item, index) => {
                        const title = typeof item === "string" ? item : item?.title;
                        const desc = typeof item === "string" ? "" : item?.desc;

                        return (
                          <div key={`${title}-${index}`} className="rounded-md bg-[#F8FAFC] border border-[#E2E8F0] p-3.5">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="flex items-center justify-center w-6 h-6 rounded-md bg-[#03254C] text-white text-[9px] font-bold">
                                {String(index + 1).padStart(2, "0")}
                              </span>
                              <h4 className="text-[11px] sm:text-xs font-bold leading-[1.3] text-[#03254C]">{title}</h4>
                            </div>

                            {desc && (
                              <p className="text-[10px] sm:text-[11px] leading-[1.4] text-[#64748B]">{desc}</p>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>
                )}

                {/* WHY BUSINESSES CHOOSE */}
                <motion.div
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  className="bg-white border border-[#E2E8F0] rounded-md p-5 sm:p-6 shadow-[0_2px_10px_rgba(15,23,42,0.025)]"
                >
                  <div className="flex items-center gap-3 pb-3 mb-4 border-b border-[#E2E8F0]">
                    <div className="w-8 h-8 rounded-md bg-[#F26522]/10 flex items-center justify-center">
                      <Award className="w-4 h-4 text-[#F26522]" />
                    </div>
                    <h3 className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.1em] text-[#03254C]">
                      Why Businesses Choose CC & Term Loan Support
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {(currentService.whyChoose || []).map((item, index) => {
                      const title = typeof item === "string" ? item : item?.title;
                      const desc = typeof item === "string" ? "" : item?.desc;

                      return (
                        <motion.div
                          key={`${title}-${index}`}
                          whileHover={{ y: -2 }}
                          transition={{ duration: 0.2 }}
                          className="flex items-start gap-2.5 bg-[#F8FAFC] rounded-md border border-[#E2E8F0] p-3"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#157327] shrink-0 mt-0.5" />

                          <div>
                            <p className="text-[10px] sm:text-[11px] font-bold leading-[1.35] text-[#03254C]">{title}</p>

                            {desc && (
                              <p className="mt-1 text-[10px] sm:text-[11px] font-normal leading-[1.4] text-[#64748B]">{desc}</p>
                            )}
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>

              </motion.article>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
