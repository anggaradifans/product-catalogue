<template>
  <div class="header">
    <h2 style="text-align: center">Check Our Products</h2>
    <SearchBox @search="fetch" />
  </div>
</template>

<script>
export default {
  methods: {
    fetch(data) {
      this.$emit("search", data);
    },
  },
};
</script>
