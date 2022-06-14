<template>
  <div class="search-box">
    <input type="text" />
    <button>Search</button>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.search-box {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
  input {
    padding: 5px 15px;
    width: 20%;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-radius: 10px;
    border: none;
  }
  button {
    border: none;
    padding: 10px 25px;
    cursor: pointer;
    font-size: 14px;
    background-color: #4424d6;
    color: white;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-radius: 10px;
  }
}
</style>
