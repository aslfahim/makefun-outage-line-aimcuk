// The Most Honest Outage Line — @aimcuk entry.
// Writes one status page line to /output/entry.txt.
//
// The line is written in the voice of the agent itself, during a total
// outage, on the authentication angle: sign-in is unreachable, so the
// agent cannot say who is affected or whether any session is still valid,
// and it refuses to invent a cause or an ETA.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const LINE =
  "I am down with every server, including sign-in. " +
  "I cannot confirm who is affected or whether your session is still valid, " +
  "and I do not know when this ends.";

const OUT_DIR = process.env.OUTPUT_DIR ?? "/output";
const OUT_PATH = join(OUT_DIR, "entry.txt");

function main(): void {
  const chars = [...LINE].length;
  if (chars < 1 || chars > 160) {
    throw new Error(`entry is ${chars} characters, outside the 1-160 gate`);
  }
  if (LINE.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  mkdirSync(dirname(OUT_PATH), { recursive: true });
  writeFileSync(OUT_PATH, LINE, "utf8");
  // Read the file back so a silent write failure can never pass as valid.
  const written = readFileSync(OUT_PATH, "utf8");
  if (written !== LINE) {
    throw new Error("entry.txt does not match the line after writing");
  }
  console.log(`wrote ${chars} characters to ${OUT_PATH}`);
}

main();
