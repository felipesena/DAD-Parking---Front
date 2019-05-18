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
    [types.CREATE_VINCULO]: async ({commit}, payload) => {
        Vue.axios.post(VINCULO_URL, payload)
            .then(res => {
                commit(types.ON_CREATE_VINCULO, res.data)
            })
    },
    [types.GET_VALOR_TOTAL]: async ({commit}, payload) => {
        Vue.axios.get(VINCULO_URL + `/valorTotal/${payload.vinculo.id}`)
            .then(res => {
                let response = {
                    index: payload.index, 
                    vinculo: res.data};

                commit(types.ON_GET_VALOR_TOTAL, response);
            })
    },
    [types.UPDATE_VINCULO]: async ({commit}, payload) => {
        Vue.axios.put(`${VINCULO_URL}/${payload.id}`, updatedVinculo)
            .then(() => {
                commit(types.ON_UPDATE_VINCULO, payload);
            });
    }
};

export default actions;