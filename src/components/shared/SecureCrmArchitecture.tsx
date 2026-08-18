"use client";

import {
  Lock,
  Server,
  Cloud,
  Database,
  Shield,
  Key,
} from "lucide-react";
import Section from "@/components/shared/Section";

export default function SecureCrmArchitecture() {
  return (
    <Section className="bg-brand-graphite border-b-2 border-brand-graphite overflow-hidden relative">
      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-6">
            <span className="text-brand-lime text-xl font-mono font-bold tracking-wider uppercase">
              CRM SECURITY & ARCHITECTURE
            </span>

            <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
              Build Your CRM With{" "}
              <span className="text-brand-coral">
                Security in Mind.
              </span>
            </h2>

            <p className="text-white/70 leading-relaxed font-sans">
              Customer and sales data is critical to your business. Our custom
              CRM development approach considers authentication, permissions,
              data protection, backups, integrations, and infrastructure from
              the beginning—not as an afterthought.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
              {/* Access Control */}
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/20 flex flex-shrink-0 items-center justify-center">
                  <Key className="w-6 h-6 text-brand-lime" />
                </div>

                <div>
                  <h4 className="font-bold text-white mb-1">
                    Role-Based Access
                  </h4>
                  <p className="text-sm text-white/60">
                    Control what admins, managers, sales teams, and other users
                    can access and manage.
                  </p>
                </div>
              </div>

              {/* Data Protection */}
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/20 flex flex-shrink-0 items-center justify-center">
                  <Lock className="w-6 h-6 text-brand-blue" />
                </div>

                <div>
                  <h4 className="font-bold text-white mb-1">
                    Data Protection
                  </h4>
                  <p className="text-sm text-white/60">
                    Apply secure authentication, authorization, and appropriate
                    data protection practices across the CRM.
                  </p>
                </div>
              </div>

              {/* Infrastructure */}
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/20 flex flex-shrink-0 items-center justify-center">
                  <Server className="w-6 h-6 text-brand-coral" />
                </div>

                <div>
                  <h4 className="font-bold text-white mb-1">
                    Scalable Infrastructure
                  </h4>
                  <p className="text-sm text-white/60">
                    Design the application and infrastructure to support
                    growing users, data, integrations, and workloads.
                  </p>
                </div>
              </div>

              {/* Backups */}
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/20 flex flex-shrink-0 items-center justify-center">
                  <Database className="w-6 h-6 text-brand-lime" />
                </div>

                <div>
                  <h4 className="font-bold text-white mb-1">
                    Backup & Recovery
                  </h4>
                  <p className="text-sm text-white/60">
                    Plan backups and recovery procedures to help protect
                    important CRM and customer data.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Architecture Visual */}
          <div className="relative w-full aspect-square md:aspect-auto md:h-[600px] flex items-center justify-center">
            <div className="relative w-full max-w-md h-full flex flex-col justify-center gap-6">
              {/* Layer 1: Client */}
              <div className="bg-white/10 border-2 border-white/20 rounded-2xl p-4 backdrop-blur-sm relative z-40 transform hover:-translate-y-2 transition-transform duration-300">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-mono font-bold text-sm">
                    CLIENT LAYER
                  </span>

                  <div className="w-2 h-2 rounded-full bg-brand-lime" />
                </div>

                <div className="h-10 bg-white/5 rounded flex items-center justify-center border border-white/10">
                  <span className="text-white/60 text-xs font-mono">
                    Web App / Mobile App
                  </span>
                </div>
              </div>

              {/* Connection */}
              <div className="w-1 h-8 bg-brand-blue mx-auto relative z-30">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-brand-blue/30 animate-ping" />
              </div>

              {/* Layer 2: Application Security */}
              <div className="bg-brand-blue border-2 border-brand-blue/50 rounded-2xl p-4 shadow-flat-blue relative z-20 transform hover:-translate-y-2 transition-transform duration-300">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-white font-mono font-bold text-sm">
                    APPLICATION & API LAYER
                  </span>

                  <Shield className="w-4 h-4 text-brand-lime" />
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <div className="h-8 bg-black/20 rounded flex items-center justify-center">
                    <span className="text-white/80 text-xs font-mono">
                      Auth
                    </span>
                  </div>

                  <div className="h-8 bg-black/20 rounded flex items-center justify-center">
                    <span className="text-white/80 text-xs font-mono">
                      RBAC
                    </span>
                  </div>

                  <div className="h-8 bg-black/20 rounded flex items-center justify-center">
                    <span className="text-white/80 text-xs font-mono">
                      API
                    </span>
                  </div>
                </div>
              </div>

              {/* Connection */}
              <div className="w-1 h-8 bg-brand-coral mx-auto relative z-10" />

              {/* Layer 3: Data & Infrastructure */}
              <div className="bg-[#1e1e1e] border-2 border-[#333] rounded-2xl p-6 relative z-0 transform hover:-translate-y-2 transition-transform duration-300 shadow-premium">
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#333] rounded-full flex items-center justify-center border border-[#444]">
                  <Cloud className="w-6 h-6 text-white" />
                </div>

                <div className="flex items-center justify-between mb-4">
                  <span className="text-white font-mono font-bold text-sm">
                    DATA & INFRASTRUCTURE
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="h-12 bg-white/5 border border-white/10 rounded flex items-center px-4 gap-3">
                    <Database className="w-5 h-5 text-brand-lime" />

                    <span className="text-white/80 text-sm font-mono">
                      CRM Database
                    </span>
                  </div>

                  <div className="h-12 bg-white/5 border border-white/10 rounded flex items-center px-4 gap-3">
                    <Server className="w-5 h-5 text-brand-coral" />

                    <span className="text-white/80 text-sm font-mono">
                      Application Infrastructure
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}