<template>
  <div class="product-detail-container">
    <ul class="breadcrumb">
      <li><nuxt-link to="/">Home</nuxt-link></li>
      <li>{{ product.productName }}</li>
    </ul>
    <Loading v-if="isLoading" />
    <div v-else class="product-detail">
      <div class="content">
        <img :src="renderImage()" alt="placeholder" />
        <div>
          <h2>
            {{ product.productName }}
          </h2>
          <h2>
            {{ formatCurrency(15000) }}
          </h2>
          <p>
            {{ product.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import { formatCurrency } from "@/utility";
import Loading from "@/components/Loading";
export default {
  created() {
    this.fetchProduct(this.$route.params.id);
  },
  component: {
    Loading,
  },
  computed: {
    ...mapGetters({
      product: "catalogue/getProduct",
      isLoading: "catalogue/isLoading",
    }),
  },
  methods: {
    ...mapActions({
      fetchProduct: "catalogue/fetchProductById",
    }),
    formatCurrency,
    renderImage() {
      return require("@/assets/not_found.png");
    },
  },
};
</script>

<style lang="scss">
/* Style the list */
ul.breadcrumb {
  padding: 10px 16px;
  list-style: none;
}

/* Display list items side by side */
ul.breadcrumb li {
  display: inline;
  font-size: 18px;
}

/* Add a slash symbol (/) before/behind each list item */
ul.breadcrumb li + li:before {
  padding: 8px;
  color: black;
  content: "/\00a0";
}

/* Add a color to all links inside the list */
ul.breadcrumb li a {
  color: #0275d8;
  text-decoration: none;
}

/* Add a color on mouse-over */
ul.breadcrumb li a:hover {
  color: #01447e;
  text-decoration: underline;
}
.product-detail-container {
  .product-detail {
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    padding: 10px;
    width: 80%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    img {
      width: 30%;
      height: 30%;
    }
    .content {
      display: flex;
      gap: 50px;
      div {
        padding: 20px;
      }
      p {
        word-wrap: break-word;
      }
    }
  }
}
</style>
