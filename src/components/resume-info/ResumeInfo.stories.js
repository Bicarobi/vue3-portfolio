import { fn } from "@storybook/test";
import { ref, watch } from "vue";

import ResumeInfo from "./ResumeInfo.vue";

export default {
    title: "Components/ResumeInfo",
    component: [ResumeInfo],
    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component: "Component used to show more information about education and work experience",
            },
        },
    },
    argTypes: {
        title: { control: "text" },
        time: { control: "text" },
        desc: { control: "text" },
        theme: {
            options: ["light", "dark"],
            control: { type: "radio" },
        },
    },
    args: { onClick: fn() },
};

const Template = (args) => ({
    components: { ResumeInfo },
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
    <ResumeInfo v-bind="args"/>
    `,
});

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default = Template.bind({});
Default.args = {
    title: "Title",
    time: "2023 — 2025",
    desc: "This is a description.",
    theme: "light",
};
