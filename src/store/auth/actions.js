import * as types from '../types.js';

const JWT_LOCALSTORAGE_ITEM = 'bgtrackerjwt';

/* eslint-disable */
const actions = {
    [types.LOGOUT]: ({commit, dispatch}) => {
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
    [types.LOGIN_INTO_SERVER]: async ({commit, dispatch}, payload) => {
        Vue.axios.post(process.env.VUE_APP_SERVER_HOST + '/api/auth/login', payload)
            .then(res => {                
                let token = res.data.token;                
                localStorage.setItem(JWT_LOCALSTORAGE_ITEM, token);
                commit(types.CURRENT_USER_FETCHED, res.data.user);                
            })
            .catch(err => {
                localStorage.removeItem(JWT_LOCALSTORAGE_ITEM);                
            })
    },
    [types.INITIAL_LOAD]: async ({commit, dispatch}) => {
        if(localStorage.bgtrackerjwt) {                        
            Vue.axios.get(process.env.VUE_APP_SERVER_HOST + "/api/auth/user")
                .then(res => {                    
                    commit(types.CURRENT_USER_FETCHED, res.data);                    
                });            
        }
    }
}

export default actions;