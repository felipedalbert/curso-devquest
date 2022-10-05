const pesoPessoa = Number(prompt(`Digite seu peso : `)) ;
const alturaPessoa = Number(prompt(`Digite sua altura`)) ;
const imc = pesoPessoa / (alturaPessoa * alturaPessoa ) ;

if (imc < 18.5) {
    alert(`Seu IMC é ${imc.toFixed(1)} e você está muito abaixo do peso !`)
} else if (( imc >= 18.5 ) && ( imc <= 24.9 )){
    alert(`Seu imc é ${imc.toFixed(1)} e você está no peso ideal ! `)
} else if (( imc >= 24.9 ) && ( imc <= 29.9)){
    alert(`Seu imc é ${imc.toFixed(1)} e você está acima do peso ideal! `)
}