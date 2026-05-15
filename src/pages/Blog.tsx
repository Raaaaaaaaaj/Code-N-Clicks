import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock, Search } from "lucide-react";
import Section from "@/components/shared/Section";
import { blogCategories, blogPosts, blogTopicIdeas } from "@/data/blog";
import { breadcrumbSchema, organizationSchema, useSEO, websiteSchema } from "@/lib/seo";

const Blog = () => {
  useSEO({
    title: "Web Development, SaaS, CRM and SEO Blog | CodeNClicks",
    description:
      "Actionable guides on web development, SaaS MVPs, CRM software, ecommerce, hotel booking systems, SEO, UI/UX, and lead generation for founders and businesses.",
    path: "/blog",
    keywords: ["web development blog", "SaaS development blog", "CRM development guide", "ecommerce development India"],
    jsonLd: [
      organizationSchema(),
      websiteSchema(),
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Blog", path: "/blog" },
      ]),
    ],
  });

  return (
    <div className="pt-20">
      <section className="py-20 lg:py-32 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
              <span className="text-primary text-sm font-semibold tracking-wider uppercase">Insights</span>
              <h1 className="text-4xl md:text-6xl font-heading font-bold mt-3 mb-6">
                Practical Growth Guides for <span className="text-gradient">Digital Businesses</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Clear, buyer-focused advice on websites, SaaS products, CRM systems, ecommerce, hotel technology, SEO, and conversion strategy.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}>
              <img
                src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=700&h=460&fit=crop"
                alt="Content strategy desk with laptop and notes"
                className="rounded-2xl shadow-card w-full object-cover"
                width="700"
                height="460"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <Section>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap gap-3 mb-12">
            {blogCategories.map((category) => (
              <span key={category} className="px-4 py-2 bg-secondary rounded-full text-sm font-medium text-primary">
                {category}
              </span>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-background border border-border rounded-xl shadow-card overflow-hidden hover-lift"
              >
                <Link to={`/blog/${post.slug}`} className="block">
                  <img
                    src={post.featuredImage}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                    loading="lazy"
                    decoding="async"
                    width="900"
                    height="520"
                  />
                </Link>
                <div className="p-6">
                  <span className="inline-flex items-center px-3 py-1 text-xs font-medium bg-secondary rounded-full text-primary mb-4">
                    {post.category}
                  </span>
                  <h2 className="text-xl font-heading font-semibold text-foreground mb-3">
                    <Link to={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-5">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" /> {new Date(post.date).toLocaleDateString("en-IN", { month: "short", day: "numeric", year: "numeric" })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> {post.readingTime}
                    </span>
                  </div>
                  <Link to={`/blog/${post.slug}`} className="inline-flex items-center gap-1 text-sm text-primary font-medium hover:gap-2 transition-all">
                    Read Guide <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div>
              <span className="text-primary text-sm font-semibold tracking-wider uppercase">Content Roadmap</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mt-3 mb-4">
                30 SEO blog topics ready to publish
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                These topics are clustered around commercial and problem-solving intent so the blog supports service-page rankings instead of becoming generic news.
              </p>
            </div>
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              {blogTopicIdeas.slice(0, 10).map((idea) => (
                <div key={idea.title} className="p-5 bg-background border border-border rounded-xl shadow-card">
                  <div className="flex items-center gap-2 mb-2">
                    <Search className="w-4 h-4 text-primary" />
                    <span className="text-xs font-medium text-primary">{idea.cluster} - {idea.intent}</span>
                  </div>
                  <h3 className="text-sm font-semibold text-foreground mb-2">{idea.title}</h3>
                  <p className="text-xs text-muted-foreground">Target: {idea.targetKeyword}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-gradient-primary">
        <div className="container mx-auto px-4 lg:px-8 text-center py-8">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-primary-foreground">
            Need a website that turns content into leads?
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
            We can map your service pages, blog clusters, technical SEO, and conversion paths in one practical growth plan.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-background text-primary font-semibold rounded-lg hover:bg-background/90 transition-colors">
            Get SEO Roadmap <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Section>
    </div>
  );
};

export default Blog;
