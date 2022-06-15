<template>
  <div>
    <Breadcrumb :productName="product.productName" />
    <Loading v-if="isLoading" />
    <ProductDetail v-else :product="product" />
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import Loading from "@/components/Loading";
import ProductDetail from "@/components/ProductDetail";
import Breadcrumb from "@/components/Breadcrumb";

export default {
  created() {
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
    }),
  },
  methods: {
    ...mapActions({
      fetchProduct: "catalogue/fetchProductById",
    }),
  },
};
</script>
