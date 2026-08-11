"use client";

import {
  Box,
  Layers,
  Cpu,
  ArrowDownCircle,
  ArrowRight,
  Zap,
  CheckCircle2,
} from "lucide-react";
import Section from "@/components/shared/Section";

export default function WorkflowDiagram() {
  return (
    <Section className="bg-white border-b-2 border-brand-graphite">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center max-w-6xl mx-auto">
          {/* Left Text Content */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-brand-blue text-xl font-mono font-bold tracking-wider uppercase">
              INTEGRATIONS & AUTOMATION
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-graphite leading-none">
              Connect Your Software.
              <br />
              Automate Your Workflow.
            </h2>
            <p className="text-brand-graphite/70 text-base leading-relaxed font-sans">
              Connect your CRM, ERP, payments, and other business tools through
              custom software integrations. We automate repetitive workflows so
              your systems can exchange data without constant manual work.
            </p>
            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-lime mt-0.5 flex-shrink-0" />
                <p className="text-sm text-brand-graphite font-semibold">
                  Connect CRMs, ERPs, payment gateways, WhatsApp, and
                  third-party APIs.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-lime mt-0.5 flex-shrink-0" />
                <p className="text-sm text-brand-graphite font-semibold">
                  Automate repetitive data entry, approvals, notifications, and
                  updates.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-lime mt-0.5 flex-shrink-0" />
                <p className="text-sm text-brand-graphite font-semibold">
                  Keep business data synchronized across the systems your team
                  already uses.
                </p>
              </div>
            </div>
          </div>

          {/* Right Visual Diagram */}
          <div className="lg:col-span-7 bg-brand-mist border-4 border-brand-graphite rounded-[32px] p-8 lg:p-12 shadow-premium relative">
            <div className="flex flex-col items-center space-y-4 relative z-10">
              {/* Existing Tools Layer */}
              <div className="w-full flex justify-center gap-4">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-14 h-14 bg-white border-2 border-brand-graphite rounded-xl flex items-center justify-center shadow-sm">
                    <Box className="w-6 h-6 text-brand-graphite/60" />
                  </div>
                  <span className="text-[10px] font-mono font-bold text-brand-graphite/50 uppercase">
                    CRM
                  </span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-14 h-14 bg-white border-2 border-brand-graphite rounded-xl flex items-center justify-center shadow-sm">
                    <Box className="w-6 h-6 text-brand-graphite/60" />
                  </div>
                  <span className="text-[10px] font-mono font-bold text-brand-graphite/50 uppercase">
                    ERP
                  </span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-14 h-14 bg-white border-2 border-brand-graphite rounded-xl flex items-center justify-center shadow-sm">
                    <Box className="w-6 h-6 text-brand-graphite/60" />
                  </div>
                  <span className="text-[10px] font-mono font-bold text-brand-graphite/50 uppercase">
                    Payments
                  </span>
                </div>
              </div>

              {/* Connecting Line 1 */}
              <div className="h-8 border-l-2 border-dashed border-brand-blue/50 flex items-center justify-center relative">
                <ArrowDownCircle className="w-10 h-5 text-brand-blue absolute animate-bounce" />
              </div>

              {/* API Layer */}
              <div className="w-full max-w-xs bg-brand-graphite border-2 border-brand-graphite rounded-xl py-3 px-6 text-center shadow-flat flex items-center justify-center gap-3">
                <Layers className="w-5 h-5 text-brand-lime" />
                <span className="text-sm font-mono font-bold text-white uppercase tracking-wider">
                  API & Integration Layer
                </span>
              </div>

              {/* Connecting Line 2 */}
              <div className="h-8 border-l-2 border-dashed border-brand-blue/50 flex items-center justify-center relative">
                <ArrowDownCircle
                  className="w-10 h-5 text-brand-blue absolute animate-bounce"
                  style={{ animationDelay: "0.2s" }}
                />
              </div>

              {/* Custom Software Layer */}
              <div className="w-full bg-brand-blue border-4 border-brand-graphite rounded-2xl p-6 text-center shadow-flat relative overflow-hidden group">
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                <Cpu className="w-10 h-10 text-white mx-auto mb-3" />
                <h3 className="text-xl font-extrabold text-white leading-none">
                  Custom Software
                </h3>
                <p className="text-xs text-white/80 font-mono mt-2">
                  Business Logic & Automation
                </p>
              </div>

              {/* Connecting Line 3 */}
              <div className="h-8 border-l-2 border-dashed border-brand-lime flex items-center justify-center relative">
                <ArrowDownCircle
                  className="w-5 h-5 text-brand-lime absolute animate-bounce"
                  style={{ animationDelay: "0.4s" }}
                />
              </div>

              {/* Business Outcome Layer */}
              <div className="w-full max-w-sm bg-white border-4 border-brand-graphite rounded-2xl p-5 flex items-center justify-between shadow-premium">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-lime/20 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-green-700" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-brand-graphite">
                      Connected Workflow
                    </h4>
                    <span className="text-xs font-mono text-brand-graphite/60 uppercase">
                      Automated Business Process
                    </span>
                  </div>
                </div>
                <ArrowRight className="w-6 h-6 text-brand-graphite/30" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
