import { fn } from "@storybook/test";
import { ref, watch } from "vue";

import WorkCard from "./WorkCard.vue";
import LeftArrowIcon from "../svgs/LeftArrowIcon.vue";
import RightArrowIcon from "../svgs/RightArrowIcon.vue";
import CloseIcon from "../svgs/CloseIcon.vue";
import ExpandIcon from "../svgs/ExpandIcon.vue";
import GitHubIcon from "../svgs/GitHubIcon.vue";

export default {
    title: "Components/WorkCard",
    component: [WorkCard, LeftArrowIcon, RightArrowIcon, CloseIcon, ExpandIcon, GitHubIcon],
    tags: ["autodocs"],
    argTypes: {
        title: { control: "text" },
        type: { control: "text" },
        desc: { control: "text" },
        img: { control: "array" },
        link: { control: "text" },
        githubLink: { control: "text" },
        filter: { control: "text" },
        theme: {
            options: ["light", "dark"],
            control: { type: "radio" },
        },
    },
    args: { onClick: fn() },
};

const Template = (args) => ({
    components: { WorkCard, LeftArrowIcon, RightArrowIcon, CloseIcon, ExpandIcon, GitHubIcon },
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

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default = Template.bind({});
Default.args = {
    title: "Title",
    type: "Type",
    desc: "This is a description.",
    img: ["web-dev/work3/web-dev-hdlu-8.png", "web-dev/work3/web-dev-hdlu-7.png"],
    link: "https://www.google.com/",
    githubLink: "https://github.com/",
    filter: "filter",
    theme: "light",
};
