<template>
  <div class="hero-body">
    <div class="container has-text-centered">
      <div class="column is-4 is-offset-4">
        <h3 class="title has-text-grey">Register</h3>
        <div class="box">
          <form @submit.prevent="handleSubmit">
            <div class="field">
              <div class="control">
                <input class="input is-large" v-model="email" type="username" placeholder="Your Name" autofocus :class="{ 'is-invalid': submitted && !username }">
              </div>
            </div>

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
            <button class="button is-block is-info is-large is-fullwidth">Register</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      email: "",
      password: "",
      submitted: false
    };
  }
};
</script>

