export default function robots() {
  const baseUrl = "https://aarambhgrow.co.in";

  return {
    rules: {
      userAgent: "*",

      allow: "/",

      disallow: ["/api/", "/admin/"],
    },

    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
