const inputTextoQualquer = document.querySelectorAll("[name='texto-qualquer']")
const inputTextoQualquer2 = document.getElementById('input1')
const corpo = document.querySelector('body')
console.log(inputTextoQualquer);
console.log(inputTextoQualquer2)

// console.log(inputTextoQualquer.values.length)
// console.log(inputTextoQualquer2.value.lenght);

corpo.addEventListener('click', validar);

function validar(){
    if(inputTextoQualquer[0].value !== '') {
        console.log('oi')
        inputTextoQualquer[0].classList.add('campo-preenchido')
    }else{
        inputTextoQualquer[0].classList.remove('campo-preenchido')
    }
}



// console.log(inputTextoQualquer.value) //printa undefined (valor diferente (!==) de  '')