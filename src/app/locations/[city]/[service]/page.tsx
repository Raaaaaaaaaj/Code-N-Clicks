import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, MapPin, CheckCircle, ArrowRightLeft, Shield, Sparkles } from "lucide-react";
import Section from "@/components/shared/Section";
import ContactForm from "@/components/shared/ContactForm";
import { cities, services, generateLocalPageContent, getCityProfile, getServiceProfile } from "@/data/locationPages";
import { organizationSchema, websiteSchema, breadcrumbSchema, absoluteUrl } from "@/lib/seo";
import { Metadata } from "next";

interface Props {
  params: {
    city: string;
    service: string;
  };
}

export function generateStaticParams() {
  return cities.flatMap((c) =>
    services.map((s) => ({
      city: c.slug,
      service: s.slug,
    }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const content = generateLocalPageContent(params.city, params.service);
  if (!content) return {};

  return {
    title: content.seoTitle,
    description: content.metaDescription,
    alternates: {
      canonical: content.canonical,
    },
    openGraph: {
      title: content.seoTitle,
      description: content.metaDescription,
      url: content.ogUrl,
      type: "website",
      siteName: "CodeNClicks IT Solutions",
      images: [
        {
          url: "https://codenclicksit.in/Codenclicks_white_bg_PNG.png",
          width: 1200,
          height: 630,
          alt: `${content.service.title} in ${content.city.name}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: content.seoTitle,
      description: content.metaDescription,
      images: ["https://codenclicksit.in/Codenclicks_white_bg_PNG.png"],
    },
  };
}

export default function CityServicePage({ params }: Props) {
  const content = generateLocalPageContent(params.city, params.service);
  if (!content) {
    notFound();
  }

  const { city, service } = content;
  const ServiceIcon = service.icon;

  const jsonLdData = {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema(),
      websiteSchema(),
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Locations", path: "/locations" },
        { name: city.name, path: `/locations/${city.slug}` },
        { name: service.title, path: `/locations/${city.slug}/${service.slug}` },
      ]),
      {
        "@type": "LocalBusiness",
        "@id": `${absoluteUrl(`/locations/${city.slug}`)}#localbusiness`,
        name: `CodeNClicks IT Solutions - ${city.name}`,
        image: "https://codenclicksit.in/Codenclicks_white_bg_PNG.png",
        url: absoluteUrl(`/locations/${city.slug}`),
        telephone: "+91 99039 60407",
        email: "info@codenclicksit.in",
        priceRange: "INR 3,999+",
        address: {
          "@type": "PostalAddress",
          addressLocality: city.name,
          addressRegion: city.state,
          addressCountry: "IN",
        },
        areaServed: [
          { "@type": "Place", name: city.name },
          ...city.nearbyAreas.map((area) => ({ "@type": "Place", name: area })),
        ],
      },
      {
        "@type": "Service",
        "@id": `${absoluteUrl(content.canonical)}#service`,
        name: `${service.title} in ${city.name}`,
        description: content.metaDescription,
        provider: {
          "@type": "Organization",
          "@id": `${absoluteUrl("/")}#organization`,
          name: "CodeNClicks IT Solutions",
          url: "https://codenclicksit.in",
          logo: {
            "@type": "ImageObject",
            url: "https://codenclicksit.in/Codenclicks_white_bg_PNG.png",
          },
        },
        url: absoluteUrl(content.canonical),
        areaServed: [
          { "@type": "Place", name: city.name },
          ...city.nearbyAreas.map((area) => ({ "@type": "Place", name: area })),
        ],
      },
      {
        "@type": "FAQPage",
        "mainEntity": content.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.a,
          },
        })),
      }
    ]
  };

  const sections: Record<string, () => React.JSX.Element> = {
    hero: () => (
      <section key="hero" className="py-16 lg:py-24 border-b-2 border-brand-graphite bg-brand-mist">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-brand-blue" />
                <span className="text-brand-blue text-sm font-mono font-bold tracking-wider uppercase">
                  {city.name} // {service.eyebrow}
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-none text-brand-graphite">
                {city.h1}
              </h1>
              <p className="text-lg md:text-xl text-brand-graphite/80 leading-relaxed font-sans max-w-xl">
                {city.ecosystemText.substring(0, 160)}...
              </p>
              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                  href="#quote"
                  className="px-6 py-3 bg-brand-blue border-2 border-brand-graphite rounded-full text-sm font-mono font-bold text-white shadow-premium hover:shadow-flat transition-all duration-300"
                >
                  Consult local Architect
                </Link>
                <Link
                  href={`/locations/${city.slug}`}
                  className="px-6 py-3 bg-white border-2 border-brand-graphite rounded-full text-sm font-mono font-bold text-brand-graphite shadow-premium hover:shadow-flat hover:text-brand-blue hover:border-brand-blue transition-all duration-300"
                >
                  View City Hub
                </Link>
              </div>
            </div>
            
            <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[360px] aspect-[3/4] rounded-[32px] overflow-hidden border-4 border-brand-graphite shadow-flat bg-white p-8 flex flex-col justify-between">
                <div className="w-16 h-16 rounded-2xl bg-brand-mist border-2 border-brand-graphite flex items-center justify-center">
                  <ServiceIcon className="w-8 h-8 text-brand-blue" />
                </div>
                <div className="space-y-4">
                  <div className="text-xs font-mono text-brand-graphite/50 uppercase tracking-widest">Client Target</div>
                  <h3 className="text-xl font-heading font-extrabold text-brand-graphite leading-tight">
                    Optimized for {city.name} Enterprise Workflows
                  </h3>
                  <p className="text-xs text-brand-graphite/70 font-sans leading-relaxed">
                    Custom codes and localized designs built directly without template overhead.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    ),
    ecosystem: () => (
      <Section key="ecosystem" className="bg-white border-b-2 border-brand-graphite">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto space-y-6">
            <span className="text-brand-blue text-sm font-mono font-bold tracking-wider uppercase">Local Business Environment</span>
            <h2 className="text-3xl font-heading font-extrabold text-brand-graphite leading-none">
              {city.ecosystemTitle}
            </h2>
            <p className="text-sm font-sans text-brand-graphite/70 leading-relaxed max-w-3xl">
              {city.ecosystemText}
            </p>
          </div>
        </div>
      </Section>
    ),
    challenges: () => (
      <Section key="challenges" className="bg-white border-b-2 border-brand-graphite">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-brand-blue text-sm font-mono font-bold tracking-wider uppercase">Regional friction</span>
              <h2 className="text-3xl font-heading font-extrabold text-brand-graphite leading-none">
                {city.challengesTitle}
              </h2>
              <p className="text-sm font-sans text-brand-graphite/70 leading-relaxed">
                {city.challengesText}
              </p>
            </div>
            
            <div className="lg:col-span-7 space-y-4">
              <div className="flex gap-4 p-5 bg-brand-mist border-2 border-brand-graphite rounded-3xl">
                <div className="w-8 h-8 rounded-lg bg-white border border-brand-graphite flex items-center justify-center shrink-0 font-mono font-bold text-sm text-brand-blue">
                  01
                </div>
                <p className="text-xs text-brand-graphite/80 font-sans leading-relaxed mt-1">
                  Struggling to acquire qualified regional leads due to poor local search rankings and high competition in the {city.localTerm}.
                </p>
              </div>
              <div className="flex gap-4 p-5 bg-brand-mist border-2 border-brand-graphite rounded-3xl">
                <div className="w-8 h-8 rounded-lg bg-white border border-brand-graphite flex items-center justify-center shrink-0 font-mono font-bold text-sm text-brand-blue">
                  02
                </div>
                <p className="text-xs text-brand-graphite/80 font-sans leading-relaxed mt-1">
                  Losing customer conversions because legacy portals or websites are slow, hard to navigate on mobile devices, or freeze on local cellular networks.
                </p>
              </div>
              <div className="flex gap-4 p-5 bg-brand-mist border-2 border-brand-graphite rounded-3xl">
                <div className="w-8 h-8 rounded-lg bg-white border border-brand-graphite flex items-center justify-center shrink-0 font-mono font-bold text-sm text-brand-blue">
                  03
                </div>
                <p className="text-xs text-brand-graphite/80 font-sans leading-relaxed mt-1">
                  Paying expensive, recurring monthly software licensing fees for rigid CRM/ERP tools that do not fit local workflows or operational pipelines.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    ),
    services: () => (
      <Section key="services" className="bg-brand-mist border-b-2 border-brand-graphite">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto bg-white p-8 border-2 border-brand-graphite rounded-[32px] shadow-premium hover:shadow-flat transition-shadow duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-brand-mist border border-brand-graphite flex items-center justify-center">
                <ServiceIcon className="w-6 h-6 text-brand-blue" />
              </div>
              <h3 className="text-2xl font-heading font-extrabold text-brand-graphite">
                {service.title} Services in {city.name}
              </h3>
            </div>
            <p className="text-sm font-sans text-brand-graphite/80 leading-relaxed mb-6">
              {content.serviceDesc}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {city.industries.map((ind) => (
                <div key={ind} className="flex items-center gap-2 text-xs text-brand-graphite/70 font-mono">
                  <CheckCircle className="w-4 h-4 text-brand-blue" />
                  <span>Targeted for {ind}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
    ),
    strategy: () => (
      <Section key="strategy" className="bg-white border-b-2 border-brand-graphite">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-6">
            <span className="text-brand-blue text-sm font-mono font-bold tracking-wider uppercase">Local Strategy</span>
            <h2 className="text-3xl font-heading font-extrabold text-brand-graphite leading-tight">
              {city.strategyTitle}
            </h2>
            <p className="text-sm font-sans text-brand-graphite/70 leading-relaxed">
              {city.strategyText}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              {city.process.map((step, idx) => (
                <div key={idx} className="p-6 bg-brand-mist border border-brand-graphite rounded-2xl">
                  <div className="font-mono text-xs text-brand-blue font-bold mb-2">STEP 0{idx + 1}</div>
                  <h4 className="font-heading font-extrabold text-sm mb-1">{step.title}</h4>
                  <p className="text-xs text-brand-graphite/60 font-sans leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
    ),
    deliverables: () => (
      <Section key="deliverables" className="bg-white border-b-2 border-brand-graphite">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-brand-blue text-sm font-mono font-bold tracking-wider uppercase">What we deliver</span>
              <h2 className="text-3xl font-heading font-extrabold text-brand-graphite leading-none">
                Handover Assets Included
              </h2>
              <p className="text-sm font-sans text-brand-graphite/70 leading-relaxed">
                Every {service.title.toLowerCase()} build we deliver in {city.name} comes with complete source file ownership and deployment configurations.
              </p>
            </div>
            
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
              {content.deliverables.map((item, index) => (
                <div
                  key={index}
                  className="p-5 bg-white border border-brand-graphite rounded-2xl flex items-start gap-2.5"
                >
                  <Sparkles className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                  <span className="text-xs text-brand-graphite/80 font-sans leading-tight">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
    ),
    faqs: () => (
      <Section key="faqs" className="bg-brand-mist border-b-2 border-brand-graphite">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-brand-blue text-sm font-mono font-bold tracking-wider uppercase">FAQ</span>
            <h2 className="text-4xl font-extrabold text-brand-graphite leading-none">Local Service FAQs</h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {content.faqs.map((faq, index) => (
              <div
                key={index}
                className="p-6 bg-white border-2 border-brand-graphite rounded-3xl space-y-2"
              >
                <h3 className="font-heading font-extrabold text-brand-graphite text-base">
                  {faq.q}
                </h3>
                <p className="text-xs text-brand-graphite/70 font-sans leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    ),
    cta: () => (
      <Section key="cta" id="quote" className="bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
              <span className="text-brand-blue text-sm font-mono font-bold tracking-wider uppercase">Free Consult</span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-brand-graphite leading-none">
                {city.ctaTitle}
              </h2>
              <p className="text-sm font-sans text-brand-graphite/70 leading-relaxed">
                {city.ctaText}
              </p>
            </div>
            
            <div className="lg:col-span-7 bg-white border-2 border-brand-graphite rounded-[32px] p-8 shadow-premium">
              <ContactForm />
            </div>
          </div>
        </div>
      </Section>
    ),
  };

  return (
    <div className="bg-white text-brand-graphite">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />

      {city.sectionOrder.map((sectionKey) => {
        const renderFn = sections[sectionKey];
        return renderFn ? renderFn() : null;
      })}
    </div>
  );
}
