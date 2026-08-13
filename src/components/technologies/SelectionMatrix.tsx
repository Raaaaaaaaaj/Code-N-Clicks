import React from "react";
import { selectionMatrix } from "@/data/technologiesData";
import { CheckCircle2 } from "lucide-react";

export const SelectionMatrix: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-brand-mist border-b-2 border-brand-graphite">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-4">
          <span className="text-brand-blue text-xl font-mono font-bold tracking-widest uppercase">
            Decision Framework
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-brand-graphite tracking-tight leading-tight">
            Which Technology Stack is Right for Your Product?
          </h2>
          <p className="text-brand-graphite/70 font-sans leading-relaxed">
            Technology selection depends on your workload, team skills, and architecture requirements. Below is a guidance matrix of stack combinations we may consider for your product.
          </p>
        </div>

        {/* DESKTOP TABLE VIEW */}
        <div className="hidden md:block bg-white border-2 border-brand-graphite rounded-[28px] overflow-hidden shadow-premium">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-brand-graphite text-white font-mono text-xs uppercase tracking-wider">
                <th className="py-5 px-6 border-b border-brand-graphite w-2/5 font-bold">Product Requirement</th>
                <th className="py-5 px-6 border-b border-brand-graphite w-3/5 font-bold">Technologies We May Consider</th>
              </tr>
            </thead>
            <tbody className="divide-y-2 divide-brand-graphite/10 font-sans">
              {selectionMatrix.map((row, i) => (
                <tr key={row.requirement} className={i % 2 === 0 ? "bg-white" : "bg-brand-mist/40"}>
                  <td className="py-4 px-6 font-bold text-brand-graphite text-sm md:text-base flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0" />
                    <span>{row.requirement}</span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex flex-wrap gap-2">
                      {row.techs.split(", ").map((tech) => (
                        <span
                          key={tech}
                          className="inline-block px-3 py-1 bg-white border border-brand-graphite/30 rounded-lg text-xs font-mono font-semibold text-brand-graphite shadow-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* MOBILE CARD LIST VIEW */}
        <div className="block md:hidden space-y-4">
          {selectionMatrix.map((row) => (
            <div
              key={row.requirement}
              className="p-5 bg-white border-2 border-brand-graphite rounded-[20px] shadow-sm space-y-3"
            >
              <div className="flex items-center gap-2 text-brand-blue font-bold text-sm">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span className="text-brand-graphite">{row.requirement}</span>
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-brand-graphite/60 block mb-2 font-bold">
                  Technologies We May Consider:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {row.techs.split(", ").map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-brand-mist border border-brand-graphite/30 rounded-md text-xs font-mono font-semibold text-brand-graphite"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
