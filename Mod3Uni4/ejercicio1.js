const caja1 = document.getElementById('caja1');
const caja2 = document.getElementById('caja2');
const caja3 = document.getElementById('caja3');
const body = document.getElementsByTagName('body')[0];

caja1.addEventListener('click', function(){
    body.style.backgroundColor = 'blue';
})

caja2.addEventListener('click', function(){
    body.style.backgroundColor = 'lightblue';
})

caja3.addEventListener('click', function(){
    body.style.backgroundColor = 'cyan';
})