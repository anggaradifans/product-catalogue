<template>
  <div @click="onClick(item.id)" class="card-container">
    <img
      :src="require(`@/assets/images/${item.image || url}`)"
      alt="placeholder"
    />
    <div class="card-text">
      <h4>
        {{ item.productName }}
      </h4>
      <h4>
        {{ formatCurrency(item.price) }}
      </h4>
    </div>
  </div>
</template>

<script>
import { formatCurrency } from "@/utility";

export default {
  props: {
    item: {
      type: Object,
      required: false,
    },
  },
  data() {
    return {
      url: "not_found.png",
    };
  },
  methods: {
    onClick(id) {
      this.$emit("click", id);
    },
    formatCurrency,
  },
};
</script>
