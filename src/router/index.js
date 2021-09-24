import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/views/Home";

Vue.use(VueRouter)

const routes = [
    {
        path: '/dashboard',
        component: () => import(/* webpackChunkName: "dashboard" */ '../layouts/Dashboard'),
        children: [
            {
                path: '',
                name: 'Home',
                component: Home
            },
            {
                path: 'users',
                name: 'Users',
                component: () => import(/* webpackChunkName: "users" */ '../views/Users'),
            },
            {
                path: 'categories',
                name: 'category-index',
                component: () => import(/* webpackChunkName: "categories" */ '../views/categories/Index'),
            },
            {
                path: 'products',
                name: 'products-index',
                component: () => import(/* webpackChunkName: "products" */ '../views/products/Index'),
            },
            {
                path: 'products/create',
                name: 'products-create',
                component: () => import(/* webpackChunkName: "products" */ '../views/products/Create'),
            },
            {
                path: 'incredible',
                name: 'incredible',
                component: () => import(/* webpackChunkName: "incredible" */ '../views/incredible/Index'),
            },
        ]
    },

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
