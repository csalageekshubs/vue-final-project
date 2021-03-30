import Vue from 'vue';
import VueRouter from 'vue-router';

import HomeView from '@/views/HomeView';
import ContactView from '@/views/ContactView';
import AuthorView from '@/views/AuthorView';
import PostDetailView from '@/views/PostDetailView';

Vue.use(VueRouter);

const routes = [
    { path: '/', component: HomeView },
    { path: '/contact', component: ContactView },
    { path: '/author', component: AuthorView },
    { path: '/posts/:id', component: PostDetailView}
];

const router = new VueRouter({
    routes
});

export default router;