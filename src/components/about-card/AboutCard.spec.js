import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";

import en from "../../locales/en.json";
import hr from "../../locales/hr.json";

import AboutCard from "./AboutCard.vue";

describe("About Card Tests!", () => {
    const locales = {
        en: en,
        hr: hr,
    };

    const image = "image";
    const titles = {
        en: "web development",
        hr: "razvoj web stranica",
    };
    const descs = {
        en: "Creating complete websites using Vue.js and Nest.js",
        hr: "Izrada kompletnih web stranica koristeći Vue.js i Nest.js",
    };

    const localeKeys = Object.keys(locales);

    it.each(localeKeys)("Should render and contain correct type for locale: %s", (locale) => {
        const skillsTitles = Object.values(locales[locale].aboutView.skills).map((skill) => skill.title);
        const skillsDescs = Object.values(locales[locale].aboutView.skills).map((skill) => skill.desc);

        const wrapper = mount(AboutCard, {
            slots: {
                default: image,
            },
            propsData: {
                type: titles[locale],
                desc: descs[locale],
            },
        });

        console.log(wrapper.props());

        const containsSkillTitle = skillsTitles.some((title) => wrapper.props().type.includes(title));
        const containsSkillDesc = skillsDescs.some((desc) => wrapper.props().desc.includes(desc));

        expect(wrapper.html()).toContain(image);

        expect(containsSkillTitle).toBe(true);
        expect(containsSkillDesc).toBe(true);

        expect(wrapper.get('[data-test="type"]').text()).toBe(wrapper.props().type);
        expect(wrapper.get('[data-test="desc"]').text()).toBe(wrapper.props().desc);
        console.log(wrapper.html());
    });
});
