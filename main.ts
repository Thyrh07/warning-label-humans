import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "WARNING: Contents are 70% water, 30% opinions, no off switch, no warranty, and 100% certain the instructions were written for someone else.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
