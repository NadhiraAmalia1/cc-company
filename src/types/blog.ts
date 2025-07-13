export type Blog = {
  objectId: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  category: string;
  readTime: string;
  image: string;
  publishedAt: string;
  isFeatured?: boolean;
  gradient?: string;
};