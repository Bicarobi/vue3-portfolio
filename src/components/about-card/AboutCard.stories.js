import { fn } from "@storybook/test";

import AboutCard from "./AboutCard.vue";

import WebDevIcon from "../svgs/WebDevIcon.vue";
//import "../../styles/index.css";
//import "../../styles/index.scss";
//import "../../styles/components/_AboutCard.scss";

export default {
    title: "Components/AboutCard", // This defines the Storybook hierarchy
    component: [AboutCard, WebDevIcon],
    argTypes: {
        type: { control: "text" }, // Adds a text control for the `type` prop
        desc: { control: "text" }, // Adds a text control for the `desc` prop
        darkMode: { control: false },
    },
    args: { onClick: fn() },
};

const Template = (args) => ({
    components: { AboutCard, WebDevIcon },
    setup() {
        return { args };
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
    darkMode: false,
};
