import { readFileSync } from "node:fs";
import http from "node:http";
import path from "node:path";
import { watch } from "rolldown";
import pkg from "./package.json" with { type: "json" };

const watcher = watch({
	input: path.resolve(import.meta.dirname, "src/index.ts"),
	output: {
		file: path.resolve(import.meta.dirname, "dist/bundle.js"),
		format: "esm",
		sourcemap: "inline",
	},
	platform: "browser",
	watch: {
		include: "src/**",
	},
});

watcher.on("restart", () => {
	console.log("watcher restarting");
});

const server = http.createServer((req, res) => {
	res.on("finish", () => console.log(req.method, req.url, res.statusCode));

	if (req.url !== "/") return res.writeHead(404).end("404 Not Found");

	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Content-Type", "application/javascript; charset=utf-8");

	if (req.method !== "GET") return res.end();

	res.end(readFileSync(`dist/bundle.js`, "utf8"));
});

const extraMeta = Object.entries(pkg.userscript)
	.map(([meta, value]) => `// ${meta.padEnd(13, " ")}${value}`)
	.join("\n");
server.listen(9000, () => {
	console.log(`
Dev userscript:

// ==UserScript==
// @name        ${pkg.name}
// @author      ${pkg.author}
// @description ${pkg.description}
// @version     ${pkg.version}
// @namespace   ${pkg.homepage}
${extraMeta}
// ==/UserScript==

(() => {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'http://localhost:9000', false);
	xhr.send();
	eval(xhr.responseText);
})();
// END
`);
});
