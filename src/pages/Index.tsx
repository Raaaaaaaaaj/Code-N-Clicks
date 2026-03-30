import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Star, Check, ArrowUpRight } from "lucide-react";
import Section from "@/components/shared/Section";
import { services } from "@/data/services";
import { caseStudies } from "@/data/caseStudies";
import { testimonials } from "@/data/testimonials";
import { industries } from "@/data/industries";

const techLogos = [
  "React", "Next.js", "TypeScript", "Node.js", "Python", "PostgreSQL",
  "AWS", "Docker", "Figma", "Tailwind CSS", "GraphQL", "Redis",
];

const stats = [
  { value: "200+", label: "Projects Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "50+", label: "Global Clients" },
  { value: "8+", label: "Years Experience" },
];

const Index = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-secondary rounded-full text-xs font-medium text-primary mb-6">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Premium Digital Solutions Agency
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold leading-[1.1] mb-6"
            >
              We Build Digital
              <br />
              Products That
              <br />
              <span className="text-gradient">Drive Revenue</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 leading-relaxed"
            >
              From high-converting websites to enterprise software —
              we engineer digital experiences that transform businesses
              and deliver measurable results.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity text-sm"
              >
                Start Your Project <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/case-studies"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-secondary text-foreground font-semibold rounded-lg hover:bg-secondary/80 transition-colors text-sm"
              >
                View Our Work <ArrowUpRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 pt-10 border-t border-border"
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl md:text-4xl font-heading font-bold text-gradient">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <Section className="bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mb-16">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">Our Services</span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mt-3 mb-4">
              Everything Your Business Needs to <span className="text-gradient">Dominate Online</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              From strategy to execution, we deliver end-to-end digital solutions that drive growth.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.5 }}
                >
                  <Link
                    to={`/services/${service.slug}`}
                    className="block h-full p-6 bg-card-gradient border border-border rounded-xl hover-lift group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-heading font-semibold text-foreground mb-2">{service.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{service.tagline}</p>
                    <span className="inline-flex items-center gap-1 mt-4 text-sm text-primary font-medium group-hover:gap-2 transition-all">
                      Learn More <ArrowRight className="w-3 h-3" />
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Industries */}
      <Section>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mb-16">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">Industries</span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mt-3 mb-4">
              Tailored Solutions for <span className="text-gradient">Every Industry</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {industries.map((ind) => {
              const Icon = ind.icon;
              return (
                <Link
                  key={ind.slug}
                  to={`/industries/${ind.slug}`}
                  className="p-6 bg-card-gradient border border-border rounded-xl hover-lift text-center group"
                >
                  <Icon className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="text-sm font-heading font-semibold text-foreground">{ind.title}</h3>
                </Link>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Case Studies */}
      <Section className="bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div className="max-w-2xl">
              <span className="text-primary text-sm font-semibold tracking-wider uppercase">Case Studies</span>
              <h2 className="text-3xl md:text-5xl font-heading font-bold mt-3">
                Results That <span className="text-gradient">Speak Volumes</span>
              </h2>
            </div>
            <Link to="/case-studies" className="text-primary text-sm font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {caseStudies.slice(0, 4).map((cs, i) => (
              <motion.div
                key={cs.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <Link
                  to={`/case-studies/${cs.slug}`}
                  className="block p-6 bg-card-gradient border border-border rounded-xl hover-lift group"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 text-xs font-medium bg-secondary rounded-full text-secondary-foreground">{cs.category}</span>
                    {cs.status === "in-development" && (
                      <span className="px-3 py-1 text-xs font-medium bg-accent/20 rounded-full text-accent">In Development</span>
                    )}
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{cs.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{cs.challenge}</p>
                  <div className="grid grid-cols-2 gap-3">
                    {cs.results.slice(0, 2).map((r) => (
                      <div key={r.metric} className="bg-secondary/50 rounded-lg p-3">
                        <div className="text-lg font-heading font-bold text-primary">{r.value}</div>
                        <div className="text-xs text-muted-foreground">{r.metric}</div>
                      </div>
                    ))}
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Testimonials */}
      <Section>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mb-16">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">Testimonials</span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mt-3">
              Trusted by Leaders <span className="text-gradient">Worldwide</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.slice(0, 6).map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                className="p-6 bg-card-gradient border border-border rounded-xl"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">"{t.content}"</p>
                <div>
                  <div className="text-sm font-semibold text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}, {t.company}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Technologies */}
      <Section className="bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">Tech Stack</span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mt-3">
              Built With the <span className="text-gradient">Best Tools</span>
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {techLogos.map((tech) => (
              <div key={tech} className="px-6 py-3 bg-secondary border border-border rounded-full text-sm text-foreground font-medium hover-lift">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-glass rounded-2xl p-10 md:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
            <div className="relative">
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
                Ready to Build Something <span className="text-gradient">Extraordinary?</span>
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-8">
                Let's discuss your project. Book a free consultation and discover how we can accelerate your digital growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity"
                >
                  Get Free Consultation <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/pricing"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-secondary text-foreground font-semibold rounded-lg hover:bg-secondary/80 transition-colors"
                >
                  View Pricing
                </Link>
              </div>
              <div className="flex flex-wrap justify-center gap-6 mt-8">
                {["No upfront costs", "Free project estimate", "24-hour response"].map((item) => (
                  <span key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary" /> {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Index;
