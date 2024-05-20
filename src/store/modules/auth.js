import apiClient from "../../apiClient.js";
import { ElMessage } from "element-plus";

const auth = {
  namespaced: true,
  state: {
    user: [],
    loading: false,
  },
  getters: {
    isLoading: (state) => state.loading,
    isAuthenticated: () =>
      !!localStorage.getItem("token") && localStorage.getItem("token") !== "",
    getMe: (state) => state.user,
  },
  actions: {
    async login({ commit }, credentials) {
      try {
        commit("SET_LOADING", true);

        const response = await apiClient.post("/auth/login", credentials);

        if (response.status === 200) {
          const user = response.data;

          // Simpan token di localStorage
          localStorage.setItem("token", user.accessToken);

          commit("SET_USER", user.data);

          ElMessage({
            type: "success",
            message: user.msg,
          });

          return true;
        } else {
          console.error("Login error:", response);
          return false;
        }
      } catch (error) {
        const errorMessage = error.response?.data?.msg || "Error during login";
        ElMessage({
          type: "error",
          message: errorMessage,
        });
        console.error("Login error:", error);
        return false;
      } finally {
        commit("SET_LOADING", false);
      }
    },
    async fetchMe({ commit, dispatch }) {
      try {
        commit("SET_LOADING", true);

        // Ambil Bearer Token dari localStorage
        const token = localStorage.getItem("token");

        const response = await apiClient.get("/auth/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.status === 200) {
          const user = response.data.data;
          commit("SET_USER", user);
          return user;
        } else {
          console.error("Fetch me error:", response);
          return null;
        }
      } catch (error) {
        const errorMessage =
          error.response?.data?.msg || "Error fetching user data";
        ElMessage({
          type: "error",
          message: errorMessage,
        });
        console.error("Fetch me error:", error);

        if (error.response?.status === 403) {
          dispatch("logout");
          return null;
        }

        return false;
      } finally {
        commit("SET_LOADING", false);
      }
    },
    async logout({ commit }) {
      try {
        commit("SET_USER", []);

        // Hapus token dari localStorage
        localStorage.removeItem("token");

        window.location.href = "/login";
        return true;
      } catch (error) {
        ElMessage({
          type: "error",
          message: "Logout error",
        });
        console.error("Logout error:", error);
        return false;
      }
    },
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
    SET_LOADING(state, isLoading) {
      state.loading = isLoading;
    },
  },
};

export default auth;