import * as types from '../types.js';

const mutations = {
    [types.ON_GET_CLIENTES]: (state, payload) => {
        if(payload) {
            state.clientes = payload;
        }
    }
};

export default mutations;