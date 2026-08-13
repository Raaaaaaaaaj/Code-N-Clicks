import Link from "next/link";
import { Compass, Sliders, Network, TrendingUp, Check } from "lucide-react";

const whyPoints = [
  {
    icon: Compass,
    title: "Understand Your Workflow",
    description: "We map how work actually moves through your organization before deciding what the software should automate.",
    badge: "Workflow Analysis",
  },
  {
    icon: Sliders,
    title: "Fit Your Business Rules",
    description: "Your approvals, roles, data structures and operational rules become part of the system instead of forcing your team into a generic workflow.",
    badge: "Custom Logic",
  },
  {
    icon: Network,
    title: "Connect Existing Systems",
    description: "Integrate payment gateways, CRMs, ERPs, accounting tools, messaging platforms, marketplaces and third-party APIs where your business requires them.",
    badge: "API Integrations",
  },
  {
    icon: TrendingUp,
    title: "Scale With Your Operation",
    description: "Architecture can be planned around future users, locations, integrations, automation and changing business requirements.",
    badge: "Scalable Architecture",
  },
];

export default function WhyIndustrySoftwareSection() {
  return (
    <section className="relative py-20 lg:py-28 bg-gradient-to-b from-brand-mist/80 via-white to-brand-mist/50 border-b-2 border-brand-graphite overflow-hidden">
      {/* White-based background vector grid & ambient glows */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0d6cfc2e_1px,transparent_1px),linear-gradient(to_bottom,#0d6cfc2e_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl pointer-events-none" />
      
      {/* Decorative Vector Technical Accents */}
      <svg className="absolute top-10 right-10 w-48 h-48 text-brand-graphite/[0.04] pointer-events-none hidden md:block" fill="none" viewBox="0 0 200 200">
        <pattern id="dot-matrix-why" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="2" fill="currentColor" />
        </pattern>
        <rect width="200" height="200" fill="url(#dot-matrix-why)" />
      </svg>
      <svg className="absolute bottom-10 left-10 w-40 h-40 text-brand-blue/[0.06] pointer-events-none hidden md:block" fill="none" viewBox="0 0 160 160">
        <circle cx="80" cy="80" r="70" stroke="currentColor" strokeWidth="2" strokeDasharray="6 6" />
        <circle cx="80" cy="80" r="40" stroke="currentColor" strokeWidth="1" />
      </svg>

      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mb-16 space-y-4">
          {/* <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-blue/10 text-brand-blue text-xs font-mono font-bold tracking-wider uppercase border border-brand-blue/20">
            <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse" />
            Strategic Value
          </div> */}
          <h2 className="text-3xl md:text-5xl font-extrabold text-brand-graphite tracking-tight leading-tight">
            Why Industry-Specific Software Matters
          </h2>
          <p className="text-base md:text-lg text-brand-graphite/75 leading-relaxed font-sans">
            Off-the-shelf platforms force rigid processes on flexible teams. Purpose-built <Link href="/services/custom-software-development" className="text-brand-blue font-semibold hover:underline">custom software development</Link> aligns technology directly with operating realities, unlocking operational velocity and competitive leverage.
          </p>
        </div>

        {/* 4 Point Visual Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {whyPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <div
                key={point.title}
                className="bg-white/90 backdrop-blur-xs border-2 border-brand-graphite rounded-[32px] p-8 shadow-premium hover:shadow-flat transition-all duration-300 relative space-y-6 group"
              >
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-brand-mist border-2 border-brand-graphite flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
                    <Icon className="w-7 h-7" />
                  </div>
                  <span className="text-xs font-mono font-bold text-brand-graphite/60 bg-brand-mist px-3 py-1 rounded-full border border-brand-graphite/10">
                    0{index + 1} // {point.badge}
                  </span>
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl font-bold font-heading text-brand-graphite group-hover:text-brand-blue transition-colors">
                    {point.title}
                  </h3>
                  <p className="text-sm md:text-base text-brand-graphite/75 leading-relaxed font-sans">
                    {point.description}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-brand-blue pt-2 font-semibold">
                  <Check className="w-4 h-4" /> Designed around industry-specific software requirements
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
