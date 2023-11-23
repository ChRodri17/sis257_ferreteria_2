<script setup lang="ts">
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <main>
    <Header />
    <RouterView />
    <Footer />
  </main>
</template>

<style>
@import "@/vendor/bootstrap/css/bootstrap.min.css";
@import "@/assets/css/fontawesome.css";
@import "assets/css/templatemo-sixteen.css";
@import "@/assets/css/owl.css";
</style>

