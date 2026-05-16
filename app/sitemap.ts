import { MetadataRoute } from "next";
import { ARTICLES } from "@/lib/journal";

const BASE = "https://ostoia.co";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/work`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/work/routes-roads`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/work/localway-sicily`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/work/led-travel`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/invest`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/journal`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
  ];

  const articleRoutes: MetadataRoute.Sitemap = ARTICLES.map(a => ({
    url: `${BASE}/journal/${a.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...articleRoutes];
}
