"use client";

import { CheckCircle2, Sliders, Zap, ShieldCheck, Coins } from "lucide-react";
import Section from "@/components/shared/Section";

const advantages = [
  {
    icon: Sliders,
    title: "CRM Built Around Your Workflows",
    desc: "Custom CRM development lets us build sales stages, fields, approvals, roles, and business rules around the way your team actually works.",
    color: "text-brand-blue",
    bg: "bg-brand-blue/10",
  },
  {
    icon: Coins,
    title: "Greater Control Over Your CRM",
    desc: "Build the features your business needs instead of paying for a large set of features you may never use. You have greater control over how the CRM evolves.",
    color: "text-brand-lime",
    bg: "bg-brand-lime/20",
  },
  {
    icon: Zap,
    title: "CRM Workflow Automation",
    desc: "Automate repetitive tasks such as lead assignment, follow-up reminders, notifications, approvals, record updates, and other sales workflows.",
    color: "text-brand-coral",
    bg: "bg-brand-coral/10",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Scalable CRM Architecture",
    desc: "Design your CRM with role-based access, secure data handling, integrations, and a scalable architecture that can grow with your business.",
    color: "text-brand-graphite",
    bg: "bg-gray-200",
  },
];

export default function WhyCustomCrm() {
  return (
    <Section className="bg-white border-b-2 border-brand-graphite">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-brand-blue text-xl font-mono font-bold tracking-wider uppercase">
            The Advantage
          </span>

          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-graphite leading-tight">
            Why Choose{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-indigo-600">
              Custom CRM Development?
            </span>
          </h2>

          <p className="text-brand-graphite/70 leading-relaxed font-sans">
            Standard CRM platforms work well for common sales processes, but
            your business may need different workflows, integrations,
            automation, and reporting. Custom CRM software lets you build those
            requirements directly into your system.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {advantages.map((adv, idx) => (
            <div
              key={idx}
              className="group relative p-8 rounded-[32px] bg-brand-mist border-2 border-brand-graphite shadow-flat hover:shadow-premium transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className={`w-14 h-14 rounded-2xl ${adv.bg} border border-brand-graphite/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <adv.icon
                  className={`w-7 h-7 ${adv.color === "text-brand-lime" ? "text-green-600" : adv.color}`}
                />
              </div>
              <h3 className="text-2xl font-bold text-brand-graphite mb-3">
                {adv.title}
              </h3>
              <p className="text-brand-graphite/70 font-sans leading-relaxed">
                {adv.desc}
              </p>

              {/* Decorative corner element */}
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <CheckCircle2 className="w-6 h-6 text-brand-lime" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
