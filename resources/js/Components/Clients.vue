<template>
    <div class="flex flex-col justify-center items-center">
      <!-- Header Section -->
      <section class="flex flex-row justify-center mx-20 gap-16 lg:gap-52 py-10">
        <p class="text-2xl sm:text-3xl text-center font-medium md:text-4xl">
          Ce Que Nos Clients Disent
        </p>
<!--        <div class="flex flex-row gap-3">
          <button
            class="bg-gray-200 w-10 h-10 rounded-full flex items-center justify-center"
          >
            <img
              src="../assets/images/chevron-left.png"
              alt="Go back"
              class="w-4 h-4"
            />
          </button>
          <button
            class="bg-primary w-10 h-10 rounded-full flex items-center justify-center"
          >
            <img
              src="../assets/images/chevron-right.png"
              alt="Go forward"
              class="w-4 h-4"
            />
          </button>
        </div>-->
      </section>
  
      <!-- Cards Section -->
      <section class="grid grid-cols-1  md:grid-cols-3  gap-3 justify-center">
        <article
          v-for="(datas, index) in data"
          :key="index"
          :class="[
            datas.color,
            'w-full',
            'p-7',
           

            
            'rounded-2xl',
            datas.color === 'bg-primary' ? 'text-white' : 'text-black'
          ]"
        >
          <section class="flex flex-row items-center">
            <section class="size-12 md:size-10">
              <img
                class="h-full w-full rounded-full object-cover"
                :src="datas.profil"
                alt="Profile"
              />
            </section>
            <section class="mx-2 flex flex-col justify-start">
              <p class="text-sm lg:text-md font-semibold">{{ datas.name }}</p>
              <p class="text-sm lg:text-xs">{{ datas.position }}</p>
            </section>
          </section>
          <p class="text-xs font-extralight pt-4 leading-5">
            {{ datas.description }}
          </p>
        </article>
      </section>
    </div>
  </template>
  
  <script>
  import { ref } from "vue";
  import profil from "../assets/images/profil.png";
  import profil2 from "../assets/images/profil-2.png";
  import profil3 from "../assets/images/profil-3.png";

  export default {
    setup() {
      const data = ref([
        {
          name: "Amélia Joseph",
          position: "Chief Manager",
          profil:profil,
          state: true,
          color: "bg-primary",
          description:
            "Ma vision a pris vie sans effort. Leur mélange d'approche décontractée et professionnelle a rendu le processus facile. La créativité a coulé, et les résultats ont dépassé mes attentes.",
        },
        {
          name: "Jacob Joshua",
          position: "Directeur Général",
          profil:profil2,
          state: false,
          color: "bg-gray-200",
          description:
            "J'ai trouvé l'expertise numérique dont j'avais besoin. Leur équilibre entre créativité et professionnalisme a dépassé mes attentes. Interactions amicales, résultats exceptionnels. Pour une magie numérique, il faut choisir Embrace !",
        },
        {
          name: "Sarah Michel",
          position: "Project Lead",
          profil:profil3,
          state: false,
          color: "bg-gray-200",
          description:
            "Embrace réussit vraiment ! Brillance créative, style accessible. Ce sont les partenaires que vous voulez : l'art rencontre la stratégie. Ravi de ce qu'ils ont réalisé !",
        },
      ]);
  
      return {
        data,
        profil,
        profil2,
        profil3,
      };
    },
  };
  </script>
  
  <style>
  /* Add any necessary styles here */
  </style>
  