import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Section from "@/components/shared/Section";
import { services } from "@/data/services";

const Services = () => {
  return (
    <div className="pt-20">
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
              <span className="text-primary text-sm font-semibold tracking-wider uppercase">Our Services</span>
              <h1 className="text-4xl md:text-6xl font-heading font-bold mt-3 mb-6">
                End-to-End Digital <span className="text-gradient">Solutions</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From concept to deployment and beyond — we offer a full spectrum of digital services 
                designed to help your business grow. As young founders, we bring modern thinking and 
                cutting-edge tools to every project.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}>
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
                alt="Digital services dashboard and analytics"
                className="rounded-2xl shadow-card w-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <Section className="bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={`/services/${service.slug}`}
                    className="block h-full p-8 bg-background border border-border rounded-xl hover-lift group shadow-card"
                  >
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                      <Icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <h3 className="text-xl font-heading font-semibold text-foreground mb-3">{service.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{service.tagline}</p>
                    <ul className="space-y-2 mb-6">
                      {service.benefits.slice(0, 3).map((b) => (
                        <li key={b} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full" /> {b}
                        </li>
                      ))}
                    </ul>
                    <span className="inline-flex items-center gap-1 text-sm text-primary font-medium group-hover:gap-2 transition-all">
                      Learn More <ArrowRight className="w-3 h-3" />
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Services;
