import CgtmseLoanScheme, { metadata as cgtmseLoanScheme } from "./cgtmse-loan-scheme-2026.mdx";
import CgtmseVsMudra, { metadata as cgtmseVsMudra } from "./cgtmse-vs-mudra-loan.mdx";

/*
  Blog registry. To publish a post: add an .mdx file in this folder with an
  `export const metadata` block, then register it here with its slug.
*/
const entries = [
  { slug: "cgtmse-loan-scheme-2026", metadata: cgtmseLoanScheme, Content: CgtmseLoanScheme },
  { slug: "cgtmse-vs-mudra-loan", metadata: cgtmseVsMudra, Content: CgtmseVsMudra },
];

/* Newest first. */
export const posts = entries
  .map(({ slug, metadata }) => ({ slug, ...metadata }))
  .sort((a, b) => new Date(b.date) - new Date(a.date));

export const getPost = (slug) => {
  const entry = entries.find((e) => e.slug === slug);
  return entry ? { slug, ...entry.metadata, Content: entry.Content } : null;
};

export const formatDate = (date) =>
  new Date(date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });
