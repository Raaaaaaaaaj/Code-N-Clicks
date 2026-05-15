import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ArrowUpRight, Linkedin, Twitter, Instagram } from "lucide-react";

const footerLinks = {
  Services: [
    { label: "Web Development", href: "/services/web-development" },
    { label: "Web Designing", href: "/services/web-designing" },
    { label: "Custom Software", href: "/services/custom-software-development" },
    { label: "E-commerce", href: "/services/ecommerce-development" },
    { label: "CRM Development", href: "/services/crm-development" },
    { label: "Digital Marketing", href: "/services/digital-marketing" },
    { label: "SEO", href: "/services/seo" },
  ],
  Solutions: [
    { label: "Web Development India", href: "/web-development-company-india" },
    { label: "SaaS Development", href: "/saas-development-company" },
    { label: "Startup Websites", href: "/website-development-for-startups" },
    { label: "Hotel Systems", href: "/hotel-management-system-development-company" },
    { label: "React Development", href: "/react-development-company" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Technologies", href: "/technologies" },
    { label: "Industries", href: "/industries" },
    { label: "Pricing", href: "/pricing" },
    { label: "Reviews", href: "/reviews" },
  ],
  Resources: [
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
    { label: "Get a Quote", href: "/contact" },
    { label: "Book Consultation", href: "/contact" },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-bold text-sm">C</span>
              </div>
              <span className="text-2xl font-heading font-bold text-background">
                Code N <span className="text-primary">Clicks</span>
              </span>
            </Link>
            <p className="text-background/60 text-sm leading-relaxed mb-6 max-w-sm">
              CodeNClicks IT Solutions builds SEO-friendly websites, custom software, SaaS products, CRM systems, ecommerce stores, and digital growth campaigns for ambitious businesses in India and global markets.
            </p>
            <div className="space-y-3 mb-6">
              <a href="mailto:info@codenclicksit.in" className="flex items-center gap-3 text-sm text-background/60 hover:text-primary transition-colors">
                <Mail className="w-4 h-4" /> info@codenclicksit.in
              </a>
              <a href="tel:+919903960407" className="flex items-center gap-3 text-sm text-background/60 hover:text-primary transition-colors">
                <Phone className="w-4 h-4" /> +91 99039 60407
              </a>
              <p className="flex items-center gap-3 text-sm text-background/60">
                <MapPin className="w-4 h-4" /> India, United States, United Kingdom
              </p>
            </div>
            <div className="flex items-center gap-3">
              <a href="https://www.linkedin.com/company/codenclicks-it-solutions" aria-label="CodeNClicks on LinkedIn" className="w-9 h-9 rounded-lg bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://x.com/codenclicks" aria-label="CodeNClicks on X" className="w-9 h-9 rounded-lg bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/codenclicks" aria-label="CodeNClicks on Instagram" className="w-9 h-9 rounded-lg bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-heading font-semibold text-background mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-background/60 hover:text-primary transition-colors inline-flex items-center gap-1 group"
                    >
                      {link.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-background/40">
            Copyright {new Date().getFullYear()} CodeNClicks IT Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/contact" className="text-xs text-background/40 hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/contact" className="text-xs text-background/40 hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
