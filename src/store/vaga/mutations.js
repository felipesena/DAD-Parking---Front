import * as types from '../types.js';

const mutations = {
    [types.ON_GET_VAGAS]: (state, payload) => {        
        state.vagas = payload
    }
};

export default mutations;