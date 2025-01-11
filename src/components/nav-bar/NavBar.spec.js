import { mount, RouterLinkStub } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import NavBar from "./NavBar.vue";
import { createI18n } from "vue-i18n";
import ThemeIcon from "../svgs/ThemeIcon.vue";

const i18n = createI18n({
    legacy: false,
    locale: "hr",
    messages: {
        hr: {
            navBar: {
                portfolio: "Portfelj",
                resume: "Životopis",
                about: "O nama",
            },
        },
        en: {
            navBar: {
                portfolio: "Portfolio",
                resume: "Resume",
                about: "About",
            },
        },
    },
});

describe("Nav Bar Tests!", () => {
    it("renders the language select with correct default value", () => {
        const wrapper = mount(NavBar, {
            global: {
                plugins: [i18n],
                stubs: { RouterLink: RouterLinkStub },
            },
        });

        const select = wrapper.get('[data-test="locale"]');
        const options = select.findAll("option");

        expect(select.element.value).toBe("hr");
        expect(options).toHaveLength(2);
        expect(options[0].text()).toBe("Hrvatski");
        expect(options[1].text()).toBe("English");
    });

    it("renders navigation links with the correct default language and language switching", async () => {
        const wrapper = mount(NavBar, {
            global: {
                plugins: [i18n],
                stubs: { RouterLink: RouterLinkStub },
            },
        });

        let portfolioLink = wrapper.get('[data-test="portfolio-link"]');
        let resumeLink = wrapper.get('[data-test="resume-link"]');
        let aboutLink = wrapper.get('[data-test="about-link"]');

        expect(portfolioLink.text()).toBe("Portfelj");
        expect(resumeLink.text()).toBe("Životopis");
        expect(aboutLink.text()).toBe("O nama");

        const select = wrapper.get('[data-test="locale"]');
        await select.setValue("en");

        expect(portfolioLink.text()).toBe("Portfolio");
        expect(resumeLink.text()).toBe("Resume");
        expect(aboutLink.text()).toBe("About");
    });

    it("switches between light and dark themes correctly", async () => {
        const wrapper = mount(NavBar, {
            global: {
                plugins: [i18n],
                stubs: { RouterLink: RouterLinkStub },
            },
        });

        expect(document.documentElement.getAttribute("data-theme")).toBe("light");
        expect(localStorage.darkMode).toBe("disabled");

        const themeIcon = wrapper.findComponent(ThemeIcon);
        expect(themeIcon.props("switchedTheme")).toBe(true);

        await themeIcon.trigger("click");

        expect(document.documentElement.getAttribute("data-theme")).toBe("dark");
        expect(localStorage.darkMode).toBe("enabled");
        expect(themeIcon.props().switchedTheme).toBe(false);
    });
});
