import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import Image from "next/image";

// Generate dynamic SEO Metadata
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const blog = await prisma.blogPost.findUnique({
    where: { slug: params.slug },
  });

  if (!blog || !blog.isPublished) return { title: "Blog Not Found" };

  const keywordsArray = blog.targetKeywords ? blog.targetKeywords.split(",").map(k => k.trim()) : [];

  return {
    title: blog.seoTitle || blog.title,
    description: blog.metaDescription || "Read this insightful article from CodeNClicks.",
    keywords: keywordsArray,
    alternates: {
      canonical: blog.canonicalUrl || `https://codenclicksit.in/blog/${blog.slug}`,
    },
    openGraph: {
      title: blog.ogTitle || blog.seoTitle || blog.title,
      description: blog.ogDescription || blog.metaDescription || "Read this insightful article from CodeNClicks.",
      url: `https://codenclicksit.in/blog/${blog.slug}`,
      type: "article",
      publishedTime: blog.createdAt.toISOString(),
      authors: [blog.author],
      images: [
        {
          url: blog.ogImage || blog.featuredImage || "/Codenclicks_white_bg_PNG.png",
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.ogTitle || blog.seoTitle || blog.title,
      description: blog.ogDescription || blog.metaDescription || "Read this insightful article from CodeNClicks.",
      images: [blog.ogImage || blog.featuredImage || "/Codenclicks_white_bg_PNG.png"],
    },
  };
}

export const revalidate = 60; // Revalidate every 60 seconds

export default async function SingleBlogPage({ params }: { params: { slug: string } }) {
  const blog = await prisma.blogPost.findUnique({
    where: { slug: params.slug },
  });

  if (!blog || !blog.isPublished) {
    notFound();
  }

  // Generate JSON-LD Structured Data for Google
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": blog.seoTitle || blog.title,
    "image": blog.featuredImage ? [blog.featuredImage] : [],
    "datePublished": blog.createdAt.toISOString(),
    "dateModified": blog.updatedAt.toISOString(),
    "author": [{
      "@type": "Person",
      "name": blog.author,
      "url": "https://codenclicksit.in"
    }]
  };

  return (
    <article className="pt-32 pb-24 min-h-screen bg-background">
      {/* Inject JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/blog" className="inline-flex items-center text-primary hover:text-primary/80 font-medium mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to all articles
        </Link>
        
        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-2 text-sm font-bold text-primary uppercase tracking-wider mb-4">
            <Tag className="w-4 h-4" /> {blog.category || "Article"}
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            {blog.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-muted-foreground border-b border-border pb-8">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5 text-primary" />
              <span>{blog.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary" />
              <time dateTime={blog.createdAt.toISOString()}>
                {new Date(blog.createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </time>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        {blog.featuredImage && (
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-12 border border-border shadow-2xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={blog.featuredImage} 
              alt={blog.title} 
              className="object-cover w-full h-full" 
            />
          </div>
        )}

        {/* Content (TipTap HTML) */}
        <div 
          className="prose prose-blue max-w-none prose-lg md:prose-xl prose-headings:font-bold prose-a:text-primary hover:prose-a:text-primary/80 prose-img:rounded-xl prose-img:border prose-img:border-border"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
        
        {/* Footer tags */}
        {blog.targetKeywords && (
          <div className="mt-16 pt-8 border-t border-border flex flex-wrap gap-2">
            <span className="text-muted-foreground font-medium mr-2 self-center">Tags:</span>
            {blog.targetKeywords.split(",").map((keyword, i) => (
              <span key={i} className="px-3 py-1 bg-muted border border-border rounded-full text-xs text-muted-foreground">
                {keyword.trim()}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
