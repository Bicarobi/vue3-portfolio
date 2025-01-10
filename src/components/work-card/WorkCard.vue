<template>
    <div class="work-card-container">
        <div class="desc-container" @mouseenter="showDesc(true)" @mouseleave="showDesc(false)">
            <img id="thumbnail" :src="'/assets/' + img[0]" :style="{ objectFit: ['web-dev', 'web-design', 'app-dev', 'app-design'].includes(filter) ? 'contain' : 'cover' }" />

            <div class="desc" :style="isDescShown ? 'opacity: 1' : 'opacity: 0'">
                {{ desc }}
            </div>
        </div>
        <div class="text-container">
            <div class="title">{{ title }}</div>
            <div class="type">{{ type }}</div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
    title: String,
    type: String,
    desc: String,
    img: Array,
    link: String,
    githubLink: { type: String, default: null },
    filter: String,
});

const isDescShown = ref(false);

const showDesc = (value) => {
    isDescShown.value = value;
};
</script>
