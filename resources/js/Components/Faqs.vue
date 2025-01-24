<template>
    <div class="flex flex-col md:flex-row py-20 justify-center items-center md:items-start  justify-items-center ">
      <section>
        <p class="text-2xl font-semibold py-10  md:py-20 md:text-4xl">
          Foire aux <br />
          Questions
        </p>
      </section>
      <section class="mx-5  shadow-md lg:w-[50%]  ">
        <article v-for="(faq, index) in faqs" :key="index" class="p-5">
          <section class="flex flex-row items-center">
            <h2 class="text-md font-medium p-3 border-b-2 w-[100%] border-secondary-o ">
              {{ faq.question }}
            </h2>
            <button @click="toggleAnswer(index)" class="w-5">
              <img class="h-4 w-4" :src="add" alt="" />
            </button>
          </section>
          <p v-if="faq.showAnswer" class="text-secondary text-sm p-3  ">
            {{ faq.answer }}
          </p>
        </article>
      </section>
    </div>
  </template>
  <script>
  import { ref } from "vue";
  import add from "../assets/images/add.png";
  
  export default {
    setup() {
      const faqs = ref([
        {
          question:
            "Qu'est-ce que le transfert d'argent et pourquoi est-ce le meilleur moyen d'envoyer des fonds en ligne ?",
          answer:
            "Le transfert d'argent permet de faciliter les transactions financières, offrant une méthode rapide et sécurisée pour envoyer des fonds à travers le monde. Grâce à des plateformes innovantes, vous pouvez gérer vos finances sans tracas.",
          showAnswer: true,
        },
    
        {
          question:
            "Quel est votre service de transfert d'argent préféré parmi les options disponibles ?",
          answer:
            "Le transfert d'argent permet de faciliter les transactions financières, offrant une méthode rapide et sécurisée pour envoyer des fonds à travers le monde. Grâce à des plateformes innovantes, vous pouvez gérer vos finances sans tracas.",
          showAnswer: false,
        },
        {
          question:
            "Comment cloner un transfert d'argent à partir de votre historique de transactions ?",
          answer:
            "Le transfert d'argent permet de faciliter les transactions financières, offrant une méthode rapide et sécurisée pour envoyer des fonds à travers le monde. Grâce à des plateformes innovantes, vous pouvez gérer vos finances sans tracas.",
          showAnswer: false,
        },
        {
          question:
            "Pourquoi notre agence de transfert d'argent est-elle la meilleure option sur le marché ?",
          answer:
            "Le transfert d'argent permet de faciliter les transactions financières, offrant une méthode rapide et sécurisée pour envoyer des fonds à travers le monde. Grâce à des plateformes innovantes, vous pouvez gérer vos finances sans tracas.",
          showAnswer: false,
        },
        {
          question:
            "Quand le service de transfert d'argent a-t-il été lancé pour la première fois ?",
          answer:
            "Le transfert d'argent permet de faciliter les transactions financières, offrant une méthode rapide et sécurisée pour envoyer des fonds à travers le monde. Grâce à des plateformes innovantes, vous pouvez gérer vos finances sans tracas.",
          showAnswer: false,
        },
        {
          question:
            "Comment intégrer des services de transfert d'argent avec votre application de gestion financière ?",
          answer:
            "Le transfert d'argent permet de faciliter les transactions financières, offrant une méthode rapide et sécurisée pour envoyer des fonds à travers le monde. Grâce à des plateformes innovantes, vous pouvez gérer vos finances sans tracas.",
          showAnswer: false,
        },
      ]);
  
     // const showAnswer = ref(false);
  
      const toggleAnswer = (index) => {
        faqs.value[index].showAnswer = !faqs.value[index].showAnswer;
        // showAnswer.value = !showAnswer.value;
      };
  
      return {
        faqs,
        toggleAnswer,
        add
      };
    },
  };
  </script>
  