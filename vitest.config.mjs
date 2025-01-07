import { defineConfig } from "vitest/config";
import vue from "@vitejs/plugin-vue";
import path from "node:path";

export default defineConfig({
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"),
        },
    },
    test: {
        //setupFiles: ["unit.setup.ts"],
        environment: "happy-dom",
        globals: true,
    },
    plugins: [vue()],
});
