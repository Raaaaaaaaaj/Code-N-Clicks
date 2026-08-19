"use client";

import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowLeft, Loader2, Save, Upload, Trash2, ArrowUp, ArrowDown,
  Plus, Layers, Search, Check, Eye, HelpCircle, AlertCircle, Info, CheckSquare, Sparkles, FileCode, GripVertical, X
} from "lucide-react";
import Link from "next/link";
import imageCompression from "browser-image-compression";
import { toast } from "sonner";
import slugify from "slugify";
import TipTapEditor from "./TipTapEditor";
import {
  BlogContentStructure,
  BlogSection,
  SectionType,
  parseBlogContent,
  calculateReadingTime,
  calculateSeoScore,
  SeoAuditItem,
  getRawTextFromSections
} from "@/lib/blog-builder";

interface BlogBuilderProps {
  initialData?: {
    id?: string;
    title: string;
    slug: string;
    category: string;
    author: string;
    content: string;
    featuredImage: string;
    seoTitle: string;
    metaDescription: string;
    canonicalUrl: string;
    targetKeywords: string;
    ogTitle: string;
    ogDescription: string;
    ogImage: string;
    isPublished: boolean;
    createdAt: string | Date;
  };
  onSave: (data: any) => Promise<void>;
  loading: boolean;
  isEdit?: boolean;
}

const SECTION_TEMPLATES: Record<SectionType, { title: string; defaultContent: any }> = {
  hero: {
    title: "Hero Banner",
    defaultContent: { title: "", subtitle: "", ctaText: "", ctaUrl: "", bgImage: "" },
  },
  summary: {
    title: "Quick Summary",
    defaultContent: { title: "Quick Summary", points: ["Key takeaway one", "Key takeaway two"] },
  },
  introduction: {
    title: "Introduction",
    defaultContent: { text: "<p>Write an engaging introduction paragraph here...</p>" },
  },
  problem: {
    title: "The Problem",
    defaultContent: { problemText: "<p>Describe the core problem or pain points...</p>", calloutType: "warning" },
  },
  statistics: {
    title: "Key Statistics",
    defaultContent: {
      stats: [
        { number: "85%", label: "Increase in efficiency", desc: "For hotels using modern software." },
        { number: "2.5x", label: "Faster check-ins", desc: "Using mobile and cloud-based PMS." }
      ]
    },
  },
  "why-matters": {
    title: "Why This Matters",
    defaultContent: {
      points: [
        { title: "Direct Bookings", desc: "Cut OTA commissions by up to 20% immediately." },
        { title: "Staff Productivity", desc: "Automate night audits and housekeeping rosters." }
      ]
    },
  },
  "step-guide": {
    title: "Step-by-Step Guide",
    defaultContent: {
      steps: [
        { title: "Assess Current Operations", instruction: "<p>Audit your checkout processes and identify bottlenecks.</p>", image: "" }
      ]
    },
  },
  "real-example": {
    title: "Real-world Case Study",
    defaultContent: { title: "Success Story", desc: "<p>How a 40-room hotel in Jaipur doubled their ADR.</p>", metrics: "+42% Revenue Growth" },
  },
  mistakes: {
    title: "Common Mistakes",
    defaultContent: {
      mistakes: [
        { title: "Legacy Server Software", desc: "Running operations on local desktop PCs without cloud backups." }
      ]
    },
  },
  "comparison-table": {
    title: "Comparison Table",
    defaultContent: {
      headers: ["Feature", "Cloud Software", "Legacy PMS"],
      rows: [
        ["Setup Speed", "1 Day", "2 Weeks"],
        ["Offline Mode", "Hybrid sync", "Local only"]
      ]
    },
  },
  checklist: {
    title: "Checklist",
    defaultContent: {
      items: [
        { text: "Confirm multi-property dashboard access", checked: false },
        { text: "Verify channel manager connection", checked: false }
      ]
    },
  },
  faqs: {
    title: "FAQs",
    defaultContent: {
      faqs: [
        { question: "What is a Channel Manager?", answer: "A tool that syncs your rooms and rates across OTAs in real-time." }
      ]
    },
  },
  conclusion: {
    title: "Conclusion",
    defaultContent: { title: "Wrapping Up", text: "<p>Final remarks and next steps to modernizing operations...</p>" },
  },
  cta: {
    title: "Call to Action",
    defaultContent: { title: "Ready to Upgrade Your Operations?", description: "Get a free 15-minute operational audit from our hospitality experts.", buttonText: "Schedule Free Demo", buttonUrl: "/contact" },
  },
  "related-articles": {
    title: "Related Articles",
    defaultContent: { articleIds: [] },
  },
  "pros-cons": {
    title: "Pros & Cons",
    defaultContent: { 
      pros: [{ text: "Pro point one" }],
      cons: [{ text: "Con point one" }]
    },
  },
  "expert-insight": {
    title: "Expert Insight",
    defaultContent: { 
      expertName: "Jane Doe",
      expertRole: "Tech Lead",
      quote: "Always evaluate the long-term maintainability of a software solution."
    },
  },
  "cost-estimator": {
    title: "Cost Estimator Tool",
    defaultContent: {},
  },
};

