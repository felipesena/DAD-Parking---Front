import * as types from '../types.js';

const mutations = {
    [types.ON_GET_ESTACIONAMENTOS]: (state, payload) => {
        if(payload) {
            state.estacionamentos = payload
        }          
    },
    [types.ON_CREATE_ESTACIONAMENTO]: (state, payload) => {
        state.estacionamentos.push(payload);
    },
    [types.ON_DELETE_ESTACIONAMENTO]: (state, payload) => {
        const index = state.estacionamentos.indexOf(payload);
        state.estacionamentos.splice(index, 1);
    },
    [types.ON_UPDATE_ESTACIONAMENTO]: (state, payload) => {        
        Object.assign(state.estacionamentos[payload.index], payload.estacionamento);
    }    
};

export default mutations;