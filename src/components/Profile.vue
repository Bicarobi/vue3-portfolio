<template>
    <div class="profile-container">
        <div class="grid-container">
            <div class="grid-left-side">
                <div class="grid-container">
                    <div class="grid-left-side">
                        <router-link :to="{ name: 'about' }"><img src="/assets/profile-image-4.jpg" /></router-link>
                    </div>
                    <div class="grid-right-side">
                        <div class="name">Robert Cmrečki</div>

                        <div class="tag-container">
                            <router-link :to="{ name: 'portfolio', params: { filter: 'web-dev' } }"
                                ><div class="tag">{{ $t("profile.skills.webDev") }}</div></router-link
                            >
                            <router-link :to="{ name: 'portfolio', params: { filter: 'web-design' } }"
                                ><div class="tag">{{ $t("profile.skills.webDesign") }}</div></router-link
                            >
                            <router-link :to="{ name: 'portfolio', params: { filter: '3d-design' } }"
                                ><div class="tag">{{ $t("profile.skills.design3D") }}</div></router-link
                            >
                            <router-link :to="{ name: 'portfolio', params: { filter: 'graphic-design' } }"
                                ><div class="tag">{{ $t("profile.skills.graphicDesign") }}</div></router-link
                            >
                            <!-- <router-link :to="{ name: 'portfolio', params: { filter: 'photography' } }"><div class="tag">Photographer</div></router-link> -->
                        </div>
                    </div>
                </div>

                <!-- <a class="title" href="https://urn.nsk.hr/urn:nbn:hr:122:388921"><h3>bacc. ing. techn. graph.</h3></a> -->
                <div class="profile-info-container" :style="{ display: openedProfile || $myGlobalVariable.windowWidth > $myGlobalVariable.mobileWindowWidth ? 'flex' : 'none' }">
                    <hr class="line" />

                    <div class="info-container">
                        <ProfileInfoTag v-for="tag in processedTags" :key="tag.type" :type="tag.type" :description="tag.description" :link="tag.link">
                            <component :is="tag.image" />
                        </ProfileInfoTag>
                    </div>
                    <hr class="line" />
                    <div class="social-container">
                        <a href="https://www.linkedin.com/in/robert-cmrecki/" target="_blank"> <LinkedInIcon /></a>
                        <a href="https://github.com/Bicarobi/" target="_blank"> <GitHubIcon /></a>
                        <a href="https://www.instagram.com/ro2tsa/" target="_blank"><InstagramIcon /></a>
                    </div>
                </div>
                <div class="profile-button-container" :style="{ display: $myGlobalVariable.windowWidth <= $myGlobalVariable.mobileWindowWidth ? 'block' : 'none' }">
                    <ProfileButtonIcon @click="openProfile" :openedProfile="openedProfile" />
                </div>
            </div>
            <div class="grid-right-side">
                <hr class="line" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onBeforeMount } from "vue";
import { useI18n } from "vue-i18n";

import ProfileInfoTag from "./profile-info-tag/ProfileInfoTag.vue";
import EmailIcon from "./svgs/EmailIcon.vue";
import PhoneIcon from "./svgs/PhoneIcon.vue";
import LocationIcon from "./svgs/LocationIcon.vue";
import LinkedInIcon from "./svgs/LinkedInIcon.vue";
import GitHubIcon from "./svgs/GitHubIcon.vue";
import InstagramIcon from "./svgs/InstagramIcon.vue";
import ProfileButtonIcon from "./svgs/ProfileButtonIcon.vue";

const { t } = useI18n({});

const openedProfile = ref(true);

const processedTags = computed(() => {
    const tags = [
        { type: "email", description: "cmrecki.robert@&#8203;gmail.com", image: EmailIcon, link: "mailto:cmrecki.robert@gmail.com" },
        { type: "phone", description: "+385 91 211 1165", image: PhoneIcon, link: "tel:0912111165" },
        { type: "location", description: " / Varaždin", image: LocationIcon, link: "https://maps.app.goo.gl/3qw2hEo96L59ebqo9" },
    ];

    return tags.map((tag) => {
        if (tag.type === "email") {
            const parsed = new DOMParser().parseFromString(tag.description, "text/html").body.textContent;
            tag.description = parsed;
        }

        if (tag.type === "phone") {
            tag.type = t("profile.phone");
        }

        if (tag.type === "location") {
            tag.type = t("profile.location");
            tag.description = t("profile.location2") + " / Varaždin";
        }

        return {
            type: tag.type,
            description: tag.description,
            image: tag.image,
            link: tag.link,
        };
    });
});

function openProfile() {
    if (openedProfile.value) {
        localStorage.openedProfile = "enabled";
    } else {
        localStorage.openedProfile = "disabled";
    }
    openedProfile.value = !openedProfile.value;
}

onBeforeMount(() => {
    if (localStorage.openedProfile === "enabled") {
        openedProfile.value = true;
    } else {
        openedProfile.value = false;
    }
    openProfile();
});
</script>
