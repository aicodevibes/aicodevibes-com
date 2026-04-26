import Link from "next/link";
import { GlassCard } from "@/components/ui/GlassCard";
import React from "react";

interface ModuleCardProps {
  title: string;
  desc: string;
  icon: string;
  href: string;
  tag: string;
  labHref?: string;
}

export function ModuleCard({ title, desc, icon, href, tag, labHref }: ModuleCardProps) {
  return (
    <GlassCard hoverable className="flex flex-col justify-between h-full">
      <div>
        <div className="flex justify-between items-start mb-8">
            <div className="text-4xl group-hover:scale-110 transition-transform">{icon}</div>
            <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-[0.2em] border border-indigo-400/20 px-2 py-1 rounded bg-indigo-400/5">{tag}</span>
        </div>
        <h3 className="text-xl font-bold dark:text-white mb-4 group-hover:text-indigo-400 transition-colors">{title}</h3>
        <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm">{desc}</p>
      </div>

      <div className="mt-12 flex flex-col gap-3">
        <Link 
          href={href} 
          className="flex items-center justify-between p-4 rounded-xl bg-indigo-500/5 border border-white/5 hover:bg-slate-500/5 transition-all text-xs font-bold uppercase tracking-widest text-indigo-400 group-hover:bg-indigo-500/10"
        >
            Learn Module <span className="opacity-40">→</span>
        </Link>
        {labHref && (
            <Link 
              href={labHref} 
              className="flex items-center justify-between p-4 rounded-xl bg-transparent border border-white/5 hover:border-white/20 transition-all text-[10px] font-bold uppercase tracking-[0.15em] text-slate-500"
            >
                Live Laboratory <span className="opacity-20 text-xs text-white">🧪</span>
            </Link>
        )}
      </div>
    </GlassCard>
  );
}
