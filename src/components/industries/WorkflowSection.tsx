"use client";

import { useState } from "react";
import { ArrowRight, Hotel, GraduationCap, ShoppingBag, Heart, Briefcase, CheckCircle2, Layers } from "lucide-react";

interface WorkflowData {
  id: string;
  industry: string;
  icon: any;
  steps: string[];
  solution: string;
}

const workflows: WorkflowData[] = [
  {
    id: "hospitality",
    industry: "Hospitality",
    icon: Hotel,
    steps: ["Reservations", "Check-in", "Housekeeping", "Billing", "Guest communication"],
    solution: "Hotel Management System + Booking Engine + Hospitality CRM",
  },
  {
    id: "education",
    industry: "Education",
    icon: GraduationCap,
    steps: ["Admission", "Student Records", "Fees", "Attendance", "Academic Management"],
    solution: "School ERP + Student Portal + Learning Platform",
  },
  {
    id: "ecommerce",
    industry: "E-commerce",
    icon: ShoppingBag,
    steps: ["Product", "Order", "Payment", "Inventory", "Fulfilment", "Customer Support"],
    solution: "E-commerce Platform + Inventory System + API Integrations",
  },
  {
    id: "healthcare",
    industry: "Healthcare",
    icon: Heart,
    steps: ["Appointment", "Patient", "Provider", "Records", "Billing"],
    solution: "Healthcare Platform + Patient Portal + Workflow Automation",
  },
  {
    id: "agencies",
    industry: "Agencies",
    icon: Briefcase,
    steps: ["Lead", "Proposal", "Project", "Approval", "Reporting", "Client Delivery"],
    solution: "Agency CRM + Client Portal + Workflow Automation",
  },
];

export default function WorkflowSection() {
  const [activeTab, setActiveTab] = useState<string>("hospitality");
  const currentWorkflow = workflows.find((w) => w.id === activeTab) || workflows[0];

  return (
    <section className="py-20 lg:py-28 bg-[#090D16] text-white relative overflow-hidden border-b-2 border-brand-graphite">
      {/* Background Glow and Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-blue/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-brand-blue/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl mb-16 space-y-6">
          {/* <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-blue/10 border border-brand-blue/30 text-brand-blue font-mono text-xs font-bold uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5" /> Domain Architecture
          </div> */}
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Software Built Around How Your Industry Operates
          </h2>
          <p className="text-base md:text-lg text-slate-300 leading-relaxed font-sans">
            Generic software asks your business to change the way it works. Industry-specific software does the opposite.
          </p>
          <p className="text-sm md:text-base text-slate-400 leading-relaxed font-sans">
            We start with your actual workflows — who uses the system, what information moves between teams, where approvals happen, what needs automation, and which external systems need to connect. Then we design the technology around those requirements.
          </p>
        </div>

        {/* Interactive Industry Tabs */}
        <div className="flex flex-wrap gap-3 mb-10 border-b border-slate-800 pb-6">
          {workflows.map((wf) => {
            const Icon = wf.icon;
            const isActive = wf.id === activeTab;
            return (
              <button
                key={wf.id}
                onClick={() => setActiveTab(wf.id)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-2xl font-mono text-sm font-semibold transition-all duration-300 border ${
                  isActive
                    ? "bg-brand-blue text-white border-brand-blue shadow-[0_0_20px_rgba(13,108,252,0.4)]"
                    : "bg-slate-900/80 text-slate-400 border-slate-800 hover:border-slate-700 hover:text-white"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-brand-blue"}`} />
                {wf.industry}
              </button>
            );
          })}
        </div>

        {/* Active Industry Visual Mapping Block */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-[32px] p-6 lg:p-10 shadow-2xl relative overflow-hidden backdrop-blur-xl">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-800/80">
            <div>
              <span className="text-xs font-mono text-brand-blue uppercase font-bold tracking-wider">
                Operational Pipeline
              </span>
              <h3 className="text-2xl font-extrabold text-white mt-1">
                {currentWorkflow.industry} Workflow Mapping
              </h3>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-blue/15 border border-brand-blue/30 text-brand-blue font-mono text-xs font-bold">
              <CheckCircle2 className="w-4 h-4" /> Customized Solution Architecture
            </div>
          </div>

          {/* Workflow Step Diagram */}
          <div className="space-y-8">
            <div>
              <p className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-4">
                Operational Sequence
              </p>
              <div className="flex flex-wrap items-center gap-2 md:gap-3">
                {currentWorkflow.steps.map((step, idx) => (
                  <div key={step} className="flex items-center gap-2 md:gap-3">
                    <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800/90 border border-slate-700 text-white font-mono text-xs md:text-sm font-medium shadow-sm hover:border-brand-blue/50 transition-colors">
                      <span className="w-5 h-5 rounded-full bg-brand-blue/20 text-brand-blue flex items-center justify-center text-[10px] font-bold">
                        {idx + 1}
                      </span>
                      {step}
                    </div>
                    {idx < currentWorkflow.steps.length - 1 && (
                      <ArrowRight className="w-4 h-4 text-brand-blue shrink-0 animate-pulse" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Purpose-Built Solution Output */}
            <div className="pt-6 border-t border-slate-800/80">
              <p className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-3">
                Purpose-Built Software Architecture
              </p>
              <div className="p-5 rounded-2xl bg-gradient-to-r from-brand-blue/10 via-slate-800/60 to-slate-900 border border-brand-blue/30 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="text-xs font-mono text-brand-blue font-bold">Integrated Stack</div>
                  <div className="text-base md:text-lg font-heading font-bold text-white">
                    {currentWorkflow.solution}
                  </div>
                </div>
                <div className="shrink-0 text-xs font-mono text-slate-400 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700">
                  Built around existing team roles
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
