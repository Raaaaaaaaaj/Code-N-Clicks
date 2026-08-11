import { MapPin, Phone, Mail, Clock, MessageCircle, ExternalLink } from "lucide-react";
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
    <div className="bg-white text-brand-graphite min-h-screen">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />

      {/* Hero */}
      <section className="relative py-16 lg:py-24 border-b border-brand-graphite/10 bg-gradient-to-b from-brand-mist/60 via-white to-white overflow-hidden">
        {/* Subtle background grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#11131808_1px,transparent_1px),linear-gradient(to_bottom,#11131808_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
        
        <div className="container relative mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Hero Left Column */}
            <div className="lg:col-span-7 space-y-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-blue/10 text-brand-blue text-xs font-mono font-bold tracking-wider uppercase border border-brand-blue/20">
                <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse" />
                Contact Us
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-brand-graphite leading-[1.08]">
                LET'S BUILD <span className="text-brand-blue relative inline-block">SOMETHING.<span className="absolute bottom-1 left-0 w-full h-[5px] bg-brand-blue/20 rounded-full" /></span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-brand-graphite/80 leading-relaxed font-sans max-w-2xl">
                Tell us what you want to build. Learn more <Link href="/about" className="text-brand-blue hover:underline font-bold transition-colors">about our company</Link> or explore our full suite of <Link href="/services" className="text-brand-blue hover:underline font-bold transition-colors">web & software services</Link> to get started.
              </p>

              {/* Interactive Contact Info Cluster Matrix */}
              <div className="pt-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-brand-graphite/10 rounded-2xl overflow-hidden p-px border border-brand-graphite/10 shadow-xs">
                  {contactInfo.map((item) => (
                    <div
                      key={item.label}
                      className="p-5 bg-white hover:bg-brand-mist/70 transition-all duration-300 group flex items-center gap-4"
                    >
                      <div className="w-11 h-11 rounded-xl bg-brand-mist border border-brand-graphite/10 group-hover:border-brand-blue group-hover:bg-brand-blue group-hover:text-white text-brand-blue flex items-center justify-center transition-all duration-300 flex-shrink-0 shadow-xs">
                        <item.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-[11px] font-mono text-brand-graphite/50 uppercase tracking-wider mb-0.5">{item.label}</div>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-sm font-heading font-bold text-brand-graphite group-hover:text-brand-blue transition-colors duration-200 truncate block"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <div className="text-sm font-heading font-bold text-brand-graphite truncate">{item.value}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Hero Right Column — Editorial Asymmetric Image Frame */}
            <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[420px]">
                {/* Tech Accent Decorative Backing */}
                <div className="absolute -top-3 -right-3 bottom-3 left-3 bg-brand-blue/10 rounded-[32px] border border-brand-blue/20 pointer-events-none" />
                <div className="relative p-2 bg-white rounded-[32px] border border-brand-graphite/15 shadow-xl">
                  <div className="relative w-full aspect-[4/3] rounded-[24px] overflow-hidden group">
                    <img
                      src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=600&h=400&fit=crop"
                      alt="Contact CodeNClicks IT Solutions - Request a Custom Web Development or Software Project Quote"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-graphite/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Status Pill Badge */}
                    <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/20 shadow-md flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-xs font-mono font-bold text-brand-graphite">24H Response Guaranteed</span>
                      </div>
                      <span className="text-[10px] font-mono text-brand-blue font-semibold uppercase">India HQ</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form and Guidance Section */}
      <Section className="bg-brand-mist/50 border-b border-brand-graphite/10 py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Sidebar Guidance */}
            <div className="lg:col-span-4 space-y-8">
              {/* Prefer a Call? Card */}
              <div className="group relative p-7 bg-white border border-brand-graphite/10 rounded-2xl shadow-sm hover:shadow-md hover:border-brand-blue/30 transition-all duration-300 overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-blue/5 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform duration-500" />
                <div className="w-11 h-11 bg-brand-blue/10 border border-brand-blue/20 rounded-xl flex items-center justify-center mb-5 text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all duration-300 shadow-xs">
                  <MessageCircle className="w-5.5 h-5.5 group-hover:rotate-12 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-heading font-bold text-brand-graphite mb-2">Prefer a Call?</h3>
                <p className="text-xs text-brand-graphite/70 leading-relaxed mb-6">
                  Book a 30-minute free consultation call directly on our calendar.
                </p>
                <a
                  href="https://calendly.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-brand-blue text-white font-mono font-bold text-xs rounded-xl hover:bg-brand-blue/90 shadow-xs hover:shadow-md shadow-brand-blue/20 active:scale-[0.98] transition-all duration-200"
                >
                  <span>Book Callback</span>
                  <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>

              {/* Next Steps Vertical Timeline */}
              <div className="p-7 bg-white border border-brand-graphite/10 rounded-2xl shadow-sm">
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-brand-graphite/10">
                  <h3 className="text-xl font-heading font-bold text-brand-graphite">Next Steps</h3>
                  <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-brand-lime/30 text-brand-graphite border border-brand-graphite/10 uppercase">
                    3 Steps
                  </span>
                </div>
                <ol className="relative space-y-6 text-xs font-sans text-brand-graphite/80 pl-2">
                  <div className="absolute left-[17px] top-3 bottom-3 w-0.5 bg-brand-graphite/10" />
                  <li className="relative flex items-start gap-4 group">
                    <span className="relative z-10 w-7 h-7 rounded-full bg-brand-graphite text-white flex items-center justify-center text-xs font-mono font-bold flex-shrink-0 shadow-xs group-hover:bg-brand-blue transition-colors duration-200">
                      1
                    </span>
                    <div className="pt-1">
                      <p className="font-heading font-bold text-sm text-brand-graphite">We review scope in 24h.</p>
                    </div>
                  </li>
                  <li className="relative flex items-start gap-4 group">
                    <span className="relative z-10 w-7 h-7 rounded-full bg-brand-graphite text-white flex items-center justify-center text-xs font-mono font-bold flex-shrink-0 shadow-xs group-hover:bg-brand-blue transition-colors duration-200">
                      2
                    </span>
                    <div className="pt-1">
                      <p className="font-heading font-bold text-sm text-brand-graphite">Schedule discovery call.</p>
                    </div>
                  </li>
                  <li className="relative flex items-start gap-4 group">
                    <span className="relative z-10 w-7 h-7 rounded-full bg-brand-graphite text-white flex items-center justify-center text-xs font-mono font-bold flex-shrink-0 shadow-xs group-hover:bg-brand-blue transition-colors duration-200">
                      3
                    </span>
                    <div className="pt-1">
                      <p className="font-heading font-bold text-sm text-brand-graphite">Deliver detailed proposal.</p>
                    </div>
                  </li>
                </ol>
              </div>
            </div>

            {/* Main Form Container */}
            <div className="lg:col-span-8 bg-white p-7 sm:p-10 border border-brand-graphite/10 rounded-3xl shadow-lg relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-blue via-brand-lime to-brand-blue" />
              <div className="mb-8">
                <div className="text-xs font-mono font-bold text-brand-blue uppercase tracking-wider mb-1">Direct Consultation</div>
                <h2 className="text-2xl sm:text-3xl font-heading font-bold text-brand-graphite">Send Us a Message</h2>
              </div>
              <ContactForm variant="consultation" />
            </div>
          </div>
        </div>
      </Section>

      {/* Map Section */}
      <Section className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-mono font-bold text-brand-blue uppercase tracking-wider">Global Headquarters</span>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-brand-graphite mt-1">Our Location</h2>
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-brand-mist border border-brand-graphite/10 rounded-full text-xs font-mono text-brand-graphite/70">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>India Base • Active Client Support</span>
            </div>
          </div>
          
          {/* Interactive Map Container with Enhanced Border & Shadow Hover Effect */}
          <div className="relative group transition-all duration-500 ease-out">
            {/* Ambient Background Glow Effect on Hover */}
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-blue via-brand-lime to-brand-blue rounded-[36px] opacity-0 group-hover:opacity-100 blur-sm transition-all duration-500 pointer-events-none" />
            
            {/* Outer Frame with Border, Lift & Dynamic Shadow */}
            <div className="relative rounded-[32px] p-2 bg-white border-2 border-brand-graphite/15 group-hover:border-brand-blue shadow-md group-hover:shadow-[0_20px_50px_rgba(13,108,252,0.2)] group-hover:-translate-y-1.5 transition-all duration-500 ease-out">
              
              {/* Inner Map Container */}
              <div className="relative rounded-[24px] overflow-hidden border border-brand-graphite/10 group-hover:border-brand-blue/30 h-[420px] bg-white transition-all duration-300">
                {/* Tech Corner Bracket Accents (illuminated on hover) */}
                <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-brand-blue opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-all duration-300 pointer-events-none z-20" />
                <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-brand-blue opacity-0 group-hover:opacity-100 group-hover:-translate-x-0.5 group-hover:translate-y-0.5 transition-all duration-300 pointer-events-none z-20" />
                <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-brand-blue opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 pointer-events-none z-20" />
                <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-brand-blue opacity-0 group-hover:opacity-100 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 pointer-events-none z-20" />

                {/* Top-Left Floating Info Badge */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-xl border border-brand-graphite/10 shadow-sm flex items-center gap-2.5 text-xs font-mono font-bold text-brand-graphite group-hover:border-brand-blue/30 group-hover:shadow-md transition-all duration-300 pointer-events-none z-10">
                  <MapPin className="w-4 h-4 text-brand-blue" />
                  <span>CodeNClicks IT Solutions • India</span>
                </div>

                {/* Bottom-Right Interactive Open Map Button */}
                <a
                  href="https://maps.google.com/?q=CodeNClicks+IT+Solutions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-4 right-4 bg-brand-graphite text-white px-4 py-2.5 rounded-xl text-xs font-mono font-bold flex items-center gap-2 shadow-lg group-hover:bg-brand-blue group-hover:scale-105 transition-all duration-300 z-10"
                  aria-label="Open location in Google Maps"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                </a>

                {/* Embedded Google Maps iframe */}
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
          </div>
        </div>
      </Section>
    </div>
  );
}
