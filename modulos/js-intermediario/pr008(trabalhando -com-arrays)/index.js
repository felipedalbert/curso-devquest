let frutas = ['banana', 'maça', 'laranja', 'pêra']

// for(let i = 0; i < frutas.length; i++){
//     console.log(`Fruta: ${frutas[i]}`);
// }

frutas.forEach(item =>{ //(item, indice, array) - iteração com arrays
    console.log(`Fruta: ${item}`)
})

frutas.push('manga') //empurra mais um item no final array

console.log(frutas)

frutas.unshift('Morango') //adiciona mais um item no inicio do array

console.log(frutas)

frutas.pop() //retira o ultimo item do array

console.log(frutas)

frutas.shift() //retira o primeiro item do array

console.log(frutas)



console.log(frutas.indexOf('laranja')) //indica o índice de um item no array