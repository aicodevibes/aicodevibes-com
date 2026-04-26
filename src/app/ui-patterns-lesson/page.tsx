import { Suspense } from "react";
import Link from "next/link";

// A mock data fetcher that can "fail" or "take long"
async function getCriticalData(shouldFail: boolean) {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  
  if (shouldFail) {
    throw new Error("Critical Service Failure: Data could not be retrieved.");
  }
  
  return { status: "Active", items: 42 };
}

async function DataDisplay({ shouldFail }: { shouldFail: boolean }) {
  const data = await getCriticalData(shouldFail);
  
  return (
    <div className="glass-card p-10 border-emerald-500/20 text-center animate-float">
        <div className="text-4xl mb-4">🏆</div>
        <h3 className="text-2xl font-bold text-gradient mb-2">Systems Online</h3>
        <p className="text-slate-500 dark:text-slate-400">
            Status: <span className="text-emerald-500 font-bold">{data.status}</span> • Items Processed: {data.items}
        </p>
    </div>
  );
}

export default async function UIPatternsPage({ searchParams }: { searchParams: Promise<{ fail?: string }> }) {
  const { fail } = await searchParams;
  const shouldFail = fail === "true";

  return (
    <div className="min-h-screen bg-mesh font-sans p-8 md:p-24 selection:bg-indigo-500/30">
        <div className="max-w-2xl mx-auto">
            <header className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 mb-8">
                    <span className="w-2 h-2 rounded-full bg-pink-500" />
                    <span className="text-xs font-semibold text-pink-500 uppercase tracking-wider">Lesson 5: Resilient Design</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight dark:text-white">
                    Advanced <span className="text-gradient">UI Patterns</span>
                </h1>
                <p className="text-slate-500 dark:text-slate-400 italic">
                    Learn to build &quot;Unbreakable&quot; interfaces using File-System based error and loading states.
                </p>
            </header>

            <div className="space-y-12">
                <section>
                    <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6 ml-1">Live Experiment</h3>
                    
                    {/* The suspense boundary is fine here for local loading, 
                        but we are also testing the root loading.tsx file! */}
                    <Suspense fallback={<p className="text-center text-slate-500 animate-pulse italic">Waiting for critical systems...</p>}>
                        <DataDisplay shouldFail={shouldFail} />
                    </Suspense>
                </section>

                <section className="glass-card p-10 border-white/10 bg-white/5 space-y-6">
                    <h3 className="text-xl font-bold dark:text-white">Test the Boundaries</h3>
                    <p className="text-sm text-slate-500">
                        In a real app, errors and slow loads are inevitable. Click below to see how our Next.js architecture gracefully handles them.
                    </p>
                    <div className="flex flex-col sm:row gap-4">
                        <Link 
                            href="/ui-patterns-lesson?fail=true"
                            className="px-6 py-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-500 font-bold hover:bg-rose-500/20 text-center transition-all"
                        >
                            Trigger a &quot;Critical Error&quot;
                        </Link>
                        <Link 
                            href="/ui-patterns-lesson"
                            className="px-6 py-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 font-bold hover:bg-emerald-500/20 text-center transition-all"
                        >
                            Reset to &quot;Success&quot;
                        </Link>
                    </div>
                </section>
            </div>

            <footer className="mt-20">
                <Link href="/" className="text-indigo-500 font-semibold hover:underline flex items-center gap-2">
                   ← Back to Home
                </Link>
            </footer>
        </div>
    </div>
  );
}
