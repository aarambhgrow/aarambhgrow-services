"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Award,
  BriefcaseBusiness,
  Check,
  CheckCircle2,
  ChevronDown,
  ClipboardCheck,
  FileText,
  ShieldCheck,
  Target,
} from "lucide-react";

/* =========================================================
   SAFE CONTENT RENDERER

   Data files describe list items as plain strings or as
   objects using several different key pairs, so every
   renderer here has to cope with all of them.
========================================================= */

const ItemContent = ({ item }) => {
  if (item === null || item === undefined) return null;

  if (typeof item === "string" || typeof item === "number") {
    return <>{item}</>;
  }

  if (typeof item !== "object") return null;

  const title = item.title || item.name || item.step;
  const body = item.description || item.desc;

  if (title && body) {
    return (
      <>
        <strong className="font-semibold text-[#03254C]">{title}</strong> <span>{body}</span>
      </>
    );
  }

  return <span>{title || body || null}</span>;
};

const getItemTitle = (item, fallback = "") => {
  if (typeof item === "string" || typeof item === "number") return String(item);

  if (item && typeof item === "object") {
    return item.title || item.name || item.shortTitle || item.step || fallback;
  }

  return fallback;
};

const getItemBody = (item) => {
  if (item && typeof item === "object") return item.description || item.desc || "";
  return "";
};

/* =========================================================
   SECTION REGISTRY

   Every service data file shares benefits / suitedFor /
   whatWeDo / documents / process / whyChoose, plus a few
   service-specific lists. Any array key in the entry that is
   not listed here still gets a tab with a humanised label.
========================================================= */

const SECTION_DEFS = {
  benefits: { navLabel: "Benefits", title: "Key Benefits", variant: "cards" },
  suitedFor: { navLabel: "Suited For", title: "Best Suitable For" },
  whatWeDo: { navLabel: "What We Do", title: "What AarambhGrow Does" },
  financeAreas: { navLabel: "Finance Areas", title: "Finance Areas" },
  fundingAreas: { navLabel: "Funding Areas", title: "Funding Areas" },
  grantAreas: { navLabel: "Grant Areas", title: "Grant Areas" },
  schemeAreas: { navLabel: "Scheme Areas", title: "Scheme Areas" },
  supportAreas: { navLabel: "Support Areas", title: "Support Areas" },
  loanTypes: { navLabel: "Loan Types", title: "Loan & Credit Facilities" },
  loanCategories: { navLabel: "Loan Categories", title: "Loan Categories" },
  grantTypes: { navLabel: "Grant Types", title: "Grant Types" },
  schemeCategories: { navLabel: "Scheme Categories", title: "Scheme Categories" },
  investmentSources: { navLabel: "Investment Sources", title: "Investment Sources" },
  workingCapitalNeeds: { navLabel: "Working Capital", title: "Working Capital Needs" },
  termLoanNeeds: { navLabel: "Term Loan", title: "Term Loan Needs" },
  fundingNeeds: { navLabel: "Funding Needs", title: "Funding Needs" },
  businessNeeds: { navLabel: "Business Needs", title: "Business Needs" },
  businessActivities: { navLabel: "Activities", title: "Eligible Business Activities" },
  businessCategories: { navLabel: "Categories", title: "Business Categories" },
  foodCategories: { navLabel: "Food Categories", title: "Food Processing Categories" },
  textileActivities: { navLabel: "Textile Activities", title: "Textile Activities" },
  suitedIndustries: { navLabel: "Industries", title: "Suited Industries" },
  eligibleApplicants: { navLabel: "Eligible Applicants", title: "Eligible Applicants" },
  eligibleProjects: { navLabel: "Eligible Projects", title: "Eligible Projects" },
  documents: { navLabel: "Documents", title: "Commonly Required Documents" },
  process: { navLabel: "Process", title: "Our Process", variant: "process" },
  whyChoose: { navLabel: "Why Us", title: "Why Choose AarambhGrow", variant: "cards" },
};

/* Keys that are entry metadata, never tabs. */
const NON_SECTION_KEYS = ["seoKeywords", "faqs"];

const humanise = (key) => key.replace(/([A-Z])/g, " $1").replace(/^./, (c) => c.toUpperCase());

