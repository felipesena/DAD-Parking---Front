<template>
  <v-app>
    <Navbar/>    
  </v-app> 
</template>

<script>
import Navbar from "./layouts/Navbar.vue";
import { mapActions } from 'vuex';

export default {
  name: "app",
  data() {
    return {
      error: false
    };
  },
  components: {
    Navbar
  },
  methods: {
    ...mapActions(["initialLoad"])
  },
  async mounted() {
    try {          
      await this.initialLoad();
    } catch(err) {
      this.error = true          
    }
  }
};
</script>