<template>
    <div
        id="navBar"
        class="py-3 flex w-full justify-between items-center bg-white"
    >
        <!-- Logo Section -->
        <section>
            <section class="flex items-center gap-2">
                <img :src="logo" alt="logo" class="h-8 w-8" />
                <p class="font-medium text-md">Mansah</p>
            </section>
            <nav
                v-if="dropdown"
                class="absolute lg:hidden bg-white shadow-md rounded-md p-4"
            >
                <ul
                    class="flex flex-col space-y-4 font-medium text-sm md:text-base"
                >
                    <li class="cursor-pointer hover:text-primary transition">
                        Accueil
                    </li>
                    <li class="cursor-pointer hover:text-primary transition">
                        Les offres
                    </li>
                    <li class="cursor-pointer hover:text-primary transition">
                        À propos de nous
                    </li>
                    <li class="cursor-pointer hover:text-primary transition">
                        Contactez-nous
                    </li>
                    <section class="hidden sm:block md:hidden">
                        <Link
                            href="/dashboard"
                            class="px-4 mx-2 py-2 text-sm font-bold border-2 border-primary text-primary rounded-full hover:bg-primary hover:text-white transition"
                        >
                            Créer un compte
                        </Link>
                        <Link
                            href="/dashboard"
                            class="px-4 py-2 text-sm font-bold bg-primary border-primary border-2 text-white rounded-full hover:opacity-90 transition"
                        >
                            Se connecter
                        </Link>
                    </section>
                </ul>
            </nav>
        </section>

        <!-- Navigation Links -->
        <nav class="hidden lg:block">
            <ul class="flex space-x-6 font-medium text-sm md:text-md">
                <li class="cursor-pointer">Accueil</li>
                <li class="cursor-pointer">Les offres</li>
                <li class="cursor-pointer">À propos de nous</li>
                <li class="cursor-pointer">Contactez-nous</li>
                <li></li>
            </ul>
        </nav>

        <!-- Buttons Section -->
        <section class="hidden md:flex items-center space-x-4">
            <Link
               href="/dashboard"
                class="px-4 py-2 text-sm font-bold border-2 border-primary text-primary rounded-full hover:bg-primary hover:text-white transition"
            >
                Créer un compte
            </Link>
            <Link
               href="/dashboard"
                class="px-4 py-2 text-sm font-bold bg-primary border-primary border-2 text-white rounded-full hover:opacity-90 transition"
            >
                Se connecter
            </Link>
        </section>

        <button @click="dropdownToggle" class="block lg:hidden">
            <img class="h-6 w-6" :src="menu" alt="Menu" />
        </button>

        <!-- Mobile Menu Icon -->
    </div>
</template>

<script>
import { ref } from "vue";
import logo from "./../assets/images/icon.png";
import menu from "./../assets/images/filtre_icon.png";
import { Link } from "@inertiajs/vue3";

export default {
    name: "Header",

    components: {
        Link,
    },

    setup() {


        // Déclaration de la variable réactive pour le menu déroulant
        const dropdown = ref(false);

        // Fonction pour basculer l'état du menu déroulant
        const dropdownToggle = () => {
            dropdown.value = !dropdown.value;
        };

        const goToDashboard = () => {
            this.$inertia.get(route("dashboard"));
            print("Go to Dashboard");
        };

        return {
            logo,
            menu,
            dropdown,
            dropdownToggle,
            goToDashboard,
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
}
</style>
