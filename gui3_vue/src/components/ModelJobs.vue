<template>
    
    <div>
        <h1>Jobs for {{email}}</h1>
        <table>
        <tr>
            <th>Customer</th>
            <th>Start Date</th>
            <th>Days</th>
            <th>Location</th>
            <th>Comments</th>
        </tr>
        <tr v-for="job in jobs" v-bind:key="job.customer + job.startDate">
            <td>{{job.customer}}</td>
            <td>{{job.startDate}}</td>
            <td>{{job.days}}</td>
            <td>{{job.location}}</td>
            <td>{{job.comments}}</td>
        </tr>
    </table>
    </div>
</template>

<script>
export default {
    data(){
        return{
            jobs: [],
            email: localStorage.getItem("email"),
        }

    },
    methods:{
        getModelJobs(){
            var url = "https://localhost:44368/api/Jobs/";
        fetch(url, {
                method: 'GET',
                credentials: 'include',
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem("token"),
                    'Content-Type': 'application/json'
                }})
            .then(res => res.json().then(re =>{
                this.jobs = re;
                console.log(this.jobs);
                
            } ))
            .catch(err => console.error('Error:', err));
        }
    },
    mounted(){
        this.getModelJobs();
        console.log("help")
    },
    beforeMount() {
        if(localStorage.getItem("isModel") === "false")
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



</style>