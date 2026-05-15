import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import Section from "@/components/shared/Section";
import ContactForm from "@/components/shared/ContactForm";
import { breadcrumbSchema, localBusinessSchema, organizationSchema, useSEO, websiteSchema } from "@/lib/seo";

const contactInfo = [
  { icon: Mail, label: "Email", value: "info@codenclicksit.in", href: "mailto:info@codenclicksit.in" },
  { icon: Phone, label: "Phone", value: "+91 99039 60407", href: "tel:+919903960407" },
  { icon: MapPin, label: "Locations", value: "India" },
  { icon: Clock, label: "Response Time", value: "Within 24 hours" },
];

const Contact = () => {
  useSEO({
    title: "Contact CodeNClicks IT Solutions | Get a Web Development Quote",
    description:
      "Contact CodeNClicks IT Solutions for web development, SaaS, CRM, ecommerce, hotel software, UI/UX, SEO, and digital marketing projects. Get a free consultation within 24 hours.",
    path: "/contact",
    keywords: ["contact web development company", "web development quote India", "hire CodeNClicks"],
    jsonLd: [
      organizationSchema(),
      localBusinessSchema(),
      websiteSchema(),
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Contact", path: "/contact" },
      ]),
    ],
  });

  return (
    <div className="pt-20">
      <section className="py-20 lg:py-32 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
              <span className="text-primary text-sm font-semibold tracking-wider uppercase">Contact Us</span>
              <h1 className="text-4xl md:text-6xl font-heading font-bold mt-3 mb-6">
                Get a Clear Quote for Your <span className="text-gradient">Website or Software Project</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Tell us what you want to build. We will review your goals, timeline, and budget, then respond within 24 hours with practical next steps.
              </p>
              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
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
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}>
              <img
                src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=600&h=400&fit=crop"
                alt="Contact CodeNClicks IT Solutions for web development and software projects"
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Sidebar */}
            <div className="space-y-6">
              <div className="p-6 bg-card border border-border rounded-xl shadow-card">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                  <MessageCircle className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-2">Prefer a Call?</h3>
                <p className="text-sm text-muted-foreground mb-4">Book a 30-minute free consultation directly on our calendar.</p>
                <a
                  href="https://calendly.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-primary text-primary-foreground font-semibold rounded-lg text-sm hover:opacity-90 transition-opacity shadow-glow"
                >
                  Book a Call
                </a>
              </div>

              <div className="p-6 bg-primary/5 border border-primary/20 rounded-xl">
                <h3 className="text-lg font-heading font-semibold text-foreground mb-2">What Happens Next?</h3>
                <ol className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold flex-shrink-0">1</span>
                    We review your requirements within 24 hours
                  </li>
                  <li className="flex gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold flex-shrink-0">2</span>
                    Schedule a discovery call to understand your vision
                  </li>
                  <li className="flex gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold flex-shrink-0">3</span>
                    Deliver a detailed proposal with timeline & pricing
                  </li>
                </ol>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-heading font-bold text-foreground mb-6">Send Us a Message</h2>
              <ContactForm variant="consultation" />
            </div>
          </div>
        </div>
      </Section>

      {/* Map */}
      <Section className="bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-2xl font-heading font-bold mb-8">Our Locations</h2>
          <div className="rounded-xl overflow-hidden border border-border h-[400px] shadow-card">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1300.7380490251803!2d88.39128734069645!3d22.763793602439925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89b4a15f7a4a9%3A0x12523996fd359acf!2sCodeNClicks%20IT%20Solutions!5e0!3m2!1sen!2sin!4v1774939578634!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
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
