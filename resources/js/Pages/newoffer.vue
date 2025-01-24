<template>
  <form action="" class="flex-col justify-center justify-items-center">
    <table class="w-[80%]">
      <tr class="flex flex-col md:flex-row gap-10 py-5">
        <td class="flex flex-col w-full">
          <label for="">Nom du destinataire *</label>
          <input
            class="border-2 w-full rounded-md py-2 ps-4 pr-16"
            placeholder="nom"
            type="text"
            required
          />
        </td>
        <td class="flex flex-col w-full">
          <label for="">Prénom du destinataire *</label>
          <input
            class="border-2 rounded-md py-2 px-8"
            placeholder="prénom"
            type="text"
            required
          />
        </td>
      </tr>
      <tr class="flex flex-col md:flex-row gap-10 py-5">
        <td class="flex flex-col w-full">
          <label for="">Montant du transfert * </label>
          <input
            class="border-2 w-full rounded-md py-2 ps-4 pr-16"
            placeholder="montant"
            type="number"
            required
          />
        </td>
        <td class="flex flex-col w-full">
          <label for="">Pays de destination * </label>
          <input
            class="border-2 rounded-md py-2 px-8"
            placeholder="pays de destination"
            type="text"
            required
          />
        </td>
      </tr>
      <tr class="flex flex-col md:flex-row gap-10 py-5">
        <td class="flex flex-col w-full">
          <label for="">Taux de change proposé * </label>
          <input
            class="border-2 w-full rounded-md py-2 ps-4 pr-16"
            placeholder="taux de change"
            type="number"
            required
          />
        </td>
        <td class="flex flex-col w-full">
          <label for="">Montant minimum à envoyer </label>
          <input
            class="border-2 rounded-md py-2 px-8"
            placeholder="montant minimum"
            type="number"
          />
        </td>
      </tr>

      <tr class="flex flex-col md:flex-row gap-10 py-5">
        <td class="flex flex-col w-full">
          <label for="">Moyen de transfert </label>
          <!--  <article
            class="bg-dashboard bg-opacity-10 border-2 border-dashboard h-52 w-64 relative rounded-lg overflow-hidden"
          >
            <p
              class="bg-white text-center text-gray-800 font-medium py-6 px-3 absolute bottom-0 w-full"
            >
              Mobile money (Orange, MTN, Nextel)
            </p>
          </article>-->
          <select
            class="border-2 w-full rounded-md py-2 ps-4 pr-16"
            placeholder="Senegal"
            type="text"
            required
          >
            <option
              v-for="payment in PaymentList"
              :key="payment.id"
              :value="payment.name"
            >
              {{ payment.name }}
            </option>
          </select>
        </td>
      </tr>
      <tr class="flex flex-row gap-10 py-5">
        <td class="flex flex-row w-full">
          <button
            @click="openModal"
            class="px-10 mt-6 py-2 text-md font bg-newoffer border-white border-2 text-white rounded-lg hover:opacity-90 transition"
          >
            Soumettre
          </button>
        </td>
      </tr>
    </table>
  </form>
  <div v-if="modal">
    <section
      class="z-50 fixed inset-0 h-screen w-screen bg-black bg-opacity-50 flex justify-center items-center"
    >
      <section
        class="bg-white w-full md:w-[50%] mx-3 py-10 flex rounded-lg flex-col justify-center items-center"
      >
        <form
          action="
            "
          class="flex flex-col w-[80%] h-[80%] justify-center items-center"
        >
          <p class="text-2xl font-bold py-5 mb-4 border-b-2 w-full text-center">
            Veuillez renseigner le code de la transaction
          </p>
          <article class="flex flex-col w-full py-2">
            <label for="">code de la transaction </label>
            <input
              class="border-2 w-full rounded-md py-2 ps-4 pr-16"
              placeholder="code de la transaction"
              type="text"
              required
            />
          </article>

          <button
            class="bg-modalcolor text-white font-medium mt-6 py-3 w-full"
            @click="openModal"
          >
            Envoyer
          </button>
        </form>
      </section>
    </section>
  </div>
</template>
<script>
import { ref } from "vue";
import SideBarLayout from '@/Components/sidebar.vue';
export default {
  name: "NewOffer",
  layout: SideBarLayout,

  setup() {
    const modal = ref(false);
    const openModal = () => {
      modal.value = true;
    };
    const PaymentList = ref([
      { id: 1, name: "Orange" },
      { id: 2, name: " MTN" },
      { id: 3, name: " Nextel" },
    ]);

    return { modal, openModal, PaymentList };
  },
};
</script>
<style>
input:focus {
  outline: 2px solid #347ae2;
}
</style>
