"use client";

import { useState } from "react";
import { Monitor, Link2, Server, Database, Cloud } from "lucide-react";
import Section from "@/components/shared/Section";

const techLayers = [
  {
    id: "frontend",
    title: "Frontend & User Interface",
    icon: Monitor,
    desc: "Responsive, accessible interfaces built around your users, workflows, and product requirements.",
    techs: [
      "React",
      "Angular",
      "Next.js",
      "Vue.js",
      "Svelte",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
      "Material UI",
    ],
  },

  {
    id: "api",
    title: "API & Integration Layer",
    icon: Link2,
    desc: "Secure APIs and integration layers that connect your application with internal systems and third-party services.",
    techs: [
      "REST APIs",
      "GraphQL",
      "WebSockets",
      "Webhooks",
      "tRPC",
      "OAuth 2.0",
      "JWT",
      "API Authentication",
    ],
  },

  {
    id: "backend",
    title: "Backend & Business Logic",
    icon: Server,
    desc: "Reliable backend systems that handle business rules, authentication, data processing, and application logic.",
    techs: [
      "Node.js",
      "Express.js",
      "NestJS",
      "Python",
      "Django",
      "FastAPI",
      "Go",
      "Java",
      "Spring Boot",
    ],
  },

  {
    id: "database",
    title: "Database & Data Management",
    icon: Database,
    desc: "Data architectures designed around your application's performance, security, relationships, and growth requirements.",
    techs: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Redis",
      "SQLite",
      "MariaDB",
      "Firebase",
      "Supabase",
      "Database Design",
    ],
  },

  {
    id: "cloud",
    title: "Cloud & Infrastructure",
    icon: Cloud,
    desc: "Deployment and infrastructure configured for reliability, security, performance, and scalable application delivery.",
    techs: [
      "AWS",
      "Google Cloud",
      "Microsoft Azure",
      "Vercel",
      "Netlify",
      "Docker",
      "Linux",
      "Nginx",
      "CI/CD",
      "GitHub Actions",
    ],
  },
];

export default function TechStackVisualization() {
  const [activeLayer, setActiveLayer] = useState(techLayers[0].id);

  const activeData = techLayers.find(l => l.id === activeLayer) || techLayers[0];
  const ActiveIcon = activeData.icon;

  return (
    <Section className="bg-brand-mist border-b-2 border-brand-graphite relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-brand-blue text-sm font-mono font-bold tracking-wider uppercase">Technology</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-graphite leading-none">
            Modern Technology for Scalable Software
          </h2>
          <p className="text-brand-graphite/70 text-sm leading-relaxed">
            We don't just pick tools randomly. We engineer a technology stack specific to your project's performance and security requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 max-w-6xl mx-auto items-center">
          {/* Stack Visualization (Left) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center space-y-2">
            {techLayers.map((layer, idx) => {
              const Icon = layer.icon;
              const isActive = activeLayer === layer.id;
              return (
                <div key={layer.id} className="w-full flex flex-col items-center">
                  <button
                    onClick={() => setActiveLayer(layer.id)}
                    className={`w-full max-w-sm px-6 py-4 rounded-[20px] flex items-center justify-center gap-3 transition-all border-4 relative ${
                      isActive 
                        ? "bg-brand-graphite border-brand-graphite text-white shadow-premium z-10 scale-105" 
                        : "bg-white border-brand-graphite/20 text-brand-graphite/60 hover:bg-brand-blue/5 hover:border-brand-graphite hover:text-brand-graphite"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-heading font-bold text-lg">{layer.title.split(" ")[0]}</span>
                    {isActive && (
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 hidden lg:block">
                        <div className="w-4 h-4 bg-brand-graphite rotate-45 transform origin-center"></div>
                      </div>
                    )}
                  </button>
                  {idx < techLayers.length - 1 && (
                    <div className="w-1 h-6 bg-brand-graphite/20 my-1 rounded-full"></div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Active Detail Panel (Right) */}
          <div className="lg:col-span-7">
            <div className="bg-white border-4 border-brand-graphite rounded-[32px] p-8 lg:p-12 shadow-flat relative min-h-[350px] flex flex-col justify-center">
              <div key={activeLayer} className="animate-in fade-in slide-in-from-right-8 duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-brand-mist border-2 border-brand-graphite flex items-center justify-center text-brand-blue shadow-sm">
                    <ActiveIcon className="w-8 h-8" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold text-brand-blue uppercase tracking-wider">Layer Architecture</span>
                    <h3 className="text-2xl lg:text-3xl font-extrabold text-brand-graphite mt-1">
                      {activeData.title}
                    </h3>
                  </div>
                </div>
                
                <p className="text-brand-graphite/80 text-lg leading-relaxed mb-8">
                  {activeData.desc}
                </p>

                <h4 className="text-sm font-heading font-bold text-brand-graphite mb-4 uppercase tracking-wider border-b-2 border-brand-graphite/10 pb-2">
                  Technologies We Use
                </h4>
                <div className="flex flex-wrap gap-3">
                  {activeData.techs.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-4 py-2 bg-brand-mist border-2 border-brand-graphite rounded-xl text-sm font-mono font-bold text-brand-graphite shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
