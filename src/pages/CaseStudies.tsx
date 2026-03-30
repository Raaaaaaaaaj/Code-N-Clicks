import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Section from "@/components/shared/Section";
import { caseStudies } from "@/data/caseStudies";

const CaseStudies = () => {
  return (
    <div className="pt-20">
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">Case Studies</span>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mt-3 mb-6">
              Real Results for <span className="text-gradient">Real Businesses</span>
            </h1>
            <p className="text-lg text-muted-foreground">Explore how we've helped businesses across industries achieve extraordinary digital outcomes.</p>
          </motion.div>
        </div>
      </section>

      <Section className="bg-card !pt-0">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((cs, i) => (
              <motion.div
                key={cs.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Link to={`/case-studies/${cs.slug}`} className="block h-full p-8 bg-card-gradient border border-border rounded-xl hover-lift group">
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="px-3 py-1 text-xs font-medium bg-secondary rounded-full text-secondary-foreground">{cs.category}</span>
                    <span className="px-3 py-1 text-xs font-medium bg-secondary rounded-full text-secondary-foreground">{cs.industry}</span>
                    {cs.status === "in-development" && (
                      <span className="px-3 py-1 text-xs font-medium bg-accent/20 rounded-full text-accent">In Development</span>
                    )}
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{cs.title}</h3>
                  <p className="text-sm text-muted-foreground mb-6 line-clamp-2">{cs.challenge}</p>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
                    {cs.results.map((r) => (
                      <div key={r.metric} className="bg-secondary/50 rounded-lg p-3 text-center">
                        <div className="text-lg font-heading font-bold text-primary">{r.value}</div>
                        <div className="text-xs text-muted-foreground">{r.metric}</div>
                      </div>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-sm text-primary font-medium group-hover:gap-2 transition-all">
                    Read Full Case Study <ArrowRight className="w-3 h-3" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default CaseStudies;
