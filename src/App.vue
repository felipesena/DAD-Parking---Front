<template>
  <v-app>
    <Navbar/>    
  </v-app> 
</template>

<script>
import Navbar from "./layouts/Navbar.vue";
import { INITIAL_LOAD, IS_AUTHENTICATED } from "./store/types.js"
import { mapActions, mapGetters } from 'vuex';

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
  computed: {
    ...mapGetters({
      isAuthenticated: IS_AUTHENTICATED
    })
  },
  async mounted() {    
    try {          
      if(!this.isAuthenticated){
        await this.initialLoad();
      }      
    } catch(err) {
      this.error = true          
    }
  }
};
</script>