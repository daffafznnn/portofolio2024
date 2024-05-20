import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from "./store/index";
import "./style.css";
import i18n from "./i18n.js";
import ElementPlus from "element-plus";
import apiClient from "./apiClient.js";

const app = createApp(App);

app.config.globalProperties.$api = apiClient;

app.use(i18n);
app.use(store);
app.use(ElementPlus);
app.use(router).mount("#app");
