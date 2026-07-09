import { notFound } from "next/navigation";
import Link from "next/link";
import { AlertTriangle, ArrowRight, ArrowLeft, Check, CheckCircle, Sparkles, Link2 } from "lucide-react";
import Section from "@/components/shared/Section";
import ContactForm from "@/components/shared/ContactForm";
import { getLandingPageBySlug, landingPages } from "@/data/landingPages";
import { organizationSchema, websiteSchema, serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/seo";
import { Metadata } from "next";

interface Props {
  params: { slug: string };
}

// Pre-render landing pages at build time
export function generateStaticParams() {
  return landingPages.map((page) => ({ slug: page.slug }));
}

// Generate metadata dynamically
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const page = getLandingPageBySlug(params.slug);
  if (!page) return {};

  return {
    title: page.seoTitle,
    description: page.metaDescription,
    alternates: {
      canonical: `/${page.slug}`,
    },
    openGraph: {
      title: page.seoTitle,
      description: page.metaDescription,
      images: [{ url: page.heroImage }],
      url: `https://codenclicksit.in/${page.slug}`,
    },
  };
}

export default function DynamicLandingPage({ params }: Props) {
  const page = getLandingPageBySlug(params.slug);
  if (!page) {
    notFound();
  }

  const Icon = page.icon;
  const path = `/${page.slug}`;

  // JSON-LD dynamic schema
  const jsonLdData = {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema(),
      websiteSchema(),
      serviceSchema({ name: page.title, description: page.description, path }),
      faqSchema(page.faqs),
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: page.title, path },
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
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-mono font-bold text-brand-graphite/60 hover:text-brand-blue transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> Explore Services
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="w-16 h-16 bg-white border-2 border-brand-graphite rounded-xl flex items-center justify-center">
                <Icon className="w-8 h-8 text-brand-blue" />
              </div>
              <span className="text-brand-blue text-sm font-mono font-bold tracking-wider uppercase">
                {page.eyebrow}
              </span>
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight text-brand-graphite">
                {page.h1}
              </h1>
              <p className="text-lg text-brand-graphite/80 leading-relaxed font-sans pt-2">
                {page.description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-blue text-white font-semibold rounded-full hover:bg-brand-blue/90 transition-colors text-sm"
                >
                  Get Free Consultation <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-brand-graphite text-brand-graphite font-semibold rounded-full hover:bg-brand-graphite hover:text-white transition-colors text-sm"
                >
                  View Pricing
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[420px] aspect-[4/3] rounded-[32px] overflow-hidden border-4 border-brand-graphite shadow-flat">
                <img
                  src={page.heroImage}
                  alt={`${page.title} by CodeNClicks IT Solutions`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick stats ribbon */}
      <section className="py-12 bg-brand-blue border-b-2 border-brand-graphite text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {page.stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl md:text-5xl font-heading font-extrabold text-brand-lime leading-none">
                  {stat.value}
                </div>
                <div className="text-xs font-mono text-white/70 uppercase tracking-wider mt-2">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problems and Solutions grids */}
      <Section className="bg-white border-b-2 border-brand-graphite">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Pain points */}
            <div className="space-y-8">
              <div className="space-y-3">
                <span className="text-brand-coral text-sm font-mono font-bold tracking-wider uppercase">Frictions</span>
                <h2 className="text-3xl font-heading font-bold text-brand-graphite">Common Challenges We Eliminate</h2>
              </div>
              <div className="space-y-4">
                {page.painPoints.map((point) => (
                  <div
                    key={point}
                    className="flex items-start gap-4 p-6 bg-brand-mist border-2 border-brand-graphite rounded-[24px]"
                  >
                    <div className="w-8 h-8 bg-brand-coral/10 border border-brand-coral rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <AlertTriangle className="w-4 h-4 text-brand-coral" />
                    </div>
                    <p className="text-sm text-brand-graphite/80 leading-relaxed font-sans">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className="space-y-8">
              <div className="space-y-3">
                <span className="text-brand-blue text-sm font-mono font-bold tracking-wider uppercase">Deliverables</span>
                <h2 className="text-3xl font-heading font-bold text-brand-graphite">What We Secure for You</h2>
              </div>
              <div className="space-y-4">
                {page.benefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-start gap-4 p-6 bg-brand-mist border-2 border-brand-graphite rounded-[24px] shadow-premium hover:shadow-flat transition-shadow duration-300"
                  >
                    <div className="w-8 h-8 bg-brand-blue/10 border border-brand-blue rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-brand-blue" />
                    </div>
                    <p className="text-sm text-brand-graphite/80 leading-relaxed font-sans">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Process flow */}
      <Section className="bg-brand-mist border-b-2 border-brand-graphite">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-brand-blue text-sm font-mono font-bold tracking-wider uppercase">Process</span>
            <h2 className="text-4xl font-extrabold text-brand-graphite leading-none">A Straightforward Roadmap</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {page.process.map((step, i) => (
              <div
                key={step.title}
                className="p-6 bg-white border-2 border-brand-graphite rounded-[24px] relative shadow-premium hover:shadow-flat transition-shadow duration-300"
              >
                <span className="text-4xl font-heading font-extrabold text-brand-blue/10 absolute top-4 right-4">
                  0{i + 1}
                </span>
                <div className="w-10 h-10 rounded-lg bg-brand-mist border border-brand-graphite flex items-center justify-center mb-6">
                  <CheckCircle className="w-5 h-5 text-brand-blue" />
                </div>
                <h3 className="text-lg font-heading font-bold text-brand-graphite mb-2">{step.title}</h3>
                <p className="text-xs text-brand-graphite/70 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Deliverables and Links */}
      <Section className="bg-white border-b-2 border-brand-graphite">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Scope inclusions */}
            <div className="space-y-6">
              <h2 className="text-3xl font-heading font-bold text-brand-graphite">Scope Inclusions</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {page.deliverables.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 p-4 bg-brand-mist border border-brand-graphite rounded-xl"
                  >
                    <Sparkles className="w-4 h-4 text-brand-blue flex-shrink-0" />
                    <span className="text-xs font-mono font-bold text-brand-graphite">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Related links */}
            <div className="space-y-6">
              <h2 className="text-3xl font-heading font-bold text-brand-graphite">Related Capabilities</h2>
              <div className="space-y-3">
                {page.relatedLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center justify-between p-5 bg-brand-mist border-2 border-brand-graphite rounded-[20px] hover:shadow-flat transition-shadow duration-300 group"
                  >
                    <span className="text-sm font-heading font-bold text-brand-graphite">{link.label}</span>
                    <Link2 className="w-4 h-4 text-brand-blue group-hover:rotate-45 transition-transform" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ accordion */}
      <Section className="bg-brand-mist border-b-2 border-brand-graphite">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-brand-blue text-sm font-mono font-bold tracking-wider uppercase">FAQ</span>
              <h2 className="text-4xl font-extrabold text-brand-graphite leading-none">
                Common Questions Answered
              </h2>
            </div>
            
            <div className="lg:col-span-7 space-y-4">
              {page.faqs.map((faq) => (
                <div key={faq.q} className="p-6 bg-white border-2 border-brand-graphite rounded-[20px]">
                  <h3 className="text-sm font-heading font-bold text-brand-graphite mb-2">{faq.q}</h3>
                  <p className="text-xs text-brand-graphite/70 leading-relaxed font-sans">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section className="bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5 space-y-6">
              <h2 className="text-4xl font-extrabold text-brand-graphite leading-none">
                Ready to Discuss?
              </h2>
              <p className="text-brand-graphite/70 text-sm leading-relaxed">
                Connect with our team to obtain custom wireframe maps, technical audit guidelines, and exact cost frameworks.
              </p>
              <div className="grid grid-cols-1 gap-3">
                {["Free project estimate", "No obligation consultation", "Transparent scope rules"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-xs font-mono text-brand-graphite/60">
                    <Check className="w-4 h-4 text-brand-blue" /> {item}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:col-span-7 bg-brand-mist p-8 border-2 border-brand-graphite rounded-[32px] shadow-premium">
              <ContactForm variant="consultation" />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
