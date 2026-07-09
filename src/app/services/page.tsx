"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Section from "@/components/shared/Section";
import { services } from "@/data/services";
import { organizationSchema, websiteSchema, breadcrumbSchema } from "@/lib/seo";

export default function ServicesPage() {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema(),
      websiteSchema(),
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
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
      <section className="py-16 lg:py-28 border-b-2 border-brand-graphite">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-brand-blue text-sm font-mono font-bold tracking-wider uppercase">Our Services</span>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-brand-graphite leading-none">
                OUR DEVELOPMENT <span className="text-brand-blue">& MARKETING SUITE.</span>
              </h1>
              <p className="text-lg md:text-xl text-brand-graphite/80 leading-relaxed font-sans max-w-xl">
                From SEO-friendly websites and landing pages to SaaS platforms, CRM systems, ecommerce stores, and digital marketing, we build systems that generate leverage.
              </p>
            </div>
            
            <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[380px] aspect-[4/3] rounded-[32px] overflow-hidden border-4 border-brand-graphite shadow-flat">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=450&fit=crop"
                  alt="Digital services dashboard and analytics"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services List Grid */}
      <Section className="bg-brand-mist border-b-2 border-brand-graphite">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group flex flex-col justify-between p-8 bg-white border-2 border-brand-graphite rounded-[32px] shadow-premium hover:shadow-flat transition-shadow duration-300 min-h-[380px]"
                >
                  <div>
                    <div className="w-14 h-14 rounded-xl bg-brand-mist border-2 border-brand-graphite flex items-center justify-center mb-6 group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
                      <Icon className="w-6 h-6 text-brand-blue group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-brand-graphite mb-3 group-hover:text-brand-blue transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-brand-graphite/70 leading-relaxed mb-6">
                      {service.tagline}
                    </p>
                    
                    <ul className="space-y-2 mb-6">
                      {service.benefits.slice(0, 3).map((b) => (
                        <li key={b} className="flex items-center gap-2 text-xs font-mono text-brand-graphite/60">
                          <span className="w-1.5 h-1.5 bg-brand-blue rounded-full" /> {b}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <span className="inline-flex items-center gap-1.5 text-sm font-mono font-bold text-brand-blue">
                    Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </Section>
    </div>
  );
}
