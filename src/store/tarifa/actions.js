import Vue from 'vue';
import * as types from '../types.js';
import { TARIFA_URL } from '../../utils/constants.js';

const actions = {
    [types.GET_ALL_TARIFAS]: async ({commit}) => {
        Vue.axios.get(TARIFA_URL)
            .then(res => {
                commit(types.ON_GET_TARIFAS, res.data);
            });
    },
    [types.CREATE_TARIFA]: async ({commit}, payload) => {
        Vue.axios.post(TARIFA_URL, payload)
            .then(res => {
                commit(types.ON_CREATE_TARIFA, res.data)
            })
    },
    [types.UPDATE_TARIFA]: async ({commit}, payload) => {
        Vue.axios.put(`${TARIFA_URL}/${payload.tarifa.id}`, { 
            tipoVeiculo: payload.tarifa.tipoVeiculo,
            numeroVaga: payload.tarifa.numeroVaga
        })
            .then(() => {
                commit(types.ON_UPDATE_TARIFA, payload);
            })        
    },
    [types.DELETE_TARIFA]: async ({commit}, payload) => {
        Vue.axios.delete(`${TARIFA_URL}/${payload.id}`)
            .then(() => {
                commit(types.ON_DELETE_TARIFA);
            })
    }
};

export default actions;