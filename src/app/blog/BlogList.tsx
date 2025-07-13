"use client";

import { useEffect, useState } from "react";
import { getAllBlogs } from "@/lib/backendless";
import { Blog } from "@/lib/schema/blog";
import { useBlogStore } from "@/stores/blog-stores";
import BlogCard from "@/components/blog/BlogCard";

export default function BlogList() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const { searchQuery, selectedCategory } = useBlogStore();

  useEffect(() => {
    getAllBlogs().then((data) => {
        //  console.log(" Blog images:", data.map((b) => b.image));
      setBlogs(data);
      setLoading(false);
    });
  }, []);

  const filtered = blogs.filter((blog) => {
    const matchSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchCategory = selectedCategory ? blog.category === selectedCategory : true;
    return matchSearch && matchCategory;
  });

  if (loading) return <p>Loading blogs...</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filtered.map((blog) => (
        <BlogCard key={blog.objectId} post={blog} />
      ))}
    </div>
  );
}