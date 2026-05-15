import { useParams, Navigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, Check, AlertTriangle } from "lucide-react";
import Section from "@/components/shared/Section";
import ContactForm from "@/components/shared/ContactForm";
import { getIndustryBySlug, industries } from "@/data/industries";
import { breadcrumbSchema, organizationSchema, serviceSchema, useSEO, websiteSchema } from "@/lib/seo";

const IndustryDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const matchedIndustry = getIndustryBySlug(slug || "");
  const industry = matchedIndustry || industries[0];

  const path = `/industries/${industry.slug}`;

  useSEO({
    title: `${industry.title} Web Development and Software Solutions`,
    description: `${industry.tagline} CodeNClicks builds websites, software, CRM, ecommerce, and digital growth systems for ${industry.title.toLowerCase()} businesses.`,
    path,
    keywords: [`${industry.title} web development`, `${industry.title} software development`, ...industry.relevantServices],
    jsonLd: [
      organizationSchema(),
      websiteSchema(),
      serviceSchema({ name: `${industry.title} Digital Solutions`, description: industry.tagline, path }),
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Industries", path: "/industries" },
        { name: industry.title, path },
      ]),
    ],
  });

  if (!matchedIndustry) return <Navigate to="/industries" replace />;

  const Icon = industry.icon;

  return (
    <div className="pt-20">
      <section className="py-20 lg:py-32 bg-card relative">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative">
          <Link to="/industries" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> All Industries
          </Link>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
              <Icon className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4">{industry.title}</h1>
            <p className="text-xl text-muted-foreground">{industry.tagline}</p>
          </motion.div>
        </div>
      </section>

      {/* Challenges */}
      <Section>
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-heading font-bold mb-8">Industry Challenges</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {industry.challenges.map((c) => (
              <div key={c} className="flex items-start gap-3 p-5 bg-destructive/5 border border-destructive/10 rounded-xl">
                <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                <p className="text-sm text-foreground">{c}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Solutions */}
      <Section className="bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-heading font-bold mb-8">Our Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {industry.solutions.map((s) => (
              <div key={s} className="flex items-start gap-3 p-5 bg-background border border-border rounded-xl shadow-card">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-sm text-foreground">{s}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Relevant Services */}
      <Section>
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-heading font-bold mb-8">Relevant Services</h2>
          <div className="flex flex-wrap gap-3">
            {industry.relevantServices.map((s) => (
              <Link key={s} to="/services" className="px-6 py-3 bg-background border border-border rounded-full text-sm font-medium text-foreground hover-lift shadow-card hover:border-primary hover:text-primary transition-colors">
                {s}
              </Link>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-heading font-bold mb-4">
                Ready to Transform Your {industry.title} Business?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Get a tailored solution designed specifically for the {industry.title.toLowerCase()} industry. We understand your challenges and know how to solve them.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity shadow-glow">
                Get Started <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <ContactForm variant="consultation" />
          </div>
        </div>
      </Section>
    </div>
  );
};

export default IndustryDetail;
