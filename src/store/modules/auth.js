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
    getMe: (state) => state.user,
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
          message: user.msg,
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
    async fetchMe({ commit }) {
      try {
        // Set status loading menjadi true sebelum memuat data
        commit("SET_LOADING", true);

        // Ambil Bearer Token dari Local Storage
        const token = Cookies.get("token");

        const response = await axios.get("/auth/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const user = response.data.data;
        commit("SET_USER", user);

        // Setelah data dimuat, atur status loading menjadi false
        commit("SET_LOADING", false);

        return user;
      } catch (error) {
        console.error("Error fetching user data:", error.message);
        const errorMessage = error.response.data.msg;
        ElMessage({
          type: "error",
          message: "Gagal mengambil data anda: " + errorMessage,
        });
        // Jika terjadi error, tetap set status loading menjadi false
        commit("SET_LOADING", false);

        return false;
      }
    },
    async logout({ commit }) {
      try {
        // Mendapatkan token dari cookie localStorage
        const token = Cookies.get("token");

        // Periksa apakah token ada
        if (!token) {
          throw new Error("Token tidak ditemukan.");
        }

        // Melakukan logout dengan mengirimkan token bearer
        const response = await axios.post(
          "/auth/logout",
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        // Clear state
        commit("SET_USER", []);

        if (response) {
          // Hapus token dari cookie localStorage
          Cookies.remove("token");

          // Redirect ke halaman login
          window.location.href = "/login";

          // Tampilkan pesan sukses
          ElMessage({
            type: "success",
            message: response.data.msg,
          });
        }
        return true;
      } catch (error) {
        ElMessage({
          type: "error",
          message:
            "Logout gagal: " + (error.response?.data.msg || error.message),
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
