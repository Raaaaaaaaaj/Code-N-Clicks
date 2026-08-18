"use client";

import { useState } from "react";
import {
  Building2,
  Hotel,
  Briefcase,
  ShoppingCart,
  Factory,
  GraduationCap,
  Check,
} from "lucide-react";
import Section from "@/components/shared/Section";

const industries = [
  {
    id: "real-estate",
    icon: Building2,
    title: "Real Estate",
    description:
      "Manage property leads, buyers, sellers, brokers, site visits, and follow-ups from one custom CRM built around your real estate sales process.",
    features: [
      "Property & Lead Management",
      "Lead Assignment & Follow-ups",
      "Site Visit Scheduling",
      "Broker & Sales Tracking",
    ],
  },
  {
    id: "hospitality",
    icon: Hotel,
    title: "Hospitality",
    description:
      "Connect guest information, enquiries, bookings, sales activities, and customer communication with CRM workflows designed for hotels and hospitality businesses.",
    features: [
      "Guest Relationship Management",
      "Enquiry & Lead Tracking",
      "Booking & Customer Data",
      "Guest Follow-up Automation",
    ],
  },
  {
    id: "b2b-services",
    icon: Briefcase,
    title: "B2B & Professional Services",
    description:
      "Manage accounts, contacts, opportunities, proposals, client onboarding, and follow-ups through a CRM designed around your B2B sales cycle.",
    features: [
      "Account & Contact Management",
      "Opportunity Tracking",
      "Proposal & Contract Workflows",
      "Client Onboarding Automation",
    ],
  },
  {
    id: "ecommerce",
    icon: ShoppingCart,
    title: "E-commerce & Retail",
    description:
      "Bring customer profiles, orders, enquiries, sales activity, and repeat-customer data together to create a more connected customer management workflow.",
    features: [
      "Customer Profile Management",
      "Order & Customer Data",
      "B2B Sales Pipeline",
      "Customer Follow-up Automation",
    ],
  },
  {
    id: "manufacturing",
    icon: Factory,
    title: "Manufacturing",
    description:
      "Track business enquiries, distributors, accounts, quotations, sales opportunities, and customer relationships across longer B2B sales cycles.",
    features: [
      "Dealer & Account Management",
      "Quotation Tracking",
      "Sales Pipeline Management",
      "Customer Activity History",
    ],
  },
  {
    id: "education",
    icon: GraduationCap,
    title: "Education & Training",
    description:
      "Manage enquiries, prospects, admissions, communication, follow-ups, and student or learner relationships with workflows tailored to your organization.",
    features: [
      "Enquiry & Lead Management",
      "Admission Pipeline",
      "Follow-up Automation",
      "Communication Tracking",
    ],
  },
];

export default function CrmIndustrySolutions() {
  const [activeTab, setActiveTab] = useState(industries[0].id);

  const activeIndustry =
    industries.find((industry) => industry.id === activeTab) ||
    industries[0];

  return (
    <Section className="bg-white border-b-2 border-brand-graphite">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <span className="text-brand-blue text-xl font-mono font-bold tracking-wider uppercase">
            INDUSTRY-SPECIFIC CRM DEVELOPMENT
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-4xl font-extrabold text-brand-graphite leading-tight">
            Custom CRM Solutions for{" "}
            <span className="bg-gradient-to-r from-brand-blue to-brand-coral bg-clip-text text-transparent">
              Different Industries
            </span>
          </h2>

          <p className="text-brand-graphite/70 leading-relaxed font-sans max-w-2xl mx-auto">
            Every industry has different sales processes, customer journeys,
            and business workflows. Our custom CRM development approach lets
            you build the modules, automation, integrations, and dashboards
            your industry actually requires.
          </p>
        </div>

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
          {/* Industry Navigation */}
          <div className="flex md:flex-col overflow-x-auto md:overflow-visible gap-3 pb-4 md:pb-0 w-full md:w-1/3 hide-scrollbar">
            {industries.map((industry) => {
              const isActive = activeTab === industry.id;

              return (
                <button
                  key={industry.id}
                  onClick={() => setActiveTab(industry.id)}
                  aria-pressed={isActive}
                  className={`flex items-center gap-4 p-4 rounded-2xl border-2 transition-all text-left flex-shrink-0 md:w-full ${
                    isActive
                      ? "bg-brand-blue border-brand-graphite text-white shadow-flat-blue"
                      : "bg-brand-mist border-brand-graphite/20 text-brand-graphite hover:border-brand-graphite"
                  }`}
                >
                  <industry.icon
                    className={`w-6 h-6 flex-shrink-0 ${
                      isActive ? "text-brand-lime" : "text-brand-blue"
                    }`}
                  />

                  <span className="font-bold hidden sm:block whitespace-nowrap">
                    {industry.title}
                  </span>

                  <span className="font-bold sm:hidden">
                    {industry.title.split(" ")[0]}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Industry */}
          <div className="flex-1 min-w-0">
            <div
              key={activeIndustry.id}
              className="bg-white border-2 border-brand-graphite rounded-[32px] p-6 sm:p-8 lg:p-10 shadow-flat animate-fade-in"
            >
              {/* Industry Icon */}
              <div className="w-16 h-16 bg-brand-lime/20 rounded-2xl border border-brand-lime flex items-center justify-center mb-6">
                <activeIndustry.icon className="w-8 h-8 text-green-700" />
              </div>

              {/* Heading */}
              <h3 className="text-2xl sm:text-3xl font-bold text-brand-graphite mb-4">
                Custom CRM Development for {activeIndustry.title}
              </h3>

              {/* Description */}
              <p className="text-brand-graphite/70 font-sans text-lg mb-8 leading-relaxed">
                {activeIndustry.description}
              </p>

              {/* Features */}
              <div>
                <h4 className="font-mono font-bold text-brand-graphite text-sm uppercase tracking-wider mb-4">
                  CRM Capabilities
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {activeIndustry.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-start gap-3 p-4 bg-brand-mist rounded-xl border border-brand-graphite/10"
                    >
                      <Check className="w-5 h-5 text-brand-blue mt-0.5 flex-shrink-0" />

                      <span className="text-brand-graphite font-semibold">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contextual Bottom Line */}
              <div className="mt-8 pt-6 border-t border-brand-graphite/10">
                <p className="text-sm text-brand-graphite/60 leading-relaxed">
                  <strong className="text-brand-graphite">
                    Need a different workflow?
                  </strong>{" "}
                  Custom CRM software can be adapted to your team's process,
                  business rules, integrations, and reporting requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}