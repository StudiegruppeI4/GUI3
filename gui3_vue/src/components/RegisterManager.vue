<template>
  <div>
    <h1>Register a new manager</h1>
    <div class="form">
        <div>
            <label for="firstName">First name</label>
            <div>
                <input type="text" v-model="form.firstName" 
                placeholder="First name">
            </div>
        </div>
        <div>
            <label for="lastName">Last name</label>
            <div>
                <input type="text" v-model="form.lastName" 
                placeholder="Last name">
            </div>
        </div>
        <div>
            <label for="email">Email</label>
            <div>
                <input type="email" v-model="form.email" 
                placeholder="Email">
            </div>
        </div>
        <div>
            <label for="password">Password</label>
            <div>
                <input type="password" v-model="form.password" 
                placeholder="Password">
            </div>
        </div>
        <button @click="onSubmit">Register</button>
    </div>
  </div>
</template>

<script>
export default {
    name: "RegisterManager",
    data() {
      return {
        form: {
                firstName: '',
                lastName: '',
                email: '',
                password: ''
            }
      }
    },
    methods: {
        onSubmit(e) {
            e.preventDefault();
            var url = "https://localhost:44368/api/Managers";
            fetch(url, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem("token"),
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(({
                    'firstName': this.form.firstName,
                    'lastName':this.form.lastName,
                    'email': this.form.email,
                    'password': this.form.password
                })
            )})
            .then(res => res.json().then((manager) => {
                console.log(manager);
                location.href = "/manager/managemanagers";
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
