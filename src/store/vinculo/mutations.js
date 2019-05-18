import * as types from '../types.js';

const mutations = {
    [types.ON_GET_VINCULO]: (state, payload) => {
        if(payload) {
            state.vinculos = payload;
        }
    },
    [types.ON_GET_VALOR_TOTAL]: (state, payload) => {
        if(payload) {
            Object.assign(state.vinculos[payload.index], payload.vinculo);
        }
    },
    [types.ON_CREATE_VINCULO]: (state, payload) => {
        state.vinculos.push(payload);
    },
    [types.ON_UPDATE_VINCULO]: (state, payload) => {
        Object.assign(state.vinculos[payload.index], payload.vinculo);
    }
};

export default mutations;