<template>
  <div>
    <h1>Manage Jobs</h1>
    <table>
        <tr>
            <th>Customer</th>
            <th>Start Date</th>
            <th>Days</th>
            <th>Location</th>
            <th>Comments</th>
            <th>Edit</th>
        </tr>
        <tr v-for="job in jobs" v-bind:key="job.customer + job.startDate">
            <td>{{job.customer}}</td>
            <td>{{job.startDate}}</td>
            <td>{{job.days}}</td>
            <td>{{job.location}}</td>
            <td>{{job.comments}}</td>
            <td><button @click="editJob">Edit</button></td>
        </tr>
    </table>
  </div>
</template>

<script>
export default {
name: "Jobs",
data() {
  return {
    jobs: [],
  }
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
            .then(res => res.json().then(re => this.jobs = re))
            .catch(err => console.error('Error:', err));
        },
        editJob() {
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
            this.getJobs();
        }
}

</script>

<style scoped>

h1 {
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