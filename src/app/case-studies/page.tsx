import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Section from "@/components/shared/Section";
import { caseStudies } from "@/data/caseStudies";
import { organizationSchema, websiteSchema, breadcrumbSchema } from "@/lib/seo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Web & Software Case Studies | CodeNClicks India",
  description: "Read our selected custom software and web development case studies. Learn how CodeNClicks helps brands scale online visibility, sales volume, and pipeline ROI.",
  alternates: {
    canonical: "/case-studies",
  },
  openGraph: {
    title: "Custom Web & Software Case Studies | CodeNClicks India",
    description: "Read our selected custom software and web development case studies. Learn how CodeNClicks helps brands scale online visibility, sales volume, and pipeline ROI.",
    url: "https://codenclicksit.in/case-studies",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Web & Software Case Studies | CodeNClicks India",
    description: "Read our selected custom software and web development case studies. Learn how CodeNClicks helps brands scale online visibility, sales volume, and pipeline ROI.",
  },
};

export default function CaseStudiesPage() {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema(),
      websiteSchema(),
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Case Studies", path: "/case-studies" },
      ]),
    ]
  };

  return (
    <div className="bg-white text-brand-graphite">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />

      {/* Hero */}
      <section className="py-16 lg:py-28 border-b-2 border-brand-graphite bg-brand-mist">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-brand-blue text-sm font-mono font-bold tracking-wider uppercase">Case Studies</span>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-brand-graphite leading-none">
                PROOF IN <span className="text-brand-blue">PRODUCTION.</span>
              </h1>
              <p className="text-lg md:text-xl text-brand-graphite/80 leading-relaxed font-sans max-w-xl">
                Explore selected work across ecommerce, hospitality, CRM, and custom software. Each project shows how design and technology support measurable business outcomes.
              </p>
            </div>
            
            <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[380px] aspect-[4/3] rounded-[32px] overflow-hidden border-4 border-brand-graphite shadow-flat">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
                  alt="CodeNClicks Case Studies - High Performance Ecommerce Platforms, Custom CRM Builds, and Web App Portals"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies List */}
      <Section className="bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((cs) => (
              <div
                key={cs.slug}
                className="group flex flex-col justify-between p-8 bg-white border-2 border-brand-graphite rounded-[32px] shadow-premium hover:shadow-flat transition-shadow duration-300 min-h-[440px]"
              >
                <div className="space-y-6">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3.5 py-1 text-xs font-mono font-semibold bg-brand-mist border border-brand-graphite rounded-full text-brand-graphite">
                      {cs.category}
                    </span>
                    <span className="px-3.5 py-1 text-xs font-mono font-semibold bg-brand-lime rounded-full text-brand-graphite">
                      {cs.industry}
                    </span>
                    {cs.status === "in-development" && (
                      <span className="px-3.5 py-1 text-xs font-mono font-semibold bg-brand-coral text-white rounded-full">
                        In Development
                      </span>
                    )}
                  </div>
                  
                  <Link href={`/case-studies/${cs.slug}`}>
                    <h3 className="text-3xl font-heading font-bold text-brand-graphite group-hover:text-brand-blue transition-colors leading-tight">
                      {cs.title}
                    </h3>
                  </Link>
                  <p className="text-sm text-brand-graphite/70 leading-relaxed line-clamp-3 font-sans">
                    {cs.challenge}
                  </p>
                </div>

                <div className="mt-8">
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
                    {cs.results.map((r) => (
                      <div key={r.metric} className="bg-brand-mist border border-brand-graphite rounded-2xl p-4 text-center">
                        <div className="text-xl font-heading font-extrabold text-brand-blue leading-none">{r.value}</div>
                        <div className="text-[10px] font-mono text-brand-graphite/50 mt-1 uppercase tracking-wider">{r.metric}</div>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={`/case-studies/${cs.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-mono font-bold text-brand-blue"
                  >
                    Read Full Case Study <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
