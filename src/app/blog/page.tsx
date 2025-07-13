'use client';

import dynamic from 'next/dynamic';
import { useAuthStore } from '@/stores/authStore';
import Link from 'next/link';

const BlogList = dynamic(() => import('./BlogList'), { ssr: false });
const SearchInput = dynamic(() => import('@/components/blog/SearchInput'), { ssr: false });
const CategoryFilter = dynamic(() => import('@/components/blog/CategoryFilter'), { ssr: false });

export default function BlogPage() {
  const user = useAuthStore((state) => state.user);

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-4xl font-bold">Blog</h1>

        {user?.role === 'admin' && (
          <Link
            href="/create-blog"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm transition"
          >
            + Create Blog
          </Link>
        )}
      </div>

      <SearchInput />
      <CategoryFilter />
      <BlogList />
    </section>
  );
}