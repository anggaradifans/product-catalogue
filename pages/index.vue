<template>
  <div>
    <SearchBox @search="fetch" />
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
    }),
    goToDetailPage(id) {
      this.$router.push(`/${id}`);
    },
    fetch(query) {
      this.fetchProducts(query);
    },
  },
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Work+Sans&display=swap");
body {
  font-family: "Work Sans", sans-serif;
}
.container {
  display: grid;
  padding: 0 10%;
  column-gap: 1rem;
  row-gap: 1rem;
  margin: 5%;
  @media only screen and (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
</style>
