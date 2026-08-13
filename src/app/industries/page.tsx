import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Section from "@/components/shared/Section";
import { industries, industriesFaqs } from "@/data/industries";
import { organizationSchema, websiteSchema, breadcrumbSchema } from "@/lib/seo";
import { Metadata } from "next";

import WorkflowSection from "@/components/industries/WorkflowSection";
import BentoSolutionsSection from "@/components/industries/BentoSolutionsSection";
import WhyIndustrySoftwareSection from "@/components/industries/WhyIndustrySoftwareSection";
import ProcessTimelineSection from "@/components/industries/ProcessTimelineSection";
import IndustryCaseStudiesSection from "@/components/industries/IndustryCaseStudiesSection";
import IndustriesFAQSection from "@/components/industries/IndustriesFAQSection";
import IndustriesCTASection from "@/components/industries/IndustriesCTASection";

import ServiceJourney from "@/components/services/custom-software/ServiceJourney";



export const metadata: Metadata = {
  title: "Industry-Specific Software Development | CodeNClicks",
  description: "Industry-specific software development for education, hospitality, healthcare, ecommerce, startups, enterprises, and agencies. Built around your workflows.",
  alternates: {
    canonical: "/industries",
  },
  openGraph: {
    title: "Industry-Specific Software Development | CodeNClicks",
    description: "Industry-specific software development for education, hospitality, healthcare, ecommerce, startups, enterprises, and agencies. Built around your workflows.",
    url: "https://codenclicksit.in/industries",
    type: "website",
    siteName: "CodeNClicks IT Solutions",
    images: [
      {
        url: "https://codenclicksit.in/Codenclicks_white_bg_PNG.png",
        width: 1200,
        height: 630,
        alt: "Industry-specific software development team working on digital business solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Industry-Specific Software Development | CodeNClicks",
    description: "Industry-specific software development for education, hospitality, healthcare, ecommerce, startups, enterprises, and agencies. Built around your workflows.",
    images: ["https://codenclicksit.in/Codenclicks_white_bg_PNG.png"],
  },
};

export default function IndustriesPage() {
  const faqSchema = {
    "@type": "FAQPage",
    "mainEntity": industriesFaqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a,
      },
    })),
  };

  const jsonLdData = {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema(),
      websiteSchema(),
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Industries", path: "/industries" },
      ]),
      faqSchema,
    ],
  };

  return (
    <div className="bg-white text-brand-graphite">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />

      {/* 1. HERO */}
      <section className="py-16 lg:py-28 border-b-2 border-brand-graphite bg-brand-mist">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-brand-blue text-sm font-mono font-bold tracking-wider uppercase">
                INDUSTRIES
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-brand-graphite leading-none uppercase">
                INDUSTRY-SPECIFIC <span className="text-brand-blue">SOFTWARE DEVELOPMENT.</span>
              </h1>
              <p className="text-lg md:text-xl text-brand-graphite/80 leading-relaxed font-sans max-w-xl">
                Your industry has its own workflows, customers, data requirements, and operational challenges. We build websites, SaaS platforms, CRM systems, and custom business software around how your operation actually works.
              </p>
            </div>

            <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[380px] aspect-[4/3] rounded-[32px] overflow-hidden border-4 border-brand-graphite shadow-flat">
                <img
                  src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop"
                  alt="Industry-specific software development team working on digital business solutions"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INDUSTRIES WE SERVE */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-b from-white via-brand-mist/60 to-white border-b-2 border-brand-graphite overflow-hidden">
        {/* White-based vector background grid pattern & ambient glows */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0d6cfc2e_1px,transparent_1px),linear-gradient(to_bottom,#0d6cfc2e_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-brand-blue/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 -right-20 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl pointer-events-none" />

        {/* Decorative SVG Vector Accents */}
        <svg className="absolute top-12 left-10 w-44 h-44 text-brand-graphite/[0.04] pointer-events-none hidden lg:block" fill="none" viewBox="0 0 200 200">
          <pattern id="dot-matrix-sectors" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="2" fill="currentColor" />
          </pattern>
          <rect width="200" height="200" fill="url(#dot-matrix-sectors)" />
        </svg>
        <svg className="absolute bottom-12 right-10 w-36 h-36 text-brand-blue/[0.07] pointer-events-none hidden lg:block" fill="none" viewBox="0 0 160 160">
          <rect x="20" y="20" width="120" height="120" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" rx="16" />
          <circle cx="80" cy="80" r="30" stroke="currentColor" strokeWidth="1" />
        </svg>

        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mb-16 space-y-4">
            {/* <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-blue/10 text-brand-blue text-xs font-mono font-bold tracking-wider uppercase border border-brand-blue/20">
              <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse" />
              Our Focus Sectors
            </div> */}
            <h2 className="text-3xl md:text-5xl font-extrabold text-brand-graphite tracking-tight leading-tight">
              Custom Software Development for Every Industry
            </h2>
            <p className="text-base md:text-lg text-brand-graphite/75 leading-relaxed font-sans">
              Different industries operate differently. From hotel reservations and school admissions to healthcare workflows, ecommerce operations, and agency delivery, we design software around the processes your team already understands.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((ind) => {
              const Icon = ind.icon;
              return (
                <div
                  key={ind.slug}
                  className="group flex flex-col justify-between p-8 bg-white/90 backdrop-blur-xs border-2 border-brand-graphite rounded-[32px] shadow-premium hover:shadow-flat transition-shadow duration-300 min-h-[340px]"
                >
                  <div className="space-y-6">
                    <div className="w-14 h-14 rounded-xl bg-brand-mist border-2 border-brand-graphite flex items-center justify-center mb-6 group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
                      <Icon className="w-6 h-6 text-brand-blue group-hover:text-white transition-colors" />
                    </div>
                    <Link href={`/industries/${ind.slug}`}>
                      <h3 className="text-3xl font-heading font-bold text-brand-graphite group-hover:text-brand-blue transition-colors">
                        {ind.title}
                      </h3>
                    </Link>
                    <p className="text-sm text-brand-graphite/70 leading-relaxed font-sans">
                      {ind.tagline}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {ind.relevantServices.map((s) => (
                        <span
                          key={s}
                          className="px-3 py-1 text-xs font-mono font-semibold bg-brand-mist border border-brand-graphite rounded-full text-brand-graphite"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6">
                    <Link
                      href={`/industries/${ind.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-mono font-bold text-brand-blue group-hover:gap-2.5 transition-all"
                    >
                      {ind.ctaText || "Explore Solutions →"}{" "}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. SOFTWARE BUILT AROUND YOUR WORKFLOW */}
      <WorkflowSection />

      {/* 4. WHAT WE BUILD FOR DIFFERENT INDUSTRIES */}
      <BentoSolutionsSection />

      {/* 5. WHY INDUSTRY-SPECIFIC SOFTWARE MATTERS */}
      <WhyIndustrySoftwareSection />

      {/* 6. HOW WE BUILD INDUSTRY-SPECIFIC SOFTWARE */}
      {/* <ProcessTimelineSection /> */}
      
                <ServiceJourney />
              
            

      {/* 7. RELEVANT PROJECTS / CASE STUDIES */}
      <IndustryCaseStudiesSection />

      {/* 8. FAQ */}
      <IndustriesFAQSection />

      {/* 9. CTA */}
      <IndustriesCTASection />
    </div>
  );
}
