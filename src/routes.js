import {createRouter, createWebHistory} from 'vue-router';
import MainPage from '@/pages/MainPage/MainPage.vue';
import Profile from "@/pages/Profile/Profile.vue";
import University from "@/pages/University/UniversityItem2.vue";
// test
import TestMainPage from "@/pages/Test/Main.vue"
import SingleTestPage from "@/pages/Test/SingleTestPage.vue";
import MultipleTestPage from "@/pages/Test/MultipleTestPage.vue";
import TestItem from "@/pages/Test/TestItem.vue"
import Result from "@/pages/Test/TestResult.vue"
// roadmap
import MainRoadMapPage from "@/pages/Roadmap/MainRoadMapPage.vue";
// courses
import MainCoursesPage from "@/pages/Courses/MainCoursesPage.vue";
// layouts
import DefaultLayout from '@/pages/DefaultLayout.vue';
import EmptyLayout from '@/pages/EmptyLayout.vue';


const routes = [
    {
        path: '/',
        component: EmptyLayout,
        children: [
            {path: '', name: 'Home', component: MainPage},
        ]
    },
    {
        path: '/test-item',
        component: EmptyLayout,
        children: [
            {path: '', name: 'testItem', component: TestItem}
        ]
    },
    {
        path: '/',
        component: DefaultLayout,
        children: [
            {path: 'profile', name: 'Profile', component: Profile},
            {path: 'university', name: 'University', component: University},
            {
                path: 'tests', name: 'tests', component: TestMainPage, children: [
                    {path: '', redirect: {name: 'single-tests'}},
                    {path: 'single-test', name: 'single-tests', component: SingleTestPage},
                    {path: 'multiple-test', name: 'multiple-tests', component: MultipleTestPage},
                ]
            },
            {path: 'result', name: 'Result', component: Result},
            {path: 'roadmap', name: 'Roadmap', component: MainRoadMapPage},
            {path: 'courses', name: 'Courses', component: MainCoursesPage},
        ]
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;