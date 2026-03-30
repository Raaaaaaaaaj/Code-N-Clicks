import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Section from "@/components/shared/Section";
import { industries } from "@/data/industries";

const Industries = () => {
  return (
    <div className="pt-20">
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">Industries</span>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mt-3 mb-6">
              Industry-Specific <span className="text-gradient">Expertise</span>
            </h1>
            <p className="text-lg text-muted-foreground">We don't believe in one-size-fits-all. Every industry has unique challenges — and we build solutions that address them head-on.</p>
          </motion.div>
        </div>
      </section>

      <Section className="bg-card !pt-0">
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
                  <Link to={`/industries/${ind.slug}`} className="block h-full p-8 bg-card-gradient border border-border rounded-xl hover-lift group">
                    <Icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-heading font-semibold text-foreground mb-2">{ind.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{ind.tagline}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {ind.relevantServices.map((s) => (
                        <span key={s} className="px-3 py-1 text-xs bg-secondary rounded-full text-secondary-foreground">{s}</span>
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
