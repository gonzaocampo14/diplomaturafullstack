const restante = document.getElementById('caract');
const maximo = 20;

function contadorCaract(a){
    let largo = a.value.length
    if(largo > maximo){
        texto.style.color = 'red';
        restante.style.color = 'red';
        restante.innerHTML= a.value.length+' el texto excede el maximo de caracteres';
    }
    else{ 
    restante.innerHTML= a.value.length+' caracteres';
    restante.style.color = '#000'
    texto.style.color = '#000'
    }
}