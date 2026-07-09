import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, ArrowLeft, Check, AlertTriangle } from "lucide-react";
import Section from "@/components/shared/Section";
import ContactForm from "@/components/shared/ContactForm";
import { getIndustryBySlug, industries } from "@/data/industries";
import { organizationSchema, websiteSchema, serviceSchema, breadcrumbSchema } from "@/lib/seo";
import { Metadata } from "next";
import { renderTextWithLinks } from "@/lib/linkRenderer";


interface Props {
  params: { slug: string };
}

// Generate static routes at build time
export function generateStaticParams() {
  return industries.map((ind) => ({ slug: ind.slug }));
}

// Dynamic Metadata generator
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const industry = getIndustryBySlug(params.slug);
  if (!industry) return {};

  return {
    title: `${industry.title} Solutions`,
    description: `${industry.tagline} CodeNClicks builds websites, software, CRM, and digital marketing for ${industry.title.toLowerCase()} businesses.`,
    alternates: {
      canonical: `/industries/${industry.slug}`,
    },
    openGraph: {
      title: `${industry.title} Web & Software Solutions | CodeNClicks`,
      description: `${industry.tagline} Custom systems built for ${industry.title.toLowerCase()} workflows.`,
      url: `https://codenclicksit.in/industries/${industry.slug}`,
    },
  };
}

export default function IndustryDetailPage({ params }: Props) {
  const industry = getIndustryBySlug(params.slug);
  if (!industry) {
    notFound();
  }

  const path = `/industries/${industry.slug}`;
  const Icon = industry.icon;

  // JSON-LD dynamic schema
  const jsonLdData = {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema(),
      websiteSchema(),
      serviceSchema({ name: `${industry.title} Digital Solutions`, description: industry.tagline, path }),
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Industries", path: "/industries" },
        { name: industry.title, path },
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
            href="/industries"
            className="inline-flex items-center gap-2 text-sm font-mono font-bold text-brand-graphite/60 hover:text-brand-blue transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> All Industries
          </Link>
          
          <div className="max-w-3xl space-y-6">
            <div className="w-16 h-16 bg-white border-2 border-brand-graphite rounded-xl flex items-center justify-center">
              <Icon className="w-8 h-8 text-brand-blue" />
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-none text-brand-graphite">
              {industry.title}
            </h1>
            <p className="text-xl text-brand-graphite/80 leading-relaxed font-sans pt-2">
              {renderTextWithLinks(industry.tagline)}
            </p>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <Section className="bg-white border-b-2 border-brand-graphite">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-brand-coral text-sm font-mono font-bold tracking-wider uppercase">Friction Points</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mt-2">Common Operational Challenges</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {industry.challenges.map((c) => (
              <div
                key={c}
                className="flex items-start gap-4 p-6 bg-brand-mist border-2 border-brand-graphite rounded-[24px]"
              >
                <div className="w-8 h-8 bg-brand-coral/10 border border-brand-coral rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <AlertTriangle className="w-4 h-4 text-brand-coral" />
                </div>
                <p className="text-sm text-brand-graphite/80 leading-relaxed font-sans">{renderTextWithLinks(c)}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Solutions Section */}
      <Section className="bg-brand-mist border-b-2 border-brand-graphite">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-brand-blue text-sm font-mono font-bold tracking-wider uppercase">Our Playbook</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mt-2">How We Resolve Them</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {industry.solutions.map((s) => (
              <div
                key={s}
                className="flex items-start gap-4 p-6 bg-white border-2 border-brand-graphite rounded-[24px] shadow-premium hover:shadow-flat transition-shadow duration-300"
              >
                <div className="w-8 h-8 bg-brand-blue/10 border border-brand-blue rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-brand-blue" />
                </div>
                <p className="text-sm text-brand-graphite/80 leading-relaxed font-sans">{renderTextWithLinks(s)}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>


      {/* Relevant Services */}
      <Section className="bg-white border-b-2 border-brand-graphite">
        <div className="container mx-auto px-4 lg:px-8 space-y-8">
          <h2 className="text-3xl font-heading font-bold text-brand-graphite">Engineered Capability Areas</h2>
          <div className="flex flex-wrap gap-3">
            {industry.relevantServices.map((s) => (
              <Link
                key={s}
                href="/services"
                className="px-6 py-3 bg-white border-2 border-brand-graphite rounded-full text-sm font-mono font-bold text-brand-graphite shadow-premium hover:shadow-flat hover:border-brand-blue hover:text-brand-blue transition-all duration-300"
              >
                {s}
              </Link>
            ))}
          </div>
        </div>
      </Section>

      {/* Consultation Section */}
      <Section className="bg-brand-mist">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5 space-y-6">
              <h2 className="text-3xl md:text-4xl font-extrabold text-brand-graphite leading-none">
                Ready to Transform Your Workflow?
              </h2>
              <p className="text-brand-graphite/70 text-sm leading-relaxed">
                Get a custom roadmap, UI wireframe review, and software structure blueprint designed for the {industry.title.toLowerCase()} sector.
              </p>
            </div>
            
            <div className="lg:col-span-7 bg-white p-8 border-2 border-brand-graphite rounded-[32px] shadow-premium">
              <ContactForm variant="consultation" />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
