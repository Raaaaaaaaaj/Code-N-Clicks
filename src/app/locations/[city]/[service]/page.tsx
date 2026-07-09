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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-brand-blue" />
                <span className="text-brand-blue text-sm font-mono font-bold tracking-wider uppercase">
                  {city.name} // {service.eyebrow}
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-none text-brand-graphite">
                {service.title} Company in <span className="text-brand-blue">{city.name}</span>
              </h1>
              <p className="text-lg md:text-xl text-brand-graphite/80 leading-relaxed font-sans max-w-xl">
                {content.introParagraph}
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

      {/* Pain Points */}
      <Section className="bg-white border-b-2 border-brand-graphite">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-brand-blue text-sm font-mono font-bold tracking-wider uppercase">Regional friction</span>
              <h2 className="text-3xl font-heading font-extrabold text-brand-graphite leading-none">
                Challenges Faced by {city.name} Teams
              </h2>
              <p className="text-sm font-sans text-brand-graphite/70 leading-relaxed">
                Operating in the {city.localTerm} poses specific operational hurdles that generic, out-of-the-box templates fail to address.
              </p>
            </div>
            
            <div className="lg:col-span-7 space-y-4">
              {content.painPoints.map((point, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-5 bg-brand-mist border-2 border-brand-graphite rounded-3xl"
                >
                  <div className="w-8 h-8 rounded-lg bg-white border border-brand-graphite flex items-center justify-center shrink-0 font-mono font-bold text-sm text-brand-blue">
                    0{index + 1}
                  </div>
                  <p className="text-xs text-brand-graphite/80 font-sans leading-relaxed mt-1">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Local Solutions & Benefits */}
      <Section className="bg-brand-mist border-b-2 border-brand-graphite">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-brand-blue text-sm font-mono font-bold tracking-wider uppercase">Local Solutions</span>
            <h2 className="text-4xl font-extrabold text-brand-graphite leading-none">
              Why Businesses in {city.name} Choose CodeNClicks
            </h2>
            <p className="text-brand-graphite/60 font-sans text-sm">
              {content.localizedWhyChooseUs}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {content.benefits.map((benefit, index) => (
              <div
                key={index}
                className="p-8 bg-white border-2 border-brand-graphite rounded-[32px] shadow-premium hover:shadow-flat transition-shadow duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-brand-lime flex items-center justify-center border border-brand-graphite">
                    <CheckCircle className="w-5 h-5 text-brand-graphite" />
                  </div>
                  <h3 className="text-lg font-heading font-extrabold text-brand-graphite">{benefit.title}</h3>
                </div>
                <p className="text-xs text-brand-graphite/70 font-sans leading-relaxed">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Deliverables */}
      <Section className="bg-white border-b-2 border-brand-graphite">
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

      {/* Localized FAQs */}
      <Section className="bg-brand-mist border-b-2 border-brand-graphite">
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

      {/* Localized CTA */}
      <Section id="quote" className="bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
              <span className="text-brand-blue text-sm font-mono font-bold tracking-wider uppercase">Free Consult</span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-brand-graphite leading-none">
                Start your Project in <span className="text-brand-blue">{city.name}</span>
              </h2>
              <p className="text-sm font-sans text-brand-graphite/70 leading-relaxed">
                Connect with our technical architects to scope your customized web, CRM, or software platform. We provide a detailed milestones roadmap and project estimate within 24 hours.
              </p>
            </div>
            
            <div className="lg:col-span-7 bg-white border-2 border-brand-graphite rounded-[32px] p-8 shadow-premium">
              <ContactForm />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
