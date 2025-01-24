<template>
    <section>
        <form
            class="flex flex-row justify-items-center items-center gap-1"
            action="
    input"
        >
            <input
                class="border-2 rounded-md py-2 my-2 md:py-2 px-4 md:px-8"
                placeholder="Rechercher par nom"
                type="search"
            />
            <button class="border-2 rounded-lg h-11 px-2.5 md:p-2">
                <img src="../assets/images/setting-4.png" alt="" />
            </button>
        </form>
        <section class="grid grid-cols-1 md:grid-cols-2 gap-5">
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
                        class="px-5 mt-6 py-2 text-xs font bg-mygreen border-white border-2 text-white rounded-lg hover:opacity-90 transition"
                    >
                        Details
                    </button>
                </section>
            </div>
        </section>
    </section>
</template>

<script>
import { ref } from "vue";
import images from "../assets/images/receipt-item.png";
import SideBarLayout from '@/Components/sidebar.vue';

export default {
    name: "available",

    layout: SideBarLayout,

    setup() {
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
                state: "Traitement en cours",
            },
        ]);
        return {
            images,
            items,
        };
    },
};
</script>
<style scoped>
input:focus {
    outline: 2px solid #347ae2;
}
</style>
