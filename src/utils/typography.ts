// Render-time typesetting. The copy in src/content stays verbatim (meta tags,
// JSON-LD and verbatim checks read it); these only change how lines break.

const WJ = String.fromCharCode(0x2060); // word joiner
const NBSP = String.fromCharCode(0x00a0); // no-break space

/** Tie a spaced em dash to the word before it, so no line opens with "—". */
export const tieDashes = (text: string) => text.replace(/\s+—\s/g, `${NBSP}— `);

/**
 * Keep numeric ranges ("6–8", "30–45-day") and the "SSC · HRBP · COE" chain
 * on one line.
 */
export const keepRanges = (text: string) =>
  text
    .replace(/(\d)–(\d)/g, `$1${WJ}–${WJ}$2`)
    .replace(/(\d)-(?=\w)/g, `$1-${WJ}`)
    .replace(/ · /g, `${NBSP}·${NBSP}`);
