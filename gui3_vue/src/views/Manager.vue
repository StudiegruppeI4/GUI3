<template>
<div>
  <h1>Manager</h1>
  <button @click="registerModel">Register new model</button><br><br>
  <button @click="registerManager">Register new manager</button><br><br>
  <button @click="registerJob">Register new job</button><br><br>
  <button @click="manageModels">Manage models</button><br><br>
  <button @click="manageManagers">Manage managers</button><br><br>
  <button @click="viewJobs">View jobs</button>
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
    }
}
</script>

<style>

</style>