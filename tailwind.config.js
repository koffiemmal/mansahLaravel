import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
        '/resources/js/Pages/landing.vue',
    ],

    theme: {
        extend: {
            colors: {
                primary: "#0F4C81", // Bleu personnalisé
                secondary:"#4F4F4F",
                faqs:"#F8F9FF",
                tertiary:"#E5E7EB",
                quaternary:"#E9F1FA",
                mygreen:"#068F7D",
                dashboard:'#7C8DB5',
                colorDashboard:'#347AE2',
                transfert:"#4275AD",
                newoffer:"#246176",
                newoffer2:"#004C5F",
                modalcolor:"#1C57B6"

              },
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
        },
    },

    plugins: [forms],
};
