import apiClient from "../../utils/apiClient.js";
import { ElMessage } from "element-plus";

const categories = {
  namespaced: true,
  state: {
    categories: [],
    loading: false,
  },
  getters: {
    getCategories: (state) => state.categories,
    isLoading: (state) => state.loading,
  },
  actions: {
    async fetchCategories({ commit }) {
      try {
        commit("SET_LOADING", true);

        const response = await apiClient.get("/categories");
        if (response.status === 200) {
          commit("SET_CATEGORIES", response.data.data);
        }
        return response.data;
      } catch (error) {
        ElMessage({
          type: "error",
          message: error.response?.data?.msg || "Error fetching projects",
        });
        console.error(error);
      } finally {
        commit("SET_LOADING", false);
      }
    },
  },
  mutations: {
    SET_LOADING(state, isLoading) {
      state.loading = isLoading;
    },
    SET_CATEGORIES(state, categories) {
      state.categories = categories;
    },
  },
};
export default categories;