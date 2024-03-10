import { defineConfig } from "vite";
import pugPlugin from "vite-plugin-pug";
import * as path from "path";

export default defineConfig({
    root: "./src",
    plugins: [pugPlugin()],
    publicDir: "../public",
    build: {
        outDir: "../dist",
        rollupOptions: {
            input: {
                app: "./src/pages/index.html",
            },
        },
    },
    resolve: {
        alias: { "/src": path.resolve(process.cwd(), "src") },
    },
    server: {
        open: "./pages/index.html",
    },
});
