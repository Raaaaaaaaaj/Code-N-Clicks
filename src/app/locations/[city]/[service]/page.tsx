import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, Shield, Sparkles, Cpu, AlertTriangle, Check } from "lucide-react";
import Section from "@/components/shared/Section";
import ContactForm from "@/components/shared/ContactForm";
import localPages from "@/data/generatedLocalPages.json";
import { organizationSchema, websiteSchema, breadcrumbSchema, absoluteUrl } from "@/lib/seo";
import { Metadata } from "next";

interface Props {
  params: {
    city: string;
    service: string;
  };
}

export function generateStaticParams() {
  return localPages.map((page) => ({
    city: page.city.slug,
    service: page.service.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = `${params.city}-${params.service}`;
  const page = localPages.find((p) => p.slug === slug);
  if (!page) return {};

  const canonical = `/locations/${page.city.slug}/${page.service.slug}`;

  return {
    title: page.seoTitle,
    description: page.metaDescription,
    alternates: {
      canonical: absoluteUrl(canonical),
    },
    openGraph: {
      title: page.seoTitle,
      description: page.metaDescription,
      url: absoluteUrl(canonical),
      type: "website",
      siteName: "CodeNClicks IT Solutions",
      images: [
        {
          url: "https://codenclicksit.in/Codenclicks_white_bg_PNG.png",
          width: 1200,
          height: 630,
          alt: page.seoTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: page.seoTitle,
      description: page.metaDescription,
      images: ["https://codenclicksit.in/Codenclicks_white_bg_PNG.png"],
    },
  };
}

// Visual theme style resolver
function getCardStyleClass(variant: string): string {
  switch (variant) {
    case "glassmorphism":
      return "bg-white/80 backdrop-blur-md border border-white/20 rounded-2xl shadow-premium p-6";
    case "minimal":
      return "bg-transparent border-0 p-4 hover:translate-x-1 transition-transform";
    case "bordered":
      return "bg-white border border-brand-graphite rounded-xl p-6 hover:shadow-flat transition-shadow duration-300";
    case "gradient":
      return "bg-gradient-to-br from-brand-mist to-white border border-brand-graphite rounded-2xl p-6 shadow-premium";
    case "neobrutalist":
    default:
      return "bg-white border-2 border-brand-graphite rounded-2xl p-6 shadow-premium hover:shadow-flat hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300";
  }
}

// 1. Render Hero Visual Components (8 Variants)
function renderHeroVisual(type: string, data: any) {
  const cleanType = type.split("-").slice(0, -1).join("-") || type;
  const stats = data?.stats || [
    { label: "Uptime SLA", value: "99.9%" },
    { label: "Licensing Costs", value: "0" }
  ];

  switch (cleanType) {
    case "hero-kpi-cards":
      return (
        <div className="grid grid-cols-1 gap-4 w-full max-w-sm">
          {stats.map((s: any, idx: number) => (
            <div key={idx} className="bg-white border-2 border-brand-graphite rounded-2xl p-4 shadow-flat">
              <div className="text-2xl font-black text-brand-blue">{s.value}</div>
              <div className="text-xs font-mono text-brand-graphite/60 mt-1 uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </div>
      );
    case "hero-trust-badges":
      return (
        <div className="bg-white border-2 border-brand-graphite rounded-3xl p-6 shadow-premium w-full max-w-sm space-y-4">
          <div className="text-xs font-mono font-bold text-brand-blue uppercase tracking-wider">SLA & Support Guarantee</div>
          {stats.map((s: any, idx: number) => (
            <div key={idx} className="flex items-center gap-3 p-3 bg-brand-mist border border-brand-graphite rounded-xl">
              <Shield className="w-5 h-5 text-brand-blue" />
              <div>
                <div className="text-sm font-bold text-brand-graphite">{s.label}</div>
                <div className="text-xs text-brand-graphite/60">{s.value}</div>
              </div>
            </div>
          ))}
        </div>
      );
    case "hero-tech-badges":
      const techs = data?.technologies || ["TypeScript", "Next.js", "PostgreSQL"];
      return (
        <div className="bg-white border-2 border-brand-graphite rounded-3xl p-6 shadow-premium w-full max-w-sm">
          <div className="text-xs font-mono font-bold text-brand-blue uppercase tracking-wider mb-4">Core Technology Stack</div>
          <div className="grid grid-cols-2 gap-3">
            {techs.slice(0, 4).map((t: string, idx: number) => (
              <div key={idx} className="p-3 bg-brand-mist border border-brand-graphite rounded-xl font-mono text-xs font-bold text-brand-graphite text-center">
                {t}
              </div>
            ))}
          </div>
        </div>
      );
    case "hero-timeline-preview":
      return (
        <div className="bg-white border-2 border-brand-graphite rounded-3xl p-6 shadow-premium w-full max-w-sm space-y-4">
          <div className="text-xs font-mono font-bold text-brand-blue uppercase tracking-wider">Implementation Path</div>
          <div className="space-y-3">
            <div className="flex gap-3">
              <div className="w-6 h-6 rounded-full bg-brand-blue text-white text-xs font-mono font-bold flex items-center justify-center">1</div>
              <div className="text-xs font-bold text-brand-graphite">Scoping (Days 1-5)</div>
            </div>
            <div className="flex gap-3">
              <div className="w-6 h-6 rounded-full bg-brand-blue text-white text-xs font-mono font-bold flex items-center justify-center">2</div>
              <div className="text-xs font-bold text-brand-graphite">Sprint (Days 6-18)</div>
            </div>
            <div className="flex gap-3">
              <div className="w-6 h-6 rounded-full bg-brand-blue text-white text-xs font-mono font-bold flex items-center justify-center">3</div>
              <div className="text-xs font-bold text-brand-graphite">Release (Days 19-21)</div>
            </div>
          </div>
        </div>
      );
    case "hero-case-study":
      return (
        <div className="bg-white border-2 border-brand-graphite rounded-3xl p-6 shadow-premium w-full max-w-sm space-y-3">
          <div className="text-xs font-mono font-bold text-brand-blue uppercase tracking-wider">Success Metrics</div>
          <div className="text-xl font-black text-brand-graphite">2.5x Performance Jump</div>
          <p className="text-xs text-brand-graphite/70 leading-relaxed font-sans">
            Client systems migrated to serverless cloud edge configurations, ensuring zero database latencies.
          </p>
        </div>
      );
    case "hero-split-illustration":
    case "hero-process-preview":
    case "hero-comparison-snapshot":
    default:
      return (
        <div className="relative w-full max-w-[360px] aspect-[3/4] rounded-[32px] overflow-hidden border-4 border-brand-graphite shadow-flat bg-white p-8 flex flex-col justify-between">
          <div className="w-16 h-16 rounded-2xl bg-brand-mist border-2 border-brand-graphite flex items-center justify-center">
            <Cpu className="w-8 h-8 text-brand-blue" />
          </div>
          <div className="space-y-4">
            <div className="text-xs font-mono text-brand-graphite/50 uppercase tracking-widest">Architect Security</div>
            <h3 className="text-xl font-heading font-extrabold text-brand-graphite leading-tight">
              Bespoke Enterprise Systems
            </h3>
            <p className="text-xs text-brand-graphite/70 font-sans leading-relaxed">
              No template layouts or shared software files. 100% custom codebase ownership.
            </p>
          </div>
        </div>
      );
  }
}

// 2. Render Intermediate Visual Components (40+ Variants)
function renderVisualComponent(type: string, serviceSlug: string, styleVariant: string, data: any) {
  const cardClass = getCardStyleClass(styleVariant);
  const cleanType = type.replace(`-${serviceSlug}`, "");

  switch (cleanType) {
    case "district-hover-cards":
    case "icon-grid":
      const hubs = data?.hubs || ["Commercial district"];
      const landmark = data?.landmark || "Landmark Hub";
      const nearbyAreas = data?.nearbyAreas || ["Metro area"];
      return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          <div className={cardClass}>
            <h4 className="font-heading font-bold text-base mb-2">Target Commercial Hubs</h4>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {hubs.slice(0, 4).map((h: string, i: number) => (
                <span key={i} className="px-2 py-1 bg-brand-mist border border-brand-graphite rounded-full text-xs font-mono">
                  {h}
                </span>
              ))}
            </div>
          </div>
          <div className={cardClass}>
            <h4 className="font-heading font-bold text-base mb-2">Regional Landmarks</h4>
            <p className="text-xs text-brand-graphite/70 leading-relaxed font-sans">{landmark}</p>
          </div>
          <div className={cardClass}>
            <h4 className="font-heading font-bold text-base mb-2">Nearby Areas Served</h4>
            <p className="text-xs text-brand-graphite/70 leading-relaxed font-sans">{nearbyAreas.slice(0, 3).join(", ")}</p>
          </div>
        </div>
      );

    case "use-case-cards":
    case "industry-cards":
    case "benefit-cards":
    case "hover-cards":
    case "feature-cards":
    case "expandable-cards":
    case "warning-card":
    case "do-dont-cards":
    case "security-checklist":
    case "capability-matrix":
      const items = data?.items || data?.challenges || data?.benefits || data?.features || data?.details || data?.mistakes || [];
      return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          {items.map((item: any, i: number) => {
            const title = typeof item === "string" ? item : item?.title || item?.objection || "Technical Module";
            const desc = typeof item === "string" ? "" : item?.desc || item?.answer || "";
            return (
              <div key={i} className={cardClass}>
                <h4 className="font-heading font-bold text-base mb-2">{title}</h4>
                {desc && <p className="text-xs text-brand-graphite/70 leading-relaxed font-sans">{desc}</p>}
              </div>
            );
          })}
        </div>
      );

    case "tech-stack-grid":
    case "tech-matrix-table":
      const categories = data?.categories || data?.items || [];
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          {categories.map((c: any, i: number) => (
            <div key={i} className={cardClass}>
              <h4 className="font-heading font-bold text-base mb-3 border-b border-brand-graphite/20 pb-1.5 uppercase font-mono text-brand-blue text-xs tracking-wider">
                {c.name || "System Stack"}
              </h4>
              <div className="flex flex-wrap gap-2">
                {(c.items || []).map((item: string, idx: number) => (
                  <span key={idx} className="px-3 py-1.5 bg-brand-mist border border-brand-graphite rounded-xl text-xs font-mono font-bold text-brand-graphite">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      );

    case "kpi-dashboard":
    case "roi-calculator":
    case "metrics-grid":
      const stats = data?.statistics || [];
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          {stats.map((s: any, i: number) => (
            <div key={i} className={cardClass + " flex flex-col justify-between"}>
              <div>
                <div className="text-xs font-mono text-brand-blue font-bold uppercase tracking-wider">{s.metric}</div>
                <div className="text-3xl font-black text-brand-graphite mt-2">{s.value}</div>
              </div>
              <p className="text-xs text-brand-graphite/60 mt-2 font-sans">{s.label}</p>
            </div>
          ))}
          
          <div className="col-span-1 md:col-span-2 bg-brand-mist border-2 border-brand-graphite rounded-2xl p-6 flex flex-col md:flex-row justify-between items-center gap-6 shadow-premium">
            <div className="space-y-1 text-center md:text-left">
              <h4 className="font-heading font-bold text-base text-brand-graphite">Estimate Your System Payback</h4>
              <p className="text-xs text-brand-graphite/70 font-sans">
                Calculate licensing savings and performance growth for your target services.
              </p>
            </div>
            <Link
              href="#quote"
              className="px-5 py-2.5 bg-brand-blue border-2 border-brand-graphite rounded-full text-xs font-mono font-bold text-white shadow-flat hover:translate-y-0.5 transition-transform shrink-0"
            >
              Run Cost Calculator
            </Link>
          </div>
        </div>
      );

    case "pricing-table":
    case "cost-breakdown-table":
      const factors = data?.factors || data?.items || [];
      return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          {factors.map((f: any, i: number) => {
            const text = typeof f === "string" ? f : f?.title || "Cost Parameter";
            return (
              <div key={i} className={cardClass}>
                <div className="font-mono text-xs text-brand-blue font-bold mb-2">PARAMETER 0{i + 1}</div>
                <p className="text-xs text-brand-graphite/70 leading-relaxed font-sans">{text}</p>
              </div>
            );
          })}
        </div>
      );

    case "stepper-steps":
    case "process-timeline":
      const phases = data?.phases || data?.steps || data?.items || [];
      return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          {phases.map((p: any, i: number) => (
            <div key={i} className={cardClass}>
              <div className="font-mono text-xs text-brand-blue font-bold mb-2">PHASE 0{i + 1}</div>
              <h4 className="font-heading font-bold text-sm text-brand-graphite mb-1">{p.phase || p.title || "Step"}</h4>
              <div className="text-xs font-bold text-brand-graphite/50 font-mono mt-2">Duration: {p.duration || "Days 1-5"}</div>
            </div>
          ))}
        </div>
      );

    case "comparison-table":
      const rows = data?.comparison || [];
      return (
        <div className="border-2 border-brand-graphite rounded-2xl overflow-hidden mt-6 shadow-flat bg-white w-full">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-brand-mist border-b-2 border-brand-graphite font-mono text-brand-graphite font-bold">
                <th className="p-4">Operational Category</th>
                <th className="p-4">Legacy / SaaS Software</th>
                <th className="p-4">Next-Gen Bespoke Code</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((item: any, i: number) => (
                <tr key={i} className="border-b border-brand-graphite last:border-none hover:bg-brand-mist/20 transition-colors">
                  <td className="p-4 font-bold border-r border-brand-graphite text-brand-graphite">{item.category}</td>
                  <td className="p-4 border-r border-brand-graphite text-brand-graphite/70">{item.legacy}</td>
                  <td className="p-4 text-brand-graphite font-bold">{item.modern}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    case "workflow-diagram":
    case "automation-flow":
      const flowSteps = data?.steps || data?.items || [];
      return (
        <div className="space-y-4 pt-4">
          {data?.workflow && (
            <div className="bg-brand-mist border border-brand-graphite rounded-xl p-4 font-mono text-xs font-bold text-brand-blue flex justify-center text-center">
              Workflow Path: {data.workflow}
            </div>
          )}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {flowSteps.map((s: any, i: number) => (
              <div key={i} className={cardClass + " flex flex-col justify-between"}>
                <div>
                  <div className="w-6 h-6 rounded-lg bg-brand-blue text-white text-xs font-mono font-bold flex items-center justify-center">
                    0{i + 1}
                  </div>
                  <h4 className="font-heading font-bold text-sm text-brand-graphite mt-3 mb-1">{s.title || "Step"}</h4>
                </div>
                <p className="text-xs text-brand-graphite/60 font-sans leading-relaxed">{s.desc || ""}</p>
              </div>
            ))}
          </div>
        </div>
      );

    case "business-checklist":
      const deliverables = data?.deliverables || data?.items || [];
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
          {deliverables.map((item: any, i: number) => {
            const label = typeof item === "string" ? item : item?.title || "Deliverable";
            return (
              <div key={i} className="flex gap-3 p-4 bg-brand-mist border-2 border-brand-graphite rounded-2xl shadow-flat">
                <Check className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                <span className="text-xs text-brand-graphite/80 font-sans leading-tight font-bold">{label}</span>
              </div>
            );
          })}
        </div>
      );

    case "success-metrics-dashboard":
    case "related-services-carousel":
      const trends = data?.trends || data?.items || [];
      return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-4">
          {trends.map((item: any, i: number) => {
            const term = typeof item === "string" ? item : item?.title || "Trend";
            return (
              <div key={i} className={cardClass + " text-center"}>
                <Sparkles className="w-5 h-5 text-brand-blue mx-auto mb-2" />
                <span className="text-xs font-mono font-bold text-brand-graphite uppercase tracking-wider">{term}</span>
              </div>
            );
          })}
        </div>
      );

    case "faq-accordion":
    case "two-column-faq":
    default:
      const faqs = data?.faqs || [];
      return (
        <div className="grid grid-cols-1 gap-4 pt-4">
          {faqs.map((faq: any, i: number) => (
            <div key={i} className="p-6 bg-white border-2 border-brand-graphite rounded-3xl shadow-premium">
              <h3 className="font-heading font-extrabold text-brand-graphite text-base flex gap-2">
                <span className="text-brand-blue font-mono font-bold">Q:</span>
                {faq.q}
              </h3>
              <p className="text-xs text-brand-graphite/70 font-sans leading-relaxed mt-2 pl-6">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      );
  }
}

// 3. Render Closing CTA Form Layouts (8 Variants)
function renderCtaForm(type: string, serviceSlug: string, data: any) {
  const cleanType = type.replace(`-${serviceSlug}`, "");
  const objections = data?.objections || [];

  return (
    <div className="bg-white border-2 border-brand-graphite rounded-[32px] p-8 shadow-premium space-y-6">
      <div className="border-b border-brand-graphite/20 pb-4">
        <h3 className="text-xl font-heading font-extrabold text-brand-graphite">
          {cleanType === "cta-roi-calculator" ? "ROI Analysis Scoping" :
           cleanType === "cta-cost-estimator" ? "Estimated Sprint Quoting" :
           cleanType === "cta-download-guide" ? "Developer Handover Registration" :
           cleanType === "cta-project-estimator" ? "Timeline Estimations Proposal" :
           "Request Scoping Documentation"}
        </h3>
        <p className="text-xs text-brand-graphite/60 mt-1 font-sans">
          Provide your system parameters: our technical architects will compile custom wireframes within 24 hours.
        </p>
      </div>
      
      <ContactForm />
      
      {objections.length > 0 && (
        <div className="pt-4 border-t border-brand-graphite/20 space-y-3">
          <div className="text-xs font-mono font-bold text-brand-graphite/50 uppercase tracking-wider">Addressing common concerns</div>
          {objections.slice(0, 2).map((o: any, idx: number) => (
            <div key={idx} className="p-3 bg-brand-mist border border-brand-graphite rounded-xl">
              <div className="text-xs font-bold text-brand-graphite">{o.q}</div>
              <div className="text-[11px] text-brand-graphite/70 mt-1 leading-relaxed font-sans">{o.a}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function CityServicePage({ params }: Props) {
  const slug = `${params.city}-${params.service}`;
  const page = localPages.find((p) => p.slug === slug);
  if (!page) {
    notFound();
  }

  const { city, service, sections, relatedLinks } = page;

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
          ...city.nearbyAreas.map((area: string) => ({ "@type": "Place", name: area })),
        ],
      },
      {
        "@type": "Service",
        "@id": `${absoluteUrl(`/locations/${city.slug}/${service.slug}`)}#service`,
        name: `${service.title} in ${city.name}`,
        description: page.metaDescription,
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
        url: absoluteUrl(`/locations/${city.slug}/${service.slug}`),
        areaServed: [
          { "@type": "Place", name: city.name },
          ...city.nearbyAreas.map((area: string) => ({ "@type": "Place", name: area })),
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

      {sections.map((section: any, idx: number) => {
        const isHero = section.sectionType === "hero";
        const isCta = section.sectionType === "cta";

        if (isHero) {
          return (
            <section key={idx} className="py-12 lg:py-16 border-b-2 border-brand-graphite bg-brand-mist">
              <div className="container mx-auto px-4 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  <div className="lg:col-span-7 space-y-6">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-brand-blue shrink-0" />
                      <span className="text-brand-blue text-sm font-mono font-bold tracking-wider uppercase">
                        {city.name} // {service.eyebrow}
                      </span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none text-brand-graphite">
                      {page.h1}
                    </h1>
                    <div className="text-base md:text-lg text-brand-graphite/80 leading-relaxed font-sans max-w-xl space-y-3">
                      {section.body.split("\n\n").map((p: string, pIdx: number) => (
                        <p key={pIdx}>{p}</p>
                      ))}
                    </div>
                    
                    {/* Hero Primary / Secondary CTAs (Conversion Touchpoint 1) */}
                    <div className="pt-2 flex flex-wrap gap-4">
                      <Link
                        href="#quote"
                        className="px-6 py-3 bg-brand-blue border-2 border-brand-graphite rounded-full text-sm font-mono font-bold text-white shadow-premium hover:shadow-flat transition-all duration-300"
                      >
                        {section.data?.primaryCta || "Request Spec"}
                      </Link>
                      <Link
                        href="#roadmap"
                        className="px-6 py-3 bg-white border-2 border-brand-graphite rounded-full text-sm font-mono font-bold text-brand-graphite shadow-premium hover:shadow-flat hover:text-brand-blue hover:border-brand-blue transition-all duration-300"
                      >
                        {section.data?.secondaryCta || "View Roadmap"}
                      </Link>
                    </div>

                    {/* Render Hero Technologies badges inside the Hero */}
                    {section.data?.technologies && (
                      <div className="pt-2">
                        <div className="text-xs font-mono font-bold uppercase tracking-wider text-brand-graphite/40 mb-2">Technology Stack</div>
                        <div className="flex flex-wrap gap-2">
                          {section.data.technologies.map((t: string, tIdx: number) => (
                            <span key={tIdx} className="px-3 py-1 bg-white border border-brand-graphite rounded-full text-xs font-mono font-bold text-brand-graphite">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
                    {/* Render Hero visual variant */}
                    {renderHeroVisual(section.visualType, section.data)}
                  </div>
                </div>
              </div>
            </section>
          );
        }

        if (isCta) {
          return (
            <Section key={idx} id="quote" className="bg-white">
              <div className="container mx-auto px-4 lg:px-8">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                  <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
                    <span className="text-brand-blue text-sm font-mono font-bold tracking-wider uppercase">Strategic Handoff</span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-brand-graphite leading-none">
                      {section.heading}
                    </h2>
                    <div className="text-sm font-sans text-brand-graphite/70 leading-relaxed space-y-4">
                      {section.body.split("\n\n").map((p: string, pIdx: number) => (
                        <p key={pIdx}>{p}</p>
                      ))}
                    </div>
                  </div>
                  
                  <div className="lg:col-span-7">
                    {/* Render specific CTA Form variant (Conversion Touchpoint 3) */}
                    {renderCtaForm(section.visualType, service.slug, section.data)}
                  </div>
                </div>
              </div>
            </Section>
          );
        }

        const isEven = idx % 2 === 0;

        return (
          <Section key={idx} id={section.sectionType === "timeline" ? "roadmap" : undefined} className={isEven ? "bg-white border-b-2 border-brand-graphite" : "bg-brand-mist border-b-2 border-brand-graphite"}>
            <div className="container mx-auto px-4 lg:px-8">
              <div className="max-w-5xl mx-auto space-y-6">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-brand-blue shrink-0" />
                  <span className="text-brand-blue text-sm font-mono font-bold tracking-wider uppercase">
                    {section.sectionType.replace("-", " ")}
                  </span>
                </div>
                <h2 className="text-3xl font-heading font-extrabold text-brand-graphite leading-tight">
                  {section.heading}
                </h2>
                <div className="text-sm font-sans text-brand-graphite/70 leading-relaxed space-y-4 max-w-3xl">
                  {section.body.split("\n\n").map((p: string, pIdx: number) => (
                    <p key={pIdx}>{p}</p>
                  ))}
                </div>

                {/* Render visual elements dynamically based on visualType and variant styling */}
                <div className="pt-2">
                  {renderVisualComponent(section.visualType, service.slug, section.variant, section.data)}
                </div>
              </div>
            </div>
          </Section>
        );
      })}

      {/* Internal Inbound Links Section */}
      <Section className="bg-brand-mist border-t-2 border-brand-graphite">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto space-y-6">
            <h3 className="text-xl font-heading font-extrabold text-brand-graphite uppercase font-mono tracking-wider">Related Coverage & Services</h3>
            <div className="flex flex-wrap gap-4">
              {relatedLinks.map((link: any, i: number) => (
                <Link
                  key={i}
                  href={link.href}
                  className="px-5 py-2.5 bg-white border-2 border-brand-graphite rounded-full text-xs font-mono font-bold text-brand-graphite shadow-premium hover:shadow-flat hover:text-brand-blue hover:border-brand-blue transition-all"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
