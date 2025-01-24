<template>
    <div class="home py-12 w-[100%] flex flex-col">
        <section
            class="bg-primary rounded-3xl w-[100%] flex flex-col lg:flex-row"
        >
            <div
                class="px-8 sm:px-8 md:ps-10 pt-10 lg:ps-24 md:py-24 flex-col items-start"
            >
                <p data-intro="Bienvenue sur notre plateforme de transfert d'argent" data-step="1"
                    class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-relaxed-"
                >
                    Envoyer de l’argent à vos proches efficacement partout dans
                    le monde.
                </p>
                <p class="text-white py-8">
                    Commencez dès maintenant à transférer des fonds en toute
                    sécurité !
                </p>
                <section class="">
                    <button
                        class="px-10 mx-2 my-2 py-2 text-sm font-light border-2 bg-white border-white text-primary rounded-full hover:bg-primary hover:text-white transition"
                    >
                        Créer un compte
                    </button>
                    <button
                        class="px-10 mx-2 my-2 py-2 text-sm font-light bg-primary border-white border-2 text-white rounded-full hover:opacity-90 transition"
                    >
                        En savoir plus
                    </button>
                </section>
            </div>
            <section
                id="personplace"
                class="size-full flex flex-col justify-end items-center"
            >
                <img
                    data-intro="Pour etre de bonne humeur et pas stresser lors de vos envoi d'argent " data-step="2"
                    :src="imagePath"
                    alt="Person"
                    id="person"
                    class="bottom-0 h-full"
                />
            </section>
        </section>
        <section data-intro="Nos Qualités" data-step="3"
            class="py-10 text-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
        >
            <div class="m-3">
                <p class="font-bold text-3xl sm:text-4xl md:text-5xl">95%</p>
                <p class="text-gray-800 font-light">
                    de satisfaction client grâce à notre service rapide et
                    sécurisé.
                </p>
            </div>
            <div class="m-3">
                <p class="font-bold text-3xl sm:text-4xl md:text-5xl">95%</p>
                <p class="text-gray-800 font-light">
                    de nos utilisateurs recommandent notre service à leurs
                    proches.
                </p>
            </div>
            <div class="m-3">
                <p class="font-bold text-3xl sm:text-4xl md:text-5xl">95%</p>
                <p class="text-gray-800 font-light">
                    Veuillez renseigner les informations de votre demande.
                    Veuillez renseigner les informations de votre.
                </p>
            </div>
        </section>
    </div>
</template>

<script>
import imagePath from "../assets/images/person.png";
import introJs from 'intro.js';

export default {
    name: "Home",

    methods: {
        startTour() {
            introJs().start(); // Démarrer le tutoriel
        },
    },
    mounted() {
        this.startTour();
    },
    setup() {
        return {
            imagePath,
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

#personplace {
    background-image: url("../assets/images/backside.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
}

body {
    font-family: "Poppins", sans-serif;
}
@media (min-width: 1022px) and (max-width: 1377px) {
    #person {
        display: none;
    }
}
</style>
