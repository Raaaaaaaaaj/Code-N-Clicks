import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { organizationSchema, websiteSchema, breadcrumbSchema, faqSchema } from "@/lib/seo";
import { Metadata } from "next";
import {
  frontendCategory,
  backendCategory,
  databasesCategory,
  cloudDevopsCategory,
  aiMlCategory,
  analyticsCategory,
  designCategory,
  faqList,
} from "@/data/technologiesData";

import { EditorialIntro } from "@/components/technologies/EditorialIntro";
import { TechCategorySection } from "@/components/technologies/TechCategorySection";
import { TechSelectionSteps } from "@/components/technologies/TechSelectionSteps";
import { SelectionMatrix } from "@/components/technologies/SelectionMatrix";
import { SeoStatementSection } from "@/components/technologies/SeoStatementSection";
import { TechFaqSection } from "@/components/technologies/TechFaqSection";

export const metadata: Metadata = {
  title: "Technology Stack for Software Development | Code N Clicks",
  description: "Explore Code N Clicks' modern technology stack for software development, including React, Node.js, Python, databases, cloud, DevOps, AI and more.",
  alternates: {
    canonical: "/technologies",
  },
  openGraph: {
    title: "Technology Stack for Software Development | Code N Clicks",
    description: "Explore Code N Clicks' modern technology stack for software development, including React, Node.js, Python, databases, cloud, DevOps, AI and more.",
    url: "https://codenclicksit.in/technologies",
    type: "website",
    siteName: "CodeNClicks IT Solutions",
    images: [
      {
        url: "https://codenclicksit.in/Codenclicks_white_bg_PNG.png",
        width: 1200,
        height: 630,
        alt: "CodeNClicks IT Solutions Technology Stack",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Technology Stack for Software Development | Code N Clicks",
    description: "Explore Code N Clicks' modern technology stack for software development, including React, Node.js, Python, databases, cloud, DevOps, AI and more.",
    images: ["https://codenclicksit.in/Codenclicks_white_bg_PNG.png"],
  },
};

export default function TechnologiesPage() {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema(),
      websiteSchema(),
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Technologies", path: "/technologies" },
      ]),
      faqSchema(faqList),
    ],
  };

  return (
    <div className="bg-white text-brand-graphite">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />

      {/* 1. HERO SECTION */}
      <section className="py-16 lg:py-28 border-b-2 border-brand-graphite bg-brand-mist relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-brand-blue text-xl font-mono font-bold tracking-widest uppercase">
                OUR TECHNOLOGY STACK
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-brand-graphite leading-[1.05]">
                MODERN TECHNOLOGY STACK FOR <span className="text-brand-blue">SCALABLE SOFTWARE.</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-brand-graphite/80 leading-relaxed font-sans max-w-xl">
                We choose the right technologies for your product based on performance, scalability, integrations, security, and long-term maintainability—not simply what&apos;s trending.
              </p>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-blue text-white font-bold rounded-full hover:bg-brand-blue/90 transition-colors text-sm shadow-flat"
                >
                  DISCUSS YOUR PROJECT <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Visual (Preserving & improving existing code box visual concept) */}
            <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[420px] bg-brand-graphite text-white rounded-[32px] border-4 border-brand-graphite shadow-flat overflow-hidden p-6 aspect-[4/3] flex flex-col justify-between font-mono text-xs sm:text-sm">
                <div>
                  <span className="text-brand-blue">import</span>{" "}
                  <span className="text-white">{`{ architecture }`}</span>{" "}
                  <span className="text-brand-blue">from</span>{" "}
                  <span className="text-brand-lime">&quot;@codenclicks/stack&quot;</span>;
                </div>

                <div className="text-white/40">// Enterprise-grade software foundations.</div>

                <div className="space-y-1">
                  <div>
                    <span className="text-brand-blue">const</span>{" "}
                    <span className="text-white">frontend</span>{" "}
                    <span>=</span>{" "}
                    <span className="text-brand-lime">&quot;Next.js + React&quot;</span>;
                  </div>
                  <div>
                    <span className="text-brand-blue">const</span>{" "}
                    <span className="text-white">backend</span>{" "}
                    <span>=</span>{" "}
                    <span className="text-brand-lime">&quot;Node.js + Python&quot;</span>;
                  </div>
                  <div>
                    <span className="text-brand-blue">const</span>{" "}
                    <span className="text-white">database</span>{" "}
                    <span>=</span>{" "}
                    <span className="text-brand-lime">&quot;PostgreSQL + Redis&quot;</span>;
                  </div>
                  <div>
                    <span className="text-brand-blue">const</span>{" "}
                    <span className="text-white">cloud</span>{" "}
                    <span>=</span>{" "}
                    <span className="text-brand-lime">&quot;AWS + Docker&quot;</span>;
                  </div>
                </div>

                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-white/60">
                  <span className="flex items-center gap-1.5 text-brand-lime font-bold">
                    <span className="w-2 h-2 rounded-full bg-brand-lime animate-pulse" />
                    Built for Scale
                  </span>
                  <span>v2.4.0</span>
                </div>
              </div>

              {/* Floating Tech Badges */}
              <div className="absolute -top-4 -left-2 sm:-left-4 z-20 bg-white text-brand-graphite border-2 border-brand-graphite rounded-full px-3.5 py-1 shadow-flat font-mono font-bold text-[10px] uppercase">
                React & Next.js
              </div>
              <div className="absolute -bottom-4 right-4 z-20 bg-brand-blue text-white border-2 border-brand-graphite rounded-full px-3.5 py-1 shadow-flat font-mono font-bold text-[10px] uppercase">
                Cloud & AI Native
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. EDITORIAL INTRODUCTION */}
      <EditorialIntro />

      {/* 3. FRONTEND TECHNOLOGIES */}
      <TechCategorySection category={frontendCategory} />

      {/* 4. BACKEND TECHNOLOGIES */}
      <TechCategorySection category={backendCategory} />

      {/* 5. DATABASES & API TECHNOLOGIES */}
      <TechCategorySection category={databasesCategory} />

      {/* 6. CLOUD & DEVOPS TECHNOLOGIES (Dark section) */}
      <TechCategorySection category={cloudDevopsCategory} />

      {/* 7. AI & MACHINE LEARNING TECHNOLOGIES (Dark section) */}
      <TechCategorySection category={aiMlCategory} />

      {/* 8. ANALYTICS, MARKETING & GROWTH */}
      <TechCategorySection category={analyticsCategory} />

      {/* 9. UI/UX & CREATIVE TECHNOLOGIES */}
      <TechCategorySection category={designCategory} />

      {/* 10. HOW WE CHOOSE THE RIGHT STACK */}
      <TechSelectionSteps />

      {/* 11. TECHNOLOGY SELECTION MATRIX */}
      <SelectionMatrix />

      {/* 12. BUILT WITH TECHNOLOGIES THAT FIT YOUR BUSINESS */}
      <SeoStatementSection />

      {/* 13. FREQUENTLY ASKED QUESTIONS */}
      <TechFaqSection />

      {/* 14. CTA SECTION (Preserving existing CTA UI component) */}
      <section className="bg-brand-blue text-white py-24 text-center">
        <div className="container mx-auto px-4 lg:px-8 space-y-6">
          <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-none tracking-tight">
            READY TO BUILD WITH THE RIGHT TECHNOLOGY STACK?
          </h2>
          <p className="text-white/80 max-w-xl mx-auto text-base leading-relaxed font-sans">
            Let&apos;s discuss your product requirements and identify a technology foundation built for performance, scalability, and long-term growth.
          </p>
          <div className="pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-brand-blue font-bold rounded-full hover:bg-brand-mist transition-colors text-sm"
            >
              DISCUSS YOUR PROJECT <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
