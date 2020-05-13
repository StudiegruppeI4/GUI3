<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/model/viewJobs" v-show="isModel()">Model</router-link>
      <router-link v-show="isManager()" to="/manager"
        >Manager</router-link
      >
      
      <LoginModal class="login" v-on:isManager="jwtDecode" />
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
    jwtDecode() {
      let token = {};
      let t = localStorage.getItem("token");
      token.raw = t;
      token.header = JSON.parse(window.atob(t.split('.')[0]));
      token.payload = JSON.parse(window.atob(t.split('.')[1]));
      if (token.payload["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"] == "Manager")
      {
        localStorage.setItem("isManager", true);
        localStorage.setItem("isModel",false);
        
        
      }else if(token.payload["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"] == "Model")
      {
        localStorage.setItem("isModel", true);
        localStorage.setItem("isManager", false);
        
        
      }
      else
      {
        localStorage.setItem("isManager", false);
        localStorage.setItem("isModel", false);
        
      }
      localStorage.setItem("ModelId",token.payload["ModelId"]);
      
    },
    isManager() {
      return localStorage.getItem("isManager") == "true";
    },
    isModel(){
      return localStorage.getItem("isModel") == "true";
    }
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
