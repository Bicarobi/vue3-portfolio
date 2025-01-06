<template>
    <div class="about-card-container">
        <div class="grid-container">
            <div class="grid-left-side">
                <slot></slot>
            </div>
            <div class="grid-right-side">
                <div class="card-type">{{ type }}</div>
                <div class="card-desc">{{ desc }}</div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
    type: String,
    desc: String,
});
</script>
