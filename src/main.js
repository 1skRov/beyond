import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import '@flaticon/flaticon-uicons/css/all/all.css';
import { createPinia } from 'pinia';
import router from '@/routes.js'

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.mount('#app');
