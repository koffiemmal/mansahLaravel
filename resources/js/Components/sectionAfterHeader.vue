<template>
  <div class="">
    <section
      class="text-center flex flex-col justify-center justify-items-center items-center"
    >
      <p class="py-4 font-medium text-2xl leading-snug sm:text-3xl md:text-4xl">
        Pourquoi utiliser <br />
        <span class="text-primary font-extrabold"> MANSAH ?</span>
      </p>
      <p class="w-[75%] py-1 text-sm text-secondary">
        Veuillez renseigner les imformationss de votre demande. Veuillez
        renseigner les informations de votre demande. Veuillez renseigner les
        informations de votre demande
      </p>
    </section>

    <section class="grid grid-cols-1 md:grid-cols-2 py-10">
      <div class="bg-gray-100 my-4 mx-2 rounded-2xl p-5">
        <article
          class="bg-primary size-12 flex flex-row justify-center justify-items-center items-center rounded-full"
        >
          <img class="h-8 m-2 my-4" :src="images" alt="receipt-item" />
        </article>

        <p class="text-md py-4 md:text-xl font-semibold">
          Des taux de change compétitifs pour maximiser vos transferts.
        </p>
        <p class="text-sm text-primary">
          Veuillez renseigner les informations de votre demande. Veuillez
          renseigner les informations de votre demande. Veuillez renseigner les
          informations de votre demande
        </p>
        <button
          class="px-10 my-5 py-2 text-sm font-extralight bg-primary border-white border-2 text-white rounded-full hover:opacity-90 transition"
        >
          Soumettre
        </button>
      </div>
      <div class="bg-gray-100 my-4 mx-2  rounded-2xl p-5">
        <article
          class="bg-primary size-12 flex flex-row justify-center justify-items-center items-center rounded-full"
        >
          <img class="h-8 m-2 my-4" :src="images" alt="receipt-item" />
        </article>

        <p class="text-md py-4 md:text-xl font-semibold">
          Un service sécurisé et simple à utiliser, même pour les débutants.
        </p>
        <p class="text-sm text-primary">
          Veuillez renseigner les informations de votre demande. Veuillez
          renseigner les informations de votre demande. Veuillez renseigner les
          informations de votre demande
        </p>
        <button
          class="px-10 my-5 py-2 text-sm font-extralight bg-primary border-white border-2 text-white rounded-full hover:opacity-90 transition"
        >
          Soumettre
        </button>
      </div>
    </section>
    <section
      class="text-center py-8 flex flex-col justify-center justify-items-center items-center"
    >
      <p class="py-6 font-medium text-2xl leading-snug sm:text-3xl md:text-4xl">
        Les offres récentes sur <br />
        <span class="text-primary font-extrabold"> MANSAH ?</span>
      </p>
      <p class="w-[75%] py-1 text-sm text-secondary">
        Veuillez renseigner les informations de votre demande. Veuillez
        renseigner les informations de votre demande. Veuillez renseigner les
        informations de votre demande
      </p>
    </section>


      
    <section
      id="caroussel"
      class=" w-full grid grid-cols-1 justify-items-center sm:grid-cols-2 place-items-center md:grid-cols-3  gap-4"
    >
      <div v-for="(item, index) in items" :key="index" class="p-4 py-4 lg:py-4 w-full m-4 rounded-lg bg-quaternary">
        <p class="font-semibold text-md">{{ item.name }}</p>
        <p class="text-gray-600 font-extralight py-1 text-sm">
          Montant : {{ item.amount }}
        </p>
        <p class="text-gray-600 font-extralight py-1 text-sm">
          Taux de change : {{ item.rate }}
        </p>
        <button
          class="px-5 mt-6 py-2 text-xs font bg-mygreen border-white border-2 text-white rounded-lg hover:opacity-90 transition"
        >
          Details
        </button>
      </div>

      <!-- Ajoutez plus de divs comme ci-dessus si nécessaire -->
    </section>
 
  </div>
</template>

<script>
import { ref } from "vue";
import images from "../assets/images/receipt-item.png";
export default {
  name: "SectionAfterHeader",
  setup() {
    const items = ref([
      {
        name: "Demande de transfert vers Canada",
        amount: 500000,
        rate: 450,
      },
      {
        name: "Demande de transfert vers Canada",
        amount: 500000,
        rate: 450,
      },
      {
        name: "Demande de transfert vers Canada",
        amount: 500000,
        rate: 450,
      },
    ]);
    return {
      images,
      items,
    };
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
  background-color: white;
}
</style>
