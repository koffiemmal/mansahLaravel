import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/js/app.js',
                 'resources/js/Pages/landing.vue',
                    'resources/js/Pages/demande.vue',
                    'resources/js/Pages/myoffer.vue',
                    'resources/js/Pages/newoffer.vue',
                    'resources/js/Pages/available.vue',
                    'resources/js/Pages/offertransfert.vue',

            ],
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
    ],
});
