"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, Search, BookOpen } from "lucide-react";
import Section from "@/components/shared/Section";
import { blogCategories, blogPosts, blogTopicIdeas } from "@/data/blog";

export default function BlogClient() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-white text-brand-graphite">
      {/* Hero */}
      <section className="py-16 lg:py-24 border-b-2 border-brand-graphite bg-brand-mist">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-brand-blue text-sm font-mono font-bold tracking-wider uppercase">Insights</span>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-brand-graphite leading-none">
                GROWTH & TECH <span className="text-brand-blue">PLAYBOOKS.</span>
              </h1>
              <p className="text-lg md:text-xl text-brand-graphite/80 leading-relaxed font-sans max-w-xl">
                Practical, buyer-focused guides on building custom SaaS MVPs, CRM architectures, e-commerce conversion funnels, and organic search visibility.
              </p>
            </div>
            
            <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[380px] aspect-[4/3] rounded-[32px] overflow-hidden border-4 border-brand-graphite shadow-flat">
                <img
                  src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=700&h=460&fit=crop"
                  alt="Content strategy desk with laptop and notes"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="py-8 bg-white border-b-2 border-brand-graphite sticky top-16 z-30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {["All", ...blogCategories].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2.5 rounded-full text-xs font-mono font-bold border-2 transition-all duration-200 ${
                    selectedCategory === cat
                      ? "bg-brand-blue text-white border-brand-blue"
                      : "bg-brand-mist text-brand-graphite border-brand-graphite hover:bg-brand-graphite hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative max-w-sm w-full">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-brand-graphite/40" />
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles..."
                className="w-full pl-10 pr-4 py-3 bg-brand-mist border-2 border-brand-graphite rounded-full text-xs font-mono placeholder:text-brand-graphite/40 focus:outline-none focus:border-brand-blue transition-colors"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Cards List */}
      <Section className="bg-white border-b-2 border-brand-graphite">
        <div className="container mx-auto px-4 lg:px-8">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-20 bg-brand-mist border-2 border-dashed border-brand-graphite/30 rounded-[32px]">
              <BookOpen className="w-12 h-12 text-brand-graphite/30 mx-auto mb-4" />
              <h3 className="text-xl font-heading font-bold text-brand-graphite mb-2">No articles found</h3>
              <p className="text-sm text-brand-graphite/60">Try adjusting your filters or search keywords.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article
                  key={post.slug}
                  className="group flex flex-col justify-between bg-white border-2 border-brand-graphite rounded-[32px] overflow-hidden shadow-premium hover:shadow-flat transition-shadow duration-300 min-h-[460px]"
                >
                  <div>
                    <Link href={`/blog/${post.slug}`} className="block relative aspect-[16/9] border-b-2 border-brand-graphite overflow-hidden">
                      <img
                        src={post.featuredImage}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </Link>
                    <div className="p-6 space-y-4">
                      <div className="flex items-center gap-2">
                        <span className="px-3 py-1 text-[10px] font-mono font-semibold bg-brand-mist border border-brand-graphite rounded-full text-brand-graphite">
                          {post.category}
                        </span>
                      </div>
                      
                      <h2 className="text-xl font-heading font-bold text-brand-graphite leading-snug">
                        <Link href={`/blog/${post.slug}`} className="group-hover:text-brand-blue transition-colors">
                          {post.title}
                        </Link>
                      </h2>
                      
                      <p className="text-xs text-brand-graphite/70 leading-relaxed font-sans line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 pt-0 space-y-4">
                    <div className="flex items-center gap-4 text-[10px] font-mono text-brand-graphite/50 pb-4 border-b border-brand-graphite/10">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" /> {new Date(post.date).toLocaleDateString("en-IN", { month: "short", day: "numeric", year: "numeric" })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" /> {post.readingTime}
                      </span>
                    </div>
                    
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-brand-blue"
                    >
                      Read Guide <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </Section>

      {/* Content Roadmap */}
      <Section className="bg-brand-mist border-b-2 border-brand-graphite">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4 space-y-6">
              <span className="text-brand-blue text-sm font-mono font-bold tracking-wider uppercase">SEO Blueprint</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-brand-graphite leading-none">
                30 Topics Under Development
              </h2>
              <p className="text-sm text-brand-graphite/70 leading-relaxed font-sans">
                These titles address Commercial & Problem-solving intents to boost our search presence and power client visibility growth.
              </p>
            </div>
            
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              {blogTopicIdeas.slice(0, 8).map((idea) => (
                <div key={idea.title} className="p-5 bg-white border-2 border-brand-graphite rounded-[20px] shadow-premium">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[10px] font-mono font-bold text-brand-blue">{idea.cluster}</span>
                    <span className="text-[10px] font-mono font-bold bg-brand-lime px-2 py-0.5 border border-brand-graphite rounded">{idea.intent}</span>
                  </div>
                  <h3 className="text-xs font-heading font-bold text-brand-graphite mb-2">{idea.title}</h3>
                  <p className="text-[10px] font-mono text-brand-graphite/50">Keyword: {idea.targetKeyword}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Consultation Bar */}
      <section className="bg-brand-coral text-white py-20 text-center">
        <div className="container mx-auto px-4 lg:px-8 space-y-6">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-none tracking-tight">
            NEED A HIGH-CONVERTING BLOG LAYOUT?
          </h2>
          <p className="text-white/80 max-w-xl mx-auto text-sm leading-relaxed font-sans">
            We map SEO architectures, structured markup code schemas, and clean call-to-actions to turn content pages into leads.
          </p>
          <div className="pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-graphite text-white font-bold rounded-full hover:bg-brand-graphite/90 transition-colors text-sm border-2 border-brand-graphite"
            >
              Get SEO Roadmap <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
