import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from "./store/index";
import "./style.css";
import axios from "axios";
import i18n from "./i18n.js"; // Impor konfigurasi v18n

axios.defaults.withCredentials = true;
axios.defaults.baseURL = "https://server-daffafznnn.vercel.app";
axios.interceptors.request.use(
  (config) => {
    // Ambil token dari localStorage
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    // Tangani kesalahan pada permintaan
    return Promise.reject(error);
  }
);
const app = createApp(App);
app.use(i18n); // Gunakan v18n
app.use(store);
app.use(router).mount("#app");
