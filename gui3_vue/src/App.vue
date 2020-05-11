<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link v-show="validateManager()" to="/manager"
        >Manager</router-link
      >
      <LoginModal class="login" />
    </div>
    <router-view />
  </div>
</template>

<script>
import LoginModal from "./views/LoginModal.vue";

export default {
  name: "app",
  data() {
    return {
      managers: undefined,
    };
  },
  components: {
    LoginModal,
  },
  methods: {
    //Validates that token is not undefined.
    validateToken() {
      return localStorage.getItem("token") !== "undefined";
    },
    //Get all managers from API.
    async getManagers() {
      var url = "https://localhost:44368/api/Managers";
      const reponse = await fetch(url, {
        method: "GET",
        credentials: "include",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
          "Content-Type": "application/json",
        },
      });
      const json = await reponse.json();
      console.log(json);
    },

    //Validates wether logged user is a manager by examining all managers from API.
    async validateManager() {
      if (this.validateToken()) {
        console.log(this.managers);
        if (this.managers === undefined) this.getManagers();
        if (
          this.managers.find((model) => {
            console.log(model);
            model.email === localStorage.getItem("email");
          }) !== undefined
        ) {
          return true;
        }
        return false;
      }
    },
  },
};
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
