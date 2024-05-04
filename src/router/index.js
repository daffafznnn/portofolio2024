import { createWebHistory, createRouter } from "vue-router";
import GuestLayout from "../layouts/GuestLayout.vue";

const routes = [
  {
    path: "/",
    component: GuestLayout,
    name: "GuestLayout",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});


export default router;