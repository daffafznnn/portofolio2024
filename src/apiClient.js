import axios from "axios";
import router from "./router";

// Buat instance Axios
const apiClient = axios.create({
  baseURL: "https://api-daffafznnn.vercel.app/api/v1",
  // baseURL: "http://localhost:8080/api/v1",
});

// Tambahkan interceptor untuk menangani kesalahan secara global
apiClient.interceptors.response.use(
  (response) => {
    // Reset kondisi server error setelah berhasil mendapatkan respons
    apiClient.defaults.isServerError = false;
    return response;
  },
  (error) => {
    // Tangani kesalahan di sini
    if (error.response) {
      // Tanggapan yang diterima memiliki status di luar kisaran 2xx
      if (error.response.status === 500) {
        console.error("Server error 500:", error.response);
        // Setel kondisi server error menjadi true
        apiClient.defaults.isServerError = true;
        // Arahkan ke halaman penanganan kesalahan server
        router.push({ name: "ServerError" });
      }
      // Anda dapat menambahkan penanganan untuk kode status lain di sini
    } else if (error.request) {
      // Permintaan dikirim tetapi tidak ada respons
      console.error("No response received:", error.request);
      // Setel kondisi server error menjadi true
      apiClient.defaults.isServerError = true;
      // Arahkan ke halaman penanganan kesalahan server
      router.push({ name: "ServerError" });
    } else {
      // Ada kesalahan saat menyiapkan permintaan
      console.error("Error setting up request:", error.message);
    }
    return Promise.reject(error);
  }
);

export default apiClient;
