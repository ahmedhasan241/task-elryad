<template>
  <nav class="nav-container shadow-sm navbar navbar-expand-lg">
    <div class="container-fluid navbar-brand">
      <NuxtLink to="/" class="dropdown-brand">
        <img src="../assets/images/logo-img.png" alt="" />
      </NuxtLink>


 <div class="collapse  navbar-collapse " id="navbarNavDropdown">
  <ul class="navbar-nav dropdown-brand-2">
    <li class="nav-item">
      <NuxtLink to="/" class="nav-link text-black" aria-current="page">الرئيسية</NuxtLink>
    </li>
    <li class="nav-item dropdown">
      <span class="nav-link" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        الدورات <v-icon dark>mdi-chevron-down</v-icon>
      </span>
      <ul class="dropdown-menu">
        <li><NuxtLink to="/" class="dropdown-item">لينك</NuxtLink></li>
        <li><NuxtLink to="/" class="dropdown-item">لينك</NuxtLink></li>
        <li><NuxtLink to="/" class="dropdown-item">لينك</NuxtLink></li>
      </ul>
    </li>
    <li class="nav-item dropdown">
      <span class="nav-link" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        الرخصة المهنية <v-icon dark>mdi-chevron-down</v-icon>
      </span>
      <ul class="dropdown-menu">
        <li><NuxtLink to="/" class="dropdown-item">لينك</NuxtLink></li>
        <li><NuxtLink to="/" class="dropdown-item">لينك</NuxtLink></li>
        <li><NuxtLink to="/" class="dropdown-item">لينك</NuxtLink></li>
      </ul>
    </li>
    <li class="nav-item dropdown">
      <span class="nav-link" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        حاسبة النقاط <v-icon dark>mdi-chevron-down</v-icon>
      </span>
      <ul class="dropdown-menu">
        <li><NuxtLink to="/" class="dropdown-item">لينك</NuxtLink></li>
        <li><NuxtLink to="/" class="dropdown-item">لينك</NuxtLink></li>
        <li><NuxtLink to="/" class="dropdown-item">لينك</NuxtLink></li>
      </ul>
    </li>
    <li class="nav-item">
      <NuxtLink to="/" class="nav-link text-black">المتجر</NuxtLink>
    </li>
  </ul>

  <div class="d-flex">
    <div>
      <NuxtLink to="/cart" class="text-black cart-contain">
        <span class="cart-badge" v-if="getTotalCartQuantity !== 0">
          {{ getTotalCartQuantity }}
        </span>
        <v-icon class="icon-nav" dark>mdi-cart-outline</v-icon>
      </NuxtLink>
    </div>
    <div>
      <v-icon class="icon-nav" dark>mdi-bell-outline</v-icon>
    </div>
    <div>
      <v-icon class="icon-nav" dark>mdi-magnify</v-icon>
    </div>
  </div>
  <div>
    <v-btn  class="language-btn" append-icon="mdi-web">
  English
</v-btn>
  </div>

  <ul class="navbar-nav user-menu">
    <li class="nav-item align-items-center dropdown">
      <span class="nav-link-user" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        <v-avatar>
          <v-img alt="John" src="../assets/images/user.png"></v-img>
        </v-avatar>
        عبدالله عبدالمجيد <v-icon dark>mdi-chevron-down</v-icon>
      </span>
      <ul class="dropdown-menu">
        <li><NuxtLink to="/" class="dropdown-item">لينك</NuxtLink></li>
        <li><NuxtLink to="/" class="dropdown-item">لينك</NuxtLink></li>
        <li><NuxtLink to="/" class="dropdown-item">لينك</NuxtLink></li>
      </ul>
    </li>
  </ul>
</div>

    </div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['getTotalCartQuantity'])
  }
};
</script>

<style scoped>
.cart-contain {
  position: relative;
}
.cart-badge {
  position: absolute;
  top: -5px;
  left: -5px;
  z-index: 10;
  background-color: red;
  color: white;
  border-radius: 50%;
  padding: 2px 8px;
  font-weight: 600;
  font-size: 12px;
}
.navbar-collapse {
  display: flex;
  gap: 40px;
}
.language-btn {
  box-shadow: none;
  border: none;
  font-size: 15px;
  font-weight: 400;
  line-height: 18.75px;
  font-family: "Neo Sans Arabic", sans-serif;
  text-align: center;
  align-content: center;
}

.icon-nav {
  width: 24px;
  height: 24px;
  font-size: 24px;
  margin: 0px 10px;
}
.dropdown-menu {
  direction: rtl !important;
}
.dropdown-item {
  text-align: center;
}
.navbar-brand {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0px 20px;
}
html {
  direction: rtl;
}
.dropdown-brand {
  margin-inline-end: 75px;
}

.navbar {
  direction: rtl;
  font-size: 16px;
  font-weight: 400;
  font-family: "Neo Sans Arabic", sans-serif;
}
.nav-link {
  direction: rtl;
  font-size: 16px !important;
  font-weight: 400 !important;
  font-family: "Neo Sans Arabic", sans-serif;
  padding: 4px 4px !important;
}
.nav-link-user {
  direction: rtl;
  font-size: 14px !important;
  font-weight: 400 !important;
  font-family: "Neo Sans Arabic", sans-serif;
  padding: 4px 4px !important;

}
@media (max-width: 1245px) {
  .dropdown-brand {
      margin-inline-end: 15px;
  }
  .navbar-collapse {
  display: flex;
  gap:5px;
}
.navbar-brand {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0px 5px;
}
}
@media (max-width: 900px) {.navbar-collapse {
  display: flex;
  flex-direction: column;
  gap: 40px;
}
}
</style>
