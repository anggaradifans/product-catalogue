<template>
  <div class="search-box">
    <input v-model="text" @keyup.enter="search" type="text" />
    <button @click="search">Search</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "",
    };
  },
  methods: {
    search() {
      this.$emit("search", this.text);
    },
  },
};
</script>
