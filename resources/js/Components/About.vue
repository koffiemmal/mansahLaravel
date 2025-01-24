<template>
<div class="py-5 md:py-10 flex flex-col md:flex-row ">
    <div class="w-full md:mx-8">
    <p class="text-lg text-primary font-extralight py-4">A propos de mansah</p>
    <p class="text-2xl md:text-4xl font-bold">
      Faciliter le transfert d’argent avec vos proches entre l’occident et
      l’Afrique
    </p>
    <p class="text-lg py-6 text-secondary font-extralight">
      Veuillez renseigner les informations de votre demande. Veuillez renseigner
      les informations de votre demande. Veuillez renseigner les informations de
      votre demande
    </p>
  </div>
  <div class="w-full  p-6 m-4 md:p-0 md:m-0  flex flex-row justify-end items-center">
    <section class="bg-primary  rounded-3xl">
      
      <section class="bg-quaternary h-full w-full relative  top-8 right-8 flex flex-row justify-center items-center  rounded-3xl ">
        <img class="h-full" src="../assets/images/women.png" alt="">
      </section>
    </section>
  </div>
</div>
</template>
<script>
export default {
  name: "About",

  setup() {
    return {};
  },
};
</script>
<style>
/* Global Font */
@font-face {
  font-family: "Poppins";
  src: url("./assets/fonts/Poppins-Regular.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}

body {
  font-family: "Poppins", sans-serif;
}
</style>

