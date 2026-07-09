import { Check, ArrowRight } from "lucide-react";
import Section from "@/components/shared/Section";
import { services } from "@/data/services";
import Link from "next/link";
import { organizationSchema, websiteSchema, breadcrumbSchema } from "@/lib/seo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Web & Software Pricing | CodeNClicks Solutions",
  description: "View transparent CodeNClicks pricing packages for business websites, custom software, CRM setup, SaaS platforms, e-commerce stores, and digital marketing.",
  alternates: {
    canonical: "/pricing",
  },
  openGraph: {
    title: "Custom Web & Software Pricing | CodeNClicks Solutions",
    description: "View transparent CodeNClicks pricing packages for business websites, custom software, CRM setup, SaaS platforms, e-commerce stores, and digital marketing.",
    url: "https://codenclicksit.in/pricing",
    type: "website",
    siteName: "CodeNClicks IT Solutions",
    images: [
      {
        url: "https://codenclicksit.in/Codenclicks_white_bg_PNG.png",
        width: 1200,
        height: 630,
        alt: "CodeNClicks IT Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Web & Software Pricing | CodeNClicks Solutions",
    description: "View transparent CodeNClicks pricing packages for business websites, custom software, CRM setup, SaaS platforms, e-commerce stores, and digital marketing.",
    images: ["https://codenclicksit.in/Codenclicks_white_bg_PNG.png"],
  },
};

export default function PricingPage() {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema(),
      websiteSchema(),
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Pricing", path: "/pricing" },
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
              <span className="text-brand-blue text-sm font-mono font-bold tracking-wider uppercase">Pricing</span>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-brand-graphite leading-none">
                TRANSPARENT <span className="text-brand-blue">PACKAGES.</span>
              </h1>
              <p className="text-lg md:text-xl text-brand-graphite/80 leading-relaxed font-sans max-w-xl">
                Flat-rate starting plans for <Link href="/services/web-development" className="text-brand-blue hover:underline font-bold">websites</Link>, <Link href="/services/custom-software-development" className="text-brand-blue hover:underline font-bold">custom software</Link>, <Link href="/services/ecommerce-development" className="text-brand-blue hover:underline font-bold">e-commerce stores</Link>, <Link href="/services/crm-development" className="text-brand-blue hover:underline font-bold">CRMs</Link>, and digital growth. Custom scopes are estimated by milestones.
              </p>
            </div>
            
            <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[380px] aspect-[4/3] rounded-[32px] overflow-hidden border-4 border-brand-graphite shadow-flat">
                <img
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop"
                  alt="CodeNClicks Pricing Packages - Transparent Cost Plans for Web Development, CRM Setup, and Custom SaaS Builds"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Pricing Loops */}
      {services.map((service, si) => (
        <Section
          key={service.slug}
          className={`border-b-2 border-brand-graphite ${si % 2 === 0 ? "bg-white" : "bg-brand-mist"}`}
        >
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex items-center justify-between mb-10 pb-4 border-b border-brand-graphite/10">
              <h2 className="text-3xl font-heading font-extrabold text-brand-graphite">{service.title}</h2>
              <Link
                href={`/services/${service.slug}`}
                className="inline-flex items-center gap-1.5 text-sm font-mono font-bold text-brand-blue"
              >
                Service Details <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`p-6 rounded-[24px] border-4 border-brand-graphite bg-white flex flex-col justify-between min-h-[440px] relative ${
                    plan.popular ? "shadow-flat-blue" : "shadow-premium"
                  }`}
                >
                  {plan.popular && (
                    <span className="absolute -top-4 left-6 px-3 py-1 bg-brand-lime text-brand-graphite text-xs font-mono font-bold border-2 border-brand-graphite uppercase rounded">
                      Popular
                    </span>
                  )}
                  <div>
                    <h3 className="text-xl font-heading font-bold text-brand-graphite mb-1">{plan.name}</h3>
                    <div className="text-2xl font-heading font-extrabold text-brand-blue mt-2 mb-1">{plan.price}</div>
                    <p className="text-xs text-brand-graphite/60 leading-relaxed mb-6">{plan.description}</p>
                    
                    <ul className="space-y-2.5">
                      {plan.features.map((f) => (
                        <li key={f} className="flex items-center gap-2.5 text-[11px] font-mono text-brand-graphite/70 leading-normal">
                          <Check className="w-3.5 h-3.5 text-brand-blue flex-shrink-0" /> {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 mt-8">
                    <Link
                      href="/contact"
                      className={`block text-center py-2.5 rounded-full font-bold text-sm transition-colors ${
                        plan.popular
                          ? "bg-brand-blue text-white hover:bg-brand-blue/90"
                          : "bg-brand-mist border-2 border-brand-graphite text-brand-graphite hover:bg-brand-graphite hover:text-white"
                      }`}
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>
      ))}
    </div>
  );
}
