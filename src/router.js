import Vue from 'vue'
import Router from 'vue-router'
import Login from './components/auth/Login.vue'
import Register from './components/auth/Register.vue'
import Home from './components/Home.vue'
import Cliente from './views/Cliente.vue'
import Dashboard from './views/Dashboard.vue'
import Estacionamento from './views/Estacionamento.vue'
import Tarifa from './views/Tarifa.vue'
import Vaga from './views/Vaga.vue'
import Vinculo from './views/Vinculo.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/login',   
            name: 'login',
            component: Login,
            meta: 
            {
                title: "DAD Parking Login"
            }
        },
        {
            path: '/register',
            name: 'register',
            component: Register,
            meta:
            {
                title: "DAD Parking Register"
            }
        },
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/cliente',
            name: 'cliente',
            component: Cliente
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: Dashboard
        },
        {
            path: '/estacionamento',
            name: 'estacionamento',
            component: Estacionamento
        },
        {
            path: '/tarifa',
            name: 'tarifa',
            component: Tarifa
        },
        {
            path: '/vaga',
            name: 'vaga',
            component: Vaga
        },
        {
            path: '/vinculo',
            name: 'vinculo',
            component: Vinculo
        }
    ]
})