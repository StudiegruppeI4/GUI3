<template>
    <section>
        <div>
            <label for="email">Email</label>
            <div>
                <input type="text" v-model="form.email" 
                placeholder="Email">
            </div>
        </div>
        <div>
            <label for="pass">Password</label>
            <div>
                <input type="text" v-model="form.pass" 
                placeholder="Password">
            </div>
        </div>
        <input type="submit" @click="onSubmit">
    </section>
</template>

<script>
export default {
    name: 'Login',
    data() {
        return {
            form: {
                email: '',
                pass: ''
            }
        }
    },
    methods: {
        onSubmit(e) {
            e.preventDefault();
            var url = "https://localhost:44368/api/Account/login";
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(({
                    'email': this.form.email,
                    'password': this.form.pass
                })
            )})
            .then(res => res.json().then((token) => {
                localStorage.setItem("token", token.jwt);
                window.location.href = "/";
            }))
            .catch(err => console.error('Error:', err));
        }
    }
}
</script>

<style>

</style>
