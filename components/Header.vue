<template>
  <div class="header">
    <h1 style="text-align: center">Check Our Products</h1>
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
