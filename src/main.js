import { createApp } from 'vue'
import PrimeVue from 'primevue/config';
import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';
import './style.css'
import App from './App.vue'
import '@flaticon/flaticon-uicons/css/all/all.css';
import { createPinia } from 'pinia';
import router from '@/routes.js'


const app = createApp(App);
const MyPreset = definePreset(Aura, {
    semantic: {
        primary: {
            50: '{blue.50}',
            100: '{blue.100}',
            200: '{blue.200}',
            300: '{blue.300}',
            400: '{blue.400}',
            500: '{blue.500}',
            600: '{blue.600}',
            700: '{blue.700}',
            800: '{blue.800}',
            900: '{blue.900}',
            950: '{blue.950}'
        }
    }
});
app.use(createPinia());
app.use(PrimeVue, {
    theme: {
        preset: MyPreset,
        options: {
            prefix: 'p',
            darkModeSelector: false,
            cssLayer: false
        }
    }
});
app.use(router);
app.mount('#app');
