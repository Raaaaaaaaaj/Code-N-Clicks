import { Navigate, Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react";
import Section from "@/components/shared/Section";
import { blogPosts, getBlogPostBySlug, getRelatedPosts } from "@/data/blog";
import {
  articleSchema,
  breadcrumbSchema,
  organizationSchema,
  useSEO,
  websiteSchema,
} from "@/lib/seo";

const renderMarkdown = (body: string) => {
  const blocks = body.trim().split(/\n\s*\n/);

  return blocks.map((block, index) => {
    const trimmed = block.trim();

    if (trimmed.startsWith("## ")) {
      return (
        <h2 key={index} className="text-2xl md:text-3xl font-heading font-bold text-foreground mt-10 mb-4">
          {trimmed.replace("## ", "")}
        </h2>
      );
    }

    if (trimmed.startsWith("### ")) {
      return (
        <h3 key={index} className="text-xl font-heading font-semibold text-foreground mt-8 mb-3">
          {trimmed.replace("### ", "")}
        </h3>
      );
    }

    if (trimmed.startsWith("- ")) {
      return (
        <ul key={index} className="space-y-2 my-5">
          {trimmed.split("\n").map((item) => (
            <li key={item} className="flex gap-3 text-muted-foreground leading-relaxed">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
              <span>{item.replace("- ", "")}</span>
            </li>
          ))}
        </ul>
      );
    }

    return (
      <p key={index} className="text-muted-foreground leading-relaxed mb-5">
        {trimmed}
      </p>
    );
  });
};

const BlogDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const matchedPost = getBlogPostBySlug(slug || "");
  const post = matchedPost || blogPosts[0];

  const relatedPosts = getRelatedPosts(post);
  const path = `/blog/${post.slug}`;

  useSEO({
    title: post.seoTitle,
    description: post.metaDescription,
    path,
    type: "article",
    image: post.featuredImage,
    keywords: post.keywords,
    jsonLd: [
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
    ],
  });

  if (!matchedPost) return <Navigate to="/blog" replace />;

  return (
    <div className="pt-20">
      <section className="py-20 lg:py-28 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
          <div className="max-w-4xl">
            <span className="inline-flex items-center px-3 py-1 text-xs font-medium bg-secondary rounded-full text-primary mb-5">
              {post.category}
            </span>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 leading-[1.1]">{post.title}</h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">{post.excerpt}</p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span>{post.author}</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" /> {new Date(post.date).toLocaleDateString("en-IN", { month: "long", day: "numeric", year: "numeric" })}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" /> {post.readingTime}
              </span>
            </div>
          </div>
        </div>
      </section>

      <Section>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-14">
            <article>
              <img
                src={post.featuredImage}
                alt={post.title}
                className="rounded-2xl shadow-card w-full object-cover mb-10 max-h-[520px]"
                width="900"
                height="520"
              />
              <div className="max-w-3xl">
                {renderMarkdown(post.body)}
              </div>
            </article>

            <aside className="space-y-6">
              <div className="p-6 bg-card border border-border rounded-xl shadow-card">
                <h2 className="text-lg font-heading font-semibold text-foreground mb-3">Need help with this?</h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  Get a practical roadmap for your website, SaaS product, CRM, or ecommerce project.
                </p>
                <Link to="/contact" className="inline-flex items-center gap-2 px-5 py-3 bg-gradient-primary text-primary-foreground font-semibold rounded-lg text-sm hover:opacity-90 transition-opacity shadow-glow">
                  Talk to Us <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="p-6 bg-background border border-border rounded-xl shadow-card">
                <h2 className="text-lg font-heading font-semibold text-foreground mb-4">Related Guides</h2>
                <div className="space-y-4">
                  {relatedPosts.map((related) => (
                    <Link key={related.slug} to={`/blog/${related.slug}`} className="block group">
                      <span className="text-xs text-primary font-medium">{related.category}</span>
                      <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors mt-1">
                        {related.title}
                      </h3>
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default BlogDetail;
