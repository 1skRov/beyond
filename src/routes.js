import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '@/pages/MainPage/MainPage.vue';
import Profile from "@/pages/Profile/Profile.vue";
import University from "@/pages/University/UniversityItem2.vue";


const routes = [
    { path: '/', name: 'Home', component: MainPage },
    { path: '/profile', name: 'Profile', component: Profile },
    { path: '/university', name: 'University', component: University },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;