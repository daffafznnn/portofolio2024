import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from "./store/index";
import "./style.css";
import axios from "axios";
import i18n from "./i18n.js";
import ElementPlus from "element-plus";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = "https://server-daffafznnn.vercel.app";

const app = createApp(App);
app.use(i18n);
app.use(store);
app.use(ElementPlus);
app.use(router).mount("#app");
