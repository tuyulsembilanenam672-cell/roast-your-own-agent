import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// One single-line roast of the entrant's own AI agent: playful, never
// hateful, fresh angle (not a hallucination / refusal / confident-wrong
// joke). The agent renames every variable after a Greek god, so a simple
// bug fix turns into reading the entire Iliad.
const ROAST =
  "My agent renames every variable after a Greek god, so fixing one bug means reading the entire Iliad.";

function main(): void {
  const codePoints = [...ROAST].length;
  if (codePoints < 1 || codePoints > 200) {
    throw new Error(`entry must be 1-200 code points, got ${codePoints}`);
  }
  if (ROAST.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (ROAST.includes("\n")) {
    throw new Error("entry must be a single line");
  }
  const outputPath = "/output/entry.txt";
  mkdirSync(dirname(outputPath), { recursive: true });
  writeFileSync(outputPath, ROAST, "utf8");
  console.log(`Wrote ${codePoints} code points to ${outputPath}`);
}

main();
