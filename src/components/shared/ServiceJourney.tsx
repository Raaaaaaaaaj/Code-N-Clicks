"use client";

import { useState } from "react";
import { Search, PenTool, Code2, Link as LinkIcon, ShieldCheck, Rocket, TrendingUp, ArrowRight } from "lucide-react";
import Section from "@/components/shared/Section";

const journeyStages = [
  {
    id: "discover",
    title: "Discover",
    icon: Search,
    subtitle: "Software Discovery & Consulting",
    desc: "We understand your business goals, workflows, users, and technical requirements before defining what the software actually needs to do.",
    services: [
      "Requirement Analysis",
      "Workflow Mapping",
      "Technical Feasibility",
      "Project Roadmap",
    ],
  },

  {
    id: "design",
    title: "Design",
    icon: PenTool,
    subtitle: "UI/UX & Product Design",
    desc: "We turn requirements into clear user flows, wireframes, and interactive designs so your team can review the product before development begins.",
    services: [
      "User Flow Design",
      "Wireframes",
      "Interactive Prototypes",
      "Design Systems",
    ],
  },

  {
    id: "build",
    title: "Build",
    icon: Code2,
    subtitle: "Custom Software Development",
    desc: "Our developers build the application around your workflows using scalable frontend, backend, database, and API architecture.",
    services: [
      "Web Application Development",
      "Backend & API Development",
      "CRM & ERP Development",
      "Database Architecture",
    ],
  },

  {
    id: "integrate",
    title: "Integrate",
    icon: LinkIcon,
    subtitle: "API & System Integration",
    desc: "We connect your custom software with the tools you already use so information can move between systems without repetitive manual work.",
    services: [
      "Payment Integrations",
      "CRM & ERP Integration",
      "Third-Party APIs",
      "Legacy System Integration",
    ],
  },

  {
    id: "test",
    title: "Test",
    icon: ShieldCheck,
    subtitle: "Software Testing & Security",
    desc: "Before launch, we test functionality, performance, security, and real-world workflows to identify issues before they reach your users.",
    services: [
      "Functional Testing",
      "Performance Testing",
      "Security Testing",
      "User Acceptance Testing",
    ],
  },

  {
    id: "launch",
    title: "Launch",
    icon: Rocket,
    subtitle: "Deployment & Go-Live",
    desc: "We deploy your software to the appropriate cloud environment, configure the production setup, and help your team transition smoothly.",
    services: [
      "Cloud Deployment",
      "CI/CD Setup",
      "Data Migration",
      "Production Launch",
    ],
  },

  {
    id: "scale",
    title: "Scale",
    icon: TrendingUp,
    subtitle: "Maintenance & Software Support",
    desc: "After launch, we help keep your software secure, reliable, and ready for new users, features, integrations, and changing business requirements.",
    services: [
      "Software Maintenance",
      "Performance Optimization",
      "Feature Enhancements",
      "Technical Support",
    ],
  },
];

