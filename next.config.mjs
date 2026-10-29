import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ["192.168.1.92"],
  poweredByHeader: false,
  // Blog posts live as .mdx files in content/blog and are imported by app/blogs.
  pageExtensions: ["js", "jsx", "md", "mdx"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },

  async redirects() {
    return [
      // www -> non-www
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.aarambhgrow.co.in" }],
        destination: "https://aarambhgrow.co.in/:path*",
        statusCode: 301,
      },
      // Legacy PHP hub -> clean services hub
      {
        source: "/services.php",
        destination: "/services",
        statusCode: 301,
      },
    ];
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
      {
        source: "/images/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000" }],
      },
    ];
  },
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
