"use client"; // This is the key directive for Lesson 3!

import { useState } from "react";

export default function InteractivityLessonPage() {
  const [likes, setLikes] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!feedback.trim()) return;
    
    setIsSending(true); // Immediate UI update (Optimistic feedback)
    
    // Simulate a network delay for the Server Action/API
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    setIsSending(false);
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-mesh font-sans p-8 md:p-24 selection:bg-indigo-500/30">
        <div className="max-w-2xl mx-auto">
            <header className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-8">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span className="text-xs font-semibold text-emerald-500 uppercase tracking-wider">Lesson 3: Client Foundations</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight dark:text-white">
                    Exploring <span className="text-gradient">Interactivity</span>
                </h1>
                <p className="text-slate-500 dark:text-slate-400">
                    Learn how the <code className="bg-emerald-500/10 text-emerald-600 px-1 rounded">'use client'</code> directive unlocks React's dynamic capabilities like state and event handling.
                </p>
            </header>

            <div className="space-y-8">
                {/* Interaction Card 1: State */}
                <div className="glass-card p-10 text-center shadow-xl shadow-indigo-500/5 border-white/10">
                    <h3 className="text-2xl font-bold mb-6 dark:text-white">The Power of State</h3>
                    <div className="text-6xl font-black text-gradient mb-8">{likes}</div>
                    <button 
                        onClick={() => setLikes(likes + 1)}
                        className="px-8 py-4 rounded-full bg-indigo-600 text-white font-bold hover:bg-indigo-700 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-indigo-600/30"
                    >
                        Click to Like ❤️
                    </button>
                    <p className="mt-6 text-sm text-slate-500">
                        This button triggers a re-render of the component on the client side.
                    </p>
                </div>

                {/* Interaction Card 2: Form Handling */}
                <div className="glass-card p-10 border-white/10">
                    <h3 className="text-2xl font-bold mb-6 dark:text-white">Asynchronous Feedback</h3>
                    {!isSubmitted ? (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <textarea 
                                value={feedback}
                                onChange={(e) => setFeedback(e.target.value)}
                                placeholder="What did you learn today?"
                                disabled={isSending}
                                className="w-full h-32 p-4 rounded-2xl bg-white/5 border border-white/10 focus:border-indigo-500/50 outline-none transition-all dark:text-white resize-none disabled:opacity-50"
                            />
                            <button 
                                type="submit"
                                disabled={isSending}
                                className="w-full py-4 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold hover:opacity-90 transition-all shadow-lg disabled:cursor-not-allowed disabled:grayscale"
                            >
                                {isSending ? (
                                    <span className="flex items-center justify-center gap-2">
                                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                        Sending...
                                    </span>
                                ) : "Send Feedback"}
                            </button>
                        </form>
                    ) : (
                        <div className="py-8 text-center animate-float">
                            <div className="text-5xl mb-4">🚀</div>
                            <h4 className="text-xl font-bold dark:text-white mb-2">Feedback Received!</h4>
                            <p className="text-slate-500">" {feedback} "</p>
                            <button 
                                onClick={() => { setIsSubmitted(false); setFeedback(""); }}
                                className="mt-6 text-indigo-500 font-semibold hover:underline"
                            >
                                Send another
                            </button>
                        </div>
                    )}
                </div>
            </div>

            <footer className="mt-20">
                <a href="/" className="text-indigo-500 font-semibold hover:underline flex items-center gap-2">
                   ← Back to Home
                </a>
            </footer>
        </div>
    </div>
  );
}
