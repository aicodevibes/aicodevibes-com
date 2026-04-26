import { getLessonBySlug, getAllLessons } from "@/lib/lessons";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import Link from "next/link";

export async function generateStaticParams() {
  const lessons = await getAllLessons();
  return lessons.map((lesson) => ({
    slug: lesson.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const lesson = await getLessonBySlug(slug);
  
  if (!lesson) return { title: "Lesson Not Found" };

  return {
    title: `${lesson.metadata.title} | Agentic Coding`,
    description: lesson.metadata.description,
  };
}

export default async function LessonViewerPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const lesson = await getLessonBySlug(slug);

  if (!lesson) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-24 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 animate-fade-in">
            <Button variant="ghost" size="sm" asChild className="mb-8">
              <Link href="/lessons">
                <span className="mr-2">←</span> Back to Curriculum
              </Link>
            </Button>
            
            <div className="flex items-center gap-4 mb-6">
              <span className="text-4xl">{lesson.metadata.icon || "📖"}</span>
              <div>
                <h1 className="text-4xl md:text-5xl font-black dark:text-white tracking-tight leading-tight">
                  {lesson.metadata.title}
                </h1>
                <div className="flex items-center gap-3 mt-2">
                  <span className="text-[10px] font-bold text-indigo-500 uppercase tracking-widest px-2 py-1 bg-indigo-500/5 border border-indigo-500/10 rounded">
                    {lesson.metadata.difficulty}
                  </span>
                  <span className="text-slate-400 text-xs">Module {lesson.metadata.order}</span>
                </div>
              </div>
            </div>
          </div>

          <GlassCard className="p-8 md:p-16 shadow-xl shadow-indigo-500/5 backdrop-blur-sm overflow-hidden">
            <div className="prose-premium">
              <ReactMarkdown>{lesson.content}</ReactMarkdown>
            </div>
          </GlassCard>

          <div className="mt-16 flex items-center justify-between p-8 bg-indigo-600 rounded-3xl text-white overflow-hidden relative group">
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-2">Ready to apply this knowledge?</h3>
              <p className="text-indigo-100 text-sm max-w-md">
                Check out the live laboratory for this module to see these patterns in action.
              </p>
            </div>
            <Button variant="secondary" className="relative z-10 shrink-0" asChild>
               <Link href={slug === "next-fetch" ? "/data-lesson" : 
                           slug === "next-interactivity" ? "/interactivity-lesson" : 
                           "/lessons"}>
                 Go to Lab →
               </Link>
            </Button>
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl group-hover:scale-110 transition-transform duration-700" />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
