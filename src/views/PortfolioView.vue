<template>
    <div class="portfolio-container">
        <div class="current-page-container">
            <div class="current-page">{{ $t("navBar." + route.name) }}</div>
            <hr class="nav-line" />
        </div>
        <div class="type-container">
            <router-link :to="{ name: 'portfolio' }" :class="{ 'router-link-exact-active': !$route.params.filter }">{{ $t("portfolioView.skills.all") }}</router-link>
            <router-link :to="{ name: 'portfolio', params: { filter: 'web-dev' } }">{{ $t("portfolioView.skills.webDev") }}</router-link>
            <router-link :to="{ name: 'portfolio', params: { filter: 'app-dev' } }">{{ $t("portfolioView.skills.appDev") }}</router-link>
            <router-link :to="{ name: 'portfolio', params: { filter: 'web-design' } }">{{ $t("portfolioView.skills.webDesign") }}</router-link>
            <router-link :to="{ name: 'portfolio', params: { filter: '3d-design' } }">{{ $t("portfolioView.skills.design3D") }}</router-link>
            <router-link :to="{ name: 'portfolio', params: { filter: 'app-design' } }">{{ $t("portfolioView.skills.appDesign") }}</router-link>
            <router-link :to="{ name: 'portfolio', params: { filter: 'graphic-design' } }">{{ $t("portfolioView.skills.graphicDesign") }}</router-link>
            <router-link :to="{ name: 'portfolio', params: { filter: 'photography' } }">{{ $t("portfolioView.skills.photo") }}</router-link>
        </div>
        <hr class="line" />
        <div class="works-container"><WorkCard v-for="work in filterWorks(processedWorks)" :key="work.title + work.type" :title="work.title" :type="work.type" :desc="work.desc" :img="work.img" :link="work.link" :filter="work.filter" /></div>
    </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";

import WorkCard from "../components/WorkCard.vue";

const route = useRoute();
const { t } = useI18n({});

const filter = computed(() => route.params.filter);

const filterWorks = (processedWorks) => {
    if (filter.value) {
        return processedWorks.filter((work) => work.filter == filter.value);
    }
    return processedWorks;
};

