import { Star, Quote, ArrowRight } from "lucide-react";
import Section from "@/components/shared/Section";
import { testimonials } from "@/data/testimonials";
import Link from "next/link";
import { organizationSchema, websiteSchema, breadcrumbSchema } from "@/lib/seo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Client Reviews & Testimonials | CodeNClicks Solutions",
  description: "Read client reviews and success testimonials for CodeNClicks IT Solutions web development, custom software, ecommerce, CRM, and digital marketing projects.",
  alternates: {
    canonical: "/reviews",
  },
  openGraph: {
    title: "Client Reviews & Testimonials | CodeNClicks Solutions",
    description: "Read client reviews and success testimonials for CodeNClicks IT Solutions web development, custom software, ecommerce, CRM, and digital marketing projects.",
    url: "https://codenclicksit.in/reviews",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Client Reviews & Testimonials | CodeNClicks Solutions",
    description: "Read client reviews and success testimonials for CodeNClicks IT Solutions web development, custom software, ecommerce, CRM, and digital marketing projects.",
  },
};

export default function ReviewsPage() {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema(),
      websiteSchema(),
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Reviews", path: "/reviews" },
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
              <span className="text-brand-blue text-sm font-mono font-bold tracking-wider uppercase">Reviews</span>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-brand-graphite leading-none">
                WHAT OUR <span className="text-brand-blue">CLIENTS SAY.</span>
              </h1>
              <p className="text-lg md:text-xl text-brand-graphite/80 leading-relaxed font-sans max-w-xl">
                Hear from businesses that trusted CodeNClicks to build their custom websites, SaaS products, CRM systems, e-commerce channels, and digital marketing setups.
              </p>
            </div>
            
            <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[380px] aspect-[4/3] rounded-[32px] overflow-hidden border-4 border-brand-graphite shadow-flat">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
                  alt="CodeNClicks Customer Reviews - Successful Software Launches and Client Partnership Celebrations"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials List */}
      <Section className="bg-white border-b-2 border-brand-graphite">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="p-8 bg-brand-mist border-2 border-brand-graphite rounded-[24px] shadow-premium hover:shadow-flat transition-shadow duration-300 flex flex-col justify-between"
              >
                <div>
                  <Quote className="w-8 h-8 text-brand-blue/20 mb-4" />
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-brand-coral text-brand-coral" />
                    ))}
                    {Array.from({ length: 5 - t.rating }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 text-brand-graphite/20" />
                    ))}
                  </div>
                  <p className="text-sm text-brand-graphite/80 leading-relaxed font-sans mb-6 italic">
                    "{t.content}"
                  </p>
                </div>
                
                <div className="flex items-center gap-3 pt-6 border-t border-brand-graphite/10">
                  <div className="w-10 h-10 rounded-full bg-brand-blue text-white flex items-center justify-center font-heading font-bold text-xs flex-shrink-0">
                    {t.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <div className="text-sm font-heading font-bold text-brand-graphite">{t.name}</div>
                    <div className="text-xs font-mono text-brand-graphite/50">{t.role}, {t.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Band */}
      <section className="bg-brand-blue text-white py-24 text-center">
        <div className="container mx-auto px-4 lg:px-8 space-y-6">
          <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-none tracking-tight">
            JOIN OUR HAPPY CLIENTS
          </h2>
          <p className="text-white/80 max-w-xl mx-auto text-base leading-relaxed font-sans">
            Start your project today and experience a clean code, typesafe engineering, and result-first delivery.
          </p>
          <div className="pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-brand-blue font-bold rounded-full hover:bg-brand-mist transition-colors text-sm"
            >
              Get Started <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
