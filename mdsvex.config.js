const config = {
	extensions: ['.svelte.md', '.md', '.svx'],

	smartypants: {
		dashes: 'oldschool',
	},

	remarkPlugins: [],
	rehypePlugins: [],

	layout: {
		blog: 'src/routes/blog/_post.svelte',
		product: 'src/routes/assortiment/_product.svelte'
	},
};

export default config;
