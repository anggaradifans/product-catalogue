<template>
  <div @click="onClick(item.id)" class="card-container">
    <img src="@/assets/not_found.png" alt="placeholder" />
    <div class="card-text">
      {{ item.productName }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: false,
    },
  },
  methods: {
    onClick(id) {
      this.$emit("click", id);
    },
  },
};
</script>

<style lang="scss">
.card-container {
  margin: 10px;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  background: white;
  .card-text {
    padding: 30px;
  }
  img {
    width: 100%;
  }
}
</style>
