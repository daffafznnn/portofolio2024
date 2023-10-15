import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import "./style.css";

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import 'sweetalert2/dist/sweetalert2.js';

const app = createApp(App);
app.use(VueSweetalert2);
app.use(store);
app.use(App).mount('#app')

