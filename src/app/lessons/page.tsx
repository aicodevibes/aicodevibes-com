import { getAllLessons } from "@/lib/lessons";
import { ModuleCard } from "@/components/lessons/ModuleCard";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata = {
  title: "Curriculum Hub | Agentic Coding",
  description: "Explore our comprehensive curriculum on Agentic Coding, Next.js 16, and modern AI development patterns.",
};

export default async function LessonsHubPage() {
  const lessons = await getAllLessons();

  return (
    <div className="min-h-screen flex flex-col bg-background relative overflow-hidden">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-24 px-8 md:px-24">
        <div className="max-w-7xl mx-auto">
          <header className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-8 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
              <span className="text-[10px] font-bold text-indigo-500 uppercase tracking-[0.2em]">Curriculum Index</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight dark:text-white leading-tight">
              Master the <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Agentic Stack</span>
            </h1>
            <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
              Dive into our modular learning path designed for the next generation of AI-native developers. 
              Each module explores a critical pillar of modern web architecture.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {lessons.map((lesson) => (
              <ModuleCard 
                key={lesson.slug}
                title={lesson.metadata.title}
                desc={lesson.metadata.description}
                icon={lesson.metadata.icon || "📖"}
                href={`/lessons/${lesson.slug}`}
                tag={lesson.metadata.difficulty || "Intermediate"}
                labHref={lesson.slug === "next-fetch" ? "/data-lesson" : 
                         lesson.slug === "next-interactivity" ? "/interactivity-lesson" : 
                         undefined}
              />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
