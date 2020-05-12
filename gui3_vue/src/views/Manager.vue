<template>
<div>
    <h1 id="Title">Manager</h1>
    <div class="Manager">
        <div>
            <h3>Models</h3>
            <button @click="registerModel">Register new model</button>
            <button @click="manageModels">Manage models</button>
            
        </div>
        <div>
            <h3>Manager</h3>
            <button @click="registerManager">Register new manager</button>
            <button @click="manageManagers">Manage managers</button>
        </div>
        <div>
            <h3>Jobs</h3>
            <button @click="registerJob">Register new job</button>
            <button @click="viewJobs">View jobs</button>
        </div>
    </div>

</div>
</template>

<script>
export default {
    name: "Manager",
    data() {
        return {
            
        }
    },
    methods: {
        registerModel(e) {
            e.preventDefault();
            window.location.href = "/manager/registermodel";
        },
        registerManager(e) {
            e.preventDefault();
            window.location.href = "/manager/registermanager";
        },
        registerJob(e) {
            e.preventDefault();
            window.location.href = "/manager/registerjob";
        },
        manageModels(e) {
            e.preventDefault();
            window.location.href = "/manager/managemodels";
        },
        manageManagers(e) {
            e.preventDefault();
            window.location.href = "/manager/managemanagers";
        },
        viewJobs(e) {
            e.preventDefault();
            window.location.href = "/manager/jobs";
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

    #Title{
        text-align: center;
        
        margin-bottom: 20px;
    }
    .Manager{
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        

    }
    .Manager div{
        min-width: 15vw;
        min-height: 15vh;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        border: lightgrey 4px solid;
        border-radius: 4px;
    }
    
    .Manager div button {
        box-shadow:inset 0px 1px 0px 0px #caefab;
        
        background-color:#4CAF50;
        border-radius:6px;
        min-width: 180px;
        display:inline-block;
        cursor:pointer;
        color:white;
        font-family:Arial;
        font-size:15px;
        font-weight:bold;
        padding:6px 6px;
        
    }
    .Manager div button:hover {
        
        background-color: #2e9444;
    }
    .Manager div button:active {
        position:relative;
        top:1px;
    }
    .Manager div h3{
        margin: 0;
    }

</style>