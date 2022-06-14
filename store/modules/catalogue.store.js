const state = {
  products: [],
  product: {},
};

const getters = {
  getProducts: (state) => state.products,
  getProduct: (state) => state.product,
};

const mutations = {
  setProducts: (state, payload) => {
    state.products = payload;
  },
  setProduct: (state, payload) => {
    state.product = payload;
  },
};

const actions = {
  async fetchProducts({ commit }) {
    try {
      const { data } = await this.$axios.get("/posts");
      commit("setProducts", data);
    } catch (e) {
      console.log(e);
    }
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
