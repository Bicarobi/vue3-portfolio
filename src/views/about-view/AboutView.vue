<template>
    <div class="about-container">
        <div class="current-page-container">
            <div class="current-page" data-test="route">{{ $t("navBar." + route.name) }}</div>
            <hr class="nav-line" />
        </div>
        <div class="grid-container">
            <div class="grid-left-side">
                <div class="text-container">
                    <div data-test="text-1">
                        {{ $t("aboutView.text1") }}
                    </div>
                    <br />
                    <div data-test="text-2">
                        {{ $t("aboutView.text2") }}
                    </div>
                </div>
            </div>
            <div class="grid-right-side">
                <div class="doing-container">
                    <div class="card-container">
                        <AboutCard v-for="card in processedCards" :key="card.type" :type="card.type" :desc="card.desc">
                            <component :is="card.image" />
                        </AboutCard>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { computed } from "vue";
import { useI18n } from "vue-i18n";

import AboutCard from "@/components/about-card/AboutCard.vue";

import WebDevIcon from "@/components/svgs/WebDevIcon.vue";
import WebDesignIcon from "@/components/svgs/WebDesignIcon.vue";
import GraphicDesignIcon from "@/components/svgs/GraphicDesignIcon.vue";
import Design3DIcon from "@/components/svgs/Design3DIcon.vue";
import PhotoIcon from "@/components/svgs/PhotoIcon.vue";

const route = useRoute();
const { t } = useI18n({});

const processedCards = computed(() => {
    const cards = [
        { type: t("aboutView.skills.webDev.title"), desc: t("aboutView.skills.webDev.desc"), image: WebDevIcon },
        { type: t("aboutView.skills.webDesign.title"), desc: t("aboutView.skills.webDesign.desc"), image: WebDesignIcon },
        { type: t("aboutView.skills.graphicDesign.title"), desc: t("aboutView.skills.graphicDesign.desc"), image: GraphicDesignIcon },
        { type: t("aboutView.skills.design3D.title"), desc: t("aboutView.skills.design3D.desc"), image: Design3DIcon },
        { type: t("aboutView.skills.photo.title"), desc: t("aboutView.skills.photo.desc"), image: PhotoIcon },
    ];

    return cards;
});
</script>
