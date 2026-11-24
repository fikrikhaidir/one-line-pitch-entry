import { mkdirSync, writeFileSync } from "node:fs";

const pitch =
  "You already have the app idea, you just don't have the code: tell an AI agent on make.fun what you want in your own words, and it builds a first version you can try, tweak, and keep, with no coding and nothing to lose.";

if (pitch.length < 1 || pitch.length > 240) {
  throw new Error(`pitch must be 1 to 240 characters, got ${pitch.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", pitch, "utf8");
