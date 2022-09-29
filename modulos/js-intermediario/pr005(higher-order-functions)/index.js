// função como parametro


const calcularAnoDeNascimento = function (idade, mesDeNascimento, imprimir){
    const mesAtual = 8
    let anoDeNascimento = 2022 - idade
    if(mesDeNascimento > mesAtual) anoDeNascimento--
    imprimir(anoDeNascimento) //chama a função insirida no parametro
}

let imprimirAnoDeNascimento = resultado =>{console.log(`Seu ano denascimento é: ${resultado}`)}

calcularAnoDeNascimento(18, 8, imprimirAnoDeNascimento)

//função como retorno


function multiplicar(multiplicador){
    return function(numero){
        return numero * multiplicador
    }
}

let dobrar = multiplicar(2)
let triplicar = multiplicar(3)
let quadruplicar = multiplicar(4)

console.log(quadruplicar(3));