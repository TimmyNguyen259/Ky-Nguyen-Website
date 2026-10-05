// Case content. Brandbook FINAL voice; only Nextgen has approved narrative.
// Every case follows the same structure: Context / Belief / Decision / Outcome / Close.

export const caseIndex = [
  {
    slug: 'vnggames-nextgen',
    category: 'VNGGames · Judgment call',
    title: 'A separate name was not a branding preference.',
    tension:
      'The safer name — “VNG Fresher” — would have made recruitment easier, and kept a game-native program anchored to the parent-company category.',
    readingTime: '1 min',
    status: 'published' as const,
  },
  {
    slug: 'sea-markets-first-talents',
    category: 'Regional talent · SEA',
    title: 'First VNGGames talents in four SEA markets.',
    tension:
      'Hiring the first talents on the ground in Thailand, Indonesia, Malaysia and the Philippines before a local playbook existed.',
    readingTime: '—',
    status: 'draft' as const,
  },
  {
    slug: 'overseas-pipeline',
    category: 'Pipeline design',
    title: 'A one-year consistent overseas pipeline.',
    tension:
      'Turning ad-hoc regional hiring into a repeatable, year-long pipeline that senior roles could rely on.',
    readingTime: '—',
    status: 'draft' as const,
  },
] as const;

// Nextgen full case content — Context / Belief / Decision / Outcome / Close.
// Category and reading time live on the caseIndex entry above.
export const nextgen = {
  slug: 'vnggames-nextgen',
  title: 'A separate name was not a branding preference.',
  subtitle:
    'How VNGGames Nextgen chose a game-native identity over the safer parent-company brand — and why the decision changed who saw themselves in the opportunity.',
  sections: [
    {
      label: 'CONTEXT',
      body: 'VNGGames is the game business within VNG, a Vietnamese technology company. The team needed an early-career program that could compete for young talent going into games. The room defaulted to reusing “VNG Fresher” — a recognized graduate brand already run at parent-company scale.',
    },
    {
      label: 'BELIEF',
      body: 'A game business competing for young talent needed a proposition specific to games. Reusing the parent-company name would have made recruitment easier and shortened the funnel — and kept pulling the applicant profile back toward the corporate category the program was trying to move away from.',
    },
    {
      label: 'DECISION',
      body: 'I argued for a VNGGames-specific program with its own identity — “VNGGames Nextgen” — and accepted the burden of building awareness from zero. The trade-off was named up front: harder launch, sharper positioning.',
    },
    {
      label: 'OUTCOME',
      body: 'The program attracted the right young talent and met its hiring target without relying on the legacy name. More importantly, the decision proved that sharper positioning can change who sees themselves in the opportunity.',
    },
  ],
  close: 'Build the brand for the talent you need, not the brand you already have.',
} as const;

export type CaseEntry = (typeof caseIndex)[number];

/** Look up one case's index entry (category, reading time, status) by slug. */
export const getCase = (slug: string): CaseEntry | undefined =>
  caseIndex.find((entry) => entry.slug === slug);
