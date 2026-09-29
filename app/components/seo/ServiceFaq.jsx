import { ChevronDown } from "lucide-react";

/* Server-rendered so every answer is in the HTML, matching the FAQPage JSON-LD */
export default function ServiceFaq({ slug, faqs }) {
  const headingId = `${slug}-faq`;

  return (
    <section aria-labelledby={headingId} className="bg-white">
      <div className="mx-auto max-w-4xl px-5 py-10 sm:px-8 lg:py-14">
        <h2 id={headingId} className="text-xl font-bold text-[#03254C] sm:text-2xl">
          Frequently Asked Questions
        </h2>

        <div className="mt-5 divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white">
          {faqs.map((faq, index) => (
            <details key={faq.question} open={index === 0} className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-4 py-3.5 text-left [&::-webkit-details-marker]:hidden">
                <h3 className="text-[13px] font-bold text-[#03254C] sm:text-sm">{faq.question}</h3>
                <ChevronDown className="h-4 w-4 shrink-0 text-[#F26522] transition-transform duration-300 group-open:rotate-180" />
              </summary>

              <p className="px-4 pb-4 text-[13px] leading-6 text-slate-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
