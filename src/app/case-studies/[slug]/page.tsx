import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, ArrowLeft, Star } from "lucide-react";
import Section from "@/components/shared/Section";
import { caseStudies, getCaseStudyBySlug } from "@/data/caseStudies";
import { organizationSchema, websiteSchema, breadcrumbSchema, stripMarkdown } from "@/lib/seo";
import { Metadata } from "next";
import { renderTextWithLinks } from "@/lib/linkRenderer";


interface Props {
  params: { slug: string };
}

// Generate static routes at build time
export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

// Dynamic Metadata generator
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const cs = getCaseStudyBySlug(params.slug);
  if (!cs) return {};

  const cleanDescription = stripMarkdown(cs.challenge).substring(0, 155);

  return {
    title: `${cs.title} Case Study | CodeNClicks`,
    description: cleanDescription,
    alternates: {
      canonical: `/case-studies/${cs.slug}`,
    },
    openGraph: {
      title: `${cs.title} Case Study | CodeNClicks`,
      description: cleanDescription,
      url: `https://codenclicksit.in/case-studies/${cs.slug}`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${cs.title} Case Study | CodeNClicks`,
      description: cleanDescription,
    },
  };
}

export default function CaseStudyDetailPage({ params }: Props) {
  const cs = getCaseStudyBySlug(params.slug);
  if (!cs) {
    notFound();
  }

  const path = `/case-studies/${cs.slug}`;

  // JSON-LD dynamic schema
  const jsonLdData = {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema(),
      websiteSchema(),
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Case Studies", path: "/case-studies" },
        { name: cs.title, path },
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
      <section className="py-16 lg:py-24 border-b-2 border-brand-graphite bg-brand-mist">
        <div className="container mx-auto px-4 lg:px-8">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-sm font-mono font-bold text-brand-graphite/60 hover:text-brand-blue transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Case Studies
          </Link>
          
          <div className="max-w-4xl space-y-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3.5 py-1 text-xs font-mono font-semibold bg-white border border-brand-graphite rounded-full text-brand-graphite">
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
            
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight text-brand-graphite">
              {cs.title}
            </h1>
            <p className="text-sm font-mono text-brand-graphite/50 uppercase tracking-wider">{cs.client}</p>
          </div>
        </div>
      </section>

      {/* Results Indicators */}
      <section className="py-12 bg-brand-blue text-white border-b-2 border-brand-graphite">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {cs.results.map((r) => (
              <div key={r.metric}>
                <div className="text-3xl md:text-5xl font-heading font-extrabold text-brand-lime leading-none">{r.value}</div>
                <div className="text-xs font-mono text-white/70 uppercase tracking-wider mt-2">{r.metric}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge & Solution details */}
      <Section className="bg-white border-b-2 border-brand-graphite">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="p-8 bg-brand-mist border-2 border-brand-graphite rounded-[32px] hover:shadow-flat transition-shadow duration-300">
              <h2 className="text-3xl font-heading font-bold text-brand-graphite mb-4">The Challenge</h2>
              <p className="text-sm text-brand-graphite/70 leading-relaxed font-sans">{renderTextWithLinks(cs.challenge)}</p>
            </div>
            <div className="p-8 bg-brand-mist border-2 border-brand-graphite rounded-[32px] hover:shadow-flat transition-shadow duration-300">
              <h2 className="text-3xl font-heading font-bold text-brand-graphite mb-4">Our Solution</h2>
              <p className="text-sm text-brand-graphite/70 leading-relaxed font-sans">{renderTextWithLinks(cs.solution)}</p>
            </div>
          </div>
        </div>
      </Section>


      {/* Tech Stack */}
      <Section className="bg-brand-mist border-b-2 border-brand-graphite">
        <div className="container mx-auto px-4 lg:px-8 space-y-8">
          <h2 className="text-3xl font-heading font-bold text-brand-graphite">Technologies Used</h2>
          <div className="flex flex-wrap gap-3">
            {cs.techUsed.map((tech) => (
              <span
                key={tech}
                className="px-6 py-3 bg-white border-2 border-brand-graphite rounded-full text-sm font-mono text-brand-graphite shadow-premium font-semibold"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </Section>

      {/* Testimonial Quote */}
      <Section className="bg-white border-b-2 border-brand-graphite">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto p-10 bg-white border-4 border-brand-graphite rounded-[32px] shadow-flat">
            <div className="flex gap-0.5 mb-6">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-brand-coral text-brand-coral" />
              ))}
            </div>
            <blockquote className="text-2xl md:text-3xl font-heading font-extrabold text-brand-graphite leading-relaxed mb-6 italic">
              "{cs.testimonial}"
            </blockquote>
            <div className="text-xs font-mono text-brand-graphite/50 uppercase tracking-wider">
              <span className="text-brand-graphite font-bold">{cs.testimonialAuthor}</span> — {cs.testimonialRole}
            </div>
          </div>
        </div>
      </Section>

      {/* Call to Action - Blue Box */}
      <section className="bg-brand-blue text-white py-24 text-center">
        <div className="container mx-auto px-4 lg:px-8 space-y-6">
          <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-none tracking-tight">
            WANT RESULTS LIKE THESE?
          </h2>
          <p className="text-white/80 max-w-xl mx-auto text-base leading-relaxed font-sans">
            Let's discuss how we can engineer a custom digital product to hit similar conversion indicators for your company.
          </p>
          <div className="pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-brand-blue font-bold rounded-full hover:bg-brand-mist transition-colors text-sm"
            >
              Start Your Project <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
