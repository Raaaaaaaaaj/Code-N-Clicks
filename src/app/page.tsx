"use client";

import Link from "next/link";
import { useState } from "react";
import { 
  ArrowRight, Star, Check, ArrowUpRight, Zap, Shield, Clock, 
  TrendingUp, Rocket, Heart, Globe, Code2, MessageSquare, 
  Lightbulb, ThumbsUp 
} from "lucide-react";
import Section from "@/components/shared/Section";
import { services } from "@/data/services";
import { caseStudies } from "@/data/caseStudies";
import { testimonials } from "@/data/testimonials";
import { industries } from "@/data/industries";
import { organizationSchema, localBusinessSchema, websiteSchema, faqSchema } from "@/lib/seo";
import { useScrollFadeUp, useScrollStagger } from "@/hooks/useScrollAnimation";

const techLogos = [
  "React", "Next.js", "TypeScript", "Node.js", "Python", "PostgreSQL",
  "AWS", "Docker", "Figma", "Tailwind CSS", "GraphQL", "Redis"
];

const stats = [
  { value: "50+", label: "Projects Delivered", icon: Rocket },
  { value: "98%", label: "Client Satisfaction", icon: Heart },
  { value: "25+", label: "Global Clients", icon: Globe },
  { value: "2+", label: "Years of Delivery", icon: Zap },
];

const whyUs = [
  { icon: Zap, title: "Fast Execution", desc: "Launch-focused delivery for websites, MVPs, landing pages, and business tools." },
  { icon: Shield, title: "Production Quality", desc: "Clean code, SEO basics, security, QA, and scalable architecture from day one." },
  { icon: Clock, title: "Clear Timelines", desc: "Milestone-based delivery with weekly updates and practical scope control." },
  { icon: TrendingUp, title: "Lead-Focused", desc: "Every page is planned around search intent, trust, and qualified inquiries." },
];

const workflowSteps = [
  { icon: MessageSquare, title: "Discovery", desc: "We map your offers to buyer keywords, service pages, and competitor gaps before design starts." },
  { icon: Lightbulb, title: "Strategy", desc: "You get a clear page plan, feature scope, timeline, and pricing so every stakeholder knows what will be delivered." },
  { icon: Code2, title: "Design & Build", desc: "We build in practical milestones with responsive design, SEO setup, performance checks, and weekly demos." },
  { icon: Rocket, title: "Launch & Growth", desc: "We deploy, check indexing assets, configure analytics, and support improvements after launch." },
];

const faqs = [
  { q: "What services does CodeNClicks IT Solutions provide?", a: "We provide web development, website design, custom software, SaaS development, CRM development, ecommerce development, hotel management system development, UI/UX design, SEO, and digital marketing." },
  { q: "How long does a business website take?", a: "A focused landing page can be completed in a few working days, a standard business website usually takes 7 to 20 working days, and custom software or SaaS projects are scoped by milestone." },
  { q: "Do you build SEO-friendly websites?", a: "Yes. We plan metadata, headings, internal links, schema, sitemap inclusion, mobile performance, image alt text, and conversion sections during development, not after launch." },
  { q: "Do you work with startups and small businesses?", a: "Yes. We work with startups, hotels, ecommerce brands, agencies, local businesses, and growing companies that need practical technology and clear delivery." },
  { q: "Can you work with international clients?", a: "Yes. We are based in India and work remotely with clients in India, the United States, the United Kingdom, the UAE, and other global markets." },
  { q: "How do you handle pricing?", a: "We provide transparent pricing after understanding scope, features, content, timeline, integrations, and support needs. Website packages start from entry-level budgets and custom builds are estimated by milestone." },
];

