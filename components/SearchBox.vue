<template>
  <div class="search-box">
    <input
      v-model="text"
      placeholder="Enter product name"
      @keyup.enter="search"
      type="text"
    />
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
      this.$router.push(`/?q=${this.text}`);
      this.$emit("search", {
        q: this.text,
      });
    },
  },
};
</script>
