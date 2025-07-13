"use client";

import { Blog } from "@/lib/schema/blog";
import { Clock, User, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/stores/authStore";
import { useState } from "react";
import Image from "next/image";

interface BlogCardProps {
  post: Blog;
}

const BlogCard = ({ post }: BlogCardProps) => {
  const user = useAuthStore((state) => state.user);
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    if (!user) {
      setShowModal(true); // Tampilkan modal login
    } else {
      router.push(`/blog/${post.slug}`); // Buka detail blog
    }
  };

  const handleLoginRedirect = () => {
    setShowModal(false);
    router.push("/login");
  };

  return (
    <>
      {/* Blog Card */}
      <div
        onClick={handleClick}
        className="group cursor-pointer transition-all duration-500 hover:scale-105"
      >
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
          <div className="relative h-48 overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            {post.isFeatured && (
              <div className={`absolute inset-0 bg-gradient-to-br ${post.gradient}`}>
                <div className="absolute inset-0 bg-black/10" />
              </div>
            )}
            <div className="absolute top-4 left-4">
              <span className="bg-white/90 text-xs font-semibold px-3 py-1 rounded-full text-gray-800">
                {post.category}
              </span>
            </div>
            <div className="absolute top-4 right-4">
              <span className="bg-black/20 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {post.readTime}
              </span>
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 overflow-hidden"
              style={{
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                maxHeight: "3.5rem",
              }}>
              {post.title}
            </h3>
            <p className="text-gray-600 text-sm mb-3 line-clamp-2">{post.excerpt}</p>
            <div className="flex items-center gap-3 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-white" />
                </div>
                <span className="font-medium">{post.author}</span>
              </div>
              <span>•</span>
              <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-xl shadow-lg p-6 w-[90%] max-w-md relative">
            {/* Tombol X */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black"
            >
              <X className="w-5 h-5" />
            </button>

            <h2 className="text-xl font-bold text-gray-800 mb-4">Login Required</h2>
            <p className="text-gray-600 mb-6">
              You need to be logged in to view this blog post.
            </p>
            <button
              onClick={handleLoginRedirect}
              className="bg-blue-600 hover:bg-blue-700 transition-all text-white px-4 py-2 rounded-md w-full"
            >
              Login Now
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default BlogCard;