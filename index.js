var foods = document.getElementById("foods");
var orders = document.getElementById("orders");
var dishs = document.getElementById("dish");
var trackBtn = document.getElementById("trackBtn");



foods.addEventListener("click", function(){
    foods.style.color="red"; 
    orders.style.color="white";
    dishs.style.color="white";
})

dishs.addEventListener("click", function(){
    foods.style.color="white"; 
    orders.style.color="white";
    dishs.style.colpor="red";
})

orders.addEventListener("click", function(){
    foods.style.color="white"; 
    orders.style.color="red";
    dishs.style.color="white";
})

var logBtn = document.getElementById("logBtn");

logBtn.addEventListener("click",function(){
    document.querySelector(".loginpage").style.display="block";
})


var loged = document.getElementById("logedBtn");

loged.addEventListener("click", function(){


var email = document.getElementById("name");
var pass = document.getElementById("pass");


if(email.value == "" || pass.value == ""){
alert("Please Enter Email Password")
}else{
    alert("You Loged In")
    document.querySelector(".loginpage").style.display="none";

}

})


trackBtn.addEventListener("click", function(){
    document.querySelector(".tracking").style.display="flex";
    document.getElementById("food").style.display="none";
    document.getElementById("order").style.display="none";
    document.getElementById("dish").style.display="none";
    document.querySelector(".main").style.display="none";
    document.getElementById("card2").style.display="none";
})