const processedWorks = computed(() => {
    const works = [
        {
            title: t("portfolioView.works.webDev.work3.title"),
            type: t("portfolioView.works.webDev.type"),
            desc: t("portfolioView.works.webDev.work3.desc"),
            img: ["web-dev/work3/web-dev-hdlu-8.png", "web-dev/work3/web-dev-hdlu-7.png", "web-dev/work3/web-dev-hdlu-9.png", "web-dev/work3/web-dev-hdlu-10.png", "web-dev/work3/web-dev-hdlu-11.png", "web-dev/work3/web-dev-hdlu-12.png", "web-dev/work3/web-dev-hdlu-13.png", "web-dev/work3/web-dev-hdlu-14.png", "web-dev/work3/web-dev-hdlu-2.jpg", "web-dev/work3/web-dev-hdlu-1.jpg", "web-dev/work3/web-dev-hdlu-3.jpg", "web-dev/work3/web-dev-hdlu-4.jpg", "web-dev/work3/web-dev-hdlu-5.jpg", "web-dev/work3/web-dev-hdlu-6.jpg"],
            link: "https://hdluvz-no-wp.vercel.app/",
            filter: "web-dev",
        },
        {
            title: t("portfolioView.works.webDev.work1.title"),
            type: t("portfolioView.works.webDev.type"),
            desc: t("portfolioView.works.webDev.work1.desc"),
            img: ["web-dev/work1/web-dev-tasker-1.png", "web-dev/work1/web-dev-tasker-2.png", "web-dev/work1/web-dev-tasker-3.jpeg", "web-dev/work1/web-dev-tasker-4.jpeg"],
            link: "https://tasker-task-management.vercel.app",
            filter: "web-dev",
        },
        {
            title: t("portfolioView.works.webDev.work4.title"),
            type: t("portfolioView.works.webDev.type"),
            desc: t("portfolioView.works.webDev.work4.desc"),
            img: ["web-dev/work4/web-dev-dasher-2.png", "web-dev/work4/web-dev-dasher-1.jpg"],
            link: "",
            filter: "web-dev",
        },
        {
            title: t("portfolioView.works.webDev.work2.title"),
            type: t("portfolioView.works.webDev.type"),
            desc: t("portfolioView.works.webDev.work2.desc"),
            img: ["web-dev/work2/web-dev-musiker-1.png", "web-dev/work2/web-dev-musiker-2.jpg"],
            link: "https://musiker-spotify.vercel.app",
            filter: "web-dev",
        },
        {
            title: t("portfolioView.works.appDev.work1.title"),
            type: t("portfolioView.works.appDev.type"),
            desc: t("portfolioView.works.appDev.work1.desc"),
            img: ["app-dev/work1/app-dev-cordova-ereader-1.png", "app-dev/work1/app-dev-cordova-ereader-2.png", "app-dev/work1/app-dev-cordova-ereader-3.png"],
            link: "https://drive.google.com/file/d/1fsNLheLSPQZ4z9KON3gwHG6qMLEZsqqo/view?usp=sharing",
            filter: "app-dev",
        },
        {
            title: t("portfolioView.works.appDev.work2.title"),
            type: t("portfolioView.works.appDev.type"),
            desc: t("portfolioView.works.appDev.work2.desc"),
            img: ["app-dev/work2/app-dev-snake-3d-1.png", "app-dev/work2/app-dev-snake-3d-2.png"],
            link: "",
            filter: "app-dev",
        },
        {
            title: t("portfolioView.works.webDesign.work1.title"),
            type: t("portfolioView.works.webDesign.type"),
            desc: t("portfolioView.works.webDesign.work1.desc"),
            img: ["web-design/work1/web-design-portfolio-old-2.png", "web-design/work1/web-design-portfolio-old-1.jpeg"],
            link: "https://www.figma.com/proto/r67ggDZjAd5pDfe3gj3tdh/Portfolio-Dizajn?node-id=217-9&starting-point-node-id=217%3A9&scaling=scale-down-width&mode=design&t=QHplDNZBdXqlstwg-1",
            filter: "web-design",
        },
        {
            title: t("portfolioView.works.webDesign.work2.title"),
            type: t("portfolioView.works.webDesign.type"),
            desc: t("portfolioView.works.webDesign.work2.desc"),
            img: ["web-design/work2/web-design-dont-waste-donate-2.png", "web-design/work2/web-design-dont-waste-donate-1.jpeg"],
            link: "https://www.figma.com/proto/H15igXIS6OTLH5uDNd5QLd/don't-waste.-donate.?type=design&node-id=43-70&t=N2eKzCsgBaa9YaQC-1&scaling=min-zoom&page-id=1%3A3&starting-point-node-id=43%3A70&mode=design",
            filter: "web-design",
        },
        {
            title: t("portfolioView.works.webDesign.work3.title"),
            type: t("portfolioView.works.webDesign.type"),
            desc: t("portfolioView.works.webDesign.work3.desc"),
            img: ["web-design/work3/web-design-wag-1.png"],
            link: "https://www.figma.com/proto/AWytQoAax4V6SAdDQ7Y6U1/wag-landing-page?node-id=24-113&starting-point-node-id=24%3A113&mode=design&t=pf8cP3W0RVibYDi2-1",
            filter: "web-design",
        },
        {
            title: t("portfolioView.works.appDesign.work1.title"),
            type: t("portfolioView.works.appDesign.type"),
            desc: t("portfolioView.works.appDesign.work1.desc"),
            img: ["app-design/work1/app-design-wag-2.png", "app-design/work1/app-design-wag-3.png", "app-design/work1/app-design-wag-4.png", "app-design/work1/app-design-wag-5.png", "app-design/work1/app-design-wag-6.png", "app-design/work1/app-design-wag-1.jpeg"],
            link: "https://www.figma.com/file/paSSJxOVThrk3yc3A9DGKz/wag?type=design&node-id=0%3A1&mode=design&t=SSjheJrnJxQ9Cn5H-1",
            filter: "app-design",
        },
        {
            title: t("portfolioView.works.appDesign.work2.title"),
            type: t("portfolioView.works.appDesign.type"),
            desc: t("portfolioView.works.appDesign.work2.desc"),
            img: ["app-design/work2/app-design-unin-setnja-2.png", "app-design/work2/app-design-unin-setnja-3.png", "app-design/work2/app-design-unin-setnja-4.png", "app-design/work2/app-design-unin-setnja-5.png", "app-design/work2/app-design-unin-setnja-1.jpeg"],
            link: "https://www.figma.com/proto/ayfe5znOiy90VDe1UOPu1O/UNIN-%C5%A0etnja-2.0?type=design&node-id=42-9&t=tKjxPb6nPsT9pY3t-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=42%3A9&show-proto-sidebar=1&mode=design",
            filter: "app-design",
        },
        {
            title: t("portfolioView.works.appDesign.work3.title"),
            type: t("portfolioView.works.appDesign.type"),
            desc: t("portfolioView.works.appDesign.work3.desc"),
            img: ["app-design/work3/app-design-ecocompass-2.png", "app-design/work3/app-design-ecocompass-3.png", "app-design/work3/app-design-ecocompass-4.png", "app-design/work3/app-design-ecocompass-1.jpeg"],
            link: "https://www.figma.com/proto/pZVBU3tLHZRxUvpvkwuBBk/EcoCompass?type=design&node-id=172-544&t=0Lb399gH5R8Cn8zK-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=175%3A561&show-proto-sidebar=1&mode=design",
            filter: "app-design",
        },
        {
            title: t("portfolioView.works.design3D.work5.title"),
            type: t("portfolioView.works.design3D.type"),
            desc: t("portfolioView.works.design3D.work5.desc"),
            img: [
                "design-3d/work5/design-3d-house-1.jpg",
                "design-3d/work5/design-3d-house-2.jpg",
                "design-3d/work5/design-3d-house-3.jpg",
                "design-3d/work5/design-3d-house-4.jpg",
                "design-3d/work5/design-3d-house-5.jpg",
                "design-3d/work5/design-3d-house-6.jpg",
                "design-3d/work5/design-3d-house-7.jpg",
                "design-3d/work5/design-3d-house-8.jpg",
                "design-3d/work5/design-3d-house-9.jpg",
                "design-3d/work5/design-3d-house-10.jpg",
                "design-3d/work5/design-3d-house-11.jpg",
                "design-3d/work5/design-3d-house-12.jpg",
                "design-3d/work5/design-3d-house-13.jpg",
                "design-3d/work5/design-3d-house-14.jpg",
                "design-3d/work5/design-3d-house-15.jpg",
                "design-3d/work5/design-3d-house-16.jpg",
            ],
            link: "",
            filter: "3d-design",
        },
        {
            title: t("portfolioView.works.design3D.work3.title"),
            type: t("portfolioView.works.design3D.type"),
            desc: t("portfolioView.works.design3D.work3.desc"),
            img: ["design-3d/work3/design-3d-apartment-1.jpg", "design-3d/work3/design-3d-apartment-2.jpg", "design-3d/work3/design-3d-apartment-3.jpg", "design-3d/work3/design-3d-apartment-4.jpg", "design-3d/work3/design-3d-apartment-5.jpg", "design-3d/work3/design-3d-apartment-6.jpg", "design-3d/work3/design-3d-apartment-7.jpg", "design-3d/work3/design-3d-apartment-8.jpg", "design-3d/work3/design-3d-apartment-9.jpg", "design-3d/work3/design-3d-apartment-10.jpg", "design-3d/work3/design-3d-apartment-11.jpg"],
            link: "",
            filter: "3d-design",
        },
        {
            title: t("portfolioView.works.design3D.work8.title"),
            type: t("portfolioView.works.design3D.type"),
            desc: t("portfolioView.works.design3D.work8.desc"),
            img: ["design-3d/work8/design-3d-house3-1.jpg", "design-3d/work8/design-3d-house3-2.jpg", "design-3d/work8/design-3d-house3-3.jpg", "design-3d/work8/design-3d-house3-4.jpg", "design-3d/work8/design-3d-house3-5.jpg", "design-3d/work8/design-3d-house3-6.jpg"],
            link: "",
            filter: "3d-design",
        },
        {
            title: t("portfolioView.works.design3D.work7.title"),
            type: t("portfolioView.works.design3D.type"),
            desc: t("portfolioView.works.design3D.work7.desc"),
            img: ["design-3d/work7/design-3d-house2-1.jpg", "design-3d/work7/design-3d-house2-2.jpg", "design-3d/work7/design-3d-house2-3.jpg", "design-3d/work7/design-3d-house2-4.jpg", "design-3d/work7/design-3d-house2-5.jpg", "design-3d/work7/design-3d-house2-6.jpg", "design-3d/work7/design-3d-house2-7.jpg", "design-3d/work7/design-3d-house2-8.jpg", "design-3d/work7/design-3d-house2-9.jpg"],
            link: "",
            filter: "3d-design",
        },
        {
            title: t("portfolioView.works.design3D.work9.title"),
            type: t("portfolioView.works.design3D.type"),
            desc: t("portfolioView.works.design3D.work9.desc"),
            img: [
                "design-3d/work9/design-3d-autoschool-1.png",
                "design-3d/work9/design-3d-autoschool-2.png",
                "design-3d/work9/design-3d-autoschool-3.png",
                "design-3d/work9/design-3d-autoschool-4.png",
                "design-3d/work9/design-3d-autoschool-5.png",
                "design-3d/work9/design-3d-autoschool-6.png",
                "design-3d/work9/design-3d-autoschool-7.png",
                "design-3d/work9/design-3d-autoschool-8.png",
                "design-3d/work9/design-3d-autoschool-9.png",
                "design-3d/work9/design-3d-autoschool-10.png",
                "design-3d/work9/design-3d-autoschool-11.png",
                "design-3d/work9/design-3d-autoschool-12.png",
                "design-3d/work9/design-3d-autoschool-13.png",
                "design-3d/work9/design-3d-autoschool-14.png",
                "design-3d/work9/design-3d-autoschool-15.png",
                "design-3d/work9/design-3d-autoschool-16.png",
                "design-3d/work9/design-3d-autoschool-17.png",
                "design-3d/work9/design-3d-autoschool-18.png",
                "design-3d/work9/design-3d-autoschool-19.png",
            ],
            link: "https://play.google.com/store/apps/details?id=com.prolink.autoskola&hl=hr",
            filter: "3d-design",
        },
        {
            title: t("portfolioView.works.design3D.work1.title"),
            type: t("portfolioView.works.design3D.type"),
            desc: t("portfolioView.works.design3D.work1.desc"),
            img: ["design-3d/work1/design-3d-bathroom.png"],
            link: "",
            filter: "3d-design",
        },
        {
            title: t("portfolioView.works.design3D.work2.title"),
            type: t("portfolioView.works.design3D.type"),
            desc: t("portfolioView.works.design3D.work2.desc"),
            img: ["design-3d/work2/design-3d-bathroom2.jpg"],
            link: "",
            filter: "3d-design",
        },
        {
            title: t("portfolioView.works.design3D.work4.title"),
            type: t("portfolioView.works.design3D.type"),
            desc: t("portfolioView.works.design3D.work4.desc"),
            img: ["design-3d/work4/design-3d-building-1.jpg", "design-3d/work4/design-3d-building-2.jpg"],
            link: "",
            filter: "3d-design",
        },
        {
            title: t("portfolioView.works.design3D.work6.title"),
            type: t("portfolioView.works.design3D.type"),
            desc: t("portfolioView.works.design3D.work6.desc"),
            img: ["design-3d/work6/design-3d-lesnina-1.jpg", "design-3d/work6/design-3d-lesnina-2.jpg", "design-3d/work6/design-3d-lesnina-3.jpg", "design-3d/work6/design-3d-lesnina-4.jpg", "design-3d/work6/design-3d-lesnina-5.jpg", "design-3d/work6/design-3d-lesnina-6.jpg"],
            link: "",
            filter: "3d-design",
        },
        /* {
					title: t("portfolioView.works.graphicDesign.work1.title"),
					type: t("portfolioView.works.graphicDesign.type"),
					desc: t("portfolioView.works.graphicDesign.work1.desc"),
					img: [
						"graphic-design/work1/graphic-design-dont-waste-donate-1.jpg",
						"graphic-design/work1/graphic-design-dont-waste-donate-2.jpg",
						"graphic-design/work1/graphic-design-dont-waste-donate-3.jpg",
						"graphic-design/work1/graphic-design-dont-waste-donate-4.jpg",
					],
					link: "",
					filter: "graphic-design",
				}, */
        {
            title: t("portfolioView.works.graphicDesign.work3.title"),
            type: t("portfolioView.works.graphicDesign.type"),
            desc: t("portfolioView.works.graphicDesign.work3.desc"),
            img: ["graphic-design/work3/graphic-design-about-me-1.jpg", "graphic-design/work3/graphic-design-about-me-2.jpg"],
            link: "",
            filter: "graphic-design",
        },
        {
            title: t("portfolioView.works.graphicDesign.work4.title"),
            type: t("portfolioView.works.graphicDesign.type"),
            desc: t("portfolioView.works.graphicDesign.work4.desc"),
            img: ["graphic-design/work4/graphic-design-mt-fuji-1.jpg", "graphic-design/work4/graphic-design-mt-fuji-2.jpg", "graphic-design/work4/graphic-design-mt-fuji-3.jpg"],
            link: "",
            filter: "graphic-design",
        },
        {
            title: t("portfolioView.works.graphicDesign.work2.title"),
            type: t("portfolioView.works.graphicDesign.type"),
            desc: t("portfolioView.works.graphicDesign.work2.desc"),
            img: ["graphic-design/work2/graphic-design-wake-up-1.jpg", "graphic-design/work2/graphic-design-wake-up-2.jpg", "graphic-design/work2/graphic-design-wake-up-3.jpg"],
            link: "",
            filter: "graphic-design",
        },
        {
            title: t("portfolioView.works.photo.work1.title"),
            type: t("portfolioView.works.photo.type"),
            desc: t("portfolioView.works.photo.work1.desc"),
            img: ["photography/work1/photography-the-archive-1.jpg", "photography/work1/photography-the-archive-2.jpg", "photography/work1/photography-the-archive-3.jpg", "photography/work1/photography-the-archive-4.jpg", "photography/work1/photography-the-archive-5.jpg", "photography/work1/photography-the-archive-6.jpg", "photography/work1/photography-the-archive-7.jpg", "photography/work1/photography-the-archive-8.jpg", "photography/work1/photography-the-archive-9.jpg", "photography/work1/photography-the-archive-10.jpg", "photography/work1/photography-the-archive-11.jpg"],
            link: "https://drive.google.com/file/d/12bRp6r2BM2N6nLKgskmuQQDdTB_V5h8V/view?usp=sharing",
            filter: "photography",
        },
    ];

    return works;
});
</script>
