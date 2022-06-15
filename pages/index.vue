<template>
  <div>
    <Header @search="getProducts" />
    <Loading v-if="isLoading" />
    <div v-else class="container">
      <div v-for="item in products" :key="item.id">
        <ProductCard @click="goToDetailPage" :item="item" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import ProductCard from "@/components/ProductCard.vue";
import SearchBox from "@/components/SearchBox.vue";
import Header from "@/components/Header.vue";
import Loading from "@/components/Loading.vue";

export default {
  name: "IndexPage",
  components: {
    ProductCard,
    SearchBox,
    Header,
    Loading,
  },
  mounted() {
    this.fetch();
  },
  computed: {
    ...mapGetters({
      products: "catalogue/getProducts",
      isLoading: "catalogue/isLoading",
    }),
  },
  watch: {
    "$route.query"(query) {
      this.getProducts(query);
    },
  },
  methods: {
    ...mapActions({
      fetchProducts: "catalogue/fetchProducts",
      fetchCategories: "catalogue/fetchCategories",
    }),
    goToDetailPage(id) {
      this.$router.push(`/${id}`);
    },
    getProducts(params) {
      const query = params ? params : this.$route.query;
      this.fetchProducts(query);
    },
    fetch(query) {
      this.fetchCategories();
      this.getProducts(query);
    },
  },
};
</script>
