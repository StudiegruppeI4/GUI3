<template>
    
    <div>
        <h1 @click="log">Jobs for {{email}}</h1>
        <table>
        <tr>
            <th>Customer</th>
            <th>Start Date</th>
            <th>Days</th>
            <th>Location</th>
            <th>Comments</th>
            <th>Expenses</th>
        </tr>
        <tr v-for="job in jobs" v-bind:key="job.customer + job.startDate">
            <td>{{job.customer}}</td>
            <td>{{job.startDate}}</td>
            <td>{{job.days}}</td>
            <td>{{job.location}}</td>
            <td>{{job.comments}}</td>
            <td id="expenseTable">
                <ExpenseModal v-bind:ModelId="ModelId" v-bind:JobId="job.efJobId"/>
                <button @click="ToggleExpenseBool">{{expenseShowBool ?"Hide":"Show"}}</button>
                <div v-show="expenseShowBool" v-for="expense in expenses" v-bind:key="expense.efExpenseId" >
                    <div v-if="expense.jobId == job.efJobId">
                        
                        <p>Expense #{{expense.efExpenseId}}</p>
                        <p>Description: {{expense.text}}</p>
                        <p>Amount: {{expense.amount + "$"}}</p>
                        
                    </div>
                </div>
              
              
            </td>
        </tr>
        
        
    </table>
    </div>
</template>

<script>
import ExpenseModal from "../views/ExpenseModal";
export default {
    data(){
        return{
            jobs: [],
            expenses:[],
            email: localStorage.getItem("email"),
            ModelId: localStorage.getItem("ModelId"),
            expenseShowBool: false,
        }

    },
    components:{
        ExpenseModal,
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
                
                
            } ))
            .catch(err => console.error('Error:', err));
        },
        getModelExpenses(){
            var url = "https://localhost:44368/api/Expenses/model/"+localStorage.getItem("ModelId");
        fetch(url, {
                method: 'GET',
                credentials: 'include',
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem("token"),
                    'Content-Type': 'application/json'
                }})
            .then(res => res.json().then(re =>{
                this.expenses = re;
                
               
                
            } ))
            .catch(err => console.error('Error:', err));
        },
        log(){
            console.log(this.jobs);
            console.log("Expense");
            console.log(this.expenses)
        },
        ToggleExpenseBool(){
            this.expenseShowBool = !this.expenseShowBool;
        },
        
    },

    mounted(){
        this.getModelJobs();
        this.getModelExpenses();
        
        
    },
    beforeMount() {
        if(localStorage.getItem("isModel") === "false")
        {
            location.href = "/";
        }
    },
    

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
    font-size: 20px;
}

td,th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
}

#expenseTable div{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    font-size: 12px;
    
}
#expenseTable div div{
    display: flex;
    flex-direction: column;
    min-height: 5wh;
    border: solid lightslategray 1px;
    padding-left: 10px;

}
button {
  background-color: #4CAF50;
  color: white;
  padding-top: 14px;
  padding-bottom: 14px;
  width: 100%;
  font-size: 18px;
  font-weight: bold;
}
button:hover {
  opacity: 0.8;
}


</style>