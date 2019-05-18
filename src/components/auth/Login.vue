<template>
  <v-container fluid fill-height class="my-5">
    <v-layout flex align-center justify-center>
      <v-flex xs12 sm6>
        <v-toolbar flat fill-height class="p-5 my-3 ligth-grey">
          <v-toolbar-title align-center>
            <h4>Login</h4>
          </v-toolbar-title>
        </v-toolbar>

        <v-form ref="form" v-model="formValid">
          <v-text-field
            v-model="email"
            :rules="[rules.required, rules.email]"
            label="E-mail"
            required
          ></v-text-field>

          <v-text-field
            v-model="password"
            :append-icon="showPassword ? 'visibility' : 'visibility_off'"
            :rules="[rules.required]"
            :type="showPassword ? 'text' : 'password'"
            name="input-10-1"
            label="Password"
            hint="At least 6 characters"
            counter
            required
            @click:append="showPassword = !showPassword"
          ></v-text-field>

          <v-layout align-center justify-center>
            <v-btn @click="login" large>Login</v-btn>
          </v-layout>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";
import { LOGIN_INTO_SERVER } from "./../../store/types.js";

export default {
  data() {
    return {
      email: "",
      password: "",
      formValid: false,
      error: false,
      showPassword: false,
      rules: {
        required: value => !!value || "Required",        
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Invalid e-mail.";
        }
      }
    };
  },
  methods: {
    login: async function() {      
      if (this.formValid) {        
        let email = this.email;
        let password = this.password;
        try {
          await this.loginIntoServer({ email, password });
          this.$router.push("/dashborad");
        } catch (err) {
          this.error = true;
        }
      }
    },
    ...mapActions({
      loginIntoServer: LOGIN_INTO_SERVER
    })
  }
};
</script>

