import adapter from '@sveltejs/adapter-auto';
import sveltePreprocess from 'svelte-preprocess';
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'
import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';

// Get filepath for prepending SCSS
const filePath = dirname(fileURLToPath(import.meta.url));
const sassPath = `${filePath}/scss/`;

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],

	preprocess: [
		sveltePreprocess({
			scss: {
				prependData: `@import  '${sassPath}app.scss';`,
			},
		}),
		mdsvex(mdsvexConfig),
	],

	kit: {
		adapter: adapter(),
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	}
};

export default config;
