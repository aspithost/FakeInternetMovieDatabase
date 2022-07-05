const routes = [
    {
        path: '/',
        name: 'Homepage',
        component: () => import('../views/Homepage.vue')
    },
    {
        path: '/show/:id/:slug',
        name: 'Show',
        component: () => import('../views/Show.vue'),
        props: true
    },
]

export default routes