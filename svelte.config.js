import path from "path";
import adapter from "@sveltejs/adapter-auto";

export default {
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
