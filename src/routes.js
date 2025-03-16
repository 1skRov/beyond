import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '@/pages/MainPage/MainPage.vue';
import Profile from "@/pages/Profile/Profile.vue";
import University from "@/pages/University/UniversityItem2.vue";
import TestmainPage from "@/pages/Test/Main.vue"
import HomeView from "@/components/TestPage/TestPage.vue"
import TestView from "@/components/TestPage/TestView.vue"
import Result from "@/components/TestPage/Result.vue"
import HomeViews from '@/components/TestPage/view.vue';
import TestView1 from '@/components/TestPage/test.vue';
import res from '@/components/TestPage/res.vue';


const routes = [
    { path: '/', name: 'Home', component: MainPage },
    { path: '/profile', name: 'Profile', component: Profile },
    { path: '/university', name: 'University', component: University },
    { path: '/tests', name: 'tests', component: TestmainPage },

    // { path: '/tests', component: HomeView },
    // { path: '/quiz', component: TestView },
    // { path: '/results', component: Result },
    { path: '/home', component: HomeViews },
    { path: '/test/:id', component: TestView1, props: true },
    { path: '/results/:id', component: res }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;