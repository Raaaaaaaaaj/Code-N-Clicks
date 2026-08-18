"use client";

import { Link2, ArrowRight } from "lucide-react";
import Section from "@/components/shared/Section";

const integrationsRow1 = [
  "Gmail",
  "WhatsApp Business",
  "Meta Ads",
  "Google Ads",
  "Stripe",
  "Razorpay",
];

const integrationsRow2 = [
  "QuickBooks",
  "Zapier",
  "Slack",
  "Mailchimp",
  "AWS",
  "Twilio",
];

export default function CrmEcosystem() {
  return (
    <Section className="bg-white border-b-2 border-brand-graphite overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <span className="text-brand-blue text-xl font-mono font-bold tracking-wider uppercase">
            CRM INTEGRATIONS
          </span>

          <h2 className="text-4xl md:text-4xl font-extrabold text-brand-graphite leading-tight">
            Connect Your CRM With the{" "}
            <span className="bg-gradient-to-r from-brand-coral to-brand-blue bg-clip-text text-transparent">
              Tools You Already Use
            </span>
          </h2>

          <p className="text-brand-graphite/70 leading-relaxed font-sans max-w-2xl mx-auto">
            Your CRM should not become another disconnected system. Our CRM
            integration services connect customer data and business workflows
            with the communication, marketing, payment, accounting, and
            productivity tools your team already uses.
          </p>
        </div>
      </div>

      {/* Integration Marquee */}
      <div className="relative w-full overflow-hidden pb-12">
        {/* Edge Fade */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Row 1 */}
        <div className="relative overflow-hidden mb-5">
          <div className="crm-marquee-track flex w-max">
            {[...integrationsRow1, ...integrationsRow1].map(
              (integration, index) => (
                <div
                  key={`row-one-${index}`}
                  className="flex-shrink-0 px-2"
                >
                  <div className="inline-flex items-center justify-center min-w-[150px] sm:min-w-[180px] px-6 py-4 bg-brand-mist border-2 border-brand-graphite rounded-2xl text-base sm:text-lg font-bold text-brand-graphite shadow-sm">
                    {integration}
                  </div>
                </div>
              )
            )}
          </div>
        </div>

        {/* Row 2 */}
        <div className="relative overflow-hidden">
          <div className="crm-marquee-track-reverse flex w-max">
            {[...integrationsRow2, ...integrationsRow2].map(
              (integration, index) => (
                <div
                  key={`row-two-${index}`}
                  className="flex-shrink-0 px-2"
                >
                  <div className="inline-flex items-center justify-center min-w-[150px] sm:min-w-[180px] px-6 py-4 bg-brand-graphite text-white border-2 border-brand-graphite rounded-2xl text-base sm:text-lg font-bold shadow-sm">
                    {integration}
                  </div>
                </div>
              )
            )}
          </div>
        </div>

        {/* Marquee Animation */}
        <style jsx>{`
          .crm-marquee-track {
            animation: crm-marquee 28s linear infinite;
          }

          .crm-marquee-track-reverse {
            animation: crm-marquee-reverse 32s linear infinite;
          }

          @keyframes crm-marquee {
            0% {
              transform: translateX(0);
            }

            100% {
              transform: translateX(-50%);
            }
          }

          @keyframes crm-marquee-reverse {
            0% {
              transform: translateX(-50%);
            }

            100% {
              transform: translateX(0);
            }
          }

          .crm-marquee-track:hover,
          .crm-marquee-track-reverse:hover {
            animation-play-state: paused;
          }

          @media (prefers-reduced-motion: reduce) {
            .crm-marquee-track,
            .crm-marquee-track-reverse {
              animation: none;
            }
          }
        `}</style>
      </div>

      {/* Integration Categories */}
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto pb-12">
          <div className="text-center p-5 rounded-2xl border-2 border-brand-graphite/10 bg-brand-mist">
            <h3 className="font-bold text-brand-graphite mb-1">
              Communication
            </h3>
            <p className="text-sm text-brand-graphite/60">
              Email, WhatsApp, SMS & calls
            </p>
          </div>

          <div className="text-center p-5 rounded-2xl border-2 border-brand-graphite/10 bg-brand-mist">
            <h3 className="font-bold text-brand-graphite mb-1">
              Marketing
            </h3>
            <p className="text-sm text-brand-graphite/60">
              Ads, campaigns & lead sources
            </p>
          </div>

          <div className="text-center p-5 rounded-2xl border-2 border-brand-graphite/10 bg-brand-mist">
            <h3 className="font-bold text-brand-graphite mb-1">
              Payments
            </h3>
            <p className="text-sm text-brand-graphite/60">
              Payments, billing & transactions
            </p>
          </div>

          <div className="text-center p-5 rounded-2xl border-2 border-brand-graphite/10 bg-brand-mist">
            <h3 className="font-bold text-brand-graphite mb-1">
              Business Tools
            </h3>
            <p className="text-sm text-brand-graphite/60">
              ERP, accounting & productivity
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
          <span className="text-brand-graphite/60 text-sm font-sans">
            Need to connect your CRM with a custom system?
          </span>

          <a
            href="/contact"
            className="inline-flex items-center gap-2 text-brand-blue font-bold text-sm hover:gap-3 transition-all"
          >
            Discuss Your CRM Integration
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </Section>
  );
}