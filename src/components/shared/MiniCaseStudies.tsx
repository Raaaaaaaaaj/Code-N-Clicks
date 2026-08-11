"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Section from "@/components/shared/Section";
import { useScrollStagger } from "@/hooks/useScrollAnimation";

const caseStudiesStories = [
  {
    title: "Anime Paradise Headless Storefront",
    category: "E-Commerce",
    challenge: "The client needed a fast, SEO-friendly ecommerce platform with a custom admin panel to manage products, inventory, and orders without relying on third-party ecommerce platforms.",
    built: "A fully custom ecommerce solution using Next.js, Node.js, Express.js, and MySQL, featuring a buyer-facing storefront and a secure owner dashboard for product, inventory, and order management.",
    techStack: "Next.js • Node.js • Express.js • MySQL • Tailwind CSS",
    objective: "Increase organic traffic, improve shopping experience, and simplify product management through a centralized admin portal.",
    impact: "Sub-2 second page load speed, SEO-optimized architecture, and a scalable ecommerce platform with complete ownership and zero platform dependency.",
    slug: "anime-paradise-ecommerce-platform"
  },
  {
    title: "Namita Textiles Erp & Inventory Management",
    category: "Supplier",
    challenge: "The business relied on manual processes and multiple spreadsheets, resulting in repetitive work, operational delays, and higher day-to-day management costs.",
    built: "A custom in-house business management system to digitize daily operations, centralize business data, and automate routine workflows across different departments.",
    techStack: "Angular • .NET • PostgreSQL • Websockets • AWS",
    objective: "Reduce operational costs, eliminate manual workflows, and improve overall business efficiency through process automation.",
    impact: "Significantly reduced manual effort, improved operational efficiency, and provided a centralized platform for managing day-to-day business activities.",
    slug: "namita-textiles-erp-inventory-management"
  },
  {
    title: "Custom Restaurant POS software for Tokefe Cafe",
    category: "Restaurant & Hospitality",
    challenge: "The café needed a modern POS system to manage multiple outlets, streamline order processing, reduce billing errors, and improve the customer ordering experience.",
    built: <>A custom <strong>multi-user, multi-outlet POS software</strong> with QR code ordering, centralized menu management, billing, order tracking, inventory management, and role-based access for staff and administrators.</>,
    techStack: "React • Node.js • Express.js • MySQL • QR Code Ordering • AWS",
    objective: "Digitize restaurant operations, speed up order processing, simplify outlet management, and deliver a seamless dine-in experience while reducing operational overhead.",
    impact: "Enabled centralized management across multiple outlets, faster order processing, contactless QR code ordering, and a scalable POS platform built to support future business growth.",
    slug: "tokefe-cafe-pos-software"
  },
  {
    title: "Custom Hotel Management System for Hotel Mahamaya",
    category: "Hospitality",
    challenge: "The hotel needed a unified platform to manage reservations, front desk operations, restaurant billing, and multiple branches while reducing manual work and improving the guest experience.",
    built: "A comprehensive Cloud Based Hotel Management System (HMS) with an integrated booking engine, website reservation system, POS module, real-time dashboards, reporting, and secure multi-user, multi-branch management from a single platform.",
    techStack: ".Net • Angular • Meta API • AWS",
    objective: "Streamline hotel operations, increase direct bookings, centralize business management, and provide actionable insights through real-time reports and dashboards.",
    impact: "Enabled centralized management across multiple hotel branches, simplified reservation and billing workflows, improved operational visibility with real-time dashboards, and reduced manual administrative effort.",
    slug: "hotel-mahamaya-hms"
  }
];

export default function MiniCaseStudies() {
  const casesContainerRef = useScrollStagger({ y: 35, stagger: 0.12 });

  return (
    <Section className="bg-brand-mist border-b-2 border-brand-graphite">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-3">
            <span className="text-brand-blue text-xl font-mono font-bold tracking-wider uppercase">Case Studies</span>
            <h2 className="text-4xl md:text-6xl font-extrabold text-brand-graphite leading-none">
              Proof in Production
            </h2>
          </div>
          <Link href="/case-studies" className="inline-flex items-center gap-1.5 text-sm font-mono font-bold text-brand-blue hover:gap-2.5 transition-all">
            View All Case Studies <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div ref={casesContainerRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {caseStudiesStories.map((cs) => (
            <div key={cs.slug} className="group flex flex-col p-8 bg-white border-2 border-brand-graphite rounded-[32px] shadow-premium hover:shadow-flat transition-shadow duration-300 justify-between min-h-[500px]">
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-4">
                  <span className="px-3.5 py-1 text-xs font-mono font-bold bg-brand-mist border border-brand-graphite rounded-full text-brand-graphite">{cs.category}</span>
                  <span className="text-[10px] font-mono text-brand-blue font-bold">★ Mini Success Story</span>
                </div>

                <Link href={`/case-studies/${cs.slug}`}>
                  <h3 className="text-2xl font-heading font-bold text-brand-graphite group-hover:text-brand-blue transition-colors leading-tight">
                    {cs.title}
                  </h3>
                </Link>

                <div className="space-y-3 pt-2">
                  <div>
                    <span className="text-[14px] font-mono uppercase tracking-wider text-brand-coral font-bold block">The Challenge</span>
                    <p className="text-sm text-brand-graphite/70 leading-relaxed mt-0.5">{cs.challenge}</p>
                  </div>
                  <div>
                    <span className="text-[14px] font-mono uppercase tracking-wider text-brand-blue font-bold block">What We Built</span>
                    <p className="text-sm text-brand-graphite/70 leading-relaxed mt-0.5">{cs.built}</p>
                  </div>
                  <div>
                    <span className="text-[14px] font-mono uppercase tracking-wider text-brand-blue font-bold block">Business Objective</span>
                    <p className="text-sm text-brand-graphite/70 leading-relaxed mt-0.5">{cs.objective}</p>
                  </div>
                  <div>
                    <span className="text-[14px] font-mono uppercase tracking-wider text-brand-graphite/60 font-bold block">Technology Stack</span>
                    <p className="text-sm font-mono text-brand-graphite/80 mt-0.5">{cs.techStack}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-brand-graphite/10">
                <span className="text-[10px] font-mono uppercase tracking-wider text-brand-lime bg-brand-graphite px-3 py-1 rounded font-bold inline-block">Measurable Outcome</span>
                <div className="text-l font-heading text-brand-graphite mt-2">
                  {cs.impact}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
