<template>
  <div class="home">
    <HelloWorld msg="Welcome to the Models Management site" />
    <h3 v-show="validateToken()">{{ getEmail() }}</h3>
    <img style="max-width: 100vw;" alt="Models management" src="../assets/home_screen.png" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  },
  methods: {
    getEmail() {
      let email = localStorage.getItem("email");
      return "Now logged in as " + email;
    },
    validateToken() {
      return localStorage.getItem("token") !== 'undefined';
    }
  }
};
</script>

<style scoped>
.home {
  text-align: center;
}
</style>