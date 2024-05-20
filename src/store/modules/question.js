import apiClient from "../../apiClient.js";
import { ElMessage } from "element-plus";

const question = {
  namespaced: true,
  state: {
    question: [],
    loading: false,
  },
  getters: {
    isLoading: (state) => state.loading,
    getQuestion: (state) => state.question,
  },
  actions: {
    async fetchQuestion({ commit }) {
      try {
        commit("SET_LOADING", true);
        const response = await apiClient.get("/question");
        if (response.status === 200) {
          commit("SET_QUESTION", response.data.data);
        } else {
          console.error("Fetch question error:", response);
        }
      } catch (error) {
        ElMessage({
          type: "error",
          message: error.response?.data?.msg || "Error fetching questions",
        });
        console.error(error);
      } finally {
        commit("SET_LOADING", false);
      }
    },
    async sendQuestion({ dispatch }, formContact) {
      try {
        const response = await apiClient.post("/question/send", formContact);
        if (response.status === 201) {
          dispatch("fetchQuestion");
          ElMessage({
            type: "success",
            message: response.data.msg,
          });
          return true;
        }
      } catch (error) {
        ElMessage({
          type: "error",
          message: error.response?.data?.msg || "Error sending question",
        });
        console.error(error);
        return false;
      }
    },
    async changeStatusQuestion({ dispatch }, { uuid, status }) {
      try {
        const token = localStorage.getItem("token");
        const response = await apiClient.put(
          `/question/change-status/${uuid}`,
          { status },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (response.status === 200) {
          dispatch("fetchQuestion");
          ElMessage({
            type: "success",
            message: response.data.msg,
          });
          return true;
        } else {
          ElMessage({
            type: "error",
            message: "Unexpected response: " + response.status,
          });
          console.error("Unexpected response:", response);
          return false;
        }
      } catch (error) {
        const errorMessage = error.response?.data?.msg || "An error occurred";
        ElMessage({
          type: "error",
          message: errorMessage,
        });
        console.error("Error changing status:", error);
        return false;
      }
    },
    async answerQuestion({ dispatch }, { uuid, answer }) {
      try {
        const token = localStorage.getItem("token");
        const response = await apiClient.post(
          `/question/answer/${uuid}`,
          { answer },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (response.status === 200) {
          dispatch("fetchQuestion");
          ElMessage({
            type: "success",
            message: response.data.msg,
          });
          return true;
        }
      } catch (error) {
        ElMessage({
          type: "error",
          message: error.response?.data?.msg || "Error answering question",
        });
        console.error(error);
        return false;
      }
    },
    async deleteQuestion({ dispatch }, uuid) {
      try {
        const token = localStorage.getItem("token");
        const response = await apiClient.delete(`/question/delete/${uuid}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.status === 200) {
          dispatch("fetchQuestion");
          ElMessage({
            type: "success",
            message: response.data.msg,
          });
          return true;
        }
      } catch (error) {
        ElMessage({
          type: "error",
          message: error.response?.data?.msg || "Error deleting question",
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
    SET_QUESTION(state, question) {
      state.question = question;
    },
  },
};

export default question;