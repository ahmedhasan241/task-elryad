<template>
  <div class="content-page">
    <v-breadcrumbs class="search-div" :items="breadcrumbs" rtl>
      <template v-slot:item="{ item }">
        <NuxtLink class="text-decoration-none text-dark" :to="item.to">
          {{ item.title }}
        </NuxtLink>
      </template>
      <template v-slot:divider> &gt; </template>
    </v-breadcrumbs>

    <div class="product-contain">
      <div class="row bg-transparent">
        <div class="col-12 col-md-6 bg-transparent img-contain">
          <v-img v-if="product" :src="product.image" class="img-width"></v-img>
          <v-skeleton-loader
            v-else
            class="mx-auto border img-width"
            type="image, article"
          ></v-skeleton-loader>
        </div>
        <div v-if="product" class="col-12 col-md-6 contain-title">
          <h2 class="title-product">{{ product.title }}</h2>
          <p class="price-style">{{ product.price }} RS</p>
      <div class="d-flex align-items-center">
         
            <v-btn
              class="text-none add-button"
              color="#FFC107"
              variant="elevated"
              @click="handleAddToCart(product)"
            >
              Add To Cart
            </v-btn>
               <div class="quantity-controls">
              <v-btn class="quantity-btn" icon @click="decrementQuantity">
                <v-icon>mdi-minus</v-icon>
              </v-btn>
              <span class="mx-2">{{ quantity }}</span>
              <v-btn class="quantity-btn" icon @click="incrementQuantity">
                <v-icon>mdi-plus</v-icon>
              </v-btn>
            </div>
          </div>
        </div>
        <div v-else class="col-12 col-md-6 contain-title">
          <v-skeleton-loader
            class="mx-auto border img-width"
            type="image, article"
          ></v-skeleton-loader>
        </div>

        <div class="col-12 col-md-6 bg-transparent"></div>
        <div v-if="product" class="col-12 col-md-6 about-contain">
          <p class="about-title">About Product:</p>
          <p class="about-description">{{ product?.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { onMounted, computed, ref } from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";

export default {
  name: "ProductDetail",
  props: {
    productId: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const store = useStore();
    const route = useRoute();
    const router = useRouter();
    const id = computed(() => route.params.id);
    const product = computed(() => store.getters.getSingleProduct);
    const quantity = ref(1); // Initial quantity set to 1

    const breadcrumbs = [
      { title: "الرئيسية", to: "/" },
      { title: "المتجر", to: "/" },
    ];

    const fetchProduct = async () => {
      await store.dispatch("fetchProduct", id.value);
    };

    const handleAddToCart = async (product, quantity) => {
      await store.dispatch("addToCart", { product, quantity });
      router.push("/cart");
    };

    const incrementQuantity = () => {
      quantity.value++;
    };

    const decrementQuantity = () => {
      if (quantity.value > 1) {
        quantity.value--;
      }
    };

    onMounted(() => {
      fetchProduct();
    });

    return {
      product,
      breadcrumbs,
      quantity,
      handleAddToCart,
      incrementQuantity,
      decrementQuantity,
    };
  },
};
</script>

<style scoped>
.quantity-btn {
  border: 0.5px solid #D4E6FF;
  box-shadow: none;
  margin: 0px 10px;
}
.quantity-controls {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
    margin-top: 40px;
    margin-inline-start: 40px;
}
.about-contain {
  margin-top: 35px;
  direction: ltr;
}
.about-title {
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
}
.about-description {
  font-size: 16px;
  font-weight: 400;
  line-height: 19.2px;
}
.img-contain {
  height: 339.79px;
}
.contain-title {
  border-bottom: 0.5px #d9d9d9 solid;
  padding-bottom: 30px;
  direction: ltr;
}
.add-button {
  width: 148px;
  height: 54px !important;
  font-size: 16px !important;
  font-weight: 400 !important;
  border-radius: 39.5px;
  color: black;
  margin-top: 40px;
}
.price-style {
  font-size: 24px;
  font-weight: 500;
  font-family: "Neo Sans Arabic", sans-serif;
  line-height: 28.8px;
  margin-top: 25px;
}
.title-product {
  font-size: 32px;
  font-weight: 500;
  font-family: "Neo Sans Arabic", sans-serif;
  line-height: 38.4px;
}
.img-width {
  width: 100% !important;
  height: 339.79px !important;
  background-size: cover;
  background-position: center !important;
}
.content-page {
  direction: rtl !important;
  background: linear-gradient(to bottom, #f4fbff 25%, #ffffff 100%);
  padding: 25px 30px;
  height: fit-content;
}
.product-contain {
  padding: 0px 150px;
}
@media (max-width: 768px) {
  .product-contain {
    padding: 0px 50px;
    border-radius: 30px;
  }
}
@media (max-width: 500px) {
  .product-contain {
    padding: 0px 10px;
    border-radius: 30px;
    direction: ltr;
  }
  .title-product {
    font-size: 26px;
    font-weight: 500;
    font-family: "Neo Sans Arabic", sans-serif;
    line-height: 38.4px;
  }
}
.title-page {
  font-size: 32px;
  font-weight: 800;
  font-family: "Neo Sans Arabic", sans-serif;
  line-height: 38.4px;
}
.mt-5 {
  margin-top: 2rem;
}
::v-deep .pagination .v-btn {
  background-color: #f8f7fb !important;
}
.v-pagination .v-pagination__item--active {
  background-color: #42a5f5;
  color: #fff;
}
.pagination {
  direction: ltr;
}
.v-skeleton-loader {
  background-color: white !important;
  border-radius: 8px !important;
}
</style>
