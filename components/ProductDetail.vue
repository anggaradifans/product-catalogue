<template>
  <div class="product-detail-container">
    <div class="product-detail">
      <div class="content">
        <img :src="renderImage(product.image)" alt="placeholder" />
      </div>
      <div class="content">
        <h2>
          {{ product.productName }}
        </h2>
        <h2>
          {{ formatCurrency(product.price) }}
        </h2>
        <h4>Category</h4>
        <Badge :text="categoryName" />
        <h4>Variant</h4>
        <p v-if="!product.variant.length">No variant</p>
        <div class="variant">
          <Badge
            v-for="(item, index) in product.variant"
            :key="index"
            :text="item"
          />
        </div>
        <p>Available stock : {{ product.stock || 0 }}</p>
      </div>
      <div class="content">
        <h4>Description</h4>
        <p>
          {{ product.description || "There is no description for this item" }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { formatCurrency } from "@/utility";
import Badge from "@/components/Badge.vue";

export default {
  components: {
    Badge,
  },
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
  data() {
    return {
      variant: ["test1", "test2", "test3"],
    };
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
