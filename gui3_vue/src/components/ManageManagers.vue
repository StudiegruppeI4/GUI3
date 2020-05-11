<template>
<div>
  <h1>Manage managers</h1>
  <button @click="getManagers">Get all managers</button>
</div>
</template>

<script>
export default {
    name: "ManageManagers",
    methods: {
      getManagers() {
        var url = "https://localhost:44368/api/Managers";
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
    }
}
</script>

<style>

</style>