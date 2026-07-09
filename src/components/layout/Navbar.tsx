"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services", href: "/services",
    children: [
      { label: "Web Development", href: "/services/web-development" },
      { label: "Web Designing", href: "/services/web-designing" },
      { label: "Custom Software", href: "/services/custom-software-development" },
      { label: "E-commerce", href: "/services/ecommerce-development" },
      { label: "CRM Development", href: "/services/crm-development" },
      { label: "Digital Marketing", href: "/services/digital-marketing" },
      { label: "SEO", href: "/services/seo" },
      { label: "Google & Meta Ads", href: "/services/google-meta-ads" },
      { label: "Graphics Designing", href: "/services/graphics-designing" },
      { label: "SaaS Development", href: "/saas-development-company" },
      { label: "Startup Websites", href: "/website-development-for-startups" },
      { label: "Hotel Systems", href: "/hotel-management-system-development-company" },
      { label: "React Development", href: "/react-development-company" },
    ],
  },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Industries", href: "/industries" },
  { label: "Technologies", href: "/technologies" },
  { label: "Blog", href: "/blog" },
  { label: "Pricing", href: "/pricing" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-card border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl lg:text-2xl font-heading font-bold text-foreground">
              Code N <span className="text-primary">Clicks</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label} className="relative group">
                  <span
                    className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground cursor-pointer transition-colors"
                  >
                    {link.label}
                    <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" />
                  </span>
                  <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="bg-background border border-border rounded-xl shadow-card p-2 min-w-[220px]">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-primary hover:bg-secondary rounded-lg transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    pathname === link.href
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="inline-flex items-center px-5 py-2.5 text-sm font-semibold bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileOpen}
            className="lg:hidden p-2 text-foreground"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-t border-border overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 space-y-1">
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.label}>
                    <button
                      onClick={() => setServicesOpen(!servicesOpen)}
                      aria-expanded={servicesOpen}
                      className="w-full flex items-center justify-between px-3 py-3 text-sm font-medium text-muted-foreground"
                    >
                      {link.label}
                      <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                    </button>
                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: "auto" }}
                          exit={{ height: 0 }}
                          className="overflow-hidden pl-4"
                        >
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="block px-3 py-2.5 text-sm text-muted-foreground hover:text-primary"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-3 py-3 text-sm font-medium text-muted-foreground hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                )
              )}
              <Link
                href="/contact"
                className="block mx-3 mt-4 text-center px-5 py-3 text-sm font-semibold bg-primary text-primary-foreground rounded-lg"
              >
                Get a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
