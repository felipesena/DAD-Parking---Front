import Vue from 'vue';
import * as types from '../types.js';
import { ESTACIONAMENTO_URL } from '../../utils/constants.js';

/* eslint-disable */
const actions = {
    [types.GET_ALL_ESTACIONAMENTOS]: async ({commit}) => {        
        Vue.axios.get(ESTACIONAMENTO_URL)
            .then(res => {                
                commit(types.ON_GET_ESTACIONAMENTOS, res.data);
            });
    },
    [types.CREATE_ESTACIONAMENTO]: async ({commit}, payload) => {
        Vue.axios.post(ESTACIONAMENTO_URL, payload)
            .then(res => {
                commit(types.ON_CREATE_ESTACIONAMENTO, res.data)
            })
    },
    [types.UPDATE_ESTACIONAMENTO]: async ({commit}, payload) => {
        const updatedEstacionamento = {
            nome: payload.estacionamento.nome,
            endereco: payload.estacionamento.endereco,
            telefone: payload.estacionamento.telefone,
            totalVagasMoto: payload.estacionamento.totalVagasMoto,
            totalVagasCarro: payload.estacionamento.totalVagasCarro          
          }

        Vue.axios.put(`${ESTACIONAMENTO_URL}/${payload.estacionamento.id}`, updatedEstacionamento)
            .then(() => {
                commit(types.ON_UPDATE_ESTACIONAMENTO, payload);
            });
    },
    [types.DELETE_ESTACIONAMENTO]: async ({commit}, payload) => {
        Vue.axios.delete(`${ESTACIONAMENTO_URL}/${payload.id}`)
            .then(() => {
                commit(types.ON_DELETE_ESTACIONAMENTO);
            });
    }
};

export default actions;