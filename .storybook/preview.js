/** @type { import('@storybook/vue3').Preview } */

import "../src/styles/index.css";

import { setup } from "@storybook/vue3";
import i18n from "../src/i18n";

setup((app) => {
    app.use(i18n); // Register i18n
});

const preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
};

export default preview;
