import Backendless from "backendless";
import { blogListSchema, blogSchema } from "./schema/blog";

function initBackendless() {
  if (!Backendless.applicationId) {
    Backendless.initApp(
      process.env.NEXT_PUBLIC_BACKENDLESS_APP_ID!,
      process.env.NEXT_PUBLIC_BACKENDLESS_API_KEY!
    );
  }
}

export const getAllBlogs = async () => {
  try {
    initBackendless();
    const rawBlogs = await Backendless.Data.of("blogs").find();
    return blogListSchema.parse(rawBlogs);
  } catch (error) {
    console.error(" Failed to fetch blogs", error);
    throw new Error("Failed to fetch blogs");
  }
};

export const getBlogBySlug = async (slug: string) => {
  try {
    initBackendless();
    const result = await Backendless.Data.of("blogs").find({
      where: `slug = '${slug}'`,
    });

    if (!result[0]) return null;

    return blogSchema.parse(result[0]);
  } catch (error) {
    console.error(" Error fetching blog by slug", error);
    return null;
  }
};