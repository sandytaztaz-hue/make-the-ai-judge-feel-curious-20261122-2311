import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const text =
  "Every morning, the cafe sets three chairs outside.\n" +
  "This morning there are four.\n" +
  "No one sat in it, but the coffee is gone.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), text, "utf8");
// Deterministic: the same text is written on every run, byte for byte.

