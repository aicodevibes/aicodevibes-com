import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import React from "react";

interface LaboratoryLayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
  moduleTag: string;
  moduleColor?: 'indigo' | 'purple' | 'emerald' | 'rose' | 'amber';
}

export function LaboratoryLayout({ 
  children, 
  title, 
  description, 
  moduleTag,
  moduleColor = 'indigo'
}: LaboratoryLayoutProps) {
  const colors = {
    indigo: "bg-indigo-500",
    purple: "bg-purple-500",
    emerald: "bg-emerald-500",
    rose: "bg-rose-500",
    amber: "bg-amber-500",
  };

  const borderColors = {
    indigo: "border-indigo-500/20 bg-indigo-500/10 text-indigo-500",
    purple: "border-purple-500/20 bg-purple-500/10 text-purple-500",
    emerald: "border-emerald-500/20 bg-emerald-500/10 text-emerald-500",
    rose: "border-rose-500/20 bg-rose-500/10 text-rose-500",
    amber: "border-amber-500/20 bg-amber-500/10 text-amber-500",
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-24 px-8 md:px-24">
        <div className="max-w-7xl mx-auto">
          <header className="text-center mb-20">
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border mb-8 animate-fade-in ${borderColors[moduleColor]}`}>
              <span className={`w-2 h-2 rounded-full animate-pulse ${colors[moduleColor]}`} />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em]">{moduleTag}</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tight dark:text-white leading-tight">
              {title}
            </h1>
            <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
              {description}
            </p>
          </header>

          <div className="flex flex-col items-center">
            {children}
          </div>

          <div className="mt-24 pt-12 border-t border-slate-200 dark:border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/lessons">
                ← Back to Curriculum Hub
              </Link>
            </Button>
            <div className="flex items-center gap-4">
               <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Laboratory Mode</span>
               <div className="flex gap-1">
                 <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                 <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
               </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
