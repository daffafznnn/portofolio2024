import apiClient from "../../apiClient.js";
import { ElMessage } from "element-plus";
import Cookies from "js-cookie";

const property = {
  namespaced: true,
  state: {
    stats: [
      {
        year: 3,
        achievement: 0,
      },
    ],
    project: [],
    loading: false,
  },
  getters: {
    isLoading: (state) => state.loading,
    getProject: (state) => state.project,
    getStats: (state) => state.stats,
  },
  actions: {
    async fetchProject({ commit }) {
      try {
        commit("SET_LOADING", true);
        const response = await apiClient.get("/projects");

        if (response.status === 200) {
          commit("SET_PROJECT", response.data.data);

          commit("SET_LOADING", false);
          return response.data;
        } else {
          console.log(error);
        }
      } catch (error) {
        commit("SET_LOADING", false);
        ElMessage({
          type: "error",
          message: error.response.data.msg,
        });
        console.log(error);
      }
    },
  },
  mutations: {
    SET_LOADING(state, isLoading) {
      state.isLoading = isLoading;
    },
    SET_PROJECT(state, project) {
      state.project = project;
    },
  },
};

export default property;
