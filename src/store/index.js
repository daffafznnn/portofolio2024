import { createStore } from "vuex";
import property from "./modules/property.js";

const store = createStore({
  state: {
    isLoading: false,
  },
  modules: {
   property
  },
});

export default store;