export default function BlogBuilder({ initialData, onSave, loading, isEdit = false }: BlogBuilderProps) {
  const [formData, setFormData] = useState({
    title: initialData?.title || "",
    slug: initialData?.slug || "",
    category: initialData?.category || "Hospitality",
    author: initialData?.author || "CodeNClicks Editorial",
    featuredImage: initialData?.featuredImage || "",
    isPublished: initialData?.isPublished ?? false,
    createdAt: initialData ? new Date(initialData.createdAt as any).toISOString().split("T")[0] : new Date().toISOString().split("T")[0],
    
    // SEO
    seoTitle: initialData?.seoTitle || "",
    metaDescription: initialData?.metaDescription || "",
    canonicalUrl: initialData?.canonicalUrl || "",
    targetKeywords: initialData?.targetKeywords || "",
    
    // OG
    ogTitle: initialData?.ogTitle || "",
    ogDescription: initialData?.ogDescription || "",
    ogImage: initialData?.ogImage || "",
  });

  const [structuredContent, setStructuredContent] = useState<BlogContentStructure>({
    version: "2026.1",
    metadata: {
      imageAltText: "",
      readingTime: 1,
      isFeatured: false,
      robots: { index: true, follow: true },
      focusKeyword: "",
      secondaryKeywords: [],
      semanticKeywords: [],
      schemaSettings: {
        article: true,
        faq: false,
        breadcrumb: true,
        howto: false,
        softwareApplication: false,
        organization: true,
        localBusiness: false,
      },
      relatedArticleIds: [],
    },
    sections: [],
  });

  const [activeSectionId, setActiveSectionId] = useState<string | null>(null);
  const [allBlogs, setAllBlogs] = useState<any[]>([]);
  const [isUploadingImage, setIsUploadingImage] = useState<string | null>(null);
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
  const [semanticKeywordsRaw, setSemanticKeywordsRaw] = useState<string>("");
  const [authorLinksRaw, setAuthorLinksRaw] = useState<string>("");
  const [customSchemaStr, setCustomSchemaStr] = useState<string>("");
  const [schemaError, setSchemaError] = useState<string | null>(null);
  const editorPanelRef = useRef<HTMLDivElement>(null);

  const selectSection = (id: string) => {
    setActiveSectionId(id);
    if (editorPanelRef.current) {
      editorPanelRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Load existing content structured parser
  useEffect(() => {
    if (initialData?.content) {
      const parsed = parseBlogContent(initialData.content);
      setStructuredContent(parsed);
      setSemanticKeywordsRaw((parsed.metadata.semanticKeywords || []).join(", "));
      setAuthorLinksRaw((parsed.metadata.authorLinks || []).join(", "));
      if (parsed.metadata.customSchema) {
        setCustomSchemaStr(parsed.metadata.customSchema);
      }
      if (parsed.sections.length > 0) {
        setActiveSectionId(parsed.sections[0].id);
      }
    } else {
      // Create template default sections for fresh creations
      const defaultSections: BlogSection[] = [
        { id: "intro-1", type: "introduction", title: "Introduction", isEnabled: true, content: SECTION_TEMPLATES.introduction.defaultContent },
        { id: "summary-1", type: "summary", title: "Quick Summary", isEnabled: true, content: SECTION_TEMPLATES.summary.defaultContent },
        { id: "conclusion-1", type: "conclusion", title: "Conclusion", isEnabled: true, content: SECTION_TEMPLATES.conclusion.defaultContent },
        { id: "cta-1", type: "cta", title: "Call to Action", isEnabled: true, content: SECTION_TEMPLATES.cta.defaultContent }
      ];
      setStructuredContent(prev => ({ ...prev, sections: defaultSections }));
      setActiveSectionId("intro-1");
    }
  }, [initialData]);

  // Fetch blogs for related article linking
  useEffect(() => {
    const loadBlogs = async () => {
      try {
        const res = await fetch("/api/blogs");
        if (res.ok) {
          const list = await res.json();
          // Exclude self if edit
          setAllBlogs(list.filter((b: any) => b.id !== initialData?.id));
        }
      } catch (err) {
        console.error("Failed to load relative blogs", err);
      }
    };
    loadBlogs();
  }, [initialData]);

  // Auto slug & SEO titles sync
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setFormData(prev => {
      const slug = slugify(val, { lower: true, strict: true });
      return {
        ...prev,
        title: val,
        slug,
        seoTitle: prev.seoTitle === prev.title || !prev.seoTitle ? val.substring(0, 60) : prev.seoTitle,
        ogTitle: prev.ogTitle === prev.title || !prev.ogTitle ? val.substring(0, 60) : prev.ogTitle,
      };
    });
  };

  // Image Upload helper
  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>, field: "featuredImage" | "ogImage" | string) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setIsUploadingImage(field);
    try {
      const options = {
        maxSizeMB: 0.8,
        maxWidthOrHeight: 1200,
        useWebWorker: true,
        fileType: "image/webp" as any,
      };
      const compressedFile = await imageCompression(file, options);
      const data = new FormData();
      data.append("file", compressedFile, file.name.replace(/\.[^/.]+$/, "") + ".webp");

      const res = await fetch("/api/upload", {
        method: "POST",
        body: data,
      });

      if (!res.ok) throw new Error("Upload failed");
      const resData = await res.json();

      if (field === "featuredImage" || field === "ogImage") {
        setFormData(prev => ({
          ...prev,
          [field]: resData.url,
          ...(field === "featuredImage" && !prev.ogImage ? { ogImage: resData.url } : {}),
        }));
      } else {
        // Section upload format e.g. section-idx-image
        const [_, secId, propKey, itemIdx] = field.split("::");
        updateSectionContent(secId, (content) => {
          if (itemIdx !== undefined) {
            const list = [...content[propKey]];
            list[parseInt(itemIdx)] = { ...list[parseInt(itemIdx)], image: resData.url };
            return { ...content, [propKey]: list };
          }
          return { ...content, [propKey]: resData.url };
        });
      }
      toast.success("WebP image uploaded successfully!");
    } catch (error) {
      toast.error("Failed to upload image.");
    } finally {
      setIsUploadingImage(null);
    }
  };

  // Content updater
  const updateSectionContent = (id: string, updater: (content: any) => any) => {
    setStructuredContent(prev => {
      const updated = prev.sections.map(sec => {
        if (sec.id === id) {
          return { ...sec, content: updater(sec.content) };
        }
        return sec;
      });
      return { ...prev, sections: updated };
    });
  };

  // Add section block
  const addSection = (type: SectionType) => {
    const template = SECTION_TEMPLATES[type];
    const newId = `${type}-${Date.now()}`;
    const newSec: BlogSection = {
      id: newId,
      type,
      title: template.title,
      isEnabled: true,
      content: JSON.parse(JSON.stringify(template.defaultContent)),
    };
    
    // Add before conclusion if exists, otherwise append
    setStructuredContent(prev => {
      const concIdx = prev.sections.findIndex(s => s.type === "conclusion");
      const list = [...prev.sections];
      if (concIdx !== -1) {
        list.splice(concIdx, 0, newSec);
      } else {
        list.push(newSec);
      }
      return { ...prev, sections: list };
    });
    setActiveSectionId(newId);
    toast.success(`Added ${template.title} block`);
  };

  // Reorder sections
  const moveSection = (index: number, direction: "up" | "down") => {
    setStructuredContent(prev => {
      const nextIndex = direction === "up" ? index - 1 : index + 1;
      if (nextIndex < 0 || nextIndex >= prev.sections.length) return prev;
      const list = [...prev.sections];
      const temp = list[index];
      list[index] = list[nextIndex];
      list[nextIndex] = temp;
      return { ...prev, sections: list };
    });
  };

  // HTML5 drag and drop handlers
  const handleDragStart = (index: number) => {
    setDraggedIndex(index);
  };

  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault();
  };

  const handleDrop = (index: number) => {
    if (draggedIndex === null || draggedIndex === index) return;
    setStructuredContent(prev => {
      const list = [...prev.sections];
      const draggedSec = list[draggedIndex];
      list.splice(draggedIndex, 1);
      list.splice(index, 0, draggedSec);
      return { ...prev, sections: list };
    });
    setDraggedIndex(null);
  };

  // Delete section
  const deleteSection = (id: string) => {
    setStructuredContent(prev => {
      const list = prev.sections.filter(s => s.id !== id);
      return { ...prev, sections: list };
    });
    if (activeSectionId === id) {
      setActiveSectionId(null);
    }
  };

  // SEO Health Audits
  const seoResults = calculateSeoScore({
    title: formData.title,
    seoTitle: formData.seoTitle,
    metaDescription: formData.metaDescription,
    focusKeyword: structuredContent.metadata.focusKeyword || "",
    imageAltText: structuredContent.metadata.imageAltText || "",
    schemaSettings: structuredContent.metadata.schemaSettings,
    relatedArticleIds: structuredContent.metadata.relatedArticleIds,
    sections: structuredContent.sections,
  });

  // Calculate live reading time
  useEffect(() => {
    const minutes = calculateReadingTime(structuredContent.sections);
    setStructuredContent(prev => {
      if (prev.metadata.readingTime === minutes) return prev;
      return { ...prev, metadata: { ...prev.metadata, readingTime: minutes } };
    });
  }, [structuredContent.sections]);

  // Save submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.slug) {
      toast.error("H1 Title and URL slug are required.");
      return;
    }
    if (structuredContent.sections.length === 0) {
      toast.error("Please add at least one section block in the Article Builder.");
      return;
    }

    if (schemaError) {
      toast.error("Please fix JSON-LD validation errors before saving.");
      return;
    }

    const payload = {
      ...formData,
      content: JSON.stringify({
        ...structuredContent,
        metadata: {
          ...structuredContent.metadata,
          readingTime: seoResults.readingTime,
          relatedArticleIds: structuredContent.metadata.relatedArticleIds,
          authorLinks: authorLinksRaw.split(",").map(k => k.trim()).filter(Boolean),
          customSchema: customSchemaStr.trim() !== "" ? customSchemaStr : undefined,
        }
      }),
    };
    onSave(payload);
  };

  // Generate automated schema LD-JSON string
  const generateSchemaLD = () => {
    const list: any[] = [];
    const meta = structuredContent.metadata;
    const url = formData.canonicalUrl || `https://codenclicksit.in/blog/${formData.slug}`;
    
    if (meta.schemaSettings.article) {
      const authorObj: any = {
        "@type": "Person",
        "name": formData.author,
        "url": "https://codenclicksit.in"
      };
      const authorLinks = authorLinksRaw.split(",").map(k => k.trim()).filter(Boolean);
      if (authorLinks.length > 0) {
        authorObj.sameAs = authorLinks;
      }
      list.push({
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": url
        },
        "headline": formData.seoTitle || formData.title,
        "description": formData.metaDescription || undefined,
        "image": formData.featuredImage ? [formData.featuredImage] : [],
        "datePublished": new Date(formData.createdAt).toISOString(),
        "dateModified": new Date().toISOString(),
        "author": [authorObj],
        "publisher": {
          "@type": "Organization",
          "name": "CodeNClicks IT Solutions",
          "logo": {
            "@type": "ImageObject",
            "url": "https://codenclicksit.in/favicon.png"
          }
        }
      });
    }

    if (meta.schemaSettings.faq) {
      const faqSec = structuredContent.sections.find(s => s.type === "faqs" && s.isEnabled);
      if (faqSec && faqSec.content.faqs) {
        list.push({
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

    if (meta.schemaSettings.breadcrumb) {
      list.push({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://codenclicksit.in" },
          { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://codenclicksit.in/blog" },
          { "@type": "ListItem", "position": 3, "name": formData.title, "item": url }
        ]
      });
    }

    return JSON.stringify(list, null, 2);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 text-neutral-200 blog-builder-form">
      <style dangerouslySetInnerHTML={{ __html: `
        .blog-builder-form input,
        .blog-builder-form textarea,
        .blog-builder-form select {
          background-color: #ffffff !important;
          color: #171717 !important;
          border-color: #d4d4d4 !important;
        }
        .blog-builder-form input::placeholder,
        .blog-builder-form textarea::placeholder {
          color: #888888 !important;
        }
        .blog-builder-form select option {
          background-color: #ffffff !important;
          color: #171717 !important;
        }
        .blog-builder-form .prose-container .tiptap {
          background-color: #ffffff !important;
          color: #171717 !important;
          border-radius: 8px;
        }
        .blog-builder-form .prose-container .tiptap p {
          color: #171717 !important;
        }
        .blog-builder-form .prose-container .tiptap h1,
        .blog-builder-form .prose-container .tiptap h2,
        .blog-builder-form .prose-container .tiptap h3 {
          color: #0f172a !important;
        }
      `}} />
      <div className="flex items-center justify-between border-b border-neutral-800 pb-5">
        <div className="flex items-center gap-4">
          <Link href="/admin/blogs">
            <Button type="button" variant="ghost" size="icon" className="rounded-full text-neutral-400 hover:text-white">
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-white">
              {isEdit ? "Redesign Post Details" : "Create Enterprise Article"}
            </h1>
            <p className="text-sm text-neutral-400">Block-based layout system & real-time SEO validation.</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-neutral-900 border border-neutral-800 px-3 py-1.5 rounded-lg">
            <Switch
              id="is-published"
              checked={formData.isPublished}
              onCheckedChange={(checked) => setFormData(prev => ({ ...prev, isPublished: checked }))}
            />
            <Label htmlFor="is-published" className="cursor-pointer text-xs font-semibold text-neutral-300">
              {formData.isPublished ? "Publish Live" : "Save Draft"}
            </Label>
          </div>
          <Button type="submit" disabled={loading} className="bg-blue-600 hover:bg-blue-700 text-white min-w-[130px]">
            {loading ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : <Save className="w-4 h-4 mr-2" />}
            {isEdit ? "Update Article" : "Publish Post"}
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left main forms column (8 cols) */}
        <div className="lg:col-span-8 space-y-8">
          
          {/* Card 1: Basic Information */}
          <Card className="bg-neutral-900/50 border-neutral-800 shadow-md">
            <CardHeader className="border-b border-neutral-800/60 pb-4">
              <CardTitle className="text-lg font-bold text-white flex items-center gap-2">
                <Info className="w-5 h-5 text-blue-500" /> Basic Information
              </CardTitle>
              <CardDescription className="text-neutral-400">Core parameters and content identifiers.</CardDescription>
            </CardHeader>
            <CardContent className="pt-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2 md:col-span-2">
                  <Label className="text-xs text-neutral-400 uppercase tracking-wider font-bold">H1 Title</Label>
                  <Input
                    required
                    value={formData.title}
                    onChange={handleTitleChange}
                    placeholder="e.g. The Ultimate Guide to Hotel Management Software"
                    className="bg-neutral-950 border-neutral-800 text-white focus-visible:ring-blue-600 text-base py-5"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label className="text-xs text-neutral-400 uppercase tracking-wider font-bold">URL Slug</Label>
                  <Input
                    required
                    value={formData.slug}
                    onChange={(e) => setFormData(prev => ({ ...prev, slug: e.target.value }))}
                    className="bg-neutral-950 border-neutral-800 font-mono text-neutral-300"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-xs text-neutral-400 uppercase tracking-wider font-bold font-mono">Category</Label>
                    <Input
                      list="blog-categories"
                      value={formData.category}
                      onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
                      className="bg-neutral-950 border-neutral-800 text-neutral-300"
                      placeholder="Select or type a category..."
                    />
                    <datalist id="blog-categories">
                      {Array.from(new Set([
                        "Technology", "Software Development", "Web Development", "Mobile App Development", 
                        "AI & Machine Learning", "Cybersecurity", "SEO & Digital Marketing", "SaaS & Cloud", 
                        "E-commerce", "Business & Automation", "Branding & Marketing", "IT Consulting",
                        ...allBlogs.map((b: any) => b.category).filter(Boolean)
                      ])).sort().map(cat => (
                        <option key={cat as string} value={cat as string} />
                      ))}
                    </datalist>
                  </div>
                  
                  <div className="space-y-2">
                    <Label className="text-xs text-neutral-400 uppercase tracking-wider font-bold font-mono">Reading Time</Label>
                    <div className="bg-neutral-950 border border-neutral-800 rounded-md h-10 px-3 flex items-center text-sm text-neutral-400 font-mono">
                      {seoResults.readingTime} Min (Auto)
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label className="text-xs text-neutral-400 uppercase tracking-wider font-bold">Author</Label>
                    <Input
                      required
                      value={formData.author}
                      onChange={(e) => setFormData(prev => ({ ...prev, author: e.target.value }))}
                      className="bg-neutral-950 border-neutral-800"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-xs text-neutral-400 uppercase tracking-wider font-bold text-blue-400">Author Profile Links (Optional)</Label>
                    <Input
                      value={authorLinksRaw}
                      onChange={(e) => setAuthorLinksRaw(e.target.value)}
                      placeholder="e.g. https://linkedin.com/in/username, https://github.com/username"
                      className="bg-neutral-950 border-neutral-800"
                    />
                    <p className="text-[11px] text-neutral-500">
                      Comma-separated URLs (LinkedIn, Twitter, GitHub, etc.) to include in the generated JSON-LD schema's <code>sameAs</code> property.
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-xs text-neutral-400 uppercase tracking-wider font-bold">Publish Date</Label>
                  <Input
                    type="date"
                    value={formData.createdAt}
                    onChange={(e) => setFormData(prev => ({ ...prev, createdAt: e.target.value }))}
                    className="bg-neutral-950 border-neutral-800"
                  />
                </div>
              </div>

              <div className="border-t border-neutral-800/60 pt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Image upload row */}
                <div className="space-y-3">
                  <Label className="text-xs text-neutral-400 uppercase tracking-wider font-bold">Featured Image</Label>
                  <div className="flex gap-4 items-center">
                    {formData.featuredImage && (
                      <div className="w-16 h-16 rounded border border-neutral-800 overflow-hidden shrink-0 bg-neutral-950">
                        <img src={formData.featuredImage} className="w-full h-full object-cover" alt="Featured" />
                      </div>
                    )}
                    <div className="flex-1">
                      <Input
                        value={formData.featuredImage}
                        onChange={(e) => setFormData(prev => ({ ...prev, featuredImage: e.target.value }))}
                        placeholder="Image URL or Upload..."
                        className="bg-neutral-950 border-neutral-800 text-xs mb-2"
                      />
                      <input
                        type="file"
                        accept="image/*"
                        id="featured-image-file"
                        className="hidden"
                        onChange={(e) => handleImageUpload(e, "featuredImage")}
                      />
                      <Label htmlFor="featured-image-file" className="cursor-pointer">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-neutral-800 hover:bg-neutral-700 text-xs font-semibold text-white border border-neutral-700">
                          {isUploadingImage === "featuredImage" ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Upload className="w-3.5 h-3.5" />}
                          Compress & Upload WebP
                        </span>
                      </Label>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label className="text-xs text-neutral-400 uppercase tracking-wider font-bold flex items-center gap-1.5">
                        <span>Featured Image Alt Text</span>
                        <span className="text-[10px] text-blue-400 font-mono font-normal">SEO Priority</span>
                      </Label>
                      {structuredContent.metadata.imageAltText ? (
                        <span className="text-[10px] font-mono text-green-400 bg-green-950/60 border border-green-800/80 px-2 py-0.5 rounded-full">
                          ✓ Alt text set
                        </span>
                      ) : (
                        <span className="text-[10px] font-mono text-amber-400 bg-amber-950/60 border border-amber-800/80 px-2 py-0.5 rounded-full">
                          Missing (SEO audit)
                        </span>
                      )}
                    </div>
                    <Input
                      value={structuredContent.metadata.imageAltText || ""}
                      onChange={(e) => setStructuredContent(prev => ({
                        ...prev,
                        metadata: { ...prev.metadata, imageAltText: e.target.value }
                      }))}
                      placeholder="e.g. Modern hotel reception desk in India with PMS software dashboard"
                      className="bg-neutral-950 border-neutral-800 text-xs"
                    />
                    <p className="text-[11px] text-neutral-500 leading-tight">
                      Accurate descriptive alt text helps Google Image Search index your blog and boosts organic rankings.
                    </p>
                  </div>

                  <div className="flex items-center justify-between border border-neutral-800 rounded px-3 py-2 bg-neutral-950/40">
                    <div>
                      <span className="text-xs text-neutral-300 font-bold block">Feature on Homepage Slider</span>
                      <span className="text-[10px] text-neutral-500 block">Pin this post to the featured hero highlights</span>
                    </div>
                    <Switch
                      checked={structuredContent.metadata.isFeatured}
                      onCheckedChange={(val) => setStructuredContent(prev => ({
                        ...prev,
                        metadata: { ...prev.metadata, isFeatured: val }
                      }))}
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Card 2: SEO Parameters */}
          <Card className="bg-neutral-900/50 border-neutral-800 shadow-md">
            <CardHeader className="border-b border-neutral-800/60 pb-4">
              <CardTitle className="text-lg font-bold text-white flex items-center gap-2">
                <Search className="w-5 h-5 text-green-500" /> Search Engine Optimization (SEO)
              </CardTitle>
              <CardDescription className="text-neutral-400">Configure canonicals, keywords, metadata and preview index display.</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <Tabs defaultValue="meta" className="w-full">
                <TabsList className="bg-neutral-950 border border-neutral-800 grid grid-cols-4 mb-6">
                  <TabsTrigger value="meta" className="data-[state=active]:bg-neutral-800 text-xs">Meta Info</TabsTrigger>
                  <TabsTrigger value="keywords" className="data-[state=active]:bg-neutral-800 text-xs">Target Keywords</TabsTrigger>
                  <TabsTrigger value="previews" className="data-[state=active]:bg-neutral-800 text-xs">SERP Previews</TabsTrigger>
                  <TabsTrigger value="jsonld" className="data-[state=active]:bg-neutral-800 text-xs">JSON-LD Editor</TabsTrigger>
                </TabsList>

                <TabsContent value="meta" className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2 md:col-span-2">
                      <div className="flex justify-between items-center">
                        <Label className="text-xs text-neutral-400 uppercase tracking-wider font-bold">SEO Meta Title</Label>
                        <span className={`text-[10px] font-mono ${formData.seoTitle.length >= 50 && formData.seoTitle.length <= 65 ? "text-green-400" : "text-yellow-400"}`}>
                          {formData.seoTitle.length} / 60 chars
                        </span>
                      </div>
                      <Input
                        value={formData.seoTitle}
                        onChange={(e) => setFormData(prev => ({ ...prev, seoTitle: e.target.value }))}
                        className="bg-neutral-950 border-neutral-800"
                      />
                    </div>

                    <div className="space-y-2 md:col-span-2">
                      <div className="flex justify-between items-center">
                        <Label className="text-xs text-neutral-400 uppercase tracking-wider font-bold">Meta Description</Label>
                        <span className={`text-[10px] font-mono ${formData.metaDescription.length >= 120 && formData.metaDescription.length <= 160 ? "text-green-400" : "text-yellow-400"}`}>
                          {formData.metaDescription.length} / 160 chars
                        </span>
                      </div>
                      <Textarea
                        value={formData.metaDescription}
                        onChange={(e) => setFormData(prev => ({ ...prev, metaDescription: e.target.value }))}
                        placeholder="Write a clear meta description..."
                        className="bg-neutral-950 border-neutral-800 h-20 resize-none text-xs leading-normal"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label className="text-xs text-neutral-400 uppercase tracking-wider font-bold">Canonical URL</Label>
                      <Input
                        value={formData.canonicalUrl}
                        onChange={(e) => setFormData(prev => ({ ...prev, canonicalUrl: e.target.value }))}
                        placeholder="e.g. https://codenclicksit.in/blog/slug"
                        className="bg-neutral-950 border-neutral-800 text-xs"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label className="text-xs text-neutral-400 uppercase tracking-wider font-bold">Robots Meta</Label>
                      <div className="grid grid-cols-2 gap-4 h-10 border border-neutral-800 rounded bg-neutral-950 px-3 items-center">
                        <label className="flex items-center gap-2 text-xs font-semibold cursor-pointer">
                          <Checkbox
                            checked={structuredContent.metadata.robots.index}
                            onCheckedChange={(val) => setStructuredContent(prev => ({
                              ...prev,
                              metadata: {
                                ...prev.metadata,
                                robots: { ...prev.metadata.robots, index: !!val }
                              }
                            }))}
                          />
                          <span>INDEX</span>
                        </label>
                        <label className="flex items-center gap-2 text-xs font-semibold cursor-pointer">
                          <Checkbox
                            checked={structuredContent.metadata.robots.follow}
                            onCheckedChange={(val) => setStructuredContent(prev => ({
                              ...prev,
                              metadata: {
                                ...prev.metadata,
                                robots: { ...prev.metadata.robots, follow: !!val }
                              }
                            }))}
                          />
                          <span>FOLLOW</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="keywords" className="space-y-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label className="text-xs text-neutral-400 uppercase tracking-wider font-bold text-blue-400">Focus Keyword (Primary)</Label>
                      <Input
                        value={structuredContent.metadata.focusKeyword || ""}
                        onChange={(e) => setStructuredContent(prev => ({
                          ...prev,
                          metadata: { ...prev.metadata, focusKeyword: e.target.value }
                        }))}
                        placeholder="e.g. hotel management software india"
                        className="bg-neutral-950 border-neutral-800"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label className="text-xs text-neutral-400 uppercase tracking-wider font-bold">Secondary Keywords (Comma-separated)</Label>
                      <Input
                        value={formData.targetKeywords}
                        onChange={(e) => setFormData(prev => ({ ...prev, targetKeywords: e.target.value }))}
                        placeholder="e.g. PMS system, cloud hotel software, booking engine"
                        className="bg-neutral-950 border-neutral-800"
                      />
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label className="text-xs text-neutral-400 uppercase tracking-wider font-bold">Semantic Keywords / Synonyms</Label>
                        <span className="text-[10px] text-neutral-500 font-mono">
                          {(structuredContent.metadata.semanticKeywords || []).length} keywords configured
                        </span>
                      </div>
                      <Input
                        value={semanticKeywordsRaw}
                        onChange={(e) => {
                          const val = e.target.value;
                          setSemanticKeywordsRaw(val);
                          setStructuredContent(prev => ({
                            ...prev,
                            metadata: {
                              ...prev.metadata,
                              semanticKeywords: val.split(",").map(k => k.trim()).filter(Boolean)
                            }
                          }));
                        }}
                        placeholder="Type synonyms separated by commas e.g. reservation system, guest management, hospitality software"
                        className="bg-neutral-950 border-neutral-800 text-xs"
                      />
                      <p className="text-[11px] text-neutral-500">
                        Separate keywords with commas (<kbd className="px-1 py-0.5 bg-neutral-800 text-[10px] rounded border border-neutral-700 text-neutral-300">,</kbd>). These help search engines understand topical depth and rank your post for LSI queries.
                      </p>
                      
                      {(structuredContent.metadata.semanticKeywords || []).length > 0 && (
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {structuredContent.metadata.semanticKeywords.map((kw, i) => (
                            <span
                              key={i}
                              className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-blue-950/60 border border-blue-800/60 text-[11px] text-blue-300"
                            >
                              {kw}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="previews" className="space-y-8">
                  {/* Google Search SERP Mockup */}
                  <div className="space-y-2">
                    <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider">Google Desktop Snippet Preview</span>
                    <div className="bg-white text-black p-5 rounded-lg border border-neutral-200 font-sans shadow-sm text-left">
                      <div className="text-[14px] text-[#202124] flex items-center gap-1.5 leading-tight mb-1">
                        <span>https://codenclicksit.in</span>
                        <span className="text-[#5f6368] text-xs">› blog › {formData.slug || "slug-path"}</span>
                      </div>
                      <div className="text-[20px] text-[#1a0dab] hover:underline cursor-pointer leading-snug font-medium mb-1.5">
                        {formData.seoTitle || formData.title || "Specify a Meta SEO Title"}
                      </div>
                      <div className="text-[14px] text-[#4d5156] leading-relaxed max-w-[600px]">
                        <span className="text-[#70757a]">Jul 27, 2026 — </span>
                        {formData.metaDescription || "Provide a custom meta description to display here in search engines."}
                      </div>
                    </div>
                  </div>

                  {/* Social Share Mockup */}
                  <div className="space-y-4">
                    <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider">Social Feed Card Preview (Facebook/LinkedIn)</span>
                    <div className="max-w-[500px] border border-neutral-800 rounded-xl overflow-hidden bg-neutral-950 shadow-lg text-left">
                      <div className="aspect-[1.91/1] w-full bg-neutral-900 border-b border-neutral-800 relative flex items-center justify-center overflow-hidden">
                        {formData.ogImage || formData.featuredImage ? (
                          <img
                            src={formData.ogImage || formData.featuredImage}
                            alt="Social Share Thumbnail"
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <span className="text-xs text-neutral-500">Provide an Open Graph Image</span>
                        )}
                      </div>
                      <div className="p-4 space-y-1 bg-[#18181b]">
                        <div className="text-[10px] font-mono font-bold tracking-wider text-neutral-500 uppercase">CODENCLICKSIT.IN</div>
                        <div className="text-[15px] font-bold text-white leading-tight line-clamp-1">
                          {formData.ogTitle || formData.seoTitle || formData.title || "Meta Sharing Title"}
                        </div>
                        <div className="text-xs text-neutral-400 line-clamp-2 leading-snug">
                          {formData.ogDescription || formData.metaDescription || "Meta sharing description..."}
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label className="text-xs text-neutral-400 uppercase tracking-wider font-bold">Open Graph Title (Social Override)</Label>
                      <Input
                        value={formData.ogTitle}
                        onChange={(e) => setFormData(prev => ({ ...prev, ogTitle: e.target.value }))}
                        className="bg-neutral-950 border-neutral-800 text-xs"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label className="text-xs text-neutral-400 uppercase tracking-wider font-bold">Open Graph Description (Social Override)</Label>
                      <Input
                        value={formData.ogDescription}
                        onChange={(e) => setFormData(prev => ({ ...prev, ogDescription: e.target.value }))}
                        className="bg-neutral-950 border-neutral-800 text-xs"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label className="text-xs text-neutral-400 uppercase tracking-wider font-bold">Open Graph Image (1200x630)</Label>
                      <div className="flex gap-4 items-center">
                        {formData.ogImage && (
                          <div className="w-16 h-16 rounded border border-neutral-800 overflow-hidden shrink-0 bg-neutral-950">
                            <img src={formData.ogImage} className="w-full h-full object-cover" alt="OG Preview" />
                          </div>
                        )}
                        <div className="flex-1">
                          <Input
                            value={formData.ogImage}
                            onChange={(e) => setFormData(prev => ({ ...prev, ogImage: e.target.value }))}
                            placeholder="Image URL..."
                            className="bg-neutral-950 border-neutral-800 text-xs mb-2"
                          />
                          <input
                            type="file"
                            accept="image/*"
                            id="og-image-file"
                            className="hidden"
                            onChange={(e) => handleImageUpload(e, "ogImage")}
                          />
                          <Label htmlFor="og-image-file" className="cursor-pointer">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-neutral-800 hover:bg-neutral-700 text-xs font-semibold text-white border border-neutral-700">
                              {isUploadingImage === "ogImage" ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Upload className="w-3.5 h-3.5" />}
                              Upload OG Image
                            </span>
                          </Label>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label className="text-xs text-neutral-400 uppercase tracking-wider font-bold">Open Graph Image Alt Text</Label>
                      <Input
                        value={structuredContent.metadata.imageAltText || ""}
                        onChange={(e) => setStructuredContent(prev => ({
                          ...prev,
                          metadata: { ...prev.metadata, imageAltText: e.target.value }
                        }))}
                        placeholder="e.g. Social media preview card showing key features"
                        className="bg-neutral-950 border-neutral-800 text-xs"
                      />
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="jsonld" className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-xs text-neutral-400 uppercase tracking-wider font-bold">Manual JSON-LD Editor</Label>
                      <p className="text-[11px] text-neutral-500 max-w-lg mt-1">
                        Edit the structured data schema for this post. Leave empty to use auto-generated schema. Edited schema will be preserved unless explicitly regenerated.
                      </p>
                    </div>
                    <Button 
                      type="button" 
                      variant="outline" 
                      size="sm"
                      onClick={() => {
                        const generated = generateSchemaLD();
                        setCustomSchemaStr(generated);
                        setSchemaError(null);
                        toast.success("Schema regenerated from current content.");
                      }}
                      className="bg-neutral-900 border-neutral-700 hover:bg-neutral-800 text-xs text-neutral-300"
                    >
                      <FileCode className="w-4 h-4 mr-2" />
                      Regenerate Auto Schema
                    </Button>
                  </div>
                  
                  {schemaError && (
                    <div className="p-3 bg-red-950/40 border border-red-900 rounded-md text-xs text-red-400 font-mono">
                      <AlertCircle className="w-4 h-4 inline mr-2" />
                      {schemaError}
                    </div>
                  )}

                  <Textarea
                    value={customSchemaStr || generateSchemaLD()}
                    onChange={(e) => {
                      const val = e.target.value;
                      setCustomSchemaStr(val);
                      if (val.trim() === "") {
                        setSchemaError(null);
                        return;
                      }
                      try {
                        JSON.parse(val);
                        setSchemaError(null);
                      } catch (err: any) {
                        setSchemaError("Invalid JSON: " + err.message);
                      }
                    }}
                    placeholder="Enter valid JSON-LD array..."
                    className={`bg-neutral-950 h-96 font-mono text-xs leading-normal ${schemaError ? 'border-red-500' : 'border-neutral-800'}`}
                    spellCheck={false}
                  />
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Card 3: Article Builder */}
          <Card className="bg-neutral-900/50 border-neutral-800 shadow-md">
            <CardHeader className="border-b border-neutral-800 pb-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <CardTitle className="text-lg font-bold text-white flex items-center gap-2">
                  <Layers className="w-5 h-5 text-blue-400" /> Article Builder
                </CardTitle>
                <CardDescription className="text-neutral-400">Assemble article structures using modular block components.</CardDescription>
              </div>
              <div className="flex flex-wrap gap-2">
                <select
                  onChange={(e) => {
                    if (e.target.value) {
                      addSection(e.target.value as SectionType);
                      e.target.value = "";
                    }
                  }}
                  className="bg-neutral-950 border border-neutral-800 rounded px-2.5 py-1.5 text-xs text-blue-400 focus:outline-none"
                >
                  <option value="">+ Add Content Block...</option>
                  {Object.keys(SECTION_TEMPLATES).map((key) => (
                    <option key={key} value={key}>
                      {SECTION_TEMPLATES[key as SectionType].title}
                    </option>
                  ))}
                </select>
              </div>
            </CardHeader>
            
            <CardContent className="p-0">
              <div className="grid grid-cols-1 md:grid-cols-12 h-[600px]">
                
                {/* Left Panel: Sections List (4 cols) */}
                <div className="md:col-span-4 border-r border-neutral-800 bg-neutral-950/30 overflow-y-auto h-full max-h-[600px] divide-y divide-neutral-800/80 custom-scrollbar overscroll-contain">
                  {structuredContent.sections.length === 0 ? (
                    <div className="p-6 text-center text-xs text-neutral-500">No content blocks added yet. Use the selector above to add blocks.</div>
                  ) : (
                    structuredContent.sections.map((sec, idx) => (
                      <div
                        key={sec.id}
                        draggable
                        onDragStart={() => handleDragStart(idx)}
                        onDragOver={(e) => handleDragOver(e, idx)}
                        onDrop={() => handleDrop(idx)}
                        className={`group p-3 flex items-center justify-between text-xs cursor-pointer transition-colors ${
                          activeSectionId === sec.id
                            ? "bg-neutral-800 text-white font-bold"
                            : "text-neutral-400 hover:bg-neutral-900/60"
                        } ${!sec.isEnabled ? "opacity-50" : ""}`}
                        onClick={() => selectSection(sec.id)}
                      >
                        <div className="flex items-center gap-2 truncate">
                          <div className="cursor-grab text-neutral-600 hover:text-neutral-400 active:cursor-grabbing p-1">
                            <GripVertical className="w-3.5 h-3.5 shrink-0" />
                          </div>
                          <span className="font-mono text-[10px] text-neutral-600">#{idx + 1}</span>
                          <span className="truncate">{sec.title || sec.type}</span>
                        </div>
                        <div className="flex items-center gap-1 opacity-80 md:opacity-0 group-hover:opacity-100 transition-opacity">
                          <button
                            type="button"
                            onClick={(e) => { e.stopPropagation(); moveSection(idx, "up"); }}
                            disabled={idx === 0}
                            className="p-1 hover:text-white disabled:opacity-30"
                          >
                            <ArrowUp className="w-3 h-3" />
                          </button>
                          <button
                            type="button"
                            onClick={(e) => { e.stopPropagation(); moveSection(idx, "down"); }}
                            disabled={idx === structuredContent.sections.length - 1}
                            className="p-1 hover:text-white disabled:opacity-30"
                          >
                            <ArrowDown className="w-3 h-3" />
                          </button>
                          <button
                            type="button"
                            onClick={(e) => { e.stopPropagation(); deleteSection(sec.id); }}
                            className="p-1 text-red-500 hover:text-red-400"
                          >
                            <Trash2 className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    ))
                  )}
                </div>

                {/* Right Panel: Selected Section Editor (8 cols) */}
                <div 
                  ref={editorPanelRef} 
                  className="md:col-span-8 p-6 bg-neutral-950/20 overflow-y-auto h-full max-h-[600px] custom-scrollbar overscroll-contain scroll-smooth"
                >
                  {(() => {
                    const activeSec = structuredContent.sections.find(s => s.id === activeSectionId);
                    if (!activeSec) {
                      return (
                        <div className="h-full flex flex-col items-center justify-center text-center p-8">
                          <Layers className="w-8 h-8 text-neutral-600 mb-2" />
                          <p className="text-xs text-neutral-500">Select a content block from the sidebar list to edit its fields.</p>
                        </div>
                      );
                    }

                    return (
                      <div className="space-y-6">
                        <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
                          <div className="space-y-1">
                            <span className="text-[10px] font-mono bg-neutral-850 px-2 py-0.5 border border-neutral-700 text-blue-400 uppercase rounded">
                              {activeSec.type}
                            </span>
                            <h3 className="text-sm font-bold text-white">Block Editor</h3>
                          </div>
                          
                          <div className="flex items-center gap-4">
                            <label className="flex items-center gap-1.5 text-xs text-neutral-400 cursor-pointer">
                              <Checkbox
                                checked={activeSec.isEnabled}
                                onCheckedChange={(val) => {
                                  setStructuredContent(prev => ({
                                    ...prev,
                                    sections: prev.sections.map(s => s.id === activeSec.id ? { ...s, isEnabled: !!val } : s)
                                  }));
                                }}
                              />
                              <span>Enabled</span>
                            </label>
                            
                            <Button
                              type="button"
                              variant="destructive"
                              size="icon"
                              className="h-7 w-7 rounded bg-red-950 text-red-400 hover:bg-red-900 hover:text-red-200"
                              onClick={() => deleteSection(activeSec.id)}
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </Button>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label className="text-xs text-neutral-400">Block Sidebar Label</Label>
                          <Input
                            value={activeSec.title}
                            onChange={(e) => {
                              const val = e.target.value;
                              setStructuredContent(prev => ({
                                ...prev,
                                sections: prev.sections.map(s => s.id === activeSec.id ? { ...s, title: val } : s)
                              }));
                            }}
                            className="bg-neutral-950 border-neutral-800 text-xs font-semibold"
                          />
                        </div>

                        {/* RENDER SPECIFIC SUB-SECTION FORMS */}
                        <div className="space-y-4 pt-4 border-t border-neutral-850">
                          
                          {/* HERO editor */}
                          {activeSec.type === "hero" && (
                            <div className="space-y-4">
                              <div className="space-y-2">
                                <Label className="text-xs text-neutral-400">Hero Main Headline</Label>
                                <Input
                                  value={activeSec.content.title || ""}
                                  onChange={(e) => updateSectionContent(activeSec.id, c => ({ ...c, title: e.target.value }))}
                                  placeholder="Leave blank to use H1 title"
                                  className="bg-neutral-950 border-neutral-800"
                                />
                              </div>
                              <div className="space-y-2">
                                <Label className="text-xs text-neutral-400">Hero Subtitle</Label>
                                <Textarea
                                  value={activeSec.content.subtitle || ""}
                                  onChange={(e) => updateSectionContent(activeSec.id, c => ({ ...c, subtitle: e.target.value }))}
                                  className="bg-neutral-950 border-neutral-800 text-xs h-16 resize-none"
                                />
                              </div>
                              <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                  <Label className="text-xs text-neutral-400">CTA Button Text</Label>
                                  <Input
                                    value={activeSec.content.ctaText || ""}
                                    onChange={(e) => updateSectionContent(activeSec.id, c => ({ ...c, ctaText: e.target.value }))}
                                    placeholder="e.g. Schedule Audit"
                                    className="bg-neutral-950 border-neutral-800"
                                  />
                                </div>
                                <div className="space-y-2">
                                  <Label className="text-xs text-neutral-400">CTA Destination URL</Label>
                                  <Input
                                    value={activeSec.content.ctaUrl || ""}
                                    onChange={(e) => updateSectionContent(activeSec.id, c => ({ ...c, ctaUrl: e.target.value }))}
                                    placeholder="/contact"
                                    className="bg-neutral-950 border-neutral-800"
                                  />
                                </div>
                              </div>
                              <div className="space-y-3">
                                <Label className="text-xs text-neutral-400">Hero Custom Background Image</Label>
                                <div className="flex gap-3 items-center">
                                  <Input
                                    value={activeSec.content.bgImage || ""}
                                    onChange={(e) => updateSectionContent(activeSec.id, c => ({ ...c, bgImage: e.target.value }))}
                                    placeholder="Image URL or upload..."
                                    className="bg-neutral-950 border-neutral-800 text-xs"
                                  />
                                  <input
                                    type="file"
                                    accept="image/*"
                                    id={`hero-bg-${activeSec.id}`}
                                    className="hidden"
                                    onChange={(e) => handleImageUpload(e, `sec-hero-bg::${activeSec.id}`)}
                                  />
                                  <Label htmlFor={`hero-bg-${activeSec.id}`} className="cursor-pointer">
                                    <span className="inline-flex items-center gap-1 px-2.5 py-2 rounded bg-neutral-800 text-xs font-semibold text-white border border-neutral-700 shrink-0">
                                      {isUploadingImage === `sec-hero-bg::${activeSec.id}` ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Upload className="w-3.5 h-3.5" />}
                                      Upload WebP
                                    </span>
                                  </Label>
                                </div>
                              </div>

                              <div className="space-y-2">
                                <Label className="text-xs text-neutral-400">Hero Background Image Alt Text (SEO)</Label>
                                <Input
                                  value={activeSec.content.bgImageAlt || ""}
                                  onChange={(e) => updateSectionContent(activeSec.id, c => ({ ...c, bgImageAlt: e.target.value }))}
                                  placeholder="e.g. Panoramic view of modern Indian hotel resort lobby"
                                  className="bg-neutral-950 border-neutral-800 text-xs"
                                />
                              </div>
                            </div>
                          )}

                          {/* QUICK SUMMARY editor */}
                          {activeSec.type === "summary" && (
                            <div className="space-y-4">
                              <div className="space-y-2">
                                <Label className="text-xs text-neutral-400">Summary Heading</Label>
                                <Input
                                  value={activeSec.content.title || ""}
                                  onChange={(e) => updateSectionContent(activeSec.id, c => ({ ...c, title: e.target.value }))}
                                  className="bg-neutral-950 border-neutral-800"
                                />
                              </div>
                              <div className="space-y-3">
                                <Label className="text-xs text-neutral-400">Bullet Points</Label>
                                {(activeSec.content.points || []).map((point: string, pIdx: number) => (
                                  <div key={pIdx} className="flex gap-2 items-center">
                                    <Input
                                      value={point}
                                      onChange={(e) => {
                                        const val = e.target.value;
                                        updateSectionContent(activeSec.id, c => {
                                          const list = [...c.points];
                                          list[pIdx] = val;
                                          return { ...c, points: list };
                                        });
                                      }}
                                      className="bg-neutral-950 border-neutral-800 text-xs"
                                    />
                                    <Button
                                      type="button"
                                      variant="ghost"
                                      size="icon"
                                      className="h-8 w-8 text-neutral-500 hover:text-red-400 shrink-0"
                                      onClick={() => {
                                        updateSectionContent(activeSec.id, c => {
                                          return { ...c, points: c.points.filter((_: any, idx: number) => idx !== pIdx) };
                                        });
                                      }}
                                    >
                                      <Trash2 className="w-3.5 h-3.5" />
                                    </Button>
                                  </div>
                                ))}
                                <Button
                                  type="button"
                                  variant="outline"
                                  size="sm"
                                  className="border-neutral-800 hover:bg-neutral-800/50 mt-2 text-xs"
                                  onClick={() => {
                                    updateSectionContent(activeSec.id, c => ({ ...c, points: [...(c.points || []), ""] }));
                                  }}
                                >
                                  <Plus className="w-3.5 h-3.5 mr-1" /> Add Summary Point
                                </Button>
                              </div>
                            </div>
                          )}

                          {/* INTRODUCTION editor */}
                          {activeSec.type === "introduction" && (
                            <div className="space-y-2">
                              <Label className="text-xs text-neutral-400">Rich Introduction Paragraphs</Label>
                              <TipTapEditor
                                content={activeSec.content.text || ""}
                                onChange={(html) => updateSectionContent(activeSec.id, c => ({ ...c, text: html }))}
                              />
                            </div>
                          )}

                          {/* CONCLUSION editor */}
                          {activeSec.type === "conclusion" && (
                            <div className="space-y-4">
                              <div className="space-y-2">
                                <Label className="text-xs text-neutral-400">Conclusion Title</Label>
                                <Input
                                  value={activeSec.content.title || ""}
                                  onChange={(e) => updateSectionContent(activeSec.id, c => ({ ...c, title: e.target.value }))}
                                  className="bg-neutral-950 border-neutral-800"
                                />
                              </div>
                              <div className="space-y-2">
                                <Label className="text-xs text-neutral-400">Rich Conclusion Content</Label>
                                <TipTapEditor
                                  content={activeSec.content.text || ""}
                                  onChange={(html) => updateSectionContent(activeSec.id, c => ({ ...c, text: html }))}
                                />
                              </div>
                            </div>
                          )}

                          {/* PROBLEM editor */}
                          {activeSec.type === "problem" && (
                            <div className="space-y-4">
                              <div className="space-y-2">
                                <Label className="text-xs text-neutral-400 font-mono">Alert Callout Type</Label>
                                <select
                                  value={activeSec.content.calloutType || "warning"}
                                  onChange={(e) => updateSectionContent(activeSec.id, c => ({ ...c, calloutType: e.target.value }))}
                                  className="w-full bg-neutral-950 border border-neutral-800 rounded-md h-9 px-2 text-xs text-neutral-300 focus:outline-none"
                                >
                                  <option value="info">Info (Blue)</option>
                                  <option value="warning">Warning (Yellow/Orange)</option>
                                  <option value="tip">Tip (Green)</option>
                                  <option value="caution">Caution (Red)</option>
                                </select>
                              </div>
                              <div className="space-y-2">
                                <Label className="text-xs text-neutral-400">Problem Body Text</Label>
                                <TipTapEditor
                                  content={activeSec.content.problemText || ""}
                                  minHeight="min-h-[160px]"
                                  onChange={(html) => updateSectionContent(activeSec.id, c => ({ ...c, problemText: html }))}
                                />
                              </div>
                            </div>
                          )}

                          {/* STATISTICS editor */}
                          {activeSec.type === "statistics" && (
                            <div className="space-y-4">
                              <Label className="text-xs text-neutral-400 font-bold">Statistic Cards Grid</Label>
                              {(activeSec.content.stats || []).map((stat: any, sIdx: number) => (
                                <div key={sIdx} className="p-3 border border-neutral-800 rounded bg-neutral-950/40 space-y-3">
                                  <div className="flex justify-between items-center">
                                    <span className="text-[10px] font-mono text-neutral-500">Stat #{sIdx + 1}</span>
                                    <Button
                                      type="button"
                                      variant="ghost"
                                      size="icon"
                                      className="h-7 w-7 text-neutral-500 hover:text-red-400"
                                      onClick={() => {
                                        updateSectionContent(activeSec.id, c => ({
                                          ...c,
                                          stats: c.stats.filter((_: any, idx: number) => idx !== sIdx)
                                        }));
                                      }}
                                    >
                                      <Trash2 className="w-3.5 h-3.5" />
                                    </Button>
                                  </div>
                                  <div className="grid grid-cols-3 gap-3">
                                    <div className="space-y-1 col-span-1">
                                      <Label className="text-[10px] text-neutral-500">Stat Value (e.g. 85%)</Label>
                                      <Input
                                        value={stat.number || ""}
                                        onChange={(e) => {
                                          const val = e.target.value;
                                          updateSectionContent(activeSec.id, c => {
                                            const list = [...c.stats];
                                            list[sIdx] = { ...list[sIdx], number: val };
                                            return { ...c, stats: list };
                                          });
                                        }}
                                        className="bg-neutral-950 border-neutral-800 text-xs"
                                      />
                                    </div>
                                    <div className="space-y-1 col-span-2">
                                      <Label className="text-[10px] text-neutral-500">Stat Headline/Label</Label>
                                      <Input
                                        value={stat.label || ""}
                                        onChange={(e) => {
                                          const val = e.target.value;
                                          updateSectionContent(activeSec.id, c => {
                                            const list = [...c.stats];
                                            list[sIdx] = { ...list[sIdx], label: val };
                                            return { ...c, stats: list };
                                          });
                                        }}
                                        className="bg-neutral-950 border-neutral-800 text-xs"
                                      />
                                    </div>
                                    <div className="space-y-1 col-span-3">
                                      <Label className="text-[10px] text-neutral-500">Short Context/Description</Label>
                                      <Input
                                        value={stat.desc || ""}
                                        onChange={(e) => {
                                          const val = e.target.value;
                                          updateSectionContent(activeSec.id, c => {
                                            const list = [...c.stats];
                                            list[sIdx] = { ...list[sIdx], desc: val };
                                            return { ...c, stats: list };
                                          });
                                        }}
                                        className="bg-neutral-950 border-neutral-800 text-xs"
                                      />
                                    </div>
                                  </div>
                                </div>
                              ))}
                              <Button
                                type="button"
                                variant="outline"
                                size="sm"
                                className="border-neutral-800 text-xs mt-1"
                                onClick={() => {
                                  updateSectionContent(activeSec.id, c => ({
                                    ...c,
                                    stats: [...(c.stats || []), { number: "", label: "", desc: "" }]
                                  }));
                                }}
                              >
                                <Plus className="w-3.5 h-3.5 mr-1" /> Add Statistic Card
                              </Button>
                            </div>
                          )}

                          {/* WHY THIS MATTERS editor */}
                          {activeSec.type === "why-matters" && (
                            <div className="space-y-4">
                              <Label className="text-xs text-neutral-400 font-bold">Key Reasons List</Label>
                              {(activeSec.content.points || []).map((point: any, pIdx: number) => (
                                <div key={pIdx} className="p-3 border border-neutral-800 rounded bg-neutral-950/40 space-y-3">
                                  <div className="flex justify-between items-center">
                                    <span className="text-[10px] font-mono text-neutral-500">Reason #{pIdx + 1}</span>
                                    <Button
                                      type="button"
                                      variant="ghost"
                                      size="icon"
                                      className="h-7 w-7 text-neutral-500 hover:text-red-400"
                                      onClick={() => {
                                        updateSectionContent(activeSec.id, c => ({
                                          ...c,
                                          points: c.points.filter((_: any, idx: number) => idx !== pIdx)
                                        }));
                                      }}
                                    >
                                      <Trash2 className="w-3.5 h-3.5" />
                                    </Button>
                                  </div>
                                  <div className="space-y-2">
                                    <Input
                                      value={point.title || ""}
                                      placeholder="Feature / Benefit Title"
                                      onChange={(e) => {
                                        const val = e.target.value;
                                        updateSectionContent(activeSec.id, c => {
                                          const list = [...c.points];
                                          list[pIdx] = { ...list[pIdx], title: val };
                                          return { ...c, points: list };
                                        });
                                      }}
                                      className="bg-neutral-950 border-neutral-800 text-xs font-bold"
                                    />
                                    <Textarea
                                      value={point.desc || ""}
                                      placeholder="Describe why this matters to the reader..."
                                      onChange={(e) => {
                                        const val = e.target.value;
                                        updateSectionContent(activeSec.id, c => {
                                          const list = [...c.points];
                                          list[pIdx] = { ...list[pIdx], desc: val };
                                          return { ...c, points: list };
                                        });
                                      }}
                                      className="bg-neutral-950 border-neutral-800 text-xs h-16 resize-none"
                                    />
                                  </div>
                                </div>
                              ))}
                              <Button
                                type="button"
                                variant="outline"
                                size="sm"
                                className="border-neutral-800 text-xs mt-1"
                                onClick={() => {
                                  updateSectionContent(activeSec.id, c => ({
                                    ...c,
                                    points: [...(c.points || []), { title: "", desc: "" }]
                                  }));
                                }}
                              >
                                <Plus className="w-3.5 h-3.5 mr-1" /> Add Reason Card
                              </Button>
                            </div>
                          )}

                          {/* STEP BY STEP GUIDE editor */}
                          {activeSec.type === "step-guide" && (
                            <div className="space-y-4">
                              <Label className="text-xs text-neutral-400 font-bold">List of Instructional Steps</Label>
                              {(activeSec.content.steps || []).map((step: any, sIdx: number) => (
                                <div key={sIdx} className="p-4 border border-neutral-800 rounded bg-neutral-950/40 space-y-3">
                                  <div className="flex justify-between items-center">
                                    <span className="text-[10px] font-mono text-neutral-500 font-bold">Step {sIdx + 1}</span>
                                    <Button
                                      type="button"
                                      variant="ghost"
                                      size="icon"
                                      className="h-7 w-7 text-neutral-500 hover:text-red-400"
                                      onClick={() => {
                                        updateSectionContent(activeSec.id, c => ({
                                          ...c,
                                          steps: c.steps.filter((_: any, idx: number) => idx !== sIdx)
                                        }));
                                      }}
                                    >
                                      <Trash2 className="w-3.5 h-3.5" />
                                    </Button>
                                  </div>

                                  <div className="space-y-2">
                                    <Label className="text-[10px] text-neutral-500">Step Title</Label>
                                    <Input
                                      value={step.title || ""}
                                      onChange={(e) => {
                                        const val = e.target.value;
                                        updateSectionContent(activeSec.id, c => {
                                          const list = [...c.steps];
                                          list[sIdx] = { ...list[sIdx], title: val };
                                          return { ...c, steps: list };
                                        });
                                      }}
                                      className="bg-neutral-950 border-neutral-800 text-xs"
                                    />
                                  </div>

                                  <div className="space-y-2">
                                    <Label className="text-[10px] text-neutral-500">Step Instruction content</Label>
                                    <TipTapEditor
                                      content={step.instruction || ""}
                                      minHeight="min-h-[140px]"
                                      onChange={(html) => {
                                        updateSectionContent(activeSec.id, c => {
                                          const list = [...c.steps];
                                          list[sIdx] = { ...list[sIdx], instruction: html };
                                          return { ...c, steps: list };
                                        });
                                      }}
                                    />
                                  </div>

                                  <div className="space-y-3 pt-2 border-t border-neutral-850">
                                    <Label className="text-[10px] text-neutral-500 font-semibold uppercase tracking-wider">Step Image & Alt Text (Optional)</Label>
                                    <div className="flex gap-4 items-center">
                                      {step.image && (
                                        <div className="w-12 h-12 rounded border border-neutral-800 overflow-hidden shrink-0 bg-neutral-950">
                                          <img src={step.image} className="w-full h-full object-cover" alt={step.imageAlt || "Step preview"} />
                                        </div>
                                      )}
                                      <div className="flex-grow">
                                        <Input
                                          value={step.image || ""}
                                          placeholder="Image URL or upload file..."
                                          onChange={(e) => {
                                            const val = e.target.value;
                                            updateSectionContent(activeSec.id, c => {
                                              const list = [...c.steps];
                                              list[sIdx] = { ...list[sIdx], image: val };
                                              return { ...c, steps: list };
                                            });
                                          }}
                                          className="bg-neutral-950 border-neutral-800 text-xs mb-1.5"
                                        />
                                        <input
                                          type="file"
                                          accept="image/*"
                                          id={`step-img-${activeSec.id}-${sIdx}`}
                                          className="hidden"
                                          onChange={(e) => handleImageUpload(e, `sec-step::${activeSec.id}::steps::${sIdx}`)}
                                        />
                                        <Label htmlFor={`step-img-${activeSec.id}-${sIdx}`} className="cursor-pointer">
                                          <span className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded bg-neutral-800 text-[10px] font-semibold text-neutral-300 border border-neutral-700">
                                            {isUploadingImage === `sec-step::${activeSec.id}::steps::${sIdx}` ? <Loader2 className="w-3 animate-spin" /> : <Upload className="w-3 h-3" />}
                                            Upload Step WebP
                                          </span>
                                        </Label>
                                      </div>
                                    </div>

                                    {step.image && (
                                      <div className="space-y-1">
                                        <Label className="text-[10px] text-neutral-400">Step Image Alt Text (SEO)</Label>
                                        <Input
                                          value={step.imageAlt || ""}
                                          placeholder="e.g. Screenshot of the PMS reservation screen"
                                          onChange={(e) => {
                                            const val = e.target.value;
                                            updateSectionContent(activeSec.id, c => {
                                              const list = [...c.steps];
                                              list[sIdx] = { ...list[sIdx], imageAlt: val };
                                              return { ...c, steps: list };
                                            });
                                          }}
                                          className="bg-neutral-950 border-neutral-800 text-xs"
                                        />
                                      </div>
                                    )}
                                  </div>
                                </div>
                              ))}
                              <Button
                                type="button"
                                variant="outline"
                                size="sm"
                                className="border-neutral-800 text-xs mt-1"
                                onClick={() => {
                                  updateSectionContent(activeSec.id, c => ({
                                    ...c,
                                    steps: [...(c.steps || []), { title: "", instruction: "", image: "" }]
                                  }));
                                }}
                              >
                                <Plus className="w-3.5 h-3.5 mr-1" /> Add Instruction Step
                              </Button>
                            </div>
                          )}

                          {/* CASE STUDY REAL EXAMPLE editor */}
                          {activeSec.type === "real-example" && (
                            <div className="space-y-4">
                              <div className="space-y-2">
                                <Label className="text-xs text-neutral-400">Case Study Title</Label>
                                <Input
                                  value={activeSec.content.title || ""}
                                  onChange={(e) => updateSectionContent(activeSec.id, c => ({ ...c, title: e.target.value }))}
                                  className="bg-neutral-950 border-neutral-800"
                                />
                              </div>
                              <div className="space-y-2">
                                <Label className="text-xs text-neutral-400">Key Highlight Metric Badge (e.g. +40% ADR)</Label>
                                <Input
                                  value={activeSec.content.metrics || ""}
                                  placeholder="e.g. +38% Bookings"
                                  onChange={(e) => updateSectionContent(activeSec.id, c => ({ ...c, metrics: e.target.value }))}
                                  className="bg-neutral-950 border-neutral-800 font-mono text-xs text-green-400"
                                />
                              </div>
                              <div className="space-y-2">
                                <Label className="text-xs text-neutral-400">Case Study Description</Label>
                                <TipTapEditor
                                  content={activeSec.content.desc || ""}
                                  minHeight="min-h-[160px]"
                                  onChange={(html) => updateSectionContent(activeSec.id, c => ({ ...c, desc: html }))}
                                />
                              </div>
                            </div>
                          )}

                          {/* COMMON MISTAKES editor */}
                          {activeSec.type === "mistakes" && (
                            <div className="space-y-4">
                              <Label className="text-xs text-neutral-400 font-bold">List of Mistakes to Avoid</Label>
                              {(activeSec.content.mistakes || []).map((mistake: any, mIdx: number) => (
                                <div key={mIdx} className="p-3 border border-neutral-800 rounded bg-neutral-950/40 space-y-3">
                                  <div className="flex justify-between items-center">
                                    <span className="text-[10px] font-mono text-red-500 font-bold">Mistake #{mIdx + 1}</span>
                                    <Button
                                      type="button"
                                      variant="ghost"
                                      size="icon"
                                      className="h-7 w-7 text-neutral-500 hover:text-red-400"
                                      onClick={() => {
                                        updateSectionContent(activeSec.id, c => ({
                                          ...c,
                                          mistakes: c.mistakes.filter((_: any, idx: number) => idx !== mIdx)
                                        }));
                                      }}
                                    >
                                      <Trash2 className="w-3.5 h-3.5" />
                                    </Button>
                                  </div>
                                  <div className="space-y-2">
                                    <Input
                                      value={mistake.title || ""}
                                      placeholder="Headline of the mistake"
                                      onChange={(e) => {
                                        const val = e.target.value;
                                        updateSectionContent(activeSec.id, c => {
                                          const list = [...c.mistakes];
                                          list[mIdx] = { ...list[mIdx], title: val };
                                          return { ...c, mistakes: list };
                                        });
                                      }}
                                      className="bg-neutral-950 border-neutral-800 text-xs font-bold text-red-300"
                                    />
                                    <Textarea
                                      value={mistake.desc || ""}
                                      placeholder="Explain why this happens and what to do instead..."
                                      onChange={(e) => {
                                        const val = e.target.value;
                                        updateSectionContent(activeSec.id, c => {
                                          const list = [...c.mistakes];
                                          list[mIdx] = { ...list[mIdx], desc: val };
                                          return { ...c, mistakes: list };
                                        });
                                      }}
                                      className="bg-neutral-950 border-neutral-800 text-xs h-16 resize-none"
                                    />
                                  </div>
                                </div>
                              ))}
                              <Button
                                type="button"
                                variant="outline"
                                size="sm"
                                className="border-neutral-800 text-xs mt-1 text-red-400 hover:bg-red-950/20"
                                onClick={() => {
                                  updateSectionContent(activeSec.id, c => ({
                                    ...c,
                                    mistakes: [...(c.mistakes || []), { title: "", desc: "" }]
                                  }));
                                }}
                              >
                                <Plus className="w-3.5 h-3.5 mr-1" /> Add Mistake Card
                              </Button>
                            </div>
                          )}

                          {/* COMPARISON TABLE editor */}
                          {activeSec.type === "comparison-table" && (
                            <div className="space-y-4">
                              <div className="flex justify-between items-center">
                                <Label className="text-xs text-neutral-400 font-bold">Table Data Grid</Label>
                                <div className="flex gap-2">
                                  <Button
                                    type="button"
                                    variant="outline"
                                    size="sm"
                                    className="border-neutral-800 text-[10px] h-7 px-2"
                                    onClick={() => {
                                      updateSectionContent(activeSec.id, c => {
                                        const headers = [...c.headers, `Col ${c.headers.length + 1}`];
                                        const rows = c.rows.map((row: string[]) => [...row, ""]);
                                        return { ...c, headers, rows };
                                      });
                                    }}
                                  >
                                    + Column
                                  </Button>
                                  <Button
                                    type="button"
                                    variant="outline"
                                    size="sm"
                                    className="border-neutral-800 text-[10px] h-7 px-2"
                                    onClick={() => {
                                      updateSectionContent(activeSec.id, c => {
                                        const rows = [...c.rows, Array(c.headers.length).fill("")];
                                        return { ...c, rows };
                                      });
                                    }}
                                  >
                                    + Row
                                  </Button>
                                </div>
                              </div>

                              <div className="border border-neutral-800 rounded-lg overflow-x-auto bg-neutral-950">
                                <table className="w-full text-xs text-left min-w-[500px]">
                                  <thead>
                                    <tr className="bg-neutral-900 border-b border-neutral-800">
                                      {activeSec.content.headers.map((h: string, hIdx: number) => (
                                        <th key={hIdx} className="p-2 min-w-[120px] relative group/th">
                                          <input
                                            value={h}
                                            onChange={(e) => {
                                              const val = e.target.value;
                                              updateSectionContent(activeSec.id, c => {
                                                const headers = [...c.headers];
                                                headers[hIdx] = val;
                                                return { ...c, headers };
                                              });
                                            }}
                                            className="bg-transparent font-bold text-white border-none w-full focus:outline-none focus:ring-0"
                                          />
                                          {activeSec.content.headers.length > 2 && (
                                            <button
                                              type="button"
                                              className="absolute right-1 top-1/2 -translate-y-1/2 opacity-0 group-hover/th:opacity-100 text-red-500 hover:text-red-400 transition-opacity"
                                              onClick={() => {
                                                updateSectionContent(activeSec.id, c => {
                                                  const headers = c.headers.filter((_: any, idx: number) => idx !== hIdx);
                                                  const rows = c.rows.map((row: string[]) => row.filter((_, idx) => idx !== hIdx));
                                                  return { ...c, headers, rows };
                                                });
                                              }}
                                            >
                                              ×
                                            </button>
                                          )}
                                        </th>
                                      ))}
                                    </tr>
                                  </thead>
                                  <tbody className="divide-y divide-neutral-800">
                                    {(activeSec.content.rows || []).map((row: string[], rIdx: number) => (
                                      <tr key={rIdx} className="hover:bg-neutral-900/40 relative group/tr">
                                        {row.map((cell: string, cIdx: number) => (
                                          <td key={cIdx} className="p-2 border-r border-neutral-850 last:border-r-0">
                                            <input
                                              value={cell}
                                              onChange={(e) => {
                                                const val = e.target.value;
                                                updateSectionContent(activeSec.id, c => {
                                                  const rows = [...c.rows];
                                                  const cells = [...rows[rIdx]];
                                                  cells[cIdx] = val;
                                                  rows[rIdx] = cells;
                                                  return { ...c, rows };
                                                });
                                              }}
                                              className="bg-transparent text-neutral-300 border-none w-full focus:outline-none focus:ring-0"
                                            />
                                          </td>
                                        ))}
                                        <td className="w-8 p-1 text-center shrink-0 border-l border-neutral-850">
                                          <button
                                            type="button"
                                            className="opacity-0 group-hover/tr:opacity-100 text-red-500 hover:text-red-400 text-sm font-bold transition-opacity"
                                            onClick={() => {
                                              updateSectionContent(activeSec.id, c => ({
                                                ...c,
                                                rows: c.rows.filter((_: any, idx: number) => idx !== rIdx)
                                              }));
                                            }}
                                          >
                                            ×
                                          </button>
                                        </td>
                                      </tr>
                                    ))}
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          )}

                          {/* CHECKLIST editor */}
                          {activeSec.type === "checklist" && (
                            <div className="space-y-3">
                              <Label className="text-xs text-neutral-400 font-bold">List Items</Label>
                              {(activeSec.content.items || []).map((item: any, iIdx: number) => (
                                <div key={iIdx} className="flex gap-3 items-center bg-neutral-950/40 border border-neutral-800 p-2.5 rounded">
                                  <Checkbox
                                    checked={item.checked}
                                    onCheckedChange={(val) => {
                                      updateSectionContent(activeSec.id, c => {
                                        const list = [...c.items];
                                        list[iIdx] = { ...list[iIdx], checked: !!val };
                                        return { ...c, items: list };
                                      });
                                    }}
                                    className="border-neutral-700 data-[state=checked]:bg-blue-600"
                                  />
                                  <Input
                                    value={item.text || ""}
                                    placeholder="Checklist task detail..."
                                    onChange={(e) => {
                                      const val = e.target.value;
                                      updateSectionContent(activeSec.id, c => {
                                        const list = [...c.items];
                                        list[iIdx] = { ...list[iIdx], text: val };
                                        return { ...c, items: list };
                                      });
                                    }}
                                    className="bg-transparent border-none text-xs flex-1 focus-visible:ring-0 p-0 text-neutral-300"
                                  />
                                  <Button
                                    type="button"
                                    variant="ghost"
                                    size="icon"
                                    className="h-8 w-8 text-neutral-500 hover:text-red-400"
                                    onClick={() => {
                                      updateSectionContent(activeSec.id, c => ({
                                        ...c,
                                        items: c.items.filter((_: any, idx: number) => idx !== iIdx)
                                      }));
                                    }}
                                  >
                                    <Trash2 className="w-3.5 h-3.5" />
                                  </Button>
                                </div>
                              ))}
                              <Button
                                type="button"
                                variant="outline"
                                size="sm"
                                className="border-neutral-800 text-xs mt-2"
                                onClick={() => {
                                  updateSectionContent(activeSec.id, c => ({
                                    ...c,
                                    items: [...(c.items || []), { text: "", checked: false }]
                                  }));
                                }}
                              >
                                <Plus className="w-3.5 h-3.5 mr-1" /> Add Checklist Item
                              </Button>
                            </div>
                          )}

                          {/* FAQS editor */}
                          {activeSec.type === "faqs" && (
                            <div className="space-y-4">
                              <Label className="text-xs text-neutral-400 font-bold">Frequently Asked Questions</Label>
                              {(activeSec.content.faqs || []).map((faq: any, fIdx: number) => (
                                <div key={fIdx} className="p-3 border border-neutral-800 rounded bg-neutral-950/40 space-y-3">
                                  <div className="flex justify-between items-center">
                                    <span className="text-[10px] font-mono text-neutral-500 font-bold">Q&A #{fIdx + 1}</span>
                                    <Button
                                      type="button"
                                      variant="ghost"
                                      size="icon"
                                      className="h-7 w-7 text-neutral-500 hover:text-red-400"
                                      onClick={() => {
                                        updateSectionContent(activeSec.id, c => ({
                                          ...c,
                                          faqs: c.faqs.filter((_: any, idx: number) => idx !== fIdx)
                                        }));
                                      }}
                                    >
                                      <Trash2 className="w-3.5 h-3.5" />
                                    </Button>
                                  </div>
                                  <div className="space-y-2">
                                    <Input
                                      value={faq.question || ""}
                                      placeholder="Enter Question..."
                                      onChange={(e) => {
                                        const val = e.target.value;
                                        updateSectionContent(activeSec.id, c => {
                                          const list = [...c.faqs];
                                          list[fIdx] = { ...list[fIdx], question: val };
                                          return { ...c, faqs: list };
                                        });
                                      }}
                                      className="bg-neutral-950 border-neutral-800 text-xs font-bold text-white"
                                    />
                                    <Textarea
                                      value={faq.answer || ""}
                                      placeholder="Enter Answer..."
                                      onChange={(e) => {
                                        const val = e.target.value;
                                        updateSectionContent(activeSec.id, c => {
                                          const list = [...c.faqs];
                                          list[fIdx] = { ...list[fIdx], answer: val };
                                          return { ...c, faqs: list };
                                        });
                                      }}
                                      className="bg-neutral-950 border-neutral-800 text-xs h-20 resize-none leading-normal"
                                    />
                                  </div>
                                </div>
                              ))}
                              <Button
                                type="button"
                                variant="outline"
                                size="sm"
                                className="border-neutral-800 text-xs mt-1"
                                onClick={() => {
                                  updateSectionContent(activeSec.id, c => ({
                                    ...c,
                                    faqs: [...(c.faqs || []), { question: "", answer: "" }]
                                  }));
                                }}
                              >
                                <Plus className="w-3.5 h-3.5 mr-1" /> Add FAQ Q&A
                              </Button>
                            </div>
                          )}

                          {/* CTA editor */}
                          {activeSec.type === "cta" && (
                            <div className="space-y-4">
                              <div className="space-y-2">
                                <Label className="text-xs text-neutral-400">CTA Headline</Label>
                                <Input
                                  value={activeSec.content.title || ""}
                                  onChange={(e) => updateSectionContent(activeSec.id, c => ({ ...c, title: e.target.value }))}
                                  placeholder="e.g. Schedule a 15-minute software demo"
                                  className="bg-neutral-950 border-neutral-800 font-bold"
                                />
                              </div>
                              <div className="space-y-2">
                                <Label className="text-xs text-neutral-400">CTA Description</Label>
                                <Textarea
                                  value={activeSec.content.description || ""}
                                  onChange={(e) => updateSectionContent(activeSec.id, c => ({ ...c, description: e.target.value }))}
                                  className="bg-neutral-950 border-neutral-800 text-xs h-20 resize-none"
                                />
                              </div>
                              <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                  <Label className="text-xs text-neutral-400">Button Text</Label>
                                  <Input
                                    value={activeSec.content.buttonText || ""}
                                    onChange={(e) => updateSectionContent(activeSec.id, c => ({ ...c, buttonText: e.target.value }))}
                                    placeholder="e.g. Contact Us"
                                    className="bg-neutral-950 border-neutral-800"
                                  />
                                </div>
                                <div className="space-y-2">
                                  <Label className="text-xs text-neutral-400">Button URL</Label>
                                  <Input
                                    value={activeSec.content.buttonUrl || ""}
                                    onChange={(e) => updateSectionContent(activeSec.id, c => ({ ...c, buttonUrl: e.target.value }))}
                                    placeholder="/contact"
                                    className="bg-neutral-950 border-neutral-800"
                                  />
                                </div>
                              </div>
                            </div>
                          )}

                          {/* COST ESTIMATOR editor */}
                          {activeSec.type === "cost-estimator" && (
                            <div className="space-y-4">
                              <p className="text-xs text-neutral-400 italic">
                                The Cost Estimator is a dynamic component and requires no additional content configuration.
                              </p>
                            </div>
                          )}

                          {/* RELATED ARTICLES editor */}
                          {activeSec.type === "related-articles" && (
                            <div className="space-y-3 text-left">
                              <Label className="text-xs text-neutral-400 font-bold">Select Linked Articles (Checkboxes)</Label>
                              <div className="bg-neutral-950 border border-neutral-800 rounded p-4 max-h-48 overflow-y-auto space-y-2">
                                {allBlogs.length === 0 ? (
                                  <span className="text-xs text-neutral-500">No other published articles found to link.</span>
                                ) : (
                                  allBlogs.map((b) => {
                                    const linkedIds = structuredContent.metadata.relatedArticleIds || [];
                                    const isLinked = linkedIds.includes(b.id);
                                    return (
                                      <label key={b.id} className="flex items-center gap-2 text-xs font-semibold cursor-pointer text-neutral-300 hover:text-white">
                                        <Checkbox
                                          checked={isLinked}
                                          onCheckedChange={(val) => {
                                            setStructuredContent(prev => {
                                              const current = prev.metadata.relatedArticleIds || [];
                                              const updated = val
                                                ? [...current, b.id]
                                                : current.filter(id => id !== b.id);
                                              return {
                                                ...prev,
                                                metadata: { ...prev.metadata, relatedArticleIds: updated }
                                              };
                                            });
                                          }}
                                        />
                                        <span>{b.title}</span>
                                      </label>
                                    );
                                  })
                                )}
                              </div>
                            </div>
                          )}

                          {/* PROS & CONS editor */}
                          {activeSec.type === "pros-cons" && (
                            <div className="space-y-6">
                              <div className="space-y-3">
                                <Label className="text-xs text-neutral-400 font-bold">Pros</Label>
                                {(activeSec.content.pros || []).map((pro: any, i: number) => (
                                  <div key={`pro-${i}`} className="flex gap-2">
                                    <Input
                                      value={pro.text}
                                      onChange={(e) => updateSectionContent(activeSec.id, c => {
                                        const newPros = [...(c.pros || [])];
                                        newPros[i] = { ...newPros[i], text: e.target.value };
                                        return { ...c, pros: newPros };
                                      })}
                                      className="bg-neutral-950 border-neutral-800 text-xs"
                                      placeholder="Pro point..."
                                    />
                                    <Button
                                      type="button"
                                      variant="destructive"
                                      size="icon"
                                      className="shrink-0 h-9 w-9 bg-red-950 text-red-400"
                                      onClick={() => updateSectionContent(activeSec.id, c => ({ ...c, pros: (c.pros || []).filter((_: any, idx: number) => idx !== i) }))}
                                    >
                                      <X className="w-4 h-4" />
                                    </Button>
                                  </div>
                                ))}
                                <Button
                                  type="button"
                                  variant="outline"
                                  size="sm"
                                  className="w-full text-xs bg-neutral-900 border-neutral-800 text-blue-400 hover:bg-neutral-800"
                                  onClick={() => updateSectionContent(activeSec.id, c => ({ ...c, pros: [...(c.pros || []), { text: "" }] }))}
                                >
                                  + Add Pro
                                </Button>
                              </div>
                              <div className="space-y-3">
                                <Label className="text-xs text-neutral-400 font-bold">Cons</Label>
                                {(activeSec.content.cons || []).map((con: any, i: number) => (
                                  <div key={`con-${i}`} className="flex gap-2">
                                    <Input
                                      value={con.text}
                                      onChange={(e) => updateSectionContent(activeSec.id, c => {
                                        const newCons = [...(c.cons || [])];
                                        newCons[i] = { ...newCons[i], text: e.target.value };
                                        return { ...c, cons: newCons };
                                      })}
                                      className="bg-neutral-950 border-neutral-800 text-xs"
                                      placeholder="Con point..."
                                    />
                                    <Button
                                      type="button"
                                      variant="destructive"
                                      size="icon"
                                      className="shrink-0 h-9 w-9 bg-red-950 text-red-400"
                                      onClick={() => updateSectionContent(activeSec.id, c => ({ ...c, cons: (c.cons || []).filter((_: any, idx: number) => idx !== i) }))}
                                    >
                                      <X className="w-4 h-4" />
                                    </Button>
                                  </div>
                                ))}
                                <Button
                                  type="button"
                                  variant="outline"
                                  size="sm"
                                  className="w-full text-xs bg-neutral-900 border-neutral-800 text-red-400 hover:bg-neutral-800"
                                  onClick={() => updateSectionContent(activeSec.id, c => ({ ...c, cons: [...(c.cons || []), { text: "" }] }))}
                                >
                                  + Add Con
                                </Button>
                              </div>
                            </div>
                          )}

                          {/* EXPERT INSIGHT editor */}
                          {activeSec.type === "expert-insight" && (
                            <div className="space-y-4">
                              <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                  <Label className="text-xs text-neutral-400">Expert Name</Label>
                                  <Input
                                    value={activeSec.content.expertName || ""}
                                    onChange={(e) => updateSectionContent(activeSec.id, c => ({ ...c, expertName: e.target.value }))}
                                    className="bg-neutral-950 border-neutral-800"
                                  />
                                </div>
                                <div className="space-y-2">
                                  <Label className="text-xs text-neutral-400">Expert Role / Title</Label>
                                  <Input
                                    value={activeSec.content.expertRole || ""}
                                    onChange={(e) => updateSectionContent(activeSec.id, c => ({ ...c, expertRole: e.target.value }))}
                                    className="bg-neutral-950 border-neutral-800"
                                  />
                                </div>
                              </div>
                              <div className="space-y-2">
                                <Label className="text-xs text-neutral-400">Quote / Insight</Label>
                                <Textarea
                                  value={activeSec.content.quote || ""}
                                  onChange={(e) => updateSectionContent(activeSec.id, c => ({ ...c, quote: e.target.value }))}
                                  className="bg-neutral-950 border-neutral-800 text-xs h-24"
                                />
                              </div>
                            </div>
                          )}

                        </div>
                      </div>
                    );
                  })()}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Card 4: Schema Structured Data */}
          <Card className="bg-neutral-900/50 border-neutral-800 shadow-md">
            <CardHeader className="border-b border-neutral-800/60 pb-4">
              <CardTitle className="text-lg font-bold text-white flex items-center gap-2">
                <FileCode className="w-5 h-5 text-purple-500" /> JSON-LD Schema Generator
              </CardTitle>
              <CardDescription className="text-neutral-400">Toggle structured data types to output live search engine markup code blocks.</CardDescription>
            </CardHeader>
            <CardContent className="pt-6 space-y-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {Object.keys(structuredContent.metadata.schemaSettings).map((schemaKey) => (
                  <label key={schemaKey} className="flex items-center gap-2 text-xs font-semibold cursor-pointer text-neutral-300 bg-neutral-950 border border-neutral-800 p-2.5 rounded hover:border-neutral-700">
                    <Checkbox
                      checked={(structuredContent.metadata.schemaSettings as any)[schemaKey]}
                      onCheckedChange={(val) => {
                        setStructuredContent(prev => ({
                          ...prev,
                          metadata: {
                            ...prev.metadata,
                            schemaSettings: {
                              ...prev.metadata.schemaSettings,
                              [schemaKey]: !!val
                            }
                          }
                        }));
                      }}
                    />
                    <span className="capitalize">{schemaKey.replace(/([A-Z])/g, " $1")}</span>
                  </label>
                ))}
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <Label className="text-xs text-neutral-400 uppercase tracking-wider font-bold">Live Schema LD-JSON Output</Label>
                  <span className="text-[10px] font-mono text-purple-400">Autogenerated</span>
                </div>
                <pre className="bg-neutral-950 border border-neutral-850 p-4 rounded-lg text-[10px] font-mono text-green-400 overflow-auto max-h-72 leading-normal select-all custom-scrollbar">
                  {generateSchemaLD()}
                </pre>
              </div>
            </CardContent>
          </Card>

        </div>

        {/* Right side widget column (4 cols) */}
        <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-24">
          
          {/* Circular Score & Audits Card */}
          <Card className="bg-neutral-900/50 border-neutral-800 shadow-md">
            <CardHeader className="border-b border-neutral-800/60 pb-4">
              <CardTitle className="text-sm font-bold text-white flex items-center justify-between">
                <span>SEO Content Audit</span>
                <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                  seoResults.score >= 80 ? "bg-green-500/20 text-green-400" : seoResults.score >= 50 ? "bg-yellow-500/20 text-yellow-400" : "bg-red-500/20 text-red-400"
                }`}>
                  Score: {seoResults.score}/100
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-6">
              {/* Score circular visual */}
              <div className="flex flex-col items-center justify-center py-4 border-b border-neutral-800/50">
                <div className="relative w-28 h-28 flex items-center justify-center">
                  {/* SVG progress indicator */}
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="56"
                      cy="56"
                      r="46"
                      stroke="#262626"
                      strokeWidth="8"
                      fill="transparent"
                    />
                    <circle
                      cx="56"
                      cy="56"
                      r="46"
                      stroke={seoResults.score >= 80 ? "#22c55e" : seoResults.score >= 50 ? "#eab308" : "#ef4444"}
                      strokeWidth="8"
                      fill="transparent"
                      strokeDasharray={2 * Math.PI * 46}
                      strokeDashoffset={2 * Math.PI * 46 * (1 - seoResults.score / 100)}
                      className="transition-all duration-500"
                    />
                  </svg>
                  <div className="absolute text-center">
                    <span className="text-3xl font-extrabold text-white">{seoResults.score}</span>
                    <p className="text-[9px] text-neutral-500 uppercase tracking-widest font-bold">SEO Score</p>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <span className="text-xs font-semibold text-neutral-400">Reading Level: </span>
                  <span className="text-xs font-bold text-blue-400">{seoResults.readingLevel}</span>
                </div>
              </div>

              {/* Checklist details */}
              <div className="space-y-4">
                <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider block">SEO Checklist Audits</span>
                <div className="space-y-3 max-h-[300px] overflow-y-auto pr-1">
                  {seoResults.audits.map((a: SeoAuditItem) => (
                    <div key={a.id} className="flex gap-2.5 items-start text-xs border-b border-neutral-850/50 pb-2 last:border-b-0">
                      {a.passed ? (
                        <div className="h-4.5 w-4.5 shrink-0 rounded-full bg-green-950 text-green-400 flex items-center justify-center p-0.5 border border-green-800">
                          <Check className="w-3 h-3" />
                        </div>
                      ) : (
                        <div className="h-4.5 w-4.5 shrink-0 rounded-full bg-neutral-850 text-neutral-500 flex items-center justify-center p-0.5 border border-neutral-700">
                          <AlertCircle className="w-3 h-3" />
                        </div>
                      )}
                      <div className="space-y-0.5">
                        <span className={`font-semibold ${a.passed ? "text-neutral-200" : "text-neutral-400"}`}>
                          {a.label}
                        </span>
                        <p className="text-[10px] text-neutral-500 leading-normal">{a.feedback}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Internal Linking suggestion Box */}
          <Card className="bg-neutral-900/50 border-neutral-800 shadow-md">
            <CardHeader className="border-b border-neutral-800/60 pb-4">
              <CardTitle className="text-sm font-bold text-white flex items-center gap-2">
                <CheckSquare className="w-4 h-4 text-orange-500" /> Smart Internal Linking
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
              <p className="text-xs text-neutral-400 leading-relaxed">
                Automatically matches database content matching the current category <strong className="text-neutral-300">({formData.category})</strong> to assist in silos.
              </p>
              
              <div className="space-y-2 text-left">
                {allBlogs.filter((b) => b.category === formData.category).length === 0 ? (
                  <span className="text-[11px] text-neutral-500 block italic py-2">No other blogs found in {formData.category} category.</span>
                ) : (
                  allBlogs
                    .filter((b) => b.category === formData.category)
                    .slice(0, 3)
                    .map((b) => {
                      const linked = (structuredContent.metadata.relatedArticleIds || []).includes(b.id);
                      return (
                        <div key={b.id} className="flex justify-between items-center p-2 rounded bg-neutral-950/40 border border-neutral-850 text-xs">
                          <span className="truncate font-semibold max-w-[200px] text-neutral-300">{b.title}</span>
                          <Button
                            type="button"
                            size="sm"
                            variant={linked ? "secondary" : "outline"}
                            className="h-6 text-[10px] border-neutral-800"
                            onClick={() => {
                              setStructuredContent(prev => {
                                const current = prev.metadata.relatedArticleIds || [];
                                const updated = linked ? current.filter(id => id !== b.id) : [...current, b.id];
                                return {
                                  ...prev,
                                  metadata: { ...prev.metadata, relatedArticleIds: updated }
                                };
                              });
                            }}
                          >
                            {linked ? "Linked" : "Link"}
                          </Button>
                        </div>
                      );
                    })
                )}
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </form>
  );
}
