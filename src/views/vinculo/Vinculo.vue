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
              <v-flex xs12 sm3 md1>
                <v-text-field v-model="vinculo.vaga.numeroVaga" mask="###"></v-text-field>
              </v-flex>

              <v-flex xs12 sm2 md2>
                <v-subheader>Data/Hora Início</v-subheader>
              </v-flex>
              <v-flex xs12 sm5 md3>
                <v-text-field v-model="dataHoraInicio" mask="##/##/#### ##:##"></v-text-field>
              </v-flex>
            </v-layout>

            <v-layout>
              <v-flex xs12 sm2 md1>
                <v-subheader>Nome</v-subheader>
              </v-flex>
              <v-flex xs12 sm5 md5>
                <v-text-field v-model="vinculo.cliente.nome"></v-text-field>
              </v-flex>

              <v-flex xs12 sm6 md1>
                <v-subheader>CPF</v-subheader>
              </v-flex>
              <v-flex xs12 sm6 md5>
                <v-text-field v-model="vinculo.cliente.cpf" mask="###.###.###-##"></v-text-field>
              </v-flex>

              <v-flex xs12 sm6 md1>
                <v-subheader>Celular</v-subheader>
              </v-flex>
              <v-flex xs12 sm6 md5>
                <v-text-field v-model="vinculo.cliente.celular" mask="(##) ##### - ####"></v-text-field>
              </v-flex>
            </v-layout>

            <v-layout>
              <v-flex xs12 sm6 md2>
                <v-subheader>Placa</v-subheader>
              </v-flex>
              <v-flex xs12 sm6 md5>
                <v-text-field v-model="vinculo.cliente.veiculo.placa" mask="AAA-####"></v-text-field>
              </v-flex>

              <v-flex xs12 sm6 md2>
                <v-subheader>Marca</v-subheader>
              </v-flex>
              <v-flex xs12 sm6 md6>
                <v-text-field v-model="vinculo.cliente.veiculo.marca"></v-text-field>
              </v-flex>

              <v-flex xs12 sm6 md2>
                <v-subheader>Modelo</v-subheader>
              </v-flex>
              <v-flex xs12 sm6 md8>
                <v-text-field v-model="vinculo.cliente.veiculo.modelo"></v-text-field>
              </v-flex>

              <v-flex xs12 sm6 md2>
                <v-subheader>Ano</v-subheader>
              </v-flex>
              <v-flex xs12 sm6 md8>
                <v-text-field v-model="vinculo.cliente.veiculo.ano" mask="####"></v-text-field>
              </v-flex>
            </v-layout>

            <v-layout>
              <v-flex xs12 sm6 md2>
                <v-subheader>Tipo de Veiculo</v-subheader>
              </v-flex>
              <v-flex xs12 sm6 md2>
                <v-select :items="tiposVeiculo" v-model="vinculo.tarifa.tipoVeiculo"></v-select>
              </v-flex>

              <v-flex xs12 sm6 md2>
                <v-subheader>Tipo de Tarifa</v-subheader>
              </v-flex>
              <v-flex xs12 sm6 md2>
                <v-select :items="tiposTarifa" v-model="vinculo.tarifa.tipoTarifa"></v-select>
              </v-flex>
            </v-layout>

            <v-layout>
              <v-btn @click="saveVinculo">Salvar</v-btn>
              <v-btn @click="backToDashboard">Voltar</v-btn>
            </v-layout>
          </v-container>
        </v-card-text>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { VINCULO_URL } from "../../utils/constants.js";
import { mapActions } from "vuex";
import { UPDATE_VINCULO, CREATE_VINCULO } from "../../store/types";
import axios from "axios";
import moment from "moment";

export default {
  name: "Vinculo",
  data: () => {
    return {
      id: "",
      vinculo: null,
      tiposVeiculo: ["Carro", "Moto"],
      tiposTarifa: ["Hora", "Mensal"]
    };
  },
  computed: {
    formTitle() {
      return this.id ? "Editar Vinculo" : "Novo Vinculo";
    },

    dataHoraInicio: {
      get: function() {
        return moment(String(this.vinculo.dataHoraInicio)).format("DD/MM/YYYY hh:mm");
      },
      set: function(newValue) {
        if (Date.parse(newValue)) {
          this.vinculo.dataHoraInici0 = new Date(newValue).toISOString();
        }
      }
    }
  },
  created() {
    if (this.$route.params.id) {
      this.id = this.$route.params.id;
      this.getVinculoById(this.id);
    } else {
      this.vinculo = {
        vaga: {
          numeroVaga: 0,
          tipoVeiculo: ""
        },
        cliente: {
          nome: "",
          cpf: "",
          celular: "",
          veiculo: {
            placa: "",
            marca: "",
            modelo: "",
            ano: 0,
            tipoVeiculo: ""
          }
        },
        tarifa: {
          tipoTarifa: "",
          tipoVeiculo: "",
          valor: 0
        },
        dataHoraInicio: "",
        dataHoraFim: null,
        valorTotal: 0
      };
    }
  },
  methods: {
    ...mapActions({
      updateVinculo: UPDATE_VINCULO,
      createVinculo: CREATE_VINCULO
    }),

    saveVinculo() {

      let newVinculo = Object.assign({}, this.vinculo)
      
      newVinculo.cliente.veiculo.tipoVeiculo = this.vinculo.tarifa.tipoVeiculo;
      newVinculo.vaga.tipoVeiculo = this.vinculo.tarifa.tipoVeiculo;

      delete newVinculo.dataHoraInicio;
      newVinculo.dataHoraInicio = new Date();

      if (this.id) {
        this.updateVinculo(newVinculo);
      } else {
        this.createVinculo(newVinculo);
      }

      this.backToDashboard();
    },

    backToDashboard() {
      this.$router.push("/dashborad");
    },

    getVinculoById(id) {
      axios.get(`${VINCULO_URL}/${id}`).then(res => {
        this.vinculo = res.data;
      });
    }
  }
};
</script>

