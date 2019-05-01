import * as types from '../types.js';

const mutations = {
    [types.CURRENT_USER_FETCHED]: (state, payload) => {        
        state.user.id = payload.id;
        state.user.email = payload.email;
        state.user.username = payload.username;
    },
    [types.DISPATCH_CURRENT_USER]: (state) => {
        state.user.id = null;
        state.user.email = "";
        state.user.username = "";
    }
}

export default mutations;