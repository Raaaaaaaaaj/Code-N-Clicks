"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  Globe,
  Code,
  Palette,
  ShoppingCart,
  BarChart3,
  Search,
  Megaphone,
  Smartphone,
  Database,
  Layers,
  PenTool,
  Hotel,
  CalendarCheck,
  Cog,
  MapPin,
  ArrowRight,
  Sparkles,
  Monitor,
  Building2,
  Users,
  BookOpen,
  Star,
  CreditCard,
  Mail,
  Info,
} from "lucide-react";

/* ─────────────────────────────────────────────────────
   DATA: Services organised into groups with icons
   ───────────────────────────────────────────────────── */

const serviceGroups = [
  {
    title: "Development",
    items: [
      { label: "Web Development", href: "/services/web-development", icon: Code, desc: "Next.js, Angular, Spring Boot, .NET" },
      { label: "Custom Software", href: "/services/custom-software-development", icon: Layers, desc: "Java, Python, C# enterprise systems" },
      { label: "E-commerce", href: "/services/ecommerce-development", icon: ShoppingCart, desc: "Scalable online stores & checkouts" },
      { label: "Mobile Apps", href: "/services/mobile-app-development", icon: Smartphone, desc: "iOS & Android cross-platform" },
    ],
  },
  {
    title: "Enterprise",
    items: [
      { label: "CRM Development", href: "/services/crm-development", icon: Database, desc: "Zero-fee custom sales pipelines" },
      { label: "ERP Systems", href: "/services/erp-development", icon: Cog, desc: "Inventory, procurement & finance" },
      { label: "Business Automation", href: "/services/business-automation", icon: Sparkles, desc: "Workflow bots & API webhooks" },
      { label: "SaaS Development", href: "/saas-development-company", icon: Monitor, desc: "Multi-tenant cloud platforms" },
    ],
  },
  {
    title: "Design & Growth",
    items: [
      { label: "Web Designing", href: "/services/web-designing", icon: Palette, desc: "Figma prototypes & design systems" },
      { label: "UI/UX Design", href: "/services/ui-ux-design", icon: PenTool, desc: "Research-driven interfaces" },
      { label: "Digital Marketing", href: "/services/digital-marketing", icon: Megaphone, desc: "Multi-channel growth campaigns" },
      { label: "SEO", href: "/services/seo", icon: Search, desc: "Technical & local SEO audits" },
    ],
  },
  {
    title: "Specialised",
    items: [
      { label: "Google & Meta Ads", href: "/services/google-meta-ads", icon: BarChart3, desc: "PPC & paid social campaigns" },
      { label: "Hotel Systems", href: "/hotel-management-system-development-company", icon: Hotel, desc: "PMS, booking & channel mgmt" },
      { label: "Booking Engines", href: "/services/booking-engine-development", icon: CalendarCheck, desc: "Direct zero-commission bookings" },
      { label: "Startup Websites", href: "/website-development-for-startups", icon: Building2, desc: "MVP launches in 2-3 weeks" },
    ],
  },
];

const featuredService = {
  title: "React Development Company",
  href: "/react-development-company",
  desc: "Enterprise-grade React, Next.js & Angular engineering with TypeScript, Spring Boot APIs, and cloud-native deployment.",
  badge: "Popular",
};

/* ─────────────────────────────────────────────────────
   DATA: Locations organised by region
   ───────────────────────────────────────────────────── */

const locationRegions = [
  {
    region: "West & Central",
    cities: [
      { name: "Mumbai", slug: "mumbai", state: "MH" },
      { name: "Pune", slug: "pune", state: "MH" },
      { name: "Ahmedabad", slug: "ahmedabad", state: "GJ" },
      { name: "Surat", slug: "surat", state: "GJ" },
      { name: "Nagpur", slug: "nagpur", state: "MH" },
      { name: "Indore", slug: "indore", state: "MP" },
      { name: "Bhopal", slug: "bhopal", state: "MP" },
    ],
  },
  {
    region: "South India",
    cities: [
      { name: "Bengaluru", slug: "bengaluru", state: "KA" },
      { name: "Hyderabad", slug: "hyderabad", state: "TS" },
      { name: "Chennai", slug: "chennai", state: "TN" },
      { name: "Kochi", slug: "kochi", state: "KL" },
      { name: "Coimbatore", slug: "coimbatore", state: "TN" },
      { name: "Visakhapatnam", slug: "visakhapatnam", state: "AP" },
    ],
  },
  {
    region: "North & East",
    cities: [
      { name: "Delhi", slug: "delhi", state: "DL" },
      { name: "Kolkata", slug: "kolkata", state: "WB" },
      { name: "Jaipur", slug: "jaipur", state: "RJ" },
      { name: "Lucknow", slug: "lucknow", state: "UP" },
      { name: "Patna", slug: "patna", state: "BR" },
      { name: "Chandigarh", slug: "chandigarh", state: "CH" },
      { name: "Bhubaneswar", slug: "bhubaneswar", state: "OD" },
    ],
  },
];

