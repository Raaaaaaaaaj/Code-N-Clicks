import Link from "next/link";
import { ArrowRight, CheckCircle2, Building2 } from "lucide-react";
import Section from "@/components/shared/Section";
import { caseStudies } from "@/data/caseStudies";

export default function IndustryCaseStudiesSection() {
  // Select genuine case studies across key industries
  const featuredCaseStudies = caseStudies.filter((cs) =>
    ["anime-paradise-ecommerce-platform", "ritu-ivy-hotel-website", "abhijit-realtors-real-estate-software", "pranabananda-textiles-crm-system"].includes(cs.slug)
  );

  return (
    <Section className="bg-white border-b-2 border-brand-graphite">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-4">
            <span className="text-brand-blue text-sm font-mono font-bold tracking-wider uppercase">
              PROVEN RESULTS
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-brand-graphite tracking-tight leading-tight">
              Industry Projects & Solutions We've Built
            </h2>
            <p className="text-base md:text-lg text-brand-graphite/75 leading-relaxed font-sans">
              From operational software to customer-facing digital platforms, explore how we apply technology to real business requirements.
            </p>
          </div>
          <div>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-brand-graphite text-white font-mono text-sm font-bold shadow-flat hover:bg-brand-blue transition-colors"
            >
              View All Case Studies <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Case Study Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredCaseStudies.map((cs) => (
            <div
              key={cs.slug}
              className="bg-brand-mist/50 border-2 border-brand-graphite rounded-[32px] p-8 shadow-premium hover:shadow-flat transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="px-3.5 py-1 text-xs font-mono font-bold bg-brand-blue text-white rounded-full">
                    {cs.industry}
                  </span>
                  <span className="text-xs font-mono font-semibold text-brand-graphite/60 flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-brand-blue" /> {cs.client}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-bold font-heading text-brand-graphite group-hover:text-brand-blue transition-colors">
                    {cs.title}
                  </h3>
                  <p className="text-sm text-brand-graphite/70 leading-relaxed font-sans">
                    {cs.solution}
                  </p>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  {cs.results.slice(0, 2).map((res) => (
                    <div
                      key={res.metric}
                      className="p-3 bg-white border border-brand-graphite/20 rounded-xl"
                    >
                      <div className="text-xl font-extrabold font-heading text-brand-blue">
                        {res.value}
                      </div>
                      <div className="text-xs font-mono text-brand-graphite/60">
                        {res.metric}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {cs.techUsed.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-[11px] font-mono font-medium bg-white border border-brand-graphite/20 rounded-md text-brand-graphite/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-brand-graphite/10 mt-6">
                <Link
                  href={`/case-studies`}
                  className="inline-flex items-center gap-1.5 text-sm font-mono font-bold text-brand-blue hover:gap-2.5 transition-all"
                >
                  Read Case Study <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
