<template>
    <div class="profile-info-tag-container">
        <div class="grid-container">
            <div class="grid-left-side">
                <a :href="link" data-test="link">
                    <slot></slot>
                </a>
            </div>

            <div class="grid-right-side">
                <a :href="link" data-test="link">
                    <div class="type" data-test="type">{{ type }}</div>
                </a>
                <a :href="link" data-test="link">
                    <div class="description" data-test="desc">{{ description }}</div>
                </a>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
    type: String,
    description: String,
    link: String,
});
</script>
