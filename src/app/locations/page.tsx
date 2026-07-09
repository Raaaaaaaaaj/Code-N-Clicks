import Link from "next/link";
import { ArrowRight, MapPin, Building, Globe } from "lucide-react";
import Section from "@/components/shared/Section";
import { cities, services } from "@/data/locationPages";
import { organizationSchema, websiteSchema, breadcrumbSchema } from "@/lib/seo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Locations | City-Specific Web & Software Services | CodeNClicks",
  description: "Explore our locations. CodeNClicks provides custom web development, SaaS, CRM, SEO, and digital marketing services across 20 major Tier 1 and Tier 2 cities in India.",
  alternates: {
    canonical: "/locations",
  },
  openGraph: {
    title: "Our Locations | City-Specific Web & Software Services | CodeNClicks",
    description: "Explore our locations. CodeNClicks provides custom web development, SaaS, CRM, SEO, and digital marketing services across 20 major Tier 1 and Tier 2 cities in India.",
    url: "https://codenclicksit.in/locations",
    type: "website",
    siteName: "CodeNClicks IT Solutions",
    images: [
      {
        url: "https://codenclicksit.in/Codenclicks_white_bg_PNG.png",
        width: 1200,
        height: 630,
        alt: "CodeNClicks IT Locations map",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Locations | City-Specific Web & Software Services | CodeNClicks",
    description: "Explore our locations. CodeNClicks provides custom web development, SaaS, CRM, SEO, and digital marketing services across 20 major Tier 1 and Tier 2 cities in India.",
    images: ["https://codenclicksit.in/Codenclicks_white_bg_PNG.png"],
  },
};

export default function LocationsPage() {
  const tier1Cities = cities.slice(0, 10);
  const tier2Cities = cities.slice(10);

  const jsonLdData = {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema(),
      websiteSchema(),
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Locations", path: "/locations" },
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-brand-blue text-sm font-mono font-bold tracking-wider uppercase">Regional Presence</span>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-brand-graphite leading-none">
                LOCAL SERVICES. <span className="text-brand-blue">GLOBAL STANDARDS.</span>
              </h1>
              <p className="text-lg md:text-xl text-brand-graphite/80 leading-relaxed font-sans max-w-xl">
                We build scalable websites, custom software, CRM systems, and SEO assets specifically mapped to the business ecosystems of India's major commercial hubs.
              </p>
            </div>
            
            <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[380px] aspect-[4/3] rounded-[32px] overflow-hidden border-4 border-brand-graphite shadow-flat bg-white p-8 flex flex-col justify-center space-y-4">
                <div className="flex items-center gap-3">
                  <Globe className="w-8 h-8 text-brand-blue animate-spin-slow" />
                  <span className="font-mono font-bold text-lg">National Silo Network</span>
                </div>
                <p className="text-sm font-sans text-brand-graphite/70 leading-relaxed">
                  Serving businesses across 20 cities, helping legacy MSMEs and fast-growth tech startups acquire customers, automate inventories, and cut license fees.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tier 1 Locations */}
      <Section className="bg-white border-b-2 border-brand-graphite">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-brand-blue text-sm font-mono font-bold tracking-wider uppercase">Tier 1 Cities</span>
            <h2 className="text-4xl font-extrabold text-brand-graphite leading-none">Metro Business Hubs</h2>
            <p className="text-brand-graphite/60 font-sans text-sm">
              Premium technical solutions for India's major commercial cities and tech clusters.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {tier1Cities.map((city) => (
              <div
                key={city.slug}
                className="group flex flex-col justify-between p-6 bg-white border-2 border-brand-graphite rounded-3xl shadow-premium hover:shadow-flat hover:border-brand-blue transition-all duration-300"
              >
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="w-5 h-5 text-brand-blue" />
                    <h3 className="text-xl font-heading font-extrabold text-brand-graphite">{city.name}</h3>
                    <span className="px-2 py-0.5 bg-brand-lime text-[10px] font-mono font-bold border border-brand-graphite rounded-full uppercase">
                      {city.state}
                    </span>
                  </div>
                  <p className="text-xs text-brand-graphite/60 font-sans mb-4">
                    Serving {city.hubs.slice(0, 3).join(", ")}, and surrounding areas like {city.nearbyAreas[0]}.
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {city.industries.map((ind) => (
                      <span key={ind} className="px-2 py-0.5 bg-brand-mist text-[10px] font-mono text-brand-graphite/70 border border-brand-graphite/30 rounded">
                        {ind}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  href={`/locations/${city.slug}`}
                  className="inline-flex items-center gap-1 text-sm font-mono font-bold text-brand-blue group-hover:gap-2 transition-all"
                >
                  Explore Services <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Tier 2 Locations */}
      <Section className="bg-brand-mist border-b-2 border-brand-graphite">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-brand-blue text-sm font-mono font-bold tracking-wider uppercase">Tier 2 Cities</span>
            <h2 className="text-4xl font-extrabold text-brand-graphite leading-none">Rising Economic Hubs</h2>
            <p className="text-brand-graphite/60 font-sans text-sm">
              Bringing premium tech execution to growing industrial zones and startup regions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {tier2Cities.map((city) => (
              <div
                key={city.slug}
                className="group flex flex-col justify-between p-6 bg-white border-2 border-brand-graphite rounded-3xl shadow-premium hover:shadow-flat hover:border-brand-blue transition-all duration-300"
              >
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Building className="w-5 h-5 text-brand-graphite/60 group-hover:text-brand-blue transition-colors" />
                    <h3 className="text-xl font-heading font-extrabold text-brand-graphite">{city.name}</h3>
                    <span className="px-2 py-0.5 bg-brand-mist text-[10px] font-mono font-bold border border-brand-graphite rounded-full uppercase">
                      {city.state}
                    </span>
                  </div>
                  <p className="text-xs text-brand-graphite/60 font-sans mb-4">
                    Serving {city.hubs.slice(0, 2).join(", ")}, and neighboring logistics belts.
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {city.industries.map((ind) => (
                      <span key={ind} className="px-2 py-0.5 bg-brand-mist text-[10px] font-mono text-brand-graphite/70 border border-brand-graphite/30 rounded">
                        {ind}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  href={`/locations/${city.slug}`}
                  className="inline-flex items-center gap-1 text-sm font-mono font-bold text-brand-blue group-hover:gap-2 transition-all"
                >
                  Explore Services <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
