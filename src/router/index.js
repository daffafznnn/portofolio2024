import { createWebHistory, createRouter } from "vue-router";
import GuestLayout from "../layouts/GuestLayout.vue";
import NotFound from "../components/NotFound.vue";
import Login from "../views/auth/Login.vue";
import DashboardLayouts from "../layouts/DashboardLayouts.vue";
import HomeDashboard from "../views/dashboard/HomeDashboard.vue";

import store from "../store";

const routes = [
  {
    path: "/login",
    component: Login,
    name: "Login",
    meta: {
      title: "Login daffafznnn",
    },
    beforeEnter: (to, from, next) => {
      const isAuthenticated = store.getters["auth/isAuthenticated"];
      if (isAuthenticated) {
        next("/");
      } else {
        // Show loading page for 1 second before entering the component
        setTimeout(() => {
          next();
        }, 1000);
      }
    },
  },
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
  {
    path: "/dashboard",
    component: DashboardLayouts,
    name: "DashboardLayouts",
    children: [
      {
        path: "/dashboard",
        component: HomeDashboard,
        name: "HomeDashboard",
      },
    ],
    meta: { requiresLogin: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to, from, next) => {
  const isAuthenticated = store.getters["auth/isAuthenticated"];

  if (to.meta.requiresLogin && !isAuthenticated) {
    // Redirect to login page if login is required and user is not authenticated
    next("/login");
  }else {
    // Continue with navigation
    next();
  }

  // Set document title
  document.title = "daffafznnn - " + (to.meta.title || "Default Text");
});

export default router;