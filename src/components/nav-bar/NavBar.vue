<template>
    <div class="nav-grid-container">
        <div class="nav-grid-left-side">
            <router-link :to="{ name: 'portfolio' }" data-test="portfolio-link">{{ $t("navBar.portfolio") }}</router-link>
            <router-link :to="{ name: 'resume' }" data-test="resume-link">{{ $t("navBar.resume") }}</router-link>
            <router-link :to="{ name: 'about' }" data-test="about-link">{{ $t("navBar.about") }}</router-link>
        </div>
        <div class="nav-grid-right-side">
            <div class="locale-changer">
                <select v-model="$i18n.locale" data-test="locale">
                    <option selected value="hr">Hrvatski</option>
                    <option value="en">English</option>
                </select>
            </div>
            <div class="theme-switch-container">
                <ThemeIcon :switchedTheme="switchedTheme" @click="switchTheme" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onBeforeMount } from "vue";
import ThemeIcon from "../svgs/ThemeIcon.vue";

const switchedTheme = ref(false);
const themeIcon = ref("sun");

const switchTheme = () => {
    if (switchedTheme.value) {
        document.documentElement.setAttribute("data-theme", "dark");
        themeIcon.value = "moon";
        localStorage.darkMode = "enabled";
    } else {
        document.documentElement.setAttribute("data-theme", "light");
        themeIcon.value = "sun";
        localStorage.darkMode = "disabled";
    }
    switchedTheme.value = !switchedTheme.value;
};

onBeforeMount(() => {
    switchedTheme.value = localStorage.darkMode === "enabled";
    switchTheme();
});
</script>
