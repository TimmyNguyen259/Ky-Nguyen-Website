// Thinking catalogue. Posts are Markdown files in src/posts/ (see
// src/content.config.ts); this module turns them into the list every page
// reads — the /thinking index, each post header and the home Work index.
// Order: newest first (ties by slug), so a new post leads its pillar and
// the home page.
import { getCollection, type CollectionEntry } from 'astro:content';
import { pillars, type Pillar } from './pillars';

export { pillars, type Pillar };

export type Post = {
  slug: string;
  title: string;
  /** <title> for the post page. */
  pageTitle: string;
  description: string;
  pillar: Pillar;
  tension: string;
  date: Date;
  status: 'published' | 'draft';
  pattern?: string;
  readingTime: string;
  entry: CollectionEntry<'posts'>;
};

const WORDS_PER_MINUTE = 250;

/** "1 min", "2 min" … from the Markdown body's word count. */
const readingTime = (body = ''): string => {
  const words = body.split(/\s+/).filter((token) => /[\p{L}\p{N}]/u.test(token)).length;
  return `${Math.max(1, Math.round(words / WORDS_PER_MINUTE))} min`;
};

// Sentences from _TEMPLATE.md's sample body — a published post still
// containing one was copied without replacing the sample.
const TEMPLATE_SAMPLE = [
  'Start with the point. One paragraph per idea',
  'Bold a short phrase',
  'End on one short line, starting with',
];

const toPost = (entry: CollectionEntry<'posts'>): Post => {
  const { title, pageTitle, description, tension } = entry.data;
  if (entry.data.status === 'published') {
    const body = entry.body ?? '';
    if (!body.trim() || TEMPLATE_SAMPLE.some((sample) => body.includes(sample))) {
      throw new Error(
        `${entry.filePath}: the text under the second "---" is empty or still the template's sample — write the post there, or set status: draft.`,
      );
    }
  }
  return {
    slug: entry.id,
    title,
    pageTitle: pageTitle ?? title.replace(/\.$/, ''),
    description: description ?? tension,
    pillar: entry.data.pillar,
    tension,
    date: entry.data.date,
    status: entry.data.status,
    pattern: entry.data.pattern,
    readingTime: readingTime(entry.body),
    entry,
  };
};

/** Every post, drafts included (pages filter drafts out of production). */
export async function getPosts(): Promise<Post[]> {
  const entries = await getCollection('posts');
  return entries
    .map(toPost)
    .sort((a, b) => b.date.getTime() - a.date.getTime() || a.slug.localeCompare(b.slug));
}

/** Posts that have a live page. Drafts never get a route in production. */
export async function getPublishedPosts(): Promise<Post[]> {
  return (await getPosts()).filter((post) => post.status === 'published');
}

/** Published posts in the order /thinking shows them: grouped by pillar. */
export async function getReadingOrder(): Promise<Post[]> {
  const published = await getPublishedPosts();
  return pillars.flatMap((pillar) => published.filter((post) => post.pillar === pillar.key));
}