const buildSections = (entry) => {
  const known = Object.keys(SECTION_DEFS);
  const extra = Object.keys(entry).filter(
    (key) => !known.includes(key) && !NON_SECTION_KEYS.includes(key) && Array.isArray(entry[key]),
  );

  /* Registry order first, then whatever is left, but keep documents → process → whyChoose at the end. */
  const tail = ["documents", "process", "whyChoose"];
  const ordered = [...known.filter((key) => !tail.includes(key)), ...extra, ...tail];

  return ordered
    .filter((key) => Array.isArray(entry[key]) && entry[key].length > 0)
    .map((key) => {
      const def = SECTION_DEFS[key] || { navLabel: humanise(key), title: humanise(key) };
      return { key, id: key, items: entry[key], ...def };
    });
};

/* =========================================================
   BUILDING BLOCKS
========================================================= */

const ListItem = ({ item }) => (
  <li className="flex items-start gap-2.5">
    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#157327]" />

    <span className="text-[13px] leading-6 text-slate-600">
      <ItemContent item={item} />
    </span>
  </li>
);

const InfoCard = ({ icon: Icon, title, children }) => (
  <div className="rounded-xl border border-slate-200 bg-white p-4 transition-colors duration-200 hover:border-[#F26522]/40">
    <div className="mb-2.5 flex items-center gap-2.5">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#fff7ed]">
        <Icon className="h-4 w-4 text-[#F26522]" />
      </span>

      <h4 className="text-sm font-bold leading-snug text-[#03254C]">{title}</h4>
    </div>

    {children && <div className="text-[13px] leading-6 text-slate-600">{children}</div>}
  </div>
);

/* Alternating icon pairs keep the card grids visually varied. */
const CARD_ICONS = {
  benefits: [ShieldCheck, ClipboardCheck],
  whyChoose: [Award, ShieldCheck],
  default: [Target, BriefcaseBusiness],
};

/* =========================================================
   SECTION VARIANTS
========================================================= */

const CardsSection = ({ sectionKey, items }) => {
  const [IconA, IconB] = CARD_ICONS[sectionKey] || CARD_ICONS.default;

  return (
    <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
      {items.map((item, index) => (
        <InfoCard key={index} icon={index % 2 === 0 ? IconA : IconB} title={getItemTitle(item, `Item ${index + 1}`)}>
          {getItemBody(item)}
        </InfoCard>
      ))}
    </div>
  );
};

const ListSection = ({ items }) => (
  <ul className="grid gap-x-8 gap-y-2.5 sm:grid-cols-2">
    {items.map((item, index) => (
      <ListItem key={index} item={item} />
    ))}
  </ul>
);

const DocumentsSection = ({ items }) => (
  <div>
    <p className="mb-4 flex items-start gap-2 rounded-lg bg-[#fff7ed] px-3.5 py-2.5 text-xs leading-5 text-[#8a4a1c]">
      <FileText className="mt-0.5 h-4 w-4 shrink-0 text-[#F26522]" />
      <span>Requirements may vary based on the business, activity, and applicable regulations.</span>
    </p>

    <ListSection items={items} />
  </div>
);

const ProcessSection = ({ items }) => (
  <ol className="relative ml-3 space-y-4 border-l border-dashed border-slate-300 pl-6">
    {items.map((item, index) => (
      <li key={index} className="relative">
        <span className="absolute -left-[37px] flex h-6 w-6 items-center justify-center rounded-full bg-[#03254C] text-[10px] font-bold text-white">
          {index + 1}
        </span>

        <p className="text-[13px] leading-6 text-slate-600">
          <ItemContent item={item} />
        </p>
      </li>
    ))}
  </ol>
);

