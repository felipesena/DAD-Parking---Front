import Vue from 'vue';
import * as types from '../types.js';
import { VINCULO_URL } from '../../utils/constants.js';

/* eslint-disable */
const actions = {
    [types.GET_ALL_VINCULOS]: async ({commit}) => {
        Vue.axios.get(VINCULO_URL)
            .then(res => {
                commit(types.ON_GET_VINCULO, res.data);
            });
    },
    [types.GET_VALOR_TOTAL]: async ({commit}, payload) => {
        Vue.axios.get(VINCULO_URL + `/valorTotal/${payload.id}`)
            .then(res => {
                commit()
            })
    }
};

export default actions;