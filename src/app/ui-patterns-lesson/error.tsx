"use client";

import { useEffect } from "react";

export default function Error({ error, reset }: { error: Error & { digest?: string }, reset: () => void }) {
  useEffect(() => {
    // We log the error on the server in a real app, but for this lab, 
    // it will log in the browser console as well.
    console.error(`[ERROR LOG]: ${error.message}`);
  }, [error]);

  return (
    <div className="min-h-screen bg-mesh font-sans p-8 md:p-24 selection:bg-rose-500/30 flex items-center justify-center">
        <div className="max-w-2xl w-full mx-auto text-center space-y-10">
            <header className="space-y-6">
                <div className="mx-auto w-20 h-20 rounded-full bg-rose-500/10 border border-rose-500/20 flex items-center justify-center animate-pulse">
                    <span className="text-4xl">⚠️</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight dark:text-white">
                    Something went <span className="text-rose-500">wrong</span>.
                </h1>
                <p className="text-slate-500 dark:text-slate-400 font-medium">
                    &quot;Error Boundaries are the seatbelts of your application architecture.&quot;
                </p>
            </header>

            <div className="glass-card p-10 border-rose-500/20 bg-rose-500/5 backdrop-blur-sm">
                <p className="font-mono text-sm text-rose-500 mb-8 p-4 rounded-xl bg-black/10 dark:bg-white/5 border border-rose-500/10">
                    {error.message}
                </p>
                <div className="flex flex-col gap-4">
                    <button 
                        onClick={() => {
                            // In this Lab, the 'error' is in the URL.
                            // Standard reset() only re-renders the CURRENT URL.
                            // To recover, we must strip the 'fail' parameter.
                            if (window.location.search.includes('fail=true')) {
                                window.location.href = '/ui-patterns-lesson';
                            } else {
                                reset();
                            }
                        }}
                        className="w-full py-4 rounded-xl bg-rose-600 text-white font-bold hover:bg-rose-700 transition-all shadow-lg shadow-rose-600/20"
                    >
                        Force System Recovery
                    </button>
                    <button 
                         onClick={() => reset()}
                         className="text-xs text-slate-500 hover:underline"
                    >
                        Try Again (Same State)
                    </button>
                </div>
            </div>
            
            <footer className="pt-12 text-xs text-slate-400 italic">
                Note: This entire UI resides in &apos;error.tsx&apos;. 
                The root layout remains untouched, protecting the rest of your app.
            </footer>
        </div>
    </div>
  );
}
