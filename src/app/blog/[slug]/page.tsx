import { getPostData, getSortedPostsData } from "@/lib/blog";
import { Navbar } from "@/components/Navbar";
import Link from "next/link";
import { ArrowLeft, Calendar } from "lucide-react";

export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostData(slug);
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostData(slug);

  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: 
        JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": post.title,
          "datePublished": post.date,
          "description": post.excerpt,
          "author": {
            "@type": "Person",
            "name": "Gagan Deep"
          }
        })
      }} />
      <Navbar />
      
      <main className="max-w-3xl mx-auto px-8 pt-8 pb-16" role="main">
        <Link href="/blog" className="inline-flex items-center text-accent hover:underline mb-12 font-mono text-xs tracking-widest">
          <ArrowLeft size={14} className="mr-2" /> RETURN TO LOGS
        </Link>

        <header className="border-b-2 border-orange-500 pb-6 mb-10">
          <div className="flex items-center gap-4 text-[10px] font-mono text-accent uppercase tracking-widest mb-6">
            <Calendar size={12} />
            {post.date} | {post.tag}
          </div>
          <h1 className="text-5xl font-bold mb-8 leading-tight tracking-tighter">
            {post.title}
          </h1>
        </header>

        <article 
          className="prose prose-invert prose-orange max-w-none
            prose-h2:text-orange-400 prose-h2:font-mono prose-h2:text-sm prose-h2:tracking-widest prose-h2:uppercase prose-h2:mt-10 prose-h2:mb-4
            prose-p:text-gray-300 prose-p:leading-8 prose-p:mb-6
            prose-li:text-gray-300 prose-li:mb-2
            prose-strong:text-accent
            prose-ul:mb-6"
          dangerouslySetInnerHTML={{ __html: post.contentHtml || "" }} 
        />
      </main>
    </div>
  );
}
