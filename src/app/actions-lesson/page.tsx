"use client"; // This must be a Client Component for useActionState

import { useActionState } from "react";
import { createTask } from "./actions";
import Link from "next/link";

export default function ActionsLessonPage() {
  // useActionState handles the form submission, returns the state, and the dispatch function.
  // The 'null' is our initial state.
  const [state, formAction, isPending] = useActionState(createTask, null);

  return (
    <div className="min-h-screen bg-mesh font-sans p-8 md:p-24 selection:bg-indigo-500/30">
        <div className="max-w-xl mx-auto">
            <header className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-8">
                    <span className="w-2 h-2 rounded-full bg-orange-500" />
                    <span className="text-xs font-semibold text-orange-500 uppercase tracking-wider">Lesson 4: Async Pipelines</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight dark:text-white">
                    Mastering <span className="text-gradient">Server Actions</span>
                </h1>
                <p className="text-slate-500 dark:text-slate-400">
                    Interact with your database directly from your components without writing a single API route.
                </p>
            </header>

            <div className="glass-card p-10 border-white/10 shadow-2xl shadow-orange-500/5">
                <h3 className="text-2xl font-bold mb-6 dark:text-white">The Zero-API Experience</h3>
                
                {/* Notice the use of the 'formAction' from useActionState here. */}
                <form action={formAction} className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-400 ml-1">Task Description</label>
                        <input 
                            name="title"
                            type="text" 
                            placeholder="Type something to 'save' to the server..."
                            required
                            disabled={isPending}
                            className="w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:border-orange-500/50 outline-none transition-all dark:text-white disabled:opacity-50"
                        />
                    </div>

                    <button 
                        type="submit"
                        disabled={isPending}
                        className="w-full py-4 rounded-xl bg-orange-600 text-white font-bold hover:bg-orange-700 transition-all shadow-lg shadow-orange-600/20 disabled:grayscale disabled:cursor-not-allowed"
                    >
                        {isPending ? (
                            <span className="flex items-center justify-center gap-2">
                                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                Processing on Server...
                            </span>
                        ) : "Create Task on Server"}
                    </button>
                    
                    <p className="text-xs text-center text-slate-500 italic">
                        By click the button, you are initiating a secure POST to the server.
                    </p>
                </form>

                {/* Feedback Section triggered by Server State! */}
                <div className="mt-8">
                    {state?.success && (
                        <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-sm font-medium animate-float">
                            ✅ {state.success}
                        </div>
                    )}
                    {state?.error && (
                        <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-500 text-sm font-medium">
                            ❌ {state.error}
                        </div>
                    )}
                </div>
            </div>

            <div className="mt-12 p-6 rounded-2xl bg-orange-500/5 border border-orange-500/10">
                <h4 className="text-sm font-bold text-orange-500 uppercase mb-4 tracking-widest tracking-widest">Verification Checklist</h4>
                <ul className="space-y-3 text-sm text-slate-500 dark:text-slate-400">
                    <li className="flex gap-2 items-start text-indigo-400 font-bold">1. Check your Terminal/Server Console. </li>
                    <li className="flex gap-2">2. Check your Browser DevTools Network tab.</li>
                    <li className="flex gap-2">3. Observe the &quot;Success&quot; message returned from the server!</li>
                </ul>
            </div>

            <footer className="mt-20 flex justify-between items-center">
                <Link href="/" className="text-indigo-500 font-semibold hover:underline flex items-center gap-2">
                   ← Back to Home
                </Link>
                <a href="https://github.com/aicodevibes/aicodevibes-com" target="_blank" className="text-slate-500 text-[10px] hover:text-indigo-400 transition-colors uppercase font-bold tracking-widest">
                    Source Repository
                </a>
            </footer>
        </div>
    </div>
  );
}
