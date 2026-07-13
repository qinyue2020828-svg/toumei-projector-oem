import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap { return [{ url: "https://www.toumeipro.com", lastModified: new Date(), changeFrequency: "monthly", priority: 1 }]; }
