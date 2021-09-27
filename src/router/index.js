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
            {
                path: 'discount',
                name: 'discount',
                component: () => import(/* webpackChunkName: "discount" */ '../views/discount/Index'),
            },
            {
                path: 'discount/create',
                name: 'discount-create',
                component: () => import(/* webpackChunkName: "discount" */ '../views/discount/Create'),
            },
            {
                path: 'shipment',
                name: 'shipment',
                component: () => import(/* webpackChunkName: "shipment" */ '../views/shipment/Index'),
            },
            {
                path: 'shipment/create',
                name: 'shipment-create',
                component: () => import(/* webpackChunkName: "shipment" */ '../views/shipment/Create'),
            },
            {
                path: 'guarantee',
                name: 'guarantee',
                component: () => import(/* webpackChunkName: "guarantee" */ '../views/guarantee/Index'),
            },
            {
                path: 'guarantee/create',
                name: 'guarantee-create',
                component: () => import(/* webpackChunkName: "guarantee" */ '../views/guarantee/Create'),
            },
            {
                path: 'brands',
                name: 'brands',
                component: () => import(/* webpackChunkName: "brands" */ '../views/brands/Index'),
            },
            {
                path: 'orders',
                name: 'orders',
                component: () => import(/* webpackChunkName: "orders" */ '../views/orders/Index'),
            },
            {
                path: 'orders/edit/:id',
                name: 'orders-edit',
                component: () => import(/* webpackChunkName: "orders" */ '../views/orders/Edit'),
            },
            {
                path: 'comments',
                name: 'comments',
                component: () => import(/* webpackChunkName: "comments" */ '../views/comments/Index'),
            },
            {
                path: 'stats',
                name: 'stats',
                component: () => import(/* webpackChunkName: "stats" */ '../views/stats/Index'),
            },
        ]
    },
    {
        path: '/',
        name : 'index',
        component: () => import(/* webpackChunkName: "index" */ '../views/Index'),
    },
    {
        path: '/404',
        component: () => import(/* webpackChunkName: "404" */ '../views/NotFound'),
    },
    {
        path: '/:match(.*)',
        redirect: '/404'
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

// router.beforeEach((to, from) => {
//   document.title = to.meta.title
// })

export default router
