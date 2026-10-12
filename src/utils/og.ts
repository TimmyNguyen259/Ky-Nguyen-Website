// Per-article share images (LinkedIn, X, Slack previews), drawn at build
// time in the cover's own composition — see public/og-default.jpg: the mesh
// surface, "KN" top right, "KY NGUYEN" bottom left. In place of the cover
// line sits the article: its pillar or category as a quiet label, the title
// large and bold, and the book's short amber rule beneath it.
// satori lays the text out as vector paths (the real Noto Sans), and sharp
// lays that over the mesh and writes a 1200×630 JPEG.
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import satori from 'satori';
import sharp from 'sharp';

const WIDTH = 1200;
const HEIGHT = 630;

// Brand tokens (src/styles/global.css).
const INK = '#1D1D1F';
const GREY_TEXT = '#5E5E62';
const AMBER = '#DE7C4B';

const root = process.cwd();
const font = (weight: 400 | 700) =>
  readFileSync(join(root, `node_modules/@fontsource/noto-sans/files/noto-sans-latin-${weight}-normal.woff`));
const fonts = [
  { name: 'Noto Sans', data: font(400), weight: 400 as const, style: 'normal' as const },
  { name: 'Noto Sans', data: font(700), weight: 700 as const, style: 'normal' as const },
];

// The site's mesh, cropped like the page background (centered vertically).
let meshCache: Buffer | undefined;
const mesh = async () => {
  meshCache ??= await sharp(join(root, 'src/assets/brand/mesh.avif'))
    .resize(WIDTH, HEIGHT, { fit: 'cover', position: 'centre' })
    .toBuffer();
  return meshCache;
};

// Longer titles step down so every title fits in three lines or fewer.
const titleSize = (title: string) => (title.length <= 50 ? 72 : title.length <= 72 ? 64 : 56);

type Node = { type: string; props: Record<string, unknown> };
const el = (type: string, style: Record<string, unknown>, children?: unknown): Node => ({
  type,
  props: { style, children },
});

const label = (text: string, style: Record<string, unknown> = {}) =>
  el('div', { fontSize: 22, fontWeight: 700, letterSpacing: 2.2, color: INK, textTransform: 'uppercase', ...style }, text);

export async function renderShareImage({ label: kicker, title }: { label: string; title: string }) {
  const tree = el(
    'div',
    {
      width: WIDTH,
      height: HEIGHT,
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: '56px 66px 50px',
      fontFamily: 'Noto Sans',
    },
    [
      el('div', { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }, [
        label(kicker, { fontSize: 20, letterSpacing: 2, color: GREY_TEXT }),
        el('div', { fontSize: 24, fontWeight: 700, color: INK, letterSpacing: 0.5 }, 'KN'),
      ]),
      el('div', { display: 'flex', flexDirection: 'column', gap: 34 }, [
        el(
          'div',
          {
            maxWidth: 1000,
            fontSize: titleSize(title),
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: -0.5,
            color: INK,
          },
          title,
        ),
        el('div', { width: 240, height: 2, backgroundColor: AMBER }),
      ]),
      label('Ky Nguyen'),
    ],
  );

  const svg = await satori(tree as Parameters<typeof satori>[0], { width: WIDTH, height: HEIGHT, fonts });
  return sharp(await mesh())
    .composite([{ input: Buffer.from(svg) }])
    .jpeg({ quality: 86, mozjpeg: true })
    .toBuffer();
}
