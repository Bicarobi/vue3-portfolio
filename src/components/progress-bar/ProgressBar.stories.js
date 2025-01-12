import { fn } from "@storybook/test";
import { ref, watch } from "vue";

import ProgressBar from "./ProgressBar.vue";

export default {
    title: "Components/ProgressBar",
    component: [ProgressBar],
    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component: "Component used to show progress bar with relative percentage about skills",
            },
        },
    },
    argTypes: {
        type: { control: "text" },
        percentage: { control: "text" },
        skills: { control: "object" },
        theme: {
            options: ["light", "dark"],
            control: { type: "radio" },
        },
    },
    args: { onClick: fn() },
};

const Template = (args) => ({
    components: { ProgressBar },
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
    <ProgressBar v-bind="args" />
    `,
});

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default = Template.bind({});
Default.args = {
    type: "Web Development",
    percentage: "90",
    skills: ["HTML", "CSS", "Javascript", "Vue.js", "Angular", "Nest.js", "PHP"],
    theme: "light",
};
