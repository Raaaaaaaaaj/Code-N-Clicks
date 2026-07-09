import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, MapPin, CheckCircle, ShieldAlert, Cpu } from "lucide-react";
import Section from "@/components/shared/Section";
import { cities, getCityProfile, services } from "@/data/locationPages";
import { organizationSchema, websiteSchema, breadcrumbSchema, absoluteUrl } from "@/lib/seo";
import { Metadata } from "next";

interface Props {
  params: {
    city: string;
  };
}

export function generateStaticParams() {
  return cities.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const city = getCityProfile(params.city);
  if (!city) return {};

  const title = `Web & Software Development in ${city.name} | CodeNClicks`;
  const description = `Looking for a custom software, CRM, or website development agency in ${city.name}? CodeNClicks builds fast, SEO-friendly platforms for teams across ${city.hubs.slice(0, 3).join(", ")}.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/locations/${city.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://codenclicksit.in/locations/${city.slug}`,
      type: "website",
      siteName: "CodeNClicks IT Solutions",
      images: [
        {
          url: "https://codenclicksit.in/Codenclicks_white_bg_PNG.png",
          width: 1200,
          height: 630,
          alt: `CodeNClicks IT Services in ${city.name}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["https://codenclicksit.in/Codenclicks_white_bg_PNG.png"],
    },
  };
}

export default function CityHubPage({ params }: Props) {
  const city = getCityProfile(params.city);
  if (!city) {
    notFound();
  }

  const jsonLdData = {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema(),
      websiteSchema(),
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Locations", path: "/locations" },
        { name: city.name, path: `/locations/${city.slug}` },
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
          <div className="max-w-4xl space-y-6">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-brand-blue" />
              <span className="text-brand-blue text-sm font-mono font-bold tracking-wider uppercase">
                Regional Hub // {city.state}
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-brand-graphite leading-none">
              WEB & SOFTWARE IN <span className="text-brand-blue uppercase">{city.name}</span>
            </h1>
            <p className="text-lg md:text-xl text-brand-graphite/80 leading-relaxed font-sans max-w-2xl pt-2">
              We design and engineer bespoke IT systems, fast React web interfaces, sales pipelines, and organic SEO frameworks mapped specifically to the {city.name} business ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* Local Insights & Context */}
      <Section className="bg-white border-b-2 border-brand-graphite">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start max-w-5xl mx-auto">
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-3xl font-heading font-extrabold text-brand-graphite leading-tight">
                Empowering the {city.name} Business Community
              </h2>
              <p className="text-sm font-sans text-brand-graphite/70 leading-relaxed">
                Operating across core hubs like {city.hubs.slice(0, 3).join(", ")}, our mission is to eliminate digital friction. We understand that local businesses—ranging from {city.businessExample}—face unique obstacles, including {city.regionalChallenge}.
              </p>
              <p className="text-sm font-sans text-brand-graphite/70 leading-relaxed">
                CodeNClicks provides direct support in {city.name} and neighboring areas like {city.nearbyAreas.slice(0, 3).join(", ")}, deploying secure, lightning-fast platforms with no recurring monthly licensing fees.
              </p>
            </div>

            <div className="lg:col-span-5 space-y-6 p-8 bg-brand-mist border-2 border-brand-graphite rounded-[32px] shadow-premium">
              <div className="flex items-center gap-3">
                <ShieldAlert className="w-6 h-6 text-brand-blue" />
                <h3 className="font-heading font-extrabold text-lg">Local Challenges Solved</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-2.5 text-xs text-brand-graphite/80">
                  <CheckCircle className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                  <span>Migrating offline distributor grids to custom cloud interfaces.</span>
                </li>
                <li className="flex items-start gap-2.5 text-xs text-brand-graphite/80">
                  <CheckCircle className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                  <span>Optimizing search visibility in the competitive local market.</span>
                </li>
                <li className="flex items-start gap-2.5 text-xs text-brand-graphite/80">
                  <CheckCircle className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                  <span>Custom CRM pipelines with automated WhatsApp and email follow-ups.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Services Grid */}
      <Section className="bg-brand-mist border-b-2 border-brand-graphite">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-brand-blue text-sm font-mono font-bold tracking-wider uppercase">Local Services</span>
            <h2 className="text-4xl font-extrabold text-brand-graphite leading-none">Custom Services in {city.name}</h2>
            <p className="text-brand-graphite/60 font-sans text-sm">
              Select a specialized service category built specifically for {city.name} parameters.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service) => {
              const ServiceIcon = service.icon;
              return (
                <div
                  key={service.slug}
                  className="group flex flex-col justify-between p-8 bg-white border-2 border-brand-graphite rounded-[32px] shadow-premium hover:shadow-flat hover:border-brand-blue transition-all duration-300 min-h-[300px]"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-mist border border-brand-graphite flex items-center justify-center group-hover:bg-brand-blue transition-colors">
                      <ServiceIcon className="w-6 h-6 text-brand-blue group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-xl font-heading font-extrabold text-brand-graphite">
                      {service.title} in {city.name}
                    </h3>
                    <p className="text-xs text-brand-graphite/70 font-sans leading-relaxed">
                      Custom, localized {service.title.toLowerCase()} systems engineered to match {city.name} trading and commercial operations.
                    </p>
                  </div>

                  <Link
                    href={`/locations/${city.slug}/${service.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-brand-blue mt-6"
                  >
                    Launch Local Service <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </Section>
    </div>
  );
}
