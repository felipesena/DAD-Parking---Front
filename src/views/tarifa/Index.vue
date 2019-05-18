<template>
  <div class="my-5">
    <v-toolbar flat color="white">
      <v-toolbar-title>Tarifa</v-toolbar-title>
      <v-divider class="mx-2" inset vertical></v-divider>
      <v-spacer></v-spacer>
      <v-text-field v-model="search" append-icon="search" label="Search" single-line hide-details></v-text-field>
      <v-dialog v-model="dialog" max-width="500px">
        <template v-slot:activator="{ on }">
          <v-btn color="primary" dark class="mb-2" v-on="on">Criar Tarifa</v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="headline">{{ formTitle }}</span>
          </v-card-title>

          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12 sm6 md5>
                  <v-subheader>Tipo de Veiculo</v-subheader>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-select :items="tiposVeiculo" v-model="editedItem.tipoVeiculo"></v-select>
                </v-flex>

                <v-flex xs12 sm6 md5>
                  <v-subheader>Tipo de Tarifa</v-subheader>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-select :items="tiposTarifa" v-model="editedItem.tipoTarifa"></v-select>
                </v-flex>

                <v-flex xs12 sm6 md5>
                  <v-subheader>Valor</v-subheader>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.valor" mask="######"></v-text-field>                   
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
    <v-data-table :headers="headers" :items="tarifas" class="elevation-1" :search="search">
      <template v-slot:items="props">        
        <td class="text-xs-center">{{ props.item.tipoTarifa }}</td>
        <td class="text-xs-center">{{ props.item.tipoVeiculo }}</td>
        <td class="text-xs-center">{{ formatPrice(props.item.valor) }}</td>
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
          text: "Tipo Tarifa",
          value: "tipoTarifa",
          align: "center"
        },
        {
          text: "Tipo Veículo",
          value: "tipoVeiculo",
          align: "center"
        },
        {
          text: "Valor",
          value: "valor",
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
        tipoVeiculo: "",
        tipoTarifa: "",
        valor: 0
      },
      defaultItem: {
        id: null,
        tipoVeiculo: "",
        tipoTarifa: "",
        valor: 0
      },
      tiposVeiculo: ["Carro", "Moto"],
      tiposTarifa: ["Hora", "Mensal"]
    };
  },
  computed: {
    ...mapGetters({
      tarifas: types.TARIFAS
    }),
    formTitle() {
      return this.editedIndex === -1 ? "Novo Tarifa" : "Editar Tarifa";
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
      getAllTarifas: types.GET_ALL_TARIFAS,
      createTarifa: types.CREATE_TARIFA,
      updateTarifa: types.UPDATE_TARIFA,
      deleteTarifa: types.DELETE_TARIFA
    }),
    initialize() {
      this.getAllTarifas();
    },
    editItem(item) {
      this.editedIndex = this.tarifas.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      confirm("Tem certeza que deseja deletar esse item?") &&
        this.deleteTarifa(item);
    },

    close() {
      this.dialog = false;
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      }, 300);
    },

    formatPrice(value) {
      if (value) {
        let val = (value / 1).toFixed(2).replace(".", ",");
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
      }
    },

    async save() {
      if (this.editedIndex > -1) {
        const updatedTarifa = {
          tarifa: this.editedItem,
          index: this.editedIndex
        };
        await this.updateTarifa(updatedTarifa);
      } else {
        const newTarifa = {
          tipoVeiculo: this.editedItem.tipoVeiculo,
          tipoTarifa: this.editedItem.tipoTarifa,
          valor: this.editedItem.valor
        };
        await this.createTarifa(newTarifa);
      }
      this.close();
    }
  }
};
</script>
