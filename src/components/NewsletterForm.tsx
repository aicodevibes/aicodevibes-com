'use client';

import { useActionState } from "react";
import { subscribeEmail } from "../app/actions";

export function NewsletterForm() {
  const [state, formAction, isPending] = useActionState(subscribeEmail, null);

  return (
    <div className="w-full md:w-96 space-y-4">
      <form action={formAction} className="flex flex-col gap-3">
        <div className="relative group">
          <input 
            type="email" 
            name="email"
            required
            placeholder="your@email.com"
            className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 transition-all shadow-inner shadow-black/20"
          />
        </div>
        <button 
          disabled={isPending}
          className="w-full px-8 py-4 rounded-xl bg-indigo-600 text-white font-bold hover:bg-indigo-700 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:grayscale flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/20"
        >
          {isPending ? (
            <>
              <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Processing...
            </>
          ) : 'Subscribe Now'}
        </button>
      </form>
      
      {state?.success && (
        <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium text-center animate-fade-in">
          {state.message}
        </div>
      )}
      
      {state?.error && (
        <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-medium text-center animate-fade-in shadow-lg shadow-rose-900/10">
          {state.error}
        </div>
      )}
    </div>
  );
}
