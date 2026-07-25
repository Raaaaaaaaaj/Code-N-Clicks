/**
 * DEPRECATED: Blog data is now managed dynamically via MySQL / Prisma.
 * This file is kept only to maintain any residual type dependencies until they are fully removed.
 * Do not add new static blogs here. Use the Admin Dashboard instead.
 */

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readingTime: string;
  featuredImage: string;
  seoTitle: string;
  metaDescription: string;
  keywords: string[];
  body: string;
}

export interface BlogTopicIdea {
  cluster: string;
  title: string;
  intent: "Commercial" | "Comparison" | "Problem-solving" | "Local" | "Informational";
  targetKeyword: string;
}

export const blogPosts: BlogPost[] = [];
export const blogTopicIdeas: BlogTopicIdea[] = [];
export const blogCategories: string[] = [];

export const getBlogPostBySlug = (slug: string) => undefined;
export const getRelatedPosts = (post: BlogPost) => [];
