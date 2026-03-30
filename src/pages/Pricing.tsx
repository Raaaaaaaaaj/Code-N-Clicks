import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import Section from "@/components/shared/Section";
import { services } from "@/data/services";
import { Link } from "react-router-dom";

const Pricing = () => {
  return (
    <div className="pt-20">
      <section className="py-20 lg:py-32 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
              <span className="text-primary text-sm font-semibold tracking-wider uppercase">Pricing</span>
              <h1 className="text-4xl md:text-6xl font-heading font-bold mt-3 mb-6">
                Transparent <span className="text-gradient">Pricing</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                No hidden fees. No surprises. Just honest pricing for premium digital solutions. 
                As young founders, we believe in fair pricing that delivers real value.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}>
              <img
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop"
                alt="Transparent pricing and business planning"
                className="rounded-2xl shadow-card w-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {services.map((service, si) => (
        <Section key={service.slug} className={si % 2 === 0 ? "" : "bg-card"}>
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl md:text-3xl font-heading font-bold">{service.title}</h2>
              <Link to={`/services/${service.slug}`} className="text-primary text-sm font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
                Details <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {service.plans.map((plan, i) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`p-6 rounded-xl relative ${
                    plan.popular
                      ? "bg-primary/5 border-2 border-primary shadow-glow"
                      : "bg-background border border-border shadow-card"
                  }`}
                >
                  {plan.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-gradient-primary text-primary-foreground text-xs font-semibold rounded-full">
                      Popular
                    </span>
                  )}
                  <h3 className="text-lg font-heading font-semibold text-foreground">{plan.name}</h3>
                  <div className="text-2xl font-heading font-bold text-primary mt-2 mb-1">{plan.price}</div>
                  <p className="text-xs text-muted-foreground mb-4">{plan.description}</p>
                  <ul className="space-y-2 mb-6">
                    {plan.features.slice(0, 5).map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check className="w-3.5 h-3.5 text-primary flex-shrink-0" /> {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`block text-center py-2.5 rounded-lg font-semibold text-sm transition-colors ${
                      plan.popular
                        ? "bg-gradient-primary text-primary-foreground hover:opacity-90"
                        : "bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground"
                    }`}
                  >
                    Get Started
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>
      ))}
    </div>
  );
};

export default Pricing;
