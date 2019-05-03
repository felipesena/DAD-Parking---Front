import Vue from 'vue';
import * as types from '../types.js';
import { LOGIN_URL, REGISTER_URL } from '../../utils/constants.js';

const JWT_LOCALSTORAGE_ITEM = 'bgtrackerjwt';

/* eslint-disable */
const actions = {
    [types.LOGOUT]: ({commit}) => {
        if(localStorage.bgtrackerjwt) {
            localStorage.removeItem(JWT_LOCALSTORAGE_ITEM)
            commit(types.DISPATCH_CURRENT_USER)
            return true;
        }

        return false;
    },
    [types.REGISTER_USER]: async ({commit},payload) => {
        return Vue.axios.post(REGISTER_URL, payload);
    },
    [types.LOGIN_INTO_SERVER]: async ({commit}, payload) => {        
        Vue.axios.post(LOGIN_URL, payload)
            .then(res => {                
                let token = res.data.token;                
                localStorage.setItem(JWT_LOCALSTORAGE_ITEM, token);
                commit(types.CURRENT_USER_FETCHED, res.data.user);                
            })
            .catch(() => {
                localStorage.removeItem(JWT_LOCALSTORAGE_ITEM);                
            })
    },
    [types.INITIAL_LOAD]: async ({commit}) => {
        if(localStorage.bgtrackerjwt) {                        
            Vue.axios.get(process.env.VUE_APP_SERVER_HOST + "/api/auth/user")
                .then(res => {                    
                    commit(types.CURRENT_USER_FETCHED, res.data);                    
                });            
        }
    }
}

export default actions;