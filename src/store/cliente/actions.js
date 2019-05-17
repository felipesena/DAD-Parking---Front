import Vue from 'vue';
import * as types from '../types.js';
import { CLIENTE_URL } from '../../utils/constants.js'; 

const actions = {
    [types.GET_ALL_CLIENTES]: async ({commit}) => {
        Vue.axios.get(CLIENTE_URL)
            .then(res => {
                commit(types.ON_GET_CLIENTES, res.data);
            });
    },
    [types.CREATE_CLIENTE]: async ({commit}, payload) => {
        Vue.axios.post(CLIENTE_URL, payload)
            .then(res => {
                commit(types.ON_CREATE_CLIENTE, res.data);
            })
    },
    [types.UPDATE_CLIENTE]: async ({commit}, payload) => {
        const updatedCliente = {
            nome: payload.cliente.nome,
            cpf: payload.cliente.cpf,
            celular: payload.cliente.celular,
            veiculo: {
                placa: payload.cliente.veiculo.placa,
                marca: payload.cliente.veiculo.marca,
                modelo: payload.cliente.veiculo.modelo,
                ano: payload.cliente.veiculo.ano,
                tipoVeiculo: payload.cliente.veiculo.tipoVeiculo
            }
        };

        Vue.axios.put(`${CLIENTE_URL}/${payload.cliente.id}`, updatedCliente)
            .then(() => {
                commit(types.ON_UPDATE_CLIENTE, payload);
            })
    },
    [types.DELETE_CLIENTE]: async ({commit}, payload) => {
        Vue.axios.delete(`${CLIENTE_URL}/${payload.id}`)
            .then(() => {
                commit(types.ON_DELETE_CLIENTE)
            })
    }
};

export default actions;