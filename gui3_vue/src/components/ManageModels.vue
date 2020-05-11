<template>
<div>
  <h1>Manage Models</h1>
  <button @click="getModels">Get all models</button>
</div>
</template>

<script>
export default {
    name: "ManageModels",
    methods: {
      getModels(e) {
        e.preventDefault();
        var url = "https://localhost:44368/api/Models";
        fetch(url, {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem("token"),
                'Content-Type': 'application/json'
        }})
        .then(res => res.json().then((token) => {
            console.log(token);
        }))
        .catch(err => console.error('Error:', err));
      }
    }
}
</script>

<style>

</style>