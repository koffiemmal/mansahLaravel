<template>
  <div class="px-5 sm:px-10 md:px-20">
    <Header />
    <Home />
    <SectionAfterHeader />
    <Faqs />
    <Clients />
    <Footer />
  </div>
</template>

<script setup>
import Header from "./components/Header.vue";
import Home from "./components/Home.vue";
import SectionAfterHeader from "./components/sectionAfterHeader.vue";
import Faqs from "./components/Faqs.vue";
import Clients from "./components/Clients.vue";
import Footer from "./components/Footer.vue";

// No replacement needed, just remove the block
</script>
