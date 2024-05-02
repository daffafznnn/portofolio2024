import { createI18n } from "vue-i18n";
import id from "./locales/id.json"; // Impor file terjemahan untuk bahasa Indonesia
import en from "./locales/en.json"; // Impor file terjemahan untuk bahasa Inggris

// Objek pesan terjemahan
const messages = {
  id,
  en,
};

export default createI18n({
  legacy: false,
  locale: "id", // Lokal awal
  fallbackLocale: "en", // Lokal cadangan jika tidak ditemukan
  messages: messages, // Menggunakan objek pesan terjemahan yang telah diimpor
});
