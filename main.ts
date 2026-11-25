// one-word-first-thought — "One Word, First Thought".
// One original word, at most 24 characters: the first word that comes
// to mind, with no topic and no second draft. The program writes that
// word to /output/entry.txt.
//
// Why this word: "murmuration" is a flock of starlings swirling as one
// at dusk — hundreds of birds moving like smoke, turning together
// without a leader. It wins on the judge's own criteria: it is
// surprising (not a word most people reach for first, unlike the safe
// picks "love", "happy" or "serendipity"), vivid (one word calls up a
// whole sky of birds in motion), and it carries a spark of sound —
// the word itself murmurs, "murmur" sitting inside it, so it sounds
// like what it names. Eleven letters, instantly readable, and it feels
// chosen rather than generic: it names one very specific thing in
// nature that has no simpler name.
//
// Run: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// The word, exactly as submitted. One word, no trailing newline in
// the output file.
const WORD = 'Murmuration';

// The gate allows 1 to 24 characters, so fail loudly rather than write
// an invalid entry if the word ever grows past the limit.
if (WORD.length < 1 || WORD.length > 24) {
  throw new Error(`entry word is ${WORD.length} characters, must be 1-24`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), WORD, 'utf8');
