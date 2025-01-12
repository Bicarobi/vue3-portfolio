import { fn } from "@storybook/test";
import { ref, watch } from "vue";

import ProfileInfoTag from "./ProfileInfoTag.vue";

import EmailIcon from "../svgs/EmailIcon.vue";

export default {
    title: "Components/ProfileInfoTag",
    component: [ProfileInfoTag, EmailIcon],
    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component: "Component used to show contact information",
            },
        },
    },
    argTypes: {
        type: { control: "text" },
        description: { control: "text" },
        link: { control: "text" },
        theme: {
            options: ["light", "dark"],
            control: { type: "radio" },
        },
    },
    args: { onClick: fn() },
};

const Template = (args) => ({
    components: { ProfileInfoTag, EmailIcon },
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
    <ProfileInfoTag v-bind="args">
        <EmailIcon></EmailIcon>
    </ProfileInfoTag>
    `,
});

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default = Template.bind({});
Default.args = {
    type: "Tag Title",
    description: "This is a description of the tag.",
    link: "https://www.google.com/",
    theme: "light",
};
