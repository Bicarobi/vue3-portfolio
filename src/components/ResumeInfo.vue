<template>
    <div class="resume-info-container">
        <div class="resume-info-title">{{ title }}</div>
        <div class="resume-info-time">{{ time }}</div>
        <div class="resume-info-desc">{{ desc }}</div>
    </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
    title: String,
    time: String,
    desc: String,
});
</script>
