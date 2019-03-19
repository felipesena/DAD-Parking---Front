<template>
  <div class="hero-body" id="login">
    <div class="container has-text-centered">
      <div class="column is-4 is-offset-4">
        <h3 class="title has-text-grey">Login</h3>
        <p class="subtitle has-text-grey">Please login to proceed.</p>
        <div class="box">
          <form @submit.prevent="login">
            <div class="field">
              <div class="control">
                <input class="input is-large" v-model="email" type="email" placeholder="Your Email" autofocus :class="{ 'is-invalid': !email }">
              </div>
            </div>

            <div class="field">
              <div class="control">
                <input class="input is-large" v-model="password" type="password" placeholder="Your Password" :class="{ 'is-invalid': !password }">
              </div>
            </div>
            <div class="field">
              <label class="checkbox">
                <input type="checkbox">
                Remember me
              </label>
            </div>
            <button class="button is-block is-info is-large is-fullwidth" type="submit">Login</button>
          </form>
        </div>
        <p class="has-text-grey">
          <router-link :to="{ name: 'register' }">Sign Up</router-link>          
        </p>
      </div>
    </div>    
    <router-view></router-view>
  </div>  
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      email: "",
      password: "",
      error: false
    };
  },
  methods: {
    login: async function() {
      let email = this.email
      let password = this.password
      try{
        await this.loginIntoServer({email, password})        
        this.$router.push('/')
      } catch(err) {
        this.error = true
      }      
    },
    ...mapActions(['loginIntoServer'])
  }
};
</script>

