import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";

import ResumeInfo from "./ResumeInfo.vue";

describe("Resume Info Tests!", () => {
    const props = {
        title: "Resume Title Example",
        time: "2020 - present",
        desc: "This is a description of the resume.",
    };

    it("renders the correct type, time and desc props", () => {
        const wrapper = mount(ResumeInfo, { props });

        const title = wrapper.get('[data-test="title"]');
        const time = wrapper.get('[data-test="time"]');
        const desc = wrapper.get('[data-test="desc"]');

        expect(title.text()).toBe(props.title);
        expect(time.text()).toBe(props.time);
        expect(desc.text()).toBe(props.desc);
    });
});
