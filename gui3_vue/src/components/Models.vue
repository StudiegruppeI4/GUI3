<template>
  <div>
    <table>
        <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Birthdate</th>
            <th>Edit</th>
        </tr>
        <tr v-for="model in models" v-bind:key="model.email">
            <td>{{model.firstName}}</td>
            <td>{{model.lastName}}</td>
            <td>{{model.email}}</td>
            <td>{{model.birthDate}}</td>
            <td><button @click="editModel">Edit</button></td>
        </tr>
    </table>
  </div>
</template>

<script>
export default {
    Name: "Models", 
    data() {
        return {
            models: [],

        }
    },
    methods: {
        getModels() {
        var url = "https://localhost:44368/api/Models";
        fetch(url, {
                method: 'GET',
                credentials: 'include',
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem("token"),
                    'Content-Type': 'application/json'
                }})
            .then(res => res.json().then(re => this.models = re))
            .catch(err => console.error('Error:', err));
        },
        editModel() {
            alert("Not part of the assignment ;)")
        }
    },
        beforeMount() {
        if(localStorage.getItem("isManager") == "false")
        {
            location.href = "/";
        }
        },
        mounted() {
            this.getModels();
        }

}

</script>

<style scoped>

table {
    border-collapse: collapse;
    width: 90%;
    margin: auto;
}

td,th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
}

button {
        box-shadow:inset 0px 1px 0px 0px #caefab;
        
        background-color:#4CAF50;
        border-radius:6px;
        min-width: 100px;
        display:inline-block;
        cursor:pointer;
        color:white;
        font-family:Arial;
        font-size:15px;
        font-weight:bold;
        padding:6px 6px;
        
}
button:hover {
        
        background-color: #2e9444;
    }
button:active {
        position:relative;
        top:1px;
    }

</style>