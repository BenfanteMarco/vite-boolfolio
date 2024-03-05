import { createRouter, createWebHistory } from "vue-router";

import AppHome from './pages/AppHome.vue';
import Projects from './pages/Projects.vue';
import AppNotFound from './pages/AppNotFound.vue';
import DetailsProject from './pages/DetailsProject.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/projects',
            name: 'projects',
            component: Projects
        },
        {
            path: '/projects/:slug',
            name: 'details-project',
            component: DetailsProject
        },
        {
            path: '/:patchMatch(.*)*',
            name: 'not-found',
            component: AppNotFound
        },
    ]

});

export default router;