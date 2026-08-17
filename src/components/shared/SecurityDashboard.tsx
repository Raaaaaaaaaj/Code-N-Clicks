"use client";

import { useState } from "react";
import { Shield, Code, Database, Key, Server, Check, ChevronDown, ChevronUp } from "lucide-react";
import Section from "@/components/shared/Section";

const securityFeatures = [
  {
    id: "security-by-design",
    title: "Security by Design",
    icon: Shield,
    desc:
      "Security is considered from architecture and authentication through deployment and ongoing maintenance—not added as an afterthought.",
    details: [
      "Secure authentication",
      "Role-based access",
      "Input validation",
      "HTTPS / TLS",
    ],
  },

  {
    id: "access-control",
    title: "Role-Based Access Control",
    icon: Key,
    desc:
      "Give each user the access they need while keeping sensitive business functions and information restricted to authorized roles.",
    details: [
      "Custom user roles",
      "Permission management",
      "Admin controls",
      "Audit logging",
    ],
  },

  {
    id: "data-protection",
    title: "Data Protection & Recovery",
    icon: Database,
    desc:
      "Your business data needs reliable storage, controlled access, and a recovery strategy that supports day-to-day operations.",
    details: [
      "Secure database design",
      "Automated backups",
      "Recovery planning",
      "Data access controls",
    ],
  },

  {
    id: "secure-infrastructure",
    title: "Secure Cloud Infrastructure",
    icon: Server,
    desc:
      "We configure hosting and infrastructure around your application's security, performance, traffic, and scalability requirements.",
    details: [
      "Cloud deployment",
      "Environment separation",
      "Firewall configuration",
      "Infrastructure monitoring",
    ],
  },

  {
    id: "application-security",
    title: "Application & API Security",
    icon: Code,
    desc:
      "We protect application endpoints and APIs against common security risks while keeping authentication and data exchange properly controlled.",
    details: [
      "API authentication",
      "Rate limiting",
      "Input validation",
      "Dependency monitoring",
    ],
  },
];
export default function SecurityDashboard() {
  const [expandedId, setExpandedId] = useState<string | null>(securityFeatures[0].id);

  const toggleExpand = (id: string) => {
    setExpandedId(prev => prev === id ? null : id);
  };

  return (
    <Section className="bg-brand-graphite text-white border-b-2 border-brand-graphite relative overflow-hidden">
      {/* Abstract Background pattern */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0 100 L100 0 L100 100 Z" fill="currentColor" />
          <path d="M0 50 L50 0 L100 50 L50 100 Z" fill="currentColor" className="text-brand-blue" />
        </svg>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start max-w-6xl mx-auto">
          
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
            <div className="w-16 h-16 rounded-2xl bg-brand-blue/20 border-2 border-brand-blue flex items-center justify-center text-brand-lime">
              <Shield className="w-8 h-8" />
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
              Engineered to Be <br />
  <span className="text-brand-lime">Secure. Reliable. Maintainable.</span>
            </h2>
            <p className="text-white/70 text-lg leading-relaxed font-sans pt-2">
              Business software handles important data and workflows. We build security,
  access control, reliable infrastructure, and maintainability into the
  software from the start.
            </p>
          </div>

          <div className="lg:col-span-7 space-y-4">
            {securityFeatures.map((feature) => {
              const Icon = feature.icon;
              const isExpanded = expandedId === feature.id;

              return (
                <div 
                  key={feature.id} 
                  className={`border-2 rounded-[24px] overflow-hidden transition-all duration-300 ${
                    isExpanded 
                      ? "bg-white border-brand-blue text-brand-graphite shadow-premium" 
                      : "bg-brand-graphite border-white/20 hover:border-white/50 text-white"
                  }`}
                >
                  <button 
                    onClick={() => toggleExpand(feature.id)}
                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center border-2 transition-colors ${
                        isExpanded ? "bg-brand-mist border-brand-graphite text-brand-blue" : "bg-white/5 border-white/10 text-white/70"
                      }`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className={`text-xl font-bold font-heading ${isExpanded ? "text-brand-graphite" : "text-white"}`}>
                        {feature.title}
                      </h3>
                    </div>
                    <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-colors flex-shrink-0 ${
                      isExpanded ? "border-brand-graphite bg-brand-mist text-brand-graphite" : "border-white/20 text-white/50"
                    }`}>
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </button>
                  
                  <div 
                    className={`px-6 overflow-hidden transition-all duration-500 ease-in-out ${
                      isExpanded ? "max-h-96 pb-6 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="pl-16 space-y-4 border-t-2 border-brand-graphite/10 pt-4 mt-2">
                      <p className="text-sm text-brand-graphite/80 leading-relaxed font-sans">
                        {feature.desc}
                      </p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                        {feature.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs font-mono font-bold text-brand-graphite/70">
                            <Check className="w-4 h-4 text-brand-blue mt-0.5 flex-shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
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
