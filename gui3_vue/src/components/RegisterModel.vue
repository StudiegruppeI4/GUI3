<template>
  <section>
        <div>
            <label for="firstName">First name</label>
            <div>
                <input type="text" v-model="form.model.firstName" 
                placeholder="First name">
            </div>
        </div>
        <div>
            <label for="lastName">Last name</label>
            <div>
                <input type="text" v-model="form.model.lastName" 
                placeholder="Last name">
            </div>
        </div>
        <div>
            <label for="email">Email</label>
            <div>
                <input type="email" v-model="form.model.email" 
                placeholder="Email">
            </div>
        </div>
        <div>
            <label for="password">Password</label>
            <div>
                <input type="password" v-model="form.model.password" 
                placeholder="Password">
            </div>
        </div>
        <div>
            <label for="birthDate">Birthday</label>
            <div>
                <input type="date" v-model="form.model.birthDate" 
                placeholder="Birthday">
            </div>
        </div>
        <input type="submit" @click="onSubmit">
    </section>
</template>

<script>
import Model from '../models/Model.model';

export default {
    name: "RegisterModel",
    data() {
        return {
            form: {
                model: Model
            }
        }
    },
    methods: {
        onSubmit(e) {
            e.preventDefault();
            console.log(this.form.model.email);
        }
    }
}
</script>

<style>

</style>