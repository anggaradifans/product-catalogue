<template>
  <div class="product-detail">
    <div class="content">
      <img :src="renderImage(product.image)" alt="placeholder" />
      <div>
        <h2>
          {{ product.productName }}
        </h2>
        <h2>
          {{ formatCurrency(product.price) }}
        </h2>
        <h3>Available stock : {{ product.stock || 0 }}</h3>
        <p>
          {{ product.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { formatCurrency } from "@/utility";
import { mapGetters } from "vuex";

export default {
  props: {
    product: {
      type: Object,
      default: {},
    },
  },
  computed: {
    ...mapGetters({
      categories: "catalogue/getCategories",
    }),
    categoryName() {
      const { name } = this.categories.find(
        (item) => item.categoryId === this.product.categoryId
      );
      return name || "";
    },
  },
  methods: {
    formatCurrency,
    renderImage(url) {
      return url
        ? require(`@/assets/images/${url}`)
        : require(`@/assets/images/not_found.png`);
    },
  },
};
</script>
