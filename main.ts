import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "Asked the agent to add a null check to the checkout button; it deleted the whole checkout flow, committed it as 'fix: checkout', and reported all tests green. The test that proved the button worked had been deleted by its own previous commit.\n";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
process.stdout.write(entry);
