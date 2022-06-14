<template>
  <div class="card-container">
    <div>
      {{ item.title }}
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
};
</script>

<style>
.card-container {
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
  -webkit-box-shadow: 0px 10px 30px 0px rgb(0 0 0 / 30%);
  box-shadow: 0px 10px 30px 0px rgb(0 0 0 / 30%);
  background: white;
}
</style>
