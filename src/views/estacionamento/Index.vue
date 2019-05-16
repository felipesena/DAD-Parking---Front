<template>
  <div class="my-5">
    <v-toolbar flat color="white">
      <v-toolbar-title>Estacionamento</v-toolbar-title>
      <v-divider class="mx-2" inset vertical></v-divider>
      <v-spacer></v-spacer>
      <v-text-field v-model="search" append-icon="search" label="Search" single-line hide-details></v-text-field>
      <v-dialog v-model="dialog" max-width="500px">
        <template v-slot:activator="{ on }">
          <v-btn color="primary" dark class="mb-2" v-on="on">Criar Estacionamento</v-btn>
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

                <v-flex xs12 sm6 md3>
                  <v-subheader>Nome</v-subheader>
                </v-flex>
                <v-flex xs12 sm6 md8>
                  <v-text-field v-model="editedItem.nome"></v-text-field>
                </v-flex>

                <v-flex xs12 sm6 md3>
                  <v-subheader>Endereço</v-subheader>
                </v-flex>
                <v-flex xs12 sm6 md8>
                  <v-text-field v-model="editedItem.endereco"></v-text-field>
                </v-flex>

                <v-flex xs12 sm6 md3>
                  <v-subheader>Telefone</v-subheader>
                </v-flex>
                <v-flex xs12 sm6 md8>
                  <v-text-field v-model="editedItem.telefone" mask="(##) ##### - ####"></v-text-field>
                </v-flex>

                <v-flex xs12 sm6 md3>
                  <v-subheader>Vagas Carro</v-subheader>
                </v-flex>
                <v-flex xs12 sm6 md3>
                  <v-text-field v-model="editedItem.totalVagasCarro" mask="###"></v-text-field>
                </v-flex>

                <v-flex xs12 sm6 md3>
                  <v-subheader>Vagas Moto</v-subheader>
                </v-flex>
                <v-flex xs12 sm6 md3>
                  <v-text-field v-model="editedItem.totalVagasMoto" mask="###"></v-text-field>
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
    <v-data-table :headers="headers" :items="estacionamentos" class="elevation-1" :search="search">
      <template v-slot:items="props">
        <td class="text-xs-center pr-0">{{ props.item.id }}</td>
        <td class="text-xs-center">{{ props.item.nome }}</td>
        <td class="text-xs-center">{{ props.item.endereco }}</td>
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
          text: 'Nome',
          value: 'nome',
          align: 'center'
        },
        {
          text: 'Endereço',
          value: 'endereco',
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
        nome: '',
        endereco: '',
        telefone: '',
        totalVagasMoto: 0,
        totalVagasCarro: 0
      },
      defaultItem: {
         id: null,
        nome: '',
        endereco: '',
        telefone: '',
        totalVagasMoto: 0,
        totalVagasCarro: 0
      }
    };
  },
  computed: {
    ...mapGetters({
      estacionamentos: types.ESTACIONAMENTOS
    }),
    formTitle() {
      return this.editedIndex === -1 ? "Novo Estacionamento" : "Editar Estacionamento";
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
      getAllEstacionamentos: types.GET_ALL_ESTACIONAMENTOS,
      createEstacionamento: types.CREATE_ESTACIONAMENTO,
      updateEstacionamento: types.UPDATE_ESTACIONAMENTO,
      deleteEstacionamento: types.DELETE_ESTACIONAMENTO
    }),
    initialize() {
      this.getAllEstacionamentos();
    },
    editItem(item) {
      this.editedIndex = this.estacionamentos.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {      
      confirm("Tem certeza que deseja deletar esse item?") &&
        this.deleteEstacionamento(item);
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
        const updatedEstacionamento = {
          estacionamento: this.editedItem,
          index: this.editedIndex
        }
        await this.updateEstacionamento(updatedEstacionamento);
      } else {
        const newEstacionamento = {
          nome: this.editedItem.nome,
          endereco: this.editedItem.endereco,
          telefone: this.editedItem.telefone,
          totalVagasMoto: this.editedItem.totalVagasMoto,
          totalVagasCarro: this.editedItem.totalVagasCarro
        }
        await this.createEstacionamento(newEstacionamento);
      }
      this.close();
    }
  }
};
</script>
