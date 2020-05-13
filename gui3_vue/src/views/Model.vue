<template>
<div>
    <h1 id="Title">Model</h1>
    <div class="Model">
        <div>
            
            <button @click="viewJobs">View jobs</button>
            <button @click="addExpense">Add expense</button>
            
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
        viewJobs(e) {
            e.preventDefault();
            window.location.href = "/model/viewJobs";
        },
        addExpense(e) {
            e.preventDefault();
            window.location.href = "/model/addExpense";
        },
        
    },
    beforeMount() {
        if(localStorage.getItem("isManager") == "true")
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
    .Model{
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        

    }
    .Model div{
        min-width: 15vw;
        min-height: 15vh;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        border: lightgrey 4px solid;
        border-radius: 4px;
    }
    
    .Model div button {
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
    .Model div button:hover {
        
        background-color: #2e9444;
    }
    .Model div button:active {
        position:relative;
        top:1px;
    }
    .Model div h3{
        margin: 0;
    }

</style>