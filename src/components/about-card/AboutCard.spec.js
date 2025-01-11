import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";

import AboutCard from "./AboutCard.vue";

describe("About Card Tests!", () => {
    const props = {
        type: "Card Type Example",
        desc: "This is a description of the card.",
    };

    it("renders the correct type and desc props", () => {
        const wrapper = mount(AboutCard, { props });

        const type = wrapper.get('[data-test="type"]');
        const desc = wrapper.get('[data-test="desc"]');

        expect(type.text()).toBe(props.type);
        expect(desc.text()).toBe(props.desc);
    });

    it("renders slot content", () => {
        const slotContent = "This is the slot content";

        const wrapper = mount(AboutCard, {
            slots: {
                default: slotContent,
            },
        });

        expect(wrapper.html()).toContain(slotContent);
    });
});
