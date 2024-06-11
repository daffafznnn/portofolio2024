import { createI18n } from "vue-i18n";
import en from "../locales/en.json";
import id from "../locales/id.json";

// Objek pesan terjemahan
const messages = {
  id,
  en,
};

export default createI18n({
  legacy: false,
  locale: "en",
  fallbackLocale: "id",
  messages: messages,
});
