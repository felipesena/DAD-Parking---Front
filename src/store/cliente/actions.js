import Vue from 'vue';
import * as types from '../types.js';
import { CLIENTE_URL } from '../../utils/constants.js'; 

const actions = {
    [types.GET_ALL_CLIENTES]: async ({commit}) => {
        Vue.axios.get(CLIENTE_URL)
            .then(res => {
                commit(types.ON_GET_CLIENTES, res.data);
            });
    }
};

export default actions;