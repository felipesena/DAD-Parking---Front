import * as types from '../types.js';

const mutations = {
    [types.ON_GET_VINCULO]: (state, payload) => {
        if(payload) {
            state.vinculos = payload;
        }
    }
};

export default mutations;