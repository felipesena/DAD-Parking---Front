<template>
  <div class="my-5">
    <v-toolbar flat color="white">
      <v-toolbar-title>Vinculo</v-toolbar-title>
      <v-divider class="mx-2" inset vertical></v-divider>
      <v-spacer></v-spacer>
      <v-text-field v-model="search" append-icon="search" label="Search" single-line hide-details></v-text-field>
      <v-btn color="primary" dark class="mb-2">Criar Vinculo</v-btn>
    </v-toolbar>
    <v-data-table :headers="headers" :items="vagas" class="elevation-1" :search="search">
      <template v-slot:items="props">
        <td class="text-xs-center pr-0">{{ props.item.numeroVaga }}</td>
        <td class="text-xs-center">{{ props.item.nomeCliente }}</td>
        <td class="text-xs-center">{{ props.item.modelo }}</td>
        <td class="text-xs-center">{{ formatDate(props.item.dataHoraInicio) }}</td>
        <td class="text-xs-center">{{ formatDate(props.item.dataHoraFim) }}</td>
        <td class="text-xs-center">{{ formatPrice(props.item.valorTotal) }}</td>
        <td class="justify-center layout px-0">
          <v-icon small class="mr-2" @click="editItem(props.item)">edit</v-icon>
          <v-icon small color="success" @click="getValor(props.item)">done</v-icon>
        </td>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import * as types from '../store/types';
import moment from 'moment';

export default {
  data: () => {
    return {      
      headers: [
        {
          text: 'Numero Vaga',
          value: 'numeroVaga',
          align: 'center'
        },
        {
          text: 'Nome Cliente',
          value: 'nomeCliente', 
          align: 'center'
        },
        {
          text: 'Modelo',
          value: 'modelo',
          align: 'center'
        },
        {
          text: 'Data/Hora Inicio',
          value: 'dataHoraInicio',
          align: 'center'
        },
        {
          text: 'Data/Hora Fim',
          value: 'dataHoraFim',
          align: 'center'
        },
        {
          text: 'Valor Total',
          value: 'valorTotal',
          align: 'center'
        },
        {
          text: 'Actions',
          name: 'actions',
          sortable: false,
          align: 'center'
        }
      ],
      search: "",
      defaultItem: {
        id: null,
        tipoVeiculo: ''
      }
    };
  },
  computed: {
    ...mapGetters({
      vinculos: types.VINCULOS
    }),
    formTitle() {
      return this.editedIndex === -1 ? "Nova Vinculo" : "Editar Vinculo";
    }
  },
  created() {
    this.initialize();
  },
  methods: {
    ...mapActions({
      getAllVinculos: types.GET_ALL_VINCULOS,
      createVinculo: types.CREATE_VINCULO,
      updateVinculo: types.UPDATE_VINCULO,
      getValorTotal: types.GET_VALOR_TOTAL
    }),

    formatDate(value) {
      if(value) {
        return moment(String(value)).format('DD/MM/YYYY hh:mm');
      }
    },

    formatPrice(value) {
      if(value) {
        let val = (value/1).toFixed(2).replace('.', ',');
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
      }
    },

    initialize() {
      this.getAllVinculos();
    },

    editItem(item) {
      let editedIndex = this.vinculos.indexOf(item);
    },

    getValor(item) {
      let editedIndex = this.vinculos.indexOf(item);
    }
  }
};
</script>
