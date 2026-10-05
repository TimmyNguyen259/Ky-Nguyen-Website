// Brandbook FINAL — Ky Nguyen. Bring out the best in people.
// The book spells the name without diacritics ("Ky Nguyen", "KY NGUYEN");
// the Vietnamese spelling is kept for structured data only.

// Brandbook §Statement — verbatim. Defined once; also the default meta description.
const statement =
  'Ky Nguyen works with one dedication: bringing out the best in people. In the game industry, he leads the transformation of people systems — connecting sharper judgment to business results, with AI tools he builds himself.';

export const site = {
  name: 'Ky Nguyen',
  nameVi: 'Kỳ Nguyễn',
  mark: 'KN',
  // Brandbook cover line.
  tagline: 'Bring out the best in people.',
  // Brandbook §Ethos.
  ethos: 'Honest about what I see. Dedicated to what I build.',
  statement,
  description: statement,
  title: 'Ky Nguyen — Bring out the best in people.',
  // Set once, in astro.config.mjs (`site`).
  url: import.meta.env.SITE as string,
  locale: 'en',
  linkedin: 'https://www.linkedin.com/in/kynt259/',
  email: '',
  cvPath: '',
  github: '',
  solaceUrl: '',
  voiceLabUrl: '',
  ogImage: '/og-default.jpg',
  // Mesh cream — matches the surface under the header.
  themeColor: '#FAF6F0',
} as const;

export const primaryNav = [
  { label: 'Thinking', href: '/thinking' },
  { label: 'Cases', href: '/cases' },
  { label: 'Builds', href: '/builds' },
  { label: 'About', href: '/about' },
] as const;

export const primaryCta = { label: 'Let’s talk', href: '/contact' } as const;

// Quiet secondary links — footer only.
export const secondaryNav = [
  { label: 'Core elements', href: '/core-elements' },
] as const;
