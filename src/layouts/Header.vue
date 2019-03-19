<template>
  <div id="app">
    <ul class="nav">
      <li><router-link :to="{ name: 'home' }">Home</router-link></li>      
      <li v-if="isAuthenticated"><router-link :to="{ name: 'vagas' }">Vagas</router-link></li>
      <li v-if="!isAuthenticated"><router-link :to="{ name: 'login' }">Login</router-link></li>
      <li v-if="!isAuthenticated"><router-link :to="{ name: 'register' }">Register</router-link></li>
      <a class="nav-item is-tab" v-if="isAuthenticated">Log out</a> 
    </ul>

    <transition name="router-animation" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Header',
  computed: {
    ...mapGetters(["isAuthenticated"])
  }
}
</script>

<style scoped lang="scss">

  .nav {
    display: flex;
    list-style: none;
    padding: 15px 0;
    margin: 0;
    justify-content: flex-end;
    background: #F5F8FA;
    border-bottom: 1px solid lightgrey;
    margin-bottom: 24px;
  }
  .nav a {
    color: #636b6f;
    padding: 0 25px;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: .1rem;
    text-decoration: none;
    text-transform: uppercase;
  }
</style>
