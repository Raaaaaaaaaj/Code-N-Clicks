import Link from "next/link";
import { ArrowRight, Server, Users2, Cloud, CalendarCheck, ShoppingCart, Workflow } from "lucide-react";
import Section from "@/components/shared/Section";

const bentoItems = [
  {
    num: "01",
    title: "Business Management Systems",
    description: "Centralize operational workflows, staff activities, customer data, approvals and reporting in software designed around your business process.",
    keywords: ["business management software", "custom business software", "business process automation"],
    link: "/services/custom-software-development",
    linkText: "Explore Business Systems",
    icon: Server,
    colSpan: "lg:col-span-7",
    bgClass: "bg-white",
  },
  {
    num: "02",
    title: "CRM & Customer Platforms",
    description: "Build CRM systems that connect leads, customer records, communication, follow-ups, sales pipelines and reporting instead of keeping them scattered across separate tools.",
    keywords: ["custom CRM development", "CRM software development", "sales automation"],
    link: "/services/crm-development",
    linkText: "Explore CRM Solutions",
    icon: Users2,
    colSpan: "lg:col-span-5",
    bgClass: "bg-brand-mist/60",
  },
  {
    num: "03",
    title: "SaaS & Multi-Tenant Platforms",
    description: "Launch subscription-based SaaS products with multi-tenant architecture, role-based access, dashboards, integrations and scalable backend systems.",
    keywords: ["SaaS development", "SaaS application development", "multi-tenant SaaS"],
    link: "/saas-development-company",
    linkText: "Explore SaaS Architecture",
    icon: Cloud,
    colSpan: "lg:col-span-5",
    bgClass: "bg-brand-mist/60",
  },
  {
    num: "04",
    title: "Booking & Reservation Systems",
    description: "Automate availability, reservations, payments, customer communication and operational workflows for businesses that depend on bookings.",
    keywords: ["Hospitality", "Travel", "Events", "Service Businesses"],
    link: "/hotel-management-system-development-company",
    linkText: "Explore Booking Engines",
    icon: CalendarCheck,
    colSpan: "lg:col-span-7",
    bgClass: "bg-white",
  },
  {
    num: "05",
    title: "E-commerce Platforms",
    description: "Build storefronts and commerce systems connected to payments, inventory, orders, customer data, marketplaces and analytics.",
    keywords: ["ecommerce development", "custom ecommerce development", "ecommerce platform development"],
    link: "/services/ecommerce-development",
    linkText: "Explore E-commerce Systems",
    icon: ShoppingCart,
    colSpan: "lg:col-span-6",
    bgClass: "bg-white",
  },
  {
    num: "06",
    title: "Workflow Automation & Integrations",
    description: "Connect the tools your team already uses through APIs, webhooks, automation and custom integrations so information moves between systems without repetitive manual work.",
    keywords: ["workflow automation", "API integration", "business automation", "custom integrations"],
    link: "/services/custom-software-development",
    linkText: "Explore Integrations",
    icon: Workflow,
    colSpan: "lg:col-span-6",
    bgClass: "bg-brand-mist/60",
  },
];

export default function BentoSolutionsSection() {
  return (
    <Section className="bg-white border-b-2 border-brand-graphite">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="text-brand-blue text-xl font-mono font-bold tracking-wider uppercase">
            SOFTWARE CATEGORIES
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-graphite tracking-tight leading-tight">
            Solutions Designed for <br /> <span className="bg-gradient-to-r from-brand-blue via-indigo-600 to-brand-coral bg-clip-text text-transparent"> Industry-Specific Challenges</span>
          </h2>
          <p className="text-brand-graphite/75 leading-relaxed font-sans">
            We don't start with a fixed product and try to fit your business into it. We identify the operational problem first, then choose the right software architecture, integrations and user experience around it.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {bentoItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.num}
                className={`${item.colSpan} ${item.bgClass} border-2 border-brand-graphite rounded-[32px] p-8 shadow-premium hover:shadow-flat transition-all duration-300 flex flex-col justify-between group min-h-[300px]`}
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-brand-mist border-2 border-brand-graphite flex items-center justify-center group-hover:bg-brand-blue group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6 text-brand-blue group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-xs font-mono font-extrabold text-brand-blue bg-brand-mist px-3 py-1.5 rounded-full border border-brand-graphite/20">
                      {item.num}
                    </span>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold font-heading text-brand-graphite group-hover:text-brand-blue transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-brand-graphite/75 leading-relaxed font-sans">
                      {item.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {item.keywords.map((kw) => (
                      <span
                        key={kw}
                        className="px-2.5 py-1 text-[11px] font-mono font-semibold bg-white border border-brand-graphite/30 rounded-md text-brand-graphite/80"
                      >
                        {kw}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-brand-graphite/10 mt-6">
                  <Link
                    href={item.link}
                    className="inline-flex items-center gap-2 text-sm font-mono font-bold text-brand-blue hover:gap-3 transition-all"
                  >
                    {item.linkText} <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
