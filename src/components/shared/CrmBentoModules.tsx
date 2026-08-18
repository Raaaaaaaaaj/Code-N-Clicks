"use client";

import { useState } from "react";
import {
  Users,
  Filter,
  Zap,
  LifeBuoy,
  PieChart,
  MessageSquare,
  ShieldCheck,
  BrainCircuit,
  ArrowRight
} from "lucide-react";
import Section from "@/components/shared/Section";

const modules = [
  {
    id: "lead-management",
    title: "Lead & Contact Management",
    icon: Users,
    desc: "Capture, organize, qualify, and manage leads and customer records in one CRM. Track contact details, interactions, notes, activities, and related opportunities from a single customer profile.",
    useCase:
      "Ideal for businesses managing leads from websites, referrals, campaigns, sales teams, and multiple communication channels.",
    mockType: "list",
  },
  {
    id: "sales-pipeline",
    title: "Sales Pipeline Management",
    icon: Filter,
    desc: "Build a sales pipeline around your actual process with custom stages, deal tracking, lead qualification, tasks, activities, and pipeline visibility.",
    useCase:
      "Useful for sales teams that need a clear view of active opportunities, stalled deals, upcoming actions, and potential revenue.",
    mockType: "kanban",
  },
  {
    id: "workflow-automation",
    title: "CRM Workflow Automation",
    icon: Zap,
    desc: "Automate repetitive CRM tasks such as lead assignment, follow-up reminders, status updates, notifications, approvals, and scheduled activities.",
    useCase:
      "Helps sales and operations teams reduce manual work and keep important workflows moving automatically.",
    mockType: "workflow",
  },
  {
    id: "customer-support",
    title: "Customer Support & Service",
    icon: LifeBuoy,
    desc: "Manage customer issues, service requests, tickets, conversations, and follow-ups alongside the customer's existing CRM history.",
    useCase:
      "Useful when sales and support teams need a shared view of customer relationships before and after a sale.",
    mockType: "tickets",
  },
  {
    id: "dashboards",
    title: "Custom CRM Dashboards & Reports",
    icon: PieChart,
    desc: "Create dashboards and reports around the metrics that matter to your business, including leads, conversions, pipeline performance, sales activity, and revenue.",
    useCase:
      "Gives founders, managers, and sales teams a clearer view of business performance without relying on manual spreadsheets.",
    mockType: "charts",
  },
  {
    id: "communication",
    title: "CRM Communication & Integrations",
    icon: MessageSquare,
    desc: "Connect communication channels such as email, WhatsApp, SMS, or other business tools so important customer interactions can be associated with CRM records.",
    useCase:
      "Helps teams keep customer conversations and sales activity connected instead of switching between multiple applications.",
    mockType: "chat",
  },
  {
    id: "role-access",
    title: "Role-Based Access & Security",
    icon: ShieldCheck,
    desc: "Define what different users and teams can view, create, edit, approve, or manage with role-based permissions and access controls.",
    useCase:
      "Important for growing organizations where different teams need different levels of access to customer and business data.",
    mockType: "permissions",
  },
  {
    id: "ai-features",
    title: "AI-Powered CRM Features",
    icon: BrainCircuit,
    desc: "Add AI capabilities where they provide real business value, such as lead scoring, conversation summaries, follow-up suggestions, data classification, and sales insights.",
    useCase:
      "Helps teams reduce repetitive work and use customer and sales data more efficiently.",
    mockType: "ai",
  },
];

