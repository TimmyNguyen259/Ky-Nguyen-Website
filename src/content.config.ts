// Content collections. Thinking posts are plain Markdown files in src/posts/
// (one file per post; the file name becomes the URL). Files starting with
// "_" are ignored — src/posts/_TEMPLATE.md is the starting point for a new post.
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { pillarKeys } from './content/pillars';

const posts = defineCollection({
  loader: glob({ pattern: '[!_]*.md', base: './src/posts' }),
  schema: z.object({
    title: z.string(),
    pillar: z.enum(pillarKeys),
    tension: z.string(),
    date: z.coerce.date(),
    // A post is live unless it says `status: draft` (drafts show in dev only).
    status: z.enum(['published', 'draft']).default('published'),
    // Optional: shorter browser-tab title (default: the title without its
    // final period) and meta description (default: the tension line).
    pageTitle: z.string().optional(),
    description: z.string().optional(),
    // Optional writing-pattern note shown beside the post.
    pattern: z.string().optional(),
  }),
});

export const collections = { posts };
