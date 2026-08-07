"use client";

import { useState, useEffect, use } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Loader2, Trash2 } from "lucide-react";
import BlogBuilder from "@/components/admin/BlogBuilder";
import { toast } from "sonner";

export default function EditBlogPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(true);
  const [blogData, setBlogData] = useState<any>(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch(`/api/blogs/${id}`);
        if (!res.ok) throw new Error("Failed to fetch blog");
        const data = await res.json();
        setBlogData(data);
      } catch (error) {
        toast.error("Error loading blog post");
      } finally {
        setIsFetching(false);
      }
    };
    fetchBlog();
  }, [id]);

  const handleSave = async (data: any) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/blogs/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed to update");

      toast.success("Blog post updated successfully!");
      router.push("/admin/blogs");
      router.refresh();
    } catch (error) {
      toast.error("An error occurred while updating.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!confirm("Are you sure you want to delete this blog post? This cannot be undone.")) return;

    setLoading(true);
    try {
      const res = await fetch(`/api/blogs/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete");

      toast.success("Blog deleted.");
      router.push("/admin/blogs");
      router.refresh();
    } catch (error) {
      toast.error("Failed to delete blog post.");
      setLoading(false);
    }
  };

  if (isFetching) {
    return (
      <div className="p-8 flex justify-center items-center min-h-[400px]">
        <Loader2 className="w-8 h-8 animate-spin text-blue-500" />
      </div>
    );
  }

  if (!blogData) {
    return (
      <div className="p-8 text-center text-white">
        <p className="text-lg">Blog post not found.</p>
      </div>
    );
  }

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto pb-24 text-white">
      <div className="flex justify-end mb-4">
        <Button variant="destructive" size="sm" onClick={handleDelete} disabled={loading} className="gap-2 bg-red-950 text-red-400 border border-red-900 hover:bg-red-900">
          <Trash2 className="w-4 h-4" /> Delete Post
        </Button>
      </div>
      <BlogBuilder initialData={blogData} onSave={handleSave} loading={loading} isEdit={true} />
    </div>
  );
}
