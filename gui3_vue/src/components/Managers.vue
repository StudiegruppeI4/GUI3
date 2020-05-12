<template>
  <div>
    <table>
        <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Edit</th>
        </tr>
        <tr v-for="manager in managers" v-bind:key="manager.email">
            <td>{{manager.firstName}}</td>
            <td>{{manager.lastName}}</td>
            <td>{{manager.email}}</td>
            <td><button @click="editManager">Edit</button></td>
        </tr>
    </table>
  </div>
</template>

<script>
export default {
    Name: "Managers", 
    data() {
        return {
            managers: [],

        }
    },
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
            .then(res => res.json().then(re => this.managers = re))
            .catch(err => console.error('Error:', err));
        },
        editManager() {
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
            this.getManagers();
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