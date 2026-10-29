import { posts } from "../content/blog";
import { FUNDING_SERVICES, SITE_URL } from "./lib/seo";

// Bump these by hand when a page's content actually changes
const SEO_UPDATE = new Date("2026-09-29");
const CONTACT_UPDATED = new Date("2026-09-12");
const BLOG_UPDATED = new Date(posts[0]?.updated || posts[0]?.date || "2026-10-29");

export default function sitemap() {
  return [
    { url: `${SITE_URL}/`, lastModified: SEO_UPDATE },
    { url: `${SITE_URL}/about`, lastModified: SEO_UPDATE },
    { url: `${SITE_URL}/services`, lastModified: SEO_UPDATE },
    ...FUNDING_SERVICES.map((service) => ({
      url: `${SITE_URL}/services/${service.slug}`,
      lastModified: SEO_UPDATE,
    })),
    { url: `${SITE_URL}/blogs`, lastModified: BLOG_UPDATED },
    ...posts.map((post) => ({
      url: `${SITE_URL}/blogs/${post.slug}`,
      lastModified: new Date(post.updated || post.date),
    })),
    { url: `${SITE_URL}/contact`, lastModified: CONTACT_UPDATED },
  ];
}
