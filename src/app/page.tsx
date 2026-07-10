"use client";

import Link from "next/link";
import { useState } from "react";
import { 
  ArrowRight, Star, Check, ArrowUpRight, Zap, Shield, Clock, 
  TrendingUp, Rocket, Heart, Globe, Code2, MessageSquare, 
  Lightbulb, ThumbsUp, Cpu, Search, Users, Database, Sparkles, BookOpen
} from "lucide-react";
import Section from "@/components/shared/Section";
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

const quickServices = [
  {
    title: "Web Development",
    target: "For growing brands",
    problem: "Slow, generic WordPress templates that bounce prospects.",
    outcome: "A speed-tuned Next.js website that ranks and captures leads.",
    icon: Code2,
    badge: "Under 2s Load",
    href: "/services/web-development",
  },
  {
    title: "Custom Software",
    target: "For operational scale",
    problem: "Manual spreadsheets and off-the-shelf software bottlenecks.",
    outcome: "A secure database portal custom-fit to your exact workflows.",
    icon: Cpu,
    badge: "Typesafe API",
    href: "/services/custom-software-development",
  },
  {
    title: "SEO & Search Growth",
    target: "For organic pipeline",
    problem: "High pay-per-click ad budgets with zero compounding value.",
    outcome: "Top rankings on high-intent buyer search keywords.",
    icon: Search,
    badge: "Rank #1",
    href: "/services/seo",
  },
  {
    title: "CRM & Automation",
    target: "For sales efficiency",
    problem: "Manual data entry, delayed replies, and lost leads.",
    outcome: "Automatic WhatsApp notifications and synchronized lead flows.",
    icon: Users,
    badge: "WhatsApp Sync",
    href: "/services/crm-development",
  },
];

const differentiators = [
  {
    title: "SEO-Native Coding",
    desc: "We build sitemaps, semantic HTML layouts, structured schema, and speed benchmarks directly into the codebase during coding—not as a post-launch add-on.",
    icon: Search
  },
  {
    title: "Zero License Overhead",
    desc: "Escape recurring monthly seat costs. We build custom-fit systems so you own your source code asset and database forever, reducing SaaS burn rate.",
    icon: Shield
  },
  {
    title: "Engineering-First Standards",
    desc: "Our React and TypeScript applications are modularly structured, keeping your codebase secure, maintainable, and lightning-fast as your team grows.",
    icon: Code2
  },
  {
    title: "Founder-Led Scoping",
    desc: "You collaborate directly with our engineering co-founders. You get weekly functional demo links, direct Slack access, and transparent fixed milestones.",
    icon: Users
  }
];

const caseStudiesStories = [
  {
    title: "Anime Paradise Headless Storefront",
    category: "E-Commerce",
    challenge: "High cart abandonment due to slow, unoptimized loading on mobile viewport.",
    built: "A custom headless Shopify storefront using Next.js, Tailwind CSS, and optimized edge caching.",
    impact: "+240% mobile conversion rate and 1.1s average page load speed.",
    slug: "anime-paradise-ecommerce-platform"
  },
  {
    title: "Ivy Hotel Reservation Engine",
    category: "Hospitality",
    challenge: "Legacy portal with high commission cuts on third-party OTA booking platforms.",
    built: "A direct booking portal with instant payment gateway integration and live reservation sync.",
    impact: "Zero commission fees and 65% increase in direct direct-to-hotel reservations.",
    slug: "ritu-ivy-hotel-website"
  },
  {
    title: "Chitralekha Resort SEO Hub",
    category: "Hospitality Hub",
    challenge: "Minimal organic search presence for high-intent Uttarakhand luxury travel keywords.",
    built: "SEO-optimized resort site with fast search index pathways and local schema integration.",
    impact: "Ranked page-1 for top local queries, driving +180% room inquiries.",
    slug: "chitralekha-boutique-resort-dehradun-hotel-website"
  },
  {
    title: "Expand ERP WhatsApp Automator",
    category: "Custom CRM & Software",
    challenge: "Fragmented lead collection across ad channels causing delayed sales responses.",
    built: "A unified custom CRM panel equipped with automatic WhatsApp API trigger scripts.",
    impact: "Reduced lead distribution response time from 3 hours to 4 seconds.",
    slug: "expand-erp-crm"
  }
];

