import { Suspense } from "react";
import { LaboratoryLayout } from "@/components/layout/LaboratoryLayout";
import { GlassCard } from "@/components/ui/GlassCard";

export const metadata = {
  title: "Data Streaming Lab | Agentic Coding",
  description: "Live demonstration of Next.js 16 data streaming with React Suspense.",
};

// A mock server-side data fetching function
async function getPosts() {
  try {
    // Simulate a network delay
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=4", {
      next: { revalidate: 3600 }
    });
    if (!res.ok) throw new Error("Failed to fetch data");
    return res.json();
  } catch (error) {
    console.error("Data fetch error:", error);
    return [];
  }
}

interface Post {
  id: number;
  title: string;
  body: string;
}

// The Component that handles data fetching
async function PostsList() {
  const posts = await getPosts() as Post[];
  
  if (posts.length === 0) {
    return (
      <div className="text-center p-12 bg-red-500/10 border border-red-500/20 rounded-3xl">
        <p className="text-red-500 font-bold">Failed to load demo data. Please try again later.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
      {posts.map((post: Post) => (
        <GlassCard key={post.id} hoverable className="p-8">
          <h3 className="font-bold text-xl mb-4 text-transparent bg-clip-text bg-linear-to-r from-indigo-500 to-purple-600 capitalize">
            {post.title}
          </h3>
          <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
            {post.body}
          </p>
        </GlassCard>
      ))}
    </div>
  );
}

// A Loading skeleton component
function PostsSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="h-48 rounded-4xl bg-slate-100 dark:bg-white/3 border border-slate-200 dark:border-white/5 animate-pulse relative overflow-hidden">
           <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
        </div>
      ))}
    </div>
  );
}

export default function DataLessonPage() {
  return (
    <LaboratoryLayout
      title="Streaming Data with Suspense"
      description="In this lab, we demonstrate how Next.js handles server-side data fetching and how it streams content to the client using React Suspense."
      moduleTag="Lesson 2: Async Architecture"
      moduleColor="purple"
    >
      <Suspense fallback={<PostsSkeleton />}>
        <PostsList />
      </Suspense>
    </LaboratoryLayout>
  );
}
