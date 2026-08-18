"use client";

import {
  Lightbulb,
  Settings,
  Code,
  Rocket,
  PenTool,
  DatabaseBackup,
  ShieldCheck,
  Headphones,
} from "lucide-react";
import Section from "@/components/shared/Section";

const steps = [
  {
    icon: Lightbulb,
    title: "Discovery & Workflow Mapping",
    desc: "We start by understanding how your team manages leads, customers, sales, follow-ups, approvals, and daily tasks. This helps us define what your custom CRM actually needs to do.",
    color: "text-brand-blue",
  },
  {
    icon: Settings,
    title: "CRM Architecture & Data Model",
    desc: "We plan how your CRM will organize customers, contacts, leads, deals, activities, users, and other business data so the system is structured for reporting and future growth.",
    color: "text-brand-lime",
  },
  {
    icon: PenTool,
    title: "CRM UX/UI Design",
    desc: "We design dashboards, pipelines, forms, customer profiles, and other CRM screens around how your team will use the software, keeping important information easy to find.",
    color: "text-brand-coral",
  },
  {
    icon: Code,
    title: "Custom CRM Development",
    desc: "Our developers build the CRM modules, business logic, user roles, workflows, dashboards, APIs, and other functionality defined during the planning stage.",
    color: "text-brand-blue",
  },
  {
    icon: DatabaseBackup,
    title: "Data Migration & CRM Integration",
    desc: "If you are moving from spreadsheets, a legacy CRM, or another system, we help migrate the required data and connect your CRM with existing business tools through APIs and integrations.",
    color: "text-brand-graphite",
  },
  {
    icon: ShieldCheck,
    title: "Testing & Security",
    desc: "We test CRM workflows, permissions, forms, integrations, reports, and important user scenarios before launch. Role-based access and secure data handling are also verified.",
    color: "text-brand-lime",
  },
  {
    icon: Rocket,
    title: "Deployment & Team Onboarding",
    desc: "Once the CRM is ready, we deploy it to the production environment and help your team understand the new workflows, features, and day-to-day CRM processes.",
    color: "text-brand-coral",
  },
  {
    icon: Headphones,
    title: "Support & Continuous Improvements",
    desc: "CRM development does not end at launch. We provide ongoing support, maintenance, improvements, integrations, and new features as your business and CRM requirements evolve.",
    color: "text-green-600",
  },
];

export default function CrmProcessTimeline() {
  return (
    <Section className="bg-brand-mist border-b-2 border-brand-graphite">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-brand-blue text-xl font-mono font-bold tracking-wider uppercase">
            OUR CRM DEVELOPMENT PROCESS
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-4xl font-extrabold text-brand-graphite leading-tight">
            From Business Workflow to{" "}
            <span className="bg-gradient-to-r from-brand-blue to-brand-coral bg-clip-text text-transparent">
              Custom CRM Software
            </span>
          </h2>

          <p className="text-brand-graphite/70 leading-relaxed font-sans">
            Our CRM development process takes your requirements from initial
            workflow discovery through design, development, integration,
            testing, deployment, and ongoing improvements.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-brand-graphite/10 -ml-[2px] md:ml-0 rounded-full" />
          <div className="space-y-12">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={step.title}
                  className="relative flex flex-col md:flex-row items-start md:items-center w-full group"
                >
                  {/* Step Content */}
                  <div
                    className={`md:w-1/2 w-full pl-20 md:pl-0 ${
                      isEven
                        ? "md:pr-12 md:text-right"
                        : "md:pl-12 md:text-left md:ml-auto"
                    }`}
                  >
                    <div className="bg-white p-6 md:p-8 rounded-[32px] border-2 border-brand-graphite shadow-flat hover:shadow-premium hover:-translate-y-1 transition-all duration-300 text-left md:text-inherit">
                      <span className="text-brand-graphite/40 font-mono font-bold text-sm mb-2 block">
                        STEP {String(idx + 1).padStart(2, "0")}
                      </span>

                      <h3 className="text-xl md:text-xl font-bold text-brand-graphite mb-3">
                        {step.title}
                      </h3>

                      <p className="text-brand-graphite/70 font-sans text-xs md:text-sm leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>

                  {/* Timeline Node */}
                  <div className="absolute left-6 md:left-1/2 -ml-6 w-12 h-12 bg-white rounded-full border-4 border-brand-graphite flex items-center justify-center z-10 shadow-sm top-4 md:top-auto group-hover:scale-110 transition-transform duration-300">
                    <step.icon
                      className={`w-5 h-5 ${
                        step.color === "text-brand-lime"
                          ? "text-green-600"
                          : step.color
                      }`}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}