// adding and removing quantity

let add = document.getElementById('adding');
let mince = document.getElementById('substruction');
let quantity = document.getElementById('quantityproduct');
let isValide = false;

add.addEventListener('click', function () {
    quantity.value = +quantity.value + 1;
})
mince.addEventListener('click', function () {
    if (quantity.value > 1) {
        quantity.value = +quantity.value - 1;
    }
})
// regex for the contact us section 
let formulaire = document.getElementById('formulaire');
let namee = document.getElementById("name");
let email = document.getElementById("email");
let message = document.getElementById('exampleFormControlTextarea1');
let submitbtn = document.getElementById('submibutton');
console.log(submitbtn);
submitbtn.addEventListener('click', function (event) {
    let x = 0;
    let y=0;
    if (!namee.value.match("^[a-zA-Z ]{3,20}$")) {
        console.log("name is not valid");
        namee.style.border = "2px solid red";
        x = 0;
    } else {
        console.log("name is true");
        namee.style.border = "2px solid green";
        x = 1
    }
    if (!email.value.match("^[a-zA-Z0-9-_]+[@]+[a-z]+[.]+[a-z]{2,3}$")) {
        email.style.border = "2px solid red";
        console.log("email is not valid");
        y = 0;
    } else {
        console.log("email is true")
        email.style.border = "2px solid green"
        y = 1
    }
    if (x === 1 && y === 1) {
        Swal.fire(
            'We got your back',
            'Thank you for contacting us, we will reach up to you very soon',
            'success'
        )
    }

});
