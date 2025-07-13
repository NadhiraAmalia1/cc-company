import { create } from 'zustand';

type BlogStore = {
  searchQuery: string;
  selectedCategory: string;
  setSearchQuery: (query: string) => void;
  setSelectedCategory: (category: string) => void;
};

export const useBlogStore = create<BlogStore>((set) => ({
  searchQuery: '',
  selectedCategory: '',
  setSearchQuery: (query) => set({ searchQuery: query }),
  setSelectedCategory: (category) =>
    set((state) => ({
      selectedCategory: state.selectedCategory === category ? '' : category,
    })),
}));