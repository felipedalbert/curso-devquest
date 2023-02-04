let pessoa = { nome: 'Felipe', sobrenome: 'Dalbert', idade: 18 }
// let nome = pessoa.nome
// let idade = pessoa.idade

// console.log(nome)
// console.log(idade)

let {nome: nome, sobrenome:sobrenome, idade: idade} = pessoa

console.log(nome, sobrenome, idade)

const numeros = [1, 2, 3]

const [um, dois, tres] = numeros

console.log(um, dois, tres)