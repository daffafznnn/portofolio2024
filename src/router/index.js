import { createWebHistory, createRouter } from "vue-router";
import GuestLayout from "../layouts/GuestLayout.vue";
import NotFound from "../components/services/NotFound.vue";
import ServerError from "../components/services/ServerError.vue";
import ServerNotFound from "../components/services/ServerNotFound.vue";
import Login from "../views/auth/Login.vue";
import DashboardLayouts from "../layouts/DashboardLayouts.vue";
import HomeDashboard from "../views/dashboard/HomeDashboard.vue";
import QuestionDashboard from "../views/dashboard/QuestionDashboard.vue";
import ProjectsDashboard from "../views/dashboard/ProjectsDashboard.vue";
import apiClient from "../apiClient.js";

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
    path: "/server-error",
    component: ServerError,
    name: "ServerError",
    meta: {
      title: "Server Error",
    },
  },
  {
    path: "/server-not-found",
    component: ServerNotFound,
    name: "ServerNotFound",
    meta: {
      title: "Server Not Found",
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
    meta: {
      title: "welcome to my portofolio",
    },
  },
  {
    path: "/dashboard/home",
    component: DashboardLayouts,
    name: "DashboardLayouts",
    children: [
      {
        path: "/dashboard/home",
        component: HomeDashboard,
        name: "HomeDashboard",
        meta: {
          title: "dashboard",
        },
      },
      {
        path: "/dashboard/question",
        component: QuestionDashboard,
        name: "QuestionDashboard",
        meta: {
          title: "Question",
        },
      },
      {
        path: "/dashboard/project",
        component: ProjectsDashboard,
        name: "ProjectsDashboard",
        meta: {
          title: "Projects",
        },
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
    next("/login");
  } else if (to.name === "ServerError") {
    // Jika tujuan adalah penanganan kesalahan server
    // Pastikan Anda menambahkan logika untuk memeriksa apakah server benar-benar mengalami kesalahan
    const isServerError = apiClient.defaults.isServerError;
    if (isServerError) {
      next();
    } else {
      // Jika tidak terjadi kesalahan server, arahkan pengguna ke halaman lain
      next("/");
    }
  } else {
    // Continue with navigation
    next();
  }

  // Set document title
  document.title = "daffafznnn - " + (to.meta.title || "Default Text");
});

export default router;