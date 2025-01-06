import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";

import en from "../../locales/en.json";

import ResumeInfo from "./ResumeInfo.vue";

describe("Resume Info Tests!", () => {
    const infos = {
        eduInfo: {
            title: "Sveučilište Sjever Varaždin - Master's degree - Multimedia",
            time: "2023 — present",
            desc: "We are currently focusing on developing the frontend part of websites as part of our current study, with plans to incorporate backend development as well. Additionally, we are engaged in graphical programming in Processing using the Java programming language.",
        },
        workInfo: {
            title: "Prolink",
            time: "2023 — 2024",
            desc: "During my time at Prolink, I had the opportunity to independently work on various significant projects such as the creation and design of Lesnina XXXL and Mömax stores. Additionally, I autonomously developed 300 scenes for the Autoškola Rusan application, which is utilized by 40 thousand users monthly. My recent projects have revolved around interior and exterior design for various apartments and residential buildings, as well as the creation of animation for medical purposes.",
        },
    };

    const infoKeys = Object.keys(infos);
    console.log(infoKeys);

    it.each(infoKeys)("Should render and contain correct type for info: %s", (info) => {
        const infoTitle = en.resumeView[info].info1.title;
        const infoTime = en.resumeView[info].info1.time;
        const infoDesc = en.resumeView[info].info1.desc;

        const wrapper = mount(ResumeInfo, {
            propsData: {
                title: infos[info].title,
                time: infos[info].time,
                desc: infos[info].desc,
            },
        });

        console.log(wrapper.props());

        expect(wrapper.props().title).toBe(infoTitle);
        expect(wrapper.props().time).toBe(infoTime);
        expect(wrapper.props().desc).toBe(infoDesc);

        expect(wrapper.get('[data-test="title"]').text()).toBe(wrapper.props().title);
        expect(wrapper.get('[data-test="time"]').text()).toBe(wrapper.props().time);
        expect(wrapper.get('[data-test="desc"]').text()).toBe(wrapper.props().desc);

        console.log(wrapper.html());
    });
});
