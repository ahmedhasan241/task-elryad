import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
  state: () => ({
    products: [],
    singleProduct: null,
    cartItems: [],
    totalCartQuantity: 0,
  }),
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
    setSingleProduct(state, product) {
      state.singleProduct = product;
    },
    SET_CART_ITEMS(state, items) {
      state.cartItems = items;
    },
    ADD_TO_CART(state, prod) {
      let localItems = JSON.parse(localStorage.getItem("shoppingCart"));
      if (!localItems) {
        prod.quantity = 1;
        state.cartItems.push(prod);
        localStorage.setItem("shoppingCart", JSON.stringify(state.cartItems));
      } else {
        let index = state.cartItems.findIndex(
          (product) => product.id === prod.id
        );
        if (index !== -1) {
          state.cartItems[index].quantity += 1;
        } else {
          prod.quantity = 1;
          state.cartItems.push(prod);
          localStorage.setItem("shoppingCart", JSON.stringify(state.cartItems));
        }
      }

      state.totalCartQuantity += 1;
    },
    INCREMENT_Q(state, prod) {
      let index = state.cartItems.findIndex(
        (product) => product.id === prod.id
      );
      if (index !== -1) {
        state.cartItems[index].quantity += 1;
        state.totalCartQuantity += 1;
        localStorage.setItem("shoppingCart", JSON.stringify(state.cartItems)); // Update localStorage
      }
    },

    DECREMENT_Q(state, prod) {
      let index = state.cartItems.findIndex(
        (product) => product.id === prod.id
      );
      if (index !== -1) {
        state.cartItems[index].quantity -= 1;
        if (state.cartItems[index].quantity === 0) {
          state.cartItems = state.cartItems.filter(
            (product) => product.id !== prod.id
          );
        }
        state.totalCartQuantity -= 1;
        localStorage.setItem("shoppingCart", JSON.stringify(state.cartItems)); // Update localStorage
      }
    },
    REMOVE_FROM_CART(state, prod) {
      let index = state.cartItems.findIndex(
        (product) => product.id === prod.id
      );
      if (index !== -1) {
        state.cartItems.splice(index, 1);
        state.totalCartQuantity -= prod.quantity; // Decrease total quantity
      }
      localStorage.setItem("shoppingCart", JSON.stringify(state.cartItems));
    },
    SET_TOTAL_CART_QUANTITY(state, total) {
      state.totalCartQuantity = total;
    },
  },
  actions: {
    async fetchProducts({ commit }) {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        commit("setProducts", response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    },
    async fetchProduct({ commit }, productId) {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${productId}`
        );
        commit("setSingleProduct", response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    },
    getItemsToCart({ commit }) {
      let items = JSON.parse(localStorage.getItem("shoppingCart"));
      if (items) {
        commit("SET_CART_ITEMS", items);
        let total = items.reduce((acc, item) => acc + item.quantity, 0);
        commit("SET_TOTAL_CART_QUANTITY", total);
      }
    },
    addToCart({ commit }, prod) {
      commit("ADD_TO_CART", prod);
    },
    incrementQ({ commit }, prod) {
      commit("INCREMENT_Q", prod);
    },
    decrementQ({ commit }, prod) {
      commit("DECREMENT_Q", prod);
    },
    removeFromCart({ commit }, prod) {
      commit("REMOVE_FROM_CART", prod);
    },
  },
  getters: {
    getAllProducts: (state) => state.products,
    getSingleProduct: (state) => state.singleProduct,
    countCartItems: (state) => state.cartItems.length,
    getCartItems: (state) => state.cartItems,
    getTotalCartQuantity: (state) => state.totalCartQuantity,
  },
});

export default store;
