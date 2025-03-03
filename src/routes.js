import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '@/pages/MainPage/MainPage.vue';
import Profile from "@/pages/Profile/Profile.vue";


const routes = [
    { path: '/', name: 'Home', component: MainPage },
    { path: '/profile', name: 'Profile', component: Profile },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;