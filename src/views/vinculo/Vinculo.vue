<template>
  <v-container fluid fill-height class="my-5">
    <v-layout flex align-left>
      <v-flex xs12 sm6>
        <v-toolbar flat fill-height class="p-5 my-3 ligth-grey">
          <v-toolbar-title align-center>
            <h4>{{ formTitle }}</h4>
          </v-toolbar-title>
        </v-toolbar>

        <v-card-text>
          <v-container grid-list-md>
            <v-layout v-if="id" wrap>
              <v-flex xs12 sm3 md2>
                <v-subheader>ID</v-subheader>
              </v-flex>
              <v-flex xs12 sm6 md9>
                <v-text-field v-model="vinculo.id" readonly disabled></v-text-field>
              </v-flex>
            </v-layout>

            <v-layout>
              <v-flex xs12 sm2 md2>
                <v-subheader>Número Vaga</v-subheader>
              </v-flex>
              <v-flex xs12 sm3 md2>
                <v-text-field v-model="vinculo.vaga.numeroVaga" mask="###"></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { VINCULO_URL } from "../../utils/constants.js";
import axios from "axios";

export default {
  name: "Vinculo",
  data: () => {
    return {
      id: "",
      vinculo: null
    };
  },
  computed: {
    formTitle() {
      return this.id ? "Editar Vinculo" : "Novo Vinculo";
    }
  },
  created() {
    if (this.$route.params.id) {
      this.id = this.$route.params.id;
      this.getVinculoById(this.id);
    } else {
      this.vinculo = {
        id: "",
        vaga: {
          id: "",
          numeroVaga: 0,
          tipoVeiculo: ""
        },
        cliente: {
          id: "",
          nome: "",
          cpf: "",
          celular: "",
          veiculo: {
            id: "",
            placa: "",
            marca: "",
            modelo: "",
            ano: 0,
            tipoVeiculo: ""
          }
        },
        tarifa: {
          id: "",
          tipoTarifa: "",
          tipoVeiculo: "",
          valor: 0
        },
        dataHoraInicio: "",
        dataHoraFim: "",
        valorTotal: 0
      };
    }
  },
  methods: {
    getVinculoById(id) {
      axios.get(`${VINCULO_URL}/${id}`).then(res => {
        this.vinculo = res.data;
      });
    }
  }
};
</script>

