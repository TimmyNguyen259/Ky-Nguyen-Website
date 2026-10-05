// Home page copy — brandbook FINAL, verbatim.
// Only lines that are not already in src/config/site.ts live here:
// the cover line (site.tagline) and the Statement (site.statement) are
// read from site.ts directly.

// Cover — the book's portrait: "An illustrated character, built from my
// real face, keeps a person inside the system."
export const cover = {
  alt: 'Illustrated portrait of Ky Nguyen standing with an open laptop',
} as const;

export const statement = {
  label: 'Statement',
  title: 'Statement',
} as const;

// Brandbook §Vision.
export const vision = {
  label: 'Vision',
  title: 'Vision',
  body: 'A business only grows as fast as its people do. When people contribute at their best against a real objective, the business earns the right to take on harder challenges.',
  keyThought: 'People growth and business growth should move together.',
} as const;

// Brandbook §Mission — three titles, amber · ink · blue. The book sets no
// body copy under them.
export const mission = {
  label: 'Mission',
  title: 'Mission',
  items: [
    { title: 'Seeing People Clearly' },
    { title: 'Moving the Business Forward' },
    { title: 'Choosing What Matters' },
  ],
} as const;

// Web-only bridge into the work, voiced with the book's closing lines.
// Row content (titles, tensions, the builds title and names) is read from
// the cases, thinking and builds modules — never copied here.
export const work = {
  label: 'Work',
  title: 'The work itself is still in progress.',
  lead: 'I would rather show it honestly than claim it early.',
  rows: {
    cases: { label: 'Cases', link: 'Read the case' },
    thinking: { label: 'Thinking', link: 'Read the post' },
    builds: { label: 'Builds', link: 'See the builds' },
  },
} as const;
