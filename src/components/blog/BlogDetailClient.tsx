"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Calendar, User, Tag, ArrowLeft, Clock, Share2, Twitter,
  Linkedin, Facebook, Link as LinkIcon, Check, Copy, X,
  ChevronRight, AlertCircle, Info, CheckSquare, ExternalLink, ArrowRight, Mail, Loader2
} from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { isBlockContent, parseBlogContent, BlogSection, BlogContentStructure } from "@/lib/blog-builder";
import CustomSoftwareEstimator from "./CustomSoftwareEstimator";

interface BlogDetailClientProps {
  blog: {
    id: string;
    title: string;
    slug: string;
    content: string;
    featuredImage: string | null;
    category: string;
    author: string;
    createdAt: string;
    updatedAt: string;
    seoTitle: string | null;
    metaDescription: string | null;
  };
  relatedBlogs: Array<{
    id: string;
    title: string;
    slug: string;
    featuredImage: string | null;
    category: string;
    author: string;
    createdAt: string;
  }>;
}

export default function BlogDetailClient({ blog, relatedBlogs }: BlogDetailClientProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeHeadingId, setActiveHeadingId] = useState<string>("");
  const [isCopied, setIsCopied] = useState(false);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [isNewsletterSubscribed, setIsNewsletterSubscribed] = useState(false);
  const [isNewsletterLoading, setIsNewsletterLoading] = useState(false);

  const contentRef = useRef<HTMLDivElement>(null);
  const isBlock = isBlockContent(blog.content);
  const contentStructure = isBlock ? parseBlogContent(blog.content) : null;
  const imageAlt = contentStructure?.metadata?.imageAltText || blog.title;

  // 1. Scroll Progress & Active Heading Tracker
  useEffect(() => {
    const handleScroll = () => {
      // Progress Bar
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }

      // TOC active item intersection detection
      if (!contentStructure) return;
      const enabledSections = contentStructure.sections.filter(s => s.isEnabled && s.type !== "hero");
      
      let currentActive = "";
      for (const section of enabledSections) {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200) {
            currentActive = section.id;
          }
        }
      }
      if (currentActive) {
        setActiveHeadingId(currentActive);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [contentStructure]);

  // 2. Copy handlers to codeblocks
  useEffect(() => {
    if (!contentRef.current) return;
    const preBlocks = contentRef.current.querySelectorAll("pre");
    
    preBlocks.forEach((pre) => {
      if (pre.querySelector(".copy-code-btn")) return;
      
      pre.style.position = "relative";
      const button = document.createElement("button");
      button.className = "copy-code-btn absolute right-3 top-3 p-1.5 rounded bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white transition-colors cursor-pointer text-xs flex items-center gap-1 z-10";
      button.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg> Copy`;
      
      button.addEventListener("click", () => {
        const codeText = pre.querySelector("code")?.innerText || pre.innerText;
        navigator.clipboard.writeText(codeText);
        button.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-green-400"><polyline points="20 6 9 17 4 12"/></svg> Copied!`;
        toast.success("Code copied to clipboard");
        setTimeout(() => {
          button.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg> Copy`;
        }, 2000);
      });
      
      pre.appendChild(button);
    });
  }, [blog.content]);

  // const copyLink = () => {
  //   navigator.clipboard.writeText(window.location.href);
  //   setIsCopied(true);
  //   toast.success("Article link copied!");
  //   setTimeout(() => setIsCopied(false), 2000);
  // };

  // const shareOnTwitter = () => {
  //   const url = encodeURIComponent(window.location.href);
  //   const text = encodeURIComponent(blog.title);
  //   window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, "_blank");
  // };

  // const shareOnLinkedIn = () => {
  //   const url = encodeURIComponent(window.location.href);
  //   window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, "_blank");
  // };

  // const shareOnFacebook = () => {
  //   const url = encodeURIComponent(window.location.href);
  //   window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, "_blank");
  // };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes("@")) {
      toast.error("Please enter a valid email address.");
      return;
    }
    setIsNewsletterLoading(true);
    setTimeout(() => {
      setIsNewsletterLoading(false);
      setIsNewsletterSubscribed(true);
      toast.success("Subscribed successfully!");
    }, 1000);
  };

  const scrollToElement = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const topOffset = element.getBoundingClientRect().top + window.scrollY - 120;
      window.scrollTo({
        top: topOffset,
        behavior: "smooth"
      });
      setActiveHeadingId(id);
    }
  };

  return (
    <div className="min-h-screen bg-white text-neutral-800 selection:bg-blue-100 selection:text-neutral-900 antialiased font-sans">
      {/* Top Reading Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 z-50 bg-neutral-100">
        <div
          className="h-full bg-blue-600 transition-all duration-75"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        
        {/* Back Link */}
        <div className="mb-10">
          <Link href="/blog" className="inline-flex items-center text-xs font-mono tracking-wider uppercase text-neutral-500 hover:text-neutral-900 group">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to all guides
          </Link>
        </div>

        {/* Hero Section */}
        <header className="mb-12 border-b border-neutral-200 pb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-50 border border-neutral-200 text-[10px] font-mono uppercase tracking-widest text-blue-600 mb-6">
            <Tag className="w-3.5 h-3.5" />
            {blog.category}
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-950 mb-8 leading-tight max-w-4xl">
            {blog.title}
          </h1>

          <div className="flex flex-wrap items-center justify-between gap-6">
            {/* Author Profile */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-neutral-100 border border-neutral-200 flex items-center justify-center font-bold text-neutral-700 uppercase text-sm select-none">
                {blog.author.charAt(0)}
              </div>
              <div>
                <div className="text-sm font-semibold text-neutral-900">{blog.author}</div>
                <div className="text-xs text-neutral-500 flex items-center gap-1 font-mono">
                  <span>Updated</span>
                  <time dateTime={blog.updatedAt}>
                    {new Date(blog.updatedAt).toLocaleDateString("en-IN", {
                      month: "short",
                      day: "numeric",
                      year: "numeric"
                    })}
                  </time>
                </div>
              </div>
            </div>

            {/* Meta Read info and social shares */}
            <div className="flex items-center gap-4">
              <div className="text-xs font-mono text-neutral-500 flex items-center gap-1.5 border border-neutral-250 bg-neutral-50 px-3 py-1.5 rounded-full">
                <Clock className="w-3.5 h-3.5 text-neutral-400" />
                <span>{contentStructure?.metadata.readingTime || 5} min read</span>
              </div>
              
              {/* <div className="flex items-center gap-1.5 border border-neutral-200 bg-neutral-50 p-1 rounded-full">
                <button
                  onClick={copyLink}
                  className="p-1.5 rounded-full hover:bg-neutral-200 text-neutral-500 hover:text-neutral-900 transition-colors"
                  title="Copy link"
                >
                  {isCopied ? <Check className="w-3.5 h-3.5 text-green-600" /> : <LinkIcon className="w-3.5 h-3.5" />}
                </button>
                <button
                  onClick={shareOnTwitter}
                  className="p-1.5 rounded-full hover:bg-neutral-200 text-neutral-500 hover:text-neutral-900 transition-colors"
                  title="Share on Twitter"
                >
                  <Twitter className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={shareOnLinkedIn}
                  className="p-1.5 rounded-full hover:bg-neutral-200 text-neutral-500 hover:text-neutral-900 transition-colors"
                  title="Share on LinkedIn"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={shareOnFacebook}
                  className="p-1.5 rounded-full hover:bg-neutral-200 text-neutral-500 hover:text-neutral-900 transition-colors"
                  title="Share on Facebook"
                >
                  <Facebook className="w-3.5 h-3.5" />
                </button>
              </div> */}
            </div> 
          </div>
        </header>

        {/* Featured Image */}
        {blog.featuredImage && (
          <div className="relative w-full aspect-video md:aspect-[2.39/1] rounded-2xl overflow-hidden mb-16 border border-neutral-200 shadow-xl bg-neutral-100">
            <img
              src={blog.featuredImage}
              alt={imageAlt}
              className="object-cover w-full h-full cursor-zoom-in"
              onClick={() => setZoomedImage(blog.featuredImage)}
            />
          </div>
        )}

        {/* Content Area grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Article Content Container (8 cols) */}
          <div ref={contentRef} className="lg:col-span-8 space-y-12">
            
            {/* Render legacy HTML post if it is not blocks */}
            {!isBlock ? (
              <div
                className="prose prose-blue max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-blue-600 hover:prose-a:underline prose-img:rounded-xl prose-img:border prose-img:border-neutral-200"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />
            ) : (
              // RENDER RICH BLOCKS INDEPENDENTLY
              contentStructure?.sections
                .filter((s) => s.isEnabled)
                .map((sec) => {
                  const type = sec.type;
                  const key = sec.id;

                  return (
                    <section key={key} id={sec.id} className="scroll-mt-32 space-y-4">
                      
                      {/* Sub-Header Rendering */}
                      {type !== "hero" && type !== "summary" && type !== "cta" && (
                        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-neutral-905 border-b border-neutral-200 pb-2">
                          {sec.title}
                        </h2>
                      )}

                      {/* HERO Banner Render */}
                      {type === "hero" && (
                        <div className="p-8 md:p-12 border border-neutral-200 bg-neutral-50 rounded-2xl relative overflow-hidden flex flex-col justify-center min-h-[300px]">
                          {sec.content.bgImage && (
                            <div className="absolute inset-0 z-0 opacity-10">
                              <img src={sec.content.bgImage} className="w-full h-full object-cover" alt="Background" />
                            </div>
                          )}
                          <div className="relative z-10 max-w-xl space-y-4">
                            <h3 className="text-3xl font-extrabold text-neutral-950">{sec.content.title || blog.title}</h3>
                            {sec.content.subtitle && <p className="text-l text-neutral-600 leading-relaxed">{sec.content.subtitle}</p>}
                            {sec.content.ctaText && (
                              <Link href={sec.content.ctaUrl || "#"}>
                                <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs mt-2 px-5 py-4">
                                  {sec.content.ctaText}
                                </Button>
                              </Link>
                            )}
                          </div>
                        </div>
                      )}

                      {/* QUICK SUMMARY Render */}
                      {type === "summary" && (
                        <div className="p-6 border border-neutral-200 bg-neutral-50/70 rounded-xl space-y-4">
                          <div className="flex items-center gap-2 text-xs font-bold text-neutral-800 uppercase tracking-wider">
                            <Info className="w-4 h-4 text-blue-600" />
                            {sec.content.title || "Key Takeaways"}
                          </div>
                          <ul className="space-y-2.5">
                            {(sec.content.points || []).map((pt: string, pIdx: number) => (
                              <li key={pIdx} className="flex gap-2.5 items-start text-sm text-neutral-700">
                                <span className="h-7 w-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center p-0.5 mt-0.5 border border-blue-200 font-mono text-[9px] font-bold">
                                  {pIdx + 1}
                                </span>
                                <span className="leading-normal">{pt}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* INTRODUCTION Render */}
                      {type === "introduction" && (
                        <div
                          className="prose prose-blue max-w-none text-neutral-750 leading-relaxed text-l md:text-l prose-p:mb-5"
                          dangerouslySetInnerHTML={{ __html: sec.content.text }}
                        />
                      )}

                      {/* CONCLUSION Render */}
                      {type === "conclusion" && (
                        <div className="space-y-4">
                          <div
                            className="prose prose-blue max-w-none text-neutral-750 leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: sec.content.text }}
                          />
                        </div>
                      )}

                      {/* PROBLEM Render */}
                      {type === "problem" && (
                        <div className={`p-5 rounded-xl border flex gap-4 ${
                          sec.content.calloutType === "warning" ? "bg-amber-50 border-amber-200 text-amber-900" :
                          sec.content.calloutType === "tip" ? "bg-green-50 border-green-200 text-green-900" :
                          sec.content.calloutType === "caution" ? "bg-red-50 border-red-200 text-red-900" :
                          "bg-blue-50 border-blue-200 text-blue-900"
                        }`}>
                          <div className="shrink-0 mt-0.5">
                            <AlertCircle className="w-5 h-5" />
                          </div>
                          <div
                            className="text-sm leading-relaxed prose-p:mb-2 last:prose-p:mb-0"
                            dangerouslySetInnerHTML={{ __html: sec.content.problemText }}
                          />
                        </div>
                      )}

                      {/* STATISTICS Render */}
                      {type === "statistics" && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                          {(sec.content.stats || []).map((s: any, sIdx: number) => (
                            <div key={sIdx} className="p-5 border border-neutral-200 bg-neutral-50/50 rounded-xl space-y-2 text-left">
                              <span className="text-3xl md:text-4xl font-extrabold text-blue-600 font-mono tracking-tight">{s.number}</span>
                              <div className="text-sm font-bold text-neutral-900">{s.label}</div>
                              {s.desc && <p className="text-xs text-neutral-500 leading-normal">{s.desc}</p>}
                            </div>
                          ))}
                        </div>
                      )}

                      {/* WHY THIS MATTERS Render */}
                      {type === "why-matters" && (
                        <div className="grid grid-cols-1 gap-4 pt-2">
                          {(sec.content.points || []).map((pt: any, pIdx: number) => (
                            <div key={pIdx} className="p-4 border border-neutral-200 bg-neutral-50/50 rounded-xl flex gap-3">
                              <div className="h-5 w-5 rounded bg-blue-50 text-blue-600 flex items-center justify-center p-1 border border-blue-200 text-xs font-bold font-mono">
                                ✓
                              </div>
                              <div className="space-y-1">
                                <span className="text-l font-bold text-neutral-900 block">{pt.title}</span>
                                <p className="text-sm text-neutral-550 leading-relaxed">{pt.desc}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* STEP BY STEP GUIDE Render */}
                      {type === "step-guide" && (
                        <div className="space-y-8 pt-2">
                          {(sec.content.steps || []).map((step: any, sIdx: number) => (
                            <div key={sIdx} className="space-y-4 border-l-2 border-blue-600/20 pl-6 ml-1 relative">
                              <div className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-blue-600 border-4 border-white flex items-center justify-center font-mono text-[9px] font-bold text-white" />
                              
                              <div className="space-y-2">
                                <h4 className="text-lg font-bold text-neutral-950">
                                  Step {sIdx + 1}: {step.title}
                                </h4>
                                <div
                                  className="text-sm text-neutral-600 leading-relaxed prose-p:mb-2 last:prose-p:mb-0"
                                  dangerouslySetInnerHTML={{ __html: step.instruction }}
                                />
                              </div>

                              {step.image && (
                                <div className="rounded-xl border border-neutral-200 overflow-hidden aspect-video max-w-md bg-neutral-100">
                                  <img
                                    src={step.image}
                                    className="object-cover w-full h-full cursor-zoom-in"
                                    alt={step.imageAlt || `${step.title || 'Step instruction'} - Step ${sIdx + 1}`}
                                    onClick={() => setZoomedImage(step.image)}
                                  />
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      )}

                      {/* REAL EXAMPLE CASE STUDY Render */}
                      {type === "real-example" && (
                        <div className="p-6 md:p-8 border border-neutral-200 bg-neutral-50 rounded-2xl space-y-4 relative overflow-hidden">
                          <div className="flex justify-between items-start gap-4">
                            <span className="text-xs font-bold tracking-widest text-neutral-400 uppercase font-mono">Case Study Guide</span>
                            {sec.content.metrics && (
                              <span className="px-3 py-1 bg-green-50 border border-green-200 rounded-full text-[10px] font-bold font-mono text-green-700">
                                {sec.content.metrics}
                              </span>
                            )}
                          </div>
                          <h4 className="text-xl font-bold text-neutral-900">{sec.content.title}</h4>
                          <div
                            className="text-sm text-neutral-700 leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: sec.content.desc }}
                          />
                        </div>
                      )}

                      {/* COMMON MISTAKES Render */}
                      {type === "mistakes" && (
                        <div className="grid grid-cols-1 gap-4 pt-2">
                          {(sec.content.mistakes || []).map((m: any, mIdx: number) => (
                            <div key={mIdx} className="p-4 border border-red-200 bg-red-50/50 rounded-xl flex gap-3 border-l-4 border-l-red-500">
                              <span className="text-xs font-bold text-red-500 mt-0.5">⚠️</span>
                              <div className="space-y-1">
                                <span className="text-sm font-bold text-red-900 block">{m.title}</span>
                                <p className="text-xs text-neutral-600 leading-relaxed">{m.desc}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* COMPARISON TABLE Render */}
                      {type === "comparison-table" && (
                        <div className="border border-neutral-200 rounded-xl overflow-x-auto bg-white pt-1">
                          <table className="w-full text-xs text-left min-w-[450px]">
                            <thead>
                              <tr className="bg-neutral-55 border-b border-neutral-200">
                                {sec.content.headers.map((h: string, hIdx: number) => (
                                  <th key={hIdx} className="p-3 text-neutral-900 font-bold tracking-wide uppercase text-[14px] font-mono border-r border-neutral-200 last:border-r-0">
                                    {h}
                                  </th>
                                ))}
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-neutral-200">
                              {(sec.content.rows || []).map((row: string[], rIdx: number) => (
                                <tr key={rIdx} className="hover:bg-neutral-50/40">
                                  {row.map((cell: string, cIdx: number) => (
                                    <td key={cIdx} className="p-3 border-r border-neutral-200 last:border-r-0 text-neutral-700 text-sm">
                                      {cell}
                                    </td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      )}

                      {/* CHECKLIST Render */}
                      {type === "checklist" && (
                        <div className="p-5 border border-neutral-200 bg-neutral-50/30 rounded-xl space-y-3">
                          {(sec.content.items || []).map((item: any, iIdx: number) => (
                            <div key={iIdx} className="flex gap-3 items-center">
                              <div className={`h-4 w-4 shrink-0 rounded flex items-center justify-center border text-[9px] font-bold ${
                                item.checked ? "bg-blue-600 border-blue-600 text-white" : "border-neutral-300 text-transparent"
                              }`}>
                                ✓
                              </div>
                              <span className={`text-sm ${item.checked ? "line-through text-neutral-400" : "text-neutral-700"}`}>
                                {item.text}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* PROS & CONS Render */}
                      {type === "pros-cons" && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                          <div className="p-5 border border-green-200 bg-green-50/30 rounded-xl space-y-3">
                            <h4 className="text-sm font-bold text-green-900 uppercase tracking-widest font-mono border-b border-green-200 pb-2">Pros</h4>
                            <ul className="space-y-2">
                              {(sec.content.pros || []).map((pro: any, pIdx: number) => (
                                <li key={pIdx} className="flex gap-2 items-start text-sm text-green-800">
                                  <span className="shrink-0 mt-0.5 font-bold">✓</span>
                                  <span>{pro.text}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="p-5 border border-red-200 bg-red-50/30 rounded-xl space-y-3">
                            <h4 className="text-sm font-bold text-red-900 uppercase tracking-widest font-mono border-b border-red-200 pb-2">Cons</h4>
                            <ul className="space-y-2">
                              {(sec.content.cons || []).map((con: any, cIdx: number) => (
                                <li key={cIdx} className="flex gap-2 items-start text-sm text-red-800">
                                  <span className="shrink-0 mt-0.5 font-bold text-[10px]">✕</span>
                                  <span>{con.text}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}

                      {/* EXPERT INSIGHT Render */}
                      {type === "expert-insight" && (
                        <div className="p-6 md:p-8 border-l-4 border-l-blue-600 bg-blue-50/50 rounded-r-2xl my-6 space-y-4">
                          <blockquote className="text-lg md:text-xl font-medium text-neutral-800 leading-relaxed italic">
                            "{sec.content.quote}"
                          </blockquote>
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-blue-100 border border-blue-200 flex items-center justify-center font-bold text-blue-700 text-sm select-none">
                              {sec.content.expertName?.charAt(0) || "E"}
                            </div>
                            <div>
                              <div className="text-sm font-bold text-neutral-900">{sec.content.expertName}</div>
                              <div className="text-xs text-neutral-600 font-mono">{sec.content.expertRole}</div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* FAQs Accordion Render */}
                      {type === "faqs" && (
                        <Accordion type="single" collapsible className="w-full space-y-3 pt-2">
                          {(sec.content.faqs || []).map((faq: any, fIdx: number) => (
                            <AccordionItem key={fIdx} value={`faq-${fIdx}`} className="border border-neutral-200 bg-neutral-50/30 rounded-xl px-5">
                              <AccordionTrigger className="text-base font-bold text-neutral-900 hover:no-underline py-4 text-left">
                                {faq.question}
                              </AccordionTrigger>
                              <AccordionContent className="text-neutral-600 text-sm leading-relaxed pb-4 border-t border-neutral-200 pt-3">
                                {faq.answer}
                              </AccordionContent>
                            </AccordionItem>
                          ))}
                        </Accordion>
                      )}

                      {/* CALL TO ACTION Render */}
                      {type === "cta" && (
                        <div className="p-8 border border-neutral-200 bg-neutral-50 rounded-2xl text-center space-y-5 relative overflow-hidden max-w-2xl mx-auto my-6">
                          <div className="space-y-2">
                            <h4 className="text-xl font-bold text-neutral-900">{sec.content.title}</h4>
                            <p className="text-xs text-neutral-500 leading-relaxed max-w-md mx-auto">{sec.content.description}</p>
                          </div>
                          <div>
                          <Link href={sec.content.buttonUrl || "#"}>
                            <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs px-6 py-4">
                              {sec.content.buttonText || "Schedule Demo"}
                            </Button>
                          </Link>
                          </div>
                        </div>
                      )}

                      {/* COST ESTIMATOR Render */}
                      {type === "cost-estimator" && (
                        <CustomSoftwareEstimator />
                      )}

                      {/* RELATED ARTICLES Render inside body */}
                      {type === "related-articles" && (
                        <div className="border border-neutral-200 bg-neutral-50/50 p-5 rounded-xl text-left space-y-3">
                          <span className="text-xs font-bold text-neutral-500 uppercase tracking-wider block">Recommended Guides</span>
                          <div className="space-y-2">
                            {relatedBlogs.slice(0, 2).map((rb) => (
                              <Link key={rb.id} href={`/blog/${rb.slug}`} className="flex items-center justify-between p-3 rounded hover:bg-neutral-50 transition-colors group border border-neutral-200 bg-white">
                                <span className="text-xs font-bold text-neutral-800 group-hover:text-blue-600 transition-colors truncate max-w-[280px]">
                                  {rb.title}
                                </span>
                                <ChevronRight className="w-4 h-4 text-neutral-400 group-hover:text-neutral-800 transition-colors" />
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}

                    </section>
                  );
                })
            )}

            
            
          </div>

          {/* Table of Contents and Sidebar Column (4 cols) */}
          <aside className="lg:col-span-4 lg:sticky lg:top-28 space-y-8">
            
            {/* Desktop Table of Contents (Sticky) */}
            {isBlock && contentStructure && contentStructure.sections.filter(s => s.isEnabled && s.type !== "hero").length > 0 && (
              <div className="hidden lg:block border border-neutral-200 bg-neutral-50/50 p-6 rounded-2xl text-left space-y-4">
                <h3 className="text-xs font-bold text-neutral-800 uppercase tracking-widest font-mono">Table of Contents</h3>
                <nav className="space-y-2">
                  {contentStructure.sections
                    .filter((s) => s.isEnabled && s.type !== "hero")
                    .map((sec) => {
                      const isActive = activeHeadingId === sec.id;
                      return (
                        <button
                          key={sec.id}
                          onClick={() => scrollToElement(sec.id)}
                          className={`w-full text-left text-xs block py-1 border-l-2 pl-3 transition-colors ${
                            isActive
                              ? "border-blue-600 text-neutral-900 font-bold"
                              : "border-neutral-200 text-neutral-500 hover:text-neutral-800"
                          }`}
                        >
                          {sec.title}
                        </button>
                      );
                    })}
                </nav>
              </div>
            )}

            {/* Author Profile Sidebar */}
            <div className="border border-neutral-200 bg-neutral-50/50 p-6 rounded-2xl text-left space-y-4">
              <h3 className="text-xs font-bold text-neutral-800 uppercase tracking-widest font-mono">The Author</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-neutral-100 border border-neutral-200 flex items-center justify-center font-bold text-neutral-750 uppercase text-sm select-none">
                    {blog.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-neutral-900">{blog.author}</h4>
                    <span className="text-[10px] text-neutral-500 font-mono">SaaS Operations Expert</span>
                  </div>
                </div>
                <p className="text-[11px] text-neutral-600 leading-normal">
                  Avijit and the CodeNClicks team audit, architect, and optimize web applications and custom CRMs for growth-driven companies in India.
                </p>
              </div>
            </div>

            {/* Related Articles Card */}
            {relatedBlogs.length > 0 && (
              <div className="border border-neutral-200 bg-neutral-50/50 p-6 rounded-2xl text-left space-y-4">
                <h3 className="text-xs font-bold text-neutral-800 uppercase tracking-widest font-mono">Related Guides</h3>
                <div className="space-y-4">
                  {relatedBlogs.map((rb) => (
                    <Link key={rb.id} href={`/blog/${rb.slug}`} className="group block space-y-1">
                      <span className="text-xs font-semibold text-neutral-500 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {rb.title}
                      </span>
                      <span className="text-[10px] font-mono text-neutral-600 block">
                        {new Date(rb.createdAt).toLocaleDateString("en-IN", { month: "short", year: "numeric" })}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}

          </aside>
          
        </div>
      </div>

      {/* ZOOM IMAGE BACKDROP MODAL */}
      <AnimatePresence>
        {zoomedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setZoomedImage(null)}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 cursor-zoom-out"
          >
            <button
              onClick={() => setZoomedImage(null)}
              className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-white rounded-full bg-neutral-900 border border-neutral-850"
            >
              <X className="w-5 h-5" />
            </button>
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="relative max-w-5xl max-h-[85vh] w-full h-full flex items-center justify-center"
            >
              <img
                src={zoomedImage}
                alt="Zoomed"
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
