import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from "./store/index";
import "./style.css";
import i18n from "./i18n.js";
import ElementPlus from "element-plus";
import apiClient from "./apiClient.js";
import Cookies from "js-cookie";

const app = createApp(App);

// Inisialisasi cookies dan API client
app.config.globalProperties.$cookies = Cookies;
app.config.globalProperties.$api = apiClient;

app.use(i18n);
app.use(store);
app.use(ElementPlus);
app.use(router).mount("#app");
