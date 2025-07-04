// This is a special file that produces the userscript metadata banner (for dev.mjs).
// IMPORTANT: make sure to change @run-at to the site the script is for!
// You will need to restart `pnpm dev` if you change the banner. (wip)
// Imported by dev.js

import pkg from "../package.json" with { type: "json" };

export const getBanner = () => {
    return `// ==UserScript==
// @name        ${pkg.name}
// @author      ${pkg.author}
// @description ${pkg.description}
// @version     ${pkg.version}
// @namespace   ${pkg.homepage}
// @match       example.com
// @run-at      document-start
// @grant       none
// ==/UserScript==`
}
