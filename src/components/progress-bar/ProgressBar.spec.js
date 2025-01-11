import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";

import ProgressBar from "./ProgressBar.vue";

describe("Progress Bar Tests!", () => {
    const props = {
        type: "Skill Progress",
        percentage: "75",
        skills: ["Skill 1", "Skill 2", "Skill 3"],
    };

    it("renders the correct type and percentage props", () => {
        const wrapper = mount(ProgressBar, { props });

        const type = wrapper.find('[data-test="type"]');
        const percentage = wrapper.find('[data-test="percentage"]');

        expect(type.text()).toBe(props.type);
        expect(percentage.text()).toBe(`${props.percentage}%`);
    });

    it("sets the correct width for the progress bar", () => {
        const wrapper = mount(ProgressBar, { props });

        const barFill = wrapper.find('[data-test="percentage-width"]');
        expect(barFill.element.style.width).toBe(`${props.percentage}%`);
    });

    it("renders the skills correctly", () => {
        const wrapper = mount(ProgressBar, { props });

        const skills = wrapper.findAll('[data-test="skill"]');

        expect(skills).toHaveLength(props.skills.length);

        skills.forEach((skill, index) => {
            expect(skills[index].text()).toBe(props.skills[index]);
        });
    });
});
