import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";
import { resolve, dirname } from "node:path";

// https://vite.dev/config/
export default defineConfig({
    root: resolve(dirname(fileURLToPath(import.meta.url)), "src"),
    plugins: [react()],
    define: {
        "process.env": {},
    },
    resolve: {
        alias: {
            "~bootstrap": resolve(
                dirname(fileURLToPath(import.meta.url)),
                "node_modules/bootstrap"
            ),
            "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
        extensions: [".js", ".json", ".jsx", ".mjs", ".ts", ".tsx", ".vue"],
    },
});
