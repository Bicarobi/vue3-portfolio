import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";

import ProfileInfoTag from "./ProfileInfoTag.vue";

describe("Profile Info Tag Tests!", () => {
    const props = {
        type: "Profile Type Example",
        description: "This is a description of the profile.",
        link: "https://example.com",
    };

    it("renders the correct type, description, and link props", () => {
        const wrapper = mount(ProfileInfoTag, { props });

        const type = wrapper.find('[data-test="type"]');
        const desc = wrapper.find('[data-test="desc"]');
        const links = wrapper.findAll('[data-test="link"]');

        expect(type.text()).toBe(props.type);
        expect(desc.text()).toBe(props.description);

        links.forEach((link) => {
            expect(link.attributes("href")).toBe(props.link);
        });
    });

    it("renders slot content", () => {
        const slotContent = "This is the slot content";

        const wrapper = mount(ProfileInfoTag, {
            slots: {
                default: slotContent,
            },
        });

        expect(wrapper.html()).toContain(slotContent);
    });
});
