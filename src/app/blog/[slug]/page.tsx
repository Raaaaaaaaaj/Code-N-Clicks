import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react";
import Section from "@/components/shared/Section";
import { blogPosts, getBlogPostBySlug, getRelatedPosts } from "@/data/blog";
import { organizationSchema, websiteSchema, articleSchema, breadcrumbSchema } from "@/lib/seo";
import { Metadata } from "next";

interface Props {
  params: { slug: string };
}

// Generate static routes at build time
export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

// Dynamic Metadata generator
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug);
  if (!post) return {};

  return {
    title: post.seoTitle,
    description: post.metaDescription,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.seoTitle,
      description: post.metaDescription,
      images: [{ url: post.featuredImage }],
      type: "article",
      url: `https://codenclicksit.in/blog/${post.slug}`,
    },
  };
}

// Parsing Table of Contents
const getTableOfContents = (body: string) => {
  const lines = body.split("\n");
  const toc: { text: string; id: string; level: number }[] = [];

  lines.forEach((line) => {
    if (line.startsWith("## ")) {
      const text = line.replace("## ", "").trim();
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-");
      toc.push({ text, id, level: 2 });
    } else if (line.startsWith("### ")) {
      const text = line.replace("### ", "").trim();
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-");
      toc.push({ text, id, level: 3 });
    }
  });

  return toc;
};

// Custom Markdown Node parser
const renderMarkdown = (body: string) => {
  const blocks = body.trim().split(/\n\s*\n/);

  return blocks.map((block, index) => {
    const trimmed = block.trim();

    if (trimmed.startsWith("## ")) {
      const text = trimmed.replace("## ", "");
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-");
      return (
        <h2 id={id} key={index} className="text-2xl md:text-3xl font-heading font-extrabold text-brand-graphite mt-10 mb-4 scroll-mt-24">
          {text}
        </h2>
      );
    }

    if (trimmed.startsWith("### ")) {
      const text = trimmed.replace("### ", "");
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-");
      return (
        <h3 id={id} key={index} className="text-xl font-heading font-bold text-brand-graphite mt-8 mb-3 scroll-mt-24">
          {text}
        </h3>
      );
    }

    if (trimmed.startsWith("- ")) {
      return (
        <ul key={index} className="space-y-2.5 my-5 pl-4">
          {trimmed.split("\n").map((item) => (
            <li key={item} className="flex gap-3 text-brand-graphite/70 leading-relaxed text-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-blue mt-2 flex-shrink-0" />
              <span>{item.replace("- ", "")}</span>
            </li>
          ))}
        </ul>
      );
    }

    if (trimmed.startsWith("```")) {
      const lines = trimmed.split("\n");
      const code = lines.slice(1, -1).join("\n");
      return (
        <pre key={index} className="p-5 bg-brand-mist border-2 border-brand-graphite rounded-[20px] overflow-x-auto text-xs font-mono my-6">
          <code>{code}</code>
        </pre>
      );
    }

    return (
      <p key={index} className="text-sm text-brand-graphite/70 leading-relaxed mb-5 font-sans">
        {trimmed}
      </p>
    );
  });
};

export default function BlogDetailPage({ params }: Props) {
  const post = getBlogPostBySlug(params.slug);
  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(post);
  const path = `/blog/${post.slug}`;
  const toc = getTableOfContents(post.body);

  // JSON-LD dynamic schema pre-rendered on the server
  const jsonLdData = {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema(),
      websiteSchema(),
      articleSchema({
        title: post.title,
        description: post.excerpt,
        path,
        image: post.featuredImage,
        datePublished: post.date,
        author: post.author,
      }),
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Blog", path: "/blog" },
        { name: post.title, path },
      ]),
    ]
  };

  return (
    <div className="bg-white text-brand-graphite">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />

      {/* Hero */}
      <section className="py-16 lg:py-24 border-b-2 border-brand-graphite bg-brand-mist">
        <div className="container mx-auto px-4 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-mono font-bold text-brand-graphite/60 hover:text-brand-blue transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
          
          <div className="max-w-4xl space-y-6">
            <span className="px-3.5 py-1 text-xs font-mono font-semibold bg-white border border-brand-graphite rounded-full text-brand-graphite">
              {post.category}
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight text-brand-graphite">
              {post.title}
            </h1>
            <p className="text-lg text-brand-graphite/80 leading-relaxed font-sans">
              {post.excerpt}
            </p>
            
            <div className="flex flex-wrap items-center gap-6 text-xs font-mono text-brand-graphite/50 pt-4">
              <span>By {post.author}</span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" /> {new Date(post.date).toLocaleDateString("en-IN", { month: "long", day: "numeric", year: "numeric" })}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" /> {post.readingTime}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout with Sticky Sidebar */}
      <Section className="bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Sidebar Table of Contents (Desktop sticky left or right) */}
            <aside className="lg:col-span-4 space-y-8 order-last lg:order-first">
              {toc.length > 0 && (
                <div className="p-8 bg-brand-mist border-2 border-brand-graphite rounded-[24px] lg:sticky lg:top-24">
                  <h3 className="text-lg font-heading font-bold text-brand-graphite mb-4 pb-2 border-b border-brand-graphite/10">
                    Table of Contents
                  </h3>
                  <nav className="space-y-2">
                    {toc.map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className={`block text-xs leading-normal font-sans hover:text-brand-blue transition-colors ${
                          item.level === 3 ? "pl-4 text-brand-graphite/50" : "font-semibold text-brand-graphite/70"
                        }`}
                      >
                        {item.text}
                      </a>
                    ))}
                  </nav>
                </div>
              )}

              {/* Consultation Ad */}
              <div className="p-8 bg-brand-lime/10 border-2 border-brand-graphite rounded-[24px]">
                <h3 className="text-lg font-heading font-bold text-brand-graphite mb-2">Need Help with This?</h3>
                <p className="text-xs text-brand-graphite/70 leading-relaxed mb-6 font-sans">
                  Get a free technical SEO checklist, custom wireframes, and project estimate for your digital build.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-brand-blue"
                >
                  Book Consultation <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Related posts */}
              <div className="p-8 bg-white border-2 border-brand-graphite rounded-[24px] shadow-premium">
                <h3 className="text-lg font-heading font-bold text-brand-graphite mb-4 pb-2 border-b border-brand-graphite/10">
                  Related Guides
                </h3>
                <div className="space-y-4">
                  {relatedPosts.map((related) => (
                    <Link key={related.slug} href={`/blog/${related.slug}`} className="block group">
                      <span className="text-[10px] font-mono font-bold text-brand-blue">{related.category}</span>
                      <h4 className="text-xs font-heading font-bold text-brand-graphite group-hover:text-brand-blue transition-colors mt-1">
                        {related.title}
                      </h4>
                    </Link>
                  ))}
                </div>
              </div>
            </aside>

            {/* Markdown Article body */}
            <article className="lg:col-span-8 space-y-6">
              <div className="relative aspect-[16/9] rounded-[32px] overflow-hidden border-4 border-brand-graphite shadow-flat mb-10">
                <img
                  src={post.featuredImage}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="prose max-w-none">
                {renderMarkdown(post.body)}
              </div>
            </article>
          </div>
        </div>
      </Section>
    </div>
  );
}