export default function ServiceJourney() {
  const [activeStage, setActiveStage] = useState(0);

  const activeData = journeyStages[activeStage];
  const ActiveIcon = activeData.icon;

  return (
    <Section className="bg-brand-graphite text-white border-b-2 border-brand-graphite relative overflow-hidden">
      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-brand-lime text-xl font-mono font-bold tracking-wider uppercase">OUR PROCESS</span>
          <h2 className="text-3xl md:text-4xl font-extrabold leading-none text-white">
            From Business Requirement to Production Software
          </h2>
          <p className="text-white/70 text-sm leading-relaxed">
            A structured custom software development process that takes your idea from discovery and design to development, launch, and long-term improvement.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Journey Timeline Bar */}
          <div className="relative mb-12">
            <div className="absolute top-1/2 left-0 w-full h-1 bg-white/10 -translate-y-1/2 hidden md:block rounded-full"></div>
            
            <div className="flex flex-col md:flex-row justify-between relative gap-4 md:gap-0">
              {journeyStages.map((stage, idx) => {
                const Icon = stage.icon;
                const isActive = activeStage === idx;
                const isPast = activeStage > idx;
                
                return (
                  <button
                    key={stage.id}
                    onClick={() => setActiveStage(idx)}
                    className="flex md:flex-col items-center gap-4 md:gap-3 group text-left md:text-center w-full md:w-auto"
                  >
                    <div className={`relative z-10 w-12 h-12 md:w-14 md:h-14 rounded-2xl border-2 flex items-center justify-center transition-all duration-300 flex-shrink-0 ${
                      isActive 
                        ? "bg-brand-blue border-brand-blue text-white shadow-flat-blue" 
                        : isPast 
                          ? "bg-brand-lime border-brand-lime text-brand-graphite"
                          : "bg-brand-graphite border-white/20 text-white/50 group-hover:border-white/50 group-hover:text-white"
                    }`}>
                      <Icon className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <div>
                      <span className={`block text-xs font-mono font-bold uppercase tracking-wider transition-colors ${
                        isActive ? "text-brand-lime" : isPast ? "text-white/80" : "text-white/40 group-hover:text-white/70"
                      }`}>
                        Phase 0{idx + 1}
                      </span>
                      <span className={`block text-sm font-heading font-bold transition-colors ${
                        isActive ? "text-white" : "text-white/50 group-hover:text-white/80"
                      }`}>
                        {stage.title}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Stage Content Panel */}
          <div className="bg-white text-brand-graphite rounded-[32px] p-8 lg:p-12 border-4 border-brand-blue relative shadow-premium min-h-[320px]">
            {/* Nav Arrows inside panel for mobile convenience */}
            <div className="absolute top-8 right-8 flex gap-2 hidden md:flex">
              <button 
                onClick={() => setActiveStage(Math.max(0, activeStage - 1))}
                disabled={activeStage === 0}
                className="w-10 h-10 rounded-full border-2 border-brand-graphite flex items-center justify-center disabled:opacity-30 hover:bg-brand-mist transition-colors"
              >
                <ArrowRight className="w-5 h-5 rotate-180" />
              </button>
              <button 
                onClick={() => setActiveStage(Math.min(journeyStages.length - 1, activeStage + 1))}
                disabled={activeStage === journeyStages.length - 1}
                className="w-10 h-10 rounded-full border-2 border-brand-graphite bg-brand-graphite text-white flex items-center justify-center disabled:opacity-30 hover:bg-brand-graphite/90 transition-colors"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            <div key={activeData.id} className="grid grid-cols-1 md:grid-cols-2 gap-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="space-y-6">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 rounded-xl bg-brand-mist border-2 border-brand-graphite flex items-center justify-center">
                    <ActiveIcon className="w-6 h-6 text-brand-blue" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold text-brand-blue uppercase tracking-wider">Phase 0{activeStage + 1}</span>
                    <h3 className="text-2xl lg:text-3xl font-extrabold text-brand-graphite leading-none mt-1">
                      {activeData.subtitle}
                    </h3>
                  </div>
                </div>
                <p className="text-brand-graphite/80 leading-relaxed font-sans">
                  {activeData.desc}
                </p>
              </div>

              <div>
                <h4 className="text-sm font-heading font-bold text-brand-graphite mb-4 uppercase tracking-wider">
                  Services Included:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeData.services.map((service, idx) => (
                    <div key={idx} className="bg-brand-mist border-2 border-brand-graphite rounded-xl p-4 flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-brand-blue" />
                      <span className="text-sm font-semibold text-brand-graphite">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Mobile Nav */}
            <div className="flex md:hidden justify-between mt-8 pt-6 border-t-2 border-brand-graphite/10">
               <button 
                onClick={() => setActiveStage(Math.max(0, activeStage - 1))}
                disabled={activeStage === 0}
                className="text-sm font-bold text-brand-graphite flex items-center gap-2 disabled:opacity-30"
              >
                <ArrowRight className="w-4 h-4 rotate-180" /> Prev
              </button>
              <button 
                onClick={() => setActiveStage(Math.min(journeyStages.length - 1, activeStage + 1))}
                disabled={activeStage === journeyStages.length - 1}
                className="text-sm font-bold text-brand-blue flex items-center gap-2 disabled:opacity-30"
              >
                Next <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
