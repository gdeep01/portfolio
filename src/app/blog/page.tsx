import type { Metadata } from "next";
import Link from "next/link";
import { HomeNav } from "@/components/home/HomeNav";
import { getSortedPostsData } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Field Notes — Gagan Deep",
  description: "Notes on product decisions, field learning, and building from real-world problems.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  const posts = getSortedPostsData();

  return (
    <div className="site-page editorial-page" id="top">
      <a className="skip-link" href="#main-content">Skip to field notes</a>
      <HomeNav />
      <main id="main-content" className="editorial-main site-container">
        <header className="editorial-heading">
          <Link className="case-back-link" href="/#notes"><span aria-hidden="true">←</span> Home</Link>
          <span className="eyebrow">Writing · Field notes</span>
          <h1 className="section-title">Thoughts from close to the work.</h1>
          <p className="section-intro">Product decisions, field learning, and the questions that stay open after a prototype.</p>
        </header>
        <div className="editorial-list">
          {posts.map((post, index) => (
            <article className="editorial-card" key={post.slug}>
              <span className="editorial-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
              <div className="editorial-card-copy">
                <div className="editorial-meta">{post.tag}{post.date && <><span aria-hidden="true">·</span><time>{post.date}</time></>}</div>
                <h2><Link href={`/blog/${post.slug}`}>{post.title}</Link></h2>
                <p>{post.excerpt}</p>
                <Link className="text-link" href={`/blog/${post.slug}`}>Read the note <span aria-hidden="true">↗</span></Link>
              </div>
            </article>
          ))}
        </div>
      </main>
      <footer className="site-container site-footer"><span>© {new Date().getFullYear()} Gagan Deep</span><span>Built from real work, with care.</span><Link href="/#top">Back to top ↑</Link></footer>
    </div>
  );
}
