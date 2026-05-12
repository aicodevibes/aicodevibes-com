import { MetadataRoute } from 'next';
import { getAllLessons } from '@/lib/lessons';

/**
 * Dynamically generates the sitemap for the application.
 * Includes the home page and all individual lesson modules fetched from the filesystem.
 * 
 * @returns A MetadataRoute.Sitemap object representing all indexable URLs.
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://aicodevibes.com';
  const lessons = await getAllLessons();

  const lessonUrls = lessons.map((lesson) => ({
    url: `${baseUrl}/lessons/${lesson.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
        url: `${baseUrl}/lessons`,
        lastModified: new Date(),
        changeFrequency: 'daily' as const,
        priority: 0.9,
    },
    ...lessonUrls,
  ];
}
