"use client";

import { useState } from "react";
import { 
  Building2, 
  Users, 
  Settings, 
  Cloud, 
  Monitor, 
  Wrench, 
  BarChart3, 
  RefreshCcw, 
  Lock, 
  Link 
} from "lucide-react";
import Section from "@/components/shared/Section";

const solutions = [
  {
    id: "custom-business",
    title: "Custom Business Software",
    icon: Building2,
    solves:
      "Off-the-shelf software can force businesses to change their workflows. Custom business software is built around your processes, users, data, and operational requirements.",
    features: [
      "Custom workflows",
      "Role-based access",
      "Business process automation",
      "Legacy system migration",
      "Scalable architecture",
    ],
    whoNeedsIt:
      "Growing businesses that have outgrown Excel, spreadsheets, or generic software and need a system designed around how they operate.",
    conclusion:
      "If your team is constantly working around the limitations of existing tools, a custom business system can turn those workflows into one streamlined, scalable platform.",
  },

  {
    id: "crm-sales",
    title: "Custom CRM & Sales Software",
    icon: Users,
    solves:
      "Scattered customer data, manual follow-ups, and disconnected sales tools can make it difficult to manage leads and track revenue opportunities.",
    features: [
      "Lead & contact management",
      "Custom sales pipelines",
      "Automated follow-ups",
      "Role-based permissions",
      "Custom reporting & dashboards",
    ],
    whoNeedsIt:
      "Sales teams and growing businesses that need better lead visibility, customer management, sales automation, and reporting.",
    conclusion:
      "A custom CRM gives your sales team a system that matches its actual sales process instead of forcing everyone into a predefined pipeline.",
  },

  {
    id: "erp-operations",
    title: "Custom ERP & Operations Software",
    icon: Settings,
    solves:
      "Disconnected departments create data silos between finance, HR, inventory, procurement, and daily operations.",
    features: [
      "Inventory management",
      "HR & employee management",
      "Finance & reporting",
      "Procurement workflows",
      "Supply chain visibility",
    ],
    whoNeedsIt:
      "Manufacturing, retail, hospitality, and service businesses managing complex operations across multiple departments.",
    conclusion:
      "Custom ERP software brings your core operations together in one system while allowing workflows and modules to evolve with your business.",
  },

  {
    id: "saas",
    title: "SaaS & Product Development",
    icon: Cloud,
    solves:
      "Launching a software product requires more than development—it needs scalable architecture, secure user management, billing, analytics, and reliable infrastructure.",
    features: [
      "Multi-tenant architecture",
      "Subscription & billing systems",
      "User management",
      "Analytics & reporting",
      "Scalable cloud architecture",
    ],
    whoNeedsIt:
      "Startups, founders, and businesses building SaaS products, subscription platforms, or new digital products.",
    conclusion:
      "From MVP to production, we help turn software ideas into scalable SaaS platforms designed for real users and long-term growth.",
  },

  {
    id: "web-apps",
    title: "Custom Web Application Development",
    icon: Monitor,
    solves:
      "Generic web tools often lack the workflows, integrations, and functionality required by businesses with specific operational needs.",
    features: [
      "Responsive web applications",
      "Progressive Web Apps (PWA)",
      "Offline capabilities",
      "Real-time functionality",
      "Third-party API integration",
    ],
    whoNeedsIt:
      "Businesses that need secure web applications, customer portals, internal systems, or browser-based software accessible from anywhere.",
    conclusion:
      "A custom web application gives your business the flexibility of browser-based software without compromising on functionality or workflow control.",
  },

  {
    id: "internal-tools",
    title: "Internal Business Software",
    icon: Wrench,
    solves:
      "Employees often lose valuable time switching between spreadsheets, emails, documents, and repetitive administrative processes.",
    features: [
      "Approval workflows",
      "Document automation",
      "Employee management",
      "Resource scheduling",
      "Internal dashboards",
    ],
    whoNeedsIt:
      "Operations and administrative teams looking to improve productivity, reduce manual work, and standardize internal processes.",
    conclusion:
      "Purpose-built internal software can eliminate repetitive work and give your teams a faster, more consistent way to run daily operations.",
  },

  {
    id: "dashboards",
    title: "Business Dashboards & Analytics",
    icon: BarChart3,
    solves:
      "Business data is often spread across multiple systems, making it difficult to understand performance and make timely decisions.",
    features: [
      "Real-time data visualization",
      "Custom KPI dashboards",
      "Business reporting",
      "Data exports",
      "Scheduled reports",
    ],
    whoNeedsIt:
      "Executives, managers, and operations teams that need a centralized view of business performance.",
    conclusion:
      "A custom analytics dashboard turns disconnected business data into clear, actionable information your team can use to make better decisions.",
  },

  {
    id: "workflow-automation",
    title: "Business Process Automation",
    icon: RefreshCcw,
    solves:
      "Manual data entry, repetitive approvals, and disconnected processes increase operational costs and create unnecessary human errors.",
    features: [
      "Trigger-based automation",
      "Multi-step approvals",
      "Automated notifications",
      "Data synchronization",
      "API-based workflows",
    ],
    whoNeedsIt:
      "Businesses with repetitive, rule-based processes that currently depend heavily on manual work.",
    conclusion:
      "Custom workflow automation lets your software handle repetitive steps automatically, freeing your team to focus on higher-value work.",
  },

  {
    id: "portals",
    title: "Customer & Partner Portal Development",
    icon: Lock,
    solves:
      "Customers and partners often depend on staff for documents, updates, requests, and basic account information.",
    features: [
      "Customer self-service",
      "Secure document management",
      "Ticket & request tracking",
      "Account management",
      "Role-based access",
    ],
    whoNeedsIt:
      "Service businesses and organizations that need secure customer portals, partner portals, or self-service platforms.",
    conclusion:
      "A secure custom portal gives customers and partners direct access to the information and services they need while reducing unnecessary support workload.",
  },

  {
    id: "api-integrations",
    title: "API & Third-Party Integrations",
    icon: Link,
    solves:
      "Disconnected CRM, ERP, payment, SaaS, and internal systems create duplicate data and manual work.",
    features: [
      "REST & GraphQL APIs",
      "Webhook integration",
      "Data mapping & synchronization",
      "Third-party API integration",
      "Secure authentication",
    ],
    whoNeedsIt:
      "Businesses using multiple software systems that need unified data, automated workflows, and reliable system-to-system communication.",
    conclusion:
      "Custom API integrations connect your existing technology ecosystem so systems can exchange data automatically instead of making your team do it manually.",
  },
];

