// src/lib/schema/blog.ts
import { z } from "zod";

export const blogSchema = z.object({
  objectId: z.string(),
  title: z.string(),
  slug: z.string(),
  excerpt: z.string(),
  content: z.string(),
  author: z.string(),
  category: z.string(),
  readTime: z.string(),
  image: z.string().url(),
  publishedAt: z.string(), // tanggal harus string (format ISO 8601)
  isFeatured: z.boolean(),
  gradient: z.string().optional(), // bisa kosong/null
});

export const blogListSchema = z.array(blogSchema);

export type Blog = z.infer<typeof blogSchema>;