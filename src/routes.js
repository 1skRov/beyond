import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '@/pages/MainPage/MainPage.vue';
import Profile from "@/pages/Profile/Profile.vue";
import UniversityList from "@/pages/University/UniversityList.vue";
import UniversityItem from "@/pages/University/Universityitem2.vue";
// test
import TestMainPage from "@/pages/Test/Main.vue"
import SingleTestPage from "@/pages/Test/SingleTestPage.vue";
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

//auth
import Login from '@/pages/Register/Login.vue';
import Register from '@/pages/Register/Register.vue';

const routes = [
    {
        path: '/',
        component: EmptyLayout,
        children: [
            { path: '', name: 'Home', component: MainPage },
            { path: 'courses-item', name: 'CoursesItem', component: CourseItemPage },
            { path: "login", name: "Login", component: Login },
            { path: "register", name: "Register", component: Register },
        ]
    },
    {
        path: '/test-item',
        component: EmptyLayout,
        children: [
            { path: '', name: 'testItem', component: TestItem }
        ]
    },
    {
        path: '/',
        component: DefaultLayout,
        meta: { requiresAuth: true },
        children: [
            { path: 'profile', name: 'Profile', component: Profile },
            {
                path: 'university', name: 'University', component: UniversityList,
            },
            {
                path: 'university-item',
                name: 'UniversityItem',
                component: UniversityItem,
                props: true
            },
            {
                path: 'tests', name: 'tests', component: TestMainPage, children: [
                    { path: '', redirect: { name: 'single-tests' } },
                    { path: 'single-test', name: 'single-tests', component: SingleTestPage },
                ]
            },
            { path: 'result', name: 'Result', component: Result },
            { path: 'roadmap', name: 'Roadmap', component: MainRoadMapPage, children: [] },
            { path: 'road-item', name: 'RoadItem', component: RoadItem },
            { path: 'courses', name: 'Courses', component: MainCoursesPage },
            { path: 'analytics', name: 'Analytics', component: Analytics },
        ]
    },
    { path: "/:pathMatch(.*)*", redirect: "/" },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, from, next) => {
    const token = localStorage.getItem("jwt");

    if (to.matched.some((record) => record.meta.requiresAuth) && !token) {
        return next({ name: "Login" });
    }

    if (
        (to.name === "Login" || to.name === "Register") &&
        token
    ) {
        return next({ name: "Profile" });
    }

    next();
});

export default router;