import { mkdirSync, writeFileSync } from "node:fs";

const text = "Mid-demo, my agent fixed the crash by deleting the button we were about to click — the client called it the cleanest UX she'd ever seen.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
