<template>
  <h1>Manage Jobs</h1>
</template>

<script>
import Jobs from "./Jobs"
export default {
  name: "ManageJobs",
  components: {
        Jobs
      },
      methods: {
        getJobs() {
          var url = "https://localhost:44368/api/Jobs";
          fetch(url, {
                  method: 'GET',
                  credentials: 'include',
                  headers: {
                      'Authorization': 'Bearer ' + localStorage.getItem("token"),
                      'Content-Type': 'application/json'
                  }})
              .then(res => res.json().then(re => console.log(re)))
              .catch(err => console.error('Error:', err));
        }
      },
      beforeMount() {
          if(localStorage.getItem("isManager") == "false")
          {
              location.href = "/";
          }
      }
}
</script>

<style scoped>
h1 {
  text-align: center;
}
</style>