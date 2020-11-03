import { createRouter, createWebHistory } from 'vue-router'
const one = () =>
    import ('../views/one');
const two = () =>
    import ('../views/two')
const three = () =>
    import ('../views/three')
const four = () =>
    import ('../views/four')
const routes = [{
        path: '/:id',
        redirect: '/one/:id'
    },
    {
        path: '/one/:id',
        name: 'one',
        component: one
    },
    {
        path: '/two/:id',
        name: 'two',
        component: two
    },
    {
        path: '/three/:id',
        name: 'three',
        component: three
    },
    {
        path: '/four/:id',
        name: 'four',
        component: four
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router