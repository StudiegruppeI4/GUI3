<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/manager">Manager</router-link>
      <LoginModal class="login"/>
    </div>
    <router-view />
  </div>
</template>

<script>
import LoginModal from "./views/LoginModal.vue";

export default {
  name: "app",
  components: {
    LoginModal
  }
}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#nav {
  display: flex;
  justify-content: space-around;
  align-content: stretch;
  background-color: #333;
}

#nav a {
  flex: 1;
  text-align: center;
  font-weight: bold;
  font-size: 18px;
  text-decoration: none;
  padding: 14px 16px;
  color: #f2f2f2;
}

#nav a:hover {
  background-color: #ddd;
  color: black;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
