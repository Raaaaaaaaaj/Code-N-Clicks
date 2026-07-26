"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import BlogBuilder from "@/components/admin/BlogBuilder";
import { toast } from "sonner";

export default function CreateBlogPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSave = async (data: any) => {
    setLoading(true);
    try {
      const res = await fetch("/api/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Failed to create blog post");
      }

      toast.success("Blog post created successfully!");
      router.push("/admin/blogs");
      router.refresh();
    } catch (error: any) {
      toast.error(error.message || "An error occurred while saving.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto pb-24 text-white">
      <BlogBuilder onSave={handleSave} loading={loading} />
    </div>
  );
}
