import { getSortedPostsData } from "@/lib/blog";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { ArrowLeft, Calendar, Tag } from "lucide-react";

export default function BlogPage() {
  const posts = getSortedPostsData();

  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <Navbar />
      
      <main className="max-w-3xl mx-auto px-8 pt-24 pb-16" role="main">
        <Link href="/" className="inline-flex items-center text-accent hover:underline mb-12 font-mono text-xs tracking-widest">
          <ArrowLeft size={14} className="mr-2" /> BACK TO BASE
        </Link>

        <h1 className="mb-4 text-6xl font-bold tracking-tighter uppercase">
          The <span className="text-accent italic">Logs.</span>
        </h1>
        <p className="mb-20 text-white/50 font-mono text-sm max-w-lg leading-relaxed">
          Field notes, case studies, and technical research from the frontlines.
        </p>

        <div>
          {posts.map((post) => (
            <article key={post.slug} className="group border-l-2 border-orange-500/40 pl-6 mb-16">
              <Link href={`/blog/${post.slug}`} className="block">
                <div className="mb-5 flex items-center gap-4">
                  <div className="flex items-center gap-2 text-[10px] font-mono text-accent/60 uppercase tracking-widest">
                    <Calendar size={12} />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-2 text-[10px] font-mono text-white/60 uppercase tracking-widest px-2 py-0.5 border border-white/10">
                    <Tag size={12} />
                    {post.tag}
                  </div>
                </div>

                <h2 className="text-3xl font-bold mb-4 group-hover:text-accent transition-colors tracking-tight">
                  {post.title}
                </h2>
                
                <p className="mb-8 text-white/60 leading-loose font-mono text-sm max-w-3xl">
                  {post.excerpt}
                </p>

                <span className="text-orange-500 font-mono text-xs tracking-widest hover:tracking-[0.2em] transition-all duration-300">
                  READ LOG _
                </span>
              </Link>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
