import { defineConfig, PluginOption } from "vite";
import pugPlugin from "vite-plugin-pug";
import * as path from "path";
import * as prettier from "prettier";

const formatHtmlPlugin = (): PluginOption => ({
    name: "beautify-html",
    transformIndexHtml: {
        order: "post",
        handler: async (html) =>
            html.replace(
                html,
                await prettier.format(html, {
                    parser: "html",
                    htmlWhitespaceSensitivity: "ignore",
                    tabWidth: 4,
                    printWidth: 100,
                }),
            ),
    },
});

export default defineConfig({
    root: "./src",
    plugins: [pugPlugin(), formatHtmlPlugin()],
    publicDir: "../public",
    build: {
        outDir: "../dist",
        emptyOutDir: true,
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
