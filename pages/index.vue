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
    <div class="d-flex search-div mt-6 gap-3">
      <h2 class="title-page">المتجر</h2>
<div class="input-group form-search">
    <span class="input-group-text form-search-icon border-0" id="search-addon">
    <v-icon>mdi-magnify</v-icon>
  </span>
  <input type="search" class="form-control form-search-input" placeholder="البحث" aria-label="Search" aria-describedby="search-addon" />

</div>
    </div>

    <div v-if="paginatedProducts.length > 0">
      <div class="mt-10 d-flex text-center">
        <v-row class="justify-center gap-5" no-gutters>
          <v-col
            v-for="product in paginatedProducts"
            :key="product.id"
            cols="12"
            lg="3"
            md="5"
            sm="12"
          >
            <ProductCard :product="product" />
          </v-col>
        </v-row>
      </div>
      <v-pagination
        v-model="currentPage"
        :length="totalPages"
        :total-visible="5"
        class="mt-5 pagination"
      ></v-pagination>
    </div>
    <div v-else class="mt-10 d-flex text-center">
      <v-row class="justify-center gap-5" no-gutters>
        <v-col v-for="n in 9" :key="n" cols="12" lg="3" md="5" sm="12">
          <v-skeleton-loader
            class="mx-auto border"
            max-width="344"
            min-height="400"
            type="image, article"
          ></v-skeleton-loader>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { computed, ref, onMounted } from "vue";
import ProductCard from "@/components/ProductCard.vue";

definePageMeta({
  title: "Some Page",
});

const store = useStore();
const products = computed(() => store.getters.getAllProducts);

const breadcrumbs = [
  { title: "الرئيسية", to: "/" },
  { title: "المتجر", to: "/" },
];

const itemsPerPage = 9;
const currentPage = ref(1);

const paginatedProducts = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return products.value.slice(start, end);
});

const totalPages = computed(() =>
  Math.ceil(products.value.length / itemsPerPage)
);

onMounted(() => {
  store.dispatch("fetchProducts");
});
</script>

<style scoped>
.content-page {
  direction: rtl !important;
  background-color: #f4fbff;
  padding: 25px 30px;
  height: fit-content;
}

.search-div {
  padding: 0px 150px;
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

.search-field {
  width: 485.73px !important;
  height: 45px !important;
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
.form-search {
  direction: rtl;
  width: 485.73px;
  height: 45px !important;
  border-radius: 40px !important;
    background-color: white !important;
    border: 1px solid #d9d9d9 !important;
}
.form-search-input {
  direction: rtl;
  width: 435.73px;
  height: 45px !important;
  border: none !important;
    border-radius: 40px !important;
  background-color: transparent !important;
    color: #ADADAD;
}

@media (max-width: 928px) {
  .search-div {
  padding: 0px 20px;
}
  .form-search {
  direction: rtl;
  width: 185.73px;
  height: 45px !important;
  border-radius: 40px !important;
    background-color: white !important;
    border: 1px solid #d9d9d9 !important;
}
.form-search-input {
  direction: rtl;
  width: 135.73px;
  height: 45px !important;
  border: none !important;
    border-radius: 40px !important;
  background-color: transparent !important;
    color: #ADADAD;
}
}
@media (max-width: 500px) {
  .search-div {
  padding: 0px 5px;
}  .form-search {
  direction: rtl;
  width: 135.73px;
  height: 45px !important;
  border-radius: 40px !important;
    background-color: white !important;
    border: 1px solid #d9d9d9 !important;
}
.form-search-input {
  direction: rtl;
  width: 85.73px;
  height: 45px !important;
  border: none !important;
    border-radius: 40px !important;
  background-color: transparent !important;
    color: #ADADAD;
}

}
.form-search-icon {
  direction: rtl;
  height: 45px !important;
  border: none !important;
  background-color: transparent !important;
  color: #ADADAD;
}
</style>
