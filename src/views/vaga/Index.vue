<template>
  <div class="my-5">
    <v-toolbar flat color="white">
      <v-toolbar-title>Vaga</v-toolbar-title>
      <v-divider class="mx-2" inset vertical></v-divider>
      <v-spacer></v-spacer>
      <v-text-field v-model="search" append-icon="search" label="Search" single-line hide-details></v-text-field>
      <v-dialog v-model="dialog" max-width="500px">
        <template v-slot:activator="{ on }">
          <v-btn color="primary" dark class="mb-2" v-on="on">Criar Vaga</v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="headline">{{ formTitle }}</span>
          </v-card-title>

          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12 sm6 md2>
                  <v-subheader>ID</v-subheader>
                </v-flex>
                <v-flex xs12 sm6 md9>
                  <v-text-field v-model="editedItem.id" readonly disabled></v-text-field>                                    
                </v-flex>

                <v-flex xs12 sm6 md5>
                  <v-subheader>Tipo de Veiculo</v-subheader>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-select :items="tiposVeiculo" v-model="editedItem.tipoVeiculo" label="Tipo Veiculo"></v-select>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click="close">Cancel</v-btn>
            <v-btn color="blue darken-1" flat @click="save">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-toolbar>
    <v-data-table :headers="headers" :items="vagas" class="elevation-1">
      <template v-slot:items="props">
        <td class="text-xs-center pr-0">{{ props.item.id }}</td>
        <td class="text-xs-center">{{ props.item.tipoVeiculo }}</td>
        <td class="justify-center layout px-0">
          <v-icon small class="mr-2" @click="editItem(props.item)">edit</v-icon>
          <v-icon small @click="deleteItem(props.item)">delete</v-icon>
        </td>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import * as types from '../../store/types';

export default {
  data: () => {
    return {      
      headers: [
        {
          text: 'Id',
          value: 'id',
          align: 'center'
        },
        {
          text: 'Tipo de Veiculo',
          value: 'tipoVeiculo',
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
      dialog: false,
      editedIndex: -1,
      editedItem: {
        id: null,
        tipoVeiculo: ''
      },
      defaultItem: {
        id: null,
        tipoVeiculo: ''
      },
      tiposVeiculo: ["Moto", "Carro"]
    };
  },
  computed: {
    ...mapGetters({
      vagas: types.VAGAS
    }),
    formTitle() {
      return this.editedIndex === -1 ? "Nova Vaga" : "Editar Vaga";
    }
  },
  watch: {
    dialog(val) {
      val || this.close();
    }
  },
  created() {
    this.initialize();
  },
  methods: {
    ...mapActions({
      getAllVagas: types.GET_ALL_VAGAS,
      createVaga: types.CREATE_VAGA,
      updateVaga: types.UPDATE_VAGA,
      deleteVaga: types.DELETE_VAGA
    }),
    initialize() {
      this.getAllVagas();
    },
    editItem(item) {
      this.editedIndex = this.vagas.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {      
      confirm("Are you sure you want to delete this item?") &&
        this.deleteVaga(item);
    },

    close() {
      this.dialog = false;
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      }, 300);
    },

    async save() {
      if (this.editedIndex > -1) {
        const updatedVaga = {
          vaga: this.editedItem,
          index: this.editedIndex
        }
        await this.updateVaga(updatedVaga);
      } else {
        await this.createVaga({tipoVeiculo: this.editedItem.tipoVeiculo});
      }
      this.close();
    }
  }
};
</script>
