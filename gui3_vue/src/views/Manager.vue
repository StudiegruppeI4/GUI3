<template>
<div>
  <h1>Manager</h1>
  <button @click="registerModel">Register new model</button>
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
        }
    }
}
</script>

<style>

</style>