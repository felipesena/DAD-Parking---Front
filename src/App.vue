<template>
  <v-app>
    <Navbar/>    
  </v-app> 
</template>

<script>
import Navbar from "./layouts/Navbar.vue";
import { INITIAL_LOAD } from "./store/types.js"
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
    ...mapActions({
      initialLoad: INITIAL_LOAD
    })
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