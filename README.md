# Userscript template

This is the general structure I use when making userscripts, to avoid much of the usual pain involved.

## Getting Started
- click "use this template" on the top right" to make a new repo
- clone it locally with `git clone`
- If using VSCode, the `biomejs` extension ([marketplace](https://marketplace.visualstudio.com/items?itemName=biomejs.biome), [openvsx](https://open-vsx.org/extension/biomejs/biome)) is highly recommended
- `pnpm install` (if you don't have [pnpm](https://pnpm.io/) already, `corepack enable`)
- replace values like name, author etc in `package.json` with your own (also check `@run-at` in `src/banner.ts`)
- `pnpm dev`, and copy the userscript given to your favorite userscript manager (I recommend [violentmonkey](https://violentmonkey.github.io/get-it/))
- You're all set! Head over to `src` :)