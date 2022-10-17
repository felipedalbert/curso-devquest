// function imprimeIdade(){
//     var idade = 20
// }

// console.log(idade) // retornará erro, já que o var não vaza escopo de função

if(true){
    var tempo = 'chuva'

    function escopoTeste(){
        console.log(idade)
        if(true){
            var idade = 21
        }
    }
} 

console.log(tempo) // printará o valor de tempo no console

// if(true){
//     let temperatura = '16'
// }

// console.log(temperatura) // retornará erro, já que o let não vaza seu valor no escopo de bloco

for (var i = 0; i < 10; i++) {
    console.log(i) //para laços de repetição utilize sempre let.
}

const limitePessoas = 200;
limitePessoas = 150; //retornará erro, pois constantes não podem ter seu valor alterado.