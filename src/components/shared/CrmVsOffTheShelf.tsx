"use client";

import { useState } from "react";
import { Check, X, SlidersHorizontal } from "lucide-react";
import Section from "@/components/shared/Section";

const comparisonData = [
  {
    category: "Business Workflows",
    custom: {
      text: "Built around your sales process, customer journey, approval rules, terminology, and business logic.",
      positive: true,
    },
    offShelf: {
      text: "Designed for common business processes. Complex or unique workflows may require configuration or workarounds.",
      positive: false,
    },
  },
  {
    category: "CRM Features",
    custom: {
      text: "Choose the CRM modules and features your business actually needs, from lead management to custom reporting.",
      positive: true,
    },
    offShelf: {
      text: "Provides a broad set of ready-made CRM features, including many that your team may not need.",
      positive: true,
    },
  },
  {
    category: "Customization",
    custom: {
      text: "Control the interface, data structure, workflows, permissions, automation, and business rules.",
      positive: true,
    },
    offShelf: {
      text: "Customization depends on the platform's configuration options, extensions, APIs, and plan limitations.",
      positive: false,
    },
  },
  {
    category: "CRM Integrations",
    custom: {
      text: "Build integrations around your existing ERP, accounting software, payment systems, communication tools, APIs, and internal applications.",
      positive: true,
    },
    offShelf: {
      text: "Usually includes popular integrations, while highly specific requirements may need additional development or third-party tools.",
      positive: false,
    },
  },
  {
    category: "Workflow Automation",
    custom: {
      text: "Create automation for your exact processes, including lead assignment, follow-ups, approvals, notifications, and record updates.",
      positive: true,
    },
    offShelf: {
      text: "Provides built-in automation, but advanced workflows depend on what the platform supports.",
      positive: false,
    },
  },
  {
    category: "Data & Architecture",
    custom: {
      text: "The CRM data model and application architecture can be designed around your business requirements and future roadmap.",
      positive: true,
    },
    offShelf: {
      text: "Your CRM operates within the platform's existing data model, architecture, and product ecosystem.",
      positive: false,
    },
  },
  {
    category: "Initial Investment",
    custom: {
      text: "Usually requires a higher upfront investment because the CRM is designed and developed specifically for your requirements.",
      positive: false,
    },
    offShelf: {
      text: "Generally faster and cheaper to start because the software is already developed and available through subscription plans.",
      positive: true,
    },
  },
  {
    category: "Time to Launch",
    custom: {
      text: "Development time depends on the number of modules, integrations, automation, migration, and customization required.",
      positive: false,
    },
    offShelf: {
      text: "Can usually be configured and launched faster because the core CRM platform already exists.",
      positive: true,
    },
  },
  {
    category: "Long-Term Flexibility",
    custom: {
      text: "Your CRM can evolve with your business, including new modules, workflows, integrations, and product requirements.",
      positive: true,
    },
    offShelf: {
      text: "Future capabilities depend largely on the platform's roadmap, available features, APIs, and customization options.",
      positive: false,
    },
  },
  {
    category: "Best Fit",
    custom: {
      text: "Businesses with unique workflows, specialized requirements, complex integrations, or a need for greater software control.",
      positive: true,
    },
    offShelf: {
      text: "Businesses whose sales and customer management processes fit well within an established CRM platform.",
      positive: true,
    },
  },
];

