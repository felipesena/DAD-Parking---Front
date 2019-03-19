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
      <v-btn flat color="grey" v-if="!isAuthenticated">
        <span><router-link :to="{ name: 'home' }">Home</router-link></span>        
      </v-btn>
      <v-btn flat color="grey" v-if="!isAuthenticated">
        <span><router-link :to="{ name: 'login' }">Login</router-link></span>        
      </v-btn>
      <v-btn flat color="grey" v-if="!isAuthenticated">
        <span><router-link :to="{ name: 'register' }">Register</router-link></span>        
      </v-btn>
      <v-btn flat color="grey" v-if="isAuthenticated">
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

<style scoped lang="scss">
.nav {
  display: flex;
  list-style: none;
  padding: 15px 0;
  margin: 0;
  justify-content: flex-end;
  background: #f5f8fa;
  border-bottom: 1px solid lightgrey;
  margin-bottom: 24px;
}
.nav a {
  color: #636b6f;
  padding: 0 25px;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.1rem;
  text-decoration: none;
  text-transform: uppercase;
}
</style>
