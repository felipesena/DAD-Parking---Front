import Vue from 'vue';
import * as types from '../types.js';
import { resolve, reject } from 'q';

const JWT_LOCALSTORAGE_ITEM = 'bgtrackerjwt';

const actions = {
    [types.LOGOUT]: (commit) => {
        if(localStorage.bgtrackerjwt) {
            localStorage.removeItem(JWT_LOCALSTORAGE_ITEM)
            commit(types.DISPATCH_CURRENT_USER)
            return true;
        }

        return false;
    },
    [types.REGISTER_USER]: (payload) => {
        return Vue.axios.post(process.env.VUE_APP_SERVER_HOST + '/api/auth/register', payload);
    },
    [types.LOGIN_INTO_SERVER]: (commit, payload) => {
        Vue.axios.post(process.env.VUE_APP_SERVER_HOST + '/api/auth/login', payload)
            .then(res => {
                let token = res.data.token;
                localStorage.setItem(JWT_LOCALSTORAGE_ITEM, token);
                commit(types.DISPATCH_CURRENT_USER);
                resolve(res);
            })
            .catch(err => {
                localStorage.removeItem(JWT_LOCALSTORAGE_ITEM);                
                reject(err);
            })
    },
    [types.INITIAL_LOAD]: (commit) => {
        if(localStorage.bgtrackerjwt) {
            Vue.axios.defaults.headers.common.Authorization = `Bearer ${localStorage.bgtrackerjwt}`;
            const res = await Vue.axios.get(process.env.VUE_APP_SERVER_HOST + "/api/auth/user");
            commit(types.CURRENT_USER_FETCHED, res.data);
        }
    }
}

export default actions;