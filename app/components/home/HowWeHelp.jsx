import { CheckCircle2 } from "lucide-react";

const SUPPORT_AREAS = [
  "Business registration and startup setup support",
  "Compliance and certification assistance",
  "Startup funding and government scheme guidance",
  "MSME loan and business finance readiness",
  "Project reports and application documentation",
  "Digital growth and business advisory support",
];

export default function HowWeHelp() {
  return (
    <section className="w-full bg-white py-12 font-sans text-[#0f172a] sm:py-16">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8">
        <div>
          <h2 id="funding-help" className="text-2xl font-black leading-tight tracking-tight text-[#0f2a4a] sm:text-3xl">
            Funding & Government Scheme Support for Growing Businesses
          </h2>

          <p className="mt-4 text-xs leading-relaxed text-slate-600 sm:text-sm">
            We help eligible businesses assess funding requirements, identify relevant startup funding, MSME finance, government grants and
            credit-support opportunities, prepare project and financial information, and organize application documentation.
          </p>
        </div>

        <div>
          <h2 id="how-we-help" className="text-2xl font-black leading-tight tracking-tight text-[#0f2a4a] sm:text-3xl">
            How AarambhGrow Supports Your Business
          </h2>

          <ul className="mt-4 space-y-2.5">
            {SUPPORT_AREAS.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-xs leading-relaxed text-slate-600 sm:text-sm">
                <CheckCircle2 aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[#157327]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
