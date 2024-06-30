<template>
  <v-app >
    <NavBar />
    <v-main>
      <slot></slot>
    </v-main>
    <Footer />
  </v-app>
</template>





<style>
html {
  direction: rtl;
}
body {
  font-family: 'Neo Sans Arabic', sans-serif;
}
</style>
