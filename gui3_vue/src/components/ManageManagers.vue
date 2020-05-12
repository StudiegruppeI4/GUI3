<template>
<div>
  <h1>Manage managers</h1>
  <Managers/>
  
  
</div>
</template>

<script>
import Managers from "./Managers";

export default {
    name: "ManageManagers",
    components: {
      Managers
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