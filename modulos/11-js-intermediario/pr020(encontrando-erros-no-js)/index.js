// let valorBoleto = 100;

// console.log(valorBolet) // retorna erro de referencia

// console.log(valorBoleto);

let inputTelefone = document.getElementById('telefone');

inputTelefone.disabled = true;

function habilitarTelefone(){
    if (inputTelefone.disabled === true){
        inputTelefone.disabled = false;
    } else if (inputTelefone.disabled === false){
        inputTelefone.disabled = true;
    }
    
}