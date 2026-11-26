import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line = "I confided in my fridge; it gave me the cold shoulder.";
const out = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(out, { recursive: true });
writeFileSync(join(out, "entry.txt"), line + "\n");
