<template>
  <div>
    <SearchBox />
    <div class="container">
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
    goToDetailPage(id) {
      console.log("triggered");
      this.$router.push(`/${id}`);
    },
  },
};
</script>
<style lang="scss">
.container {
  display: flex;
  gap: 50px;
  justify-content: center;
  margin: 5% 20%;
}
</style>
