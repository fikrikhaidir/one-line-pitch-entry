import { mkdirSync, writeFileSync } from "node:fs";

const pitch =
  "You already have the app idea, you just don't have the code: describe it to an AI agent on make.fun in your own words, and you get a first version to try that you can keep asking it to change until it's right.";

if (pitch.length < 1 || pitch.length > 240) {
  throw new Error(`pitch must be 1 to 240 characters, got ${pitch.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", pitch, "utf8");
