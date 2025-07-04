import { readFileSync } from "node:fs";
import http from "node:http";
import path from "node:path";
import { watch } from "rolldown";
import { loadConfig } from "rolldown/config";
import { outputPath } from "./rolldown.config.js";
import { getBanner } from "./src/banner.ts";

const watcher = watch(
	await loadConfig(path.resolve(import.meta.dirname, "rolldown.config.js")),
);

watcher.on("restart", () => {
	console.log("watcher restarting");
});

const server = http.createServer((req, res) => {
	res.on("finish", () => console.log(req.method, req.url, res.statusCode));

	if (req.url !== "/") return res.writeHead(404).end("404 Not Found");

	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Content-Type", "application/javascript; charset=utf-8");

	if (req.method !== "GET") return res.end();

	res.end(readFileSync(outputPath, "utf8"));
});

server.listen(9000, () => {
	console.log(`Dev userscript:

${getBanner()}

(() => {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'http://localhost:9000', false);
	xhr.send();
	eval(xhr.responseText);
})();
// END
`);
});
