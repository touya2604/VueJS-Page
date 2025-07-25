<script setup lang="ts">
import Header from "../components/layouts/header.vue";
import Footer from "../components/layouts/footer.vue";
</script>
<!-- Nếu sử dụng setup lang = "ts" thì ko cần dùng đến component:{} -->
<template>
  <div>
    <Header />
    <nuxt />
    <Footer />
  </div>
</template>
