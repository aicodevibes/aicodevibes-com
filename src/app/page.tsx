import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-mesh font-sans selection:bg-indigo-500/30">
      {/* Decorative Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-500/10 blur-[120px] rounded-full animate-float opacity-50" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 blur-[120px] rounded-full animate-float opacity-50" style={{ animationDelay: '2s' }} />

      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-white/5 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/20">
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
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400 hover:text-white transition-colors">
            <Link href="/lessons">Curriculum</Link>
            <a href="https://nextjs.org/docs" target="_blank">Docs</a>
            <a href="https://nextjs.org/learn" target="_blank">Next.js Learn</a>
          </div>
        </div>
      </nav>

      <main className="relative pt-32 pb-40 px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Dashboard Header */}
          <div className="flex flex-col lg:flex-row gap-20 mb-32 items-start">
            <div className="flex-1 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                    <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-wider">Course Status: Active Lab Sessions</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight dark:text-white">
                    Mastering <br />
                    <span className="text-gradient">Next.js 15+</span>
                </h1>
                <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 leading-relaxed max-w-xl">
                    An architectural deep-dive into the modern web ecosystem. Built using the very techniques it teaches: Streaming, Server Actions, and Dynamic Routing.
                </p>
                <div className="pt-8 flex gap-4">
                    <Link 
                        href="/lessons/next-initialize" 
                        className="px-8 py-4 rounded-full bg-indigo-600 text-white font-bold hover:bg-indigo-700 transition-all hover:scale-105 shadow-xl shadow-indigo-600/20"
                    >
                        Start Lesson 1
                    </Link>
                    <Link 
                        href="/lessons" 
                        className="px-8 py-4 rounded-full glass-card font-bold hover:bg-white/5 transition-all text-slate-700 dark:text-white border-white/10"
                    >
                        Browse Hub
                    </Link>
                </div>
            </div>

            <div className="w-full lg:w-96 glass-card p-10 border-white/5 bg-white/5 backdrop-blur-3xl shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Site Goals & Core Tech</h3>
                <div className="space-y-6">
                    <GoalItem title="Production Foundations" desc="Skip the boilerplate and build for scale." />
                    <GoalItem title="Performance First" desc="Zero-runtime CSS and Server-side streaming." />
                    <GoalItem title="Developer Experience" desc="Type-safe data pipelines with Server Actions." />
                </div>
            </div>
          </div>

          {/* Module Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ModuleCard 
              title="Module 1: Architecture" 
              desc="Initialization protocol, TypeScript setup, and the global design system."
              icon="🏗️"
              href="/lessons/next-initialize"
              tag="Foundation"
            />
            <ModuleCard 
              title="Module 2: Streaming" 
              desc="Implement fetch boundaries and data-loading skeletons."
              icon="🚀"
              href="/lessons/next-fetch"
              labHref="/data-lesson"
              tag="Server"
            />
            <ModuleCard 
              title="Module 3: Interactivity" 
              desc="Master React State, Hooks, and the Client-side boundary."
              icon="⚡"
              href="/lessons/next-interactivity"
              labHref="/interactivity-lesson"
              tag="Client"
            />
            <ModuleCard 
              title="Module 4: Server Actions" 
              desc="Build secure data mutations without creating API endpoints."
              icon="🔥"
              href="/lessons/next-server-actions"
              labHref="/actions-lesson"
              tag="Full-Stack"
            />
            <ModuleCard 
              title="Module 5: Resilience" 
              desc="Armor your app with Error Boundaries and Loading files."
              icon="🛡️"
              href="/lessons/next-ui-patterns"
              labHref="/ui-patterns-lesson"
              tag="Advanced"
            />
            <ModuleCard 
              title="Module 6: Dynamic Routes" 
              desc="Explore the routing hub architecture and polymorphic pages."
              icon="🌐"
              href="/lessons/next-routing"
              labHref="/lessons"
              tag="Routing"
            />
          </div>
          
        </div>
      </main>

      <footer className="py-20 border-t border-white/5 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 h-full flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="space-y-4 text-center md:text-left">
             <div className="text-xl font-bold dark:text-white tracking-tighter">AI CODE VIBES</div>
             <p className="text-[10px] text-slate-500 uppercase font-mono tracking-tighter">© 2026 AI Code Vibes Institute of Technology • Developed with Next.js 15</p>
          </div>
          <div className="flex gap-8 text-xs font-semibold text-slate-500 uppercase tracking-widest">
            <a href="https://nextjs.org/docs" target="_blank" className="hover:text-indigo-400 transition-colors">Vercel Documentation</a>
            <a href="https://github.com/vercel/next.js" target="_blank" className="hover:text-indigo-400 transition-colors">Vercel Source</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function GoalItem({ title, desc }: { title: string, desc: string }) {
  return (
    <div className="space-y-1">
        <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/50" />
            <h4 className="font-bold text-slate-800 dark:text-slate-200 text-sm">{title}</h4>
        </div>
        <p className="text-xs text-slate-500 leading-relaxed ml-3.5">{desc}</p>
    </div>
  )
}

function ModuleCard({ title, desc, icon, href, tag, labHref }: { title: string, desc: string, icon: string, href: string, tag: string, labHref?: string }) {
  return (
    <div className="glass-card p-10 group hover:border-indigo-500/40 transition-all duration-500 flex flex-col justify-between border-white/10">
      <div>
        <div className="flex justify-between items-start mb-8">
            <div className="text-4xl group-hover:scale-110 transition-transform">{icon}</div>
            <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-[0.2em] border border-indigo-400/20 px-2 py-1 rounded bg-indigo-400/5">{tag}</span>
        </div>
        <h3 className="text-xl font-bold dark:text-white mb-4 group-hover:text-indigo-400 transition-colors">{title}</h3>
        <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm">{desc}</p>
      </div>

      <div className="mt-12 flex flex-col gap-3">
        <Link href={href} className="flex items-center justify-between p-4 rounded-xl bg-indigo-500/5 border border-white/5 hover:bg-slate-500/5 transition-all text-xs font-bold uppercase tracking-widest text-indigo-400 group-hover:bg-indigo-500/10">
            Learn Module <span className="opacity-40">→</span>
        </Link>
        {labHref && (
            <Link href={labHref} className="flex items-center justify-between p-4 rounded-xl bg-transparent border border-white/5 hover:border-white/20 transition-all text-[10px] font-bold uppercase tracking-[0.15em] text-slate-500">
                Live Laboratory <span className="opacity-20 text-xs text-white">🧪</span>
            </Link>
        )}
      </div>
    </div>
  );
}
