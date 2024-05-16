import { createStore } from "vuex";
import property from "./modules/property.js";
import auth from "./modules/auth.js";
import question from "./modules/question.js";


const store = createStore({
  state: {
    isLoading: false,
  },
  modules: {
    property,
    auth,
    question
  },
});

export default store;