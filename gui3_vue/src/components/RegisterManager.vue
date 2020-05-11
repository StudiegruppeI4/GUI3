<template>
  <div>
    <h1>Register a new manager</h1>
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
        <input type="submit" @click="onSubmit">
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
            .then(res => res.json().then((token) => {
                console.log(token);
            }))
            .catch(err => console.error('Error:', err));
        }
    }
}
</script>

<style>

</style>