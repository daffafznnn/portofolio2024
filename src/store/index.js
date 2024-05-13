import { createStore } from "vuex";
import property from "./modules/property.js";
import auth from "./modules/auth.js";

const store = createStore({
  state: {
    isLoading: false,
  },
  modules: {
    property,
    auth,
  },
});

export default store;