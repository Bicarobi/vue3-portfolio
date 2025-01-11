import { fn } from "@storybook/test";
import { ref, watch } from "vue";

import WorkCard from "./WorkCard.vue";

export default {
    title: "Components/WorkCard",
    component: [WorkCard],
    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component: "Component used in portfolio grid for thumbnails and information about works",
            },
        },
    },
    argTypes: {
        title: { control: "text" },
        type: { control: "text" },
        desc: { control: "text" },
        img: { control: "array" },
        theme: {
            options: ["light", "dark"],
            control: { type: "radio" },
        },
    },
};

const Template = (args) => ({
    components: { WorkCard },
    setup() {
        const currentTheme = ref(args.theme);

        watch(
            () => args.theme,
            (newTheme) => {
                document.documentElement.setAttribute("data-theme", newTheme);
                currentTheme.value = newTheme;
            },
            { immediate: true }
        );

        return { args, currentTheme };
    },
    template: `
    <WorkCard v-bind="args"/>
    `,
});

export const Default = Template.bind({});
Default.args = {
    title: "Title",
    type: "Type",
    desc: "This is a description.",
    img: ["web-dev/work3/web-dev-hdlu-8.png", "web-dev/work3/web-dev-hdlu-7.png"],
    theme: "light",
};
