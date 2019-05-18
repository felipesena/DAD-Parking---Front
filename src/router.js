import Vue from 'vue'
import Router from 'vue-router'
import Login from './components/auth/Login.vue'
import Register from './components/auth/Register.vue'
import Home from './components/Home.vue'
import Cliente from './views/cliente/Index.vue'
import Dashboard from './views/Dashboard.vue'
import Vinculo from './views/vinculo/Vinculo.vue'
import Estacionamento from './views/estacionamento/Index.vue'
import Tarifa from './views/tarifa/Index.vue'
import Vaga from './views/vaga/Index.vue'

Vue.use(Router)

let router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/login',   
            name: 'login',
            component: Login
        },
        {
            path: '/register',
            name: 'register',
            component: Register
        },
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/cliente',
            name: 'cliente',
            component: Cliente,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: Dashboard,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/vinculo/new',
            component: Vinculo,
            meta: {
                requiresAuth: true
            }            
        },
        {
            path: '/vinculo/:id',
            component: Vinculo,
            meta: {
                requiresAuth: true
            }            
        },        
        {
            path: '/estacionamento',
            name: 'estacionamento',
            component: Estacionamento,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/tarifa',
            name: 'tarifa',
            component: Tarifa,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/vaga',
            name: 'vaga',
            component: Vaga,
            meta: {
                requiresAuth: true
            }
        }
    ]
});

router.beforeEach((to, from, next) => {
    if(to.matched.some(record => record.meta.requiresAuth)) {
        if(localStorage.getItem('bgtrackerjwt') == null) {
            next({
                path: '/login',
                params: { nextUrl: to.fullPath }
            })
        } else {
            next()
        }
    } else {
        if(localStorage.getItem('bgtrackerjwt') == null) {
            next()
        } else {
            next({ name: 'dashboard' })
        }
    }
})

export default router;