import { createI18n } from "vue-i18n";
import id from "./locales/id.json";
import en from "./locales/en.json";

// Objek pesan terjemahan
const messages = {
  id,
  en,
};

export default createI18n({
  legacy: false,
  locale: "id",
  fallbackLocale: "en",
  messages: messages,
});