export default function CrmBentoModules() {
  const [activeId, setActiveId] = useState(modules[0].id);
  const activeModule = modules.find(m => m.id === activeId)!;

  const renderMockUI = (type: string) => {
    switch (type) {
      case "kanban":
        return (
          <div className="flex gap-4 w-full animate-fade-in">
            <div className="flex-1 space-y-3">
              <div className="h-6 w-24 bg-brand-blue/20 rounded-md mb-4 border border-brand-blue/30"></div>
              <div className="h-16 bg-white border border-brand-graphite/20 rounded-lg shadow-sm p-3">
                <div className="h-2 w-1/2 bg-gray-200 rounded mb-2"></div><div className="h-2 w-1/3 bg-gray-200 rounded"></div>
              </div>
              <div className="h-16 bg-white border border-brand-graphite/20 rounded-lg shadow-sm p-3">
                <div className="h-2 w-2/3 bg-gray-200 rounded mb-2"></div><div className="h-2 w-1/4 bg-gray-200 rounded"></div>
              </div>
            </div>
            <div className="flex-1 space-y-3">
              <div className="h-6 w-32 bg-yellow-100 rounded-md mb-4 border border-yellow-200"></div>
              <div className="h-16 bg-white border border-brand-graphite/20 rounded-lg shadow-sm p-3 border-l-4 border-l-brand-lime">
                <div className="h-2 w-3/4 bg-gray-200 rounded mb-2"></div><div className="h-2 w-1/2 bg-gray-200 rounded"></div>
              </div>
            </div>
          </div>
        );
      case "charts":
        return (
          <div className="flex items-end gap-3 h-32 w-full animate-fade-in pt-8">
            <div className="w-1/4 bg-brand-blue/80 rounded-t-sm h-[40%]"></div>
            <div className="w-1/4 bg-gray-300 rounded-t-sm h-[60%]"></div>
            <div className="w-1/4 bg-brand-lime/80 rounded-t-sm h-[90%]"></div>
            <div className="w-1/4 bg-brand-coral/80 rounded-t-sm h-[50%]"></div>
          </div>
        );
      case "workflow":
        return (
          <div className="space-y-4 w-full animate-fade-in pt-4">
            <div className="p-3 bg-white border rounded-lg flex items-center justify-between shadow-sm">
              <div className="h-3 w-32 bg-gray-200 rounded"></div>
              <div className="h-6 w-12 bg-green-100 rounded-full border border-green-200"></div>
            </div>
            <div className="w-px h-6 bg-gray-300 mx-auto"></div>
            <div className="p-3 bg-white border border-brand-blue/30 rounded-lg flex items-center justify-between shadow-sm border-l-4 border-l-brand-blue">
              <div className="h-3 w-40 bg-gray-200 rounded"></div>
              <Zap className="w-4 h-4 text-brand-blue" />
            </div>
          </div>
        );
      case "chat":
        return (
          <div className="space-y-4 w-full animate-fade-in flex flex-col pt-4">
            <div className="bg-gray-100 p-3 rounded-2xl rounded-tl-none w-2/3 border border-gray-200">
              <div className="h-2 w-full bg-gray-300 rounded mb-2"></div>
              <div className="h-2 w-2/3 bg-gray-300 rounded"></div>
            </div>
            <div className="bg-brand-blue/10 p-3 rounded-2xl rounded-tr-none w-2/3 self-end border border-brand-blue/20">
              <div className="h-2 w-full bg-brand-blue/40 rounded mb-2"></div>
              <div className="h-2 w-1/2 bg-brand-blue/40 rounded"></div>
            </div>
          </div>
        );
      case "list":
      case "tickets":
        return (
          <div className="space-y-3 w-full animate-fade-in pt-2">
            {[1, 2, 3].map(i => (
              <div key={i} className="flex items-center gap-3 p-3 bg-white border border-gray-200 rounded-lg shadow-sm">
                <div className="w-8 h-8 rounded-full bg-gray-200 flex-shrink-0"></div>
                <div className="flex-1">
                  <div className="h-2 w-1/3 bg-gray-300 rounded mb-2"></div>
                  <div className="h-2 w-1/2 bg-gray-200 rounded"></div>
                </div>
                <div className="w-12 h-4 bg-gray-100 rounded-full"></div>
              </div>
            ))}
          </div>
        );
      case "ai":
        return (
          <div className="w-full animate-fade-in pt-4">
            <div className="p-4 bg-gradient-to-br from-purple-50 to-indigo-50 border border-purple-100 rounded-xl shadow-sm relative overflow-hidden">
              <div className="absolute -right-4 -top-4 w-16 h-16 bg-purple-200/50 rounded-full blur-xl"></div>
              <div className="flex items-center gap-2 mb-3">
                <BrainCircuit className="w-5 h-5 text-purple-600" />
                <span className="text-xs font-bold text-purple-800 uppercase tracking-wider">AI Summary</span>
              </div>
              <div className="space-y-2">
                <div className="h-2 w-full bg-purple-200 rounded"></div>
                <div className="h-2 w-5/6 bg-purple-200 rounded"></div>
                <div className="h-2 w-4/6 bg-purple-200 rounded"></div>
              </div>
            </div>
          </div>
        )
      default:
        return (
          <div className="flex items-center justify-center h-32 w-full bg-gray-50 border border-gray-200 rounded-xl border-dashed">
            <span className="text-gray-400 font-mono text-sm">Restricted View</span>
          </div>
        );
    }
  }

  return (
    <Section className="bg-brand-mist border-b-2 border-brand-graphite">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-brand-blue text-xl font-mono font-bold tracking-wider uppercase">
            CRM Features & Modules
          </span>

          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-graphite leading-tight">
            Custom CRM Software Built Around Your Business
          </h2>

          <p className="text-brand-graphite/70 leading-relaxed font-sans">
            Build the CRM modules your business actually needs—from lead management and
            sales pipelines to workflow automation, reporting, integrations, customer
            support, and AI-powered features.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto">

          {/* Module Selector (Left on Desktop, Top Horizontal on Mobile) */}
          <div className="lg:col-span-4 flex lg:flex-col overflow-x-auto lg:overflow-visible gap-2 pb-4 lg:pb-0 hide-scrollbar scroll-smooth">
            {modules.map((module) => {
              const isActive = activeId === module.id;
              return (
                <button
                  key={module.id}
                  onClick={() => setActiveId(module.id)}
                  className={`flex items-center gap-3 p-3 rounded-xl transition-all text-left flex-shrink-0 min-w-[200px] border-2 ${isActive
                      ? "bg-brand-graphite border-brand-graphite text-white shadow-flat"
                      : "bg-white border-transparent hover:border-brand-graphite/20 text-brand-graphite shadow-sm hover:shadow"
                    }`}
                >
                  <module.icon className={`w-5 h-5 flex-shrink-0 ${isActive ? "text-brand-lime" : "text-brand-blue"}`} />
                  <span className={`font-semibold text-sm ${isActive ? "text-white" : ""}`}>{module.title}</span>
                </button>
              );
            })}
          </div>

          {/* Module Detail Panel (Right Side) */}
          <div className="lg:col-span-8">
            <div
              key={activeId}
              className="bg-white border-2 border-brand-graphite rounded-[32px] p-6 sm:p-10 min-h-[400px] flex flex-col relative shadow-flat animate-fade-in"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-brand-mist border-2 border-brand-graphite rounded-xl flex items-center justify-center shadow-sm">
                  <activeModule.icon className="w-7 h-7 text-brand-blue" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-brand-graphite">{activeModule.title}</h3>
              </div>

              <p className="text-brand-graphite/80 font-sans text-lg leading-relaxed mb-6">
                {activeModule.desc}
              </p>

              <div className="mb-8 p-4 bg-brand-blue/5 border border-brand-blue/10 rounded-xl inline-block text-brand-graphite font-medium">
                <span className="font-bold text-brand-blue mr-2">Best For:</span>
                {activeModule.useCase}
              </div>

              {/* Mock UI Representation */}
              <div className="mt-auto">
                <div className="bg-brand-mist border-2 border-brand-graphite rounded-2xl p-6 shadow-inner relative overflow-hidden">

                  {/* Browser Bar */}
                  <div className="absolute top-0 left-0 right-0 h-6 bg-brand-graphite/5 border-b border-brand-graphite/10 flex items-center px-3 gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-red-400/80"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-400/80"></div>
                    <div className="w-2 h-2 rounded-full bg-green-400/80"></div>
                  </div>

                  {renderMockUI(activeModule.mockType)}
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </Section>
  );
}
