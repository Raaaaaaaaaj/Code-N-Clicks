import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Star, Check, ArrowUpRight, Zap, Shield, Clock, TrendingUp, Rocket, Heart, Globe, Code2 } from "lucide-react";
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
  { value: "200+", label: "Projects Delivered", icon: Rocket },
  { value: "98%", label: "Client Satisfaction", icon: Heart },
  { value: "50+", label: "Global Clients", icon: Globe },
  { value: "3+", label: "Years of Hustle", icon: Zap },
];

const whyUs = [
  { icon: Zap, title: "Young & Hungry", desc: "We bring fresh perspectives and relentless energy to every project. No corporate bureaucracy." },
  { icon: Shield, title: "Enterprise Quality", desc: "Young doesn't mean amateur. We deliver production-grade code that scales." },
  { icon: Clock, title: "Lightning Fast", desc: "We move fast without breaking things. Agile delivery with weekly updates." },
  { icon: TrendingUp, title: "Growth-Focused", desc: "Every pixel and line of code is optimized for your business growth." },
];

const Index = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-secondary rounded-full text-xs font-medium text-primary mb-6">
                  <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  Young Founders. Big Vision. Real Results.
                </span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-[1.1] mb-6"
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
                className="text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed"
              >
                We're a team of young, passionate founders who believe every business
                deserves world-class digital solutions. From stunning websites to
                enterprise software — we turn your vision into reality.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity text-sm shadow-glow"
                >
                  Start Your Project <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/case-studies"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors text-sm"
                >
                  View Our Work <ArrowUpRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="hidden lg:block"
            >
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=700&h=500&fit=crop"
                  alt="Young team collaborating on digital projects"
                  className="rounded-2xl shadow-card w-full object-cover"
                />
                <div className="absolute -bottom-6 -left-6 bg-background border border-border rounded-xl p-4 shadow-card">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-foreground">98% Success Rate</div>
                      <div className="text-xs text-muted-foreground">Across 200+ projects</div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 bg-background border border-border rounded-xl p-4 shadow-card">
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      {[1,2,3].map(i => (
                        <div key={i} className="w-8 h-8 rounded-full bg-primary/20 border-2 border-background flex items-center justify-center text-xs font-bold text-primary">
                          {["A","P","D"][i-1]}
                        </div>
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground ml-1">50+ happy clients</span>
                  </div>
                </div>
              </div>
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
              <div key={stat.label} className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-heading font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <Section className="bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary text-sm font-semibold tracking-wider uppercase">Why CodeNClicks</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mt-3 mb-4">
                Young Founders Making a <span className="text-gradient">Real Difference</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                We started CodeNClicks because we saw too many businesses getting overcharged 
                for mediocre work. As young founders, we bring fresh energy, modern thinking, 
                and a genuine passion for helping businesses grow through technology.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {whyUs.map((item) => (
                  <div key={item.title} className="flex gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
                      <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=500&fit=crop"
                alt="Modern workspace with creative team brainstorming"
                className="rounded-2xl shadow-card w-full object-cover"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Services Overview */}
      <Section>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
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
                    className="block h-full p-6 bg-background border border-border rounded-xl hover-lift group shadow-card"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
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
      <Section className="bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">Industries</span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mt-3 mb-4">
              Tailored Solutions for <span className="text-gradient">Every Industry</span>
            </h2>
            <p className="text-muted-foreground">
              We understand the unique challenges of your industry and deliver solutions that address them head-on.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {industries.map((ind) => {
              const Icon = ind.icon;
              return (
                <Link
                  key={ind.slug}
                  to={`/industries/${ind.slug}`}
                  className="p-6 bg-background border border-border rounded-xl hover-lift text-center group shadow-card"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 mx-auto mb-3 flex items-center justify-center group-hover:bg-primary transition-colors">
                    <Icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="text-sm font-heading font-semibold text-foreground">{ind.title}</h3>
                </Link>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Case Studies */}
      <Section>
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
                  className="block p-6 bg-background border border-border rounded-xl hover-lift group shadow-card"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 text-xs font-medium bg-secondary rounded-full text-primary">{cs.category}</span>
                    {cs.status === "in-development" && (
                      <span className="px-3 py-1 text-xs font-medium bg-primary/10 rounded-full text-primary">In Development</span>
                    )}
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{cs.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{cs.challenge}</p>
                  <div className="grid grid-cols-2 gap-3">
                    {cs.results.slice(0, 2).map((r) => (
                      <div key={r.metric} className="bg-secondary rounded-lg p-3">
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
      <Section className="bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
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
                className="p-6 bg-background border border-border rounded-xl shadow-card"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">"{t.content}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-heading font-bold text-sm">
                    {t.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}, {t.company}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Technologies */}
      <Section>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">Tech Stack</span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mt-3">
              Built With the <span className="text-gradient">Best Tools</span>
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {techLogos.map((tech) => (
              <div key={tech} className="px-6 py-3 bg-background border border-border rounded-full text-sm text-foreground font-medium hover-lift shadow-card flex items-center gap-2">
                <Code2 className="w-4 h-4 text-primary" />
                {tech}
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-gradient-primary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center py-8">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4 text-primary-foreground">
              Ready to Build Something Extraordinary?
            </h2>
            <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
              We're young, we're hungry, and we're ready to pour our hearts into your project. 
              Let's build something the world hasn't seen before.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-background text-primary font-semibold rounded-lg hover:bg-background/90 transition-colors"
              >
                Get Free Consultation <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-primary-foreground text-primary-foreground font-semibold rounded-lg hover:bg-primary-foreground/10 transition-colors"
              >
                View Pricing
              </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-6 mt-8">
              {["No upfront costs", "Free project estimate", "24-hour response"].map((item) => (
                <span key={item} className="flex items-center gap-2 text-sm text-primary-foreground/80">
                  <Check className="w-4 h-4" /> {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Index;
