# Lesson 6: Dynamic Routing and Metadata-driven Hubs

**Course**: 1.0 - Advanced Web Application Design using Next JS  
**Institution**: AI Code Vibes Institute of Technology  
**Instructor**: James Losinger  

---

## 1. Objective
In this session, we investigate the **Dynamic Routes (`[slug]`)** architecture. We will move beyond static page files and build a data-driven "Lessons Hub" that automatically discovers and renders markdown files from our file system.

## 2. Theoretical Underpinnings: Polymorphism in URLs
A traditional web app has a 1-to-1 relationship between a file and a URL. Dynamic routing introduces a 1-to-MANY relationship. A single UI template (`[slug]/page.tsx`) can render an infinite number of pages based on the "Variable" in the URL.

## 3. The `[slug]` Convention
By wrapping a folder name in square brackets, we tell the Next.js router that this segment of the URL is a dynamic variable.
-   URL: `/lessons/next-fetch`
-   Variable: `slug = "next-fetch"`

## 4. Server-Side File Discovery (The Hub)
Using Node's `fs` (file system) module, we can scan the project directory at **build time** or **request time** to find all available content. This allows the UI to grow automatically as we add more `.md` files to our project.

```tsx
// src/app/lessons/page.tsx logic
const files = fs.readdirSync(projectRoot);
const lessons = files.filter(f => f.endsWith(".md"));
```

## 5. Lab Exercise: The Lessons Hub
Navigate to [**/lessons**](/lessons) to explore the hub we built. 

### Key Lab Features:
1.  **Index Page**: Automatically lists every Lesson Plan we've created in the project.
2.  **Dynamic Viewer**: When you click a lesson, the `[slug]` route reads the corresponding markdown file and renders its content into a premium, glassmorphic layout.
3.  **Path Traversal Prevention**: Notice the safety check to ensure users can only access files that start with `next-`.

## 6. Dynamic Metadata and SEO (The Professor's Secret)
Why do we use semantic slugs like `/lessons/next-fetch` instead of `/lesson?id=2`? **SEO**. Search engine crawlers (Google, Bing) prioritize "Clean URLs."

### The `generateMetadata` Function
In Next.js, we don't just set a static title. We use a specialized server-side function to read the current `params` and dynamically generate the page title and meta description.

```tsx
export async function generateMetadata({ params }) {
  const { slug } = await params;
  return { title: `Exploring ${slug}` };
}
```

### Advantages for the Labs:
- **Semantic Indexing**: Each of our 5 lessons is now indexed individually by crawlers as a unique "Topic Cluster."
- **Social Sharing**: When you share a link to a specific lesson on Slack or Twitter, the "Preview Card" will automatically show the correct lesson title.

---

## 7. Frequently Asked Questions (FAQ)

1. **Wait, can I use `fs` in a Client Component?**  
   Absolutely not! `fs` is a Node.js-only module. This logic must reside in a **Server Component** (the default in Next.js 13+).

2. **What happens if I enter a slug that doesn't exist?**  
   The `notFound()` function from `next/navigation` will trigger the standard 404 boundary, keeping the application's integrity intact.

3. **How do I make the markdown look pretty?**  
   In this lesson, we integrated the `react-markdown` library to parse our content and implemented a custom `.prose-premium` design system in `globals.css` to translate markdown elements into stylized, high-end React components.

4. **Is this slow to read from the disk every time?**  
   In production, Next.js will often cache these routes or use **Static Site Generation (SSG)** to pre-read these files at build time, making them lightning-fast globally.

5. **Can I have nested dynamic routes?**  
   Yes. You can have `[category]/[id]/page.tsx` for complex structures like e-commerce or documentation hubs.

6. **How do I get the `slug` into my component?**  
   It is passed to the Page component as a **Promise** in the `params` prop. You must `await` it in Next.js 15.

7. **Can I use this for a blog?**  
   This is precisely how modern static blogs (like those built with MDX) work. Each blog post is a file, and a single template renders them all.

8. **Where do the images go?**  
   Images remain in the `/public` folder, which is the global "Warehouse" for static assets.

9. **What is 'process.cwd()'?**  
   It stands for "Current Working Directory." It ensures we are looking at the root of our project, no matter where the actual Node process is running.

10. **Can I add metadata like "Difficulty" to these lessons?**  
    Yes. You would usually use a library like `gray-matter` to parse "Frontmatter" (YAML at the top of an MD file) to add extra attributes to your lessons.

---

**Next Assignment**: Mastering Global State and Providers.
