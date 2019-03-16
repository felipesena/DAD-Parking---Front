<template>
  <div class="hero-body" id="login">
    <div class="container has-text-centered">
      <div class="column is-4 is-offset-4">
        <h3 class="title has-text-grey">Login</h3>
        <p class="subtitle has-text-grey">Please login to proceed.</p>
        <div class="box">
          <form @submit.prevent="handleSubmit">
            <div class="field">
              <div class="control">
                <input class="input is-large" v-model="email" type="email" placeholder="Your Email" autofocus :class="{ 'is-invalid': submitted && !email }">
              </div>
            </div>

            <div class="field">
              <div class="control">
                <input class="input is-large" v-model="password" type="password" placeholder="Your Password" :class="{ 'is-invalid': submitted && !password }">
              </div>
            </div>
            <div class="field">
              <label class="checkbox">
                <input type="checkbox">
                Remember me
              </label>
            </div>
            <button class="button is-block is-info is-large is-fullwidth">Login</button>
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
export default {
  data() {
    return {
      email: "",
      password: "",
      submitted: false
    };
  }
};
</script>

