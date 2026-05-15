import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Section from "@/components/shared/Section";
import { testimonials } from "@/data/testimonials";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { breadcrumbSchema, organizationSchema, useSEO, websiteSchema } from "@/lib/seo";

const Reviews = () => {
  useSEO({
    title: "Client Reviews | CodeNClicks IT Solutions",
    description:
      "Read client reviews and testimonials for CodeNClicks IT Solutions web development, software, ecommerce, CRM, design, and digital growth projects.",
    path: "/reviews",
    keywords: ["CodeNClicks reviews", "web development client reviews", "software agency testimonials"],
    jsonLd: [
      organizationSchema(),
      websiteSchema(),
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Reviews", path: "/reviews" },
      ]),
    ],
  });

  return (
    <div className="pt-20">
      <section className="py-20 lg:py-32 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
              <span className="text-primary text-sm font-semibold tracking-wider uppercase">Client Reviews</span>
              <h1 className="text-4xl md:text-6xl font-heading font-bold mt-3 mb-6">
                What Our Clients <span className="text-gradient">Say About Us</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Hear from businesses that trusted CodeNClicks to deliver websites, software, ecommerce platforms, CRM systems, and digital growth work.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}>
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
                alt="Happy team celebrating project success"
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-6 bg-background border border-border rounded-xl shadow-card"
              >
                <Quote className="w-8 h-8 text-primary/20 mb-3" />
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                  {Array.from({ length: 5 - t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-border" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">"{t.content}"</p>
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

      <Section className="bg-gradient-primary">
        <div className="container mx-auto px-4 lg:px-8 text-center py-8">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-primary-foreground">
            Join Our Growing List of Happy Clients
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">Start your project today and experience the CodeNClicks difference.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-background text-primary font-semibold rounded-lg hover:bg-background/90 transition-colors">
            Get Started <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Section>
    </div>
  );
};

export default Reviews;
