<template>
    <div
      class="flex flex-row justify-between h-screen w-screen overflow-x-hidden overflow-y-hidden"
    >
      <!--Sider bar petit ecran -->

      <section
        class="bg-white block md:hidden h-screen border-r-2 border-gray-600-o p-3 md:p-9 z-10 fixed"
      >
        <!--v-if="toogleDasboard"-->

        <section>
          <button
            @click="showDashoardMobile"
            class="flex flex-row justify-center items-center justify-items-center font-medium"
          >
            <img src="../assets/images/Icon.png" alt="" />
            {{ toogleDasboardMobile ? "MANSAH" : null }}
          </button>
        </section>
        <section class="h-full flex flex-col justify-between py-8">
          <section>
            <div class="py-16">
              <button
                v-for="(navigate, index) in navigation"
                :key="index"
                :class="[
                  'text-colorDashboard  flex text-sm py-2  flex-row justify-between   gap-2',
                  navigate.activate ? 'text-colorDashboard' : 'text-dashboard',
                ]"
              >
                <section
                  :class="[
                    'flex flex-row gap-2 text-sm justify-items-center w-[100%]',
                    navigate.not ? 'text-red-500' : 'text-dashboard',
                  ]"
                >
                  <img :src="navigate.icon" alt="" />{{
                    toogleDasboardMobile ? navigate.name : null
                  }}
                </section>
              </button>
            </div>
          </section>
          <section>
            <button
              v-for="(navigate, index) in settingController"
              :key="index"
              :class="[
                'text-colorDashboard  flex text-sm py-2  flex-row justify-between   gap-2',
                navigate.activate ? 'text-red-600' : 'text-dashboard',
              ]"
            >
              <section
                :class="['flex flex-row gap-2 justify-items-center w-[100%]']"
              >
                <img :src="navigate.icon" alt="" />{{
                  toogleDasboardMobile ? navigate.name : null
                }}
              </section>
            </button>
          </section>
        </section>
      </section>
      <!--Sidebar large ecran -->
      <section

        class="bg-white hidden md:block h-screen border-r-2 border-gray-600-o p-3 md:p-6 z-10 fixed"
      >
        <!--v-if="toogleDasboard"-->

        <section>
          <button
            @click="showDashoard"
            class="flex flex-row justify-center items-center justify-items-center font-medium"
          >
            <img src="../assets/images/Icon.png" alt="" /> {{ toogleDasboard ? "MANSAH" : null }}
          </button>
        </section>
        <section class="h-full flex flex-col justify-between py-8">
          <section>
            <div class="py-16">
              <button
                v-for="(navigate, index) in navigation"
                :key="index"
                :class="[
                  'text-colorDashboard  flex text-sm py-2  flex-row justify-between   gap-2',
                  navigate.activate ? 'text-colorDashboard' : 'text-dashboard',
                ]"
              >
                <section
                  :class="[
                    'flex flex-row gap-2 justify-items-center w-[100%]',
                    navigate.not ? 'text-red-500' : 'text-dashboard',
                  ]"
                >
                  <img :src="navigate.icon" alt="" />{{ toogleDasboard ? navigate.name : null }}
                </section>


                <article
                  class="rounded-full bg-red-500 ms-7 w-9"
                  v-if="navigate.message"
                >
                  <p class="text-white">1</p>
                </article>
              </button>
            </div>
          </section>
          <section>
            <button
              v-for="(navigate, index) in settingController"
              :key="index"
              :class="[
                'text-colorDashboard  flex text-sm py-2  flex-row justify-between   gap-2',
                navigate.activate ? 'text-red-600' : 'text-dashboard',
              ]"
            >
              <section
                :class="['flex flex-row gap-2 justify-items-center w-[100%]']"
              >
                <img :src="navigate.icon" alt="" />{{ toogleDasboard ? navigate.name : null }}
              </section>
              <img
                v-if="navigate.state"
                src="../assets/images/chevron-down.png"
                alt=""
                class="ps-5"
              />

              <article
                class="rounded-full bg-red-500 ms:1 md:ms-7 w-9"
                v-if="navigate.message"
              >
                <p class="text-white">1</p>
              </article>
            </button>
          </section>
        </section>
      </section>
      <!--siderbar for toogle -->

      <section
        class="h-screen w-full flex flex-col justify-between content-between"
      >
        <section
          class="bg-white h-[8vh] md:h-[10vh] border-b-2 border-gray-600-o flex flex-row justify-between items-center w-full fixed px-4"
        >
          <!--   <button @click="showDashoard">A</button>   -->
          <section
            :class="[
              'flex-col justify-center justify-items-start items-center ps-12 py-2 md:py-4   ',
              toogleDasboard ? 'md:ps-64' : 'ps-16 md:ps-24',
            ]"
          >
            <p class="text-sm md:text-xl font-medium ">
              Bienvenu Admin,
            </p>
            <p class="text-xs md:text-sm font-extralight text-dashboard">
              tableau de bord
            </p>
          </section>

          <section
            class="flex flex-row justify-center md:gap-5 justify-items-center items-center"
          >
            <button class="hidden md:block">
              <img src="../assets/images/search.png" alt="" /></button
            ><button class="hidden md:block">
              <img src="../assets/images/bell.png" alt="" />
            </button>
            <section class="flex flex-row md:pr-2 jus">
              <img src="../assets/images/avatar.png" alt="" />
              <p class="hidden md:block">Admin Admin</p>
              <button>
                <img src="../assets/images/chevron-down.png" alt="" />
              </button>
            </section>
          </section>
        </section>
        <section
          :class="[
            'h-screen mt-[10vh] overflow-x-hidden overflow-y-auto  pr-6 pt-6  ',
            toogleDasboard ? 'ps-64' : 'md:ps-24 ps-20 ',
          ]"
        >
          <slot></slot>
        </section>
      </section>
    </div>
  </template>

  <script>
  import { ref } from "vue";
  import apercu from "../assets/images/chart.png";
  import users from "../assets/images/case.png";
  import demandes from "../assets/images/user.png";
  import caisses from "../assets/images/checkout.png";
  import parametres from "../assets/images/settings.png";
  import info from "../assets/images/info.png";
  import logout from "../assets/images/logout.png";
  import chat from "../assets/images/chat.png";

  export default {
    name: "Dashboard",
    setup() {
      const toogleDasboard = ref(false);

      const showDashoard = () => {
        toogleDasboard.value = !toogleDasboard.value;
      };

      const toogleDasboardMobile = ref(false);

      const showDashoardMobile = () => {
        toogleDasboardMobile.value = !toogleDasboardMobile.value;
      };

      const navigation = ref([
        {
          name: "Apercu",
          icon: apercu,
          state: false,
          message: false,
          activate: true,
          not: false,
        },
        /**      {
          name: "Utilisateurs",
          icon: users,
          state: true,
          message: false,
          activate: false,
          not: true,
        }, */
        {
          name: "Demandes",
          icon: demandes,
          state: true,
          message: false,
          activate: false,
          not: false,
        },
        /**      {
          name: "!Caisses",
          icon: caisses,
          state: false,
          message: true,
          activate: false,
          not: true,
        }, */
        {
          name: "Parametres",
          icon: parametres,
          state: false,
          message: false,
          activate: false,
          not: false,
        },
      ]);
      const settingController = ref([
        {
          name: "Centre d'aide",
          icon: info,

          activate: false,
        },
        {
          name: "Contacter-nous",
          icon: chat,

          activate: false,
        },
        {
          name: "Déconnexion",
          icon: logout,

          activate: true,
        },
      ]);

      return {
        toogleDasboard,
        showDashoard,
        navigation,
        settingController,
        apercu,
        users,
        demandes,
        caisses,
        parametres,
        info,
        logout,
        chat,
        toogleDasboardMobile,
        showDashoardMobile

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
