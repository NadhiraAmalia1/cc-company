'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/stores/authStore';
import { useEffect } from 'react';
import Backendless from 'backendless';
import { motion } from 'framer-motion';

const blogSchema = z.object({
  title: z.string().min(3),
  slug: z.string().min(3),
  image: z.string().url(),
  category: z.string(),
  excerpt: z.string().min(10),
  content: z.string().min(10),
  readTime: z.string().optional(),
  isFeatured: z.boolean().optional(),
  gradient: z.string().optional(),
});

type BlogInput = z.infer<typeof blogSchema>;

export default function CreateBlogPage() {
  const user = useAuthStore((state) => state.user);
  const router = useRouter();

  useEffect(() => {
    if (!user || user.role !== 'admin') {
      router.push('/login');
    }
  }, [user, router]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BlogInput>({
    resolver: zodResolver(blogSchema),
  });

  const onSubmit = async (data: BlogInput) => {
    try {
      const blogData = {
        ...data,
        author: user?.email,
        publishedAt: new Date(),
      };

      await Backendless.Data.of('blogs').save(blogData);

      alert('Blog Created!');
      router.push('/blog');
    } catch (error) {
      if (error instanceof Error) {
        console.error("Message error:", error.message);
      } else {
        console.error("Failed", error);
      }
    }
  };

  return (
    <main className="min-h-screen px-4 py-12 bg-gradient-to-br from-slate-900 to-black text-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto bg-white/5 border border-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-8"
      >
        <h1 className="text-3xl font-bold mb-8 text-blue-400 text-center tracking-wide">
          Create New Blog
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* TITLE */}
          <div>
            <label className="block mb-1 font-medium">Title</label>
            <input {...register('title')} className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            {errors.title && <p className="text-red-400 text-sm mt-1">{errors.title.message}</p>}
          </div>

          {/* SLUG */}
          <div>
            <label className="block mb-1 font-medium">Slug (unique)</label>
            <input {...register('slug')} className="input-style" />
          </div>

          {/* IMAGE */}
          <div>
            <label className="block mb-1 font-medium">Image URL</label>
            <input {...register('image')} className="input-style" />
          </div>

          {/* CATEGORY */}
          <div>
            <label className="block mb-1 font-medium">Category</label>
            <input {...register('category')} className="input-style" />
          </div>

          {/* EXCERPT */}
          <div>
            <label className="block mb-1 font-medium">Excerpt</label>
            <textarea {...register('excerpt')} rows={2} className="input-style resize-none" />
          </div>

          {/* CONTENT */}
          <div>
            <label className="block mb-1 font-medium">Content</label>
            <textarea {...register('content')} rows={6} className="input-style resize-none" />
          </div>

          {/* READ TIME */}
          <div>
            <label className="block mb-1 font-medium">Read Time</label>
            <input {...register('readTime')} className="input-style" placeholder="e.g. 3 min read" />
          </div>

          {/* FEATURED */}
          <div className="flex items-center gap-2">
            <input type="checkbox" {...register('isFeatured')} />
            <label>Featured?</label>
          </div>

          {/* GRADIENT */}
          <div>
            <label className="block mb-1 font-medium">Gradient Class</label>
            <input {...register('gradient')} className="input-style" placeholder="e.g. from-pink-500 to-yellow-500" />
          </div>

          {/* SUBMIT */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.02 }}
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 transition-all text-white font-semibold py-3 px-6 rounded-md"
          >
            Submit Blog
          </motion.button>
        </form>
      </motion.div>
    </main>
  );
}

// Tambahan tailwind utility biar inputnya konsisten
// const inputStyle = "w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500";