import adapter from '@sveltejs/adapter-static';
import {preprocess} from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */



const config = {
	kit: {
		preprocess: preprocess(),
		adapter: adapter(),
	},
};
export default config;