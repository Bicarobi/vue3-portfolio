import { createApp, reactive } from "vue";
import App from "./App.vue";
import router from "./router";

import "@/styles/index.css";
import i18n from "./i18n";

const app = createApp(App);

app.config.globalProperties.$myGlobalVariable = reactive({
    windowWidth: null,
    mobileWindowWidth: 700,
});

app.use(router).use(i18n).mount("#app");
