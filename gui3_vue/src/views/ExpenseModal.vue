<template>
    <div>
        <button onclick="document.getElementById('id02').style.display='block'" style="width:auto;">Add Expense</button>

<div id="id02" class="modal">
  
  <form class="modal-content animate" method="post">
    <div class="imgcontainer">
      <span onclick="document.getElementById('id02').style.display='none'" class="close" title="Close Modal">&times;</span>
    </div>

    <div class="container">
      <label for="description"><b>Description</b></label>
      <input type="text" placeholder="Enter Description" name="description" v-model="form.text" required>

      <label for="amount"><b>Amount</b></label>
      <input type="Number" placeholder="Enter Amount" name="amount" v-model="form.amount" required>
        
      <button type="submit" @click="onSubmit">Add Expense to job</button>
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
  name: "Add Expense",
  props:["ModelId", "JobId"
  ],
  data() {
    return {
      form: {
        text: '',
        amount: '',
        
      }
    }
  },
  methods: {
        onSubmit(e) {
            e.preventDefault();
            var url = "https://localhost:44368/api/Expenses";
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(({
                    'text': this.form.text,
                    'amount': this.form.amount,
                    'modelId': this.ModelId,
                    'jobId': this.JobId,
                    
                })
            )})
            .then(res => res.json().then(() => {
                
                document.getElementById('id02').style.display='none';
                
                location.reload();
            }))
            .catch(err => console.error('Error:', err));
        }
    }
}
</script>

<style scoped>

body {font-family: Arial, Helvetica, sans-serif;}
input[type=text], input[type=Number] {
  width: 100%;
  padding: 14px 20px;
  margin: 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}
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
  width: 100%;
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