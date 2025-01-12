import { mount } from "@vue/test-utils";
import Portfolio from "@/components/Portfolio.vue";
import { nextTick } from "vue";
import { createI18n } from "vue-i18n";
import { createRouter, createMemoryHistory } from "vue-router";
import WorkCard from "@/components/work-card/WorkCard.vue";
import WorkCardModal from "@/components/work-card-modal/WorkCardModal.vue";

vi.mock("@/stores/filter", () => ({
    useFilterStore: vi.fn(() => ({
        filterValue: null,
        changeFilter: vi.fn(),
    })),
}));

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

const processedWorks = [
    {
        title: "Test Work",
        type: "web-dev",
        desc: "A test description",
        img: ["image1.jpg"],
        link: "https://test.com",
        githubLink: "https://github.com",
        filter: "web-dev",
    },
];

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

describe("Portfolio View Tests!", () => {
    let wrapper;
    beforeEach(async () => {
        router.push("/about");
        await router.isReady();

        wrapper = mount(Portfolio, {
            global: {
                plugins: [router, i18n],
                stubs: {
                    WorkCard: true,
                    WorkCardModal: true,
                },
            },
        });
    });

    it("renders the route name correctly", async () => {
        i18n.global.locale.value = "en";
        await wrapper.vm.$nextTick();

        const route = wrapper.find("[data-test='route']");
        expect(route.text()).toBe("About");
    });

    it("should render current page name correctly from route", async () => {
        wrapper.vm.$route.name = "home"; // simulate a route change
        await nextTick();
        expect(wrapper.find(".current-page").text()).toBe("navBar.home");
    });

    it("should change the language when the language is switched to hr (Croatian)", async () => {
        const { i18n } = useI18n();
        i18n.locale = "hr";

        await nextTick();
        expect(i18n.locale).toBe("hr"); // Confirm that the language has been changed to hr
    });

    it("should pass correct props to WorkCard components", () => {
        const workCardWrapper = mount(WorkCard, {
            props: processedWorks[0],
        });
        expect(workCardWrapper.props().title).toBe("Test Work");
        expect(workCardWrapper.props().type).toBe("web-dev");
        expect(workCardWrapper.props().desc).toBe("A test description");
        expect(workCardWrapper.props().img).toEqual(["image1.jpg"]);
        expect(workCardWrapper.props().link).toBe("https://test.com");
        expect(workCardWrapper.props().githubLink).toBe("https://github.com");
    });

    it("should correctly handle modal opening and closing", async () => {
        await wrapper.setData({ selectedWork: processedWorks[0], isModalVisible: true });
        expect(wrapper.findComponent(WorkCardModal).exists()).toBe(true);

        await wrapper.vm.closeModal();
        await nextTick();
        expect(wrapper.findComponent(WorkCardModal).exists()).toBe(false);
    });

    it("should filter works correctly when the filter is changed", async () => {
        const filterStore = wrapper.vm.filterStore;
        filterStore.changeFilter("app-dev");
        await nextTick();

        expect(wrapper.vm.filterWorks(processedWorks)).toEqual([processedWorks[0]]); // Assuming the test work falls under the 'app-dev' filter
    });
});