const workflowSteps = [
  { 
    icon: MessageSquare, 
    title: "1. Search & Layout Discovery", 
    desc: "We audit your search competitors, map out keyword goals, and design UX wireframes before writing any code." 
  },
  { 
    icon: Lightbulb, 
    title: "2. Transparent Milestone Planning", 
    desc: "You get a granular feature plan, strict timelines, and a fixed budget estimation so there are zero surprise costs." 
  },
  { 
    icon: Code2, 
    title: "3. Interactive Weekly Demos", 
    desc: "We build in weekly sprints. You receive interactive links to test and review the functional application live as we code." 
  },
  { 
    icon: Rocket, 
    title: "4. Deployment & Indexing Check", 
    desc: "We deploy on edge servers, configure search engine indexing, set up analytics, and support your team post-launch." 
  },
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Scroll trigger reveal animations
  const heroTextRef = useScrollFadeUp({ y: 35, duration: 0.9 });
  const heroVisualRef = useScrollFadeUp({ y: 45, duration: 1.0, delay: 0.1 });
  const quickServicesRef = useScrollStagger({ y: 25, stagger: 0.08 });
  const statsContainerRef = useScrollStagger({ y: 20, stagger: 0.08 });
  const diffContainerRef = useScrollStagger({ y: 30, stagger: 0.1 });
  const casesContainerRef = useScrollStagger({ y: 35, stagger: 0.12 });
  const processContainerRef = useScrollStagger({ y: 20, stagger: 0.12 });
  const testimonialsContainerRef = useScrollStagger({ y: 25, stagger: 0.08 });
  const industriesContainerRef = useScrollStagger({ y: 15, stagger: 0.06 });
  const faqContainerRef = useScrollStagger({ y: 20, stagger: 0.08 });

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

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[95vh] flex flex-col justify-center pt-8 lg:pt-16 pb-16 border-b border-brand-graphite bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            {/* Title / Asymmetric Copy */}
            <div ref={heroTextRef} className="lg:col-span-7 space-y-6">
              {/* <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-brand-mist text-brand-graphite font-mono text-xs font-bold uppercase tracking-wider rounded-full border border-brand-graphite/10">
                <span className="w-2 h-2 rounded-full bg-brand-lime animate-pulse" />
                Technical co-founders & engineers
              </span> */}
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-brand-graphite leading-[1.0] max-w-3xl">
                We engineer high converting custom softwares that drives <span className="bg-gradient-to-r from-brand-blue via-indigo-600 to-brand-coral bg-clip-text text-transparent">Business Outcomes.</span>
              </h1>

              <div className="max-w-2xl text-base md:text-lg text-brand-graphite/80 leading-relaxed font-sans pt-2">
                Stop fighting generic templates and expensive SaaS license overhead. We build custom solutions, zero-fee CRM portals, and automated database tools engineered from day one to acquire organic leads, scale operations, and capture compound ROI.
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4 pb-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-blue text-white font-bold rounded-xl hover:bg-brand-blue/90 hover:shadow-flat-blue transition-all duration-300 text-sm shadow-sm"
                >
                  Get Your Free Growth Roadmap <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/case-studies"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-brand-graphite text-brand-graphite font-bold rounded-xl hover:bg-brand-graphite hover:text-white transition-all duration-300 text-sm"
                >
                  Explore Our Work <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Grayscale inline logo strip */}
              {/* <div className="pt-6 border-t border-brand-graphite/10">
                <div className="text-[10px] font-mono text-brand-graphite/40 uppercase tracking-wider mb-3">Trusted by forward-thinking companies</div>
                <div className="flex flex-wrap items-center gap-6 md:gap-8 opacity-60">
                  {trustedBy.map((name) => (
                    <span key={name} className="text-xs font-heading font-bold text-brand-graphite grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-default">
                      {name}
                    </span>
                  ))}
                </div>
              </div> */}
            </div>

            {/* 3D Visual Canvas */}
            <div ref={heroVisualRef} className="lg:col-span-5 relative mt-12 lg:mt-0 flex justify-center lg:justify-end min-h-[380px] w-full">
              {/* Back Layer: Mock Dark IDE */}
              {/* <div className="w-full max-w-[380px] bg-brand-graphite text-white rounded-3xl border-4 border-brand-graphite shadow-flat overflow-hidden p-6 aspect-[4/3] flex flex-col justify-between absolute right-8 top-0 z-10 transition-transform duration-500 hover:scale-[1.02]">
                <div className="flex items-center gap-1.5 border-b border-white/10 pb-4 mb-4">
                  <div className="w-3 h-3 rounded-full bg-brand-coral" />
                  <div className="w-3 h-3 rounded-full bg-brand-lime" />
                  <div className="w-3 h-3 rounded-full bg-brand-blue" />
                  <span className="text-[10px] font-mono text-white/40 ml-2">core-optimizer.ts</span>
                </div>
                <div className="font-mono text-xs text-white/80 space-y-2 flex-grow select-none">
                  <div className="text-brand-blue">import <span className="text-white">&#123; growth &#125;</span> from <span className="text-brand-lime">"@codenclicks";</span></div>
                  <div className="text-white/30">// Optimizing load & search query</div>
                  <div className="text-brand-blue">export default function <span className="text-white">launch</span>() &#123;</div>
                  <div className="pl-4 text-brand-lime">const time = "Saved";</div>
                  <div className="pl-4 text-brand-lime">const revenue = "Increasing ^^";</div>
                  <div className="pl-4 text-brand-lime">const subscriptions = 0;</div>
                  <div className="pl-4 text-brand-lime">const competitors = "Behind";</div>
                  <div className="pl-4 text-white/60">export default growth(&#123; speed, licenseOverhead &#125;);</div>
                  <div>&#125;</div>
                </div>
              </div> */}
              <div className="w-full max-w-[380px] bg-brand-graphite text-white rounded-3xl border-4 border-brand-graphite shadow-flat overflow-hidden p-6 aspect-[4/3] flex flex-col justify-between absolute right-8 top-0 z-10 transition-transform duration-500 hover:scale-[1.02] font-mono text-[14px]">
  <div>
    <span className="text-brand-blue">import</span>{" "}
    <span className="text-white">{`{ growth }`}</span>{" "}
    <span className="text-brand-blue">from</span>{" "}
    <span className="text-brand-lime">"@codenclicks"</span>;
  </div>

  <div className="text-white/30">// Engineering business growth.</div>

  <div>
    <span className="text-brand-blue">const</span>{" "}
    <span className="text-white">time</span>{" "}
    <span>=</span>{" "}
    <span className="text-brand-lime">"saved"</span>;
  </div>

  <div>
    <span className="text-brand-blue">const</span>{" "}
    <span className="text-white">revenue</span>{" "}
    <span>=</span>{" "}
    <span className="text-brand-lime">"increasing"</span>;
  </div>

  <div>
    <span className="text-brand-blue">const</span>{" "}
    <span className="text-white">subscriptions</span>{" "}
    <span>=</span>{" "}
    <span className="text-brand-coral">0</span>;
  </div>

  <div>
    <span className="text-brand-blue">const</span>{" "}
    <span className="text-white">competitors</span>{" "}
    <span>=</span>{" "}
    <span className="text-brand-lime">"behind"</span>;
  </div>

  <div>
    <span className="text-brand-blue">export default</span>{" "}
    <span className="text-white">growth</span>
    <span>()</span>{" "}
    <span>{`{`}</span>
  </div>

  <div className="pl-4">
    <span className="text-white">customSoftware</span>
    <span>: </span>
    <span className="text-brand-blue">true</span>,
  </div>

  <div className="pl-4">
    <span className="text-white">website</span>
    <span>: </span>
    <span className="text-brand-lime">"high-performance"</span>,
  </div>

  <div className="pl-4">
    <span className="text-white">marketing</span>
    <span>: </span>
    <span className="text-brand-lime">"ROI-focused"</span>,
  </div>

  <div>{`}`}</div>
