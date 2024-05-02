import { createWebHistory, createRouter } from "vue-router";
import GuestLayout from "../layouts/GuestLayout.vue";
import AdminLayout from "../layouts/AdminLayout.vue";
import Login from "../views/Login.vue";
import store from "../store";

const routes = [
  {
    path: "/admin/login",
    name: "Login",
    component: Login,
    meta: {
      title: "login",
    },
    beforeEnter: (to, from, next) => {
      const isAuthenticated = store.getters["auth/isAuthenticated"];
      if (isAuthenticated) {
        // Jika pengguna sudah login, arahkan ke halaman yang sesuai dengan rolenya
        const role = localStorage.getItem("role");
        if (role === "admin") {
          next("/admin/home");
        } else {
          next("/");
        }
      } else {
        // Menampilkan halaman loading selama 1 detik sebelum masuk ke komponen
        setTimeout(() => {
          next();
        }, 1000);
      }
    },
  },
  {
    path: "/",
    component: GuestLayout,
    name: "GuestLayout",
  },
  {
    path: "/admin/dahsboard",
    component: AdminLayout,
    name: "AdminLayout",
    meta: {
        title: "Admin Dashboard",
        requiresLogin: true,
        requiresAdmin: true,
      },
    children:[
        
    ]
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to, from, next) => {
  const isAuthenticated = store.getters["auth/isAuthenticated"];

  if (!isAuthenticated) {
    await store.dispatch("auth/checkTokenExpiration");
  }

  const role = localStorage.getItem("role");

  if (to.meta.requiresLogin && !isAuthenticated) {
    // Redirect to login if the route requires login and the user is not authenticated
    next("/");
  } else if (to.meta.requiresAdmin && role !== "admin") {
    // Redirect to home if the route requires admin but the user is not an admin
    next("/"); 
  } else {
    // Continue with navigation
    next(); 
  }
});


export default router;