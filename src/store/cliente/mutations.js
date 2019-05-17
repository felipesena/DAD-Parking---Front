import * as types from '../types.js';

const mutations = {
    [types.ON_GET_CLIENTES]: (state, payload) => {
        if(payload) {
            state.clientes = payload;
        }
    },
    [types.ON_CREATE_CLIENTE]: (state, payload) => {
        state.clientes.push(payload);
    },
    [types.ON_DELETE_CLIENTE]: (state, payload) => {
        const index = state.clientes.indexOf(payload);
        state.clientes.splice(index, 1);
    },
    [types.ON_UPDATE_CLIENTE]: (state, payload) => {
        Object.assign(state.clientes[payload.index], payload.cliente);
    }
};

export default mutations;