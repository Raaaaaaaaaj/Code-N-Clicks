import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Section from "@/components/shared/Section";
import { testimonials } from "@/data/testimonials";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Reviews = () => {
  return (
    <div className="pt-20">
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">Client Reviews</span>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mt-3 mb-6">
              What Our Clients <span className="text-gradient">Say About Us</span>
            </h1>
            <p className="text-lg text-muted-foreground">Don't take our word for it — hear from the businesses we've helped transform.</p>
          </motion.div>
        </div>
      </section>

      <Section className="bg-card !pt-0">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-6 bg-card-gradient border border-border rounded-xl"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                  {Array.from({ length: 5 - t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-muted" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">"{t.content}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-heading font-bold text-sm">
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

      <Section>
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Join Our Growing List of <span className="text-gradient">Happy Clients</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">Start your project today and experience the CodeNClicks difference.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity">
            Get Started <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Section>
    </div>
  );
};

export default Reviews;
