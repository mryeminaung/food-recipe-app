import { defineConfig } from "vite";
import react from "@vitejs/plugin-react"; // or vue, svelte, etc.
import path from "path";

export default defineConfig({
	plugins: [react()],
	server: {
		port: 3000,
		open: true,
	},
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"), // '@' points to /src
		},
	},
});
