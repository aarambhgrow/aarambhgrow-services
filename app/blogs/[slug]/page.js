import { notFound } from "next/navigation";

import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import JsonLd from "../../components/seo/JsonLd";
import ArticleLayout from "../../components/blog/ArticleLayout";
import { getPost, posts } from "../../../content/blog";
import { DEFAULT_OG_IMAGE, FULL_ROBOTS, ORGANIZATION_ID, SITE_URL, breadcrumbList, pageMetadata } from "../../lib/seo";

export const dynamicParams = false;

/* The post cover doubles as its share image; fall back to the site default. */
const shareImage = (post) => (post.cover ? `${SITE_URL}${post.cover}` : DEFAULT_OG_IMAGE);

export function generateStaticParams() {
  return posts.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) return {};

  const metadata = pageMetadata({
    title: post.seo?.title || post.title,
    description: post.seo?.description || post.excerpt,
    path: `/blogs/${post.slug}`,
    image: shareImage(post),
    robots: FULL_ROBOTS,
  });

  // pageMetadata declares 1200x630; covers are 16:9, so let crawlers read the real size.
  const images = post.cover ? [{ url: shareImage(post), alt: post.title }] : metadata.openGraph.images;

  return {
    ...metadata,
    openGraph: { ...metadata.openGraph, type: "article", publishedTime: post.date, images },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    notFound();
  }

  const url = `${SITE_URL}/blogs/${post.slug}`;
  const { Content } = post;

  const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${url}#article`,
        headline: post.title,
        description: post.seo?.description || post.excerpt,
        datePublished: post.date,
        dateModified: post.updated || post.date,
        image: shareImage(post),
        url,
        mainEntityOfPage: url,
        author: { "@id": ORGANIZATION_ID },
        publisher: { "@id": ORGANIZATION_ID },
      },
      breadcrumbList(
        [
          ["Home", `${SITE_URL}/`],
          ["Blog", `${SITE_URL}/blogs`],
          [post.title, url],
        ],
        `${url}#breadcrumb`,
      ),
    ],
  };

  const faqSchema = post.faqs?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: post.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      }
    : null;

  return (
    <>
      <JsonLd data={articleSchema} />
      {faqSchema && <JsonLd data={faqSchema} />}
      <Navbar />

      <main className="min-h-screen bg-white">
        <ArticleLayout post={post}>
          <Content />
        </ArticleLayout>
      </main>

      <Footer />
    </>
  );
}
