import { Suspense } from "react";
import Link from "next/link";
import { NewsletterForm } from "@/components/NewsletterForm";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ModuleCard } from "@/components/lessons/ModuleCard";
import { GoalItem } from "@/components/lessons/GoalItem";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { initDb } from "@/lib/db";

async function DbInitializer() {
  await initDb();
  return null;
}

/**
 * The main landing page of the application.
 * Displays the course hero, module grid, and newsletter subscription form.
 * 
 * @returns The rendered home page
 */
export default async function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-mesh font-sans selection:bg-indigo-500/30">
      <Suspense fallback={null}>
        <DbInitializer />
      </Suspense>
      {/* Decorative Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-500/10 blur-[120px] rounded-full animate-float opacity-50" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 blur-[120px] rounded-full animate-float opacity-50" style={{ animationDelay: '2s' }} />

      <Navbar />

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
                    Learning Next.js Basics <br />
                    <span className="text-gradient">for Agentic Coding</span>
                </h1>
                <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 leading-relaxed max-w-xl">
                    An architectural deep-dive into the modern web ecosystem. Built using the very techniques it teaches: Streaming, Server Actions, and Dynamic Routing.
                </p>
                <div className="pt-8 flex gap-4">
                    <Button asChild variant="primary">
                      <Link href="/lessons/next-initialize">Start Lesson 1</Link>
                    </Button>
                    <Button asChild variant="ghost">
                      <Link href="/lessons">Browse Hub</Link>
                    </Button>
                </div>
            </div>

            <GlassCard className="w-full lg:w-96 p-10 bg-white/5 backdrop-blur-3xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Site Goals & Core Tech</h2>
                <div className="space-y-6">
                    <GoalItem title="Production Foundations" desc="Skip the boilerplate and build for scale." />
                    <GoalItem title="Performance First" desc="Zero-runtime CSS and Server-side streaming." />
                    <GoalItem title="Developer Experience" desc="Type-safe data pipelines with Server Actions." />
                </div>
            </GlassCard>
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

      {/* Newsletter Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />
        <GlassCard className="max-w-4xl mx-auto p-12 md:p-20 bg-white/5 backdrop-blur-3xl relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-1 h-full bg-linear-to-b from-indigo-500 to-purple-600" />
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="space-y-4 text-center md:text-left">
              <h2 className="text-3xl font-extrabold tracking-tight dark:text-white">Get Latest Updates</h2>
              <p className="text-slate-500 text-sm max-w-sm">Join the AICODEVIBES community for weekly architectural deep-dives and laboratory experiments.</p>
            </div>
            
            <NewsletterForm />
          </div>
        </GlassCard>
      </section>

      <Footer />
    </div>
  );
}
