// adding and removing quantity

let add = document.getElementById('adding');
let mince = document.getElementById('substruction');
let quantity = document.getElementById('quantityproduct');

add.addEventListener('click', function(){
    quantity.value = +quantity.value + 1;
})
mince.addEventListener('click',function(){
    if(quantity.value > 1){
        quantity.value = +quantity.value -1;
    }
})
// regex for the contact us section 
let formulaire = document.getElementById('formulaire');
let namee = document.getElementsByClassName('name')[0];
let email = document.getElementById('exampleFormControlInput1');
let message = document.getElementById('exampleFormControlTextarea1');
let submitbtn = document.getElementById('submibutton');
// formulaire.addEventListener('submit', function(event){
// const namecheck = "/^[a-zA-Z ]{3,20}$/";
// const emailcheck = "/^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/"
// let correct = true;
// if (namee.value != namecheck ){
//     event.preventDefault();
//     namee.style.border = "2px solid red"
// }else {
//     namee.style.border ="2px solid green"
// }
// })


submitbtn.addEventListener('click', function(event){
    if(!namee.value.match("^[a-zA-Z ]{3,20}$")){
        event.preventDefault();
        namee.style.border = "2px solid red"
    }else{
        namee.style.border ="2px solid green"  
    }
    

})