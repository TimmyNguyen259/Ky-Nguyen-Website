// /core-elements — Brandbook FINAL · Core Elements (pp. 11, 12, 13).
// Book lines are verbatim; the book's spaced hyphen " - " is set as an em
// dash. Hex values mirror the locked tokens in src/styles/global.css — change
// them together or not at all.

// Book p. 11 — chapter opener.
export const opening = {
  label: 'Brand',
  title: 'Core Elements',
  body:
    'My identity assets and visual specifications, held inside a flexible editorial system that allows freedom without losing the thread.',
} as const;

export type Swatch = {
  name: string;
  descriptor: string;
  /** CSS custom property that fills the card — the exact brand token. */
  token: `--color-${string}`;
  hex: string;
  /** Text colour on the card, chosen for WCAG contrast on that fill. */
  on: 'ink' | 'white';
};

// Book p. 12 — card order follows the book's 2-column grid, row by row.
export const colours = {
  label: 'Colors',
  title: 'Colors',
  description:
    'A pastel mesh gradient — cream, peach, lilac and soft blue flowing as one continuous surface — warmed by an amber accent, resting on a quiet base of grey and white.',
  locked: [
    'The palette is locked.',
    'It feels the way the work should feel:',
    'calm enough to think, warm enough to stay human,',
    'precise enough to trust.',
  ],
  swatches: [
    { name: 'Cream', descriptor: 'Calm', token: '--color-cream', hex: '#FAF6F0', on: 'ink' },
    { name: 'Peach', descriptor: 'Warm', token: '--color-peach', hex: '#F4C7A4', on: 'ink' },
    { name: 'Lilac', descriptor: 'Considered', token: '--color-lilac', hex: '#DACDEB', on: 'ink' },
    { name: 'Soft Blue', descriptor: 'Clear', token: '--color-soft-blue', hex: '#C9DCED', on: 'ink' },
    { name: 'Amber', descriptor: 'Energy', token: '--color-amber', hex: '#DE7C4B', on: 'ink' },
    // Ink on grey is 3.3:1 — white carries the label at 5.1:1.
    { name: 'Grey', descriptor: 'Quiet', token: '--color-grey', hex: '#6E6E73', on: 'white' },
    { name: 'White', descriptor: 'Space', token: '--color-white', hex: '#FFFFFF', on: 'ink' },
  ] satisfies readonly Swatch[],
} as const;

// Book p. 13 — one line per sentence, as the book sets them.
export const elements = [
  {
    title: 'Typography',
    body: [
      'One clear sans voice, set with restraint.',
      'Large headlines with room to breathe.',
      'Small, quiet grey labels.',
      'A balanced scale — composed like a magazine, never like a slide deck.',
    ],
  },
  {
    title: 'The Mark',
    body: [
      'The KN mark carries the name.',
      'Give it breathing space.',
      'It should never compete with the thought on the page.',
    ],
  },
  {
    title: 'The Portrait',
    body: [
      'An illustrated character, built from my real face, keeps a person inside the system.',
      'He sits inside the scene, sharing one continuous background with the page.',
    ],
  },
] as const;

// Specimen captions — factual specs of what the site ships (functional copy):
// a quiet label, then the detail on its own line. The portrait has no
// specimen: it lives in scene on the home cover (see core/Specimens.astro).
export const specimens = {
  type: { label: 'Noto Sans', detail: 'Bold 700 · Regular 400' },
  mark: { label: 'The KN mark', detail: 'Noto Sans Bold 700' },
} as const;