/* ─────────────────────────────────────────────────────
   DATA: Top-level nav items
   ───────────────────────────────────────────────────── */

const companyLinks = [
  { label: "About Us", href: "/about", icon: Info, desc: "Our story, mission & values" },
  { label: "Blog", href: "/blog", icon: BookOpen, desc: "Insights, guides & updates" },
  { label: "Pricing", href: "/pricing", icon: CreditCard, desc: "Transparent project pricing" },
  { label: "Reviews", href: "/reviews", icon: Star, desc: "Client testimonials & ratings" },
  { label: "Contact", href: "/contact", icon: Mail, desc: "Get in touch with our team" },
];

const simpleLinks = [
  { label: "Home", href: "/" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Industries", href: "/industries" },
  { label: "Technologies", href: "/technologies" },
];

/* ─────────────────────────────────────────────────────
   ANIMATION VARIANTS
   ───────────────────────────────────────────────────── */

const megaMenuVariants = {
  hidden: { opacity: 0, y: 8, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.25, ease: [0.23, 1, 0.32, 1] },
  },
  exit: {
    opacity: 0,
    y: 4,
    scale: 0.99,
    transition: { duration: 0.15 },
  },
};

const staggerContainer = {
  visible: {
    transition: { staggerChildren: 0.03 },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 6 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.25 } },
};

