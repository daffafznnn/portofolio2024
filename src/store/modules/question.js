import apiClient from "../../apiClient.js";
import { ElMessage } from "element-plus";
import Cookies from "js-cookie";

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

          commit("SET_LOADING", false);
          return response.data;
        } else {
          console.log(error)
        }
        
      } catch (error) {
        commit("SET_LOADING", false);
        ElMessage({
          type: "error",
          message:
           error.response.data.msg,
        });
        console.log(error);
      }
    },
    async sendQuestion({ commit, dispatch }, formContact) {
      try {
        const response = await apiClient.post('/question/send', formContact);
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
            message: error.response.data.msg,
          });
        console.log(error)
      }
    },
async changeStatusQuestion({ commit, dispatch }, { uuid, status }) {
  try {

     const token = Cookies.get("token");

    const response = await apiClient.put(
      `/question/change-status/${uuid}`,
      { status },
      {
        headers: {
          Authorization: `Bearer ${token}`, // Pastikan token telah didefinisikan
        },
      }
    );

    if (response && response.status === 200) {
      dispatch("fetchQuestion");
      ElMessage({
        type: "success",
        message: response.data.msg,
      });
      return true;
    } else {
      // Tangani situasi respons tidak diharapkan
      ElMessage({
        type: "error",
        message: 'Unexpected response: ' + response.status,
      });
      console.error('Unexpected response:', response);
      return false;
    }
  } catch (error) {
    // Tangani kesalahan saat melakukan permintaan
    const errorMessage = error.response && error.response.data ? error.response.data.msg : 'An error occurred';
    ElMessage({
      type: "error",
      message: errorMessage,
    });
    console.error('Error changing status:', error);
    return false;
  }
},
    async answerQuestion({ commit, dispatch }, {uuid, answer}) {
      try {

        const token = Cookies.get("token");
        
        const response = await apiClient.post(`/question/answer/${uuid}`, {answer}, {
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
          message: error.response.data.msg,
        });
        console.log(error);
      }
    }
  },
  mutations: {
    SET_LOADING(state, isLoading) {
      state.isLoading = isLoading;
    },
    SET_QUESTION(state, question) {
      state.question = question;
    },
  },
};

export default question;
