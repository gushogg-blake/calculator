import path from "path";
import adapter from "@sveltejs/adapter-auto";
import preprocess from "svelte-preprocess";
import {mdsvex} from "mdsvex";
import remarkWikiLink from "remark-wiki-link";
import slugify from "slugify";

export default {
	extensions: [".svelte", ".md"],
	
	preprocess: [
		preprocess({
			scss: {
				includePaths: ["src/routes", "src/css"],
			},
		}),
		
		mdsvex({
			extensions: [".md", ".svx"],
			
			smartypants: {
				dashes: "oldschool",
			},
			
			remarkPlugins: [
				[remarkWikiLink, {
					pageResolver(name) {
						return [slugify(name).toLowerCase()];
					},
					
					hrefTemplate(permalink) {
						return `/${permalink}`;
					},
				}],
			],
		}),
	],
	
	kit: {
		adapter: adapter(),
		
		alias: {
			$src: path.resolve("./src"),
			$lib: path.resolve("./src/lib"),
			$css: path.resolve("./src/css"),
			$utils: path.resolve("./src/lib/utils"),
			$components: path.resolve("./src/components"),
			$routes: path.resolve("./src/routes"),
			$pages: path.resolve("./src/pages"),
		},
	},
};
