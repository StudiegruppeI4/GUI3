<template>
  <div>
     <h1>Register a Job</h1>
      <div class="form">
        <div>
            <label for="customer">Customer</label>
            <div>
                <input type="text" v-model="form.customer" 
                placeholder="Customer">
            </div>
        </div>
        <div>
            <label for="days">Days</label>
            <div>
                <input type="number" v-model="form.days" 
                placeholder="Days">
            </div>
        </div>
        <div>
            <label for="location">Location</label>
            <div>
                <input type="text" v-model="form.location" 
                placeholder="Location">
            </div>
        </div>
        <div>
            <label for="comments">Comments</label>
            <div>
                <input type="text" v-model="form.comments" 
                placeholder="Comments">
            </div>
        </div>
        <div>
            <label for="startDate">Start Date</label>
            <div>
                <input type="date" v-model="form.startDate" 
                placeholder="Start Date">
            </div>
        </div>
        <button @click="onSubmit">Register</button>
      </div>
  </div>
</template>

<script>
export default {
    name: "RegisterJob",
    data() {
        return {
            form: {
                customer: '',
                startDate: '',
                days: 0,
                location: '',
                comments: ''
            }
        }
    },
    methods: {
        onSubmit(e) {
            e.preventDefault();
            var url = "https://localhost:44368/api/Jobs";
            fetch(url, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem("token"),
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(({
                    'customer': this.form.customer,
                    'startDate':this.form.startDate,
                    'days': this.form.days,
                    'location': this.form.location,
                    'comments': this.form.comments
                })
            )})
            .then(res => res.json().then((Job) => {
                console.log(Job);
            }))
            .catch(err => console.error('Error:', err));
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

.form {
    border-radius: 5px;
    background-color: #f2f2f2;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
}
input {
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}

h1 {
    text-align: center;
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