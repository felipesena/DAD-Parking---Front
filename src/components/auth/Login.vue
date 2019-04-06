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
          <v-text-field v-model="email" :rules="[rules.required]" label="E-mail" required></v-text-field>

          <v-text-field
            v-model="password"
            :append-icon="showPassword ? 'visibility' : 'visibility_off'"
            :rules="[rules.required, rules.min]"
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
        min: v => v.length >= 6 || "Min 6 characters"
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
          this.$router.push("/");
        } catch (err) {
          this.error = true;
        }
      }
    },
    ...mapActions(["loginIntoServer"])
  }
};
</script>

