import { ArrowRight, CheckCircle2 } from "lucide-react";
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
  selectionMatrix
} from "@/data/technologiesData";
import { TechCategorySection } from "@/components/technologies/TechCategorySection";
import { TechSelectionSteps } from "@/components/technologies/TechSelectionSteps";
import { SelectionMatrix } from "@/components/technologies/SelectionMatrix";
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
              <h1 className="text-4xl md:text-6xl lg:text-6xl font-extrabold tracking-tight text-brand-graphite leading-[1.05]">
                Modern Technology Stack For  <span className="bg-gradient-to-r from-brand-blue via-indigo-600 to-brand-coral bg-clip-text text-transparent">Scalable Software.</span>
              </h1>
              <p className="text-base md:text-lg  text-brand-graphite/80 leading-relaxed font-sans max-w-xl">
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
      <section className="py-16 lg:py-24 bg-white border-b-2 border-brand-graphite relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-8">
          
          <h2 className="text-4xl md:text-6xl font-extrabold font-heading font-extrabold text-brand-graphite tracking-tight leading-[1.15]">
            Technology Choices Built <span className="bg-gradient-to-r from-brand-blue via-indigo-600 to-brand-coral bg-clip-text text-transparent">Around Your Product</span>
          </h2>

          <div className="space-y-6 text-base text-brand-graphite/85 leading-relaxed font-sans border-l-4 border-brand-blue pl-6 md:pl-8 py-2">
            <p>
              There is no single best technology stack for every software product. A marketing website, SaaS platform, enterprise application, AI product, and high-traffic eCommerce platform can have very different technical requirements.
            </p>
            <p>
              At Code N Clicks, we select technologies around your product&apos;s architecture, expected scale, integrations, development speed, and long-term maintenance requirements. Our stack covers modern frontend frameworks, backend platforms, databases, cloud infrastructure, DevOps, AI, analytics, and product design tools.
            </p>
            <p className="font-semibold text-brand-graphite">
              Whether you&apos;re building an MVP or modernizing an existing application, we focus on creating a technology foundation that can evolve with your business.
            </p>
          </div>
        </div>
      </div>
    </section>

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
      <section className="py-20 lg:py-28 bg-brand-mist border-b-2 border-brand-graphite">
            <div className="container mx-auto px-4 lg:px-8">
              {/* Section Header */}
              <div className="max-w-3xl mb-12 space-y-4">
                <span className="text-brand-blue text-xl font-mono font-bold tracking-widest uppercase">
                  Decision Framework
                </span>
                <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-brand-graphite tracking-tight leading-tight">
                  Which Technology Stack is Right for Your Product?
                </h2>
                <p className="text-brand-graphite/70 font-sans leading-relaxed">
                  Technology selection depends on your workload, team skills, and architecture requirements. Below is a guidance matrix of stack combinations we may consider for your product.
                </p>
              </div>
      
              {/* DESKTOP TABLE VIEW */}
              <div className="hidden md:block bg-white border-2 border-brand-graphite rounded-[28px] overflow-hidden shadow-premium">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-brand-graphite text-white font-mono text-xs uppercase tracking-wider">
                      <th className="py-5 px-6 border-b border-brand-graphite w-2/5 font-bold">Product Requirement</th>
                      <th className="py-5 px-6 border-b border-brand-graphite w-3/5 font-bold">Technologies We May Consider</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y-2 divide-brand-graphite/10 font-sans">
                    {selectionMatrix.map((row, i) => (
                      <tr key={row.requirement} className={i % 2 === 0 ? "bg-white" : "bg-brand-mist/40"}>
                        <td className="py-4 px-6 font-bold text-brand-graphite text-sm md:text-base flex items-center gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0" />
                          <span>{row.requirement}</span>
                        </td>
                        <td className="py-4 px-6">
                          <div className="flex flex-wrap gap-2">
                            {row.techs.split(", ").map((tech) => (
                              <span
                                key={tech}
                                className="inline-block px-3 py-1 bg-white border border-brand-graphite/30 rounded-lg text-xs font-mono font-semibold text-brand-graphite shadow-sm"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
      
              {/* MOBILE CARD LIST VIEW */}
              <div className="block md:hidden space-y-4">
                {selectionMatrix.map((row) => (
                  <div
                    key={row.requirement}
                    className="p-5 bg-white border-2 border-brand-graphite rounded-[20px] shadow-sm space-y-3"
                  >
                    <div className="flex items-center gap-2 text-brand-blue font-bold text-sm">
                      <CheckCircle2 className="w-4 h-4 shrink-0" />
                      <span className="text-brand-graphite">{row.requirement}</span>
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-brand-graphite/60 block mb-2 font-bold">
                        Technologies We May Consider:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {row.techs.split(", ").map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 bg-brand-mist border border-brand-graphite/30 rounded-md text-xs font-mono font-semibold text-brand-graphite"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

      {/* 12. BUILT WITH TECHNOLOGIES THAT FIT YOUR BUSINESS */}
      <section className="py-20 lg:py-24 bg-white border-b-2 border-brand-graphite">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto p-8 md:p-12 bg-brand-mist/60 border-2 border-brand-graphite rounded-[32px] shadow-premium relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/10 rounded-full blur-2xl pointer-events-none" />
          <div className="space-y-6 relative z-10">
            <span className="text-brand-blue text-xl font-mono font-bold tracking-widest uppercase">
              Strategic Architecture
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-brand-graphite leading-tight tracking-tight">
              BUILT WITH TECHNOLOGIES THAT FIT YOUR BUSINESS
            </h2>
            <div className="space-y-4 text-base text-brand-graphite/80 leading-relaxed font-sans">
              <p>
                Technology should support your business—not dictate how your business operates.
              </p>
              <p>
                Whether you&apos;re launching a new SaaS product, building a customer-facing web application, modernizing a legacy system, or adding AI to an existing platform, our engineers evaluate the technical requirements before recommending the stack.
              </p>
              <p className="font-semibold text-brand-graphite">
                We combine frontend frameworks, backend technologies, databases, cloud infrastructure, DevOps, AI, analytics, and design tools to create software that is practical to build today and easier to maintain tomorrow.
              </p>
            </div>
          </div>
        </div>
      </div>
      </section>

      {/* 13. FREQUENTLY ASKED QUESTIONS */}
      <TechFaqSection />

      {/* 14. CTA SECTION (Preserving existing CTA UI component) */}
      <section className="bg-brand-blue text-white py-24 text-center">
        <div className="container mx-auto px-4 lg:px-8 space-y-6">
          <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-none tracking-tight">
            Ready To Build With The <br /> Right Technology Stack?
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
