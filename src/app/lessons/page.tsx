import fs from "fs";
import path from "path";
import Link from "next/link";

export default function LessonsHubPage() {
  // Get all .md files in the project root
  const projectRoot = process.cwd();
  const files = fs.readdirSync(projectRoot);
  const lessons = files
    .filter(f => f.startsWith("next-") && f.endsWith(".md"))
    .map(f => f.replace(".md", ""));

  return (
    <div className="min-h-screen bg-mesh font-sans p-8 md:p-24 selection:bg-indigo-500/30">
        <div className="max-w-4xl mx-auto">
            <header className="text-center mb-20">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8">
                    <span className="w-2 h-2 rounded-full bg-blue-500" />
                    <span className="text-xs font-semibold text-blue-500 uppercase tracking-wider">Lesson Hub: Dynamic Architecture</span>
                </div>
                <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight dark:text-white">
                    Exploring <span className="text-gradient">Dynamic Routing</span>
                </h1>
                <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
                    This hub is built using Next.js Dynamic Routes. Each card below corresponds to a real markdown file in the project's root directory.
                </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {lessons.map((slug) => (
                    <Link key={slug} href={`/lessons/${slug}`}>
                        <div className="glass-card p-10 group hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 h-full flex flex-col justify-between">
                            <div>
                                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-500">📖</div>
                                <h3 className="text-xl font-bold dark:text-white mb-4 capitalize">
                                    {slug.replace("next-", "").replace(/-/g, " ")}
                                </h3>
                                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                                    Click to dive into the technical documentation for this module.
                                </p>
                            </div>
                            <div className="mt-8 flex items-center text-blue-500 font-semibold text-sm group-hover:gap-2 transition-all">
                                Open Lesson <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            <footer className="mt-32 pt-12 border-t border-white/5 text-center">
                <a href="/" className="text-indigo-500 font-semibold hover:underline flex items-center justify-center gap-2">
                   ← Back to Application Home
                </a>
            </footer>
        </div>
    </div>
  );
}
