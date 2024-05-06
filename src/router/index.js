import { createWebHistory, createRouter } from "vue-router";
import GuestLayout from "../layouts/GuestLayout.vue";
import NotFound from "../components/NotFound.vue";

const routes = [
  {
    path: "/:pathMatch(.*)*",
    component: NotFound,
    name: "NotFound",
  },
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