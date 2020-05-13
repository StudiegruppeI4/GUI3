<template>
  <div>
      <h1>Job {{ currentJob() }}</h1>
      <table>
        <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Birthdate</th>
            <th>Delete</th>
        </tr>
        <tr v-for="model in models" v-bind:key="model.email">
            <td>{{model.firstName}}</td>
            <td>{{model.lastName}}</td>
            <td>{{model.email}}</td>
            <td>{{model.birthDate}}</td>
            <td><button @click="deleteModel(model.efModelId)">Delete</button></td>
        </tr>
    </table><br><br>
    <AddModelToJob class="modelAdd" />
  </div>
</template>

<script>
import AddModelToJob from '../views/AddModelToJob';

export default {
    name: "EditJob",
    data() {
        return {
            models: []
        }
    },
    components: {
        AddModelToJob
    },
    methods: {
        deleteModel(efModelId) {
            var url = "https://localhost:44368/api/Jobs/" + this.currentJob() + "/model/" + efModelId;
            fetch(url, {
                method: 'DELETE',
                credentials: 'include',
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem("token"),
                    'Content-Type': 'application/json'
            }})
            .then(location.reload())
            .catch(err => console.error('Error:', err));
        },
        getModels() {
            var jobModels = [];
            var url = "https://localhost:44368/api/Jobs/" + this.currentJob();
            fetch(url, {
                method: 'GET',
                credentials: 'include',
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem("token"),
                    'Content-Type': 'application/json'
            }})
            .then(res => res.json().then(re => {
                jobModels = re.jobModels;
                jobModels.forEach(m => {
                    this.models.push(m.model);
                });
            }))
            .catch(err => console.error('Error:', err));
        },
        currentJob() {
            let currentUrl = window.location.pathname;
            let jobId = currentUrl.split("/");
            return jobId[jobId.length - 1];
        }
    },
    beforeMount() {
        this.getModels();
    }
}
</script>

<style scoped>

h1, .modelAdd {
    text-align: center;
}

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
        min-width: 80px;
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