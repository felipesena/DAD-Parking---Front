import Vue from 'vue'
import Vuex from 'vuex'
import { resolve, reject } from 'q';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: {
            id: null,
            email: "",
            username: ""
        }        
    },
    getters: {
        isAuthenticated(state) {
            return !!state.user.id;
        }
    },
    mutations:{
        CURRENT_USER_FETCHED(state, user) {
            state.user.id = user.id,
            state.user.email = user.email,
            state.user.username = user.username            
        }
    },
    actions: {
        async initialLoad(context) {            
            if (localStorage.bgtrackerjwt) {                                
                Vue.axios.defaults.headers.common.Authorization = `Bearer ${localStorage.bgtrackerjwt}`;                           
                const res = await Vue.axios.get(process.env.VUE_APP_SERVER_HOST + "/api/auth/user");                          
                context.commit("CURRENT_USER_FETCHED", res.data);
            }            
        },
        async loginIntoServer(context, user) {            
            Vue.axios.post(process.env.VUE_APP_SERVER_HOST + '/api/auth/login', user)
                        .then(res => {
                            let token = res.data.token
                            localStorage.setItem('bgtrackerjwt', token)
                            context.commit("CURRENT_USER_FETCHED", res.data.user)
                            resolve(res)
                        })
                        .catch(err => {
                            localStorage.removeItem('bgtrackerjwt')
                            reject(err)
                        });             
        },
        async registerUser(context, user, fn) {
            Vue.axios.post(process.env.VUE_APP_SERVER_HOST + '/api/auth/register', user)
                        .then(res => {
                            resolve(res)                            
                            fn({ message: res, successful: false })
                        })
                        .catch(err => { 
                            reject(err)                                                                   
                            fn({ message: err, successful: false })
                        })
        }
    }
});