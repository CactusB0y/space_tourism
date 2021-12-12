import Home from './components/Home.vue'

export default [
    {
        path: '/',
        component: Home
    },
    {
        path: '/destination',
        component: () => import(/* webpackChunkName: "destination" */ './components/Destination.vue'),
        props: true,
        children:[
            {
                name: 'Moon',
                path: ':id',
                component: () => import(/* webpackChunkName: "destination" */ './components/view/Moon.vue'),
                props: true,
            },
        ]
    },
    {
        path: '/crew',
        component: () => import(/* webpackChunkName: "crew" */ './components/Crew.vue'),
    },
    {
        path: '/technology',
        component: () => import(/* webpackChunkName: "technology" */ './components/Technology.vue'),
    },
]