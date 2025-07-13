'use client';

import { useBlogStore } from "@/stores/blog-stores";

const categories = ['INSPIRATION', 'TIPS', 'GEAR'];

export default function CategoryFilter() {
  const { selectedCategory, setSelectedCategory } = useBlogStore();

  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {categories.map((cat) => (
        <button
          key={cat}
          className={`px-3 py-1 rounded-full border ${
            selectedCategory === cat ? 'bg-black text-white' : ''
          }`}
          onClick={() => setSelectedCategory(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}