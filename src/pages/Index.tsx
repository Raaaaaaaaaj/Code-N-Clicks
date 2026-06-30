import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Star, Check, ArrowUpRight, Zap, Shield, Clock, TrendingUp, Rocket, Heart, Globe, Code2, Users, Award, Headphones, BarChart3, Lightbulb, Target, MessageSquare, ThumbsUp, Play } from "lucide-react";
import Section from "@/components/shared/Section";
import { services } from "@/data/services";
import { caseStudies } from "@/data/caseStudies";
import { testimonials } from "@/data/testimonials";
import { industries } from "@/data/industries";
import { useState } from "react";
import { faqSchema, localBusinessSchema, organizationSchema, useSEO, websiteSchema } from "@/lib/seo";

const techLogos = [
  "React", "Next.js", "TypeScript", "Node.js", "Python", "PostgreSQL",
  "AWS", "Docker", "Figma", "Tailwind CSS", "GraphQL", "Redis",
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
  { icon: MessageSquare, title: "Discovery", desc: "We understand your audience, services, competitors, target keywords, budget, and timeline before recommending scope." },
  { icon: Lightbulb, title: "Strategy", desc: "You get a clear page plan, feature scope, timeline, and pricing so every stakeholder knows what will be delivered." },
  { icon: Code2, title: "Design and Build", desc: "We build in practical milestones with responsive design, SEO setup, performance checks, and weekly demos." },
  { icon: Rocket, title: "Launch and Growth", desc: "We test, deploy, connect analytics, prepare indexing, and stay available for improvements after launch." },
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
  "Turfello", "An1me Paradise", "Expand ERP", "Krold IT Solutions", "Exceed Softwares", "Funedge Solutions"
];

