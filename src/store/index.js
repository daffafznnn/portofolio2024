import { createStore } from "vuex";
import property from "./modules/property.js";
import auth from "./modules/auth.js";
import question from "./modules/question.js";
import settings from "./modules/settings.js";
import categories from "./modules/categories.js";


const store = createStore({
  state: {
    isLoading: false,
  },
  modules: {
    property,
    auth,
    question,
    settings,
    categories
  },
});

export default store;