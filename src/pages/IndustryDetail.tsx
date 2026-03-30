import { useParams, Navigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, Check, AlertTriangle } from "lucide-react";
import Section from "@/components/shared/Section";
import ContactForm from "@/components/shared/ContactForm";
import { getIndustryBySlug } from "@/data/industries";

const IndustryDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const industry = getIndustryBySlug(slug || "");

  if (!industry) return <Navigate to="/industries" replace />;

  const Icon = industry.icon;

  return (
    <div className="pt-20">
      <section className="py-20 lg:py-32 relative">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative">
          <Link to="/industries" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> All Industries
          </Link>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <Icon className="w-14 h-14 text-primary mb-6" />
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4">{industry.title}</h1>
            <p className="text-xl text-muted-foreground">{industry.tagline}</p>
          </motion.div>
        </div>
      </section>

      {/* Challenges */}
      <Section className="bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-heading font-bold mb-8">Industry Challenges</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {industry.challenges.map((c) => (
              <div key={c} className="flex items-start gap-3 p-5 bg-secondary rounded-xl">
                <AlertTriangle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-sm text-secondary-foreground">{c}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Solutions */}
      <Section>
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-heading font-bold mb-8">Our Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {industry.solutions.map((s) => (
              <div key={s} className="flex items-start gap-3 p-5 bg-card-gradient border border-border rounded-xl">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-sm text-foreground">{s}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Relevant Services */}
      <Section className="bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-heading font-bold mb-8">Relevant Services</h2>
          <div className="flex flex-wrap gap-3">
            {industry.relevantServices.map((s) => (
              <Link key={s} to="/services" className="px-6 py-3 bg-secondary border border-border rounded-full text-sm font-medium text-foreground hover-lift">
                {s}
              </Link>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-heading font-bold mb-4">
                Ready to Transform Your {industry.title} Business?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Get a tailored solution designed specifically for the {industry.title.toLowerCase()} industry. We understand your challenges and know how to solve them.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity">
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