const Index = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useSEO({
    title: "CodeNClicks IT Solutions | Web Development Company in India",
    description:
      "CodeNClicks IT Solutions is a web development company in India building SEO-friendly websites, SaaS products, CRM systems, ecommerce stores, hotel software, UI/UX, and digital marketing campaigns.",
    path: "/",
    keywords: [
      "web development company in India",
      "best web development company",
      "SaaS development company",
      "CRM development company",
      "ecommerce website development company",
      "hotel management system development company",
    ],
    jsonLd: [organizationSchema(), localBusinessSchema(), websiteSchema(), faqSchema(faqs)],
  });

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-28">
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
                {/* <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-secondary rounded-full text-xs font-medium text-primary mb-6">
                  <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  Web Development, SaaS, CRM and Growth Marketing
                </span> */}
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-8xl font-heading font-bold leading-[1.1] mb-6"
              >
                {/* Web Development Company in India */}
                Stop Competing
                <br />
                <span className="text-gradient">Start Leading.</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed"
              >
                CodeNClicks IT Solutions builds fast, SEO-friendly websites, custom software, SaaS platforms, CRM systems, ecommerce stores, and digital marketing funnels for startups and businesses in India and global markets.
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
                  alt="CodeNClicks web development team planning a digital project"
                  className="rounded-2xl shadow-card w-full object-cover"
                  width="700"
                  height="500"
                />
                <div className="absolute -bottom-6 -left-6 bg-background border border-border rounded-xl p-4 shadow-card">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-foreground">98% Success Rate</div>
                      <div className="text-xs text-muted-foreground">Across 50+ projects</div>
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
            className="grid grid-cols-2 md:grid-cols-4 gap-6 my-10 pt-10 border-t border-border"
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

      {/* Trusted By / Logo Bar */}
      <Section className="!py-12 border-y border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <p className="text-center text-sm text-muted-foreground mb-8 font-medium uppercase tracking-wider">Trusted by forward-thinking companies</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14">
            {trustedBy.map((name) => (
              <div key={name} className="text-lg font-heading font-bold text-muted-foreground/40 hover:text-primary transition-colors cursor-default">
                {name}
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section className="bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary text-sm font-semibold tracking-wider uppercase">Why CodeNClicks</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mt-3 mb-4">
                Websites, software, and campaigns built around <span className="text-gradient">real business outcomes</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                We combine technical SEO, conversion copy, responsive design, and reliable engineering so your website or software product can attract traffic, earn trust, and turn more visitors into qualified leads.
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
                alt="Developers and designers collaborating on a web development project"
                className="rounded-2xl shadow-card w-full object-cover"
                loading="lazy"
                decoding="async"
                width="600"
                height="500"
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
              Services that support <span className="text-gradient">organic growth and sales</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              From SEO-friendly websites to custom SaaS, CRM, ecommerce, UI/UX, and marketing, we build the digital systems your buyers expect.
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

      {/* How We Work - Process */}
      <Section className="bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary text-sm font-semibold tracking-wider uppercase">How We Work</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mt-3 mb-4">
                A practical process for <span className="text-gradient">faster, cleaner delivery</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Every project is planned around the outcome first: search visibility, trust, conversion, maintainability, and launch speed.
              </p>
              <div className="space-y-6">
                {workflowSteps.map((step, i) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <step.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-base font-heading font-semibold text-foreground mb-1">
                        <span className="text-primary mr-2">0{i + 1}.</span>{step.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=700&fit=crop"
                alt="Team working through project milestones"
                className="rounded-2xl shadow-card w-full object-cover"
                loading="lazy"
                decoding="async"
                width="600"
                height="700"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-background/95 backdrop-blur-sm border border-border rounded-xl p-5 shadow-card">
                <div className="flex items-center gap-3 mb-2">
                  <ThumbsUp className="w-5 h-5 text-primary" />
                  <span className="text-sm font-semibold text-foreground">On-time, every time</span>
                </div>
                <p className="text-xs text-muted-foreground">96% of our projects are delivered on or ahead of schedule.</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Portfolio Showcase Image Strip */}
      <Section>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">Our Work</span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mt-3 mb-4">
              Crafted with Precision, <span className="text-gradient">Delivered with Pride</span>
            </h2>
            <p className="text-muted-foreground">A glimpse into the digital experiences we've built for businesses around the world.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop", label: "SaaS Dashboard" },
              { src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop", label: "E-commerce Platform" },
              { src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop", label: "Analytics Suite" },
              { src: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop", label: "Brand Design" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative rounded-xl overflow-hidden shadow-card"
              >
                <img src={item.src} alt={item.label} className="w-full h-48 md:h-56 object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" decoding="async" width="400" height="300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-white text-sm font-semibold">{item.label}</span>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/case-studies" className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all">
              View All Projects <ArrowRight className="w-4 h-4" />
            </Link>
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

      {/* Big Numbers / Impact Section */}
      <Section className="bg-primary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary-foreground">
              Our Impact in Numbers
            </h2>
            <p className="text-primary-foreground/70 mt-3 max-w-xl mx-auto">
              Every project is a partnership. Here's what we've achieved together with our clients.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "INR 10L+", label: "Revenue Generated for Clients" },
              { value: "1000+", label: "Users Reached" },
              { value: "99.9%", label: "Average Uptime" },
              { value: "4.7/5", label: "Average Client Rating" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-5xl font-heading font-bold text-primary-foreground mb-2">{item.value}</div>
                <div className="text-sm text-primary-foreground/70">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Testimonials */}
      <Section>
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
          <div className="text-center mt-10">
            <Link to="/reviews" className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all">
              Read All Reviews <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </Section>

      {/* Technologies */}
      <Section className="bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary text-sm font-semibold tracking-wider uppercase">Tech Stack</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mt-3 mb-4">
                Built With the <span className="text-gradient">Best Tools</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We use industry-leading technologies to build fast, secure, and scalable solutions.
                Our team stays on the cutting edge so you don't have to worry about outdated tech.
              </p>
              <Link to="/technologies" className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all">
                Explore Our Full Stack <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="flex flex-wrap gap-3">
              {techLogos.map((tech) => (
                <div key={tech} className="px-5 py-3 bg-background border border-border rounded-full text-sm text-foreground font-medium hover-lift shadow-card flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-primary" />
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <span className="text-primary text-sm font-semibold tracking-wider uppercase">FAQ</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mt-3 mb-4">
                Questions before you <span className="text-gradient">start your project</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Straight answers for founders and business owners comparing web development, software, SEO, timelines, pricing, and support.
              </p>
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&h=350&fit=crop"
                alt="Customer support and FAQ"
                className="rounded-2xl shadow-card w-full object-cover hidden lg:block"
                loading="lazy"
                decoding="async"
                width="500"
                height="350"
              />
            </div>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="border border-border rounded-xl overflow-hidden shadow-card"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left hover:bg-secondary/50 transition-colors"
                  >
                    <span className="text-sm font-semibold text-foreground pr-4">{faq.q}</span>
                    <ArrowRight className={`w-4 h-4 text-primary flex-shrink-0 transition-transform ${openFaq === i ? "rotate-90" : ""}`} />
                  </button>
                  {openFaq === i && (
                    <div className="px-5 pb-5">
                      <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-gradient-primary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center py-8">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4 text-primary-foreground">
              Ready to Build a Website That Generates Leads?
            </h2>
            <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
              Get a free consultation for your website, SaaS product, CRM, ecommerce store, hotel system, or digital growth plan.
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
