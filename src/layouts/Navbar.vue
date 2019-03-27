<template>
  <nav>
    <v-toolbar flat app>
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">DAD Parking</span>        
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu offset-y v-if="isAuthenticated">
        <v-btn flat slot="activator" color="grey">
          <v-icon left>expand_more</v-icon>
          <span>Menu</span>
        </v-btn>
        <v-list>
          <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
            <v-list-tile-title>{{ link.text }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
      <v-btn depressed active-class="default-class none" v-if="!isAuthenticated" :to="{ name: 'home' }">
        <span>Home</span>        
      </v-btn>
      <v-btn depressed active-class="default-class none" v-if="!isAuthenticated" :to="{ name: 'login' }">
        <span>Login</span>        
      </v-btn>
      <v-btn depressed active-class="default-class none" v-if="!isAuthenticated" :to="{ name: 'register' }">
        <span>Register</span>        
      </v-btn>
      <v-btn depressed active-class="default-class none" v-if="isAuthenticated">
        <span>Sign Out</span>
        <v-icon right>exit_to_app</v-icon>
      </v-btn>      
    </v-toolbar>
    <router-view></router-view>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Header",
  data() {
    return {
      drawer: false,
      links: [{ icon: "home", text: "Home", route: "/" }]
    };
  },
  computed: {
    ...mapGetters(["isAuthenticated"])
  }
};
</script>
