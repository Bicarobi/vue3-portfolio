import { describe, it, expect, beforeEach } from "vitest";
import { mount } from "@vue/test-utils";
import { createI18n } from "vue-i18n";
import { createRouter, createMemoryHistory } from "vue-router";
import AboutView from "./AboutView.vue";

import AboutCard from "@/components/about-card/AboutCard.vue";
import WebDevIcon from "@/components/svgs/WebDevIcon.vue";
import WebDesignIcon from "@/components/svgs/WebDesignIcon.vue";
import GraphicDesignIcon from "@/components/svgs/GraphicDesignIcon.vue";
import Design3DIcon from "@/components/svgs/Design3DIcon.vue";
import PhotoIcon from "@/components/svgs/PhotoIcon.vue";

const messages = {
    en: {
        navBar: {
            about: "About",
        },
        aboutView: {
            text1: "This is text 1.",
            text2: "This is text 2.",
            skills: {
                webDev: {
                    title: "Web Development",
                    desc: "Building websites and web applications.",
                },
                webDesign: {
                    title: "Web Design",
                    desc: "Designing user-friendly websites.",
                },
                graphicDesign: {
                    title: "Graphic Design",
                    desc: "Creating visual content.",
                },
                design3D: {
                    title: "3D Design",
                    desc: "Modeling and rendering 3D objects.",
                },
                photo: {
                    title: "Photography",
                    desc: "Capturing moments.",
                },
            },
        },
    },
    hr: {
        navBar: {
            about: "O nama",
        },
        aboutView: {
            text1: "Ovo je tekst 1.",
            text2: "Ovo je tekst 2.",
            skills: {
                webDev: {
                    title: "Web Razvoj",
                    desc: "Izrada web stranica i web aplikacija.",
                },
                webDesign: {
                    title: "Web Dizajn",
                    desc: "Dizajniranje korisnički prijaznih web stranica.",
                },
                graphicDesign: {
                    title: "Grafički Dizajn",
                    desc: "Kreiranje vizualnog sadržaja.",
                },
                design3D: {
                    title: "3D Dizajn",
                    desc: "Modeliranje i renderiranje 3D objekata.",
                },
                photo: {
                    title: "Fotografija",
                    desc: "Hvatanje trenutaka.",
                },
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

    it("renders the route name correctly", async () => {
        i18n.global.locale.value = "en";
        await wrapper.vm.$nextTick();

        const route = wrapper.find("[data-test='route']");
        expect(route.text()).toBe("About");
    });

    it("renders the text sections, route name and switches language correctly", async () => {
        const route = wrapper.find("[data-test='route']");
        const text1 = wrapper.find("[data-test='text-1']");
        const text2 = wrapper.find("[data-test='text-2']");

        i18n.global.locale.value = "en";
        await wrapper.vm.$nextTick();

        expect(route.text()).toBe("About");
        expect(text1.text()).toBe("This is text 1.");
        expect(text2.text()).toBe("This is text 2.");

        i18n.global.locale.value = "hr";
        await wrapper.vm.$nextTick();

        expect(route.text()).toBe("O nama");
        expect(text1.text()).toBe("Ovo je tekst 1.");
        expect(text2.text()).toBe("Ovo je tekst 2.");
    });

    it("renders the AboutCard components with correct props and language switching", async () => {
        const lang = i18n.global.locale.value;

        const cards = wrapper.findAllComponents(AboutCard);
        expect(cards).toHaveLength(Object.keys(messages.en.aboutView.skills).length);

        const expectedCards = [
            {
                type: messages[lang].aboutView.skills.webDev.title,
                desc: messages[lang].aboutView.skills.webDev.desc,
                image: WebDevIcon,
            },
            {
                type: messages[lang].aboutView.skills.webDesign.title,
                desc: messages[lang].aboutView.skills.webDesign.desc,
                image: WebDesignIcon,
            },
            {
                type: messages[lang].aboutView.skills.graphicDesign.title,
                desc: messages[lang].aboutView.skills.graphicDesign.desc,
                image: GraphicDesignIcon,
            },
            {
                type: messages[lang].aboutView.skills.design3D.title,
                desc: messages[lang].aboutView.skills.design3D.desc,
                image: Design3DIcon,
            },
            {
                type: messages[lang].aboutView.skills.photo.title,
                desc: messages[lang].aboutView.skills.photo.desc,
                image: PhotoIcon,
            },
        ];

        cards.forEach((card, index) => {
            expect(card.props().type).toEqual(expectedCards[index].type);
            expect(card.props().desc).toEqual(expectedCards[index].desc);

            const imageComponent = wrapper.findComponent(expectedCards[index].image);
            expect(imageComponent.exists()).toBe(true);
        });

        i18n.global.locale.value = "hr";
        await wrapper.vm.$nextTick();

        cards.forEach((card, index) => {
            expect(card.props().type).toEqual(expectedCards[index].type);
            expect(card.props().desc).toEqual(expectedCards[index].desc);

            const imageComponent = wrapper.findComponent(expectedCards[index].image);
            expect(imageComponent.exists()).toBe(true);
        });
    });
});
