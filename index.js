document.getElementById("btn").addEventListener("click", calculate)
let costEl = document.getElementById("cost-el")
let foodPrice = document.getElementById("food-select")
let transportPrice = document.getElementById("transport-select")
let total = document.getElementById("cost-el")
let error = document.getElementById("error")

function calculate() {

    if(transportPrice.value && foodPrice.value){
        total.innerHTML = `$${+foodPrice.value + +transportPrice.value}`
    } else if(!transportPrice.value && !foodPrice.value) {
        error.innerHTML = "No input"
        setTimeout(() => error.innerHTML = "", 3000)
    } else if(foodPrice.value === "") {
        error.innerHTML = "Input food price"
        total.innerHTML = `$0`
        setTimeout(() => error.innerHTML = "", 3000)
    } else if(transportPrice.value === "") {
        error.innerHTML = "Input transport price"
        total.innerHTML = `$0`
        setTimeout(() => error.innerHTML = "", 3000)
    }

}