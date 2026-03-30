import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Section from "@/components/shared/Section";
import ContactForm from "@/components/shared/ContactForm";

const contactInfo = [
  { icon: Mail, label: "Email", value: "contact@codenclicksit.in", href: "mailto:contact@codenclicksit.in" },
  { icon: Phone, label: "Phone", value: "+91 98765 43210", href: "tel:+919876543210" },
  { icon: MapPin, label: "Locations", value: "India • United States • United Kingdom" },
  { icon: Clock, label: "Response Time", value: "Within 24 hours" },
];

const Contact = () => {
  return (
    <div className="pt-20">
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">Contact Us</span>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mt-3 mb-6">
              Let's Build Something <span className="text-gradient">Great Together</span>
            </h1>
            <p className="text-lg text-muted-foreground">Ready to start your project? Fill out the form and we'll get back to you within 24 hours with a detailed proposal.</p>
          </motion.div>
        </div>
      </section>

      <Section className="bg-card !pt-0">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Info */}
            <div className="space-y-6">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">{item.label}</div>
                    {item.href ? (
                      <a href={item.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <div className="text-sm text-muted-foreground">{item.value}</div>
                    )}
                  </div>
                </div>
              ))}

              {/* Calendly CTA */}
              <div className="p-6 bg-secondary rounded-xl mt-8">
                <h3 className="text-lg font-heading font-semibold text-foreground mb-2">Prefer a Call?</h3>
                <p className="text-sm text-muted-foreground mb-4">Book a 30-minute consultation directly on our calendar.</p>
                <a
                  href="https://calendly.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-primary text-primary-foreground font-semibold rounded-lg text-sm hover:opacity-90 transition-opacity"
                >
                  Book a Call
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <ContactForm variant="consultation" />
            </div>
          </div>
        </div>
      </Section>

      {/* Map */}
      <Section>
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-2xl font-heading font-bold mb-8">Our Locations</h2>
          <div className="rounded-xl overflow-hidden border border-border h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.5426695853237!2d72.50513!3d23.03764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDAyJzE1LjUiTiA3MsKwMzAnMTguNSJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="CodeNClicks Location"
            />
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Contact;
