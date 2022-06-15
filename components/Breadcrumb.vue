<template>
  <ul class="breadcrumb">
    <li><nuxt-link to="/">Home</nuxt-link></li>
    <li>{{ productName }}</li>
  </ul>
</template>

<script>
export default {
  props: {
    productName: {
      type: String,
      default: "",
    },
  },
};
</script>
