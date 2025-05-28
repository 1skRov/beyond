import {createRouter, createWebHistory} from 'vue-router';
import { isLoggedIn } from '@/services/authService';
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
import RoadItem from "@/pages/Roadmap/Flo.vue"
// courses
import MainCoursesPage from "@/pages/Courses/MainCoursesPage.vue";
import CourseItemPage from "@/pages/Courses/CourseItemPage.vue";
// layouts
import DefaultLayout from '@/pages/DefaultLayout.vue';
import EmptyLayout from '@/pages/EmptyLayout.vue';
// an
import Analytics from "@/pages/Analytics/Analytics.vue"

//reg
import RegisterPage from "@/pages/Register/Register.vue"

const routes = [
    {
        path: '/',
        component: EmptyLayout,
        children: [
            {path: '', name: 'Home', component: MainPage},
            { path: '/register',name: 'Register',component: RegisterPage },
            {path: 'courses-item', name: 'CoursesItem', component: CourseItemPage},
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
        meta: { requiresAuth: true },
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
            {path: 'roadmap', name: 'Roadmap', component: MainRoadMapPage, children: []},
            {path: 'road-item', name: 'RoadItem', component: RoadItem},
            {path: 'courses', name: 'Courses', component: MainCoursesPage},
            {path: 'analytics', name: 'Analytics', component: Analytics},
        ]
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, _from, next) => {
  if (to.meta.requiresAuth && !isLoggedIn()) {
    next({ name: 'Home', query: { redirect: to.fullPath } });
  } else if ((to.name === 'Home' || to.name === 'Register') && isLoggedIn()) {
    next({ name: 'Profile' });
  } else {
    next();
  }
});

export default router;