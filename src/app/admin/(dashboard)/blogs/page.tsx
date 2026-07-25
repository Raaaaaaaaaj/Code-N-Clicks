import prisma from "@/lib/prisma";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import DeleteBlogButton from "@/components/admin/DeleteBlogButton";

export const dynamic = "force-dynamic";

export default async function BlogsPage() {
  const blogs = await prisma.blogPost.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Manage Blogs</h1>
        <Link href="/admin/blogs/create">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white gap-2">
            <Plus className="w-4 h-4" />
            Create New Post
          </Button>
        </Link>
      </div>
      
      <div className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-neutral-950 border-b border-neutral-800">
            <tr>
              <th className="p-4 text-neutral-400 font-medium">Post Title</th>
              <th className="p-4 text-neutral-400 font-medium">Status</th>
              <th className="p-4 text-neutral-400 font-medium">Date</th>
              <th className="p-4 text-neutral-400 font-medium text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-800">
            {blogs.length === 0 ? (
              <tr>
                <td colSpan={4} className="p-8 text-center text-neutral-500">
                  No blog posts found. Create one to get started.
                </td>
              </tr>
            ) : (
              blogs.map((blog) => (
                <tr key={blog.id} className="hover:bg-neutral-800/50 transition-colors">
                  <td className="p-4">
                    <p className="font-medium text-white">{blog.title}</p>
                    <p className="text-sm text-neutral-400">/{blog.slug}</p>
                  </td>
                  <td className="p-4">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${blog.isPublished ? "bg-green-500/20 text-green-400" : "bg-yellow-500/20 text-yellow-400"}`}>
                      {blog.isPublished ? "Published" : "Draft"}
                    </span>
                  </td>
                  <td className="p-4 text-sm text-neutral-400">
                    {new Date(blog.createdAt).toLocaleDateString()}
                  </td>
                  <td className="p-4 text-right flex justify-end gap-2">
                    <Link href={`/admin/blogs/${blog.id}`}>
                      <Button variant="ghost" size="sm" className="text-blue-400 hover:text-blue-300">
                        Edit
                      </Button>
                    </Link>
                    <DeleteBlogButton id={blog.id} title={blog.title} />
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
