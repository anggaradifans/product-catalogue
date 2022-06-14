import Vue from "vue";
import Vuex from "vuex";
import catalogue from "./modules/catalogue.store";

Vue.use(Vuex);
const createStore = () => {
  return new Vuex.Store({
    modules: {
      catalogue,
    },
  });
};

export default createStore;
