import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";

import en from "../../locales/en.json";
import hr from "../../locales/hr.json";

import ProfileInfoTag from "./ProfileInfoTag.vue";

describe("Profil Info Tag Tests!", () => {
    const locales = {
        en: en,
        hr: hr,
    };

    const image = "image";
    const titles = {
        en: "location",
        hr: "lokacija",
    };
    const descs = {
        en: "Croatia",
        hr: "Hrvatska",
    };
    const link = "https://maps.app.goo.gl/3qw2hEo96L59ebqo9";

    const localeKeys = Object.keys(locales);

    it.each(localeKeys)("Should render and contain correct type for locale: %s", (locale) => {
        const locationTitle = locales[locale].profile.location;
        const locationDesc = locales[locale].profile.location2;

        const wrapper = mount(ProfileInfoTag, {
            slots: {
                default: image,
            },
            propsData: {
                type: titles[locale],
                description: descs[locale],
                link: link,
            },
        });

        console.log(wrapper.props());
        expect(wrapper.html()).toContain(image);

        expect(wrapper.props().type).toBe(locationTitle);
        expect(wrapper.props().description).toBe(locationDesc);

        expect(wrapper.get('[data-test="type"]').text()).toBe(wrapper.props().type);
        expect(wrapper.get('[data-test="desc"]').text()).toBe(wrapper.props().description);

        const links = wrapper.findAll('[data-test="link"]');
        expect(links.length).toBe(3);
        links.forEach((link) => {
            expect(link.attributes("href")).toBe(wrapper.props().link);
        });
        console.log(wrapper.html());
    });
});
