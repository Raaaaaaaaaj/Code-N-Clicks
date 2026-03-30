import { useParams, Navigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, Star } from "lucide-react";
import Section from "@/components/shared/Section";
import { getCaseStudyBySlug } from "@/data/caseStudies";

const CaseStudyDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const cs = getCaseStudyBySlug(slug || "");

  if (!cs) return <Navigate to="/case-studies" replace />;

  return (
    <div className="pt-20">
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <Link to="/case-studies" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to Case Studies
          </Link>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="px-3 py-1 text-xs font-medium bg-secondary rounded-full text-secondary-foreground">{cs.category}</span>
              <span className="px-3 py-1 text-xs font-medium bg-secondary rounded-full text-secondary-foreground">{cs.industry}</span>
              {cs.status === "in-development" && (
                <span className="px-3 py-1 text-xs font-medium bg-accent/20 rounded-full text-accent">In Development</span>
              )}
            </div>
            <h1 className="text-3xl md:text-5xl font-heading font-bold mb-4">{cs.title}</h1>
            <p className="text-lg text-muted-foreground">{cs.client}</p>
          </motion.div>
        </div>
      </section>

      {/* Results */}
      <Section className="bg-card !pt-0">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {cs.results.map((r) => (
              <div key={r.metric} className="p-6 bg-secondary rounded-xl text-center">
                <div className="text-2xl md:text-3xl font-heading font-bold text-gradient">{r.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{r.metric}</div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-4">The Challenge</h2>
              <p className="text-muted-foreground leading-relaxed">{cs.challenge}</p>
            </div>
            <div>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Our Solution</h2>
              <p className="text-muted-foreground leading-relaxed">{cs.solution}</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Tech Used */}
      <Section>
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-2xl font-heading font-bold text-foreground mb-8">Technologies Used</h2>
          <div className="flex flex-wrap gap-3">
            {cs.techUsed.map((tech) => (
              <span key={tech} className="px-5 py-2.5 bg-secondary border border-border rounded-full text-sm text-foreground font-medium">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </Section>

      {/* Testimonial */}
      <Section className="bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center gap-1 mb-6">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
            </div>
            <blockquote className="text-xl md:text-2xl font-heading text-foreground leading-relaxed mb-6">
              "{cs.testimonial}"
            </blockquote>
            <div className="text-sm text-muted-foreground">
              <span className="text-foreground font-semibold">{cs.testimonialAuthor}</span> — {cs.testimonialRole}
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Want Results Like These?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">Let's discuss how we can achieve similar — or better — results for your business.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity">
            Start Your Project <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Section>
    </div>
  );
};

export default CaseStudyDetail;
