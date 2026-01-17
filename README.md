# Userscript template

This is the general structure I use when making userscripts, to avoid much of the usual pain involved.

## Getting Started
- click "use this template" on the top right" to make a new repo
- clone it locally with `git clone`
- `pnpm install` (if you don't have [pnpm](https://pnpm.io/) already, install it)

For development - run `pnpm dev`, and copy the userscript given to your favorite userscript manager (I recommend [violentmonkey](https://violentmonkey.github.io/get-it/)). You may need to accept a permission popup that asks to "Look for and connect to any device on your local network", when on the page you want to use your userscript with.

This example shows an image in the browser's console when visiting https://example.com.

### Customizing
- replace values like name, author etc in `package.json` with your own
- IMPORTANT: replace the value of `@match` in `src/banner.ts` with the site your userscript is for
- Make sure to recopy the development userscript after changing these values

To make a release usable by other people, run `pnpm build`, then check the `dist` folder.
