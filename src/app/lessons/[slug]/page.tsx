import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const title = slug.replace("next-", "").replace(/-/g, " ").toUpperCase();
  
  return {
    title: `${title} | AI CODE VIBES`,
    description: `Learn all about ${title} in the Advanced Web Application Design course (1.0) at AI Code Vibes.`
  };
}

export default async function LessonViewerPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const projectRoot = process.cwd();
  const filePath = path.join(projectRoot, `${slug}.md`);

  // Safety check for path traversal (simple but effective for this local lab)
  if (!slug.startsWith("next-") || !fs.existsSync(filePath)) {
    notFound(); // Triggers the standard Next.js 404
  }

  const content = fs.readFileSync(filePath, "utf-8");

  return (
    <div className="min-h-screen bg-mesh font-sans selection:bg-indigo-500/30">
        <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-white/5 backdrop-blur-md">
            <div className="max-w-4xl mx-auto px-6 h-20 flex items-center justify-between">
                <Link href="/lessons" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                    <span className="text-xl rotate-180">→</span>
                    <span className="font-bold text-sm tracking-tight dark:text-white uppercase transition-all hover:tracking-widest">Back to Hub</span>
                </Link>
                <div className="flex items-center gap-4">
                    <div className="text-xs font-mono text-slate-500 uppercase">{slug}.md</div>
                </div>
            </div>
        </nav>

        <main className="relative pt-32 pb-40 px-6">
            <div className="max-w-4xl mx-auto">
                <div className="glass-card p-10 md:p-20 shadow-2xl shadow-indigo-500/10 border-white/10">
                    <div className="prose-premium">
                        <ReactMarkdown>{content}</ReactMarkdown>
                    </div>
                </div>

                <div className="mt-20 text-center">
                   <Link href="/" className="text-indigo-500 font-semibold hover:underline flex items-center justify-center gap-2">
                       ← Back to Application Home
                   </Link>
                </div>
            </div>
        </main>
    </div>
  );
}
