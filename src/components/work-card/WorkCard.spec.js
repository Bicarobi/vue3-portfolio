import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import WorkCard from "./WorkCard.vue";

describe("Work Card Tests!", () => {
    const props = {
        title: "Sample Title",
        type: "Sample Type",
        desc: "Sample Description",
        img: ["placeholder.png", "profile-placeholder.png"],
        link: "https://example.com",
        githubLink: "https://github.com/example",
        filter: "web-design",
    };

    it("renders props correctly", () => {
        const wrapper = mount(WorkCard, { props });

        expect(wrapper.get('[data-test="title"]').text()).toBe(props.title);
        expect(wrapper.get('[data-test="type"]').text()).toBe(props.type);
        expect(wrapper.get('[data-test="desc"]').text()).toBe(props.desc);
        expect(wrapper.get('[data-test="thumbnail"]').attributes("src")).toBe("/assets/placeholder.png");
    });

    it("applies correct objectFit style based on filter", async () => {
        const wrapper = mount(WorkCard, { props });

        const thumbnail = wrapper.get('[data-test="thumbnail"]');
        expect(thumbnail.attributes("style")).toContain("object-fit: contain");

        await wrapper.setProps({ filter: null });
        expect(thumbnail.attributes("style")).toContain("object-fit: cover");
    });

    it("toggles description visibility on mouse events", async () => {
        const wrapper = mount(WorkCard, { props });

        const descContainer = wrapper.get('[data-test="desc-container"]');
        const desc = wrapper.get('[data-test="desc"]');

        expect(desc.attributes("style")).toContain("opacity: 0");

        await descContainer.trigger("mouseenter");
        expect(desc.attributes("style")).toContain("opacity: 1");

        await descContainer.trigger("mouseleave");
        expect(desc.attributes("style")).toContain("opacity: 0");
    });

    it("sets isDescShown to true when showDesc(true) is called", async () => {
        const wrapper = mount(WorkCard, { props });

        await wrapper.vm.showDesc(true);
        expect(wrapper.vm.isDescShown).toBe(true);

        const desc = wrapper.get('[data-test="desc"]');
        expect(desc.attributes("style")).toContain("opacity: 1");
    });

    it("sets isDescShown to false when showDesc(false) is called", async () => {
        const wrapper = mount(WorkCard, { props });

        await wrapper.vm.showDesc(false);
        expect(wrapper.vm.isDescShown).toBe(false);

        const desc = wrapper.get('[data-test="desc"]');
        expect(desc.attributes("style")).toContain("opacity: 0");
    });
});