export default function CrmVsOffTheShelf() {
  const [activeTab, setActiveTab] = useState<"custom" | "offshelf">("custom");

  return (
    <Section className="bg-white border-b-2 border-brand-graphite">
      {" "}
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}{" "}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          {" "}
          <span className="text-brand-blue text-xl font-mono font-bold tracking-wider uppercase">
            CHOOSE THE RIGHT CRM APPROACH{" "}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-4xl font-extrabold text-brand-graphite leading-tight">
            Custom CRM vs{" "}
            <span className="bg-gradient-to-r from-brand-blue via-indigo-600 to-brand-coral bg-clip-text text-transparent">
              Off-the-Shelf CRM
            </span>
          </h2>
          <p className="text-brand-graphite/70 leading-relaxed font-sans max-w-2xl mx-auto">
            Not every business needs a custom CRM. Compare both approaches based
            on your workflows, integrations, automation needs, budget, and
            long-term business requirements.
          </p>
        </div>
        <div className="max-w-5xl mx-auto">
          {/* Mobile / Tablet Toggle */}
          <div className="lg:hidden mb-8">
            <div className="flex p-1 bg-brand-mist border-2 border-brand-graphite rounded-full mb-6">
              <button
                onClick={() => setActiveTab("custom")}
                className={`flex-1 py-3 text-sm font-bold rounded-full transition-all ${
                  activeTab === "custom"
                    ? "bg-brand-blue text-white shadow-flat"
                    : "text-brand-graphite/70 hover:text-brand-graphite"
                }`}
              >
                Custom CRM
              </button>

              <button
                onClick={() => setActiveTab("offshelf")}
                className={`flex-1 py-3 text-sm font-bold rounded-full transition-all ${
                  activeTab === "offshelf"
                    ? "bg-brand-graphite text-white shadow-flat"
                    : "text-brand-graphite/70 hover:text-brand-graphite"
                }`}
              >
                Off-the-Shelf CRM
              </button>
            </div>

            <div className="space-y-4">
              {comparisonData.map((item, idx) => {
                const data =
                  activeTab === "custom" ? item.custom : item.offShelf;

                return (
                  <div
                    key={idx}
                    className="bg-white border-2 border-brand-graphite rounded-2xl p-5 shadow-sm"
                  >
                    <h4 className="text-xs font-mono font-bold text-brand-graphite/60 uppercase tracking-wider mb-3">
                      {item.category}
                    </h4>

                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 flex-shrink-0">
                        {data.positive ? (
                          <div className="w-6 h-6 rounded-full bg-brand-lime/20 flex items-center justify-center">
                            <Check className="w-4 h-4 text-green-700" />
                          </div>
                        ) : (
                          <div className="w-6 h-6 rounded-full bg-brand-coral/10 flex items-center justify-center">
                            <X className="w-4 h-4 text-brand-coral" />
                          </div>
                        )}
                      </div>

                      <p className="text-sm font-semibold text-brand-graphite leading-relaxed">
                        {data.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Desktop Comparison Matrix */}
          <div className="hidden lg:block overflow-hidden border-2 border-brand-graphite rounded-[32px] shadow-premium">
            {/* Table Header */}
            <div className="grid grid-cols-3 bg-brand-mist border-b-2 border-brand-graphite">
              <div className="p-6 flex items-center gap-2 text-sm font-mono font-bold text-brand-graphite uppercase tracking-wider">
                <SlidersHorizontal className="w-5 h-5" />
                Evaluation
              </div>

              <div className="p-6 bg-brand-blue text-white border-l-2 border-brand-graphite flex items-center justify-center text-xl font-extrabold">
                Custom CRM
              </div>

              <div className="p-6 bg-brand-graphite text-white border-l-2 border-brand-graphite flex items-center justify-center text-xl font-extrabold">
                Off-the-Shelf CRM
              </div>
            </div>

            {/* Comparison Rows */}
            <div className="bg-white">
              {comparisonData.map((item, idx) => (
                <div
                  key={item.category}
                  className={`grid grid-cols-3 hover:bg-brand-mist/50 transition-colors ${
                    idx !== comparisonData.length - 1
                      ? "border-b-2 border-brand-graphite/20"
                      : ""
                  }`}
                >
                  {/* Category */}
                  <div className="p-6 font-bold text-brand-graphite flex items-center">
                    {item.category}
                  </div>

                  {/* Custom CRM */}
                  <div className="p-6 border-l-2 border-brand-graphite/20 flex items-start gap-3">
                    <div
                      className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${
                        item.custom.positive
                          ? "bg-brand-lime/20"
                          : "bg-brand-coral/10"
                      }`}
                    >
                      {item.custom.positive ? (
                        <Check className="w-4 h-4 text-green-700" />
                      ) : (
                        <X className="w-4 h-4 text-brand-coral" />
                      )}
                    </div>

                    <span className="text-sm text-brand-graphite/80 leading-relaxed font-sans">
                      {item.custom.text}
                    </span>
                  </div>

                  {/* Off-the-Shelf CRM */}
                  <div className="p-6 border-l-2 border-brand-graphite/20 flex items-start gap-3">
                    <div
                      className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${
                        item.offShelf.positive
                          ? "bg-brand-blue/10"
                          : "bg-brand-coral/10"
                      }`}
                    >
                      {item.offShelf.positive ? (
                        <Check className="w-4 h-4 text-brand-blue" />
                      ) : (
                        <X className="w-4 h-4 text-brand-coral" />
                      )}
                    </div>

                    <span className="text-sm text-brand-graphite/80 leading-relaxed font-sans">
                      {item.offShelf.text}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Decision Guide */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-6 rounded-2xl bg-brand-blue/5 border-2 border-brand-blue/20">
              <h3 className="text-xl font-bold text-brand-graphite mb-2">
                Choose Custom CRM Development If...
              </h3>

              <p className="text-brand-graphite/70 leading-relaxed">
                Your business has unique workflows, specialized data
                requirements, complex integrations, or needs CRM software that
                can evolve around your own product and operational roadmap.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-brand-coral/20 border-2 border-brand-graphite/10">
              <h3 className="text-xl font-bold text-brand-graphite mb-2">
                Choose an Off-the-Shelf CRM If...
              </h3>

              <p className="text-brand-graphite/70 leading-relaxed">
                Your sales process is relatively standard and an established CRM
                already provides the features, integrations, automation, and
                reporting your team needs.
              </p>
            </div>
          </div>

          {/* Final Takeaway */}
          <div className="mt-8 max-w-3xl mx-auto text-center">
            <p className="text-brand-graphite/70 leading-relaxed">
              <strong className="text-brand-graphite">
                The best CRM is the one that fits your business.
              </strong>{" "}
              If standard CRM software fits your workflow, use it. If your
              business needs deeper customization, integrations, automation, or
              specialized functionality, custom CRM development can give you the
              flexibility to build around those requirements.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
