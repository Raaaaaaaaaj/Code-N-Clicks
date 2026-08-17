"use client";

import React from "react";
import { faqList } from "@/data/technologiesData";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

export const TechFaqSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-brand-mist/50 border-b-2 border-brand-graphite">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-3">
            <span className="text-brand-blue text-xl font-mono font-bold tracking-widest uppercase">
              Got Questions?
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-brand-graphite tracking-tight">
              FREQUENTLY ASKED QUESTIONS
            </h2>
            <p className="text-brand-graphite/70 text-base font-sans max-w-xl mx-auto">
              Clear answers to help you navigate technology stack decisions for your software product.
            </p>
          </div>

          {/* Accordion */}
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqList.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-2 border-brand-graphite rounded-[20px] bg-white px-6 py-1 overflow-hidden shadow-sm hover:shadow-flat transition-shadow"
              >
                <AccordionTrigger className="text-left text-base md:text-lg font-heading font-bold text-brand-graphite hover:text-brand-blue hover:no-underline py-4">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm md:text-base text-brand-graphite/80 leading-relaxed font-sans pb-5 pt-1 border-t border-brand-graphite/10 mt-1">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
