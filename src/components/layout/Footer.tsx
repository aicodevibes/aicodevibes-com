import React from "react";

export function Footer() {
  return (
    <footer className="py-20 border-t border-white/5 bg-white/5 backdrop-blur-sm mt-auto">
      <div className="max-w-7xl mx-auto px-6 h-full flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="space-y-4 text-center md:text-left">
           <div className="text-xl font-bold dark:text-white tracking-tighter">AI CODE VIBES</div>
           <p className="text-[10px] text-slate-500 uppercase font-mono tracking-tighter">
             © 2026 AI Code Vibes Institute of Technology • Developed with Next.js 16
           </p>
        </div>
        <div className="flex gap-8 text-xs font-semibold text-slate-500 uppercase tracking-widest">
           <a href="https://nextjs.org/docs" target="_blank" className="hover:text-indigo-400 transition-colors">Vercel Documentation</a>
           <a href="https://github.com/vercel/next.js" target="_blank" className="hover:text-indigo-400 transition-colors">Vercel Source</a>
           <a href="https://github.com/aicodevibes/aicodevibes-com" target="_blank" className="hover:text-indigo-400 transition-colors">Repository</a>
        </div>
      </div>
    </footer>
  );
}
