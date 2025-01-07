import { fn } from "@storybook/test";
import { ref, watch } from "vue";

import AboutCard from "./AboutCard.vue";

import WebDevIcon from "../svgs/WebDevIcon.vue";

export default {
    title: "Components/AboutCard",
    component: [AboutCard, WebDevIcon],
    argTypes: {
        type: { control: "text" },
        desc: { control: "text" },
        theme: {
            options: ["light", "dark"],
            control: { type: "radio" },
        },
    },
    args: { onClick: fn() },
};

const Template = (args) => ({
    components: { AboutCard, WebDevIcon },
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
    <div class="about-card-container">
      <AboutCard v-bind="args">
        <WebDevIcon></WebDevIcon>
      </AboutCard>
    </div>
    `,
});

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default = Template.bind({});
Default.args = {
    type: "Basic Card",
    desc: "This is a description of the card.",
    theme: "light",
};
