import path from "node:path";
import { defineConfig } from "rolldown";
import pkg from "./package.json" with { type: "json" };
import { getBanner } from "./src/banner.ts";

export const outputPath = path.resolve(import.meta.dirname, `dist/${pkg.name}.user.js`);

export default defineConfig({
	input: path.resolve(import.meta.dirname, "src/index.ts"),
	output: {
		file: outputPath,
		format: "esm",
		sourcemap: "inline",
		banner: getBanner(),
	},
	platform: "browser",
	watch: {
		include: "src/**",
	},
});
