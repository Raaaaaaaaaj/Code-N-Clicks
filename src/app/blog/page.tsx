import prisma from "@/lib/prisma";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight, Calendar, User } from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Insights & Updates | CodeNClicks IT Solutions",
  description: "Read the latest insights, strategies, and updates on web development, SEO, digital marketing, and business automation from the CodeNClicks team.",
  openGraph: {
    title: "Insights & Updates | CodeNClicks IT Solutions",
    description: "Read the latest insights, strategies, and updates on web development, SEO, digital marketing, and business automation from the CodeNClicks team.",
    url: "https://codenclicksit.in/blog",
  },
};

export const revalidate = 60; // Revalidate every 60 seconds

export default async function BlogListPage({ searchParams }: { searchParams: { page?: string } }) {
  const page = Number(searchParams.page) || 1;
  const limit = 9;
  const skip = (page - 1) * limit;

  const [blogs, total] = await Promise.all([
    prisma.blogPost.findMany({
      where: { isPublished: true },
      orderBy: { createdAt: "desc" },
      skip,
      take: limit,
    }),
    prisma.blogPost.count({
      where: { isPublished: true },
    }),
  ]);

  const totalPages = Math.ceil(total / limit);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Insights & <span className="text-primary">Updates</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Discover our latest thoughts on technology, business growth, and digital innovation.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.length === 0 ? (
            <div className="col-span-full text-center py-20 text-muted-foreground">
              No blog posts published yet. Check back later!
            </div>
          ) : (
            blogs.map((blog) => (
              <Link href={`/blog/${blog.slug}`} key={blog.id} className="group flex flex-col bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="relative h-60 w-full bg-muted overflow-hidden">
                  {blog.featuredImage ? (
                    <img 
                      src={blog.featuredImage} 
                      alt={blog.title} 
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" 
                    />
                  ) : (
                    <div className="flex items-center justify-center w-full h-full text-muted-foreground">
                      <ImageIcon className="w-12 h-12" />
                    </div>
                  )}
                  <div className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                    {blog.category || "Article"}
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4 font-medium">
                    <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {new Date(blog.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    <span className="flex items-center gap-1"><User className="w-4 h-4" /> {blog.author}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {blog.title}
                  </h3>
                  
                  {blog.metaDescription && (
                    <p className="text-muted-foreground text-sm line-clamp-3 mb-6 flex-grow">
                      {blog.metaDescription}
                    </p>
                  )}
                  
                  <div className="mt-auto flex items-center text-primary font-bold text-sm group-hover:translate-x-2 transition-transform">
                    Read Article <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-16">
            {Array.from({ length: totalPages }).map((_, i) => (
              <Link 
                key={i} 
                href={`/blog?page=${i + 1}`}
                className={`w-10 h-10 flex items-center justify-center rounded-lg text-sm font-medium transition-colors ${
                  page === i + 1 
                    ? "bg-primary text-primary-foreground shadow-md" 
                    : "bg-background border border-border text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                {i + 1}
              </Link>
            ))}
          </div>
        )}
        
      </div>
    </div>
  );
}