/* ─────────────────────────────────────────────────────
   COMPONENT: Navbar
   ───────────────────────────────────────────────────── */

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<"services" | "locations" | "company" | null>(null);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const pathname = usePathname();
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveMenu(null);
    setMobileSection(null);
  }, [pathname]);

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleMenuEnter = useCallback((menu: "services" | "locations" | "company") => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setActiveMenu(menu);
  }, []);

  const handleMenuLeave = useCallback(() => {
    closeTimeoutRef.current = setTimeout(() => setActiveMenu(null), 200);
  }, []);

  const handlePanelEnter = useCallback(() => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
  }, []);

  const toggleMobileSection = (section: string) => {
    setMobileSection((prev) => (prev === section ? null : section));
  };

  return (
    <motion.nav
      ref={menuRef}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/98 backdrop-blur-xl shadow-[0_1px_3px_rgba(0,0,0,0.08),0_8px_32px_rgba(0,0,0,0.04)] border-b border-gray-100"
          : "bg-white"
      }`}
    >
      {/* ── Top Info Bar ── */}
      <div className="bg-gradient-to-r from-[#1b4cd3] via-[#2857d9] to-[#1b4cd3]">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 py-1.5 flex flex-col lg:flex-row items-center justify-between gap-1.5 text-white">
          <div className="flex items-center gap-2 text-[13px] font-medium">
            <span>🇮🇳</span>
            <span>Udyam Registered MSME</span>
            <span className="hidden lg:block opacity-40">|</span>
            <span className="text-white/80 hidden sm:block font-mono text-xs">
              UDYAM-WB-14-0195352
            </span>
          </div>
          <div className="flex items-center gap-4 text-[13px] font-medium">
            <span className="animate-breathe bg-white/95 text-[#1b4cd3] px-3 py-0.5 rounded-full font-semibold shadow-sm text-xs">
              FREE Website Audit (Worth ₹4,999)
            </span>
            <span className="hidden sm:block opacity-40">|</span>
            <a
              href="tel:9903960407"
              className="hover:text-yellow-300 transition-colors font-semibold hidden sm:block"
            >
              +91 9903960407
            </a>
          </div>
        </div>
      </div>

      {/* ── Main Nav Bar ── */}
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-[68px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <img
              src="/logo-navbar.png"
              alt="Code N Clicks IT Solutions"
              title="Code N Clicks IT Solutions"
              className="h-10 lg:h-12 w-auto object-contain"
            />
          </Link>

          {/* ── Desktop Navigation ── */}
          <div className="hidden lg:flex items-center gap-0.5">
            {/* Home */}
            <Link
              href="/"
              className={`px-3 py-2 text-[13px] font-semibold rounded-lg transition-all duration-200 ${
                pathname === "/"
                  ? "text-[#1b4cd3] bg-blue-50/80"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              }`}
            >
              Home
            </Link>

            {/* ── Company Dropdown Trigger ── */}
            <div
              className="relative"
              onMouseEnter={() => handleMenuEnter("company")}
              onMouseLeave={handleMenuLeave}
            >
              <button
                className={`flex items-center gap-1 px-3 py-2 text-[13px] font-semibold rounded-lg transition-all duration-200 ${
                  activeMenu === "company" ||
                  companyLinks.some((l) => pathname === l.href)
                    ? "text-[#1b4cd3] bg-blue-50/80"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
                onClick={() => setActiveMenu(activeMenu === "company" ? null : "company")}
              >
                Company
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-300 ${
                    activeMenu === "company" ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Company dropdown panel (positioned inline, not full-width) */}
              <AnimatePresence>
                {activeMenu === "company" && (
                  <motion.div
                    variants={megaMenuVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    onMouseEnter={handlePanelEnter}
                    onMouseLeave={handleMenuLeave}
                    className="absolute top-full right-0 pt-2 z-50"
                  >
                    <div className="w-[300px] bg-white backdrop-blur-2xl border border-gray-100 rounded-2xl shadow-[0_12px_48px_-8px_rgba(0,0,0,0.12)] p-2">
                      {companyLinks.map((item) => {
                        const Icon = item.icon;
                        return (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="group/item flex items-start gap-3 p-3 rounded-xl transition-all duration-200 hover:bg-gradient-to-r hover:from-blue-50/80 hover:to-indigo-50/40"
                          >
                            <div className="w-8 h-8 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center shrink-0 transition-all duration-200 group-hover/item:bg-[#1b4cd3] group-hover/item:border-[#1b4cd3] group-hover/item:shadow-[0_2px_8px_rgba(27,76,211,0.3)]">
                              <Icon className="w-4 h-4 text-gray-500 transition-colors group-hover/item:text-white" />
                            </div>
                            <div className="min-w-0">
                              <span className="text-[13px] font-semibold text-gray-800 group-hover/item:text-[#1b4cd3] transition-colors block leading-tight">
                                {item.label}
                              </span>
                              <span className="text-[11px] text-gray-400 leading-tight block mt-0.5">
                                {item.desc}
                              </span>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* ── Services Mega Menu Trigger ── */}
            <div
              className="relative"
              onMouseEnter={() => handleMenuEnter("services")}
              onMouseLeave={handleMenuLeave}
            >
              <button
                className={`flex items-center gap-1 px-3 py-2 text-[13px] font-semibold rounded-lg transition-all duration-200 ${
                  activeMenu === "services" || pathname.startsWith("/services")
                    ? "text-[#1b4cd3] bg-blue-50/80"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
                onClick={() => setActiveMenu(activeMenu === "services" ? null : "services")}
              >
                Services
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-300 ${
                    activeMenu === "services" ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>

            {/* ── Locations Mega Menu Trigger ── */}
            <div
              className="relative"
              onMouseEnter={() => handleMenuEnter("locations")}
              onMouseLeave={handleMenuLeave}
            >
              <button
                className={`flex items-center gap-1 px-3 py-2 text-[13px] font-semibold rounded-lg transition-all duration-200 ${
                  activeMenu === "locations" || pathname.startsWith("/locations")
                    ? "text-[#1b4cd3] bg-blue-50/80"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
                onClick={() => setActiveMenu(activeMenu === "locations" ? null : "locations")}
              >
                Locations
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-300 ${
                    activeMenu === "locations" ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>

            {/* Simple middle links (Case Studies, Industries, Technologies) */}
            {simpleLinks.slice(1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 text-[13px] font-semibold rounded-lg transition-all duration-200 ${
                  pathname === link.href
                    ? "text-[#1b4cd3] bg-blue-50/80"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                {link.label}
              </Link>
            ))}

            
          </div>

          {/* CTA */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 text-[13px] font-bold bg-[#1b4cd3] text-white rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_4px_16px_rgba(27,76,211,0.4)] hover:-translate-y-[1px]"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#1b4cd3] via-[#3366e8] to-[#1b4cd3] bg-[length:200%_100%] group-hover:animate-[shimmer_1.5s_ease-in-out] transition-all" />
              <span className="relative z-10">Get a Quote</span>
              <ArrowRight className="w-3.5 h-3.5 relative z-10 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileOpen}
            className="lg:hidden p-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════
          MEGA MENU PANELS (Desktop)
          ═══════════════════════════════════════════════ */}

      <AnimatePresence>
        {activeMenu === "services" && (
          <motion.div
            variants={megaMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onMouseEnter={handlePanelEnter}
            onMouseLeave={handleMenuLeave}
            className="absolute top-full left-0 right-0 hidden lg:block"
          >
            {/* Backdrop blur layer */}
            <div className="bg-white backdrop-blur-2xl border-t border-gray-100 shadow-[0_24px_80px_-12px_rgba(0,0,0,0.12)]">
              <div className="mx-auto max-w-7xl px-8 py-8">
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                  className="grid grid-cols-12 gap-8"
                >
                  {/* ── Service Grid (4 columns) ── */}
                  <div className="col-span-9">
                    <div className="grid grid-cols-4 gap-6">
                      {serviceGroups.map((group) => (
                        <motion.div key={group.title} variants={staggerItem}>
                          <h4 className="text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400 mb-3 pl-1">
                            {group.title}
                          </h4>
                          <div className="space-y-0.5">
                            {group.items.map((item) => {
                              const Icon = item.icon;
                              return (
                                <Link
                                  key={item.href}
                                  href={item.href}
                                  className="group/item flex items-start gap-3 p-2.5 rounded-xl transition-all duration-200 hover:bg-gradient-to-r hover:from-blue-50/80 hover:to-indigo-50/40"
                                >
                                  <div className="w-8 h-8 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center shrink-0 transition-all duration-200 group-hover/item:bg-[#1b4cd3] group-hover/item:border-[#1b4cd3] group-hover/item:shadow-[0_2px_8px_rgba(27,76,211,0.3)]">
                                    <Icon className="w-4 h-4 text-gray-500 transition-colors group-hover/item:text-white" />
                                  </div>
                                  <div className="min-w-0">
                                    <span className="text-[13px] font-semibold text-gray-800 group-hover/item:text-[#1b4cd3] transition-colors block leading-tight">
                                      {item.label}
                                    </span>
                                    <span className="text-[11px] text-gray-400 leading-tight block mt-0.5">
                                      {item.desc}
                                    </span>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* ── Featured Sidebar ── */}
                  <motion.div variants={staggerItem} className="col-span-3">
                    <div className="h-full flex flex-col">
                      <h4 className="text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400 mb-3 pl-1">
                        Featured
                      </h4>
                      <div className="flex-1 rounded-2xl bg-gradient-to-br from-[#1b4cd3] via-[#2857d9] to-[#4f46e5] p-5 text-white relative overflow-hidden group/featured">
                        {/* Decorative circles */}
                        <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-white/[0.06]" />
                        <div className="absolute -bottom-12 -left-8 w-40 h-40 rounded-full bg-white/[0.04]" />

                        <div className="relative z-10 flex flex-col h-full">
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-white/20 rounded-full text-[10px] font-bold uppercase tracking-wider w-fit mb-3">
                            <Sparkles className="w-3 h-3" />
                            {featuredService.badge}
                          </span>
                          <h5 className="text-base font-bold leading-snug mb-2">
                            {featuredService.title}
                          </h5>
                          <p className="text-[11px] text-white/70 leading-relaxed mb-4 flex-1">
                            {featuredService.desc}
                          </p>
                          <Link
                            href={featuredService.href}
                            className="inline-flex items-center gap-1.5 text-xs font-bold text-white hover:gap-2.5 transition-all duration-200"
                          >
                            Learn more
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      </div>

                      {/* View All */}
                      <Link
                        href="/services"
                        className="mt-3 flex items-center justify-center gap-2 py-2.5 rounded-xl border border-gray-200 text-[12px] font-semibold text-gray-500 hover:text-[#1b4cd3] hover:border-[#1b4cd3]/30 hover:bg-blue-50/50 transition-all duration-200"
                      >
                        View all services
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {activeMenu === "locations" && (
          <motion.div
            variants={megaMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onMouseEnter={handlePanelEnter}
            onMouseLeave={handleMenuLeave}
            className="absolute top-full left-0 right-0 hidden lg:block"
          >
            <div className="bg-white backdrop-blur-2xl border-t border-gray-100 shadow-[0_24px_80px_-12px_rgba(0,0,0,0.12)]">
              <div className="mx-auto max-w-7xl px-8 py-8">
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                  className="grid grid-cols-12 gap-8"
                >
                  {/* ── Location Regions ── */}
                  <div className="col-span-9">
                    <div className="grid grid-cols-3 gap-8">
                      {locationRegions.map((region) => (
                        <motion.div key={region.region} variants={staggerItem}>
                          <h4 className="text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400 mb-3 pl-1 flex items-center gap-1.5">
                            <Globe className="w-3 h-3" />
                            {region.region}
                          </h4>
                          <div className="space-y-0.5">
                            {region.cities.map((city) => (
                              <Link
                                key={city.slug}
                                href={`/locations/${city.slug}`}
                                className="group/city flex items-center gap-3 p-2.5 rounded-xl transition-all duration-200 hover:bg-gradient-to-r hover:from-blue-50/80 hover:to-indigo-50/40"
                              >
                                <div className="w-8 h-8 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center shrink-0 transition-all duration-200 group-hover/city:bg-[#1b4cd3] group-hover/city:border-[#1b4cd3] group-hover/city:shadow-[0_2px_8px_rgba(27,76,211,0.3)]">
                                  <MapPin className="w-3.5 h-3.5 text-gray-400 transition-colors group-hover/city:text-white" />
                                </div>
                                <div className="flex items-center gap-2">
                                  <span className="text-[13px] font-semibold text-gray-800 group-hover/city:text-[#1b4cd3] transition-colors">
                                    {city.name}
                                  </span>
                                  <span className="text-[10px] font-mono font-medium text-gray-300 bg-gray-50 px-1.5 py-0.5 rounded">
                                    {city.state}
                                  </span>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* ── Locations CTA Sidebar ── */}
                  <motion.div variants={staggerItem} className="col-span-3">
                    <div className="h-full flex flex-col">
                      <h4 className="text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400 mb-3 pl-1">
                        Coverage
                      </h4>
                      <div className="flex-1 rounded-2xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-5 text-white relative overflow-hidden">
                        <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-white/[0.03]" />
                        <div className="absolute -bottom-12 -left-8 w-40 h-40 rounded-full bg-[#1b4cd3]/10" />

                        <div className="relative z-10 flex flex-col h-full">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 rounded-2xl bg-[#1b4cd3]/20 border border-[#1b4cd3]/30 flex items-center justify-center">
                              <Globe className="w-6 h-6 text-[#1b4cd3]" />
                            </div>
                            <div>
                              <div className="text-2xl font-black">20+</div>
                              <div className="text-[10px] text-white/50 font-semibold uppercase tracking-wider">
                                Cities Served
                              </div>
                            </div>
                          </div>

                          <div className="space-y-2.5 mb-4 flex-1">
                            {[
                              { label: "Pan-India Remote Delivery", value: "100%" },
                              { label: "Avg. Project Turnaround", value: "3–5 Weeks" },
                              { label: "Industries Covered", value: "12+" },
                            ].map((stat) => (
                              <div
                                key={stat.label}
                                className="flex items-center justify-between py-1.5 border-b border-white/[0.06] last:border-0"
                              >
                                <span className="text-[11px] text-white/50">{stat.label}</span>
                                <span className="text-[11px] font-bold text-white/90 font-mono">
                                  {stat.value}
                                </span>
                              </div>
                            ))}
                          </div>

                          <Link
                            href="/contact"
                            className="inline-flex items-center justify-center gap-1.5 py-2 rounded-lg bg-[#1b4cd3] text-xs font-bold text-white hover:bg-[#2857d9] transition-colors"
                          >
                            Find your city
                            <ArrowRight className="w-3 h-3" />
                          </Link>
                        </div>
                      </div>

                      <Link
                        href="/locations"
                        className="mt-3 flex items-center justify-center gap-2 py-2.5 rounded-xl border border-gray-200 text-[12px] font-semibold text-gray-500 hover:text-[#1b4cd3] hover:border-[#1b4cd3]/30 hover:bg-blue-50/50 transition-all duration-200"
                      >
                        View all locations
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ═══════════════════════════════════════════════
          MOBILE MENU
          ═══════════════════════════════════════════════ */}

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden max-h-[80vh] overflow-y-auto"
          >
            <div className="px-4 py-4 space-y-1">
              {/* Home */}
              <Link
                href="/"
                className={`block px-4 py-3 text-sm font-semibold rounded-xl transition-colors ${
                  pathname === "/"
                    ? "text-[#1b4cd3] bg-blue-50/80"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                Home
              </Link>

              {/* ── Mobile: Services Accordion ── */}
              <div>
                <button
                  onClick={() => toggleMobileSection("services")}
                  aria-expanded={mobileSection === "services"}
                  className="w-full flex items-center justify-between px-4 py-3 text-sm font-semibold text-gray-600 hover:bg-gray-50 rounded-xl transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <Code className="w-4 h-4 text-gray-400" />
                    Services
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                      mobileSection === "services" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {mobileSection === "services" && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pb-2 space-y-4 px-2">
                        {serviceGroups.map((group) => (
                          <div key={group.title}>
                            <h5 className="text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400 px-3 mb-1.5">
                              {group.title}
                            </h5>
                            {group.items.map((item) => {
                              const Icon = item.icon;
                              return (
                                <Link
                                  key={item.href}
                                  href={item.href}
                                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-600 hover:text-[#1b4cd3] hover:bg-blue-50/60 transition-colors"
                                >
                                  <Icon className="w-4 h-4 text-gray-400" />
                                  {item.label}
                                </Link>
                              );
                            })}
                          </div>
                        ))}
                        <Link
                          href="/services"
                          className="flex items-center gap-2 px-3 py-2.5 text-xs font-bold text-[#1b4cd3]"
                        >
                          View all services <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* ── Mobile: Locations Accordion ── */}
              <div>
                <button
                  onClick={() => toggleMobileSection("locations")}
                  aria-expanded={mobileSection === "locations"}
                  className="w-full flex items-center justify-between px-4 py-3 text-sm font-semibold text-gray-600 hover:bg-gray-50 rounded-xl transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-gray-400" />
                    Locations
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                      mobileSection === "locations" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {mobileSection === "locations" && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pb-2 space-y-4 px-2">
                        {locationRegions.map((region) => (
                          <div key={region.region}>
                            <h5 className="text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400 px-3 mb-1.5 flex items-center gap-1.5">
                              <Globe className="w-3 h-3" />
                              {region.region}
                            </h5>
                            <div className="grid grid-cols-2 gap-x-2">
                              {region.cities.map((city) => (
                                <Link
                                  key={city.slug}
                                  href={`/locations/${city.slug}`}
                                  className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-gray-600 hover:text-[#1b4cd3] hover:bg-blue-50/60 transition-colors"
                                >
                                  <MapPin className="w-3 h-3 text-gray-300" />
                                  {city.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                        <Link
                          href="/locations"
                          className="flex items-center gap-2 px-3 py-2.5 text-xs font-bold text-[#1b4cd3]"
                        >
                          View all locations <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Simple middle links (Case Studies, Industries, Technologies) */}
              {simpleLinks.slice(1).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-4 py-3 text-sm font-semibold rounded-xl transition-colors ${
                    pathname === link.href
                      ? "text-[#1b4cd3] bg-blue-50/80"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              {/* ── Mobile: Company Accordion ── */}
              <div>
                <button
                  onClick={() => toggleMobileSection("company")}
                  aria-expanded={mobileSection === "company"}
                  className="w-full flex items-center justify-between px-4 py-3 text-sm font-semibold text-gray-600 hover:bg-gray-50 rounded-xl transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-gray-400" />
                    Company
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                      mobileSection === "company" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {mobileSection === "company" && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pb-2 px-2">
                        {companyLinks.map((item) => {
                          const Icon = item.icon;
                          return (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-600 hover:text-[#1b4cd3] hover:bg-blue-50/60 transition-colors"
                            >
                              <Icon className="w-4 h-4 text-gray-400" />
                              {item.label}
                            </Link>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile CTA */}
              <Link
                href="/contact"
                className="block mx-2 mt-4 text-center px-5 py-3 text-sm font-bold bg-[#1b4cd3] text-white rounded-xl shadow-[0_4px_12px_rgba(27,76,211,0.3)]"
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
