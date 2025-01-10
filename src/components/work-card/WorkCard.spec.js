import { mount } from "@vue/test-utils";
import { describe, it, expect, vi } from "vitest";
import WorkCard from "./WorkCard.vue";

vi.mock("@/assets/placeholder.png", () => "/mocked-placeholder.png");

describe("Work Card Tests!", () => {
    const props = {
        title: "Sample Title",
        type: "Sample Type",
        desc: "Sample Description",
        img: ["placeholder.png", "placeholder.png"],
        link: "https://example.com",
        githubLink: "https://github.com/example",
        filter: "web-design",
    };

    it("renders props correctly", () => {
        const wrapper = mount(WorkCard, { props });

        expect(wrapper.find(".title").text()).toBe(props.title);
        expect(wrapper.find(".type").text()).toBe(props.type);
        expect(wrapper.find(".desc").text()).toBe(props.desc);
    });

    it("toggles desc visibility on click and hover", async () => {
        const wrapper = mount(WorkCard, { props });

        const descContainer = wrapper.find(".desc-container");
        const desc = wrapper.find(".desc");

        // Initial state
        expect(desc.attributes("style")).toContain("opacity: 0");

        // Simulate hover
        await descContainer.trigger("mouseenter");
        expect(desc.attributes("style")).toContain("opacity: 1");

        await descContainer.trigger("mouseleave");
        expect(desc.attributes("style")).toContain("opacity: 0");

        // Simulate click
        await descContainer.trigger("click");
        expect(desc.attributes("style")).toContain("opacity: 1");

        await descContainer.trigger("click");
        expect(desc.attributes("style")).toContain("opacity: 0");
    });

    it("handles image navigation correctly", async () => {
        const wrapper = mount(WorkCard, { props });

        const leftArrow = wrapper.findComponent({ name: "LeftArrowIcon" });
        const rightArrow = wrapper.findComponent({ name: "RightArrowIcon" });
        const img = wrapper.find("img");

        // Initial image
        expect(img.attributes("src")).toContain("/mocked-placeholder.png");

        // Navigate to next image
        await rightArrow.trigger("click");
        expect(img.attributes("src")).toContain("/mocked-placeholder.png");

        // Navigate back to first image
        await leftArrow.trigger("click");
        expect(img.attributes("src")).toContain("/mocked-placeholder.png");
    });

    it("expands and shrinks the image", async () => {
        const wrapper = mount(WorkCard, { props });

        const expandIcon = wrapper.findComponent({ name: "ExpandIcon" });

        const descContainer = wrapper.find(".desc-container");
        await descContainer.trigger("click");

        const img = wrapper.find("#gallery");

        // Initial state
        expect(img.classes()).not.toContain("expanded");

        // Expand image
        await expandIcon.trigger("click");
        expect(img.classes()).toContain("expanded");

        // Shrink image
        await expandIcon.trigger("click");
        expect(img.classes()).not.toContain("expanded");
    });

    it("handles modal visibility", async () => {
        const wrapper = mount(WorkCard, { props });

        const descContainer = wrapper.find(".desc-container");
        const modal = wrapper.find(".modal");

        // Initial state
        expect(modal.classes()).toContain("invisible");

        // Show modal
        await descContainer.trigger("click");
        expect(modal.classes()).not.toContain("invisible");

        // Close modal
        const closeIcon = wrapper.findComponent({ name: "CloseIcon" });
        await closeIcon.trigger("click");
        expect(modal.classes()).toContain("invisible");
    });

    it("renders links correctly", () => {
        const wrapper = mount(WorkCard, { props });

        const link = wrapper.find('a[href="https://example.com"]');
        const githubLink = wrapper.find('a[href="https://github.com/example"]');

        expect(link.exists()).toBe(true);
        expect(githubLink.exists()).toBe(true);
    });
});
