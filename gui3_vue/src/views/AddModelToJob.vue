<template>
    <div>
        <button onclick="document.getElementById('id02').style.display='block'; document.getElementById('error').innerText = '';" style="width:auto;">Add model</button>

<div id="id02" class="modal">
  
  <form class="modal-content animate" method="post">
    <div class="imgcontainer">
      <span onclick="document.getElementById('id02').style.display='none'" class="close" title="Close Modal">&times;</span>
      <h2>Add model to job</h2>
    </div>

    <div class="container">
        <div>
            <select v-model="selected">
                <option v-for="model in models" v-bind:key="model.email" v-bind:value="model.efModelId">{{ model.firstName + " " + model.lastName }}</option>
            </select>
        </div>
        <br><br>
        <p id="error"></p>
        
      <button type="submit" @click="addModel">Add model</button>
    </div>
  </form>
</div>
    </div>
</template>

<script>
var modal = document.getElementById('id02');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

export default {
  name: "AddModelToJob",
  data() {
    return {
      models: [],
      selected: {}
    }
  },
  methods: {
        getModels() {
            var url = "https://localhost:44368/api/Models";
            fetch(url, {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem("token"),
                    'Content-Type': 'application/json'
                }})
            .then(res => res.json().then(re => {
                this.models = re;
            }))
            .catch(err => console.error('Error:', err));
        },
        addModel(e) {
            e.preventDefault();
            var url = "https://localhost:44368/api/Jobs/" + this.currentJob() + "/model/" + this.selected;
            fetch(url, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem("token"),
                    'Content-Type': 'application/json'
            }})
            .then(res => res.json().then(re => {
                console.log(re);
                document.getElementById('id02').style.display='none';
                document.getElementById('error').innerText = '';
                location.reload();
            }))
            .catch(document.getElementById("error").innerText = "That name is already on the job");
        },
        currentJob() {
            let currentUrl = window.location.pathname;
            let jobId = currentUrl.split("/");
            return jobId[jobId.length - 1];
        }
    },
    beforeMount() {
        this.getModels();
    }
}
</script>

<style scoped>

select {
    font-size: 20px;
}

body {font-family: Arial, Helvetica, sans-serif;}

/* Full-width input fields */
input[type=text], input[type=password] {
  width: 100%;
  padding: 14px 20px;
  margin: 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

/* Set a style for all buttons */
button {
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 0;
  border: none;
  cursor: pointer;
  width: 30%;
  font-size: 18px;
  font-weight: bold;
}

button:hover {
  opacity: 0.8;
}

/* Extra styles for the cancel button */
.cancelbtn {
  width: auto;
  padding: 10px 18px;
  background-color: #f44336;
}

/* Center the image and position the close button */
.imgcontainer {
  text-align: center;
  margin: 24px 0 12px 0;
  position: relative;
}

img.avatar {
  width: 40%;
  border-radius: 50%;
}

.container {
  padding: 16px;
}

span.psw {
  float: right;
  padding-top: 16px;
}

/* The Modal (background) */
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
  padding-top: 60px;
}

/* Modal Content/Box */
.modal-content {
  background-color: #fefefe;
  margin: 5% auto 15% auto; /* 5% from the top, 15% from the bottom and centered */
  border: 1px solid #888;
  width: 80%; /* Could be more or less, depending on screen size */
}

/* The Close Button (x) */
.close {
  position: absolute;
  right: 25px;
  top: 0;
  color: #000;
  font-size: 35px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: red;
  cursor: pointer;
}

/* Add Zoom Animation */
.animate {
  -webkit-animation: animatezoom 0.6s;
  animation: animatezoom 0.6s
}

@-webkit-keyframes animatezoom {
  from {-webkit-transform: scale(0)} 
  to {-webkit-transform: scale(1)}
}
  
@keyframes animatezoom {
  from {transform: scale(0)} 
  to {transform: scale(1)}
}

/* Change styles for span and cancel button on extra small screens */
@media screen and (max-width: 300px) {
  span.psw {
     display: block;
     float: none;
  }
  .cancelbtn {
     width: 100%;
  }
}

</style>