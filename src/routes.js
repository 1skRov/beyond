import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '@/pages/MainPage/MainPage.vue';
import Profile from "@/pages/Profile/Profile.vue";
import University from "@/pages/University/UniversityItem2.vue";
import HomeView from "@/components/TestPage/TestPage.vue"
import TestView from "@/components/TestPage/TestView.vue"
import Result from "@/components/TestPage/Result.vue"


const routes = [
    { path: '/', name: 'Home', component: MainPage },
    { path: '/profile', name: 'Profile', component: Profile },
    { path: '/university', name: 'University', component: University },
    { path: '/tests', component: HomeView },
    { path: '/quiz', component: TestView },
    { path: '/results', component: Result }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;