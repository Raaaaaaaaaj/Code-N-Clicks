import React from "react";
import { selectionSteps } from "@/data/technologiesData";

export const TechSelectionSteps: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-white border-b-2 border-brand-graphite">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="text-brand-blue text-xl font-mono font-bold tracking-widest uppercase">
            Engineering Methodology
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-brand-graphite tracking-tight leading-tight">
            HOW WE CHOOSE THE RIGHT TECHNOLOGY STACK
          </h2>
          <p className="text-brand-graphite/70 text-base font-sans leading-relaxed">
            Every architectural decision is guided by your business roadmap, performance needs, and long-term operating costs.
          </p>
        </div>

        {/* Timeline / Numbered Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {selectionSteps.map((step) => (
            <div
              key={step.step}
              className="p-8 bg-brand-mist/50 border-2 border-brand-graphite rounded-[28px] relative hover:shadow-flat transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-mono font-extrabold text-brand-blue group-hover:scale-110 transition-transform">
                    {step.step}
                  </span>
                  <div className="w-8 h-0.5 bg-brand-graphite/20 group-hover:w-12 group-hover:bg-brand-blue transition-all" />
                </div>
                <h3 className="text-xl font-heading font-bold text-brand-graphite mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-brand-graphite/80 leading-relaxed font-sans">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
