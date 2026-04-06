export default function Loading() {
  return (
    <div className="min-h-screen bg-mesh font-sans p-8 md:p-24 selection:bg-indigo-500/30 flex items-center justify-center">
        <div className="max-w-2xl w-full mx-auto space-y-12">
            <div className="text-center space-y-4">
                <div className="mx-auto w-32 h-6 rounded-full bg-slate-200/50 dark:bg-slate-800/50 animate-shimmer" />
                <div className="mx-auto w-64 h-12 rounded-2xl bg-slate-200/50 dark:bg-slate-800/50 animate-shimmer" />
                <div className="mx-auto w-96 h-4 rounded-xl bg-slate-200/50 dark:bg-slate-800/50 animate-shimmer" />
            </div>

            <div className="glass-card p-10 h-40 flex items-center justify-center border-white/10 animate-shimmer">
                <p className="text-slate-400 font-medium animate-pulse">Initializing Resilient Architecture...</p>
            </div>
            
            <div className="glass-card p-10 h-32 border-white/10 animate-shimmer" />
        </div>
    </div>
  );
}
