import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import Section from "@/components/shared/Section";
import ContactForm from "@/components/shared/ContactForm";
import Link from "next/link";

import { organizationSchema, localBusinessSchema, websiteSchema, breadcrumbSchema } from "@/lib/seo";
import { Metadata } from "next";

const contactInfo = [
  { icon: Mail, label: "Email", value: "info@codenclicksit.in", href: "mailto:info@codenclicksit.in" },
  { icon: Phone, label: "Phone", value: "+91 99039 60407", href: "tel:+919903960407" },
  { icon: MapPin, label: "Locations", value: "India" },
  { icon: Clock, label: "Response Time", value: "Within 24 hours" },
];

export const metadata: Metadata = {
  title: "Contact CodeNClicks IT Solutions | Free Project Quote",
  description: "Contact CodeNClicks for custom web development, SaaS platforms, CRM systems, and digital marketing. Get a free technical consultation and quote within 24 hours.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact CodeNClicks IT Solutions | Free Project Quote",
    description: "Contact CodeNClicks for custom web development, SaaS platforms, CRM systems, and digital marketing. Get a free technical consultation and quote within 24 hours.",
    url: "https://codenclicksit.in/contact",
    type: "website",
    siteName: "CodeNClicks IT Solutions",
    images: [
      {
        url: "https://codenclicksit.in/Codenclicks_white_bg_PNG.png",
        width: 1200,
        height: 630,
        alt: "CodeNClicks IT Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact CodeNClicks IT Solutions | Free Project Quote",
    description: "Contact CodeNClicks for custom web development, SaaS platforms, CRM systems, and digital marketing. Get a free technical consultation and quote within 24 hours.",
    images: ["https://codenclicksit.in/Codenclicks_white_bg_PNG.png"],
  },
};

export default function ContactPage() {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema(),
      localBusinessSchema(),
      websiteSchema(),
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Contact", path: "/contact" },
      ]),
    ]
  };

  return (
    <div className="bg-white text-brand-graphite">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />

      {/* Hero */}
      <section className="py-16 lg:py-28 border-b-2 border-brand-graphite bg-brand-mist">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-brand-blue text-sm font-mono font-bold tracking-wider uppercase">Contact Us</span>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-brand-graphite leading-none">
                LET'S BUILD <span className="text-brand-blue">SOMETHING.</span>
              </h1>
              <p className="text-lg md:text-xl text-brand-graphite/80 leading-relaxed font-sans max-w-xl">
                Tell us what you want to build. Learn more <Link href="/about" className="text-brand-blue hover:underline font-bold">about our company</Link> or explore our full suite of <Link href="/services" className="text-brand-blue hover:underline font-bold">web & software services</Link> to get started.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-white border-2 border-brand-graphite flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-brand-blue" />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-brand-graphite/50 uppercase">{item.label}</div>
                      {item.href ? (
                        <a href={item.href} className="text-sm font-heading font-bold text-brand-graphite hover:text-brand-blue transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <div className="text-sm font-heading font-bold text-brand-graphite">{item.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[380px] aspect-[4/3] rounded-[32px] overflow-hidden border-4 border-brand-graphite shadow-flat">
                <img
                  src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=600&h=400&fit=crop"
                  alt="Contact CodeNClicks IT Solutions - Request a Custom Web Development or Software Project Quote"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form and info */}
      <Section className="bg-white border-b-2 border-brand-graphite">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              <div className="p-8 bg-brand-mist border-2 border-brand-graphite rounded-[24px] shadow-premium hover:shadow-flat transition-shadow duration-300">
                <div className="w-10 h-10 bg-white border-2 border-brand-graphite rounded-lg flex items-center justify-center mb-4">
                  <MessageCircle className="w-5 h-5 text-brand-blue" />
                </div>
                <h3 className="text-lg font-heading font-bold text-brand-graphite mb-2">Prefer a Call?</h3>
                <p className="text-xs text-brand-graphite/70 leading-relaxed mb-6">
                  Book a 30-minute free consultation call directly on our calendar.
                </p>
                <a
                  href="https://calendly.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-brand-blue text-white font-mono font-bold text-xs rounded-full hover:bg-brand-blue/90 transition-colors"
                >
                  Book Callback
                </a>
              </div>

              <div className="p-8 bg-brand-lime/10 border-2 border-brand-graphite rounded-[24px]">
                <h3 className="text-lg font-heading font-bold text-brand-graphite mb-4">Next Steps</h3>
                <ol className="space-y-4 text-xs font-mono text-brand-graphite/70">
                  <li className="flex gap-3">
                    <span className="w-5 h-5 rounded-full bg-brand-graphite text-white flex items-center justify-center text-[10px] font-bold flex-shrink-0">1</span>
                    We review scope in 24h.
                  </li>
                  <li className="flex gap-3">
                    <span className="w-5 h-5 rounded-full bg-brand-graphite text-white flex items-center justify-center text-[10px] font-bold flex-shrink-0">2</span>
                    Schedule discovery call.
                  </li>
                  <li className="flex gap-3">
                    <span className="w-5 h-5 rounded-full bg-brand-graphite text-white flex items-center justify-center text-[10px] font-bold flex-shrink-0">3</span>
                    Deliver detailed proposal.
                  </li>
                </ol>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-8 bg-brand-mist p-8 border-2 border-brand-graphite rounded-[32px] shadow-premium">
              <h2 className="text-2xl font-heading font-bold text-brand-graphite mb-6">Send Us a Message</h2>
              <ContactForm variant="consultation" />
            </div>
          </div>
        </div>
      </Section>

      {/* Map iframe */}
      <Section className="bg-brand-mist">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-heading font-bold text-brand-graphite mb-8">Our Location</h2>
          <div className="rounded-[32px] overflow-hidden border-4 border-brand-graphite h-[400px] shadow-flat bg-white">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1300.7380490251803!2d88.39128734069645!3d22.763793602439925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89b4a15f7a4a9%3A0x12523996fd359acf!2sCodeNClicks%20IT%20Solutions!5e0!3m2!1sen!2sin!4v1774939578634!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="CodeNClicks Location Map"
            />
          </div>
        </div>
      </Section>
    </div>
  );
}
