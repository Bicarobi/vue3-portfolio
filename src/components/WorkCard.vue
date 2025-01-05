<template>
    <div class="work-card-container">
        <div class="desc-container" @click="showDesc(true, false), (expanded = false)" @mouseenter="showDesc(false, true)" @mouseleave="showDesc(false, false)">
            <img :src="require('../assets/' + img[0])" :style="{ objectFit: ['web-dev', 'web-design', 'app-dev', 'app-design'].includes(filter) ? 'contain' : 'cover' }" />
            <div class="desc" :style="descClicked || descHovered ? 'opacity: 1' : 'opacity: 0'">
                {{ desc }}
            </div>
        </div>
        <div class="text-container">
            <div class="title">{{ title }}</div>
            <div class="type">{{ type }}</div>
        </div>
        <div class="modal" :style="descClicked ? 'display: fixed' : 'display: none'">
            <img
                ref="imageRef"
                :src="require('../assets/' + img[index])"
                :class="{
                    expanded: expanded,
                    'wide-expanded': expandedWide && expanded,
                    'tall-expanded': !expandedWide && expanded,
                    rotate: expanded && expandedWide,
                }"
                @load="getImageSize"
            />
            <div class="text-container" :style="expanded ? 'display: none' : 'display: flex'">
                <div class="number">{{ index + 1 + " / " + img.length }}</div>
                <div>
                    <a v-if="link" :href="link" target="_blank"
                        ><div class="title">{{ title }}</div></a
                    >
                    <div v-else class="title">{{ title }}</div>
                    <a v-if="githubLink" :href="githubLink" target="_blank"><GitHubIcon></GitHubIcon></a>
                </div>
                <div class="desc">{{ desc }}</div>
            </div>
            <LeftArrowIcon @click="changeImage(-1)" /><RightArrowIcon @click="changeImage(1)" /><CloseIcon @click="showDesc(true, false), expandImage(false)" /><ExpandIcon @click="expandImage" :expanded="expanded" />
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

import LeftArrowIcon from "../components/svgs/LeftArrowIcon.vue";
import RightArrowIcon from "../components/svgs/RightArrowIcon.vue";
import CloseIcon from "../components/svgs/CloseIcon.vue";
import ExpandIcon from "../components/svgs/ExpandIcon.vue";
import GitHubIcon from "./svgs/GitHubIcon.vue";

const props = defineProps({
    title: String,
    type: String,
    desc: String,
    img: Array,
    link: String,
    githubLink: { type: String, default: null },
    filter: String,
});

const descClicked = ref(false);
const descHovered = ref(false);
const expanded = ref(false);
const expandedWide = ref(false);
const index = ref(0);
const imageWidth = ref(0);
const imageHeight = ref(0);

const imageRef = ref(null);

function showDesc(clicked, hovered) {
    if (clicked) {
        descClicked.value = !descClicked.value;
        index.value = 0;
    }
    descHovered.value = hovered;
}

function changeImage(dir) {
    index.value += dir;

    if (index.value < 0) {
        index.value = props.img.length - 1;
    } else if (index.value > props.img.length - 1) {
        index.value = 0;
    }
}

function expandImage() {
    expanded.value = !expanded.value;
}

function getImageSize() {
    if (imageRef.value) {
        const img = imageRef.value;
        imageWidth.value = img.naturalWidth;
        imageHeight.value = img.naturalHeight;

        expandedWide.value = imageWidth.value > imageHeight.value;
    }
}

onMounted(() => {
    return { imageRef };
});
</script>
