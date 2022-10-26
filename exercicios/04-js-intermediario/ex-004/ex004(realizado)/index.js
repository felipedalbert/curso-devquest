const inputTextoQualquer = document.querySelectorAll("[name='texto-qualquer']")
const inputTextoQualquer2 = document.getElementById('input1')
const corpo = document.querySelector('body')
console.log(inputTextoQualquer);
console.log(inputTextoQualquer2)

// console.log(inputTextoQualquer.values.length)
// console.log(inputTextoQualquer2.value.lenght);

corpo.addEventListener('click', validar);

function validar(){
    if(inputTextoQualquer.value !== '') {
        console.log('oi')
        inputTextoQualquer.classList.add('campo-preenchido')
    }else{
        inputTextoQualquer.classList.remove('campo-preenchido')
    }
}



// console.log(inputTextoQualquer.value) //printa undefined (valor diferente (!==) de  '')