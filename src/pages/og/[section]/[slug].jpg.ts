import type { APIRoute } from 'astro';
import { caseStories, getCase } from '../../../content/cases';
import { getPosts } from '../../../content/thinking';
import { renderShareImage } from '../../../utils/og';

// One share image per post (/og/thinking/<slug>.jpg) and per case
// (/og/cases/<slug>.jpg) — the same set of pages that is built, so drafts
// only get one in dev.
export async function getStaticPaths() {
  const live = (status: string) => !import.meta.env.PROD || status === 'published';

  const posts = (await getPosts())
    .filter((post) => live(post.status))
    .map((post) => ({
      params: { section: 'thinking', slug: post.slug },
      props: { label: post.pillar, title: post.title },
    }));

  const cases = caseStories
    .map((story) => ({ story, entry: getCase(story.slug) }))
    .filter(({ entry }) => entry && live(entry.status))
    .map(({ story, entry }) => ({
      params: { section: 'cases', slug: story.slug },
      props: { label: entry!.category, title: story.title },
    }));

  return [...posts, ...cases];
}

type Props = { label: string; title: string };

export const GET: APIRoute<Props> = async ({ props }) =>
  new Response(new Uint8Array(await renderShareImage(props)), {
    headers: { 'Content-Type': 'image/jpeg' },
  });
