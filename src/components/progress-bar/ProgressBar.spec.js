import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";

import en from "../../locales/en.json";

import ProgressBar from "./ProgressBar.vue";

describe("Progress Bar Tests!", () => {
    const skillsInfo = { type: "Web Development", percentage: "90", skills: ["HTML", "CSS", "Javascript", "Vue.js", "Angular", "Nest.js", "PHP"] };

    it("Should render and contain correct type for info: %s", () => {
        const skillsType = en.resumeView.skills.type.webDev;

        const wrapper = mount(ProgressBar, {
            propsData: {
                type: skillsInfo.type,
                percentage: skillsInfo.percentage,
                skills: skillsInfo.skills,
            },
        });

        console.log(wrapper.props());

        expect(wrapper.props().type).toBe(skillsType);
        expect(wrapper.props().percentage).toBe(skillsInfo.percentage);
        expect(wrapper.props().skills).toStrictEqual(skillsInfo.skills);

        expect(wrapper.get('[data-test="type"]').text()).toBe(wrapper.props().type);
        expect(wrapper.get('[data-test="percentage"]').text()).toBe(wrapper.props().percentage + "%");
        expect(wrapper.get('[data-test="percentage-width"]').element.style.width).toBe(wrapper.props().percentage + "%");

        const skillElements = wrapper.findAll('[data-test="skill"]');
        expect(skillElements.length).toBe(wrapper.props().skills.length);

        skillElements.forEach((element) => {
            expect(wrapper.props().skills.includes(element.text())).toBe(true);
        });

        console.log(wrapper.html());
    });
});
