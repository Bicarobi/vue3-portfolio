import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import WorkCardModal from "./WorkCardModal.vue";
import LeftArrowIcon from "../svgs/LeftArrowIcon.vue";
import RightArrowIcon from "../svgs/RightArrowIcon.vue";
import CloseIcon from "../svgs/CloseIcon.vue";
import ExpandIcon from "../svgs/ExpandIcon.vue";
import GitHubIcon from "../svgs/GitHubIcon.vue";

describe("Work Card Modal Tests!", () => {
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
        const wrapper = mount(WorkCardModal, { props });

        expect(wrapper.get('[data-test="number"]').text()).toBe(`1 / ${props.img.length}`);
        expect(wrapper.get('[data-test="linked-title"]').text()).toBe(props.title);
        expect(wrapper.get('[data-test="title-link"]').attributes("href")).toBe(props.link);
        expect(wrapper.get('[data-test="desc"]').text()).toBe(props.desc);
        expect(wrapper.get('[data-test="github-link"]').attributes("href")).toBe(props.githubLink);
    });

    it("changes the image when arrows are clicked", async () => {
        const wrapper = mount(WorkCardModal, { props });

        const leftArrow = wrapper.findComponent(LeftArrowIcon);
        const rightArrow = wrapper.findComponent(RightArrowIcon);

        await rightArrow.trigger("click");
        expect(wrapper.get('[data-test="number"]').text()).toBe(`2 / ${props.img.length}`);

        await leftArrow.trigger("click");
        expect(wrapper.get('[data-test="number"]').text()).toBe(`1 / ${props.img.length}`);
    });

    it("toggles expanded state when expand icon is clicked", async () => {
        const wrapper = mount(WorkCardModal, { props });
        const expandIcon = wrapper.findComponent(ExpandIcon);
        const img = wrapper.get('[data-test="gallery"]');
        const textContainer = wrapper.get('[data-test="text-container"]');

        expect(wrapper.vm.expanded).toBe(false);
        expect(img.classes()).not.toContain("expanded");
        expect(textContainer.attributes("style")).toContain("display: flex");

        await expandIcon.trigger("click");
        expect(wrapper.vm.expanded).toBe(true);
        expect(img.classes()).toContain("expanded");
        expect(textContainer.attributes("style")).toContain("display: none");

        await expandIcon.trigger("click");
        expect(wrapper.vm.expanded).toBe(false);
        expect(img.classes()).not.toContain("expanded");
        expect(textContainer.attributes("style")).toContain("display: flex");
    });

    it("emits closeModal event when close icon is clicked", async () => {
        const wrapper = mount(WorkCardModal, { props });
        const closeIcon = wrapper.findComponent(CloseIcon);

        await closeIcon.trigger("click");
        expect(wrapper.emitted("closeModal")).toBeTruthy();
    });

    it("executes changeImage function correctly", async () => {
        const wrapper = mount(WorkCardModal, { props });

        await wrapper.vm.changeImage(1);
        expect(wrapper.vm.index).toBe(1);

        await wrapper.vm.changeImage(1);
        expect(wrapper.vm.index).toBe(0);

        await wrapper.vm.changeImage(-1);
        expect(wrapper.vm.index).toBe(1);

        await wrapper.vm.changeImage(-1);
        expect(wrapper.vm.index).toBe(0);
    });

    it("executes expandImage function correctly", async () => {
        const wrapper = mount(WorkCardModal, { props });

        await wrapper.vm.expandImage(true);
        expect(wrapper.vm.expanded).toBe(true);

        await wrapper.vm.expandImage(false);
        expect(wrapper.vm.expanded).toBe(false);

        await wrapper.vm.expandImage();
        expect(wrapper.vm.expanded).toBe(true);
    });

    it("calculates image dimensions correctly in getImageSize function", async () => {
        const wrapper = mount(WorkCardModal, { props });

        const imageRefMock = {
            naturalWidth: 800,
            naturalHeight: 600,
        };
        await wrapper.vm.getImageSize(imageRefMock);

        expect(wrapper.vm.imageWidth).toBe(800);
        expect(wrapper.vm.imageHeight).toBe(600);
        expect(wrapper.vm.expandedWide).toBe(true);
    });
});
