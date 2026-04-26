"use client";

import { useState } from "react";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";

export function InteractivityLab() {
  const [likes, setLikes] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!feedback.trim()) return;
    
    setIsSending(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSending(false);
    setIsSubmitted(true);
  };

  return (
    <div className="w-full max-w-2xl space-y-8">
      {/* Interaction Card 1: State */}
      <GlassCard className="p-12 text-center">
        <h3 className="text-2xl font-bold mb-6 dark:text-white">The Power of State</h3>
        <div className="text-7xl font-black text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-cyan-500 mb-8">
          {likes}
        </div>
        <Button 
          variant="secondary"
          size="lg"
          onClick={() => setLikes(likes + 1)}
          className="rounded-full from-emerald-500 to-cyan-600 shadow-emerald-500/20"
        >
          Click to Like ❤️
        </Button>
        <p className="mt-8 text-sm text-slate-500">
          This button triggers a re-render of the component on the client side.
        </p>
      </GlassCard>

      {/* Interaction Card 2: Form Handling */}
      <GlassCard className="p-12">
        <h3 className="text-2xl font-bold mb-8 dark:text-white">Asynchronous Feedback</h3>
        {!isSubmitted ? (
          <form action="#" onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Your Message</label>
              <textarea 
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="What did you learn today?"
                disabled={isSending}
                className="w-full h-40 p-6 rounded-4xl bg-slate-100 dark:bg-white/3 border border-slate-200 dark:border-white/10 focus:border-emerald-500/50 focus:ring-4 focus:ring-emerald-500/5 outline-none transition-all dark:text-white resize-none disabled:opacity-50"
              />
            </div>
            <Button 
              type="submit"
              size="lg"
              isLoading={isSending}
              className="w-full bg-slate-900 dark:bg-white dark:text-slate-900 hover:scale-[1.01] active:scale-[0.99]"
            >
              Send Feedback
            </Button>
          </form>
        ) : (
          <div className="py-12 text-center animate-fade-in">
            <div className="text-6xl mb-6">🚀</div>
            <h4 className="text-2xl font-bold dark:text-white mb-4">Feedback Received!</h4>
            <div className="p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/10 mb-8">
               <p className="text-slate-600 dark:text-slate-300 italic">&quot;{feedback}&quot;</p>
            </div>
            <Button 
              variant="ghost"
              size="sm"
              onClick={() => { setIsSubmitted(false); setFeedback(""); }}
            >
              Send another message
            </Button>
          </div>
        )}
      </GlassCard>
    </div>
  );
}
