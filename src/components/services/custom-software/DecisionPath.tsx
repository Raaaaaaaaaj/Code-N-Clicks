"use client";

import { useState } from "react";
import { CheckSquare, Square, ArrowRight, XCircle, CheckCircle2, AlertCircle, Link, Settings, RefreshCcw, BarChart3 } from "lucide-react";
import Section from "@/components/shared/Section";

const decisionPoints = [
  {
    id: "workflow",
    text: "Our current software doesn't follow the way our team actually works",
    category: "customization",
  },
  {
    id: "spreadsheets",
    text: "Important work still happens in Excel, Google Sheets, or shared documents",
    category: "manual",
  },
  {
    id: "disconnected",
    text: "We use several tools, but they don't share data properly",
    category: "integration",
  },
  {
    id: "data-entry",
    text: "The same information is entered or updated in more than one place",
    category: "automation",
  },
  {
    id: "integration",
    text: "Our existing software is missing integrations we actually need",
    category: "integration",
  },
  {
    id: "permissions",
    text: "Different teams need different access, workflows, or permissions",
    category: "customization",
  },
  {
    id: "control",
    text: "We need more control over our business data and how it is managed",
    category: "ownership",
  },
  {
    id: "evolution",
    text: "Our software needs to change as our business and processes grow",
    category: "scalability",
  },
];

export default function DecisionPath() {
  const [selected, setSelected] = useState<string[]>([]);

  const togglePoint = (id: string) => {
    setSelected(prev => 
      prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id]
    );
  };

