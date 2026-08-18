"use client";

import { useState } from "react";
import {
  FileSpreadsheet,
  Mail,
  MessageSquare,
  EyeOff,
  Clock,
  ArrowRight,
  CheckCircle2,
  Database,
  Zap,
  LayoutDashboard,
  Bot,
} from "lucide-react";
import Section from "@/components/shared/Section";

const problems = [
  {
    id: "scattered-data",
    title: "Scattered Customer Data",
    icon: FileSpreadsheet,
    problemDesc:
      "Customer details are often spread across spreadsheets, emails, phone contacts, and different tools. Your team wastes time searching for the information they need.",
    solutionTitle: "Centralized Customer Management",
    solutionDesc:
      "A custom CRM brings contacts, leads, customer history, notes, and sales activity into one secure system that your team can access when they need it.",
    solutionIcon: Database,
    color: "text-brand-coral",
  },
  {
    id: "manual-followups",
    title: "Manual Lead Follow-ups",
    icon: Mail,
    problemDesc:
      "Sales teams can miss follow-ups when leads are tracked manually. Important prospects may be forgotten simply because the next action was not recorded.",
    solutionTitle: "Automated CRM Follow-ups",
    solutionDesc:
      "Custom CRM development lets you automate reminders, lead assignments, emails, WhatsApp messages, and follow-up tasks based on your sales workflow.",
    solutionIcon: Zap,
    color: "text-brand-blue",
  },
  {
    id: "disconnected-tools",
    title: "Disconnected Business Tools",
    icon: MessageSquare,
    problemDesc:
      "Your team may switch between spreadsheets, email, WhatsApp, billing software, and other tools to manage a single customer.",
    solutionTitle: "Connected CRM Integrations",
    solutionDesc:
      "Integrate your CRM with the tools your business already uses so customer information and important activities can move between systems more efficiently.",
    solutionIcon: LayoutDashboard,
    color: "text-brand-lime",
  },
  {
    id: "poor-visibility",
    title: "Limited Sales Visibility",
    icon: EyeOff,
    problemDesc:
      "When sales data is spread across different tools, it becomes difficult to see which leads are active, where deals are stuck, and what your team should focus on next.",
    solutionTitle: "Custom CRM Dashboards",
    solutionDesc:
      "Build dashboards and sales reports around your business KPIs, giving managers a clear view of leads, opportunities, conversions, and pipeline performance.",
    solutionIcon: FileSpreadsheet,
    color: "text-brand-coral",
  },
  {
    id: "repetitive-admin",
    title: "Repetitive Administrative Work",
    icon: Clock,
    problemDesc:
      "Sales and customer teams often spend valuable time entering data, updating records, creating reports, and repeating routine tasks.",
    solutionTitle: "CRM Workflow Automation",
    solutionDesc:
      "A custom CRM can automate repetitive workflows such as record updates, task creation, notifications, approvals, reminders, and scheduled reports.",
    solutionIcon: Bot,
    color: "text-brand-blue",
  },
];

export default function CrmWorkflowProblem() {
  const [activeId, setActiveId] = useState(problems[0].id);
  const activeProblem = problems.find((p) => p.id === activeId)!;

  return (
    <Section className="bg-brand-graphite border-b-2 border-brand-graphite overflow-hidden relative">
      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-brand-lime text-xl font-mono font-bold tracking-wider uppercase">
            The CRM Problem
          </span>

          <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
            When Your Business Outgrows{" "}
            <span className="text-brand-coral">Standard CRM Workflows</span>
          </h2>

          <p className="text-white/70 leading-relaxed font-sans">
            Spreadsheets, disconnected tools, and manual processes make it
            harder to manage leads and customers. Custom CRM development helps
            bring your data, workflows, and sales process into one system.
          </p>
        </div>
        {/* Interaction Hint */}
        <div className="text-center mt-8 mb-8">
          <p className="text-brand-lime/80 text-sm font-mono font-bold text-brand-white px-3 py-1 rounded-full animate-pulse">
            Select a challenge to explore the CRM solution ↓
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
          {/* Interactive Problems */}
          <div className="lg:col-span-5 flex lg:flex-col overflow-x-auto lg:overflow-visible gap-3 pb-4 lg:pb-0 hide-scrollbar">
            {problems.map((problem) => {
              const isActive = activeId === problem.id;

              return (
                <button
                  key={problem.id}
                  onClick={() => setActiveId(problem.id)}
                  aria-pressed={isActive}
                  className={`flex items-center gap-4 p-4 rounded-2xl border-2 transition-all text-left flex-shrink-0 lg:w-full min-w-[240px] group ${
                    isActive
                      ? "bg-white/10 border-brand-coral shadow-[4px_4px_0px_0px_rgba(255,107,94,1)]"
                      : "bg-transparent border-white/10 text-white/60 hover:border-white/30 hover:text-white"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-colors ${
                      isActive
                        ? "bg-brand-coral/20 border-brand-coral text-brand-coral"
                        : "bg-white/5 border-white/10 group-hover:bg-white/10"
                    }`}
                  >
                    <problem.icon className="w-5 h-5" />
                  </div>

                  <span
                    className={`font-bold font-sans ${
                      isActive ? "text-white" : ""
                    }`}
                  >
                    {problem.title}
                  </span>
                </button>
              );
            })}
          </div>
          

          {/* Dynamic Content */}
          <div className="lg:col-span-7">
            <div
              key={activeId}
              className="bg-white/5 border-2 border-white/10 rounded-[32px] p-6 sm:p-10 h-full flex flex-col justify-center animate-fade-in relative overflow-hidden"
            >
              {/* Background Glow */}
              <div
                className={`absolute -top-20 -right-20 w-64 h-64 rounded-full blur-3xl opacity-20 ${
                  activeProblem.color === "text-brand-coral"
                    ? "bg-brand-coral"
                    : activeProblem.color === "text-brand-blue"
                    ? "bg-brand-blue"
                    : "bg-brand-lime"
                }`}
              />

              <div className="relative z-10">
                {/* Problem */}
                <div className="mb-10">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-white/10 text-white/60 text-xs font-mono font-bold uppercase tracking-wider rounded-md border border-white/10">
                      The Challenge
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                    {activeProblem.title}
                  </h3>

                  <p className="text-white/70 font-sans text-lg leading-relaxed">
                    {activeProblem.problemDesc}
                  </p>
                </div>

                {/* Transition */}
                <div className="flex items-center justify-center my-8">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
                    <ArrowRight className="w-6 h-6 text-white/50" />
                  </div>
                </div>

                {/* Solution */}
                <div className="bg-brand-mist border-2 border-brand-graphite rounded-2xl p-6 sm:p-8 relative shadow-flat-lime">
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-brand-lime text-brand-graphite rounded-xl flex items-center justify-center shadow-sm border-2 border-brand-graphite rotate-12">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>

                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-white rounded-lg border border-brand-graphite/20 flex items-center justify-center shadow-sm">
                      <activeProblem.solutionIcon
                        className={`w-5 h-5 ${
                          activeProblem.color === "text-brand-coral"
                            ? "text-brand-coral"
                            : activeProblem.color === "text-brand-blue"
                            ? "text-brand-blue"
                            : "text-green-600"
                        }`}
                      />
                    </div>

                    <span className="text-brand-blue text-xs font-mono font-bold uppercase tracking-wider">
                      Custom CRM Solution
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-brand-graphite mb-3">
                    {activeProblem.solutionTitle}
                  </h3>

                  <p className="text-brand-graphite/80 font-sans leading-relaxed">
                    {activeProblem.solutionDesc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}