const FaqSection = ({ faqs }) => {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white">
      {faqs.map((faq, index) => {
        const isOpen = openFaq === index;

        return (
          <div key={index}>
            <button
              type="button"
              onClick={() => setOpenFaq(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="flex w-full cursor-pointer items-center justify-between gap-4 px-4 py-3.5 text-left"
            >
              <span className="text-[13px] font-bold text-[#03254C]">{faq.question}</span>

              <ChevronDown
                className={`h-4 w-4 shrink-0 text-[#F26522] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
              />
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.22 }}
                  className="overflow-hidden"
                >
                  <p className="px-4 pb-4 text-[13px] leading-6 text-slate-600">{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

const SectionBody = ({ section }) => {
  if (section.variant === "process") return <ProcessSection items={section.items} />;
  if (section.variant === "cards") return <CardsSection sectionKey={section.key} items={section.items} />;
  if (section.key === "documents") return <DocumentsSection items={section.items} />;
  return <ListSection items={section.items} />;
};

/* =========================================================
   SERVICE DETAILS

   Shared body rendered below each service's own hero.
   `data`  – the service data file export (app/data/*.js)
   `slug`  – anchor id, also the target of the hero's
             "Explore" button
   `intro` – { title, text } heading and paragraph for the
             overview block
========================================================= */

export default function ServiceDetails({ data, slug, intro = {}, faqs: faqsProp = [] }) {
  const entry = data?.services?.[0];

  const [activeTab, setActiveTab] = useState(0);

  if (!entry) return null;

  const category = entry.category || data.category;
  const label = entry.shortTitle || entry.name || entry.title;

  const sections = buildSections(entry);

  const faqs = entry.faqs?.length ? entry.faqs : faqsProp;

  const tabs = [
    ...sections,
    ...(faqs.length ? [{ key: "faqs", id: "faqs", navLabel: "FAQs", title: "Frequently Asked Questions" }] : []),
  ];

  const current = tabs[Math.min(activeTab, tabs.length - 1)];

  const contentId = `${slug}-content`;

  return (
    <section id={slug} className="bg-[#fafafa] text-slate-800">
      <div id={contentId} className="mx-auto max-w-7xl scroll-mt-24 px-5 py-10 sm:px-8 lg:px-10 lg:py-14">
        {/* Overview */}
        <div className="grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <h2 className="text-xl font-bold text-[#03254C] sm:text-2xl">{intro.title || entry.title}</h2>

            <p className="mt-3 text-sm leading-7 text-slate-600">{intro.text || entry.description}</p>
          </div>

          <div className="h-fit rounded-xl border border-slate-200 bg-white p-5 lg:sticky lg:top-24 lg:col-span-4">
            {category && <p className="text-[11px] font-bold uppercase tracking-wider text-[#F26522]">{category}</p>}

            <h3 className="mt-1 text-base font-bold text-[#03254C]">{label}</h3>

            {entry.tagline && <p className="mt-2 text-[13px] leading-6 text-slate-500">{entry.tagline}</p>}

            <ul className="mt-3 space-y-2">
              {["End-to-end documentation support", "Expert-reviewed filings", "Transparent, fixed-scope pricing"].map((point) => (
                <li key={point} className="flex items-start gap-2 text-[13px] leading-6 text-slate-600">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#157327]" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <a
              href="/contact"
              className="mt-4 inline-flex w-full items-center justify-center rounded-lg bg-[#F26522] px-5 py-2.5 text-xs font-bold text-white transition-colors hover:bg-[#d95316]"
            >
              Talk to an Advisor
            </a>
          </div>
        </div>

        {/* Tabbed detail */}
        {tabs.length > 0 && (
          <div className="mt-10">
            <div className="sticky top-16 z-20 -mx-5 border-b border-slate-200 bg-[#fafafa]/95 px-5 backdrop-blur-sm sm:-mx-8 sm:px-8 lg:-mx-10 lg:px-10">
              <div role="tablist" className="flex gap-1 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {tabs.map((tab, index) => {
                  const isActive = tab === current;

                  return (
                    <button
                      key={tab.id}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setActiveTab(index)}
                      className={`relative shrink-0 cursor-pointer whitespace-nowrap px-4 py-3 text-[13px] font-semibold transition-colors ${
                        isActive ? "text-[#F26522]" : "text-slate-500 hover:text-[#03254C]"
                      }`}
                    >
                      {tab.navLabel}

                      {isActive && (
                        <motion.span layoutId={`${contentId}-tab`} className="absolute inset-x-2 -bottom-px h-0.5 rounded-full bg-[#F26522]" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                role="tabpanel"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.22 }}
                className="pt-7"
              >
                <h3 className="mb-4 text-base font-bold text-[#03254C] sm:text-lg">{current.title}</h3>

                {current.key === "faqs" ? <FaqSection faqs={faqs} /> : <SectionBody section={current} />}
              </motion.div>
            </AnimatePresence>
          </div>
        )}
      </div>
    </section>
  );
}
