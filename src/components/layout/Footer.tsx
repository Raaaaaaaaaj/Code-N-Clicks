import Link from "next/link";
import { Mail, Phone, MapPin, ArrowUpRight, Linkedin, Twitter, Instagram, Facebook } from "lucide-react";

const footerLinks = {
  Services: [
    { label: "Custom Software Development", href: "/services/custom-software-development" },
    { label: "Website Development", href: "/services/web-development" },
    { label: "CRM Development", href: "/services/crm-development" },
    { label: "SEO Services", href: "/services/seo" },
    { label: "Digital Marketing", href: "/services/digital-marketing" },
    // { label: "Mobile App Development", href: "/services/mobile-app-development" },
    // { label: "UI/UX Design", href: "/services/ui-ux-design" },
  ],
  Industries: [
    { label: "Healthcare", href: "/industries/healthcare" },
    { label: "Hospitality & Hotels", href: "/industries/hospitality" },
    { label: "Education", href: "/industries/education" },
    { label: "E-commerce", href: "/industries/ecommerce" },
    { label: "Startups & SMEs", href: "/industries/startups" },
    { label: "Corporate Enterprises", href: "/industries/corporate" },
    { label: "Agencies", href: "/industries/agencies" },
  ],
  Locations: [
    { label: "Kolkata", href: "/locations/kolkata" },
    { label: "Mumbai", href: "/locations/mumbai" },
    { label: "Delhi", href: "/locations/delhi" },
    { label: "Bangalore", href: "/locations/bangalore" },
    { label: "Chennai", href: "/locations/chennai" },
    { label: "Hyderabad", href: "/locations/hyderabad" },
  ],
  Resources: [
    { label: "Blog", href: "/blog" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Pricing", href: "/pricing" },
    { label: "Reviews", href: "/reviews" },
    { label: "Contact Us", href: "/contact" },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-brand-graphite text-white">
      <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2 mb-4">
              <img
                src="/logo-footer.png"
                alt="Code N Clicks IT Solutions"
                title="Code N Clicks IT Solutions"
                className="h-16 w-auto object-contain"
              />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-sm">
              Code N Clicks IT Solutions builds high-performance websites, custom software, CRM systems, and enterprise digital solutions. We combine engineering excellence with technical SEO to drive automation and long-term business growth.
            </p>
            <div className="space-y-3 mb-6">
              <a href="mailto:info@codenclicksit.in" className="flex items-center gap-3 text-sm text-white/60 hover:text-primary transition-colors">
                <Mail className="w-4 h-4" /> info@codenclicksit.in
              </a>
              <a href="tel:+919903960407" className="flex items-center gap-3 text-sm text-white/60 hover:text-primary transition-colors">
                <Phone className="w-4 h-4" /> +91 99039 60407
              </a>
              <p className="flex items-center gap-3 text-sm text-white/60">
                <MapPin className="w-4 h-4" /> Kolkata, India
              </p>
            </div>
            <div className="flex items-center gap-3">
              <a href="https://www.linkedin.com/company/code-n-clicks-it-solutions/posts/?feedView=all" target="_blank" rel="noopener noreferrer" aria-label="CodeNClicks on LinkedIn" className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61574900357385" target="_blank" rel="noopener noreferrer" aria-label="CodeNClicks on Facebook" className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/code.n.clicks/" target="_blank" rel="noopener noreferrer" aria-label="CodeNClicks on Instagram" className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-4 h-4 animate-none" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-heading font-semibold text-white mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 hover:text-primary transition-colors inline-flex items-center gap-1 group"
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
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            Copyright {new Date().getFullYear()} Code N Clicks IT Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/contact" className="text-xs text-white/40 hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/contact" className="text-xs text-white/40 hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
