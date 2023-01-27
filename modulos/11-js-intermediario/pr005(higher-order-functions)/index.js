// função como parametro


const calcularAnoDeNascimento = function (idade, mesDeNascimento, imprimir){
    const mesAtual = 1
    let anoDeNascimento = 2023 - idade
    if(mesDeNascimento > mesAtual) anoDeNascimento--
    imprimir(anoDeNascimento) //chama a função insirida no parametro
}

let imprimirAnoDeNascimento = resultado =>{console.log(`Seu ano de nascimento é: ${resultado}`)}

calcularAnoDeNascimento(18, 8, imprimirAnoDeNascimento)

//função como retorno

// function multiplicar(multiplicador){
//     return function(numero){
//         return numero * multiplicador
//     }
// }

const multiplicar = multiplicador => numero => numero * multiplicador



let dobrar = multiplicar(2)
let triplicar = multiplicar(3)
let quadruplicar = multiplicar(4)


console.log(quadruplicar(5));

//somenete JS trata as funções como qualquer outro valor, por isso é possível utiliza-las como variáveis
