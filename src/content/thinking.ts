// Thinking catalogue — the single source of truth for every post's pillar,
// title, tension and reading time (the /thinking index, each post header and
// the home Work index all read from here).
// Voice: brandbook FINAL · Tone of Voice — direct, grounded, precise, at times blunt.

export type Pillar =
  | 'People systems'
  | 'Judgment calls'
  | 'Building with AI';

export const pillars: readonly {
  key: Pillar;
  blurb: string;
}[] = [
  {
    key: 'People systems',
    blurb:
      'Decision rights, handoffs, operating models — and why a clean process can still be a bad system.',
  },
  {
    key: 'Judgment calls',
    blurb:
      'What the room saw, what I saw, the decision and what the outcome changed.',
  },
  {
    key: 'Building with AI',
    blurb:
      'Tools I build to make people work easier. Pain, hypothesis, artifact and what changed.',
  },
];

export const posts = [
  {
    slug: 'ai-is-a-decision-design-problem',
    pillar: 'People systems' as Pillar,
    title:
      'Most teams do not have an AI adoption problem. They have a decision-design problem.',
    tension:
      'If no one can say which judgment should improve, another tool will only make the old process move faster.',
    readingTime: '1 min',
    date: '2026-09-21',
    status: 'published' as const,
  },
  {
    slug: 'a-separate-name',
    pillar: 'Judgment calls' as Pillar,
    title: 'A separate name was not a branding preference.',
    tension:
      'The safer name would have made recruitment easier, and kept a game-native program anchored to the wrong category.',
    readingTime: '1 min',
    date: '2026-09-21',
    status: 'published' as const,
  },
  {
    slug: 'process-is-not-a-system',
    pillar: 'People systems' as Pillar,
    title:
      'A process is not a system until people know where a decision belongs.',
    tension:
      'A flowchart tells you what happens. It rarely tells you who owns the call when the flowchart is wrong.',
    readingTime: '4 min',
    date: '2026-09-14',
    status: 'draft' as const,
  },
] as const;

export type Post = (typeof posts)[number];

/** Look up one post by slug (post pages derive their header from this). */
export const getPost = (slug: string): Post | undefined =>
  posts.find((post) => post.slug === slug);

/** Posts that have a live page. Drafts never get a route. */
export const publishedPosts = posts.filter((post) => post.status === 'published');
