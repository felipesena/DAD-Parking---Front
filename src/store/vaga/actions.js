import Vue from 'vue';
import * as types from '../types.js';
import { VAGA_URL } from '../../utils/constants.js';

/* eslint-disable */
const actions = {
    [types.GET_ALL_VAGAS]: async ({commit}) => {        
        Vue.axios.get(VAGA_URL)
            .then(res => {                
                commit(types.ON_GET_VAGAS, res.data);
            });
    },
    [types.CREATE_VAGA]: async ({commit}, payload) => {
        Vue.axios.post(VAGA_URL, payload)
            .then(res => {
                commit(types.ON_CREATE_VAGA, res.data)
            })
    },
    [types.UPDATE_VAGA]: async ({commit}, payload) => {
        Vue.axios.put(`${VAGA_URL}/${payload.vaga.id}`, { 
            tipoVeiculo: payload.vaga.tipoVeiculo,
            numeroVaga: payload.vaga.numeroVaga
        })
            .then(() => {
                commit(types.ON_UPDATE_VAGA, payload);
            })        
    },
    [types.DELETE_VAGA]: async ({commit}, payload) => {
        Vue.axios.delete(`${VAGA_URL}/${payload.id}`)
            .then(() => {
                commit(types.ON_DELETE_VAGA);
            })
    }
};

export default actions;