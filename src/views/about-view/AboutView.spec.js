import { describe, it, expect, beforeEach, vi } from "vitest";
import { mount } from "@vue/test-utils";
import AboutView from "./AboutView.vue";
import { createI18n } from "vue-i18n";
import { createRouter, createMemoryHistory } from "vue-router";

const messages = {
    en: {
        navBar: { about: "About" },
        aboutView: {
            text1: "About Text 1",
            text2: "About Text 2",
            skills: {
                webDev: { title: "Web Development", desc: "Building websites" },
                webDesign: { title: "Web Design", desc: "Designing websites" },
                graphicDesign: { title: "Graphic Design", desc: "Creating graphics" },
                design3D: { title: "3D Design", desc: "3D Modeling" },
                photo: { title: "Photography", desc: "Taking photos" },
            },
        },
    },
};

const i18n = createI18n({
    locale: "en",
    messages,
    legacy: false,
});

const routes = [
    {
        path: "/about",
        name: "about",
        component: AboutView,
    },
];

const router = createRouter({
    history: createMemoryHistory(),
    routes,
});

describe("About View Tests!", () => {
    let wrapper;
    beforeEach(async () => {
        router.push("/about");
        await router.isReady();

        wrapper = mount(AboutView, {
            global: {
                plugins: [router, i18n],
            },
        });
    });

    it("renders the current page name", () => {
        const currentPage = wrapper.find(".current-page");
        expect(currentPage.text()).toBe("About");
    });

    it("renders the translated text", () => {
        const textContainer = wrapper.find(".text-container");
        expect(textContainer.text()).toContain("About Text 1");
        expect(textContainer.text()).toContain("About Text 2");
    });

    it("renders the correct number of cards", () => {
        const cards = wrapper.findAllComponents({ name: "AboutCard" });
        expect(cards).toHaveLength(Object.keys(messages.en.aboutView.skills).length);
    });

    it("renders each card with correct props", () => {
        const cards = wrapper.findAllComponents({ name: "AboutCard" });
        const expectedCards = Object.values(messages.en.aboutView.skills);

        cards.forEach((card, index) => {
            expect(card.props("type")).toBe(expectedCards[index].title);
            expect(card.props("desc")).toBe(expectedCards[index].desc);
        });
    });
});
