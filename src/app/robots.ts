import { MetadataRoute } from 'next';

/**
 * Configures the robots.txt file for search engine optimization.
 * Defines crawling rules and the location of the dynamic sitemap.
 * 
 * @returns A MetadataRoute.Robots object.
 */
export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://aicodevibes.com';
  
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
