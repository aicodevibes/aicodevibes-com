import Link from "next/link";
import React from "react";

/**
 * Main navigation component for the application.
 * Fixed at the top of the viewport with blur effects.
 * 
 * @returns The navigation bar with logo and links
 */
export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-white/5 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-linear-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/20 group-hover:scale-110 transition-transform">
            <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 18l6-6-6-6" />
              <path d="M8 6l-6 6 6 6" />
              <path d="M12 4.5l-2 15" />
            </svg>
          </div>
          <div className="flex flex-col leading-tight">
              <span className="font-bold text-lg dark:text-white group-hover:text-indigo-400 transition-colors">AICODEVIBES.COM</span>
              <span className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold font-mono">AI Code Vibes IT</span>
          </div>
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
          <Link href="/lessons" className="hover:text-white transition-colors">Curriculum</Link>
          <a href="https://nextjs.org/docs" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Docs</a>
          <a href="https://nextjs.org/learn" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Next.js Learn</a>
        </div>
      </div>
    </nav>
  );
}
