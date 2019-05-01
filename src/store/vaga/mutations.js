import * as types from '../types.js';

const mutations = {
    [types.ON_GET_VAGAS]: (state, payload) => {
        if(payload) {
            state.vagas = payload
        }          
    },
    [types.ON_CREATE_VAGA]: (state, payload) => {
        state.vagas.push(payload);
    },
    [types.ON_DELETE_VAGA]: (state, payload) => {
        const index = state.vagas.indexOf(payload);
        state.vagas.splice(index, 1);
    },
    [types.ON_UPDATE_VAGA]: (state, payload) => {        
        Object.assign(state.vagas[payload.index], payload.vaga);
    }    
};

export default mutations;