'use client';

import { useBlogStore } from "@/stores/blog-stores";

export default function SearchInput() {
  const { searchQuery, setSearchQuery } = useBlogStore();

  return (
    <input
      type="text"
      placeholder="Search blogs..."
      className="w-full md:w-1/2 p-2 rounded-md border mb-4"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
  );
}