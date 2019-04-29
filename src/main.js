import Vue from 'vue';
import Vuex from 'vuex';
import './plugins/vuetify';
import App from './App.vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import router from './router';
import auth from './store/auth/index.js';
import cliente from './store/cliente/index.js';
import estacionamento from './store/estacionamento/index.js';
import tarifa from './store/tarifa/index.js';
import vaga from './store/vaga/index.js';
import vinculo from './store/vinculo/index.js';

Vue.config.productionTip = false

Vue.use(VueAxios, axios);
Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    namespaced: true,
    auth,
    cliente,
    estacionamento,
    tarifa,
    vaga,
    vinculo
  }
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
