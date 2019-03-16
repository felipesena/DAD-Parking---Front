import Vue from 'vue'
import Router from 'vue-router'
import Login from './components/auth/Login.vue'
import Register from './components/auth/Register.vue'

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
        }
    ]
})