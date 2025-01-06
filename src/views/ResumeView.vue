<template>
    <div class="resume-container">
        <div class="current-page-container">
            <div class="current-page">{{ $t("navBar." + route.name) }}</div>
            <hr class="nav-line" />
        </div>
        <div class="content-container">
            <div class="type-container">
                <EducationIcon />
                <div>{{ $t("resumeView.education") }}</div>
            </div>
            <ResumeInfo v-for="info in processedEduInfo" :key="info.title" :title="info.title" :time="info.time" :desc="info.desc" />
        </div>
        <hr class="line" />
        <div class="content-container">
            <div class="type-container">
                <WorkIcon />
                <div>{{ $t("resumeView.experience") }}</div>
            </div>
            <ResumeInfo v-for="info in processedWorkInfo" :key="info.title" :title="info.title" :time="info.time" :desc="info.desc" />
        </div>
        <hr class="line" />
        <div class="content-container">
            <div class="type-container">
                <div>{{ $t("resumeView.skills.mySkills") }}</div>
            </div>
            <div class="resume-progress-bar-container">
                <ProgressBar v-for="skill in processedSkills" :key="skill.type" :type="skill.type" :percentage="skill.percentage" :skills="skill.skills" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";

import ResumeInfo from "../components/resume-info/ResumeInfo.vue";
import ProgressBar from "../components/ProgressBar.vue";

import EducationIcon from "../components/svgs/EducationIcon.vue";
import WorkIcon from "../components/svgs/WorkIcon.vue";

const route = useRoute();
const { t } = useI18n({});

const processedEduInfo = computed(() => {
    const eduInfo = [
        { title: t("resumeView.eduInfo.info1.title"), time: t("resumeView.eduInfo.info1.time"), desc: t("resumeView.eduInfo.info1.desc") },
        { title: t("resumeView.eduInfo.info2.title"), time: t("resumeView.eduInfo.info2.time"), desc: t("resumeView.eduInfo.info2.desc") },
        { title: t("resumeView.eduInfo.info3.title"), time: t("resumeView.eduInfo.info3.time"), desc: t("resumeView.eduInfo.info3.desc") },
    ];
    return eduInfo;
});

const processedWorkInfo = computed(() => {
    const workInfo = [{ title: t("resumeView.workInfo.info1.title"), time: t("resumeView.workInfo.info1.time"), desc: t("resumeView.workInfo.info1.desc") }];
    return workInfo;
});

const processedSkills = computed(() => {
    const skills = [
        { type: t("resumeView.skills.type.webDev"), percentage: "90", skills: ["HTML", "CSS", "Javascript", "Vue.js", "Angular", "Nest.js", "PHP"] },
        { type: t("resumeView.skills.type.webDesign"), percentage: "80", skills: ["Adobe Illustrator", "Figma", "WebFlow"] },
        { type: t("resumeView.skills.type.design3D"), percentage: "80", skills: ["Blender", "Autodesk Maya", "Adobe Substance Painter"] },
        { type: t("resumeView.skills.type.graphicDesign"), percentage: "70", skills: ["Adobe Photoshop", "Adobe Illustrator"] },
        { type: t("resumeView.skills.type.printing3D"), percentage: "70", skills: ["FDM", "SLA", "Cura Maker", "Lychee Slicer"] },
        { type: t("resumeView.skills.type.videoEditing"), percentage: "70", skills: ["DaVinci Resolve", "Adobe Premiere Pro, Adobe After Effects"] },
        { type: t("resumeView.skills.type.photo"), percentage: "60", skills: ["Adobe Lightroom", "Adobe Photoshop"] },
    ];
    return skills;
});
</script>
