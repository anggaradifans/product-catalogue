<template>
  <div>
    <SearchBox @search="fetch" />
    <div class="container">
      <h1>Check Our products</h1>
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

export default {
  name: "IndexPage",
  components: {
    ProductCard,
    SearchBox,
  },
  mounted() {
    this.fetch();
  },
  computed: {
    ...mapGetters({
      products: "catalogue/getProducts",
    }),
  },
  methods: {
    ...mapActions({
      fetchProducts: "catalogue/fetchProducts",
      fetchCategories: "catalogue/fetchCategories",
    }),
    goToDetailPage(id) {
      this.$router.push(`/${id}`);
    },
    fetch(query) {
      this.fetchCategories();
      this.fetchProducts(query);
    },
  },
};
</script>