const trustedBy = [
  "Turfello", "Anime Paradise", "Expand ERP", "Krold IT Solutions", "Exceed Softwares", "Funedge Solutions"
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Reusable scroll animation refs
  const heroTextRef = useScrollFadeUp({ y: 35, duration: 0.9 });
  const heroImageRef = useScrollFadeUp({ y: 45, duration: 1.0, delay: 0.1 });
  const statsContainerRef = useScrollStagger({ y: 25, stagger: 0.08 });
  const whyUsContainerRef = useScrollStagger({ y: 30, stagger: 0.1 });
  const servicesContainerRef = useScrollStagger({ y: 30, stagger: 0.1 });
  const processContainerRef = useScrollStagger({ y: 20, stagger: 0.12 });
  const industriesContainerRef = useScrollStagger({ y: 15, stagger: 0.06 });
  const caseStudiesContainerRef = useScrollStagger({ y: 30, stagger: 0.12 });
  const testimonialsContainerRef = useScrollStagger({ y: 25, stagger: 0.08 });
  const techStackContainerRef = useScrollStagger({ y: 15, stagger: 0.04 });
  const faqContainerRef = useScrollStagger({ y: 20, stagger: 0.08 });

  // SEO schema structured JSON-LD data
  const jsonLdData = {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema(),
      localBusinessSchema(),
      websiteSchema(),
      faqSchema(faqs)
    ]
  };

  return (
    <div className="overflow-hidden bg-white">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />

      {/* Hero Section - Magazine Layout */}
      <section className="relative min-h-[90vh] flex items-center pt-8 lg:pt-16 pb-20 border-b border-brand-graphite">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Title / Asymmetric Composition */}
            <div ref={heroTextRef} className="lg:col-span-8 space-y-6">
              <span className="inline-block px-3 py-1.5 bg-brand-lime text-brand-graphite font-mono text-xs font-semibold uppercase tracking-wider rounded">
                Web Development // SaaS // Growth
              </span>
              
              <h1 className="text-5xl md:text-7xl lg:text-9xl font-extrabold tracking-tighter text-brand-graphite leading-[0.95]">
                STOP COMPETING.<br />
                <span className="text-brand-blue">START LEADING.</span>
              </h1>

              <div className="max-w-2xl text-lg md:text-xl text-brand-graphite/80 leading-relaxed font-sans pt-4">
                CodeNClicks IT Solutions builds high-performance, SEO-friendly websites, custom software, CRM platforms, and e-commerce stores designed to rank first and convert visitors into pipeline.
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-blue text-white font-semibold rounded-full hover:bg-brand-blue/90 transition-colors text-sm"
                >
                  Start Your Project <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/case-studies"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-brand-graphite text-brand-graphite font-semibold rounded-full hover:bg-brand-graphite hover:text-white transition-colors text-sm"
                >
                  View Our Work <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Asymmetrical Overlapping Image Frame */}
            <div ref={heroImageRef} className="lg:col-span-4 relative mt-8 lg:mt-0 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[340px] aspect-[4/5] rounded-[32px] overflow-hidden border-4 border-brand-graphite shadow-flat">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=700&h=900&fit=crop"
                  alt="CodeNClicks Web Development Team - Expert Custom Software Engineers and Website Designers India"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
              
              {/* Offset interactive overlay block */}
              <div className="absolute -bottom-6 -left-6 md:left-6 bg-brand-coral text-white border-4 border-brand-graphite rounded-3xl p-5 shadow-flat max-w-[200px] animate-float">
                <div className="text-3xl font-heading font-extrabold leading-none">98%</div>
                <div className="text-xs font-mono font-medium uppercase tracking-wider mt-1 text-white/90">Success Rate across 50+ builds</div>
              </div>
            </div>
          </div>

          {/* Stats Bar Staggered */}
          <div ref={statsContainerRef} className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-24 pt-12 border-t-2 border-brand-graphite">
            {stats.map((stat) => (
              <div key={stat.label} className="space-y-2">
                <div className="text-4xl lg:text-5xl font-heading font-extrabold text-brand-graphite leading-none flex items-baseline gap-1">
                  {stat.value}
                </div>
                <div className="text-sm font-mono text-brand-graphite/60 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted By - Editorial Logo Bar */}
      <section className="bg-brand-mist py-8 border-b-2 border-brand-graphite">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-brand-graphite/50">
              Trusted by forward-thinking companies
            </span>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              {trustedBy.map((name) => (
                <span key={name} className="text-base font-heading font-bold text-brand-graphite/40 hover:text-brand-blue cursor-default transition-colors">
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Editorial Layout */}
      <Section className="bg-white border-b-2 border-brand-graphite">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-brand-blue text-sm font-mono font-bold tracking-wider uppercase">Why CodeNClicks</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-graphite leading-[1.0]">
                Websites and systems built for commercial leverage.
              </h2>
              <p className="text-brand-graphite/70 leading-relaxed font-sans max-w-md">
                We combine technical SEO, custom layouts, mobile responsive UX, and scalable codebase templates so your product can stand out and perform from day one.
              </p>
            </div>
            
            <div ref={whyUsContainerRef} className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {whyUs.map((item) => (
                <div key={item.title} className="p-8 bg-brand-mist border-2 border-brand-graphite rounded-[24px] hover:shadow-flat transition-shadow duration-300">
                  <div className="w-12 h-12 rounded-xl bg-white border-2 border-brand-graphite flex items-center justify-center mb-6">
                    <item.icon className="w-6 h-6 text-brand-blue" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-brand-graphite mb-2">{item.title}</h3>
                  <p className="text-sm text-brand-graphite/70 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Services Overview - Custom Asymmetric Columns */}
      <Section className="bg-white border-b-2 border-brand-graphite">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mb-20 space-y-4">
            <span className="text-brand-blue text-sm font-mono font-bold tracking-wider uppercase">Our Services</span>
            <h2 className="text-4xl md:text-6xl font-extrabold text-brand-graphite leading-none">
              Services built to scale client visibility and operations.
            </h2>
          </div>

          <div ref={servicesContainerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group relative block p-8 bg-white border-2 border-brand-graphite rounded-[32px] hover:bg-brand-mist transition-colors duration-300 shadow-premium"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-mist border-2 border-brand-graphite flex items-center justify-center mb-6 group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
                    <Icon className="w-5 h-5 text-brand-blue group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-brand-graphite mb-3 group-hover:text-brand-blue transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-brand-graphite/70 leading-relaxed mb-6">
                    {service.tagline}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-mono font-semibold text-brand-blue">
                    Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Process Section - Asymmetrical Row Layout */}
      <Section className="bg-brand-mist border-b-2 border-brand-graphite">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-brand-blue text-sm font-mono font-bold tracking-wider uppercase">How We Work</span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-brand-graphite leading-[1.0]">
                A blueprint built for fast, transparent execution.
              </h2>
              <p className="text-brand-graphite/70 leading-relaxed max-w-sm">
                We coordinate keyword goals, user mapping, custom interfaces, and code performance together.
              </p>
              
              <div className="relative rounded-[32px] overflow-hidden border-4 border-brand-graphite shadow-flat aspect-[4/3] max-w-md bg-white">
                <img
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=450&fit=crop"
                  alt="CodeNClicks Digital Consulting Process - Custom CRM Planning and SaaS MVP Design Session"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <div ref={processContainerRef} className="lg:col-span-7 space-y-6">
              {workflowSteps.map((step, i) => (
                <div key={step.title} className="flex gap-6 p-6 bg-white border-2 border-brand-graphite rounded-[24px]">
                  <div className="text-3xl font-heading font-extrabold text-brand-blue select-none">
                    0{i + 1}
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xl font-heading font-extrabold text-brand-graphite">{step.title}</h3>
                    <p className="text-sm text-brand-graphite/70 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Industries - Masonic Grid */}
      <Section className="bg-white border-b-2 border-brand-graphite">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-brand-blue text-sm font-mono font-bold tracking-wider uppercase">Industries</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-brand-graphite leading-none">
              Specialized Industry Playbooks
            </h2>
          </div>

          <div ref={industriesContainerRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {industries.map((ind) => {
              const Icon = ind.icon;
              return (
                <Link
                  key={ind.slug}
                  href={`/industries/${ind.slug}`}
                  className="p-6 bg-white border-2 border-brand-graphite rounded-[24px] hover:bg-brand-mist hover:shadow-flat transition-all duration-300 text-center group"
                >
                  <div className="w-14 h-14 rounded-xl bg-brand-mist border-2 border-brand-graphite mx-auto mb-4 flex items-center justify-center group-hover:bg-brand-blue group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6 text-brand-blue group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-base font-heading font-bold text-brand-graphite">{ind.title}</h3>
                </Link>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Case Studies - Horizontal Staggered Cards */}
      <Section className="bg-white border-b-2 border-brand-graphite">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl space-y-3">
              <span className="text-brand-blue text-sm font-mono font-bold tracking-wider uppercase">Case Studies</span>
              <h2 className="text-4xl md:text-6xl font-extrabold text-brand-graphite leading-none">
                Proof in Production
              </h2>
            </div>
            <Link href="/case-studies" className="inline-flex items-center gap-1.5 text-sm font-mono font-bold text-brand-blue hover:gap-2.5 transition-all">
              View All Studies <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div ref={caseStudiesContainerRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.slice(0, 4).map((cs) => (
              <div key={cs.slug} className="group flex flex-col p-8 bg-white border-2 border-brand-graphite rounded-[32px] shadow-premium hover:shadow-flat transition-shadow duration-300 justify-between min-h-[380px]">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3.5 py-1 text-xs font-mono font-semibold bg-brand-mist border border-brand-graphite rounded-full text-brand-graphite">{cs.category}</span>
                    {cs.status === "in-development" && (
                      <span className="px-3.5 py-1 text-xs font-mono font-semibold bg-brand-coral text-white rounded-full">In Development</span>
                    )}
                  </div>
                  
                  <Link href={`/case-studies/${cs.slug}`}>
                    <h3 className="text-3xl font-heading font-bold text-brand-graphite group-hover:text-brand-blue transition-colors leading-tight">
                      {cs.title}
                    </h3>
                  </Link>
                  <p className="text-sm text-brand-graphite/70 leading-relaxed line-clamp-3">
                    {cs.challenge}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-8">
                  {cs.results.slice(0, 2).map((r) => (
                    <div key={r.metric} className="bg-brand-mist border border-brand-graphite rounded-2xl p-4">
                      <div className="text-2xl lg:text-3xl font-heading font-extrabold text-brand-blue">{r.value}</div>
                      <div className="text-xs font-mono text-brand-graphite/50 mt-1 uppercase tracking-wider">{r.metric}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Impact Indicators Section */}
      <section className="bg-brand-graphite text-white py-20 border-b-2 border-brand-graphite">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-1 space-y-4">
              <h2 className="text-4xl font-heading font-extrabold tracking-tight">Our Performance in Figures</h2>
              <p className="text-white/60 text-sm leading-relaxed max-w-xs">
                We engineer scalable software interfaces that guarantee uptime, speed, and ranking stability.
              </p>
            </div>
            <div className="lg:col-span-2 grid grid-cols-2 gap-8">
              {[
                { value: "INR 10L+", label: "Client Revenue Generated" },
                { value: "1000+", label: "Platform Users Reached" },
                { value: "99.9%", label: "Average Server Uptime" },
                { value: "4.7/5", label: "Average Client Rating" },
              ].map((item) => (
                <div key={item.label} className="border-l-2 border-brand-lime pl-6 py-2">
                  <div className="text-3xl lg:text-5xl font-heading font-extrabold text-brand-lime leading-none">{item.value}</div>
                  <div className="text-xs font-mono text-white/50 uppercase tracking-wider mt-2">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Asymmetrical Review Wall */}
      <Section className="bg-white border-b-2 border-brand-graphite">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-brand-blue text-sm font-mono font-bold tracking-wider uppercase">Reviews</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-brand-graphite leading-none">
              Loved by Clients
            </h2>
          </div>

          <div ref={testimonialsContainerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.slice(0, 6).map((t) => (
              <div
                key={t.name}
                className="p-8 bg-brand-mist border-2 border-brand-graphite rounded-[24px] shadow-premium flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex gap-0.5">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-brand-coral text-brand-coral" />
                    ))}
                  </div>
                  <p className="text-sm text-brand-graphite/80 leading-relaxed font-sans italic">
                    "{t.content}"
                  </p>
                </div>
                
                <div className="flex items-center gap-3 mt-6 pt-6 border-t border-brand-graphite/10">
                  <div className="w-10 h-10 rounded-full bg-brand-blue text-white flex items-center justify-center font-heading font-bold text-xs">
                    {t.name.split(" ").map(n => n[0]).join("")}
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

      {/* Technologies Stack */}
      <Section className="bg-brand-mist border-b-2 border-brand-graphite">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-brand-blue text-sm font-mono font-bold tracking-wider uppercase">Tech Stack</span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-brand-graphite leading-[1.0]">
                Built on production-ready technology.
              </h2>
              <p className="text-brand-graphite/70 leading-relaxed max-w-sm">
                We write typesafe code, pre-render templates, clean up unused scripts, and keep performance budgets low.
              </p>
              <Link href="/technologies" className="inline-flex items-center gap-2 text-sm font-mono font-bold text-brand-blue">
                Explore Full Tech Stack <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            
            <div ref={techStackContainerRef} className="lg:col-span-7 flex flex-wrap gap-3">
              {techLogos.map((tech) => (
                <span key={tech} className="px-6 py-3 bg-white border-2 border-brand-graphite rounded-full text-sm font-mono text-brand-graphite shadow-premium font-semibold">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section className="bg-white border-b-2 border-brand-graphite">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-brand-blue text-sm font-mono font-bold tracking-wider uppercase">FAQ</span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-brand-graphite leading-[1.0]">
                Frequently asked queries.
              </h2>
              <p className="text-brand-graphite/70 leading-relaxed max-w-xs">
                Clear scope definitions and timelines for founders, hospitality hubs, and sales teams.
              </p>
            </div>
            
            <div ref={faqContainerRef} className="lg:col-span-7 space-y-4">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="border-2 border-brand-graphite rounded-[20px] overflow-hidden bg-brand-mist"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <span className="text-base font-heading font-bold text-brand-graphite pr-4">{faq.q}</span>
                    <span className="text-xl font-heading font-bold text-brand-blue select-none">
                      {openFaq === i ? "—" : "+"}
                    </span>
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-6 pt-1 border-t border-brand-graphite/10">
                      <p className="text-sm text-brand-graphite/80 leading-relaxed">{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Call to Action - Massive Blue Band */}
      <section className="bg-brand-blue text-white py-24 text-center relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10 space-y-8">
          <h2 className="text-4xl md:text-7xl font-extrabold text-white leading-none tracking-tighter">
            READY TO STAND OUT ONLINE?
          </h2>
          <p className="text-white/80 max-w-xl mx-auto text-lg leading-relaxed font-sans">
            Contact our engineering team to get a free project roadmap, technical audit, and delivery budget estimate within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-brand-blue font-bold rounded-full hover:bg-brand-mist transition-colors text-sm"
            >
              Get Free Consultation <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-colors text-sm"
            >
              View Pricing
            </Link>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 pt-6 text-sm text-white/70 font-mono">
            {["No upfront costs", "Free project estimate", "24-hour response"].map((item) => (
              <span key={item} className="flex items-center gap-2">
                <Check className="w-4 h-4 text-brand-lime" /> {item}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
