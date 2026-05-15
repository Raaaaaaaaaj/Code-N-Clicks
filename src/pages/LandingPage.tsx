import { Navigate, Link, useLocation, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle,
  Link as LinkIcon,
  Sparkles,
} from "lucide-react";
import Section from "@/components/shared/Section";
import ContactForm from "@/components/shared/ContactForm";
import { getLandingPageBySlug, landingPages } from "@/data/landingPages";
import {
  breadcrumbSchema,
  faqSchema,
  organizationSchema,
  serviceSchema,
  useSEO,
  websiteSchema,
} from "@/lib/seo";

const LandingPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const location = useLocation();
  const currentSlug = slug || location.pathname.replace(/^\/+/, "");
  const matchedPage = getLandingPageBySlug(currentSlug);
  const page = matchedPage || landingPages[0];

  const Icon = page.icon;
  const path = `/${page.slug}`;

  useSEO({
    title: page.seoTitle,
    description: page.metaDescription,
    path,
    keywords: [page.primaryKeyword, ...page.secondaryKeywords],
    image: page.heroImage,
    jsonLd: [
      organizationSchema(),
      websiteSchema(),
      serviceSchema({ name: page.title, description: page.description, path }),
      faqSchema(page.faqs),
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: page.title, path },
      ]),
    ],
  });

  if (!matchedPage) return <Navigate to="/404" replace />;

  return (
    <div className="pt-20">
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-primary/3 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative">
          <Link to="/services" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> Explore Services
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Icon className="w-8 h-8 text-primary" />
              </div>
              <span className="text-primary text-sm font-semibold tracking-wider uppercase">{page.eyebrow}</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mt-3 mb-6 leading-[1.1]">
                {page.h1}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">{page.description}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity shadow-glow">
                  Get Free Consultation <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/pricing" className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors">
                  View Pricing
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:block"
            >
              <img
                src={page.heroImage}
                alt={`${page.title} by CodeNClicks IT Solutions`}
                className="rounded-2xl shadow-card w-full object-cover"
                width="900"
                height="620"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <Section className="!py-14 bg-primary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {page.stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-primary-foreground/70">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <span className="text-primary text-sm font-semibold tracking-wider uppercase">Problems We Solve</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mt-3 mb-6">
                Built for buyers searching for <span className="text-gradient">{page.primaryKeyword}</span>
              </h2>
              <div className="space-y-3">
                {page.painPoints.map((point) => (
                  <div key={point} className="flex items-start gap-3 p-5 bg-destructive/5 border border-destructive/10 rounded-xl">
                    <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-foreground">{point}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <span className="text-primary text-sm font-semibold tracking-wider uppercase">What You Get</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mt-3 mb-6">
                Practical delivery, not vague promises
              </h2>
              <div className="space-y-3">
                {page.benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3 p-5 bg-card border border-border rounded-xl shadow-card">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-foreground">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">Process</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mt-3 mb-4">
              A clear path from idea to launch
            </h2>
            <p className="text-muted-foreground">
              Every landing page, website, or software project follows a simple structure so timelines, ownership, and outcomes stay visible.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {page.process.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 bg-background border border-border rounded-xl shadow-card hover-lift relative"
              >
                <span className="text-5xl font-heading font-bold text-primary/10 absolute top-4 right-4">
                  0{i + 1}
                </span>
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <CheckCircle className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-primary text-sm font-semibold tracking-wider uppercase">Deliverables</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mt-3 mb-6">
                What is included in the project
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {page.deliverables.map((item) => (
                  <div key={item} className="flex items-center gap-3 p-4 bg-card border border-border rounded-xl shadow-card">
                    <Sparkles className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm font-medium text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <span className="text-primary text-sm font-semibold tracking-wider uppercase">Internal Links</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mt-3 mb-6">
                Explore related services
              </h2>
              <div className="space-y-3">
                {page.relatedLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="flex items-center justify-between gap-4 p-5 bg-background border border-border rounded-xl shadow-card hover-lift group"
                  >
                    <span className="text-sm font-semibold text-foreground">{link.label}</span>
                    <LinkIcon className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <span className="text-primary text-sm font-semibold tracking-wider uppercase">FAQ</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mt-3 mb-4">
                Questions before you start
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                These answers are written for decision-makers comparing agencies, timelines, cost, and the practical details of getting started.
              </p>
            </div>
            <div className="space-y-3">
              {page.faqs.map((faq) => (
                <div key={faq.q} className="p-5 bg-background border border-border rounded-xl shadow-card">
                  <h3 className="text-sm font-semibold text-foreground mb-2">{faq.q}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Ready to discuss your {page.title.toLowerCase()} project?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Share your goals, timeline, and budget range. We will review the fit and send a clear next step within 24 hours.
              </p>
              <ul className="space-y-3">
                {["Free project estimate", "No-obligation consultation", "India and global delivery", "Transparent scope and timeline"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <ContactForm variant="consultation" />
          </div>
        </div>
      </Section>
    </div>
  );
};

export default LandingPage;
