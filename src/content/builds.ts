// Builds catalogue. Spec §9 structure. External links resolved from site.ts.
// Do not invent GitHub / Render / demo URLs.

export type BuildStatus = 'shipped' | 'internal' | 'in-progress';

export type Build = {
  slug: string;
  name: string;
  tagline: string;
  status: BuildStatus;
  hrefKey: 'solaceUrl' | 'voiceLabUrl' | null;
  pain: string;
  hypothesis: string;
  stack: readonly string[];
};

// Page copy for /builds — existing approved lines, moved here unchanged.
export const buildsPage = {
  label: 'Builds',
  title: 'AI tools I build myself.',
  description:
    'Solace, Voice-Lab and the SSC · HRBP · COE operating model. AI tools built around real people-work pain.',
  intro:
    'The systems below exist because a repeat problem was cheaper to design around than to keep patching. Each one starts with the pain, names a hypothesis, and shows the working version.',
  rows: {
    pain: 'The pain',
    hypothesis: 'The system hypothesis',
    stack: 'Stack & evidence',
  },
  // One sentence per line, as the book sets its closing thoughts.
  framing: ['The tool is an expression.', 'The judgment behind it is the work.'],
} as const;

export const buildStatusLabel: Record<BuildStatus, string> = {
  shipped: 'Shipped',
  internal: 'Internal',
  'in-progress': 'In progress',
};

export const builds: readonly Build[] = [
  {
    slug: 'solace',
    name: 'Solace ATS',
    tagline: 'A recruiting system built around real sourcing and workflow pain.',
    status: 'in-progress',
    hrefKey: 'solaceUrl',
    pain: 'Recruiters spend most of their day inside sourcing tools and spreadsheets that never talk to each other. Every switch costs a callback, a note, a candidate.',
    hypothesis: 'A recruiter-first ATS that treats sourcing as a first-class surface — with LinkedIn and ITviec integration where the work actually happens — beats a general-purpose CRM retrofitted for hiring.',
    stack: ['Electron', 'Express', 'Prisma', 'React', 'LinkedIn sourcing', 'ITviec sourcing'],
  },
  {
    slug: 'voice-lab',
    name: 'Voice-Lab',
    tagline: 'A working application, published through Render and GitHub.',
    status: 'shipped',
    hrefKey: 'voiceLabUrl',
    pain: 'Reasoning improves faster when it is spoken and reviewed than when it is only written and filed. Most tools default to text-first.',
    hypothesis: 'A small, working web application beats a slide about one — the standard I hold myself to.',
    stack: ['Render', 'GitHub'],
  },
  {
    slug: 'ssc-hrbp-coe',
    name: 'SSC · HRBP · COE model',
    tagline: 'An operating-model design for clear scope, ownership and handoffs across the employee lifecycle.',
    status: 'internal',
    hrefKey: null,
    pain: 'When a repeat problem lives across three teams and no team owns it, every solution is temporary. Handoffs become the failure surface.',
    hypothesis: 'Decision rights, not org charts, are the artifact worth designing. When people know where a decision belongs, the process becomes a system.',
    stack: ['Operating-model design', 'RACI', 'Decision rights'],
  },
];
