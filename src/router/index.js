import { createRouter, createWebHistory } from "vue-router";
import AboutView from "../views/about-view/AboutView.vue";
import ResumeView from "../views/ResumeView.vue";
import PortfolioView from "../views/PortfolioView.vue";
import WelcomeView from "../views/WelcomeView.vue";

const routes = [
    {
        path: "/",
        name: "welcome",
        component: WelcomeView,
    },
    {
        path: "/about",
        name: "about",
        component: AboutView,
    },
    {
        path: "/resume",
        name: "resume",
        component: ResumeView,
    },
    {
        path: "/portfolio/:filter?",
        name: "portfolio",
        component: PortfolioView,
        props: true,
    },
    /* {
		path: "/contact",
		name: "contact",
		component: ContactView,
	}, */
    {
        path: "/:catchAll(.*)*",
        name: "welcome",
        component: WelcomeView,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
