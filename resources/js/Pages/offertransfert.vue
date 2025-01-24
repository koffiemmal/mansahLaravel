<template>
  <form action="" class="flex-col justify-center justify-items-center">
    <section
      class="bg-newoffer2 text-white font-light py-2 w-full px-4 rounded-lg"
    >
      <p class="text-xl py-3 border-b-2 border-gray-500">
        Informations de l'offre
      </p>
      <p class="text-md text-dashboard py-3">
        Pour postuler a cette offre, veuillez effectuer suivre les instruction
        suivantes .......
      </p>
    </section>
    <section class="w-[100%]  flex flex-col items-center  justify-items-center ">
      <div class="flex flex-col md:flex-row gap-3  md:gap-16">
        <p class="p-2 md:p-5 text-2xl font-medium">Emetteur</p>
        <section class="grid grid-cols-1 md:grid-cols-2  gap-10 py-0 md:py-5">
          <article class="flex flex-col w-full">
            <label for="">Nom *</label>
            <input
              class="border-2 w-full rounded-md py-2 ps-4 pr-16"
              placeholder="nom"
              type="text"
              required
            />
          </article>
          <article class="flex flex-col w-full">
            <label for="">Prénom *</label>
            <input
              class="border-2 w-full rounded-md py-2 ps-4 pr-16"
              placeholder="Prénom"
              type="text"
              required
            />
          </article>
          <article class="flex flex-col w-full">
            <label for="">Adresse e-mail * </label>
            <input
              class="border-2 w-full rounded-md py-2 ps-4 pr-16"
              placeholder="email"
              type="email"
              required
            />
          </article>
          <article class="flex flex-col w-full">
            <label for="">Numéro de téléphone * </label>
            <input
              class="border-2 w-full rounded-md py-2 ps-4 pr-16"
              placeholder="+1 8787 878 788 878"
              type="number"
              required
            />
          </article>
        </section>
      </div>
      <div class="flex flex-col md:flex-row  gap-3 md:gap-16">
        <p class="px-3  py-2 md:py-5 text-2xl font-medium">Recepteur</p>
        <section class="grid grid-cols-1 md:grid-cols-2 gap-10 md:py-5">
          <article class="flex flex-col w-full">
            <label for="">Nom *</label>
            <input
              class="border-2 w-full rounded-md py-2 ps-4 pr-16"
              placeholder="Recepteur"
              type="text"
              required
            />
          </article>
          <article class="flex flex-col w-full">
            <label for="">Prénom *</label>
            <input
              class="border-2 w-full rounded-md py-2 ps-4 pr-16"
              placeholder="Prénom"
              type="text"
              required
            />
          </article>
          <article class="flex flex-col w-full">
            <label for="">Adresse e-mail * </label>
            <input
              class="border-2 w-full rounded-md py-2 ps-4 pr-16"
              placeholder="recepteur@email.com"
              type="email"
              required
            />
          </article>
          <article class="flex flex-col w-full">
            <label for="">Numéro de téléphone * </label>
            <input
              class="border-2 w-full rounded-md py-2 ps-4 pr-16"
              placeholder="+221 78 120 53 74"
              type="number"
              required
            />
          </article>
          <article class="flex flex-col w-full">
            <label for="">Montant du transfert * </label>
            <input
              class="border-2 w-full rounded-md py-2 ps-4 pr-16"
              placeholder="5000 dollard canadien"
              type="number"
              required
            />
          </article>
          <article class="flex flex-col w-full">
            <label for="">Montant en cfa * </label>
            <input
              class="border-2 w-full rounded-md py-2 ps-4 pr-16"
              placeholder=""
              type="text"
              required
            />
          </article>
          <article class="flex flex-col w-full">
            <label for="">Taux de change proposé  * </label>
            <input
              class="border-2 w-full rounded-md py-2 ps-4 pr-16"
              placeholder="450"
              type="number"
              required
            />
          </article>
          <article class="flex flex-col w-full">
            <label for="">Pays de destination  * </label>
            <select
              class="border-2 w-full rounded-md py-2 ps-4 pr-16"
              placeholder="Senegal"
              type="text"
              required
            >
            <option v-for="city in CityList" :key="city.id" :value="city.name">{{ city.name }}</option>
            </select>
          </article>

          <button
          class="px-10  w-full  py-2 md:py-4 text-sm font  bg-newoffer border-white border-2 text-white rounded-lg hover:opacity-90 transition"
        >
        Effectuer le paiement
        </button>
        </section>
    </div>


</section>
</form>


</template>
<script>
import { ref } from "vue";
import SideBarLayout from '@/Components/sidebar.vue';
export default {
  name: "offertransfert",
  layout: SideBarLayout,
  setup() {
    const modal = ref(false);
    const CityList = ref([
      { id: 1, name: "Dakar" },
      { id: 2, name: "Thies" },
      { id: 3, name: "Mbour" },

    ]);
    const openModal = () => {
      modal.value = true;
    };
    return { modal, openModal, CityList };
  },
};
</script>
<style>
input:focus {
  outline: 2px solid #347ae2;
}
</style>
