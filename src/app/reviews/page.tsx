import { Star, ArrowRight, ShieldCheck, CheckCircle2, Award } from "lucide-react";
import Section from "@/components/shared/Section";
import { testimonials } from "@/data/testimonials";
import { TestimonialsCarousel } from "@/components/reviews/TestimonialsCarousel";
import Link from "next/link";
import { organizationSchema, websiteSchema, breadcrumbSchema } from "@/lib/seo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CodeNClicks Reviews",
  description: "Read genuine CodeNClicks client reviews and testimonials about our custom software development, web development, digital marketing and technology services.",
  alternates: {
    canonical: "/reviews",
  },
  openGraph: {
    title: "CodeNClicks Reviews",
    description: "Read genuine CodeNClicks client reviews and testimonials about our custom software development, web development, digital marketing and technology services.",
    url: "https://codenclicksit.in/reviews",
    type: "website",
    siteName: "CodeNClicks IT Solutions",
    images: [
      {
        url: "https://codenclicksit.in/Codenclicks_white_bg_PNG.png",
        width: 1200,
        height: 630,
        alt: "CodeNClicks IT Solutions Client Reviews",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CodeNClicks Reviews",
    description: "Read genuine CodeNClicks client reviews and testimonials about our custom software development, web development, digital marketing and technology services.",
    images: ["https://codenclicksit.in/Codenclicks_white_bg_PNG.png"],
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
    ],
  };

  return (
    <div className="bg-white text-brand-graphite overflow-x-hidden">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />

      {/* Hero Section */}
      <section className="py-16 lg:py-24 border-b-2 border-brand-graphite bg-brand-mist">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-blue/10 text-brand-blue font-mono font-bold text-xs uppercase tracking-wider border border-brand-blue/20">
                <ShieldCheck className="w-3.5 h-3.5" /> Client Reviews & Ratings
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-brand-graphite leading-[1.05]">
                WHAT OUR <span className="text-brand-blue">CLIENTS SAY.</span>
              </h1>
              <p className="text-base md:text-xl text-brand-graphite/80 leading-relaxed font-sans max-w-xl">
                Hear from businesses that trusted CodeNClicks to build their custom websites, SaaS products, CRM systems, e-commerce channels, and digital marketing setups.
              </p>
            </div>

            <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[380px] aspect-[4/3] rounded-[32px] overflow-hidden border-4 border-brand-graphite shadow-flat bg-white">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
                  alt="CodeNClicks Customer Reviews - Successful Software Launches and Client Partnership Celebrations"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel Section */}
      <Section className="bg-white border-b-2 border-brand-graphite py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-14 space-y-4">
            <span className="text-brand-blue text-xl font-mono font-bold tracking-widest uppercase">
              AUTHENTIC CLIENT EXPERIENCES
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-brand-graphite leading-tight tracking-tight">
              ENGINEERED FOR <span className="text-brand-blue">REAL BUSINESS IMPACT.</span>
            </h2>
            <p className="text-base md:text-lg text-brand-graphite/80 font-sans leading-relaxed max-w-2xl mx-auto">
              Real feedback from business owners, managers, and creators who scale their operations with CodeNClicks custom engineering and growth strategies.
            </p>

            {/* Trust Badges */}
            <div className="pt-3 flex flex-wrap items-center justify-center gap-6 md:gap-8 text-xs font-mono text-brand-graphite/70">
              <div className="flex items-center gap-2 bg-brand-mist px-3.5 py-1.5 rounded-full border border-brand-graphite/10">
                <Star className="w-3.5 h-3.5 fill-brand-coral text-brand-coral" />
                <span><strong className="text-brand-graphite">4.6 / 5.0</strong> Client Satisfaction</span>
              </div>
              <div className="flex items-center gap-2 bg-brand-mist px-3.5 py-1.5 rounded-full border border-brand-graphite/10">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-blue" />
                <span><strong className="text-brand-graphite">100% Authentic</strong> Feedback</span>
              </div>
              <div className="flex items-center gap-2 bg-brand-mist px-3.5 py-1.5 rounded-full border border-brand-graphite/10">
                <Award className="w-3.5 h-3.5 text-brand-blue" />
                <span><strong className="text-brand-graphite">Proven</strong> Technical Delivery</span>
              </div>
            </div>
          </div>

          {/* Interactive Carousel */}
          <TestimonialsCarousel reviews={testimonials} />
        </div>
      </Section>

      {/* CTA Band */}
      <section className="bg-brand-blue text-white py-20 lg:py-24 text-center">
        <div className="container mx-auto px-4 lg:px-8 space-y-6">
          <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-none tracking-tight">
            JOIN OUR HAPPY CLIENTS
          </h2>
          <p className="text-white/80 max-w-xl mx-auto text-base leading-relaxed font-sans">
            Start your project today and experience clean code, typesafe engineering, and result-first delivery.
          </p>
          <div className="pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-brand-blue font-bold rounded-full hover:bg-brand-mist transition-colors text-sm shadow-md"
            >
              Get Started <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
