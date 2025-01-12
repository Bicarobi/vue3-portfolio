/** @type { import('@storybook/vue3-webpack5').StorybookConfig } */

const path = require("path");

const config = {
    stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
    addons: ["@storybook/addon-webpack5-compiler-swc", "@storybook/addon-onboarding", "@storybook/addon-essentials", "@chromatic-com/storybook", "@storybook/addon-interactions", "@storybook/addon-mdx-gfm"],

    framework: {
        name: "@storybook/vue3-webpack5",
        options: {},
    },

    staticDirs: ["../public", "../src/locales"],

    webpackFinal: async (config) => {
        config.module.rules.push({
            test: /\.scss$/,
            use: [
                "style-loader", // Injects styles into the DOM
                "css-loader", // Interprets `@import` and `url()` like `import/require()` and resolves them
                "sass-loader", // Loads and compiles a SCSS file to CSS
            ],
        });

        config.resolve.alias = {
            ...config.resolve.alias,
            "@": path.resolve(__dirname, "../src"),
        };

        return config;
    },
};
export default config;
