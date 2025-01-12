<template>
    <NavBar />
    <div class="grid-container">
        <div class="grid-left-side">
            <Profile />
        </div>
        <div class="grid-right-side">
            <router-view />
        </div>
    </div>
</template>

<script setup>
import Profile from "./components/profile/Profile.vue";
import NavBar from "./components/nav-bar/NavBar.vue";
</script>
