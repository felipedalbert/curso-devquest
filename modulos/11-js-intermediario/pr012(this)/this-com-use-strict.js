// 'use strict';
// // use stric evita o vazamento do escopo do this para outra o escopo de uma outra função

// console.log(window);
// console.log(window === this)

// this.name = 'João'
// function saudar() {
//     console.log(`this no contexto da função ${this}`)
//     console.log(`Olá ${this.name}`)
// }

// saudar()





//this em metodo (mais utilizado)

let usuario = {
    nome: 'João',
    despedir: function(){
        console.log(`Adeus, ${this.nome}`)

        console.log(`this.nome no contexto do metodo`)
    }
}

usuario.despedir()


let comida = {
    nome: 'Brócolis',
    temperatura: 0,
}

// comida.cozinhar = function (comidaParaCozinhar, temperaturaDeCozimento){
//     comidaParaCozinhar.temperatura = temperaturaDeCozimento
// }

// comida.cozinhar(comida, 100)

comida.cozinhar = function (temperaturaDeCozimento){
    console.log('this no contexto do objeto comida', this)
    this.temperatura = temperaturaDeCozimento
} // forma simplificada com this e sem necessiddade do primeiro parametro (comidaParaCozinhar)

// console.log(comida)

comida.cozinhar(100)

console.log(comida)