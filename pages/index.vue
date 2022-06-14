<template>
  <div class="container">
    <div v-for="item in products" :key="item.id">
      <ProductCard :item="item" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import ProductCard from "@/components/ProductCard.vue";
export default {
  name: "IndexPage",
  components: {
    ProductCard,
  },
  mounted() {
    this.fetchProducts();
  },
  computed: {
    ...mapGetters({
      products: "catalogue/getProducts",
    }),
  },
  methods: {
    ...mapActions({
      fetchProducts: "catalogue/fetchProducts",
    }),
  },
};
</script>
<style>
.container {
  display: flex;
  gap: 50px;
}
</style>
