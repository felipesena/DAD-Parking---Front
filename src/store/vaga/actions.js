import Vue from 'vue';
import * as types from '../types.js';

/* eslint-disable */
const actions = {
    [types.GET_ALL_VAGAS]: async ({commit, dispatch}) => {        
        Vue.axios.get(process.env.VUE_APP_SERVER_HOST + "/api/vaga")
            .then(res => {                
                commit(types.ON_GET_VAGAS, res.data);
            });
    },
    [types.CREATE_VAGA]: async ({commit, dispatch}, payload) => {
        
    }  
};

export default actions;