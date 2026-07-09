import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Section from "@/components/shared/Section";
import { industries } from "@/data/industries";
import { organizationSchema, websiteSchema, breadcrumbSchema } from "@/lib/seo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Software & Web Development Industries | CodeNClicks",
  description: "Learn how CodeNClicks designs custom websites, booking engines, LMS portals, and CRM systems tailored to hospitality, education, and ecommerce industries.",
  alternates: {
    canonical: "/industries",
  },
  openGraph: {
    title: "Software & Web Development Industries | CodeNClicks",
    description: "Learn how CodeNClicks designs custom websites, booking engines, LMS portals, and CRM systems tailored to hospitality, education, and ecommerce industries.",
    url: "https://codenclicksit.in/industries",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Software & Web Development Industries | CodeNClicks",
    description: "Learn how CodeNClicks designs custom websites, booking engines, LMS portals, and CRM systems tailored to hospitality, education, and ecommerce industries.",
  },
};

export default function IndustriesPage() {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema(),
      websiteSchema(),
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Industries", path: "/industries" },
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
              <span className="text-brand-blue text-sm font-mono font-bold tracking-wider uppercase">Industries</span>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-brand-graphite leading-none">
                SECTOR-SPECIFIC <span className="text-brand-blue">DEVELOPMENT.</span>
              </h1>
              <p className="text-lg md:text-xl text-brand-graphite/80 leading-relaxed font-sans max-w-xl">
                Every industry has different buyers, workflows, and conversion barriers. We build websites, SaaS platforms, and CRM systems around those real operating requirements.
              </p>
            </div>
            
            <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[380px] aspect-[4/3] rounded-[32px] overflow-hidden border-4 border-brand-graphite shadow-flat">
                <img
                  src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop"
                  alt="Industries Served by CodeNClicks - Custom Systems for Hospitality, Education, Corporate, and Ecommerce Sectors"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries list */}
      <Section className="bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((ind) => {
              const Icon = ind.icon;
              return (
                <div
                  key={ind.slug}
                  className="group flex flex-col justify-between p-8 bg-white border-2 border-brand-graphite rounded-[32px] shadow-premium hover:shadow-flat transition-shadow duration-300 min-h-[340px]"
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
                    <p className="text-sm text-brand-graphite/70 leading-relaxed font-sans">{ind.tagline}</p>
                    
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
                      className="inline-flex items-center gap-1.5 text-sm font-mono font-bold text-brand-blue"
                    >
                      Explore Solutions <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Section>
    </div>
  );
}
