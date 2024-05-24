import { createStore } from "vuex";
import property from "./modules/property.js";
import auth from "./modules/auth.js";
import question from "./modules/question.js";
import settings from "./modules/settings.js";


const store = createStore({
  state: {
    isLoading: false,
  },
  modules: {
    property,
    auth,
    question,
    settings
  },
});

export default store;