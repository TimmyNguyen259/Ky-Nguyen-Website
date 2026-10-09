// Content collections. Thinking posts are plain Markdown files in src/posts/
// (one file per post; the file name becomes the URL). Files starting with
// "_" or "." are ignored — src/posts/_TEMPLATE.md is the starting point for a
// new post. The rules below fail the build with a plain-language message, so a
// mistake stops the deploy (the live site stays as it was) instead of shipping.
import { readdirSync } from 'node:fs';
import { join } from 'node:path';
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { pillarKeys } from './content/pillars';

// File names: lowercase a–z, digits and dashes, ending in .md. Anything else
// (accents, spaces, a missing ".md") would give an odd URL or be skipped
// silently, so it stops the build instead.
const misnamed = readdirSync(join(process.cwd(), 'src/posts')).filter(
  (name) => !/^[._]/.test(name) && !/^[a-z0-9]+(?:-[a-z0-9]+)*\.md$/.test(name),
);
if (misnamed.length > 0) {
  throw new Error(
    `Rename in src/posts/ — lowercase a-z, 0-9 and dashes, ending in .md (e.g. tu-duy-he-thong.md): ${misnamed.join(', ')}`,
  );
}

// Curly quotes typed (or auto-corrected) around a whole value end up inside it.
const wrappedInCurlyQuotes = /^[“‘].*[”’"]$/s;
const straightQuotes = 'Use straight quotes "…" around the text, not curly “…”';

const text = z
  .string()
  .trim()
  .min(1, 'This line is empty')
  .refine((value) => !wrappedInCurlyQuotes.test(value), straightQuotes);

// Optional lines: missing, empty ("") or blank all mean "use the default".
const optionalText = z
  .string()
  .trim()
  .nullish()
  .transform((value) => value || undefined)
  .refine((value) => !value || !wrappedInCurlyQuotes.test(value), straightQuotes);

const posts = defineCollection({
  loader: glob({ pattern: ['*.md', '!_*.md'], base: './src/posts' }),
  // Strict: a misspelled line name (Status, descripton…) fails instead of
  // being dropped — a dropped "status: draft" would publish a draft.
  schema: z.strictObject({
    // A full sentence; also catches a title cut short by an unquoted "#".
    title: text.refine(
      (value) => /[.?!][”’"]?$/.test(value),
      'The headline must be a full sentence ending in . ? or !',
    ),
    pillar: z.enum(pillarKeys, {
      error: `pillar must be exactly one of: ${pillarKeys.join(' · ')}`,
    }),
    tension: text,
    // year-month-day only: 9/10/2026 would be read as 10 September.
    date: z
      .union([
        z.date(),
        z.iso.date({ error: 'Write the date as year-month-day, e.g. 2026-10-09 (not 9/10/2026)' }),
      ])
      .pipe(z.coerce.date()),
    // Required on purpose: a post goes live only when it says so.
    status: z.enum(['published', 'draft'], {
      error: 'Add the line  status: draft  (hidden) or  status: published  (live)',
    }),
    // Shorter browser-tab title (default: the title without its final
    // period) and meta description (default: the tension line).
    pageTitle: optionalText,
    description: optionalText,
    // Writing-pattern note shown beside the post.
    pattern: optionalText,
  }),
});

export const collections = { posts };
