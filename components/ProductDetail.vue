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
        <h4>
          {{ categoryName }}
        </h4>
        <h4>Available stock : {{ product.stock || 0 }}</h4>
        <p>
          {{ product.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { formatCurrency } from "@/utility";

export default {
  props: {
    product: {
      type: Object,
      default: {},
    },
    categoryName: {
      type: String,
      default: "",
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
