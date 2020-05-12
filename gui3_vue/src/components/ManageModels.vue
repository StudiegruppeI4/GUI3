<template>
<div>
  <h1>Manage Models</h1>
  <Models/>
</div>
</template>

<script>
import Models from "./Models";

export default {
    name: "ManageModels",
    components: {
      Models
    },
    beforeMounted() {
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