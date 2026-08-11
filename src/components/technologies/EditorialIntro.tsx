import React from "react";

export const EditorialIntro: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-white border-b-2 border-brand-graphite relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-brand-mist border border-brand-graphite rounded-full text-xs font-mono font-bold text-brand-blue uppercase tracking-wider">
            Architectural Philosophy
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-brand-graphite tracking-tight leading-[1.15]">
            TECHNOLOGY CHOICES BUILT AROUND YOUR PRODUCT
          </h2>

          <div className="space-y-6 text-base text-brand-graphite/85 leading-relaxed font-sans border-l-4 border-brand-blue pl-6 md:pl-8 py-2">
            <p>
              There is no single best technology stack for every software product. A marketing website, SaaS platform, enterprise application, AI product, and high-traffic eCommerce platform can have very different technical requirements.
            </p>
            <p>
              At Code N Clicks, we select technologies around your product&apos;s architecture, expected scale, integrations, development speed, and long-term maintenance requirements. Our stack covers modern frontend frameworks, backend platforms, databases, cloud infrastructure, DevOps, AI, analytics, and product design tools.
            </p>
            <p className="font-semibold text-brand-graphite">
              Whether you&apos;re building an MVP or modernizing an existing application, we focus on creating a technology foundation that can evolve with your business.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
