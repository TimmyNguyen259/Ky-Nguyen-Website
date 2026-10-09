// The three Thinking pillars, in the order /thinking shows them. Every post's
// `pillar` (src/posts/*.md) must be one of these keys — the content schema
// rejects anything else at build time.
// Voice: brandbook FINAL · Tone of Voice — direct, grounded, precise, at times blunt.

export const pillarKeys = ['People systems', 'Judgment calls', 'Building with AI'] as const;

export type Pillar = (typeof pillarKeys)[number];

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
