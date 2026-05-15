import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Section from "@/components/shared/Section";
import { caseStudies } from "@/data/caseStudies";
import { breadcrumbSchema, organizationSchema, useSEO, websiteSchema } from "@/lib/seo";

const CaseStudies = () => {
  useSEO({
    title: "Web Development and Software Case Studies | CodeNClicks",
    description:
      "Explore CodeNClicks IT Solutions case studies across ecommerce, hotel websites, CRM systems, real estate software, branding, and custom business platforms.",
    path: "/case-studies",
    keywords: ["web development case studies", "software development portfolio", "ecommerce case study", "hotel website case study"],
    jsonLd: [
      organizationSchema(),
      websiteSchema(),
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Case Studies", path: "/case-studies" },
      ]),
    ],
  });

  return (
    <div className="pt-20">
      <section className="py-20 lg:py-32 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
              <span className="text-primary text-sm font-semibold tracking-wider uppercase">Case Studies</span>
              <h1 className="text-4xl md:text-6xl font-heading font-bold mt-3 mb-6">
                Real Results for <span className="text-gradient">Real Businesses</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Explore selected work across ecommerce, hospitality, CRM, real estate, software, and brand systems. Each project shows how design and technology support measurable business outcomes.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}>
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
                alt="Analytics dashboard showing business growth results"
                className="rounded-2xl shadow-card w-full object-cover"
                width="600"
                height="400"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <Section>
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
                <Link to={`/case-studies/${cs.slug}`} className="block h-full p-8 bg-background border border-border rounded-xl hover-lift group shadow-card">
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="px-3 py-1 text-xs font-medium bg-secondary rounded-full text-primary">{cs.category}</span>
                    <span className="px-3 py-1 text-xs font-medium bg-secondary rounded-full text-muted-foreground">{cs.industry}</span>
                    {cs.status === "in-development" && (
                      <span className="px-3 py-1 text-xs font-medium bg-primary/10 rounded-full text-primary">In Development</span>
                    )}
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{cs.title}</h3>
                  <p className="text-sm text-muted-foreground mb-6 line-clamp-2">{cs.challenge}</p>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
                    {cs.results.map((r) => (
                      <div key={r.metric} className="bg-card rounded-lg p-3 text-center">
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
