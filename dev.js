import { readFileSync } from "node:fs";
import http from "node:http";
import { watch } from "rolldown";
import rolldownConfig, { outputPath } from "./rolldown.config.js";
import { getBanner } from "./src/banner.ts";

const watcher = watch(rolldownConfig);

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
await import("http://localhost:9000/");
// END
`);
});
