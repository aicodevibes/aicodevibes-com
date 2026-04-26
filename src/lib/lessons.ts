import fs from "fs";
import path from "path";

const LESSONS_DIR = path.join(process.cwd(), "src/content/lessons");

export interface LessonMetadata {
  title: string;
  description: string;
  icon: string;
  difficulty: string;
  order: number;
}

export interface Lesson {
  slug: string;
  metadata: LessonMetadata;
  content: string;
}

const METADATA_MAP: Record<string, Partial<LessonMetadata>> = {
  "next-initialize": { icon: "🏁", difficulty: "Beginner", order: 1, description: "Setting up your environment for AI-native development." },
  "next-routing": { icon: "🛣️", difficulty: "Beginner", order: 2, description: "Master the File-based Router and Dynamic Segments." },
  "next-fetch": { icon: "📡", difficulty: "Intermediate", order: 3, description: "Server Components and the art of streaming data." },
  "next-server-actions": { icon: "⚡", difficulty: "Intermediate", order: 4, description: "Handling mutations with the latest Next.js patterns." },
  "next-interactivity": { icon: "✨", difficulty: "Intermediate", order: 5, description: "Client Foundations and the 'use client' directive." },
  "next-ui-patterns": { icon: "🎨", difficulty: "Advanced", order: 6, description: "Advanced patterns for premium AI user interfaces." },
};

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

export async function getLessonBySlug(slug: string): Promise<Lesson | null> {
  const filePath = path.join(LESSONS_DIR, `${slug}.md`);

  if (!slug.startsWith("next-") || !fs.existsSync(filePath)) {
    return null;
  }

  try {
    const content = fs.readFileSync(filePath, "utf-8");
    return {
      slug,
      metadata: getMetadata(slug),
      content,
    };
  } catch (error) {
    console.error(`Error reading lesson ${slug}:`, error);
    return null;
  }
}

export async function getAllLessons(): Promise<Lesson[]> {
  try {
    if (!fs.existsSync(LESSONS_DIR)) return [];
    
    const files = fs.readdirSync(LESSONS_DIR);
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
}
