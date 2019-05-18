import * as types from '../types.js';

const mutations = {
    [types.ON_GET_TARIFAS]: (state, payload) => {
        if(payload) {
            state.tarifas = payload
        }          
    },
    [types.ON_CREATE_TARIFA]: (state, payload) => {
        state.tarifas.push(payload);
    },
    [types.ON_DELETE_TARIFA]: (state, payload) => {
        const index = state.tarifas.indexOf(payload);
        state.tarifas.splice(index, 1);
    },
    [types.ON_UPDATE_TARIFA]: (state, payload) => {        
        Object.assign(state.tarifas[payload.index], payload.tarifa);
    }    
};

export default mutations;