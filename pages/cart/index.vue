<template>
  <div class="content-page">
    <div v-if="cartItems.length > 0">
    <div class="row my-5 animate__animated animate__fadeInDown">
      <div class="col-md-12">
        <div class="table-responsive">
          <table class="table text-center">
            <thead>
              <tr>
                <th></th>
                <th>Product Image</th>
                <th>Product name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Unit</th>
              </tr>
            </thead>
            <tbody class="my-5">
              <tr v-for="item in cartItems" :key="item.id">
                <td>
                  <v-icon
                    @click="removeFromCart(item)"
                    class="align-self-center remove-icon"
                    >mdi-close-thick</v-icon
                  >
                </td>
                <td>
                  <img
                    :src="item.image"
                    class="fluid rounded"
                    width="60"
                    height="60"
                    :alt="item.name"
                  />
                </td>
                <td>
                  {{ item.title }}
                </td>
                <td>${{ item.price }}</td>
                <td class="text-start">
                  <span
                    class="bg-light-subtle d-flex align-items-center justify-content-center"
                  >
                    <v-icon @click="decrementQ(item)" class="icon-minus"
                      >mdi-minus-circle</v-icon
                    >
                    {{ item.quantity }}
                    <v-icon @click="incrementQ(item)" class="icon-plus"
                      >mdi-plus-circle</v-icon
                    >
                  </span>
                </td>
                <td>${{ (item.price * item.quantity).toFixed(2) }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div
      class="bg-light-subtle ms-auto col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 p-3 justify-content-end my-2 animate__animated animate__backInUp"
    >
      <p>
        <span class="text-dark fw-bold d-flex justify-content-between">
          Total
          <h5 class="text-danger">
            $
            {{
              cartItems
                .reduce((acc, item) => (acc += item.price * item.quantity), 0)
                .toFixed(2)
            }}
          </h5>
        </span>
      </p>
    </div>
        </div>

    <div class="d-flex justify-content-center align-items-center h-100  " v-else> 
        <h2 class="my-auto align-self-center">No Items In The Cart</h2>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "CartPage",
  computed: {
    ...mapGetters(["getCartItems"]),
    cartItems() {
      return this.getCartItems;
    },
  },
  methods: {
    ...mapActions([
      "removeFromCart",
      "incrementQ",
      "decrementQ",
      "getItemsToCart",
    ]),
  },
  async mounted() {
    await this.getItemsToCart();
  },
};
</script>

<style scoped>
.content-page {

  background-color: #f4fbff;
  padding: 25px 30px;
  height: 100%;
}
.table thead th,
.table tbody td {
  vertical-align: middle;
  text-align: center;
}

.icon {
  cursor: pointer;
  font-size: 10px;
  margin: 0 5px;
}
.icon-minus {
  color: red;
  cursor: pointer;
  font-size: 20px;
  margin: 0 5px;
}
.icon-plus {
  color: green;
  cursor: pointer;
  font-size: 20px;
  margin: 0 5px;
}
.remove-icon {
  color: red;
  cursor: pointer;
  font-size: 20px;
  margin: 0 5px;
}
</style>
