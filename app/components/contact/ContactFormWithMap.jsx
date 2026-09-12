"use client";

import React, { useState } from "react";
import { motion, MotionConfig } from "framer-motion";
import { Lock, ArrowRight, CheckCircle2, XCircle, MapPin, Sparkles } from "lucide-react";

export default function ContactFormWithMap() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("idle");

  /* =========================================================
     ALL 12 AARAMBGROW SERVICES
  ========================================================= */

  const services = [
    {
      value: "startup-seed-fund",
      label: "Startup Seed Fund",
    },
    {
      value: "sisfs",
      label: "SISFS",
    },
    {
      value: "seed-funding-access",
      label: "Seed Funding Access",
    },
    {
      value: "government-grants",
      label: "Government Grants",
    },
    {
      value: "cgtmse",
      label: "CGTMSE",
    },
    {
      value: "mudra-loan",
      label: "Mudra Loan",
    },
    {
      value: "pmegp-loan",
      label: "PMEGP Loan",
    },
    {
      value: "cc-term-loans",
      label: "CC / Term Loans",
    },
    {
      value: "naiff",
      label: "NAIFF",
    },
    {
      value: "sss",
      label: "SSS",
    },
    {
      value: "textile-fund",
      label: "Textile Fund",
    },
    {
      value: "pmfme",
      label: "PMFME",
    },
  ];

  /* =========================================================
     FORM SUBMIT
  ========================================================= */

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Failed to send message.");
      }

      setStatus("success");

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Submit error:", error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  /* =========================================================
     ANIMATIONS
  ========================================================= */

  const containerVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.08,
      },
    },
  };

  const leftVariants = {
    hidden: {
      opacity: 0,
      x: -40,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.75,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const rightVariants = {
    hidden: {
      opacity: 0,
      x: 40,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 18,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const fieldVariants = {
    hidden: {
      opacity: 0,
      y: 15,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <MotionConfig reducedMotion="user">
      <section id="contact-form" className="w-full overflow-hidden bg-[#f8fafc] py-6 font-sans text-[#03254C] sm:py-8 lg:py-10">
        {/* =====================================================
            SAME WIDTH SYSTEM AS PREVIOUS SECTIONS
        ===================================================== */}

        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* ===================================================
              MAIN CONTAINER
          =================================================== */}

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.1,
            }}
            className="grid w-full grid-cols-1 overflow-hidden rounded-md border border-slate-200/80 bg-white shadow-[0_4px_25px_-8px_rgba(3,37,76,0.08)] lg:grid-cols-12"
          >
            {/* =================================================
                LEFT — FORM
            ================================================= */}

            <motion.div variants={leftVariants} className="min-w-0 p-5 sm:p-7 md:p-8 lg:col-span-7 lg:p-10">
              {/* HEADER */}

              <motion.div variants={fadeUp} className="mb-6">
                <div className="mb-2 inline-flex items-center gap-1.5 rounded-full border border-[#157327]/15 bg-[#157327]/10 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.18em] text-[#157327] sm:text-[10px]">
                  <Sparkles className="h-3 w-3" />
                  Contact AarambhGrow
                </div>

                <h3 className="text-xl font-black tracking-tight text-[#03254C] sm:text-2xl md:text-[27px]">
                  Send Us a <span className="text-[#F26522]">Message</span>
                </h3>

                <p className="mt-1 max-w-xl text-[11px] leading-5 text-slate-500 sm:text-xs sm:leading-6">
                  Tell us about your business requirement and our team will guide you with the right solution.
                </p>
              </motion.div>

              {/* =================================================
                  FORM
              ================================================= */}

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* NAME + EMAIL */}

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <motion.div variants={fieldVariants}>
                    <label htmlFor="fullName" className="mb-1.5 block text-xs font-bold text-[#03254C]">
                      Full Name
                    </label>

                    <input
                      id="fullName"
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          fullName: e.target.value,
                        })
                      }
                      className="h-11 w-full rounded-md border border-slate-200 bg-slate-50 px-3.5 text-xs text-[#03254C] outline-none transition-all duration-300 placeholder:text-slate-400 hover:border-slate-300 focus:border-[#F26522] focus:bg-white focus:ring-2 focus:ring-[#F26522]/10 sm:h-10"
                      required
                    />
                  </motion.div>

                  <motion.div variants={fieldVariants}>
                    <label htmlFor="email" className="mb-1.5 block text-xs font-bold text-[#03254C]">
                      Email Address
                    </label>

                    <input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          email: e.target.value,
                        })
                      }
                      className="h-11 w-full rounded-md border border-slate-200 bg-slate-50 px-3.5 text-xs text-[#03254C] outline-none transition-all duration-300 placeholder:text-slate-400 hover:border-slate-300 focus:border-[#F26522] focus:bg-white focus:ring-2 focus:ring-[#F26522]/10 sm:h-10"
                      required
                    />
                  </motion.div>
                </div>

                {/* PHONE + SUBJECT */}

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <motion.div variants={fieldVariants}>
                    <label htmlFor="phone" className="mb-1.5 block text-xs font-bold text-[#03254C]">
                      Phone Number
                    </label>

                    <input
                      id="phone"
                      type="tel"
                      inputMode="tel"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          phone: e.target.value,
                        })
                      }
                      className="h-11 w-full rounded-md border border-slate-200 bg-slate-50 px-3.5 text-xs text-[#03254C] outline-none transition-all duration-300 placeholder:text-slate-400 hover:border-slate-300 focus:border-[#F26522] focus:bg-white focus:ring-2 focus:ring-[#F26522]/10 sm:h-10"
                    />
                  </motion.div>

                  {/* =================================================
                      SUBJECT — ALL 12 SERVICES
                  ================================================= */}

                  <motion.div variants={fieldVariants}>
                    <label htmlFor="subject" className="mb-1.5 block text-xs font-bold text-[#03254C]">
                      Service / Subject
                    </label>

                    <select
                      id="subject"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          subject: e.target.value,
                        })
                      }
                      className="h-11 w-full rounded-md border border-slate-200 bg-slate-50 px-3.5 text-xs text-slate-600 outline-none transition-all duration-300 hover:border-slate-300 focus:border-[#F26522] focus:bg-white focus:ring-2 focus:ring-[#F26522]/10 sm:h-10"
                    >
                      <option value="">Select a service</option>

                      {services.map((service) => (
                        <option key={service.value} value={service.value}>
                          {service.label}
                        </option>
                      ))}
                    </select>
                  </motion.div>
                </div>

                {/* MESSAGE */}

                <motion.div variants={fieldVariants}>
                  <label htmlFor="message" className="mb-1.5 block text-xs font-bold text-[#03254C]">
                    Message
                  </label>

                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Tell us about your requirement..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        message: e.target.value,
                      })
                    }
                    className="min-h-[120px] w-full resize-none rounded-md border border-slate-200 bg-slate-50 px-3.5 py-3 text-xs leading-5 text-[#03254C] outline-none transition-all duration-300 placeholder:text-slate-400 hover:border-slate-300 focus:border-[#F26522] focus:bg-white focus:ring-2 focus:ring-[#F26522]/10 sm:min-h-[105px]"
                    required
                  />
                </motion.div>

                {/* =================================================
                    BUTTON + PRIVACY
                ================================================= */}

                <motion.div variants={fadeUp} className="flex flex-col gap-4 pt-1 sm:flex-row sm:items-center sm:justify-between">
                  <motion.button
                    whileHover={{
                      y: -2,
                    }}
                    whileTap={{
                      scale: 0.98,
                    }}
                    type="submit"
                    disabled={loading}
                    className="inline-flex min-h-11 w-full cursor-pointer items-center justify-center gap-2 rounded-md bg-[#F26522] px-6 py-3 text-xs font-bold text-white shadow-sm transition-all duration-300 hover:bg-[#d85416] hover:shadow-[0_8px_20px_-8px_rgba(242,101,34,0.55)] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                  >
                    <span>{loading ? "Sending..." : "Send Message"}</span>

                    {!loading && <ArrowRight className="h-4 w-4 transition-transform duration-300" />}
                  </motion.button>

                  <div className="flex items-center justify-center gap-1.5 text-[10px] font-medium text-slate-400 sm:justify-start sm:text-[11px]">
                    <Lock className="h-3.5 w-3.5 text-[#157327]" />
                    <span>We respect your privacy</span>
                  </div>
                </motion.div>

                {/* =================================================
                    SUCCESS MESSAGE
                ================================================= */}

                {status === "success" && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 12,
                      height: 0,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      height: "auto",
                    }}
                    transition={{
                      duration: 0.45,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="flex items-start gap-2 overflow-hidden rounded-md border border-green-200 bg-green-50 p-3"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />

                    <p className="text-xs font-semibold leading-5 text-green-700">
                      Your message has been sent successfully. We will contact you soon.
                    </p>
                  </motion.div>
                )}

                {/* =================================================
                    ERROR MESSAGE
                ================================================= */}

                {status === "error" && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 12,
                      height: 0,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      height: "auto",
                    }}
                    transition={{
                      duration: 0.45,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="flex items-start gap-2 overflow-hidden rounded-md border border-red-200 bg-red-50 p-3"
                  >
                    <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-600" />

                    <p className="text-xs font-semibold leading-5 text-red-700">
                      Something went wrong. Please try again or email us directly.
                    </p>
                  </motion.div>
                )}
              </form>
            </motion.div>

            {/* =====================================================
                RIGHT — MAP
            ===================================================== */}

            <motion.div
              variants={rightVariants}
              className="relative min-h-[320px] overflow-hidden bg-[#03254C] sm:min-h-[380px] lg:col-span-5 lg:min-h-full"
            >
              {/* MAP */}

              <motion.iframe
                initial={{
                  opacity: 0,
                  scale: 1.06,
                }}
                whileInView={{
                  opacity: 0.82,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 1.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                title="AarambhGrow Group of Companies Location Map"
                src="https://www.google.com/maps?q=813%2C%20Silver%20Rediance-4%2C%20Gota%2C%20Jagatpur%20Road%2C%20Gota%20SG%20Highway%2C%20Gujarat%20382470&output=embed"
                className="absolute inset-0 h-full w-full border-0 invert brightness-90 contrast-125"
                loading="lazy"
              />

              {/* MAP OVERLAY */}

              <motion.div
                initial={{
                  opacity: 0,
                }}
                whileInView={{
                  opacity: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.15,
                }}
                className="pointer-events-none absolute inset-0 bg-[#03254C]/10"
              />

              {/* =================================================
                  LOCATION CARD
              ================================================= */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 25,
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
                  delay: 0.3,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute bottom-4 left-4 right-4 z-10 rounded-md border border-slate-200/80 bg-white/95 p-4 shadow-lg backdrop-blur-sm sm:bottom-6 sm:left-6 sm:right-6 sm:p-5"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 shrink-0 rounded-md bg-[#157327]/10 p-2 text-[#157327]">
                    <MapPin className="h-4 w-4" />
                  </div>

                  <div className="min-w-0">
                    <h4 className="text-xs font-black text-[#03254C] sm:text-sm">AarambhGrow Group of Companies</h4>

                    <p className="mt-1 text-[10px] leading-5 text-slate-600 sm:text-[11px]">
                      813, Silver Rediance-4, Gota, Jagatpur Road, Gota SG Highway, Gujarat 382470
                    </p>
                  </div>
                </div>

                <motion.a
                  whileHover={{
                    x: 3,
                  }}
                  href="https://www.google.com/maps/dir/?api=1&destination=813%2C%20Silver%20Rediance-4%2C%20Gota%2C%20Jagatpur%20Road%2C%20Gota%20SG%20Highway%2C%20Gujarat%20382470"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex min-h-8 items-center gap-1 text-[11px] font-bold text-[#F26522]"
                >
                  <span>Get Directions</span>
                  <ArrowRight className="h-3 w-3" />
                </motion.a>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </MotionConfig>
  );
}
