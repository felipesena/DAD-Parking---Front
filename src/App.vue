<template>
  <div id="app">
    <Header/>
  </div>
</template>

<script>
import Header from "./layouts/Header.vue";
import { mapActions } from 'vuex';

export default {
  name: "app",
  data() {
    return {
      error: false
    };
  },
  components: {
    Header
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