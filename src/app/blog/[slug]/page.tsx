import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { HomeNav } from "@/components/home/HomeNav";
import { getPostData, getSortedPostsData } from "@/lib/blog";

export const dynamicParams = false;

export function generateStaticParams() {
  return getSortedPostsData().map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  try {
    const post = await getPostData(slug);
    return {
      title: `${post.title} — Gagan Deep`,
      description: post.excerpt,
      alternates: { canonical: `/blog/${slug}` },
      openGraph: { title: post.title, description: post.excerpt, type: "article" },
    };
  } catch {
    return { title: "Field note not found" };
  }
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  let post;
  try {
    post = await getPostData(slug);
  } catch {
    notFound();
  }

  return (
    <div className="site-page editorial-page" id="top">
      <a className="skip-link" href="#article-content">Skip to article</a>
      <HomeNav />
      <main id="article-content" className="editorial-main site-container">
        <article className="editorial-article">
          <Link className="case-back-link" href="/blog"><span aria-hidden="true">←</span> All field notes</Link>
          <header className="editorial-article-heading">
            <div className="editorial-meta">{post.tag}{post.date && <><span aria-hidden="true">·</span><time>{post.date}</time></>}</div>
            <h1>{post.title}</h1>
            <p>{post.excerpt}</p>
          </header>
          <div className="prose editorial-prose" dangerouslySetInnerHTML={{ __html: post.contentHtml || "" }} />
          <footer className="editorial-article-end">
            <span className="eyebrow">Keep exploring</span>
            <Link className="text-link" href="/#work">Selected work <span aria-hidden="true">↗</span></Link>
          </footer>
        </article>
      </main>
      <footer className="site-container site-footer"><span>© {new Date().getFullYear()} Gagan Deep</span><span>Built from real work, with care.</span><Link href="/#top">Back to top ↑</Link></footer>
    </div>
  );
}
