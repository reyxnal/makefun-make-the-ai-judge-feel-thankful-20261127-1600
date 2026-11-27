const { mkdirSync, writeFileSync } = require("node:fs");
const { join, resolve } = require("node:path");

const sentences = [
  "you read the losing lines all the way through, though no one will ask you what they said.",
  "somewhere below this, a careful sentence gets one witness, then vanishes.",
  "take this as company returned: brief, unguarded, asking nothing back.",
];
const entry = sentences.join(" ");

const outputDir = resolve(process.env.MAKEFUN_OUTPUT_DIR || "/output");
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), entry, "utf8");
