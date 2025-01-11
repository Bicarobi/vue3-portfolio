<template>
    <div class="modal">
        <LeftArrowIcon @click="changeImage(-1)" />
        <img
            ref="imageRef"
            :src="'/assets/' + img[index]"
            :class="{
                expanded: expanded,
                'wide-expanded': expandedWide && expanded,
                'tall-expanded': !expandedWide && expanded,
                rotate: expanded && expandedWide,
            }"
            @load="getImageSize(imageRef)"
            data-test="gallery"
        />
        <RightArrowIcon @click="changeImage(1)" />

        <div class="text-container" :style="expanded ? 'display: none' : 'display: flex'" data-test="text-container">
            <div class="number" data-test="number">{{ index + 1 + " / " + img.length }}</div>
            <div>
                <a v-if="link" :href="link" target="_blank" data-test="title-link">
                    <div class="title" data-test="linked-title">{{ title }}</div>
                </a>

                <div v-else class="title" data-test="not-linked-title">{{ title }}</div>

                <a v-if="githubLink" :href="githubLink" target="_blank" data-test="github-link">
                    <GitHubIcon />
                </a>
            </div>
            <div class="desc" data-test="desc">{{ desc }}</div>
        </div>
        <CloseIcon @click="$emit('closeModal'), expandImage(false)" />
        <ExpandIcon @click="expandImage()" :expanded="expanded" />
    </div>
</template>

<script setup>
import { ref } from "vue";

import LeftArrowIcon from "../svgs/LeftArrowIcon.vue";
import RightArrowIcon from "../svgs/RightArrowIcon.vue";
import CloseIcon from "../svgs/CloseIcon.vue";
import ExpandIcon from "../svgs/ExpandIcon.vue";
import GitHubIcon from "../svgs/GitHubIcon.vue";

const props = defineProps({
    title: String,
    type: String,
    desc: String,
    img: Array,
    link: String,
    githubLink: { type: String, default: null },
    filter: String,
});

const expanded = ref(false);
const expandedWide = ref(false);
const index = ref(0);
const imageWidth = ref(0);
const imageHeight = ref(0);

const imageRef = ref(null);

function changeImage(dir) {
    index.value += dir;

    if (index.value < 0) {
        index.value = props.img.length - 1;
    } else if (index.value > props.img.length - 1) {
        index.value = 0;
    }
}

function expandImage(value) {
    if (value) {
        expanded.value = value;
    } else {
        expanded.value = !expanded.value;
    }
}

function getImageSize(value) {
    if (value) {
        const img = value;
        imageWidth.value = img.naturalWidth;
        imageHeight.value = img.naturalHeight;

        expandedWide.value = imageWidth.value > imageHeight.value;
    }
}
</script>
