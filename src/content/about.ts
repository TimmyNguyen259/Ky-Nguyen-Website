// /about — Brandbook FINAL · Brand Platform (pp. 2, 5, 6, 8, 9, 10) plus the
// approved Experience copy. Book lines are verbatim; the book's spaced hyphen
// " - " is set as an em dash. Nothing here may be paraphrased or extended.
import { site } from '../config/site';

// Book p. 2 — chapter opener.
export const opening = {
  label: 'About',
  title: 'Brand Platform',
  lines: [
    'This brand platform defines who I am in words.',
    'It gives clarity to the people I work with, and a standard to the work itself.',
  ],
} as const;

// Book p. 5 — the first statement continues the title ("I Believe / that…"),
// so it starts lowercase exactly as printed.
export const philosophy = {
  label: 'Philosophy',
  title: 'I Believe',
  statements: [
    'that people grow when someone sees them clearly and expects more of them.',
    'That honesty is the highest form of respect.',
    'That potential is everywhere — conditions are not.',
  ],
} as const;

// Book p. 6.
export const ethos = {
  label: 'Ethos',
  title: 'Working with Honesty and Dedication',
  line: site.ethos, // "Honest about what I see. Dedicated to what I build."
} as const;

// Book p. 8 — three columns, top to bottom, exactly as printed.
// Column tones run amber · ink · blue; anchor words are set bold.
export const traits = {
  label: 'Traits',
  title: 'Traits',
  columns: [
    [
      { word: 'Direct', anchor: true },
      { word: 'Honest' },
      { word: 'Deliberate' },
      { word: 'Disciplined', anchor: true },
      { word: 'Precise' },
      { word: 'Open' },
      { word: 'Accountable', anchor: true },
    ],
    [
      { word: 'Observant', anchor: true },
      { word: 'Curious' },
      { word: 'Fair' },
      { word: 'Calm', anchor: true },
      { word: 'Warm' },
      { word: 'Restrained' },
    ],
    [
      { word: 'Systematic', anchor: true },
      { word: 'Grounded' },
      { word: 'Hands-on' },
      { word: 'Sharp', anchor: true },
      { word: 'Studious' },
      { word: 'Business-minded' },
    ],
  ],
} as const;

// Book p. 9.
export const values = {
  label: 'Values',
  title: 'Values',
  items: [
    { label: 'Judgment', body: 'Judgment before confidence.' },
    { label: 'Honesty', body: 'Honesty before presentation.' },
    { label: 'Fairness', body: 'Fairness before blame.' },
  ],
} as const;

// Book p. 10 — the key line keeps the book's three-line break.
export const tone = {
  label: 'Tone of voice',
  title: 'Tone of Voice',
  keyLines: ['Direct, grounded,', 'precise,', 'at times blunt.'],
  body:
    'Because I work from evidence rather than presentation, I say the point first and let the work carry the claim. This makes my writing plain, compact, and honest about what is still unresolved.',
} as const;

// Experience — approved copy, kept exactly as written.
export const experience = {
  label: 'Experience',
  heading: 'Experience, briefly told.',
  paragraphs: [
    'Thirteen-plus years in talent acquisition and HR. Most of the last stretch has been at VNGGames — supporting the first talent hires as teams established across Thailand, Indonesia, Malaysia and the Philippines. Rare and difficult roles, and an overseas talent pipeline built over the course of a year.',
    'In practice: 300–400 hires per year at steady pace, 30–45-day time to fill for senior roles, offer acceptance above 95%, and a team of 6–8 doing the work with me.',
    'Today most of my energy sits inside an SSC · HRBP · COE operating model — the quieter design work of deciding where a decision belongs, what a handoff looks like, and which system a repeat problem should live in.',
  ],
  facts: [
    { label: '13+ years', context: 'Talent acquisition and HR.' },
    {
      label: '4 SEA markets',
      context:
        'First VNGGames talents in Thailand, Indonesia, Malaysia, Philippines.',
    },
    { label: '300–400 hires/year', context: 'Sustained annual hiring volume.' },
    { label: '30–45 days', context: 'Time to fill senior roles.' },
    { label: '>95%', context: 'Offer acceptance.' },
    { label: 'Team of 6–8', context: 'People I led through this work.' },
    { label: 'SSC · HRBP · COE', context: 'Current operating-model work.' },
  ],
} as const;
