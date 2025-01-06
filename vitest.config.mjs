import { defineConfig } from "vitest/config";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
    test: {
        //setupFiles: ["unit.setup.ts"],
        environment: "happy-dom",
        globals: true,
    },
    plugins: [vue()],
});
