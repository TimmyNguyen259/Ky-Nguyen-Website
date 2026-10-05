// Case content. Brandbook FINAL voice; only Nextgen has approved narrative —
// the other two are drafts waiting on Ky's answers to their TODO_CONTENT markers.
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
    slug: 'first-talents-five-markets',
    category: 'Regional talent · Asia',
    title: 'In a new market, the first hire is the playbook.',
    tension:
      'Hiring the first talents on the ground in Thailand, Indonesia, China, Taiwan and Malaysia before a local playbook existed.',
    readingTime: '—',
    status: 'draft' as const,
  },
  {
    slug: 'overseas-pipeline',
    category: 'Pipeline design',
    title: 'The pipeline has to exist before the role does.',
    tension:
      'Turning ad-hoc regional hiring into a repeatable, year-long pipeline that senior roles could rely on.',
    readingTime: '—',
    status: 'draft' as const,
  },
] as const;

type CaseSection = {
  label: 'CONTEXT' | 'BELIEF' | 'DECISION' | 'OUTCOME';
  body: string;
};

export type CaseStory = {
  slug: string;
  /** <title> and meta description for the case page. */
  pageTitle: string;
  description: string;
  title: string;
  subtitle: string;
  sections: readonly CaseSection[];
  close: string;
};

// Full case narratives — Context / Belief / Decision / Outcome / Close.
// Category, reading time and status live on the caseIndex entry above;
// /cases/[slug] renders one page per story (drafts in dev only).
const nextgen: CaseStory = {
  slug: 'vnggames-nextgen',
  pageTitle: 'VNGGames Nextgen · A separate name was not a branding preference',
  description:
    'How VNGGames Nextgen chose a game-native identity over the safer parent-company brand.',
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
};

// DRAFT — every [TODO_CONTENT: …] is a question for Ky; the page renders in dev only.
const firstTalents: CaseStory = {
  slug: 'first-talents-five-markets',
  pageTitle: 'First talents in five markets · In a new market, the first hire is the playbook',
  description:
    'Hiring the first VNGGames talents in five markets before a local playbook existed — and why each first hire had to set the standard.',
  title: 'In a new market, the first hire is the playbook.',
  subtitle:
    'How VNGGames hired its first talents on the ground in five markets before a local playbook existed — and why each first hire was treated as the market’s standard, not a vacancy.',
  sections: [
    {
      label: 'CONTEXT',
      body: 'VNGGames is the game business within VNG, a Vietnamese technology company. As it established teams in Thailand, Indonesia, China, Taiwan and Malaysia, each market needed its first talents on the ground before a local playbook existed. The roles were rare and difficult. [TODO_CONTENT: Which role and period is this — Talent Manager at VNG (2019–2022), a VNGGames role since May 2023 (which one), or both — which roles opened first, and was there any earlier VNG hiring in these markets to draw on?]',
    },
    {
      label: 'BELIEF',
      body: 'In a market with no playbook, the first hire is not a seat filled. That person becomes the reference every later hire is measured against — what good looks like there, before anyone has written it down. Get the first one wrong and the mistake does not stay in one seat; the next hires inherit it as the standard. Filling first roles as ordinary vacancies is faster, and it lets that standard form by default. [TODO_CONTENT: Did you hold this view at the time, and was there pressure to fill these first roles faster than holding the bar allowed?]',
    },
    {
      label: 'DECISION',
      body: 'I treated each first hire as a decision about the market’s hiring system, not a single vacancy. In practice that meant advising leaders on market insight and hiring strategy, weighing internal mobility alongside external hiring, and building long-term pipelines instead of one-off searches. [TODO_CONTENT: What was the one specific call — a profile you held out for, an internal move instead of an external hire, a search you slowed down — and what trade-off did you name up front?]',
    },
    {
      label: 'OUTCOME',
      body: 'Each market had its first talents on the ground as its team was established. [TODO_CONTENT: What happened next that you can stand behind — did the first hires stay, grow or set the profile for later hires? Give one result per market (hires, retention after a year, time to fill), or say none exists.] [TODO_CONTENT: In one sentence, what did this prove — the equivalent of Nextgen’s “More importantly…” line?] [TODO_CONTENT: Did this work feed the overseas talent pipeline (the overseas-pipeline case), or are the two unrelated?]',
    },
  ],
  close: 'Hire the first person for the standard you need, not the seat you have open.',
};

// DRAFT — every [TODO_CONTENT: …] is a question for Ky; the page renders in dev only.
const overseasPipeline: CaseStory = {
  slug: 'overseas-pipeline',
  pageTitle: 'Overseas pipeline · The pipeline has to exist before the role does',
  description:
    'How ad-hoc regional hiring at VNGGames became an overseas talent pipeline, built over a year, so senior searches could begin before roles opened.',
  title: 'The pipeline has to exist before the role does.',
  subtitle:
    'How ad-hoc regional hiring at VNGGames became an overseas talent pipeline built over the course of a year — and why senior searches had to begin before roles opened.',
  sections: [
    {
      label: 'CONTEXT',
      body: 'VNGGames is the game business within VNG, a Vietnamese technology company. Its regional hiring across Thailand, Indonesia, China, Taiwan and Malaysia ran ad hoc — one opening, one search, started when the need appeared. [TODO_CONTENT: What was one concrete cost of the ad-hoc pattern — how long senior overseas roles typically stayed open, or how often a market search had to restart?]',
    },
    {
      label: 'BELIEF',
      body: 'Ad-hoc hiring does not fail on effort. It fails on timing: a search that opens with the role has to map the market, explain the employer and find the candidate all at once, and senior roles are where that costs most. It can fill one seat and leave nothing for the next one. A pipeline had to run before the role existed, so a senior search could begin warm instead of cold.',
    },
    {
      label: 'DECISION',
      body: 'I treated the pipeline as standing work, not a response to open roles, and built it over the course of a year. [TODO_CONTENT: What did the pipeline consist of in practice — talent maps per market, regular candidate touchpoints, employer branding? Was it planned against workforce needs agreed with Game Publishing leaders? If yes, add: “I partnered with Game Publishing leaders on workforce needs so it tracked the roles that were coming, not only the ones already open.”] The trade-off was plain: time spent on candidates before any role existed for them.',
    },
    {
      label: 'OUTCOME',
      body: 'While I led Global Talent Acquisition, hiring across VNGGames ran at 300–400 a year with a team of 6–8, time to fill for senior roles was 30–45 days, and offer acceptance was above 95%. Those are results of the whole function and the team, not a measure of the pipeline. [TODO_CONTENT: In which period did you build the pipeline — Jan 2025 – Aug 2026 (Head of Global Talent Acquisition), May 2023 – Jan 2025 (Global HR Manager), or 2019–2022 (Talent Manager, VNG Game Entertainment Business)? If it wasn’t the first, these numbers don’t belong here.] The narrower claim is the one I can stand behind: a senior search no longer had to start cold. [TODO_CONTENT: Confirm this with evidence: roughly how many senior overseas hires came from the pipeline rather than a fresh search? If there is no evidence, restate this sentence as the intent.]',
    },
  ],
  close: 'Build the pipeline for the roles that are coming, not the roles that are open.',
};

export const caseStories: readonly CaseStory[] = [nextgen, firstTalents, overseasPipeline];

export type CaseEntry = (typeof caseIndex)[number];

/** Look up one case's index entry (category, reading time, status) by slug. */
export const getCase = (slug: string): CaseEntry | undefined =>
  caseIndex.find((entry) => entry.slug === slug);
