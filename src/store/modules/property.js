import apiClient from "../../apiClient.js";
import { ElMessage } from "element-plus";

const property = {
  namespaced: true,
  state: {
    stats: [
      {
        year: 3,
        achievement: 2,
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
        } else {
          console.error("Fetch project error:", response);
        }
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
    async addProject({ dispatch }, formData) {
      try {
        const token = localStorage.getItem("token");
        const response = await apiClient.post("/projects/add", formData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.status === 201) {
          dispatch("fetchProject");
          ElMessage({
            type: "success",
            message: response.data.msg,
          });
          return true;
        }
      } catch (error) {
        ElMessage({
          type: "error",
          message: error.response?.data?.msg || "Error adding project",
        });
        console.error(error);
        return false;
      }
    },
    async updateProject({ dispatch }, { uuid, formData }) {
      try {
        const token = localStorage.getItem("token");
        const response = await apiClient.put(
          `/projects/update/${uuid}`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "multipart/form-data",
            },
          }
        );
        if (response.status === 200) {
          dispatch("fetchProject");
          ElMessage({
            type: "success",
            message: response.data.msg,
          });
          return true;
        }
      } catch (error) {
        ElMessage({
          type: "error",
          message: error.response?.data?.msg || "Error updating project",
        });
        console.error(error);
        return false;
      }
    },
    async deleteProject({ dispatch }, uuid) {
      try {
        const token = localStorage.getItem("token");
        const response = await apiClient.delete(`/projects/delete/${uuid}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.status === 200) {
          dispatch("fetchProject");
          ElMessage({
            type: "success",
            message: response.data.msg,
          });
          return true;
        }
      } catch (error) {
        ElMessage({
          type: "error",
          message: error.response?.data?.msg || "Error deleting project",
        });
        console.error(error);
        return false;
      }
    },
  },
  mutations: {
    SET_LOADING(state, isLoading) {
      state.loading = isLoading;
    },
    SET_PROJECT(state, project) {
      state.project = project;
    },
  },
};

export default property;