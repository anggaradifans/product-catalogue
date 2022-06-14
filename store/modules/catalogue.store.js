const state = {
  products: [],
  product: {},
  loading: false,
};

const getters = {
  getProducts: (state) => state.products,
  getProduct: (state) => state.product,
  isLoading: (state) => state.loading,
};

const mutations = {
  setProducts: (state, payload) => {
    state.products = payload;
  },
  setProduct: (state, payload) => {
    state.product = payload;
  },
  setLoading: (state, payload) => {
    state.loading = payload;
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
  async fetchProductById({ commit }, variables) {
    commit("setLoading", true);
    const id = variables;
    try {
      const { data } = await this.$axios.get(`/posts/${id}`);
      commit("setProduct", data);
    } catch (e) {
      console.log(e);
    } finally {
      commit("setLoading", false);
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
