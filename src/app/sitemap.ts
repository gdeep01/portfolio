import type { MetadataRoute } from "next";
import { caseStudies } from "@/data/case-studies";
import { getSortedPostsData } from "@/lib/blog";

const baseUrl = "https://portfolio-gdeeps-projects.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const workPages = caseStudies.map(({ slug }) => ({
    url: `${baseUrl}/work/${slug}`,
    changeFrequency: "monthly" as const,
    priority: slug === "instrument-service-console" ? 0.8 : 0.7,
  }));
  const blogPages = getSortedPostsData().map(({ slug }) => ({
    url: `${baseUrl}/blog/${slug}`,
    changeFrequency: "yearly" as const,
    priority: 0.5,
  }));

  return [
    { url: baseUrl, changeFrequency: "monthly", priority: 1 },
    { url: `${baseUrl}/blog`, changeFrequency: "monthly", priority: 0.6 },
    ...workPages,
    ...blogPages,
  ];
}
