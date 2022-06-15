<template>
  <ul class="breadcrumb">
    <li><nuxt-link to="/">Home</nuxt-link></li>
    <li>
      <nuxt-link :to="`/?categoryId=${categoryId}`">{{
        categoryName
      }}</nuxt-link>
    </li>
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
    categoryName: {
      type: String,
      default: "",
    },
    categoryId: {
      type: String,
      default: "",
    },
  },
};
</script>
