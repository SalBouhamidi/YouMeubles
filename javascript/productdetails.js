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