// This is a special file that produces the userscript metadata banner (for dev.mjs).
// IMPORTANT: make sure to modify the @match line to reference the page your userscript is for!
// https://violentmonkey.github.io/api/metadata-block/
// You will need to recopy the development userscript if you change the banner here.

import pkg from "../package.json" with { type: "json" };

export const getBanner = () => {
	return `// ==UserScript==
// @name        ${pkg.name}
// @author      ${pkg.author}
// @description ${pkg.description}
// @version     ${pkg.version}
// @namespace   ${pkg.homepage}
// @homepageURL ${pkg.homepage}
// @match       https://example.com/
// @run-at      document-start
// @grant       none
// @top-level-await
// ==/UserScript==`;
};
