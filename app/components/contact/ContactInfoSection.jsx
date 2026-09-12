"use client";

import React from "react";
import { Phone, Mail, MapPin, MessageCircle, ArrowUpRight, Sparkles, Navigation } from "lucide-react";
import { motion, MotionConfig } from "framer-motion";

export default function ContactMainSection() {
  const contactChannels = [
    {
      type: "phone",
      href: "tel:+919998715799",
      label: "Phone Inquiry",
      value: "+91 99987 15799",
      icon: Phone,
      iconColor: "#157327",
      iconBg: "bg-[#157327]/10",
      hoverBorder: "hover:border-[#157327]",
      hoverText: "group-hover:text-[#157327]",
    },
    {
      type: "email",
      href: "mailto:info@aarambhgrow.co.in",
      label: "Official Email",
      value: "info@aarambhgrow.co.in",
      icon: Mail,
      iconColor: "#F26522",
      iconBg: "bg-[#F26522]/10",
      hoverBorder: "hover:border-[#F26522]",
      hoverText: "group-hover:text-[#F26522]",
    },
    {
      type: "whatsapp",
      href: "https://wa.me/919998715799",
      label: "WhatsApp Chat",
      value: "Start a Conversation",
      icon: MessageCircle,
      iconColor: "#157327",
      iconBg: "bg-[#157327]/10",
      hoverBorder: "hover:border-[#157327]",
      hoverText: "group-hover:text-[#157327]",
      external: true,
    },
  ];

  /* =========================
     ANIMATION VARIANTS
  ========================= */

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 24,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const fadeLeft = {
    hidden: {
      opacity: 0,
      x: -35,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const fadeRight = {
    hidden: {
      opacity: 0,
      x: 35,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20,
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

  return (
    <MotionConfig reducedMotion="user">
      <section id="contact-information" className="w-full overflow-hidden bg-[#f8fafc] py-4 font-sans text-[#03254C] sm:py-5 lg:py-6">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* =========================
              MAIN CONTAINER
          ========================= */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.12,
            }}
            className="rounded-md border border-slate-200/90 bg-white p-4 shadow-[0_4px_20px_-4px_rgba(3,37,76,0.05)] sm:p-6 lg:p-7"
          >
            {/* =========================
                HEADER
            ========================= */}
            <motion.div
              variants={fadeUp}
              className="flex flex-col justify-between gap-4 border-b border-slate-100 pb-5 sm:flex-row sm:items-center"
            >
              <div className="min-w-0 space-y-1">
                {/* Badge */}
                <motion.div
                  variants={fadeUp}
                  className="inline-flex items-center gap-1.5 rounded-full border border-[#157327]/15 bg-[#157327]/10 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.16em] text-[#157327] sm:text-[10px] sm:tracking-widest"
                >
                  <Sparkles className="h-3 w-3" />
                  Contact Desk
                </motion.div>

                {/* Heading */}
                <motion.h2 variants={fadeUp} className="text-lg font-extrabold tracking-tight text-[#03254C] sm:text-2xl">
                  Get in Touch with AarambhGrow
                </motion.h2>

                <motion.p variants={fadeUp} className="max-w-2xl text-[11px] leading-5 text-slate-500 sm:text-sm sm:leading-6">
                  Connect with our team for business consulting, funding, financial advisory, compliance, registrations, certifications, and
                  growth support.
                </motion.p>
              </div>

              {/* Active Hours */}
              <motion.div
                variants={fadeRight}
                className="flex w-fit shrink-0 items-center gap-2 self-start rounded-md border border-slate-100 bg-slate-50 px-3 py-2 sm:self-center"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#157327] opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#157327]" />
                </span>

                <span className="text-[10px] font-bold text-[#03254C] sm:text-[11px]">
                  Active Hours: <span className="font-normal text-slate-500">Mon–Sat, 9 AM – 7 PM</span>
                </span>
              </motion.div>
            </motion.div>

            {/* =========================
                CONTACT + OFFICE
            ========================= */}
            <div className="mt-5 grid grid-cols-1 gap-3.5 lg:grid-cols-12">
              {/* =========================
                  CONTACT CHANNELS
              ========================= */}
              <motion.div variants={containerVariants} className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:col-span-8">
                {contactChannels.map((item) => {
                  const Icon = item.icon;

                  return (
                    <motion.a
                      key={item.type}
                      variants={cardVariants}
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      whileHover={{
                        y: -4,
                        transition: {
                          duration: 0.25,
                          ease: "easeOut",
                        },
                      }}
                      whileTap={{
                        scale: 0.98,
                      }}
                      className={`group relative flex min-h-[112px] flex-col justify-between overflow-hidden rounded-md border border-slate-200/80 bg-[#f8fafc] p-3.5 transition-all duration-300 hover:bg-white hover:shadow-[0_10px_30px_-12px_rgba(3,37,76,0.18)] ${item.hoverBorder}`}
                    >
                      {/* Subtle bottom animation */}
                      <span
                        className="absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-500 group-hover:w-full"
                        style={{
                          backgroundColor: item.iconColor,
                        }}
                      />

                      {/* Icon + Arrow */}
                      <div className="flex items-center justify-between">
                        <motion.div
                          whileHover={{
                            scale: 1.08,
                            rotate: 2,
                          }}
                          transition={{
                            duration: 0.25,
                          }}
                          className={`rounded-md p-2 ${item.iconBg}`}
                          style={{
                            color: item.iconColor,
                          }}
                        >
                          <Icon className="h-4 w-4" strokeWidth={2} />
                        </motion.div>

                        <ArrowUpRight
                          className={`h-3.5 w-3.5 text-slate-300 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 ${item.hoverText}`}
                        />
                      </div>

                      {/* Content */}
                      <div className="mt-4 min-w-0">
                        <span className="block text-[9px] font-bold uppercase tracking-wider text-slate-400">{item.label}</span>

                        <p className={`mt-0.5 truncate text-xs font-bold text-[#03254C] transition-colors duration-300 ${item.hoverText}`}>
                          {item.value}
                        </p>
                      </div>
                    </motion.a>
                  );
                })}
              </motion.div>

              {/* =========================
                  HEAD OFFICE
              ========================= */}
              <motion.div
                variants={fadeRight}
                className="flex flex-col justify-between space-y-4 rounded-md border border-[#03254C]/10 bg-[#03254C]/5 p-3.5 lg:col-span-4"
              >
                <div className="flex items-start gap-2.5">
                  {/* Location Icon */}
                  <motion.div
                    whileHover={{
                      scale: 1.08,
                      rotate: -3,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                    className="mt-0.5 shrink-0 rounded-md bg-[#157327] p-2 text-white shadow-sm"
                  >
                    <MapPin className="h-3.5 w-3.5" strokeWidth={2} />
                  </motion.div>

                  {/* Address */}
                  <div className="min-w-0">
                    <span className="block text-[9px] font-bold uppercase tracking-wider text-slate-500">Visit Our Office</span>

                    <p className="mt-0.5 break-words text-[11px] font-semibold leading-[1.55] text-[#03254C]">
                      813, Silver Rediance-4, Gota, Jagatpur Road, Gota SG Highway, Gujarat 382470
                    </p>
                  </div>
                </div>

                {/* Navigation Button */}
                <motion.a
                  href="https://www.google.com/maps/dir/?api=1&destination=813%2C%20Silver%20Rediance-4%2C%20Gota%2C%20Jagatpur%20Road%2C%20Gota%20SG%20Highway%2C%20Gujarat%20382470"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    y: -2,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  className="inline-flex min-h-10 w-full items-center justify-center gap-1.5 rounded-md bg-[#F26522] px-3 py-2.5 text-[11px] font-bold text-white shadow-sm transition-all duration-300 hover:bg-[#d85416] hover:shadow-md"
                >
                  <span>Navigate on Maps</span>

                  <Navigation className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </MotionConfig>
  );
}
