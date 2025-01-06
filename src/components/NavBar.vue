<template>
    <div class="nav-grid-container">
        <div class="nav-grid-left-side">
            <router-link :to="{ name: 'portfolio' }">{{ $t("navBar.portfolio") }}</router-link>
            <router-link :to="{ name: 'resume' }">{{ $t("navBar.resume") }}</router-link>
            <router-link :to="{ name: 'about' }">{{ $t("navBar.about") }}</router-link>
        </div>
        <div class="nav-grid-right-side">
            <div class="locale-changer">
                <select v-model="$i18n.locale">
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
import ThemeIcon from "../components/svgs/ThemeIcon.vue";

const switchedTheme = ref(false);
const themeIcon = ref("moon");

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
    if (localStorage.darkMode === "enabled") {
        switchedTheme.value = true;
        switchTheme();
    } else {
        switchedTheme.value = false;
        switchTheme();
    }
});
</script>
