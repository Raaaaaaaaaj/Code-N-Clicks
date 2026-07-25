import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const data = await req.json();
    const { 
      title, slug, category, author, content, featuredImage,
      seoTitle, metaDescription, canonicalUrl, targetKeywords,
      ogTitle, ogDescription, ogImage, isPublished 
    } = data;

    if (!title || !slug || !content) {
      return NextResponse.json({ error: "Title, slug, and content are required." }, { status: 400 });
    }

    // Check if slug exists
    const existing = await prisma.blogPost.findUnique({ where: { slug } });
    if (existing) {
      return NextResponse.json({ error: "A blog post with this slug already exists." }, { status: 400 });
    }

    const post = await prisma.blogPost.create({
      data: {
        title,
        slug,
        category: category || "Technology",
        author: author || "Admin",
        content,
        featuredImage: featuredImage || null,
        seoTitle: seoTitle || null,
        metaDescription: metaDescription || null,
        canonicalUrl: canonicalUrl || null,
        targetKeywords: targetKeywords || null,
        ogTitle: ogTitle || null,
        ogDescription: ogDescription || null,
        ogImage: ogImage || null,
        isPublished: isPublished || false,
      },
    });

    return NextResponse.json({ message: "Blog post created successfully", post }, { status: 201 });
  } catch (error) {
    console.error("Failed to create blog post:", error);
    return NextResponse.json({ error: "An error occurred while creating the blog post." }, { status: 500 });
  }
}