const getRecommendation = () => {
  const has = (id: string) => selected.includes(id);

  if (selected.length === 0) return null;

  // 1. Existing tools are disconnected + duplicate data entry
  if (has("disconnected") && has("data-entry") && !has("workflow")) {
    return {
      type: "system-integration",
      title: "Your biggest issue may be disconnected systems.",
      desc: "You're entering the same information in multiple places because your tools aren't sharing data properly. Connecting your existing systems may solve this before you need a completely new platform.",
      icon: Link,
      color: "text-brand-blue",
      bg: "bg-brand-mist border-brand-blue/30",
      action: "Review My Systems",
    };
  }

  // 2. Disconnected + integration + data entry
  if (has("disconnected") && has("integration") && has("data-entry")) {
    return {
      type: "integration-automation",
      title: "You have a strong case for integration and automation.",
      desc: "Your systems are disconnected, your required integrations are missing, and your team is repeating data entry. An integration layer or custom workflow could remove a significant amount of this manual work.",
      icon: RefreshCcw,
      color: "text-brand-blue",
      bg: "bg-brand-mist border-brand-blue/30",
      action: "Map My Integrations",
    };
  }

  // 3. Spreadsheets + data entry
  if (has("spreadsheets") && has("data-entry") && !has("disconnected")) {
    return {
      type: "manual-process",
      title: "You're spending too much time managing data manually.",
      desc: "Your team is relying on spreadsheets and repeatedly entering information. A centralized internal system could reduce repetitive work and give everyone access to the same data.",
      icon: RefreshCcw,
      color: "text-brand-blue",
      bg: "bg-brand-mist border-brand-blue/30",
      action: "Discuss Your Workflow",
    };
  }

  // 4. Spreadsheets + workflow
  if (has("spreadsheets") && has("workflow")) {
    return {
      type: "workflow-automation",
      title: "Your workflow has outgrown spreadsheets.",
      desc: "Spreadsheets can work for simple processes, but once approvals, multiple users, permissions, and recurring workflows are involved, a purpose-built system can make operations much easier to manage.",
      icon: Settings,
      color: "text-brand-blue",
      bg: "bg-brand-mist border-brand-blue/30",
      action: "Map My Workflow",
    };
  }

  // 5. Workflow + permissions + evolution
  if (has("workflow") && has("permissions") && has("evolution")) {
    return {
      type: "custom-platform",
      title: "You need software built around your business.",
      desc: "Your workflows, access requirements, and future changes are all important. A configurable off-the-shelf tool may become restrictive, while custom software can be designed to evolve with your operation.",
      icon: Settings,
      color: "text-brand-blue",
      bg: "bg-brand-mist border-brand-blue/30",
      action: "Plan My Software",
    };
  }

  // 6. Workflow + permissions
  if (has("workflow") && has("permissions")) {
    return {
      type: "role-workflow",
      title: "Your teams need more control over how work gets done.",
      desc: "Different teams need different workflows and access levels. This is a strong use case for software designed around your organization's roles, approvals, and processes.",
      icon: Settings,
      color: "text-brand-blue",
      bg: "bg-brand-mist border-brand-blue/30",
      action: "Map My Workflow",
    };
  }

  // 7. Workflow + evolution
  if (has("workflow") && has("evolution")) {
    return {
      type: "scalable-custom",
      title: "Your software needs to grow with your business.",
      desc: "Your challenge isn't simply a missing feature. You need software that can adapt as your workflows, teams, and business requirements change.",
      icon: ArrowRight,
      color: "text-brand-blue",
      bg: "bg-brand-mist border-brand-blue/30",
      action: "Talk to a Software Expert",
    };
  }

  // 8. Permissions + control
  if (has("permissions") && has("control")) {
    return {
      type: "secure-platform",
      title: "Control and access are important requirements for you.",
      desc: "You need to decide who can access what and how your business data is handled. A custom system can give you more control over permissions, workflows, and data ownership.",
      icon: CheckCircle2,
      color: "text-brand-blue",
      bg: "bg-brand-mist border-brand-blue/30",
      action: "Discuss Your Requirements",
    };
  }

  // 9. Control + evolution
  if (has("control") && has("evolution")) {
    return {
      type: "ownership",
      title: "You're thinking beyond a short-term software fix.",
      desc: "You want control over your data today while keeping the freedom to change the system tomorrow. Custom software can provide that flexibility without locking your business into someone else's roadmap.",
      icon: CheckCircle2,
      color: "text-brand-blue",
      bg: "bg-brand-mist border-brand-blue/30",
      action: "Plan Your Platform",
    };
  }

  // 10. Disconnected + workflow
  if (has("disconnected") && has("workflow")) {
    return {
      type: "unified-workflow",
      title: "Your tools aren't keeping up with your workflow.",
      desc: "You're dealing with both disconnected systems and workflow limitations. The right solution could be an integrated platform that brings your key processes and data together.",
      icon: Link,
      color: "text-brand-blue",
      bg: "bg-brand-mist border-brand-blue/30",
      action: "Review My Workflow",
    };
  }

  // 11. Disconnected + integration
  if (has("disconnected") && has("integration")) {
    return {
      type: "integration",
      title: "Integration may solve more than replacing everything.",
      desc: "Your existing systems may still be useful. The first step should be identifying which systems need to communicate and whether APIs or custom integrations can close those gaps.",
      icon: Link,
      color: "text-brand-blue",
      bg: "bg-brand-mist border-brand-blue/30",
      action: "Explore Integration Options",
    };
  }

  // 12. Data entry + workflow
  if (has("data-entry") && has("workflow")) {
    return {
      type: "process-automation",
      title: "Your team has a good automation opportunity.",
      desc: "Repeated data entry combined with manual workflows usually means your team is spending time on steps software could handle automatically.",
      icon: RefreshCcw,
      color: "text-brand-blue",
      bg: "bg-brand-mist border-brand-blue/30",
      action: "Automate My Workflow",
    };
  }

  // 13. Data entry + evolution
  if (has("data-entry") && has("evolution")) {
    return {
      type: "scalable-automation",
      title: "Your manual processes may become a bigger problem as you grow.",
      desc: "What works with a small team can become difficult to maintain as volume increases. Automating data movement now can create a stronger foundation for future growth.",
      icon: ArrowRight,
      color: "text-brand-blue",
      bg: "bg-brand-mist border-brand-blue/30",
      action: "Discuss Automation",
    };
  }

  // 14. Spreadsheets + disconnected
  if (has("spreadsheets") && has("disconnected")) {
    return {
      type: "centralized-system",
      title: "Your data may need a single source of truth.",
      desc: "When spreadsheets are being used alongside multiple disconnected systems, teams can easily end up working with outdated or inconsistent information. A centralized system may be worth exploring.",
      icon: BarChart3,
      color: "text-brand-blue",
      bg: "bg-brand-mist border-brand-blue/30",
      action: "Review My Data Flow",
    };
  }

  // 15. Spreadsheets + permissions
  if (has("spreadsheets") && has("permissions")) {
    return {
      type: "controlled-system",
      title: "Spreadsheets may no longer be enough for your team.",
      desc: "Once multiple teams need different access levels and workflows, spreadsheets become harder to control. A role-based business application could give you a more structured way to manage the process.",
      icon: Settings,
      color: "text-brand-blue",
      bg: "bg-brand-mist border-brand-blue/30",
      action: "Discuss Your Workflow",
    };
  }

  // 16. Integration only
  if (has("integration") || has("disconnected")) {
    return {
      type: "integration-first",
      title: "Start by looking at your existing software.",
      desc: "You may not need to replace everything. Let's first identify where your systems are falling short and whether an API integration, automation, or custom module can solve it.",
      icon: Link,
      color: "text-amber-500",
      bg: "bg-amber-50 border-amber-200",
      action: "Review My Systems",
    };
  }

  // 17. Control only
  if (has("control")) {
    return {
      type: "data-control",
      title: "Data ownership is becoming important for your business.",
      desc: "If your current platform limits how you access, manage, or extend your data, it's worth reviewing whether a more flexible architecture would make sense.",
      icon: CheckCircle2,
      color: "text-brand-blue",
      bg: "bg-brand-mist border-brand-blue/30",
      action: "Discuss Data Requirements",
    };
  }

  // 18. Evolution only
  if (has("evolution")) {
    return {
      type: "future-ready",
      title: "Think about where your software needs to be in 2–3 years.",
      desc: "If your business is changing quickly, choosing software only for today's requirements can create limitations later. A flexible architecture may be worth considering.",
      icon: ArrowRight,
      color: "text-brand-blue",
      bg: "bg-brand-mist border-brand-blue/30",
      action: "Plan for Growth",
    };
  }

  // 19. Permissions only
  if (has("permissions")) {
    return {
      type: "access-control",
      title: "Your team needs more flexible access control.",
      desc: "If different users need different permissions or workflows, look for software that can reflect those roles instead of forcing everyone into the same process.",
      icon: Settings,
      color: "text-brand-blue",
      bg: "bg-brand-mist border-brand-blue/30",
      action: "Discuss Access Requirements",
    };
  }

  // 20. Broad high-pain combination
  if (selected.length >= 6) {
    return {
      type: "full-platform",
      title: "It looks like you've outgrown your current software stack.",
      desc: "You're dealing with several connected problems across workflows, data, integrations, and scalability. This is where a custom business platform may provide more value than adding another disconnected tool.",
      icon: CheckCircle2,
      color: "text-brand-lime",
      bg: "bg-brand-graphite text-white border-brand-graphite",
      action: "Plan a Custom Solution",
    };
  }

  // 21. General fallback
  return {
    type: "assessment",
    title: "There's a problem worth looking at more closely.",
    desc: "You may not need to replace your entire software stack. A focused integration, automation, custom module, or workflow improvement could be enough.",
    icon: AlertCircle,
    color: "text-amber-500",
    bg: "bg-amber-50 border-amber-200",
    action: "Discuss the Problem",
  };
};

  const recommendation = getRecommendation();

  return (
    <Section className="bg-brand-mist border-b-2 border-brand-graphite relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="text-brand-blue text-xl font-mono font-bold tracking-wider uppercase">Assessment</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-graphite leading-none">
            Is Custom Software the Right Choice?
          </h2>
          <p className="text-brand-graphite/70 leading-relaxed">
            Select the challenges your business is currently facing to see if a bespoke solution makes sense.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
          {/* Interactive Checklist */}
          <div className="lg:col-span-7 bg-white border-2 border-brand-graphite rounded-[32px] p-8 shadow-flat">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-heading font-bold text-brand-graphite">
                Check all that apply to your team:
              </h3>
              {selected.length === 0 && (
                <span className="text-xs font-mono font-bold text-brand-white bg-brand-coral/50 px-3 py-1 rounded-full animate-pulse">
                  Select below ↓
                </span>
              )}
            </div>
            <div className="space-y-3">
              {decisionPoints.map((point) => {
                const isSelected = selected.includes(point.id);
                return (
                  <button
                    key={point.id}
                    onClick={() => togglePoint(point.id)}
                    className={`w-full flex items-center gap-4 p-4 rounded-xl border-2 transition-all text-left ${
                      isSelected
                        ? "border-brand-blue bg-brand-blue/5"
                        : "border-brand-mist hover:border-brand-graphite/30"
                    }`}
                  >
                    <div className="flex-shrink-0">
                      {isSelected ? (
                        <CheckSquare className="w-5 h-5 text-brand-blue" />
                      ) : (
                        <Square className="w-5 h-5 text-brand-graphite/40" />
                      )}
                    </div>
                    <span className={`text-sm font-semibold ${isSelected ? "text-brand-graphite" : "text-brand-graphite/70"}`}>
                      {point.text}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Results Panel */}
          <div className="lg:col-span-5 flex flex-col space-y-8">
            <div className="flex-1 bg-white border-2 border-brand-graphite rounded-[32px] p-8 shadow-premium flex flex-col justify-center min-h-[300px]">
              {!recommendation ? (
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-brand-mist rounded-full flex items-center justify-center mx-auto mb-4">
                    <ArrowRight className="w-6 h-6 text-brand-graphite/40" />
                  </div>
                  <h4 className="text-xl font-bold text-brand-graphite">Awaiting Input</h4>
                  <p className="text-sm text-brand-graphite/60">
                    Select your challenges on the left to get a personalized recommendation.
                  </p>
                </div>
              ) : (
                <div className={`text-center space-y-4 animate-in fade-in zoom-in-95 duration-300`}>
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-brand-graphite shadow-sm">
                    <recommendation.icon className={`w-8 h-8 ${recommendation.color}`} />
                  </div>
                  <h4 className="text-2xl font-bold text-brand-graphite">{recommendation.title}</h4>
                  <p className="text-sm text-brand-graphite/80 leading-relaxed font-sans">
                    {recommendation.desc}
                  </p>
                </div>
              )}
            </div>

            {/* When NOT to choose custom software */}
            <div className="bg-brand-coral/10 border-2 border-brand-coral/30 rounded-2xl p-6">
              <h4 className="flex items-center gap-2 text-sm font-bold text-brand-graphite mb-3">
                <XCircle className="w-4 h-4 text-brand-coral" />
                When NOT to build custom:
              </h4>
              <ul className="space-y-2 text-xs text-brand-graphite/80 font-sans">
                <li className="flex items-start gap-2">
                  <span className="text-brand-coral mt-0.5">•</span> 
                  An existing SaaS product already solves 90% of the problem perfectly.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-coral mt-0.5">•</span> 
                  The requirement is extremely simple (e.g., a basic contact database).
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-coral mt-0.5">•</span> 
                  Custom development would cost more than the business value it creates over 2 years.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
