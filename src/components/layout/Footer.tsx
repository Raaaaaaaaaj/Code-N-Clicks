import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

const footerLinks = {
  Services: [
    { label: "Web Development", href: "/services/web-development" },
    { label: "Web Designing", href: "/services/web-designing" },
    { label: "Custom Software", href: "/services/custom-software-development" },
    { label: "E-commerce", href: "/services/ecommerce-development" },
    { label: "Digital Marketing", href: "/services/digital-marketing" },
    { label: "SEO", href: "/services/seo" },
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
    { label: "Contact", href: "/contact" },
    { label: "Get a Quote", href: "/contact" },
    { label: "Book Consultation", href: "/contact" },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <span className="text-2xl font-heading font-bold text-gradient">CodeNClicks</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-sm">
              Premium digital solutions that transform businesses. We combine
              cutting-edge technology with strategic thinking to deliver results
              that move the needle.
            </p>
            <div className="space-y-3">
              <a href="mailto:contact@codenclicksit.in" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-4 h-4" /> contact@codenclicksit.in
              </a>
              <a href="tel:+919876543210" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Phone className="w-4 h-4" /> +91 98765 43210
              </a>
              <p className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" /> India • United States • United Kingdom
              </p>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-heading font-semibold text-foreground mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 group"
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
      <div className="border-t border-border">
        <div className="container mx-auto px-4 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} CodeNClicks IT Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/contact" className="text-xs text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/contact" className="text-xs text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