</div>

              {/* Middle Layer (Overlapping): Glassmorphic Growth Chart */}
              <div className="absolute left-4 bottom-[-13px] z-20 bg-white/95 backdrop-blur border-4 border-brand-graphite rounded-2xl p-5 shadow-flat max-w-[220px] transition-transform duration-1000 hover:scale-[1.05] animate-float">
                <div className="text-2xl font-heading font-extrabold text-brand-blue leading-none">+340%</div>
                <div className="text-[10px] font-mono font-medium uppercase tracking-wider mt-1 text-brand-graphite/60">Productivity growth</div>
                <div className="w-full h-12 mt-3 flex items-end gap-1.5">
                  <div className="w-3 bg-brand-blue/20 rounded-t h-4" />
                  <div className="w-3 bg-brand-blue/30 rounded-t h-6" />
                  <div className="w-3 bg-brand-blue/50 rounded-t h-8" />
                  <div className="w-3 bg-brand-blue/70 rounded-t h-10" />
                  <div className="w-3 bg-brand-blue rounded-t h-12" />
                </div>
              </div>

              {/* Floating Tech Badges */}
              <div className="absolute top-12 left-16 z-30 bg-brand-lime text-brand-graphite border-2 border-brand-graphite rounded-full px-4 py-1.5 shadow-flat font-mono font-bold text-[10px] uppercase tracking-wider animate-float" style={{ animationDelay: "0.5s" }}>
                Next.js
              </div>

              <div className="absolute top-30 left-16 z-30 bg-brand-lime text-brand-graphite border-2 border-brand-graphite rounded-full px-4 py-1.5 shadow-flat font-mono font-bold text-[10px] uppercase tracking-wider animate-float" style={{ animationDelay: "0.5s" }}>
                SpringBoot
              </div>
              <div className="absolute bottom-16 right-0 z-30 bg-brand-coral text-white border-2 border-brand-graphite rounded-full px-4 py-1.5 shadow-flat font-mono font-bold text-[10px] uppercase tracking-wider animate-float" style={{ animationDelay: "1.2s" }}>
                React.js
              </div>

              <div className="absolute bottom-36 right-0 z-30 bg-brand-coral text-white border-2 border-brand-graphite rounded-full px-4 py-1.5 shadow-flat font-mono font-bold text-[10px] uppercase tracking-wider animate-float" style={{ animationDelay: "1.2s" }}>
                Angular
              </div>
            </div>
          </div>

          {/* Quick Service Highlights */}
          <div ref={quickServicesRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-16 border-t-2 border-brand-graphite">
            {quickServices.map((card) => (
              <Link
                key={card.title}
                href={card.href}
                className="group p-6 bg-brand-mist border-2 border-brand-graphite rounded-2xl hover:bg-white hover:shadow-flat hover:border-brand-blue transition-all duration-300 flex flex-col justify-between min-h-[240px]"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-10 h-10 bg-white border-2 border-brand-graphite rounded-xl flex items-center justify-center group-hover:bg-brand-blue group-hover:text-white group-hover:border-brand-blue transition-all duration-300">
                      <card.icon className="w-5 h-5 text-brand-blue group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-[10px] font-mono font-bold bg-white text-brand-graphite border border-brand-graphite/20 px-2.5 py-1 rounded-full group-hover:bg-brand-lime group-hover:border-brand-graphite transition-all">
                      {card.badge}
                    </span>
                  </div>
                  <h3 className="text-lg font-heading font-bold text-brand-graphite mb-1.5 group-hover:text-brand-blue transition-colors">
                    {card.title}
                  </h3>
                  <div className="text-[10px] font-mono text-brand-blue uppercase tracking-wider mb-2 font-bold">{card.target}</div>
                  <div className="space-y-2 mb-4">
                    <div>
                      <span className="text-[9px] font-mono uppercase tracking-wider text-brand-coral/80 font-bold block">The Bottleneck</span>
                      <p className="text-[11px] text-brand-graphite/70 leading-normal">{card.problem}</p>
                    </div>
                    <div>
                      <span className="text-[9px] font-mono uppercase tracking-wider text-brand-blue/80 font-bold block">The Outcome</span>
                      <p className="text-[11px] text-brand-graphite/85 leading-normal font-medium">{card.outcome}</p>
                    </div>
                  </div>
                </div>
                <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-brand-blue">
                  Explore Service <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-200" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 2. LOGOS & EARLY TRUST STATS SECTION */}
      <section className="bg-white py-14 border-b-2 border-brand-graphite">
        <div className="container mx-auto px-4 lg:px-8">
          <div ref={statsContainerRef} className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="space-y-2 border-l-2 border-brand-graphite pl-6">
                <div className="text-4xl lg:text-5xl font-heading font-extrabold text-brand-graphite leading-none flex items-baseline gap-1">
                  {stat.value}
                </div>
                <div className="text-xs font-mono text-brand-graphite/60 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. WHY CODE_N_CLICKS (CORE DIFFERENTIATORS) */}
      <Section className="bg-brand-mist border-b-2 border-brand-graphite">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
              <span className="text-brand-blue text-sm font-mono font-bold tracking-wider uppercase">Our Differentiators</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-graphite leading-[1.0]">
                Why Hire CodeNClicks instead of another agency?
              </h2>
              <p className="text-brand-graphite/70 leading-relaxed font-sans max-w-md">
                We combine software engineering discipline with native search optimization so your digital platforms load fast, rank naturally, and scale without monthly subscription fees.
              </p>
              <div className="pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-brand-graphite text-white font-bold rounded-xl hover:bg-brand-blue transition-colors text-sm"
                >
                  Request a Free Website Audit <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            
            <div ref={diffContainerRef} className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {differentiators.map((diff) => (
                <div key={diff.title} className="p-8 bg-white border-2 border-brand-graphite rounded-[24px] hover:shadow-flat hover:border-brand-blue transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-brand-mist border-2 border-brand-graphite flex items-center justify-center mb-6">
                    <diff.icon className="w-6 h-6 text-brand-blue" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-brand-graphite mb-3">{diff.title}</h3>
                  <p className="text-xs text-brand-graphite/70 leading-relaxed">{diff.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* 4. CASE STUDIES (MINI STORIES) */}
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
              View All Case Studies <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div ref={casesContainerRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudiesStories.map((cs) => (
              <div key={cs.slug} className="group flex flex-col p-8 bg-white border-2 border-brand-graphite rounded-[32px] shadow-premium hover:shadow-flat transition-shadow duration-300 justify-between min-h-[440px]">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3.5 py-1 text-xs font-mono font-bold bg-brand-mist border border-brand-graphite rounded-full text-brand-graphite">{cs.category}</span>
                    <span className="text-[10px] font-mono text-brand-blue font-bold">★ Mini Success Story</span>
                  </div>
                  
                  <Link href={`/case-studies/${cs.slug}`}>
                    <h3 className="text-2xl font-heading font-bold text-brand-graphite group-hover:text-brand-blue transition-colors leading-tight">
                      {cs.title}
                    </h3>
                  </Link>

                  <div className="space-y-3 pt-2">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-brand-coral font-bold block">The Challenge</span>
                      <p className="text-xs text-brand-graphite/70 leading-relaxed mt-0.5">{cs.challenge}</p>
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-brand-blue font-bold block">What We Built</span>
                      <p className="text-xs text-brand-graphite/70 leading-relaxed mt-0.5">{cs.built}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-brand-graphite/10">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-brand-lime bg-brand-graphite px-3 py-1 rounded font-bold inline-block">Business Impact</span>
                  <div className="text-lg font-heading font-bold text-brand-graphite mt-2">
                    {cs.impact}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 5. HOW WE WORK (MILESTONE PROCESS) */}
      <Section className="bg-brand-mist border-b-2 border-brand-graphite">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-brand-blue text-sm font-mono font-bold tracking-wider uppercase">Our Process</span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-brand-graphite leading-[1.0]">
                A milestone blueprint built for fast, transparent execution.
              </h2>
              <p className="text-brand-graphite/70 leading-relaxed max-w-sm">
                We coordinate keyword research, page wireframes, and active weekly reviews to build platforms in record timelines.
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
              {workflowSteps.map((step) => (
                <div key={step.title} className="flex gap-6 p-6 bg-white border-2 border-brand-graphite rounded-[24px]">
                  <div className="w-10 h-10 rounded-full bg-brand-mist border-2 border-brand-graphite flex items-center justify-center text-brand-blue font-bold flex-shrink-0">
                    <step.icon className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-heading font-extrabold text-brand-graphite">{step.title}</h3>
                    <p className="text-xs text-brand-graphite/70 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* 6. CLIENT TESTIMONIALS WALL */}
      <Section className="bg-white border-b-2 border-brand-graphite">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-brand-blue text-sm font-mono font-bold tracking-wider uppercase">Client Reviews</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-brand-graphite leading-none">
              Loved by Growing Brands
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
                  <p className="text-xs text-brand-graphite/80 leading-relaxed font-sans italic">
                    "{t.content}"
                  </p>
                </div>
                
                <div className="flex items-center gap-3 mt-6 pt-6 border-t border-brand-graphite/10">
                  <div className="w-10 h-10 rounded-full bg-brand-blue text-white flex items-center justify-center font-heading font-bold text-xs">
                    {t.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <div className="text-xs font-heading font-bold text-brand-graphite">{t.name}</div>
                    <div className="text-[10px] font-mono text-brand-graphite/50">{t.role}, {t.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 7. INDUSTRIES SERVED */}
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

      {/* 8. FAQ SECTION */}
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
                      <p className="text-xs text-brand-graphite/80 leading-relaxed">{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* 9. HIGH-IMPACT VALUE CTA */}
      <section className="bg-brand-blue text-white py-24 text-center relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10 space-y-8">
          <h2 className="text-4xl md:text-7xl font-extrabold text-white leading-none tracking-tighter">
            READY TO OPTIMIZE YOUR CONVERSIONS?
          </h2>
          <p className="text-white/80 max-w-xl mx-auto text-lg leading-relaxed font-sans">
            Contact our co-founders to get a free project roadmap, technical audit, and delivery budget estimate within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-brand-blue font-bold rounded-xl hover:bg-brand-mist transition-all duration-300 text-sm shadow-sm"
            >
              Get Your Free Growth Strategy <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300 text-sm"
            >
              Explore Case Studies
            </Link>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 pt-6 text-sm text-white/70 font-mono">
            {["No upfront consultation costs", "Milestone estimations", "24-hour response"].map((item) => (
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
