<template>
  <div>
    <Breadcrumb
      :productName="product.productName"
      :categoryName="categoryName"
      :categoryId="product.categoryId"
    />
    <Loading v-if="isLoading" />
    <ProductDetail v-else :product="product" :categoryName="categoryName" />
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import Loading from "@/components/Loading";
import ProductDetail from "@/components/ProductDetail";
import Breadcrumb from "@/components/Breadcrumb";

export default {
  created() {
    this.fetchCategories();
    this.fetchProduct(this.$route.params.id);
  },
  component: {
    Loading,
    Breadcrumb,
    ProductDetail,
  },
  computed: {
    ...mapGetters({
      product: "catalogue/getProduct",
      isLoading: "catalogue/isLoading",
      categories: "catalogue/getCategories",
    }),
    categoryName() {
      const { name } = this.categories?.find(
        (item) => item.categoryId === this.product.categoryId
      );
      return name || "";
    },
  },
  methods: {
    ...mapActions({
      fetchProduct: "catalogue/fetchProductById",
      fetchCategories: "catalogue/fetchCategories",
    }),
  },
};
</script>
