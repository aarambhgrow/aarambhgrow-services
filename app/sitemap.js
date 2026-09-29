import { FUNDING_SERVICES, SITE_URL } from "./lib/seo";

// Bump these by hand when a page's content actually changes
const SEO_UPDATE = new Date("2026-09-29");
const CONTACT_UPDATED = new Date("2026-09-12");

export default function sitemap() {
  return [
    { url: `${SITE_URL}/`, lastModified: SEO_UPDATE },
    { url: `${SITE_URL}/about`, lastModified: SEO_UPDATE },
    { url: `${SITE_URL}/services`, lastModified: SEO_UPDATE },
    ...FUNDING_SERVICES.map((service) => ({
      url: `${SITE_URL}/services/${service.slug}`,
      lastModified: SEO_UPDATE,
    })),
    { url: `${SITE_URL}/contact`, lastModified: CONTACT_UPDATED },
  ];
}
