import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import BlogDetailClient from "@/components/blog/BlogDetailClient";
import { isBlockContent, parseBlogContent, BlogContentStructure } from "@/lib/blog-builder";

// Generate dynamic SEO Metadata
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const blog = await prisma.blogPost.findUnique({
    where: { slug },
  });

  if (!blog || !blog.isPublished) return { title: "Blog Not Found" };

  const isBlock = isBlockContent(blog.content);
  const blockContent = isBlock ? parseBlogContent(blog.content) : null;

  // Extract focus, secondary, and semantic keywords
  const keywordsList: string[] = [];
  if (blockContent?.metadata.focusKeyword) {
    keywordsList.push(blockContent.metadata.focusKeyword);
  }
  if (blog.targetKeywords) {
    blog.targetKeywords.split(",").forEach(k => {
      const trimmed = k.trim();
      if (trimmed && !keywordsList.includes(trimmed)) keywordsList.push(trimmed);
    });
  }
  if (blockContent?.metadata.secondaryKeywords) {
    blockContent.metadata.secondaryKeywords.forEach(k => {
      if (k && !keywordsList.includes(k)) keywordsList.push(k);
    });
  }

  const desc = blog.metaDescription || "Read this insightful article from CodeNClicks.";
  const title = blog.seoTitle || blog.title;
  const canonical = blog.canonicalUrl || `https://codenclicksit.in/blog/${blog.slug}`;
  const ogImg = blog.ogImage || blog.featuredImage || "/Codenclicks_white_bg_PNG.png";

  const robotsObj = blockContent?.metadata.robots || { index: true, follow: true };
  const robotsString = `${robotsObj.index ? "index" : "noindex"}, ${robotsObj.follow ? "follow" : "nofollow"}`;

  return {
    title,
    description: desc,
    keywords: keywordsList,
    alternates: {
      canonical,
    },
    robots: robotsString,
    openGraph: {
      title: blog.ogTitle || title,
      description: blog.ogDescription || desc,
      url: `https://codenclicksit.in/blog/${blog.slug}`,
      type: "article",
      publishedTime: blog.createdAt.toISOString(),
      authors: [blog.author],
      images: [
        {
          url: ogImg,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.ogTitle || title,
      description: blog.ogDescription || desc,
      images: [ogImg],
    },
  };
}

export const revalidate = 60; // Revalidate every 60 seconds

export default async function SingleBlogPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = await prisma.blogPost.findUnique({
    where: { slug },
  });

  if (!blog || !blog.isPublished) {
    notFound();
  }

  const isBlock = isBlockContent(blog.content);
  const blockContent = isBlock ? parseBlogContent(blog.content) : null;

  // 1. Fetch related blogs
  let relatedBlogs: any[] = [];
  if (blockContent) {
    const ids = blockContent.metadata.relatedArticleIds || [];
    if (ids.length > 0) {
      relatedBlogs = await prisma.blogPost.findMany({
        where: {
          id: { in: ids },
          isPublished: true,
        },
        select: {
          id: true,
          title: true,
          slug: true,
          featuredImage: true,
          category: true,
          author: true,
          createdAt: true,
        },
        take: 3,
      });
    }
  }

  // Fallback to matching category
  if (relatedBlogs.length === 0) {
    relatedBlogs = await prisma.blogPost.findMany({
      where: {
        category: blog.category,
        isPublished: true,
        NOT: { id: blog.id },
      },
      select: {
        id: true,
        title: true,
        slug: true,
        featuredImage: true,
        category: true,
        author: true,
        createdAt: true,
      },
      take: 3,
    });
  }

  // 2. Generate multiple JSON-LD structured schemas based on meta settings
  const jsonLds: any[] = [];
  const canonical = blog.canonicalUrl || `https://codenclicksit.in/blog/${blog.slug}`;

  if (blockContent) {
    const meta = blockContent.metadata;
    
    // Article Schema
    if (meta.schemaSettings.article) {
      jsonLds.push({
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
        }],
        "publisher": {
          "@type": "Organization",
          "name": "CodeNClicks IT Solutions",
          "logo": {
            "@type": "ImageObject",
            "url": "https://codenclicksit.in/favicon.png"
          }
        },
        "description": blog.metaDescription || undefined
      });
    }

    // FAQ Schema
    if (meta.schemaSettings.faq) {
      const faqSec = blockContent.sections.find(s => s.type === "faqs" && s.isEnabled);
      if (faqSec && faqSec.content.faqs) {
        jsonLds.push({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqSec.content.faqs.map((f: any) => ({
            "@type": "Question",
            "name": f.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": f.answer
            }
          }))
        });
      }
    }

    // Breadcrumb Schema
    if (meta.schemaSettings.breadcrumb) {
      jsonLds.push({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://codenclicksit.in" },
          { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://codenclicksit.in/blog" },
          { "@type": "ListItem", "position": 3, "name": blog.title, "item": canonical }
        ]
      });
    }

    // HowTo Schema
    if (meta.schemaSettings.howto) {
      const stepSec = blockContent.sections.find(s => s.type === "step-guide" && s.isEnabled);
      if (stepSec && stepSec.content.steps) {
        jsonLds.push({
          "@context": "https://schema.org",
          "@type": "HowTo",
          "name": blog.title,
          "step": stepSec.content.steps.map((step: any, idx: number) => ({
            "@type": "HowToStep",
            "position": idx + 1,
            "name": step.title,
            "text": step.instruction.replace(/<[^>]*>/g, "") // strip html tags
          }))
        });
      }
    }

    // SoftwareApplication Schema
    if (meta.schemaSettings.softwareApplication) {
      jsonLds.push({
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "Indian Hotel PMS Software",
        "operatingSystem": "All Cloud Platforms",
        "applicationCategory": "BusinessApplication",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "INR"
        }
      });
    }

    // Organization Schema
    if (meta.schemaSettings.organization) {
      jsonLds.push({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "CodeNClicks IT Solutions",
        "url": "https://codenclicksit.in",
        "logo": "https://codenclicksit.in/favicon.png",
        "sameAs": [
          "https://facebook.com/codenclicks",
          "https://linkedin.com/company/codenclicks"
        ]
      });
    }

    // LocalBusiness Schema
    if (meta.schemaSettings.localBusiness) {
      jsonLds.push({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "CodeNClicks IT Solutions",
        "image": "https://codenclicksit.in/favicon.png",
        "telephone": "+91-XXXXXXXXXX",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Salt Lake Sector V",
          "addressLocality": "Kolkata",
          "addressRegion": "West Bengal",
          "postalCode": "700091",
          "addressCountry": "IN"
        }
      });
    }
  } else {
    // Default legacy schema
    jsonLds.push({
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
    });
  }

  // Format serializable dates and fields for client component
  const clientBlog = {
    id: blog.id,
    title: blog.title,
    slug: blog.slug,
    content: blog.content,
    featuredImage: blog.featuredImage,
    category: blog.category,
    author: blog.author,
    createdAt: blog.createdAt.toISOString(),
    updatedAt: blog.updatedAt.toISOString(),
    seoTitle: blog.seoTitle,
    metaDescription: blog.metaDescription,
  };

  const clientRelatedBlogs = relatedBlogs.map(rb => ({
    id: rb.id,
    title: rb.title,
    slug: rb.slug,
    featuredImage: rb.featuredImage,
    category: rb.category,
    author: rb.author,
    createdAt: rb.createdAt.toISOString(),
  }));

  return (
    <>
      {/* Inject all generated JSON-LD scripts */}
      {jsonLds.map((jsonLd, idx) => (
        <script
          key={idx}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      ))}
      
      <BlogDetailClient blog={clientBlog} relatedBlogs={clientRelatedBlogs} />
    </>
  );
}
