import Link from "next/link";
import { Search, MapPin, Layout, Code, Rocket } from "lucide-react";

const processSteps = [
  {
    number: "01",
    title: "Understand",
    description: "We study your business model, users, operational workflows, pain points and goals before defining the system.",
    icon: Search,
  },
  {
    number: "02",
    title: "Map",
    description: "We translate workflows into user roles, system flows, data structures, integrations and technical requirements.",
    icon: MapPin,
  },
  {
    number: "03",
    title: "Design",
    description: "We design interfaces around the people who will actually use the software — from admins and managers to customers and operational teams.",
    icon: Layout,
  },
  {
    number: "04",
    title: "Develop",
    description: (
      <>
        We build the application, APIs, database layer, integrations and automation using a{" "}
        <Link href="/services/custom-software-development" className="text-brand-blue underline font-semibold hover:text-blue-400">
          custom software development
        </Link>{" "}
        architecture suited to the project.
      </>
    ),
    icon: Code,
  },
  {
    number: "05",
    title: "Launch & Improve",
    description: "We deploy, test, monitor and improve the system based on real usage and evolving business requirements.",
    icon: Rocket,
  },
];

export default function ProcessTimelineSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#0B0F19] text-white border-b-2 border-brand-graphite relative overflow-hidden">
      {/* Subtle Grid and Line */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="text-brand-blue text-sm font-mono font-bold tracking-wider uppercase">
            METHODOLOGY
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            How We Build Software Around Your Industry
          </h2>
          <p className="text-base md:text-lg text-slate-300 leading-relaxed font-sans">
            Our structured engineering process ensures every feature directly supports your day-to-day operations and team productivity.
          </p>
        </div>

        {/* Desktop Horizontal Timeline / Mobile Vertical Timeline */}
        <div className="hidden lg:grid grid-cols-5 gap-4 relative">
          {/* Horizontal Line Connector */}
          <div className="absolute top-10 left-12 right-12 h-0.5 bg-gradient-to-r from-brand-blue via-slate-700 to-brand-blue/40 z-0" />

          {processSteps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="relative z-10 flex flex-col justify-between bg-slate-900/90 border border-slate-800 rounded-3xl p-6 hover:border-brand-blue/60 transition-all duration-300 min-h-[320px] group"
              >
                <div className="space-y-6">
                  <div className="w-12 h-12 rounded-2xl bg-brand-blue/10 border border-brand-blue/30 flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold text-brand-blue tracking-widest block mb-1">
                      STEP {step.number}
                    </span>
                    <h3 className="text-xl font-bold font-heading text-white">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Vertical Sequence */}
        <div className="lg:hidden space-y-6 relative border-l-2 border-brand-blue/40 ml-4 pl-6">
          {processSteps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 relative space-y-4"
              >
                <div className="absolute -left-[37px] top-6 w-5 h-5 rounded-full bg-brand-blue border-4 border-[#0B0F19]" />
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-blue/15 border border-brand-blue/30 flex items-center justify-center text-brand-blue">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold text-brand-blue">
                      STEP {step.number}
                    </span>
                    <h3 className="text-lg font-bold font-heading text-white">
                      {step.title}
                    </h3>
                  </div>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
