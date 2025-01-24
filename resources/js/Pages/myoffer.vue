<template>
  <section class="flex flex-col">
    <section class="flex flex-col md:flex-row justify-between">
      <form
        class="flex flex-row justify-items-center items-center gap-1"
        action="
    input"
      >
      <input
        class="border-2  rounded-md py-2 my-2 md:py-2 px-7 md:px-8"
        placeholder="Rechercher par nom"
        type="search"
      />
      <button class="border-2 rounded-lg h-11 px-2.5 md:p-2  ">
        <img src="../assets/images/setting-4.png" alt="" />
      </button>
      </form>
      <button
        @click="openModal"
        class="bg-gradient-to-l from-dashboard to-primary hover:from-blue-700 hover:to-blue-500 text-white font-light py-2 px-4 rounded-lg"
      >
        Créer une nouvelle offre
      </button>
    </section>
    <section class="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-5">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="p-5 mr-4 mt-2 w-full rounded-lg bg-quaternary"
      >
        <p class="font-semibold py-4">{{ item.name }}</p>
        <p class="text-gray-600 font-extralight py-1 text-sm">
          Montant : {{ item.amount }}
        </p>
        <p class="text-gray-600 font-extralight py-1 text-sm">
          Taux de change : {{ item.rate }}
        </p>
        <section class="flex flex-row gap-3">
          <button
            class="px-5 mt-6 py-2 text-xs font bg-transparent border-red-500 border-2 text-red-500 rounded-lg hover:opacity-90 transition"
          >
            {{ item.state }}
          </button>
        </section>
      </div>
    </section>
  </section>
  <div v-if="modal">
    <section
      class="z-50 fixed inset-0 h-screen w-screen bg-black bg-opacity-50 flex justify-center items-center"
    >
      <section
        class="bg-white w-full md:w-[50%] mx-3 py-10 flex rounded-lg flex-col justify-center items-center"
      >
        <form
          v-if="modalForm"
          action="
            "
          class="flex flex-col w-[80%] h-[80%] justify-center items-center"
        >
          <p class="text-2xl font-bold py-5 mb-4 border-b-2 w-full text-center">
            Complétez votre profil
          </p>
          <article class="flex flex-col w-full py-2">
            <label for="">Pays </label>
            <input
              class="border-2 w-full rounded-md py-2 ps-4 pr-16"
              placeholder="USA"
              type="text"
              required
            />
          </article>
          <article class="flex flex-col w-full py-2">
            <label for="">email (Reception $) </label>
            <input
              class="border-2 w-full rounded-md py-2 ps-4 pr-16"
              placeholder="romeo@maila.com"
              type="text"
              required
            />
          </article>
          <article class="flex flex-col w-full py-2">
            <label for="">Numero de telephone (Reception XOF)</label>
            <input
              class="border-2 w-full rounded-md py-2 ps-4 pr-16"
              placeholder="+221 77 777 77 77"
              type="text"
              required
            />
          </article>

          <button
            class="bg-modalcolor text-white font-medium mt-6 py-3 w-full"
            @click="openModalAfterForm"
          >
            Enregister
          </button>
        </form>
        <section
          v-if="afrterform"
          class="flex flex-col w-[80%] h-[20%] justify-center items-center"
        >
          <section class="flex flex-row justify-center justify-items-center">
            <section  class="ps-2"><img src="../assets/images/Frame 3.png" alt="" /></section>
            <section>
              <p class="text-lg md:text-2xl">Vos informations ont été mis a jour</p>
              <p class="text-xs md:text-md" >
                Vous pouvez maintenant créer une nouvelle offre en cliquant sur
                le button
              </p>
            </section>
          </section>

          <button
            class="bg-modalcolor text-white font-medium mt-6 py-3 w-full"
            @click="closeModalAfterForm"
          >
            Continuer
          </button>
        </section>
      </section>
    </section>
  </div>
</template>

<script>
import { ref } from "vue";
import images from "../assets/images/receipt-item.png";
import SideBarLayout from '@/Components/sidebar.vue';

export default {
  name: "Myoffer",

  layout: SideBarLayout,

  setup() {
    const showModal = ref(false);
    const toogleModal = () => {
      showModal.value = !showModal.value;
    };
    const modal = ref(false);
    const modalForm = ref(false);
    const afrterform = ref(false);
    const openModal = () => {
      modal.value = true;
      modalForm.value = true;
    };
    const openModalAfterForm = () => {
      modalForm.value = false;

      afrterform.value = true;
    };
    const closeModalAfterForm = () => {
      modalForm.value = false;
      modal.value = false;
      afrterform.value = false;
    };
    const items = ref([
      {
        name: "Demande de transfert vers Canada",
        amount: 500000,
        rate: 450,
        state: "rejeter",
      },
      {
        name: "Demande de transfert vers Canada",
        amount: 500000,
        rate: 450,
        state: "En attente",
      },
      {
        name: "Demande de transfert vers Canada",
        amount: 500000,
        rate: 450,
        state: "Traitement en cours",
      },
      {
        name: "Demande de transfert vers Canada",
        amount: 500000,
        rate: 450,
        state: "rejeter",
      },

    ]);
    return {
      images,
      items,
      toogleModal,
      showModal,
      modal,
      openModal,
      modalForm,
      openModalAfterForm,
      afrterform,
      closeModalAfterForm,
    };
  },
};
</script>
<style scoped>
input:focus {
  outline: 2px solid #347ae2;
}
</style>
