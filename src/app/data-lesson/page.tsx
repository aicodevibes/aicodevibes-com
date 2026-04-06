import { Suspense } from "react";
import Image from "next/image";

// A mock server-side data fetching function
async function getPosts() {
  // Simulate a network delay
  await new Promise((resolve) => setTimeout(resolve, 2000));
  
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=4");
  if (!res.ok) throw new Error("Failed to fetch data");
  return res.json();
}

// The Component that handles data fetching
async function PostsList() {
  const posts = await getPosts();
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
      {posts.map((post: any) => (
        <div key={post.id} className="glass-card p-6 border-indigo-500/10 hover:border-indigo-500/40 transition-all">
          <h3 className="font-bold text-lg mb-2 text-gradient capitalize">{post.title}</h3>
          <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
            {post.body}
          </p>
        </div>
      ))}
    </div>
  );
}

// A Loading skeleton component
function PostsSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="h-40 rounded-3xl bg-slate-200/50 dark:bg-slate-800/50 border border-white/5 animate-shimmer" />
      ))}
    </div>
  );
}

export default function DataLessonPage() {
  return (
    <div className="min-h-screen bg-mesh font-sans p-8 md:p-24 selection:bg-indigo-500/30">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
            <header className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 mb-8">
                    <span className="w-2 h-2 rounded-full bg-purple-500" />
                    <span className="text-xs font-semibold text-purple-500 uppercase tracking-wider">Lesson 2: Async Architecture</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight dark:text-white">
                    Streaming Data with <span className="text-gradient">Suspense</span>
                </h1>
                <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
                    In this lab, we demonstrate how Next.js handles server-side data fetching and how it streams content to the client using React Suspense.
                </p>
            </header>

            {/* Suspense is the key here. It shows the fallback while PostsList is fetching data. */}
            <Suspense fallback={<PostsSkeleton />}>
                <PostsList />
            </Suspense>

            <footer className="mt-20">
                <a href="/" className="text-indigo-500 font-semibold hover:underline flex items-center gap-2">
                   ← Back to Home
                </a>
            </footer>
        </div>
    </div>
  );
}
