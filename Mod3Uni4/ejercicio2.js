function validarCaract() {
    const largoValido = validarLargo(document.form.texto.value, 5)

    if (largoValido == false) {
        alert ('El texto ingresado cumple con los requisitos');
    } else {
        alert ('El texto ingresado no cumple con el máximo de caracteres');
    }
    
}

function validarLargo(textarea, largo){
    return textarea.length > largo
}