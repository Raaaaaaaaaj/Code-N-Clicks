"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import TipTapEditor from "@/components/admin/TipTapEditor";
import { toast } from "sonner";
import slugify from "slugify";
import { ArrowLeft, Loader2, Save, Image as ImageIcon, Upload } from "lucide-react";
import Link from "next/link";
import imageCompression from "browser-image-compression";

export default function CreateBlogPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [isUploadingImage, setIsUploadingImage] = useState(false);
  const imageInputRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    category: "Technology",
    author: "CodeNClicks Team",
    content: "",
    featuredImage: "",
    
    // SEO Fields
    seoTitle: "",
    metaDescription: "",
    canonicalUrl: "",
    targetKeywords: "",
    
    // OG Fields
    ogTitle: "",
    ogDescription: "",
    ogImage: "",

    isPublished: true,
  });

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value;
    setFormData({
      ...formData,
      title,
      slug: slugify(title, { lower: true, strict: true }),
      seoTitle: title, // Auto-fill seo title
      ogTitle: title, // Auto-fill og title
    });
  };

  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>, field: 'featuredImage' | 'ogImage') => {
    const file = event.target.files?.[0];
    if (!file) return;

    setIsUploadingImage(true);
    try {
      const options = {
        maxSizeMB: 1,
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
      
      setFormData(prev => ({
        ...prev,
        [field]: resData.url,
        // If uploading featured image, automatically set it as OG image if OG is empty
        ...(field === 'featuredImage' && !prev.ogImage ? { ogImage: resData.url } : {})
      }));

      toast.success("Image uploaded successfully!");
    } catch (error) {
      toast.error("Failed to upload image");
    } finally {
      setIsUploadingImage(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Failed to save blog post");
      }

      toast.success("Blog post created successfully!");
      router.push("/admin/blogs");
      router.refresh();
    } catch (error) {
      toast.error("An error occurred while saving.");
    } finally {
      setLoading(false);
    }
  };

  const ImageUploader = ({ field, label }: { field: 'featuredImage' | 'ogImage', label: string }) => (
    <div className="space-y-2">
      <Label>{label}</Label>
      <div className="flex gap-4 items-center">
        {formData[field] && (
          <div className="w-24 h-24 rounded-lg bg-neutral-800 overflow-hidden border border-neutral-700 shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={formData[field]} alt="Preview" className="w-full h-full object-cover" />
          </div>
        )}
        <div className="flex-1">
          <Input 
            value={formData[field]} 
            onChange={(e) => setFormData({...formData, [field]: e.target.value})}
            placeholder="Image URL or upload..."
            className="bg-neutral-950 border-neutral-800 mb-2"
          />
          <div className="relative">
            <input
              type="file"
              accept="image/*"
              className="hidden"
              id={`upload-${field}`}
              onChange={(e) => handleImageUpload(e, field)}
            />
            <Label htmlFor={`upload-${field}`} className="cursor-pointer">
              <div className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 w-full md:w-auto gap-2 bg-blue-600 hover:bg-blue-700 text-white border-none shadow-md">
                {isUploadingImage ? <Loader2 className="w-4 h-4 animate-spin" /> : <Upload className="w-4 h-4" />}
                Upload WebP Image
              </div>
            </Label>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="p-4 md:p-8 max-w-6xl mx-auto pb-24 text-white">
      <div className="flex items-center gap-4 mb-8">
        <Link href="/admin/blogs">
          <Button variant="ghost" size="icon" className="rounded-full text-white hover:text-blue-400">
            <ArrowLeft className="w-5 h-5" />
          </Button>
        </Link>
        <h1 className="text-3xl font-bold text-white">Create Premium Blog Post</h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        
        {/* Core Content */}
        <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-xl space-y-6">
          <h2 className="text-xl font-semibold border-b border-neutral-800 pb-2">Core Content</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label>Post Title</Label>
              <Input required value={formData.title} onChange={handleTitleChange} placeholder="Enter an engaging title" className="bg-neutral-950 border-neutral-800 text-lg" />
            </div>
            <div className="space-y-2">
              <Label>URL Slug</Label>
              <Input required value={formData.slug} onChange={(e) => setFormData({ ...formData, slug: e.target.value })} className="bg-neutral-950 border-neutral-800 font-mono text-sm" />
            </div>
            <div className="space-y-2">
              <Label>Category</Label>
              <Input required value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })} className="bg-neutral-950 border-neutral-800" />
            </div>
            <div className="space-y-2">
              <Label>Author</Label>
              <Input required value={formData.author} onChange={(e) => setFormData({ ...formData, author: e.target.value })} className="bg-neutral-950 border-neutral-800" />
            </div>
          </div>

          <ImageUploader field="featuredImage" label="Featured Image (Main Thumbnail)" />

          <div className="space-y-2">
            <Label className="text-lg font-semibold">Post Content</Label>
            <TipTapEditor content={formData.content} onChange={(content) => setFormData({ ...formData, content })} />
          </div>
        </div>

        {/* SEO Settings */}
        <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-xl space-y-6">
          <h2 className="text-xl font-semibold border-b border-neutral-800 pb-2">Search Engine Optimization (SEO)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label>SEO Meta Title</Label>
              <Input value={formData.seoTitle} onChange={(e) => setFormData({ ...formData, seoTitle: e.target.value })} className="bg-neutral-950 border-neutral-800" />
            </div>
            <div className="space-y-2">
              <Label>Canonical URL (Optional)</Label>
              <Input value={formData.canonicalUrl} onChange={(e) => setFormData({ ...formData, canonicalUrl: e.target.value })} placeholder="https://codenclicksit.in/blog/your-slug" className="bg-neutral-950 border-neutral-800" />
            </div>
            <div className="space-y-2 md:col-span-2">
              <Label>Target Keywords (Comma separated)</Label>
              <Input value={formData.targetKeywords} onChange={(e) => setFormData({ ...formData, targetKeywords: e.target.value })} placeholder="web development, seo services, business automation" className="bg-neutral-950 border-neutral-800" />
            </div>
            <div className="space-y-2 md:col-span-2">
              <Label>Meta Description</Label>
              <Textarea value={formData.metaDescription} onChange={(e) => setFormData({ ...formData, metaDescription: e.target.value })} placeholder="Write a compelling meta description for search engines... (Max 160 chars)" className="bg-neutral-950 border-neutral-800 resize-none h-20" />
            </div>
          </div>
        </div>

        {/* Social / Open Graph Settings */}
        <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-xl space-y-6">
          <h2 className="text-xl font-semibold border-b border-neutral-800 pb-2">Social Media / Open Graph (OG)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label>OG Title</Label>
              <Input value={formData.ogTitle} onChange={(e) => setFormData({ ...formData, ogTitle: e.target.value })} placeholder="Title for Facebook/Twitter sharing" className="bg-neutral-950 border-neutral-800" />
            </div>
            <div className="space-y-2">
              <Label>OG Description</Label>
              <Input value={formData.ogDescription} onChange={(e) => setFormData({ ...formData, ogDescription: e.target.value })} placeholder="Description for social shares" className="bg-neutral-950 border-neutral-800" />
            </div>
            <div className="space-y-2 md:col-span-2">
              <ImageUploader field="ogImage" label="Open Graph Image (1200x630 recommended for Socials)" />
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-end gap-6 pt-8 border-t border-neutral-800">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={formData.isPublished}
              onChange={(e) => setFormData({ ...formData, isPublished: e.target.checked })}
              className="w-5 h-5 rounded border-neutral-700 bg-neutral-950 text-blue-600 focus:ring-blue-600 focus:ring-offset-neutral-950"
            />
            <span className="text-base font-medium">Publish Live</span>
          </label>
          <Button type="submit" disabled={loading || !formData.content} className="bg-blue-600 hover:bg-blue-700 text-white min-w-[150px] text-lg py-6">
            {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <><Save className="w-5 h-5 mr-2" /> Save Blog Post</>}
          </Button>
        </div>
      </form>
    </div>
  );
}
