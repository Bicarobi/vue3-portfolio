import { ref, watch } from "vue";
import WorkCardModal from "./WorkCardModal.vue";

export default {
    title: "Components/WorkCardModal",
    component: [WorkCardModal],
    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component: "Modal component which shows more information about clicked Work Card component",
            },
        },
    },
    argTypes: {
        title: { control: "text" },
        type: { control: "text" },
        desc: { control: "text" },
        img: { control: "array" },
        link: { control: "text" },
        githubLink: { control: "text" },
        theme: {
            options: ["light", "dark"],
            control: { type: "radio" },
        },
    },
};

const Template = (args) => ({
    components: { WorkCardModal },
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
    <WorkCardModal
      v-bind="args"
    />
  `,
});

export const Default = Template.bind({});
Default.args = {
    title: "Title",
    type: "Type",
    desc: "This is a description.",
    img: ["web-dev/work3/web-dev-hdlu-8.png", "web-dev/work3/web-dev-hdlu-2.jpg"],
    link: "https://hdluvz-no-wp.vercel.app/",
    githubLink: "https://github.com/Bicarobi/hdluvz-no-wp",
    theme: "light",
};
