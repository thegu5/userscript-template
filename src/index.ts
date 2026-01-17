import { someFunc } from "./other.ts";

// show a random cat image in the console
// notice how top-level await works fine! this blocks the page from doing things until the cat image is fetched
// if you don't want this behavior, wrap the related code in an async iife (https://developer.mozilla.org/en-US/docs/Glossary/IIFE)
const resp = await fetch("https://cataas.com/cat");
const blob = await resp.blob();
const reader = new FileReader();
reader.readAsDataURL(blob);
reader.onloadend = () => {
	console.log(
		"%c ",
		`background: url('${reader.result}') no-repeat; background-size: contain; padding: 250px;`,
	);
};

console.log(someFunc());
