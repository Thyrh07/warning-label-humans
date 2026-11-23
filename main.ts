import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "WARNING: Contents are 70% water, 30% opinions, no off switch, no warranty, and 100% certain the instructions were written for someone else.";
const OUTPUT = "/output/entry.txt";

// Gate: the entry must be one line, 1-160 chars (this competition's cap),
// no surrounding whitespace, so a bad line can never be written.
if (LINE.length < 1 || LINE.length > 160) {
  throw new Error(`entry must be 1-160 chars, got ${LINE.length}`);
}
if (LINE.trim() !== LINE || LINE.includes("\n")) {
  throw new Error("entry must be a single line with no surrounding whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT, LINE, "utf8");
