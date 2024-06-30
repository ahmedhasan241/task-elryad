<template>
  <v-card class="mx-auto card-contain" max-width="344" min-height="400">
    <NuxtLink :to="`/${product.id}`">
      <v-img :src="product.image" height="221px" contain></v-img>
    </NuxtLink>

    <v-card-text class="title-card" v-bind="attrs" v-on="on">
      {{ truncatedTitle }}
      <v-tooltip activator="parent" location="top">{{ product.title }}</v-tooltip>
    </v-card-text>

    <v-card-text class="mb-auto price">{{ product.price }} RS</v-card-text>
    <v-card-actions class="card-actions">
      <v-btn
        class="text-none add-button rounded-pill"
        color="#2A7DE5"
        variant="elevated"
        @click="handleAddToCart"
      >
        Add To Cart
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { computed } from "vue";

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});

const store = useStore();
const router = useRouter();

const truncatedTitle = computed(() => {
  const maxLength = 20;
  return props.product.title.length > maxLength
    ? props.product.title.substring(0, maxLength) + "..."
    : props.product.title;
});

const handleAddToCart = () => {
  store.dispatch('addToCart', props.product);
  router.push('/cart');
};
</script>

<style scoped>
.card-contain {
  direction: rtl;
  box-shadow: none;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
  padding: 15px 20px;
}
.title-card {
  font-size: 20px;
  font-weight: 500;
  direction: ltr;
}
.price {
  font-size: 16px;
  font-weight: 400;
  direction: ltr;
}
.card-actions {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.add-button {
  width: 100%;
  height: 45px !important;
  font-size: 16px !important;
  font-weight: 400 !important;
}
</style>
