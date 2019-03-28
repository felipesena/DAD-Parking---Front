<template>
  <v-container fluid fill-height class="my-5">
    <v-layout flex align-center justify-center>
      <v-flex xs12 sm6>
        <v-alert v-model="succesfulAlert" dismissible type="success">User registered succesfull</v-alert>

        <v-alert v-model="errorAlert" dismissible type="error">{{this.errorMessage}}</v-alert>

        <v-toolbar flat fill-height class="p-5 my-3 ligth-grey">
          <v-toolbar-title align-center>
            <h4>Register</h4>
          </v-toolbar-title>
        </v-toolbar>

        <v-form ref="form">
          <v-text-field clearable v-model="fullName" :rules="[rules.required]" label="Nome"></v-text-field>

          <v-text-field
            clearable
            v-model="email"
            :rules="[rules.required, rules.emailFormat]"
            label="E-mail"
          ></v-text-field>

          <v-text-field
            v-model="confirmPassword"
            :append-icon="showPassword ? 'visibility' : 'visibility_off'"
            :rules="[rules.required]"
            :type="showPassword ? 'text' : 'password'"
            name="input-10-1"
            label="Password"
            @click:append="showPassword = !showPassword"
          ></v-text-field>

          <v-text-field
            v-model="password"
            :append-icon="showConfirmPassword ? 'visibility' : 'visibility_off'"
            :rules="[rules.required]"
            :error-messages="passwordMatchError()"
            :type="showConfirmPassword ? 'text' : 'password'"
            name="input-10-1"
            label="Confirm Password"
            @click:append="showConfirmPassword = !showConfirmPassword"
          ></v-text-field>

          <v-layout align-center justify-center>
            <v-btn @click="register" large>Register</v-btn>
          </v-layout>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      errorMessage: "",
      showPassword: false,
      showConfirmPassword: false,
      succesfulAlert: false,
      errorAlert: false,
      rules: {
        required: value => !!value || "Required",
        emailFormat: value => {
          if (value.length > 0) {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return pattern.test(value) || "Invalid e-mail.";
          } else {
            return false;
          }
        }
      }
    };
  },
  methods: {
    ...mapActions(["registerUser"]),
    passwordMatchError() {
      return this.password === this.confirmPassword
        ? ""
        : "Passwords must match";
    },
    register: async function() {
      let email = this.email;
      let password = this.password;
      let name = this.fullName;

      try {
        await this.registerUser({ email, password, name }, function(response) {
          if (response.succesful) {
            this.succesfulAlert = true;
          } else {
            this.errorAlert = true;
            this.errorMessage = response.message;
          }
        });
      } catch (err) {
        this.errorMessage = err;
        this.errorAlert = true;
      }
    }
  }
};
</script>

