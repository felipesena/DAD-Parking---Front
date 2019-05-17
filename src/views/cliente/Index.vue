<template>
  <div class="my-5">
    <v-toolbar flat color="white">
      <v-toolbar-title>Cliente</v-toolbar-title>
      <v-divider class="mx-2" inset vertical></v-divider>
      <v-spacer></v-spacer>
      <v-text-field v-model="search" append-icon="search" label="Search" single-line hide-details></v-text-field>
      <v-dialog v-model="dialog" max-width="500px">
        <template v-slot:activator="{ on }">
          <v-btn color="primary" dark class="mb-2" v-on="on">Criar Cliente</v-btn>
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
              </v-layout>

              <v-layout wrap>
                <v-flex xs12 sm6 md3>
                  <v-subheader>Nome</v-subheader>
                </v-flex>
                <v-flex xs12 sm6 md8>
                  <v-text-field v-model="editedItem.nome"></v-text-field>
                </v-flex>

                <v-flex xs12 sm6 md3>
                  <v-subheader>CPF</v-subheader>
                </v-flex>
                <v-flex xs12 sm6 md8>
                  <v-text-field v-model="editedItem.cpf" mask="###.###.###-##"></v-text-field>
                </v-flex>

                <v-flex xs12 sm6 md3>
                  <v-subheader>Celular</v-subheader>
                </v-flex>
                <v-flex xs12 sm6 md8>
                  <v-text-field v-model="editedItem.celular" mask="(##) ##### - ####"></v-text-field>
                </v-flex>

                <v-container fill-height fluid>
                  <v-layout fill-height>
                    <v-flex xs12 align-end flexbox>
                      <span class="title">Veiculo</span>
                    </v-flex>
                  </v-layout>
                </v-container>

                <v-flex xs12 sm6 md3>
                  <v-subheader>Placa</v-subheader>
                </v-flex>
                <v-flex xs12 sm6 md8>
                  <v-text-field v-model="editedItem.veiculo.placa" mask="AAA-####"></v-text-field>
                </v-flex>

                <v-flex xs12 sm6 md3>
                  <v-subheader>Marca</v-subheader>
                </v-flex>
                <v-flex xs12 sm6 md8>
                  <v-text-field v-model="editedItem.veiculo.marca"></v-text-field>
                </v-flex>

                <v-flex xs12 sm6 md3>
                  <v-subheader>Modelo</v-subheader>
                </v-flex>
                <v-flex xs12 sm6 md8>
                  <v-text-field v-model="editedItem.veiculo.modelo"></v-text-field>
                </v-flex>

                <v-flex xs12 sm6 md3>
                  <v-subheader>Ano</v-subheader>
                </v-flex>
                <v-flex xs12 sm6 md8>
                  <v-text-field v-model="editedItem.veiculo.ano" mask="####"></v-text-field>
                </v-flex>

                <v-container fill-height fluid>
                  <v-layout fill-height>
                    <v-flex xs12 align-center flexbox>
                      <v-select
                        :items="tiposVeiculo"
                        v-model="editedItem.veiculo.tipoVeiculo"
                        label="Tipo Veiculo"
                      ></v-select>
                    </v-flex>
                  </v-layout>
                </v-container>
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
    <v-data-table :headers="headers" :items="clientes" class="elevation-1" :search="search">
      <template v-slot:items="props">
        <td class="text-xs-center pr-0">{{ props.item.id }}</td>
        <td class="text-xs-center">{{ props.item.nome }}</td>
        <td class="text-xs-center">{{ props.item.veiculo.modelo }}</td>
        <td class="justify-center layout px-0">
          <v-icon small class="mr-2" @click="editItem(props.item)">edit</v-icon>
          <v-icon small @click="deleteItem(props.item)">delete</v-icon>
        </td>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import * as types from "../../store/types";

export default {
  data: () => {
    return {
      headers: [
        {
          text: "Id",
          value: "id",
          align: "center"
        },
        {
          text: "Nome",
          value: "nome",
          align: "center"
        },
        {
          text: "Modelo",
          value: "veiculo.modelo",
          align: "center"
        },
        {
          text: "Actions",
          name: "actions",
          sortable: false,
          align: "center"
        }
      ],
      search: "",
      dialog: false,
      editedIndex: -1,
      editedItem: {
        id: null,
        nome: "",
        celular: "",
        cpf: "",
        veiculo: {
          placa: "",
          marca: "",
          modelo: "",
          ano: 0,
          tipoVeiculo: ""
        }
      },
      defaultItem: {
        id: null,
        nome: "",
        celular: "",
        cpf: "",
        veiculo: {
          placa: "",
          marca: "",
          modelo: "",
          ano: 0,
          tipoVeiculo: ""
        }
      },
      tiposVeiculo: ["Moto", "Carro"]
    };
  },
  computed: {
    ...mapGetters({
      clientes: types.CLIENTES
    }),
    formTitle() {
      return this.editedIndex === -1 ? "Novo Cliente" : "Editar Cliente";
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
      getAllClientes: types.GET_ALL_CLIENTES,
      createCliente: types.CREATE_CLIENTE,
      updateCliente: types.UPDATE_CLIENTE,
      deleteCliente: types.DELETE_CLIENTE
    }),
    initialize() {
      this.getAllClientes();
    },
    editItem(item) {
      this.editedIndex = this.clientes.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      confirm("Tem certeza que deseja deletar esse item?") &&
        this.deleteCliente(item);
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
        const updatedCliente = {
          cliente: this.editedItem,
          index: this.editedIndex
        };
        await this.updateCliente(updatedCliente);
      } else {
        const newCliente = {
          nome: this.editedItem.cliente.nome,
          cpf: this.editedItem.cliente.cpf,
          celular: this.editedItem.cliente.celular,
          veiculo: {
            placa: this.editedItem.cliente.veiculo.placa,
            marca: this.editedItem.cliente.veiculo.marca,
            modelo: this.editedItem.cliente.veiculo.modelo,
            ano: this.editedItem.cliente.veiculo.ano,
            tipoVeiculo: this.editedItem.cliente.veiculo.tipoVeiculo
          }
        };
        await this.createEstacionamento(newCliente);
      }
      this.close();
    }
  }
};
</script>
