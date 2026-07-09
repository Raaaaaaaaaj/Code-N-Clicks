"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Section from "@/components/shared/Section";

interface FAQ {
  q: string;
  a: string;
}

interface Props {
  faqs: FAQ[];
  serviceTitle: string;
}

export default function ServiceDetailClient({ faqs, serviceTitle }: Props) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <Section className="bg-brand-mist border-b-2 border-brand-graphite">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-brand-blue text-sm font-mono font-bold tracking-wider uppercase">FAQ</span>
            <h2 className="text-4xl font-extrabold text-brand-graphite leading-none">
              Frequently Asked Questions
            </h2>
            <p className="text-brand-graphite/70 text-sm leading-relaxed max-w-xs">
              Everything you need to know about our {serviceTitle.toLowerCase()} services. Can't find your answer? Reach out - we love chatting!
            </p>
            <Link href="/contact" className="inline-flex items-center gap-1.5 text-sm font-mono font-bold text-brand-blue hover:gap-2.5 transition-all">
              Ask Us Anything <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="lg:col-span-7 space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border-2 border-brand-graphite rounded-[20px] bg-white overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="text-sm font-heading font-bold text-brand-graphite pr-4">{faq.q}</span>
                  <span className="text-xl font-heading font-bold text-brand-blue select-none">
                    {openFaq === i ? "—" : "+"}
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 pt-1 border-t border-brand-graphite/10">
                    <p className="text-xs text-brand-graphite/70 leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
