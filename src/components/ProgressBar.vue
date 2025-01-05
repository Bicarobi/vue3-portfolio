<template>
    <div class="progress-bar-container">
        <div class="text-container">
            <div>{{ type }}</div>
            <div style="color: #727272">{{ percentage }}%</div>
        </div>
        <div class="bar-outline">
            <div class="bar-fill" :style="{ width: percentage + '%' }"></div>
        </div>
        <div class="tag-container">
            <div class="tag" v-for="skill in skills" :key="skill">{{ skill }}</div>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
    type: String,
    percentage: String,
    skills: Array,
});
</script>
