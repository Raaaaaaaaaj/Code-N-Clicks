import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Section from "@/components/shared/Section";
import { industries } from "@/data/industries";
import { breadcrumbSchema, organizationSchema, useSEO, websiteSchema } from "@/lib/seo";

const Industries = () => {
  useSEO({
    title: "Industry Web Development and Software Solutions | CodeNClicks",
    description:
      "Explore industry-specific web development, ecommerce, CRM, SaaS, and digital marketing solutions for hotels, startups, ecommerce, education, healthcare, agencies, and corporate firms.",
    path: "/industries",
    keywords: ["industry web development", "hotel website development", "startup website development", "ecommerce software development"],
    jsonLd: [
      organizationSchema(),
      websiteSchema(),
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Industries", path: "/industries" },
      ]),
    ],
  });

  return (
    <div className="pt-20">
      <section className="py-20 lg:py-32 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
              <span className="text-primary text-sm font-semibold tracking-wider uppercase">Industries</span>
              <h1 className="text-4xl md:text-6xl font-heading font-bold mt-3 mb-6">
                Industry-Specific <span className="text-gradient">Expertise</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Every industry has different buyers, workflows, and conversion barriers. We build web and software solutions around those real operating needs.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}>
              <img
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop"
                alt="Diverse industries and business sectors"
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
            {industries.map((ind, i) => {
              const Icon = ind.icon;
              return (
                <motion.div
                  key={ind.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link to={`/industries/${ind.slug}`} className="block h-full p-8 bg-background border border-border rounded-xl hover-lift group shadow-card">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                      <Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <h3 className="text-xl font-heading font-semibold text-foreground mb-2">{ind.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{ind.tagline}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {ind.relevantServices.map((s) => (
                        <span key={s} className="px-3 py-1 text-xs bg-secondary rounded-full text-primary">{s}</span>
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-1 text-sm text-primary font-medium group-hover:gap-2 transition-all">
                      Explore Solutions <ArrowRight className="w-3 h-3" />
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Industries;
