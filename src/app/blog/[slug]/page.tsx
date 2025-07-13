"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getBlogBySlug } from "@/lib/backendless";
import type { Blog } from "@/types/blog";

export default function BlogDetailPage() {
  const { slug } = useParams();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      if (!slug || typeof slug !== "string") return;

      try {
        const data = await getBlogBySlug(slug);
        setBlog(data);
      } catch (error) {
        console.error("Error fetching blog:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug]);

  if (loading) return <div className="p-8">Loading blog...</div>;
  if (!blog) return <div className="p-8 text-red-500">Blog not found.</div>;

  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
      <p className="text-sm text-gray-500 mb-2">
        {blog.category} • {blog.readTime}
      </p>
      <div className="text-xs text-gray-400 mb-8">
        by {blog.author} • {new Date(blog.publishedAt).toLocaleDateString()}
      </div>
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full rounded-lg object-cover mb-8"
      />
      <div className="prose max-w-none">{blog.content}</div>
      <div className="mt-10">
        <a href="/blog" className="text-blue-500 underline">
          ← Back to Blog List
        </a>
      </div>
    </main>
  );
}