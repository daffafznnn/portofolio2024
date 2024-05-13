import axios from "axios";
import { ElMessage } from "element-plus";
import Cookies from "js-cookie";

const auth = {
  namespaced: true,
  state: {
    user: [],
  },
  getters: {
    isLoading: (state) => state.Loading,
    isAuthenticated: () =>
      !!Cookies.get("token") && Cookies.get("token") !== "",
  },
  actions: {
    async login({ commit }, credentials) {
      try {
        commit("SET_LOADING", true);

        const response = await axios.post("/auth/login", credentials);

        const user = response.data;

        // Simpan token di cookie localStorage
        Cookies.set("token", user.accessToken);

        commit("SET_USER", user.data);

        ElMessage({
          type: "success",
          message: "Login success!",
        });

        commit("SET_LOADING", false);

        return true;
      } catch (error) {
        commit("SET_LOADING", false);
        const errorMessage = error.response.data.msg;
        ElMessage({
          type: "error",
          message: "Login gagal: " + errorMessage,
        });

        return false;
      }
    },
    async logout({ commit }) {
      try {
        // Mendapatkan token dari cookie localStorage
        const token = Cookies.get("token");

        // Hapus token dari cookie localStorage
        Cookies.remove("token");

        // Melakukan logout dengan mengirimkan token bearer
        await axios.delete("/auth/logout", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        // Clear state
        commit("SET_USER", []);

        ElMessage({
          type: "success",
          message: "Logout success!",
        });
      } catch (error) {
        ElMessage({
          type: "error",
          message: "Logout failed: " + error.message,
        });
      }
    },
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
    SET_LOADING(state, isLoading) {
      state.isLoading = isLoading;
    },
  },
};

export default auth;
