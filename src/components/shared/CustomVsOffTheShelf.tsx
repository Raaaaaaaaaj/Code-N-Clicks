"use client";

import { useState } from "react";
import { Check, X, SlidersHorizontal } from "lucide-react";
import Section from "@/components/shared/Section";

const comparisonData = [
  {
    category: "Workflow Flexibility",
    custom: { text: "Built around your specific processes, users, and business rules.", positive: true },
    offShelf: { text: "You adapt your processes to the features and limitations of the product.", positive: false }
  },
  {
    category: "Features",
    custom: { text: "Build only the functionality your business actually needs.", positive: true },
    offShelf: { text: "Comes with predefined features, including some you may never use.", positive: false }
  },
  {
    category: "Integrations",
    custom: { text: "Can be designed to integrate with your existing systems and APIs.", positive: true },
    offShelf: { text: "Depends on the integrations and APIs supported by the vendor.", positive: false }
  },
  {
    category: "Scalability",
    custom: { text: "Architecture can be planned around your expected users, data, and growth.", positive: true },
    offShelf: { text: "Scaling depends on the provider's plans, infrastructure, and product limits.", positive: false }
  },
  {
    category: "Data Ownership",
    custom: { text: "You can maintain control over your application, database, and source code based on your agreement.", positive: true },
    offShelf: { text: "Data and application access depend on the vendor's policies and platform.", positive: false }
  },
  {
    category: "Security Controls",
    custom: { text: "Security controls, roles, permissions, and architecture can be designed around your requirements.", positive: true },
    offShelf: { text: "Security and access controls are determined largely by the vendor's platform.", positive: false }
  },
  {
    category: "Long-term Costs",
    custom: { text: "Higher upfront investment, with ongoing costs depending on hosting, maintenance, and development needs.", positive: true },
    offShelf: { text: "Lower initial investment is common, but recurring subscriptions and usage-based costs can increase over time.", positive: false }
  }
];

export default function CustomVsOffTheShelf() {
  const [activeTab, setActiveTab] = useState<"custom" | "offshelf">("custom");

  return (
    <Section className="bg-white border-b-2 border-brand-graphite">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="text-brand-blue text-xl font-mono font-bold tracking-wider uppercase">Comparison</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-graphite leading-none">
            <span className="bg-gradient-to-r from-brand-blue via-indigo-600 to-brand-coral bg-clip-text text-transparent"> Custom Software </span> <br /> vs <br /><span className="bg-gradient-to-r from-brand-blue via-indigo-600 to-brand-coral bg-clip-text text-transparent"> Off-the-Shelf Tools </span>
          </h2>
          <p className="text-brand-graphite/70 leading-relaxed">
            Not every business needs custom software. Compare the trade-offs in flexibility, integrations, ownership, scalability, and long-term investment before you decide.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Mobile/Tablet Toggle View */}
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
                Custom Software
              </button>
              <button
                onClick={() => setActiveTab("offshelf")}
                className={`flex-1 py-3 text-sm font-bold rounded-full transition-all ${
                  activeTab === "offshelf"
                    ? "bg-brand-graphite text-white shadow-flat"
                    : "text-brand-graphite/70 hover:text-brand-graphite"
                }`}
              >
                Off-the-Shelf
              </button>
            </div>

            <div className="space-y-4">
              {comparisonData.map((item, idx) => {
                const data = activeTab === "custom" ? item.custom : item.offShelf;
                return (
                  <div key={idx} className="bg-white border-2 border-brand-graphite rounded-2xl p-5 shadow-sm">
                    <h4 className="text-xs font-mono font-bold text-brand-graphite/60 uppercase tracking-wider mb-2">
                      {item.category}
                    </h4>
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5">
                        {data.positive ? (
                          <Check className="w-5 h-5 text-brand-lime" />
                        ) : (
                          <X className="w-5 h-5 text-brand-coral" />
                        )}
                      </div>
                      <p className="text-sm font-semibold text-brand-graphite">{data.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Desktop Matrix View */}
          <div className="hidden lg:block overflow-hidden border-2 border-brand-graphite rounded-[32px] shadow-premium">
            <div className="grid grid-cols-3 bg-brand-mist border-b-2 border-brand-graphite">
              <div className="p-6 flex items-center gap-2 text-sm font-mono font-bold text-brand-graphite uppercase tracking-wider">
                <SlidersHorizontal className="w-5 h-5" /> Evaluation Criteria
              </div>
              <div className="p-6 bg-brand-blue text-white border-l-2 border-brand-graphite flex items-center justify-center text-xl font-extrabold">
                Custom Software
              </div>
              <div className="p-6 bg-brand-graphite text-white border-l-2 border-brand-graphite flex items-center justify-center text-xl font-extrabold">
                Off-the-Shelf Tools
              </div>
            </div>

            <div className="bg-white">
              {comparisonData.map((item, idx) => (
                <div 
                  key={idx} 
                  className={`grid grid-cols-3 hover:bg-brand-mist/50 transition-colors ${
                    idx !== comparisonData.length - 1 ? "border-b-2 border-brand-graphite/20" : ""
                  }`}
                >
                  <div className="p-6 font-bold text-brand-graphite flex items-center">
                    {item.category}
                  </div>
                  
                  <div className="p-6 border-l-2 border-brand-graphite/20 flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-lime/20 flex items-center justify-center">
                      <Check className="w-4 h-4 text-green-700" />
                    </div>
                    <span className="text-sm text-brand-graphite/80 leading-relaxed font-sans">
                      {item.custom.text}
                    </span>
                  </div>
                  
                  <div className="p-6 border-l-2 border-brand-graphite/20 flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-coral/10 flex items-center justify-center">
                      <X className="w-4 h-4 text-brand-coral" />
                    </div>
                    <span className="text-sm text-brand-graphite/80 leading-relaxed font-sans">
                      {item.offShelf.text}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
