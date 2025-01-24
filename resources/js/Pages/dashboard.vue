<template>
    <Sidebar> </Sidebar>
</template>

<script>
import Sidebar from "@/Components/sidebar.vue";
import { ref } from "vue";
import DemandesListes from "@/Pages/demande.vue";

export default {
    name: "Dashboard",
    /**
     *
        <template v-else-if="title === 'AvailableOffer'">
            <AvailableOffer />
        </template>

        <template v-else-if="title === 'NewOffer'">
            <NewOffer />
        </template>

        <template v-else-if="title === 'DemandesListes'">
            <DemandesListes />
        </template>
     */

    components: {
        Sidebar,
        // Uncomment and add other components as needed

        DemandesListes,
    },

    props: {
        title: {
            type: String,
            default: "Myoffer",
        },
    },

    mounted() {
        console.log("Component mounted.", this.title);
        /**
 *         switch (this.title) {
            case "Myoffer":
                return "Myoffer";

                break;
            case "AvailableOffer":
                return "AvailableOffer";
                break;

            case "NewOffer":
                return "NewOffer";
                break;

            default:
                break;
        }
 */
    },
};
</script>
<style scoped>
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
