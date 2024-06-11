import apiClient from "../../utils/apiClient.js";
import { ElMessage } from "element-plus";

const settings = {
  namespaced: true,
  state: {},
  getters: {},
  actions: {
    async changePassword({ commit }, formData) {
      try {
        const token = localStorage.getItem("token");

        const response = await apiClient.post(
          "/settings/change-password",
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (response.status === 200) {
          ElMessage({
            type: "success",
            message: response.data.msg,
          });
          return true;
        }
      } catch (error) {
        ElMessage({
          type: "error",
          message: error.response?.data?.msg || "Error change password",
        });
        console.error(error);
        return false;
      }
    },
    async forgotPassword({ commit }, { email }) {
      try {
        const response = await apiClient.post("/settings/forgot-password", {
          email,
        });
        if (response.status === 200) {
          ElMessage({
            type: "success",
            message: response.data.msg,
          });
          return true;
        }
      } catch (error) {
        ElMessage({
          type: "error",
          message: error.response?.data?.msg || "Error forgot password",
        });
        console.error(error);
        return false;
      }
    },
    async verifyCode(
      { commit },
      { email, code, newPassword, confNewPassword }
    ) {
      try {
        const response = await apiClient.post(
          "/settings/verify-code-forgot-pass",
          { email, code, newPassword, confNewPassword }
        );
        if (response.status === 200) {
          ElMessage({
            type: "success",
            message: response.data.msg,
          });
          return true;
        }
      } catch (error) {
        ElMessage({
          type: "error",
          message: error.response?.data?.msg || "Error verify code",
        });
        console.error(error);
        return false;
      }
    },
    async resendCodeAction({ commit }, { email }) {
      try {
        const response = await apiClient.post("/settings/resend-code", {
          email,
        });
        if (response.status === 200) {
          ElMessage({
            type: "success",
            message: response.data.msg,
          });
          return true;
        }
      } catch (error) {
        ElMessage({
          type: "error",
          message: error.response?.data?.msg || "Error send code to email",
        });
        console.error(error);
        return false;
      }
    },
  },
};

export default settings;
