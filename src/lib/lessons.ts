import { promises as fs } from "fs";
import path from "path";
import { cache } from "react";

const LESSONS_DIR = path.join(process.cwd(), "src/content/lessons");

/**
 * Metadata defining the core properties of a lesson module.
 */
export interface LessonMetadata {
  /** The human-readable title of the lesson */
  title: string;
  /** A short summary of what the lesson covers */
  description: string;
  /** An emoji or icon representing the lesson topic */
  icon: string;
  /** The complexity level (e.g., Beginner, Intermediate, Advanced) */
  difficulty: string;
  /** Numerical order for displaying lessons in a sequence */
  order: number;
}

/**
 * Represents a full lesson object, combining its unique identifier, 
 * metadata, and the raw markdown content.
 */
export interface Lesson {
  /** The URL-friendly identifier for the lesson (e.g., 'next-routing') */
  slug: string;
  /** Structured information about the lesson */
  metadata: LessonMetadata;
  /** The full body content of the lesson in Markdown format */
  content: string;
}

/**
 * A static mapping of lesson slugs to their respective metadata overrides.
 * This acts as the source of truth for lesson ordering and categorization.
 */
const METADATA_MAP: Record<string, Partial<LessonMetadata>> = {
  "next-initialize": { icon: "🏁", difficulty: "Beginner", order: 1, description: "Setting up your environment for AI-native development." },
  "next-routing": { icon: "🛣️", difficulty: "Beginner", order: 2, description: "Master the File-based Router and Dynamic Segments." },
  "next-fetch": { icon: "📡", difficulty: "Intermediate", order: 3, description: "Server Components and the art of streaming data." },
  "next-server-actions": { icon: "⚡", difficulty: "Intermediate", order: 4, description: "Handling mutations with the latest Next.js patterns." },
  "next-interactivity": { icon: "✨", difficulty: "Intermediate", order: 5, description: "Client Foundations and the 'use client' directive." },
  "next-ui-patterns": { icon: "🎨", difficulty: "Advanced", order: 6, description: "Advanced patterns for premium AI user interfaces." },
};

/**
 * Resolves metadata for a specific lesson by its slug.
 * If a slug isn't found in the `METADATA_MAP`, it generates fallback 
 * metadata based on the slug string.
 * 
 * @param slug - The unique identifier for the lesson.
 * @returns A complete LessonMetadata object.
 */
function getMetadata(slug: string): LessonMetadata {
  const base = METADATA_MAP[slug] || {};
  const title = slug
    .replace("next-", "")
    .replace(/-/g, " ")
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return {
    title: base.title || title,
    description: base.description || `Master the concepts of ${title} in modern web architecture.`,
    icon: base.icon || "📖",
    difficulty: base.difficulty || "Intermediate",
    order: base.order || 99,
  };
}

/**
 * Retrieves the content and metadata for a single lesson from the filesystem.
 * This function performs file I/O and should be called within a Server Component or Action.
 * 
 * @param slug - The slug of the lesson to fetch.
 * @returns A promise resolving to the Lesson object, or null if the file doesn't exist.
 */
export const getLessonBySlug = cache(async (slug: string): Promise<Lesson | null> => {
  'use cache';
  if (!slug.startsWith("next-")) {
    return null;
  }

  const filePath = path.join(LESSONS_DIR, `${slug}.md`);

  try {
    const content = await fs.readFile(filePath, "utf-8");
    return {
      slug,
      metadata: getMetadata(slug),
      content,
    };
  } catch (error) {
    console.error(`Error reading lesson ${slug}:`, error);
    return null;
  }
});

/**
 * Scans the lessons directory and returns all valid lesson modules.
 * Lessons are automatically sorted based on the `order` property in their metadata.
 * 
 * @returns A promise resolving to an array of Lesson objects.
 */
export const getAllLessons = cache(async (): Promise<Lesson[]> => {
  'use cache';
  try {
    const files = await fs.readdir(LESSONS_DIR);
    const lessons = await Promise.all(
      files
        .filter(f => f.startsWith("next-") && f.endsWith(".md"))
        .map(async f => {
          const slug = f.replace(".md", "");
          const lesson = await getLessonBySlug(slug);
          return lesson;
        })
    );

    return (lessons.filter(Boolean) as Lesson[]).sort((a, b) => a.metadata.order - b.metadata.order);
  } catch (error) {
    console.error("Error reading lessons directory:", error);
    return [];
  }
});