export default function SolutionExplorer() {
  const [activeId, setActiveId] = useState(solutions[0].id);

  const activeSolution = solutions.find((s) => s.id === activeId) || solutions[0];
  const ActiveIcon = activeSolution.icon;

  return (
    <Section className="bg-white border-b-2 border-brand-graphite overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="text-brand-blue text-xl font-mono font-bold tracking-wider uppercase">What We Build</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-graphite leading-none">
            Custom Software Solutions We Build
          </h2>
          <p className="text-brand-graphite/70 leading-relaxed">
            We build custom software around your workflows, data, users, and business goals—from internal business systems to scalable SaaS platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Mobile Dropdown / Left Navigation (Desktop) */}
          <div className="lg:col-span-4 flex flex-col gap-2">
            {/* Mobile View: Horizontal Scroll */}
            <div className="flex overflow-x-auto lg:hidden pb-4 gap-2 snap-x hide-scrollbar">
              {solutions.map((solution) => {
                const Icon = solution.icon;
                const isActive = activeId === solution.id;
                return (
                  <button
                    key={solution.id}
                    onClick={() => setActiveId(solution.id)}
                    className={`flex items-center gap-2 px-4 py-3 rounded-xl whitespace-nowrap font-bold text-sm snap-start transition-all ${
                      isActive
                        ? "bg-brand-blue text-white shadow-flat"
                        : "bg-brand-mist border-2 border-brand-graphite text-brand-graphite hover:bg-brand-graphite hover:text-white"
                    }`}
                  >
                    <Icon className="w-4 h-4" /> {solution.title}
                  </button>
                );
              })}
            </div>

            {/* Desktop View: Vertical List */}
            <div className="hidden lg:flex flex-col gap-2">
              {solutions.map((solution) => {
                const Icon = solution.icon;
                const isActive = activeId === solution.id;
                return (
                  <button
                    key={solution.id}
                    onClick={() => setActiveId(solution.id)}
                    className={`flex items-center gap-3 w-full text-left px-5 py-4 rounded-xl font-bold text-sm transition-all border-2 ${
                      isActive
                        ? "bg-brand-blue border-brand-blue text-white shadow-flat translate-x-2"
                        : "bg-white border-transparent text-brand-graphite/80 hover:bg-brand-mist hover:border-brand-graphite hover:text-brand-graphite"
                    }`}
                  >
                    <Icon className={`w-5 h-5 ${isActive ? "text-white" : "text-brand-blue"}`} /> 
                    {solution.title}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Content Panel */}
          <div className="lg:col-span-8 relative">
            <div 
              key={activeSolution.id}
              className="bg-brand-mist border-2 border-brand-graphite rounded-[32px] p-8 lg:p-10 shadow-premium animate-in fade-in slide-in-from-right-4 duration-500"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-white border-2 border-brand-graphite flex items-center justify-center flex-shrink-0 shadow-sm">
                  <ActiveIcon className="w-6 h-6 text-brand-blue" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-extrabold text-brand-graphite leading-tight">
                  {activeSolution.title}
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xs font-mono font-bold text-brand-blue uppercase tracking-wider mb-2">What it solves</h4>
                    <p className="text-sm text-brand-graphite/80 leading-relaxed font-sans">{activeSolution.solves}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-mono font-bold text-brand-blue uppercase tracking-wider mb-2">Who needs it</h4>
                    <p className="text-sm text-brand-graphite/80 leading-relaxed font-sans">{activeSolution.whoNeedsIt}</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-xs font-mono font-bold text-brand-blue uppercase tracking-wider mb-2">Typical Features</h4>
                    <ul className="space-y-2">
                      {activeSolution.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-brand-graphite/80 font-sans">
                          <div className="w-1.5 h-1.5 rounded-full bg-brand-coral" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t-2 border-brand-graphite/20">
                <h4 className="text-xs font-mono font-bold text-brand-graphite uppercase tracking-wider mb-2">Conclusion</h4>
                <p className="text-sm font-semibold text-brand-graphite/90 italic border-l-4 border-brand-lime pl-4">
                  {activeSolution.conclusion}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
