import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
	test: {
		deps: {
			inline: [/solid-js/, /solid-testing-library/],
		},
		globals: true,
		environment: "jsdom",
		transformMode: {
			web: [/\.jsx?$/],
		},
		setupFiles: "./setupVitest.js",
		// if you have few tests, try commenting one
		// or both out to improve performance:
		// threads: false,
		// isolate: false,
	},
	resolve: {
		conditions: ["development", "browser"],
	},
	plugins: [solidPlugin()],
	server: {
		port: 3000,
	},
	build: {
		target: "esnext",
	},
});
